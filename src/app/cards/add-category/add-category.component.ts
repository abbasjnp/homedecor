import { Component, OnInit, Input } from '@angular/core';
import { HttpServiceService } from '../../services/http-service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss']
})
export class AddCategoryComponent implements OnInit {
  @Input() data: any;
  texture: any;
  imageUpload;
  msgs: any = [];
  category: FormGroup;
  formData = new FormData();
  _id: number = -1;
  options: any[] = [];

  constructor(public httpservice: HttpServiceService, public fb: FormBuilder) { }

  ngOnInit() {
    console.log(this.data, "====")
    this.category = this.fb.group({
      texture_cat_ids: [''],
      texture_name: ['',],
      file: [],
      name: [''],
      category_id: [],
    })

    switch (this.data.id) {
      case 1:

        break;
      case 2:
        // this.getCategory();
        break;
      case 4:
        this.chooseGetTexture();
        break;
      default:
        break;
    }
    /*-----------Form value change all validation remove----------*/
    this.category.valueChanges.subscribe((res) => {
      let validation = document.getElementsByClassName("error") as HTMLCollectionOf<HTMLElement>;
      for (let r = 0; r < validation.length; r++) {
        validation[r].innerHTML = "";
      }
    })
  }

  uploadImage(event) {
    console.log("call-------")
    let files = event.target.files;
    if (files.length > 0) {
      var reader = new FileReader();
      reader.onloadend = () => {
        this.imageUpload = { img: files[0], base: reader.result }
        console.log('RESULT', this.imageUpload)
      }
      reader.readAsDataURL(files[0]);
    }
  }

  cancelImage() {
    alert("alert")
  }

  chooseGetTexture() {
    this.httpservice.GetRequest(this.httpservice.base_path + "texture_category/").subscribe((res) => {
      this.texture = res[0].json.texture_cat_list
    }, (error) => {
      console.log(error)
    })
  }

  // getCategory() {
  //   this.httpservice.GetRequest(this.httpservice.base_path + "product_category/").subscribe((res) => {
  //     this.options = res[0].json.product_category_list;
  //     console.log(this.options)
  //   }, (error) => {
  //     console.log(error)
  //   })
  // }

  searchCategory(event) {
    if (event.target.value.length > 0) {
      this.httpservice.GetRequest(this.httpservice.base_path + "product_category/?search=" + event.target.value).subscribe((res) => {
        this.options = res[0].json.product_category_list;
      }, (error) => {
        console.log(error)
      })
    } else {
      this.options = [];
    }
  }


  selectOption(event, info) {
    switch (info) {
      case 1:
        let ary = [];
        event.forEach(value => {
          ary.push(value.id)
        });
        this.category.controls['texture_cat_ids'].setValue(ary);
        break;
      case 2:

        for (let i = 0; i < this.options.length; i++) {
          if (this.options[i].name == event.option.value) {
            this._id = this.options[i].id;
            break;
          }
        }
        break;
      default:
        break;
    }
    // console.log(event,info)
  }

  /*-----------------*/
  addTexture(info) {
    if (this.category.valid && this.imageUpload) {
      this.formData.append("texture_name", this.category.value.texture_name);
      this.formData.append("file", this.imageUpload.img);
      this.category.value.texture_cat_ids.forEach(value => {
        this.formData.append("texture_cat_ids", value);
      });

      let xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = () => {
        if (xhttp.readyState === 4) {
          if (xhttp.status === 200) {
            console.log(xhttp.response);
            this.notification('success', 'Successfully Add', 'Your List Successfully Add');
            this.category.reset();
          } else {
            console.log(xhttp)
            this.notification('error', '!Oops Error', 'Something went wrong try again.');
          }
          if (info) {
            this.category.reset();
            this.imageUpload = '';
          }
        }
      };

      var authTocken = localStorage.getItem("token");
      xhttp.open("POST", this.httpservice.base_path + "texture_category/", true);
      xhttp.setRequestHeader("Authorization", "Bearer " + authTocken);
      xhttp.send(this.formData);
    } else {
      let validation = document.querySelectorAll("#addTxtr .error");
      if (!this.category.controls['texture_cat_ids'].valid) {
        validation[0].innerHTML = "Required field"
      }
      if (!this.category.controls['texture_name'].valid) {
        validation[1].innerHTML = "Required field"
      }
      console.log(this.imageUpload, "=-=-")
      console.log(this.category.value, validation)
    }
  }

  addCategory(info) {
    if (this.category.valid) {
      this.httpservice.PostRequest(this.httpservice.base_path + "product_category/", this.category.value).subscribe((res) => {
        console.log(res)
        this.notification('success', 'Successfully Add', 'Add Category Successfully Add');
        if (info) {
          this.category.reset()
        }
      }, (error) => {
        console.log(error)
        this.notification('error', '!Oops Error', 'Something went wrong try again.');
      })
    } else {
      let validation = document.querySelectorAll("#Adcategory .error");
      validation[0].innerHTML = "Required field";
    }
  }

  addSubCategory(info) {
    if (this.category.valid && this._id) {
      this.category.value.category_id = this._id;/*--first set id--*/
      this.httpservice.PostRequest(this.httpservice.base_path + "product_subcategory/", this.category.value).subscribe((res) => {
        console.log(res)
        this.notification('success', 'Successfully', 'Add Sub Category Successfully Add');
        this.category.reset();
        this._id = -1;
      }, (error) => {
        console.log(error)
        this.notification('error', '!Oops Error', 'Something went wrong try again.');
      })
    } else {
      let validation = document.querySelectorAll("#AdSubcategory .error");
      if (this._id == -1) {
        validation[0].innerHTML = "Required field";
      }
      if (this.category.value.name == '') {
        validation[1].innerHTML = "Required field";
      }
    }
  }

  addTextureCategory(info) {
    if (this.category.valid) {
      console.log(this.category.value)
      this.httpservice.PostRequest(this.httpservice.base_path + "texture_category/", this.category.value).subscribe((res) => {
        console.log(res)
        this.notification('success', 'Successfully', 'Add Sub Category Successfully Add');
        if (info) {
          this.category.reset();
        }
      }, (error) => {
        console.log(error)
        this.notification('error', '!Oops Error', 'Something went wrong try again.');
      })
    } else {
      let validation = document.querySelectorAll("#atC .error");
      validation[0].innerHTML = "Required field";
    }
  }

  notification(type, summary, detail) {
    this.msgs = [];
    this.msgs.push({ severity: type, summary: summary, detail: detail });
  }

}
