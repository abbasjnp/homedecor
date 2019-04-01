import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpServiceService } from '../../../services/http-service.service';

export class MainCategory {
  id: number;
  name: string;
  cat_flag: boolean;
  subCategories: SubCategory[];
}

export class SubCategory {
  sub_cat_id: number;
  sub_cat_name: string;
  sub_cat_flag: boolean;
}

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  panelOpenState = false;
  userId: any;
  viewProducts: any;
  userDetails: any;
  count: number = 10;
  whichPath: number = 0
  deleteConform: boolean = false;
  msgs: any = [];
  visibile: any;
  table: boolean = false;
  furnitures: any = [];
  permissionData: any;
  labelPosition = 'after';
  index:number;
  delRow:boolean=false;

  /*Gloabal variables used for the permission */
  addPermissionView: boolean = false;
  subcategory: any[];
  permissionSubcategory: any[];
  checkedAll: boolean;
  checkFlag: boolean;
  mainCategoryObj: MainCategory[] = [];
  PermissionCategoryObj: MainCategory[] = [];


  constructor(private route: ActivatedRoute, public httpService: HttpServiceService) {

  }

  ngOnInit() {
    this.userId = +this.route.snapshot.paramMap.get('id');
    // console.log("Entered--------", this.userId);
    let getViewId = sessionStorage.getItem("page");
    if (getViewId) {
      this.whichPath = JSON.parse(getViewId);
    }
    this.getUserDetailsById();
    this.getUserOrderView(1);
    this.getCategoryList();


  }
  //yes
  getUserOrderView(page) {
    let path = `${this.httpService.base_path}user_history/?id=${this.userId}&page=${page}`
    if (this.whichPath == 0) {
      path = `${this.httpService.base_path}user_history/?id=${this.userId}&page=${page}`
    } else if (this.whichPath == 1) {
      path = `${this.httpService.base_path}user_order/?id=${this.userId}&page=${page}`
    } else if (this.whichPath == 2) {
      path = `${this.httpService.base_path}user_screenshot/?id=${this.userId}&page=${page}`
    }

    this.httpService.GetRequest(path).subscribe((res) => {
      let responce = res[0].json;
      this.count = responce.count;
      this.viewProducts = responce.data;
      console.log(this.viewProducts, "=-=")
    }, (error) => {
      console.log(error)
    })
  }

  morePageData(event) {
    console.log("=-=-=", event)
    this.getUserOrderView(event.page + 1)
  }

  viewProduct(info) {
    this.whichPath = info;
    sessionStorage.setItem("page", info);
    this.getUserOrderView(1)

    if (info == 1) {
      this.table = true;
    }
  }
  getCategoryList() {

    this.mainCategoryObj = [];
    this.httpService.GetRequest(`${this.httpService.base_path}user-category-permission/` + this.userId)
      .subscribe((res: any) => {
        this.permissionData = res[0].json.data;
        for (var i = 0; i < res[0].json.category.length; i++) {
          let categoryObj = new MainCategory;
          categoryObj.id = res[0].json.category[i].category_id;
          categoryObj.name = res[0].json.category[i].category_name;
          categoryObj.subCategories = [];

          this.mainCategoryObj.push(categoryObj);
          //  this.PermissinCategoryObj.push(categoryObj);
        }
        this.FetchSubCategories();
      })
    console.log(this.mainCategoryObj);

  }

  FetchSubCategories() {

    let option = {
      user_id: this.userId,
      category_id: null
    }
    //fetch all subcategories
    this.mainCategoryObj.forEach(mainCat => {

      option.category_id = mainCat.id;

      this.httpService.PostRequest(`${this.httpService.base_path}user-category-permission/`, option)
        .subscribe((res: any) => {

          for (var i = 0; i < res[0].json.sub_category.length; i++) {
            let subCat = new SubCategory;

            subCat.sub_cat_id = res[0].json.sub_category[i].subcategory_id;
            subCat.sub_cat_name = res[0].json.sub_category[i].subcategory_name;
            subCat.sub_cat_flag = res[0].json.sub_category[i].checked;

            if (subCat.sub_cat_flag == true) {
              mainCat.cat_flag = true;
            }

            mainCat.subCategories.push(subCat);

          }
          //  this.FilterCategoryPermission(); 
        });
    });
    // console.log(this.mainCategoryObj,"mmmmmmmmmmmmmmmmm");
    // this.PermissinCategoryObj=this.mainCategoryObj;
    // console.log(this.PermissinCategoryObj,"oooooooooooooo");


  }

  getSubcategory(id) {

    this.mainCategoryObj.forEach(element => {
      if (element.id == id && element.subCategories.length > 0) {
        this.subcategory = element.subCategories;
        return;

      }
    });
    this.checkedSubCategory(id);

    // this.PermissionCategoryObj.forEach(element=>{
    //   if(element.id==id && element.subCategories.length>0){
    //     this.permissionSubcategory = element.subCategories;
    //   }
    // })
  }

  selectAll(id) {
    this.mainCategoryObj.forEach(mainCat => {
      if (mainCat.id == id) {
        mainCat.subCategories.forEach(subCat => {
          subCat.sub_cat_flag = this.checkedAll;

        });
      }
    });
    // this.SetMainCateoryFlag();
  }

  getUserDetailsById() {
    this.httpService.GetRequest(`${this.httpService.base_path}users/${this.userId}/`).subscribe((res) => {
      let responce = res[0].json;
      this.userDetails = responce.user
      console.log(this.userDetails, "=-user details=><")
      console.log(responce, "RESPONSE IN USER COMPONENT");
    }, (error) => {
      console.log(error)
    })
  }

  deleteUser() {
    this.deleteConform = true;
  }

  visibility(active) {

    this.httpService.PutRequest(this.httpService.base_path + "users/" + this.userId + "/?value=" + !active, "").subscribe((res) => {
      this.userDetails.is_active = !active
      //console.log("visibility" + active + "==============");
      //console.log(this.userDetails.is_active + "-----");
      if (this.userDetails.is_active == true) {
        this.visibile = "ON";
      }
      else {
        this.visibile = "OFF";
      }

      this.notification('success', 'Visibility ' + this.visibile, "Visiblity Status");
    }, (error) => {
      console.log(error)
      this.notification('error', '!Oops Error', 'Something went wrong try again.');
    })
  }

  deleteConformOption(info?) {
    if (info) {
      this.httpService.DeleteRequest(this.httpService.base_path + "users/" + this.userId + "/").subscribe((res) => {
        console.log(res)
        this.notification('success', 'Successfully', 'User Removed successfully ');
      }, (error) => {
        console.log(error)
        this.notification('error', '!Oops Error', 'Something went wrong try again.');
      })
    }
    setTimeout(() => {
      this.deleteConform = false;
    }, 200);
  }

  notification(type, summary, detail) {
    this.msgs = [];
    this.msgs.push({ severity: 'type', summary: 'summary', detail: 'detail' });
  }
  addPermission() {
    this.addPermissionView = true;
    console.log(this.mainCategoryObj, "main category list")

  }
  cancelButton() {
    this.addPermissionView = false;
    // console.log("Hide addPermission ");
  }
  checkedSubCategory(mainCategory_Id) {
    this.checkFlag = true;
    this.mainCategoryObj.forEach(mainCat => {
      if (mainCat.id == mainCategory_Id) {
        mainCat.subCategories.forEach(subCat => {
          //  console.log(subCat.sub_cat_flag, "sub cat flag", subCat.sub_cat_id);
          if (subCat.sub_cat_flag == false) {
            this.checkFlag = false;
          }
        });
        this.checkedAll = this.checkFlag;
      }
    });
    //  this.SetMainCateoryFlag();
  }

  // FilterCategoryPermission(){


  // }

  DeleteCategoryPermission(id,i) {
    this.delRow = true;
    let checked_SubCat_Value = [];
    this.index=i;
    this.mainCategoryObj.forEach(mainCat => {
      if (mainCat.id != id) {
        mainCat.subCategories.forEach(subCat => {
          if (subCat.sub_cat_flag == true) {
            checked_SubCat_Value.push(subCat.sub_cat_id);
          }
        });
      }
    
    });
    
    this.MethodCall(checked_SubCat_Value);
  //  this.PermissionCategoryObj.splice(i,1);
    // console.log("deleted");
    // console.log(i);
    
    //  this.getCategoryList();
     
    //  this.FilterCategoryPermission();

    
    //request to server
  }

  MethodCall(checked_SubCat_Value) {

    //if(checked_SubCat_Value != []){
    let option = {
      user_id: this.userId,
      subcategory_id: checked_SubCat_Value
    //}
  }
    this.httpService.PostRequest(`${this.httpService.base_path}user-category-add-permission/`, option)
      .subscribe((res: any) => {
        console.log(res, "Success Response");
        if (res[0].json.success = "true") {
          
          this.msgs.push({ severity: 'success', summary: 'Permisssion added successfully', detail: 'Success' });
          this.addPermissionView = false;
          /*For removing the row on delete */
          if(this.delRow==true){
          this.PermissionCategoryObj.splice(this.index,1);
          this.getCategoryList();
          this.delRow=false;
          console.log(this.PermissionCategoryObj,"delllllllllllll");
          }
          /*--------------------------------*/
        
        }
      },
        (error) => {
          console.log(this.PermissionCategoryObj,"in error block");
         // this.PermissionCategoryObj.splice(this.index,1);
          console.log(error)
          this.msgs.push({ severity: 'error', summary: 'Something went wrong, not added successfully', detail: 'Try Again!!' });
        }
      )
     
      this.FilterCategoryPermission();

  }

  FilterCategoryPermission() {
   // this.getCategoryList();
    let categoryList = [];

    this.mainCategoryObj.forEach(mainCat => {
      let categoryObject;
      let catFlag = false;

      mainCat.subCategories.forEach(subCat => {
        if (subCat.sub_cat_flag == true && catFlag != true) {
          catFlag = true;
          categoryObject = new MainCategory;
          categoryObject.id = mainCat.id;
          categoryObject.name = mainCat.name;
          categoryObject.subCategories = [];
        }
      });

      if (catFlag) {
        mainCat.subCategories.forEach(subCat => {
          if (subCat.sub_cat_flag == true) {
            categoryObject.subCategories.push(subCat);
          }
        });

        categoryList.push(categoryObject);
      }
    });

    this.PermissionCategoryObj = categoryList;
    console.log("setting ", categoryList);
  }

  okButton() {
    let checked_SubCat_Value = [];

    this.mainCategoryObj.forEach(mainCat => {
      mainCat.subCategories.forEach(subCat => {
        if (subCat.sub_cat_flag == true) {
          checked_SubCat_Value.push(subCat.sub_cat_id);
        }
      });
    });
    this.MethodCall(checked_SubCat_Value);


  }
}



