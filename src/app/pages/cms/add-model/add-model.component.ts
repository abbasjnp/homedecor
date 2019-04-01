import { Component, OnInit,AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
import { HttpServiceService } from '../../../services/http-service.service';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
interface City {
  name: string,
  code: string
}

export interface CL {
  category_id:number;
  category_name:any;

}
@Component({
  selector: 'app-add-model',
  templateUrl: './add-model.component.html',
  styleUrls: ['./add-model.component.scss']
})
export class AddModelComponent implements OnInit,AfterViewInit {
  getCategoryValue;
  addModel: FormGroup;
  msgs: any = [];
  panelOpenState = false;
  text: string;
  results = []
  imageUpload;
  threedAndroidUrl;
  threedIosUrl;
  category: number = -1;
  subcategory: number = -1;
  available: any;
  categoryList=[];
  subCategoryList=[];
  constructor(public fb: FormBuilder, public httpService: HttpServiceService) { }

  categoryControl = new FormControl('',[Validators.required]);
  filteredCategory: Observable<string[]>;

  subCategoryControl = new FormControl('',[Validators.required]);
  filteredSubCategory:Observable<string[]>

  toppings = new FormControl();

  //toppingList: string[] = ['Metal', 'Glass', 'Wood', 'New Texture'];
  availableIn:string[];
  

  ngOnInit() {
    this.addModel = this.fb.group({
      categoryControl: [''],
      subcategory: [''],
      available: [''],
      length: ['', [Validators.required]],
      height: ['', [Validators.required]],
      base: ['', [Validators.required]],
      modal: ['', [Validators.required]],
      image: [''],
      
    })
    this.watchEditInput();
     

    this.filteredCategory = this.categoryControl.valueChanges
    .pipe(
      startWith(''),
        map(value => typeof value === 'string' ? value : value.category_name),
        map(name => name ? this._filterCategory(name) : this.categoryList.slice())
        
    );
   
    this.httpService.GetRequest(this.httpService.base_path + "get-category" ).subscribe((res) => {
      console.log(res,"full response")
      this.categoryList = res[0].json.category;
      console.log(this.categoryList);
      this.availableIn = res[0].json.texturecategory;
      console.log(this.availableIn,"aaaaaaaaaaaaa");
    }, (error) => {
      console.log(error)
    })

   
    
   

    // var a = [1, 1, 2, 3, 4, 5, 1];
    // for (let i = 0; i < a.length; i++) {
    //   if (a[i] == a[i + 1]) {
    //     let temp = a[i];
    //     a[i] = a[i + 1];
    //     a[i + 1] = temp;
    //     i = i - 2;

    //   }
    // }
    // console.log(a,"sort")
    //console.log('add model');
  }
  ngAfterViewInit(){
    this.filteredSubCategory = this.subCategoryControl.valueChanges
    .pipe(
      startWith(''),
      map(value=>typeof value ==='string'?value:value.name),
      map(name=>name?this._filterSubCategory(name):this.subCategoryList.slice())

    )

  }
  onLoad(value){
    if(value===0){
    this.filteredCategory = this.categoryControl.valueChanges
    .pipe(
      startWith(''),
      map(value => typeof value === 'string' ? value : value.category_name),
        map(name => name ? this._filterCategory(name) : this.categoryList.slice())
        
    ); 
    }
    if(value===1) {
      this.filteredSubCategory = this.subCategoryControl.valueChanges
    .pipe(
      startWith(''),
      map(value=>typeof value ==='string'?value:value.name),
      map(name=>name?this._filterSubCategory(name):this.subCategoryList.slice())

    )
    }

  }
  
  private _filterCategory(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.categoryList.filter(option => option.category_name.toLowerCase().indexOf(filterValue) === 0);
  }

  displayFn(category?): string | undefined {
    return category ? category.category_name : undefined;
  }

  getSubCategory(categoryId){
    this.category=categoryId;
    console.log(this.category,"cateee")
    // console.log(categoryId,"iiiii");
     this.httpService.GetRequest(this.httpService.base_path + "get-category/" + categoryId+'/').subscribe((res) => {
     
      this.subCategoryList = res[0].json.subcategory;
      console.log(this.subCategoryList);
   
    }, (error) => {
      console.log(error)
    })
  
   }
   private _filterSubCategory(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.subCategoryList.filter(option => option.subcategory_name.toLowerCase().indexOf(filterValue) === 0);
  }

  displayFn2(category?): string | undefined {
    return category ? category.subcategory_name : undefined;
  }
  getSubCategoryKey(subCategoryId){
    this.subcategory=subCategoryId;
    console.log(this.subcategory,"ssssssub");
  }

  // search(event, id) {
  //   if (id == 0) {
  //     this.httpService.GetRequest(this.httpService.base_path + "product_category/?search=" + event.query).subscribe((res) => {
  //       this.results = res[0].json.product_category_list
  //     }, (error) => {
  //       console.log(error)
  //     })
  //   } else if (id == 1) {
  //     this.httpService.GetRequest(this.httpService.base_path + "product_subcategory/?category_id=" + this.category + "&search=" + event.query).subscribe((res) => {
  //       this.results = res[0].json.product_subcategory_list;
  //       console.log(this.results, "=-=-=")
  //     }, (error) => {
  //       console.log(error)
  //     })
  //   }
  //   else if (id == -1) {
  //     this.httpService.GetRequest(this.httpService.base_path + "texture_category/?search=" + event.target.value).subscribe((res) => {
  //       this.results = [];
  //       let data = res[0].json.texture_cat_list;
  //       for (let i = 0; i < data.length; i++) {
  //         let mkrd = { label: data[i].label, value: { id: data[i].id, name: data[i].label } }
  //         this.results.push(mkrd)
  //       }
  //     }, (error) => {
  //       console.log(error)
  //     })
  //   }

  // }

  uploadImage(event, type) {
    console.log(type, 'type=---')
    if (type == 'simple model') {
      let files = event.target.files;
      if (files.length > 0) {
        let reader = new FileReader();
        reader.onloadend = () => {
          this.imageUpload = { img: files[0], base: reader.result }
          console.log('RESULT', this.imageUpload)
        }
        reader.readAsDataURL(files[0]);
      }
    }
    else if (type == '3d model android') {
      let threedAndroidUrl = event.target.files;
      if (threedAndroidUrl.length > 0) {
        let reader = new FileReader();
        reader.onloadend = () => {
          this.threedAndroidUrl = { img: threedAndroidUrl[0], base: reader.result }
          console.log('RESULT', this.threedAndroidUrl)
        }
        reader.readAsDataURL(threedAndroidUrl[0]);
      }
    }
    else if (type == '3d model iOS') {
      let threedIosUrl = event.target.files;
      if (threedIosUrl.length > 0) {
        let reader = new FileReader();
        reader.onloadend = () => {
          this.threedIosUrl = { img: threedIosUrl[0], base: reader.result }
          console.log('RESULT', this.threedIosUrl)
        }
        reader.readAsDataURL(threedIosUrl[0]);
      }
    }
  }

  cancelImage() {
    alert("alert")
  }
 
  submitForm(info) {
    // console.log(this.addModel.value.length,"lenght");
    // console.log(this.addModel.value.height,"height");
    // console.log(this.category,"categoryy");
    // console.log(this.subcategory,"subcategoryyyyyyyyyyy");
    
    if (this.addModel.valid &&this.categoryControl.valid && this.subCategoryControl.valid && this.category && this.subcategory && this.imageUpload != undefined && this.threedAndroidUrl && this.threedIosUrl) {
      this.addModel.value.category = this.category
      this.addModel.value.subcategory = this.subcategory
     // this.addModel.value.available = this.available;
     this.addModel.value.available = this.toppings.value;
    // console.log(this.addModel.value.category,this.addModel.value.subcategory,this.addModel.value.available,"lllll"); 
      this.formDataUserSend(this.addModel.value)
    } else {
      let validators = document.getElementsByClassName("error");
      if (!this.addModel.controls['categoryControl'].valid) {
        validators[0].innerHTML = "Required field"
      }
      if (!this.addModel.controls['subcategory'].valid) {
        validators[1].innerHTML = "Required field"
      }
      // if (!this.addModel.controls['available'].valid) {
      //   validators[2].innerHTML = "Required field"
      // }
      if (!this.addModel.controls['length'].valid) {
        validators[3].innerHTML = "Required field"
      }
      if (!this.addModel.controls['height'].valid) {
        validators[4].innerHTML = "Required field"
      }
      if (!this.addModel.controls['base'].valid) {
        validators[5].innerHTML = "Required field"
      }
      if (!this.addModel.controls['modal'].valid) {
        validators[6].innerHTML = "Required field"
      }
      if (!this.addModel.controls['image'].valid) {
      }
    }
  }

  getErrorMessage(){
    if(this.categoryControl.hasError('required')||this.subCategoryControl.hasError('required')){
      return 'Required Field'
    }
  }

  watchEditInput() {
    let validators = document.getElementsByClassName("error");
    this.addModel.controls['categoryControl'].valueChanges.subscribe((value: any) => {
      validators[0].innerHTML = "";
    });
    this.addModel.controls['subcategory'].valueChanges.subscribe((value: any) => {
      validators[1].innerHTML = "";
    });
    this.addModel.controls['available'].valueChanges.subscribe((value: any) => {
      validators[2].innerHTML = "";
    });
    this.addModel.controls['length'].valueChanges.subscribe((value: any) => {
      validators[3].innerHTML = "";
    });
    this.addModel.controls['height'].valueChanges.subscribe((value: any) => {
      validators[4].innerHTML = "";
    });
    this.addModel.controls['base'].valueChanges.subscribe((value: any) => {
      validators[5].innerHTML = "";
    });
    this.addModel.controls['modal'].valueChanges.subscribe((value: any) => {
      validators[6].innerHTML = "";
    });

  }

  // selectOptions(event, field) {
  //   switch (field) {
  //     case 0:
  //       this.category = event.id;
  //       break;
  //     case 1:
  //       this.subcategory = event.id;
  //       break;
  //     default:
  //       /*-----------Default case set multi select--------*/
  //       let data = [];
  //       for (let i = 0; i < event.value.length; i++) {
  //         data.push(event.value[i].id);
  //       }
  //       this.available = data;
  //       console.log(event, "-=-=", this.available)
  //       break;
  //   }
  // }

  formDataUserSend(data) {
    var formData = new FormData();
    formData.append("name", data.modal);
    formData.append("category_id", data.category);
    formData.append("sub_category_id", data.subcategory);
    formData.append("file", this.imageUpload.img);
    formData.append("three_d_model_android", this.threedAndroidUrl.img);
    formData.append("three_d_model_ios",this.threedIosUrl.img)
    formData.append("length", data.length);
   // formData.append("texture_cat_ids", data.available);
    formData.append("height", data.height);
    formData.append("base", data.base);
     for (let i = 0; i < data.available.length; i++) {
      formData.append("texture_cat_ids", data.available[i]);
    }
    console.log(formData,"formDataaaaaaaa");

    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = () => {
      if (xhttp.readyState === 4) {
        if (xhttp.status === 200) {
          console.log(xhttp.response);
          this.notification('success', 'Successfully', 'Successfully Add');
          this.addModel.reset();
          this.threedAndroidUrl = {};
          this.threedIosUrl={};
          this.imageUpload = {};
        } else {
          console.log(xhttp)
          this.notification('error', '!Oops Error', 'Something went wrong try again.');
        }
      }
    };

    var authTocken = localStorage.getItem("token");
    xhttp.open("POST", this.httpService.base_path + "product/", true);
    xhttp.setRequestHeader("Authorization", "Bearer " + authTocken);
    xhttp.send(formData);
  }

  notification(type, summary, detail) {
    this.msgs = [];
    this.msgs.push({ severity: type, summary: summary, detail: detail });
  }

}
