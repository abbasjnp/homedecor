(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-user-module"],{

/***/ "./src/app/pages/users/user/user.component.html":
/*!******************************************************!*\
  !*** ./src/app/pages/users/user/user.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"full\">\n    <div class=\"container b3\">\n        <div class=\"ui-g-12 br2\">\n            <h2 class=\"f4 ptb ui-g-4\">User Details</h2>\n            <div class=\"ui-g-8 b tr\">\n                <button mat-button class=\"f4 b2 c3 mgl15 bdno\" (click)=\"deleteUser()\"><i class=\"material-icons\">delete</i>\n                    DELETE</button>\n                <button mat-button class=\"f4 b7 c3 mgl15 bdno u\" (click)=\"visibility(userDetails.is_active)\">\n                    <i class=\"material-icons\" *ngIf=\"!userDetails?.is_active\">visibility_off</i>\n                    <i class=\"material-icons\" *ngIf=\"userDetails?.is_active\">visibility</i>\n                    visibility\n                </button>\n            </div>\n        </div>\n        <!--end of button-->\n        <div class=\"ui-g-12 _uigr\">\n            <table class=\"full f2 c5 tc\">\n                <tr>\n                    <td class=\"_imgPart\"><img src=\"./assets/image/default.png\" class=\"bd\"></td>\n                    <td>User Name <ruby>:</ruby> <span>{{userDetails?.name}}</span> </td>\n                    <td>Mobile Number <ruby>:</ruby> <span>{{userDetails?.mobile}}</span> </td>\n                    <td>Email Id <ruby>:</ruby> <span>{{userDetails?.email}}</span> </td>\n                </tr>\n            </table>\n        </div>\n    </div>\n</div>\n\n<div class=\"full\">\n    <div class=\"container\">\n\n        <div class=\"ui-g-12 mgt15 mgb15 b3\">\n            <mat-accordion>\n                <mat-expansion-panel>\n                    <mat-expansion-panel-header>\n                        <mat-panel-title class=\"f4\">\n                            User Permission\n                        </mat-panel-title>\n                    </mat-expansion-panel-header>\n                    <button mat-raised-button class=\"_addPre u\" (click)=\"addPermission()\"><i class=\"material-icons\">add</i>\n                        Add permission</button>\n                    <table class=\"full permissionTable sb f1\">\n                        <tr>\n                            <td>Category Permission</td>\n                            <td>Sub Category Permission</td>\n                            <td>Action</td>\n                        </tr>\n                        <tr *ngFor=\"let user of response\">\n                            <td>Furniture</td>\n                            <td>Action Table,Coffee Table,Stools,Hero</td>\n                            <td>\n                                <button mat-mini-fab>\n                                    <mat-icon aria-label=\"delete\">delete</mat-icon>\n                                </button>\n                                <!-- <button mat-mini-fab>\n                  <mat-icon aria-label=\"visibility\">visibility</mat-icon>\n                </button> -->\n                            </td>\n                        </tr>\n                    </table>\n                </mat-expansion-panel>\n            </mat-accordion>\n\n        </div>\n    </div>\n</div>\n\n\n<div class=\"full\">\n    <div class=\"container b3\">\n        <div class=\"ui-g-12 nop\">\n            <div class=\"ui-lg-8 proBtn nop\">\n                <button mat-button class=\"f4 b6 c3 bdno\" (click)=\"viewProduct(0)\" style=\"background-color:#02d5a1;\">Viewed\n                    Products</button>\n                <button mat-button class=\"f4 b7 c3 bdno\" (click)=\"viewProduct(1)\">Ordered Products</button>\n                <button mat-button class=\"f4 b6 c3 bdno\" (click)=\"viewProduct(2)\">Saved Screenshots</button>\n            </div>\n            <div class=\"ui-g-4 b tr\">\n                <i class=\"fa fa-search\" style=\"color: #d5d5d5;margin-left:4%;\" aria-hidden=\"true\"></i>&nbsp;\n                <input type=\"text\" placeholder=\"Search Here...\" class=\"unksrch o\">\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"full\">\n    <div class=\"container\">\n        <div class=\"ui-g-12 sb\">\n            <div class=\"ui-g-3\" *ngFor=\"let view of viewProducts\">\n                <div class=\"ui-g-12 cardcat5 sb nop\">\n                    <div class=\"full _decImg\" [style.background-image]=\"'url(' + httpService.base_path_img+ view.image + ')'\"></div>\n                    <div class=\"full pad\">\n                        <table class=\"full f3 f14\">\n                            <tr>\n                                <td>Category</td>\n                                <td>:</td>\n                                <td>{{view?.category_name}}</td>\n                            </tr>\n                            <tr>\n                                <td>Sub Category</td>\n                                <td>:</td>\n                                <td>{{view?.sub_category_name}}</td>\n                            </tr>\n                            <tr>\n                                <td>Model Name</td>\n                                <td>:</td>\n                                <td>{{view?.name}}</td>\n                            </tr>\n                            <!-- <tr>\n                <td>Avaliable</td>\n                <td>:</td>\n                <td>Wood,Glass</td>\n              </tr> -->\n                            <tr>\n                                <td>Scale</td>\n                                <td>:</td>\n                                <td>{{view?.breadth}},{{view?.length}},{{view?.height}}</td>\n                            </tr>\n                        </table>\n                    </div>\n                    <div *ngIf=\"whichPath==0\" class=\"full pad tc vord c o\" routerLink=\"/users/order-view/{{view?.id}}\">\n                        <p>View more <i class=\"material-icons slow\">navigate_next</i></p>\n                    </div>\n                    <div *ngIf=\"whichPath==1\" class=\"full pad tc vord c o\" routerLink=\"/users/order-product/{{view?.screenshot_id}}\">\n                        <p>View more <i class=\"material-icons slow\">navigate_next</i></p>\n                    </div>\n                    <div *ngIf=\"whichPath==2\" class=\"full pad tc vord c o\" routerLink=\"/users/screenshot/{{view?.screenshot_id}}\">\n                        <p>View more <i class=\"material-icons slow\">navigate_next</i></p>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"_pagnat\">\n    <p-paginator rows=\"10\" [totalRecords]=\"count\" (onPageChange)=\"morePageData($event)\"></p-paginator>\n</div>\n\n\n<div class=\"deleteConform\" *ngIf=\"deleteConform\">\n    <div class=\"overlay-backdrop\" (click)=\"deleteConformOption()\"></div>\n    <div class=\"diglogConform b3 sh bd4 pad\">\n        <h4 class=\"ptb\">Confirmation</h4>\n        <p class=\"c5\">Are you sure that you want to proceed?</p>\n        <div class=\"full tr ptb\">\n            <button mat-button class=\"f4 c4\" (click)=\"deleteConformOption(true)\">OK</button>\n            <button mat-button class=\"f4 c4\" (click)=\"deleteConformOption()\">CANCEL</button>\n        </div>\n    </div>\n</div>\n\n<div *ngIf=\"addPermissionView\">\n    <div class=\"\" style=\"background-color: rgba(0, 0, 0, .288);position: fixed;left: 0;right: 0;top: 0;bottom: 0;z-index: 99;\"></div>\n    <div style=\" min-width: 500px;max-width: 600px;min-height: 720px;max-height: 720px;left: 50%;overflow-y: scroll; top: 50%;  position: fixed;left: 0;right: 0;top: 0;bottom: 0;z-index: 100;margin-top:7%;margin-left:35%;\"\n        class=\"b3 sh bd4 pad\">\n\n        <div class=\"add-permission-header\">\n            <h4 class=\"ptb\" style=\"font-family:poppinsl;font-size: 20px;\"><b>Add Permission </b><button style=\"float: right;margin-left:350px;background-color: transparent;outline:none;border:none;color: #e46677;\"\n                    (click)=\"cancelButton()\"> <i class=\"fa fa-close\"></i></button></h4>\n        </div>\n        <div class=\"dialog-content\">\n            <mat-accordion>\n                <mat-expansion-panel *ngFor=\"let category of mainCategoryObj\">\n\n                    <mat-expansion-panel-header [ngStyle]=\"{'background-color':category.cat_flag?'#4CAF50':'whitesmoke'}\" (click)=\"getSubcategory(category.id)\">\n                        <mat-panel-title>\n\n                            {{category.name}}\n                        </mat-panel-title>\n                        <mat-panel-description>\n                            <div class=\"permission\">{{permission}}<span *ngFor=\"let p of permitted\"></span></div>\n                        </mat-panel-description>\n                    </mat-expansion-panel-header>\n                    <div class=\"sub-category-list\">\n                        <div class=\"select-all\">Select All<span>\n                                <mat-checkbox class=\"example-margin\" [(ngModel)]=\"checkedAll\" [labelPosition]=\"labelPosition\"\n                                    (change)=\"selectAll(category.id)\">\n                                </mat-checkbox>\n                            </span></div>\n                        <div class=\"sub-cat-name\" *ngFor=\"let data of subcategory\">\n                            {{data.sub_cat_name}}<span>\n                                <mat-checkbox class=\"example-margin\" [(ngModel)]=\"data.sub_cat_flag\" (change)=\"checkedSubCategory(category.id)\">\n                                </mat-checkbox>\n                            </span> \n                        </div>\n                    </div>\n                    </mat-expansion-panel>\n             \n                <div class=\"action-row\">\n                    <mat-action-row>\n                        <button mat-button class=\"f4 c4\" (click)=\"okButton()\">OK</button>\n                        <button mat-button class=\"f4 c4\" (click)=\"cancelButton()\">CANCEL</button>\n                    </mat-action-row>\n                </div>\n\n            </mat-accordion>\n        </div>\n\n        <!-- Copyright 2019 Google Inc. All Rights Reserved.\n              Use of this source code is governed by an MIT-style license that\n              can be found in the LICENSE file at http://angular.io/license -->\n\n        <!-- <div>\n            <input type=\"checkbox\" style=\"zoom: 1.5;background-color: pink;color: white;padding:2%;margin-right: 4%;\">\n\n            <p-multiSelect [options]=\"furniture\" optionLabel=\"name\" style=\"\" defaultLabel=\"Furniture\" styleClass=\"backgg\">\n            </p-multiSelect>\n\n        </div>\n\n        <div style=\"margin-left:6%;border-bottom: 1px solid #3333;\">\n\n        </div>\n\n        <span style=\"margin-top:-2%;\">\n            <input type=\"checkbox\" style=\"zoom: 1.5;background-color: pink;color: white;\">\n        </span>\n        <p-multiSelect [options]=\"cities2\" optionLabel=\"name\" style=\"\" defaultLabel=\"Bath\"> </p-multiSelect>\n\n        <div>\n            <input type=\"checkbox\" value=\"\">\n\n            <p-multiSelect [options]=\"cities2\" optionLabel=\"name\" style=\"\" defaultLabel=\"Outdoor\">\n            </p-multiSelect>\n\n\n        </div>\n\n\n        <p-multiSelect [options]=\"cities2\" optionLabel=\"name\" style=\"\" defaultLabel=\"Lighting\">\n        </p-multiSelect>\n        <p-multiSelect [options]=\"cities2\" optionLabel=\"name\" style=\"\" defaultLabel=\"Decor\">\n        </p-multiSelect> -->\n        <!-- <select style=\"border:none;outline:none;background-color: none;width: 280px;\">\n            <input type=\"checkbox\">Furniture\n        <option>Coffee Table</option>\n        <option>Stool</option>\n        </select>\n\n        <select>\n            <option>Bath</option>\n        </select>\n        <select>\n            <option>Outdoor</option>\n        </select>\n        <br>\n        <input type=\"checkbox\"><select style=\"border:none;outline:none;background-color: white;width: 200px;\"><option>a</option><option>b</option><option>c</option></select><br>\n        <input type=\"checkbox\">kac<br> -->\n\n\n\n        <!-- <div class=\"full tr ptb\">\n            <button mat-button class=\"f4 c4\" (click)=\"okButton()\">OK</button>\n            <button mat-button class=\"f4 c4\" (click)=\"cancelButton()\">CANCEL</button>\n        </div> -->\n\n    </div>\n</div>\n\n<p-growl [(value)]=\"msgs\"></p-growl>"

/***/ }),

/***/ "./src/app/pages/users/user/user.component.scss":
/*!******************************************************!*\
  !*** ./src/app/pages/users/user/user.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "._decImg {\n  background-color: #f5f5f5; }\n\n._imgPart {\n  width: 60px; }\n\n._imgPart img {\n    width: 50px;\n    height: 50px; }\n\n._uigr td ruby {\n  padding: 0 30px; }\n\n._uigr td span {\n  color: var(--black);\n  font-family: 'Lato-Regular'; }\n\n._uigr td:not(:first-child) {\n  border-right: 1px solid #d8d8d8; }\n\n.unksrch {\n  padding: 7px 0;\n  border: none;\n  border-bottom: 1px solid #d0d0d0; }\n\n.proBtn button {\n  padding: 6px 20px; }\n\n.proBtn button:not(:first-child) {\n  margin-left: 10px; }\n\n.cardcat5 {\n  margin-bottom: 15px; }\n\n.cardcat5 td {\n    padding: 4px 0; }\n\n.cardcat5 .vord {\n    border-top: 1px solid var(--bdr);\n    border-bottom: 2px solid var(--pink);\n    color: var(--pink); }\n\n.cardcat5 .vord i {\n      vertical-align: middle;\n      position: absolute; }\n\n.cardcat5 .vord:hover i {\n    margin-left: 10px; }\n\n._addPre {\n  float: right;\n  border-radius: 0;\n  box-shadow: none;\n  background-color: var(--green);\n  color: var(--white);\n  margin-bottom: 15px;\n  padding-top: 4px;\n  padding-bottom: 4px; }\n\n.permissionTable {\n  border-collapse: collapse;\n  color: #444444; }\n\n.permissionTable tr td {\n    padding: 16px 12px; }\n\n.permissionTable tr td:last-child {\n    width: 120px; }\n\n.permissionTable tr:not(:last-child) {\n    border-bottom: 1px solid var(--bdr); }\n\n.permissionTable tr:first-child {\n    background-color: var(--bdr); }\n\n.permissionTable tr:first-child td {\n      font-family: 'Lato-Bold';\n      padding: 12px; }\n\n.permissionTable button {\n    width: 35px;\n    height: 35px;\n    box-shadow: none; }\n\n.permissionTable button .material-icons {\n      font-size: 20px; }\n\n.permissionTable button:first-child {\n    margin-right: 10px;\n    background-color: var(--red); }\n\n.permissionTable button:last-child {\n    background-color: var(--green); }\n\n.ui-multiselect-item ui-corner-all ng-tns-c10-3 ng-star-inserted ui-state-highlight:active {\n  background-color: none !important; }\n\n.backgg {\n  background-color: none !important; }\n\n.example-margin {\n  margin-right: 20px;\n  width: 20px;\n  height: 20px; }\n\n.sub-cat-name {\n  font-size: 17px;\n  /* opacity: 0.7; */\n  margin-left: 39px;\n  color: dimgrey;\n  padding: 17px 0px; }\n\n.sub-cat-name span {\n  float: right; }\n\n.select-all {\n  font-size: 16px;\n  font-weight: bold;\n  color: darkslategrey;\n  margin-top: 14px; }\n\n.select-all span {\n  margin-left: 20px; }\n\n.permission {\n  margin-right: 102px;\n  font-size: 16px; }\n\n.permission span {\n  font-size: 15px;\n  margin-left: 5px; }\n\n.sub-category-list {\n  max-height: 250px;\n  overflow-y: auto; }\n\n.add-permission-header {\n  position: fixed;\n  z-index: 1;\n  background-color: white;\n  margin-top: -16px;\n  padding-top: 7px;\n  margin-left: -16px;\n  padding-left: 29px;\n  /* margin-bottom: -10px; */\n  padding-bottom: 10px; }\n\n.dialog-content {\n  padding-top: 60px; }\n"

/***/ }),

/***/ "./src/app/pages/users/user/user.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/users/user/user.component.ts ***!
  \****************************************************/
/*! exports provided: MainCategory, SubCategory, UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainCategory", function() { return MainCategory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubCategory", function() { return SubCategory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_http_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/http-service.service */ "./src/app/services/http-service.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MainCategory = /** @class */ (function () {
    function MainCategory() {
    }
    return MainCategory;
}());

var SubCategory = /** @class */ (function () {
    function SubCategory() {
    }
    return SubCategory;
}());

var UserComponent = /** @class */ (function () {
    function UserComponent(route, httpService) {
        this.route = route;
        this.httpService = httpService;
        this.panelOpenState = false;
        this.count = 10;
        this.whichPath = 0;
        this.deleteConform = false;
        this.msgs = [];
        this.table = false;
        this.addPermissionView = false;
        this.furnitures = [];
        this.categoryList = [];
        this.subCategoryList = [];
        this.checked = false;
        this.indeterminate = false;
        this.labelPosition = 'after';
        this.disabled = false;
        this.permitted = [];
        this.mainCategoryObj = [];
    }
    UserComponent.prototype.ngOnInit = function () {
        this.userId = +this.route.snapshot.paramMap.get('id');
        console.log("Entered--------", this.userId);
        var getViewId = sessionStorage.getItem("page");
        if (getViewId) {
            this.whichPath = JSON.parse(getViewId);
        }
        this.getUserDetailsById();
        this.getUserOrderView(1);
        this.getCategoryList();
    };
    //yes
    UserComponent.prototype.getUserOrderView = function (page) {
        var _this = this;
        var path = this.httpService.base_path + "user_history/?id=" + this.userId + "&page=" + page;
        if (this.whichPath == 0) {
            path = this.httpService.base_path + "user_history/?id=" + this.userId + "&page=" + page;
        }
        else if (this.whichPath == 1) {
            path = this.httpService.base_path + "user_order/?id=" + this.userId + "&page=" + page;
        }
        else if (this.whichPath == 2) {
            path = this.httpService.base_path + "user_screenshot/?id=" + this.userId + "&page=" + page;
        }
        this.httpService.GetRequest(path).subscribe(function (res) {
            var responce = res[0].json;
            _this.count = responce.count;
            _this.viewProducts = responce.data;
            console.log(_this.viewProducts, "=-=");
        }, function (error) {
            console.log(error);
        });
    };
    UserComponent.prototype.morePageData = function (event) {
        console.log("=-=-=", event);
        this.getUserOrderView(event.page + 1);
    };
    UserComponent.prototype.viewProduct = function (info) {
        this.whichPath = info;
        sessionStorage.setItem("page", info);
        this.getUserOrderView(1);
        if (info == 1) {
            this.table = true;
        }
    };
    UserComponent.prototype.getCategoryList = function () {
        var _this = this;
        this.httpService.GetRequest(this.httpService.base_path + "user-category-permission/" + this.userId)
            .subscribe(function (res) {
            _this.permissionData = res[0].json.data;
            for (var i = 0; i < res[0].json.category.length; i++) {
                var categoryObj = new MainCategory;
                categoryObj.id = res[0].json.category[i].category_id;
                categoryObj.name = res[0].json.category[i].category_name;
                categoryObj.subCategories = [];
                _this.mainCategoryObj.push(categoryObj);
            }
            _this.FetchSubCategories();
        });
        console.log(this.mainCategoryObj);
    };
    UserComponent.prototype.FetchSubCategories = function () {
        var _this = this;
        var option = {
            user_id: this.userId,
            category_id: null
        };
        //fetch all subcategories
        this.mainCategoryObj.forEach(function (mainCat) {
            option.category_id = mainCat.id;
            _this.httpService.PostRequest(_this.httpService.base_path + "user-category-permission/", option)
                .subscribe(function (res) {
                for (var i = 0; i < res[0].json.sub_category.length; i++) {
                    var subCat = new SubCategory;
                    subCat.sub_cat_id = res[0].json.sub_category[i].subcategory_id;
                    subCat.sub_cat_name = res[0].json.sub_category[i].subcategory_name;
                    subCat.sub_cat_flag = res[0].json.sub_category[i].checked;
                    if (subCat.sub_cat_flag == true) {
                        mainCat.cat_flag = true;
                    }
                    mainCat.subCategories.push(subCat);
                }
            });
        });
    };
    UserComponent.prototype.getSubcategory = function (id) {
        var _this = this;
        this.mainCategoryObj.forEach(function (element) {
            if (element.id == id && element.subCategories.length > 0) {
                _this.subcategory = element.subCategories;
                return;
            }
        });
        this.checkedSubCategory(id);
    };
    UserComponent.prototype.selectAll = function (id) {
        var _this = this;
        this.mainCategoryObj.forEach(function (mainCat) {
            if (mainCat.id == id) {
                mainCat.subCategories.forEach(function (subCat) {
                    subCat.sub_cat_flag = _this.checkedAll;
                });
            }
        });
        this.SetMainCateoryFlag();
    };
    UserComponent.prototype.getUserDetailsById = function () {
        var _this = this;
        this.httpService.GetRequest(this.httpService.base_path + "users/" + this.userId + "/").subscribe(function (res) {
            var responce = res[0].json;
            _this.userDetails = responce.user;
            console.log(_this.userDetails, "=-user details=><");
            console.log(responce, "RESPONSE IN USER COMPONENT");
        }, function (error) {
            console.log(error);
        });
    };
    UserComponent.prototype.deleteUser = function () {
        this.deleteConform = true;
    };
    UserComponent.prototype.visibility = function (active) {
        var _this = this;
        this.httpService.PutRequest(this.httpService.base_path + "users/" + this.userId + "/?value=" + !active, "").subscribe(function (res) {
            _this.userDetails.is_active = !active;
            //console.log("visibility" + active + "==============");
            //console.log(this.userDetails.is_active + "-----");
            if (_this.userDetails.is_active == true) {
                _this.visibile = "ON";
            }
            else {
                _this.visibile = "OFF";
            }
            _this.notification('success', 'Visibility ' + _this.visibile, "Visiblity Status");
        }, function (error) {
            console.log(error);
            _this.notification('error', '!Oops Error', 'Something went wrong try again.');
        });
    };
    UserComponent.prototype.deleteConformOption = function (info) {
        var _this = this;
        if (info) {
            this.httpService.DeleteRequest(this.httpService.base_path + "users/" + this.userId + "/").subscribe(function (res) {
                console.log(res);
                _this.notification('success', 'Successfully', 'User Removed successfully ');
            }, function (error) {
                console.log(error);
                _this.notification('error', '!Oops Error', 'Something went wrong try again.');
            });
        }
        setTimeout(function () {
            _this.deleteConform = false;
        }, 200);
    };
    UserComponent.prototype.notification = function (type, summary, detail) {
        this.msgs = [];
        this.msgs.push({ severity: 'type', summary: 'summary', detail: 'detail' });
    };
    UserComponent.prototype.addPermission = function () {
        this.addPermissionView = true;
        console.log(this.mainCategoryObj, "main category list");
    };
    UserComponent.prototype.cancelButton = function () {
        this.addPermissionView = false;
        console.log("Hide addPermission ");
    };
    UserComponent.prototype.checkedSubCategory = function (mainCategory_Id) {
        var _this = this;
        this.checkFlag = true;
        this.mainCategoryObj.forEach(function (mainCat) {
            if (mainCat.id == mainCategory_Id) {
                mainCat.subCategories.forEach(function (subCat) {
                    console.log(subCat.sub_cat_flag, "sub cat flag", subCat.sub_cat_id);
                    if (subCat.sub_cat_flag == false) {
                        _this.checkFlag = false;
                    }
                });
                _this.checkedAll = _this.checkFlag;
            }
        });
        this.SetMainCateoryFlag();
    };
    UserComponent.prototype.SetMainCateoryFlag = function () {
        this.mainCategoryObj.forEach(function (mainCat) {
            var catFlag = false;
            mainCat.subCategories.forEach(function (subCat) {
                if (subCat.sub_cat_flag == true) {
                    catFlag = true;
                }
            });
            mainCat.cat_flag = catFlag;
            console.log("setting ", catFlag);
        });
    };
    UserComponent.prototype.okButton = function () {
        var _this = this;
        var checked_SubCat_Value = [];
        console.log(this.mainCategoryObj, "maincategoryyyyyyy");
        this.mainCategoryObj.forEach(function (mainCat) {
            mainCat.subCategories.forEach(function (subCat) {
                if (subCat.sub_cat_flag == true) {
                    checked_SubCat_Value.push(subCat.sub_cat_id);
                }
            });
        });
        var option = {
            user_id: this.userId,
            subcategory_id: checked_SubCat_Value
        };
        console.log(option, "optionnnnnnnnn");
        this.httpService.PostRequest(this.httpService.base_path + "user-category-add-permission/", option)
            .subscribe(function (res) {
            console.log(res, "Success Response");
            if (res[0].json.success = "true") {
                _this.msgs.push({ severity: 'success', summary: 'Permisssion added successfully', detail: 'Success' });
                _this.addPermissionView = false;
            }
        }, function (error) {
            console.log(error);
            _this.msgs.push({ severity: 'error', summary: 'Something went wrong, not added successfully', detail: 'Try Again!!' });
        });
    };
    UserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user',
            template: __webpack_require__(/*! ./user.component.html */ "./src/app/pages/users/user/user.component.html"),
            styles: [__webpack_require__(/*! ./user.component.scss */ "./src/app/pages/users/user/user.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _services_http_service_service__WEBPACK_IMPORTED_MODULE_2__["HttpServiceService"]])
    ], UserComponent);
    return UserComponent;
}());



/***/ }),

/***/ "./src/app/pages/users/user/user.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/users/user/user.module.ts ***!
  \*************************************************/
/*! exports provided: UserModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModule", function() { return UserModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _user_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user.component */ "./src/app/pages/users/user/user.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var primeng_paginator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/paginator */ "./node_modules/primeng/paginator.js");
/* harmony import */ var primeng_paginator__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(primeng_paginator__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm5/expansion.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var primeng_growl__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/growl */ "./node_modules/primeng/growl.js");
/* harmony import */ var primeng_growl__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(primeng_growl__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var primeng_multiselect__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/multiselect */ "./node_modules/primeng/multiselect.js");
/* harmony import */ var primeng_multiselect__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(primeng_multiselect__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/esm5/autocomplete.es5.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm5/list.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











// import {MatSelectModule} from '@angular/material/select';

// import {MultiSelectModule} from 'primeng/multiselect';


var routes = [
    {
        path: '',
        component: _user_component__WEBPACK_IMPORTED_MODULE_2__["UserComponent"]
    }
];
var UserModule = /** @class */ (function () {
    function UserModule() {
    }
    UserModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_material_list__WEBPACK_IMPORTED_MODULE_12__["MatListModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
                primeng_paginator__WEBPACK_IMPORTED_MODULE_6__["PaginatorModule"],
                _angular_material_expansion__WEBPACK_IMPORTED_MODULE_7__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatCheckboxModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
                primeng_growl__WEBPACK_IMPORTED_MODULE_9__["GrowlModule"],
                primeng_multiselect__WEBPACK_IMPORTED_MODULE_10__["MultiSelectModule"],
                _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_11__["MatAutocompleteModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]],
            declarations: [_user_component__WEBPACK_IMPORTED_MODULE_2__["UserComponent"]]
        })
    ], UserModule);
    return UserModule;
}());



/***/ })

}]);
//# sourceMappingURL=user-user-module.js.map