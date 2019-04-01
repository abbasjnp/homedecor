(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["option-category-option-category-module"],{

/***/ "./src/app/cards/add-category/add-category.component.html":
/*!****************************************************************!*\
  !*** ./src/app/cards/add-category/add-category.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g-12 br2\">\n    <h2 class=\"f4 ptb ui-g-4\">{{data?.header}}</h2>\n    <div class=\"ui-g-8 b tr\">\n    </div>\n</div>\n\n<div class=\"ui-g-12 sb p mgt15 clrboth\" *ngIf=\"data?.id!=404\">\n    <div class=\"ui-g-6 ui-g-offset-3 _apcmg r\">\n        <article *ngIf=\"data?.id==1\" id=\"Adcategory\">\n            <form [formGroup]=\"category\">\n                <mat-form-field class=\"full\">\n                    <input matInput formControlName=\"name\" placeholder=\"Add Category\" value=\"\" required>\n                </mat-form-field>\n                <p class=\"error\" style=\"top:55px;left: 8px;\"></p>\n            </form>\n            <div class=\"tr _subBtn\">\n                <button mat-raised-button class=\"b1 c3 u f4 bdno\" (click)=\"addCategory(false)\">Add</button>\n                <button mat-raised-button class=\"u b6 c3 f4 mgl15 bdno\" (click)=\"addCategory(true)\">Save & Add new</button>\n            </div>\n        </article>\n        <!--New Filed-->\n        <article *ngIf=\"data?.id==2\" id=\"AdSubcategory\">\n            <form [formGroup]=\"category\">\n                <mat-form-field class=\"full\">\n                    <input type=\"text\" formControlName=\"category_id\" placeholder=\"Select Category\" aria-label=\"Number\" matInput [matAutocomplete]=\"auto\" (keydown)=\"searchCategory($event)\">\n                    <mat-autocomplete #auto=\"matAutocomplete\" (optionSelected)='selectOption($event,2)'>\n                        <mat-option *ngFor=\"let option of options\" [value]=\"option?.name\" [title]=\"option?.id\">\n                            {{option?.name}}\n                        </mat-option>\n                    </mat-autocomplete>\n                    <p class=\"error\" style=\"top:35px;\"></p>\n                </mat-form-field>\n\n                <mat-form-field class=\"full\">\n                    <input matInput formControlName=\"name\" placeholder=\"Add Sub Category\" value=\"\" required>\n                    <p class=\"error\" style=\"top:35px;\"></p>\n                </mat-form-field>\n            </form>\n            <div class=\"tr _subBtn\">\n                <button mat-raised-button class=\"b1 c3 u f4 bdno\" (click)=\"addSubCategory(false)\">Add</button>\n                <button mat-raised-button class=\"u b6 c3 f4 mgl15 bdno\" (click)=\"addSubCategory(true)\">Save & Add new</button>\n            </div>\n        </article>\n        <!--New Filed-->\n        <article *ngIf=\"data?.id==3\" id=\"atC\">\n            <form [formGroup]=\"category\">\n                <mat-form-field class=\"full\">\n                    <input matInput placeholder=\"Add Texture Category\" formControlName=\"name\" value=\"\" required>\n                </mat-form-field>\n                <p class=\"error\" style=\"top: 55px;left: 10px;\"></p>\n            </form>\n            <div class=\"tr _subBtn\">\n                <button mat-raised-button class=\"b1 c3 u f4 bdno\" (click)=\"addTextureCategory(false)\">Add</button>\n                <button mat-raised-button class=\"u b6 c3 f4 mgl15 bdno\" (click)=\"addTextureCategory(true)\">Save & Add new</button>\n            </div>\n        </article>\n        <!--New Filed-->\n        <article *ngIf=\"data?.id==4\" id=\"addTxtr\">\n            <form [formGroup]=\"category\">\n                <p-multiSelect [options]=\"texture\" class=\"inpFull _add5Tx\" optionLabel=\"label\" (onChange)=\"selectOption($event.value,1)\" required></p-multiSelect>\n                <p class=\"error\" style=\"top:40px;left:10px;\"></p>\n                <mat-form-field class=\"full\">\n                    <input formControlName=\"texture_name\" matInput placeholder=\"Add Textue Name\" value=\"\" required />\n                    <p class=\"error e34\"></p>\n                </mat-form-field>\n                <div class=\"mgt15\">\n                    <div class=\"ui-lg-5 nop\">\n                        <!-- <div class=\"_imgUpload ov r\">\n              <div class=\"crossImg\" (click)=\"cancelImage()\"></div>\n              <input type=\"file\" (change)=\"uploadImage($event)\">\n            </div> -->\n                        <div class=\"_imgUpload ov r sb\">\n                            <span *ngIf=\"imageUpload\">\n                <div class=\"crossImg c3 c\" (click)=\"imageUpload=''\">\n                  <i class=\"material-icons\">close</i>\n                </div>\n                <div class=\"_runBg\" [ngStyle]=\"{'background-image': 'url(' + imageUpload?.base + ')'}\"></div>\n              </span>\n                            <input type=\"file\" (change)=\"uploadImage($event)\">\n                        </div>\n                    </div>\n                </div>\n                <div class=\"tr _subBtn ui-g-12 mgt15\">\n                    <button mat-raised-button (click)=\"addTexture(false)\" class=\"b1 c3 u f4 bdno\">Add</button>\n                    <button mat-raised-button (click)=\"addTexture(true)\" class=\"u b6 c3 f4 mgl15 bdno\">Save & Add new</button>\n                </div>\n            </form>\n        </article>\n    </div>\n</div>\n\n\n<!-----------Page Not Found------------->\n<div class=\"ui-g-12 sb p mgt15 clrboth\" *ngIf=\"data?.id==404\">\n    <div class=\"_apcmg tc\">\n        <h2 class=\"f1 c5\">\"Oops! Page Not Found.\"</h2>\n    </div>\n</div>\n\n<p-growl [(value)]=\"msgs\"></p-growl>"

/***/ }),

/***/ "./src/app/cards/add-category/add-category.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/cards/add-category/add-category.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "._subBtn button {\n  padding-top: 3px;\n  padding-bottom: 3px;\n  min-width: 80px; }\n\n._apcmg {\n  margin-top: 50px;\n  margin-bottom: 50px; }\n\n._imgUpload {\n  width: 70px;\n  height: 70px; }\n\n._imgUpload input {\n    display: block;\n    position: absolute;\n    left: 0;\n    bottom: 0;\n    top: 0;\n    outline: none;\n    width: 70px;\n    opacity: 0; }\n\n._imgUpload .crossImg {\n    position: absolute;\n    top: 0;\n    right: 0;\n    width: 25px;\n    height: 25px;\n    z-index: 99;\n    background-color: red; }\n"

/***/ }),

/***/ "./src/app/cards/add-category/add-category.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/cards/add-category/add-category.component.ts ***!
  \**************************************************************/
/*! exports provided: AddCategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCategoryComponent", function() { return AddCategoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_http_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/http-service.service */ "./src/app/services/http-service.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AddCategoryComponent = /** @class */ (function () {
    function AddCategoryComponent(httpservice, fb) {
        this.httpservice = httpservice;
        this.fb = fb;
        this.msgs = [];
        this.formData = new FormData();
        this._id = -1;
        this.options = [];
    }
    AddCategoryComponent.prototype.ngOnInit = function () {
        console.log(this.data, "====");
        this.category = this.fb.group({
            texture_cat_ids: [''],
            texture_name: ['',],
            file: [],
            name: [''],
            category_id: [],
        });
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
        this.category.valueChanges.subscribe(function (res) {
            var validation = document.getElementsByClassName("error");
            for (var r = 0; r < validation.length; r++) {
                validation[r].innerHTML = "";
            }
        });
    };
    AddCategoryComponent.prototype.uploadImage = function (event) {
        var _this = this;
        console.log("call-------");
        var files = event.target.files;
        if (files.length > 0) {
            var reader = new FileReader();
            reader.onloadend = function () {
                _this.imageUpload = { img: files[0], base: reader.result };
                console.log('RESULT', _this.imageUpload);
            };
            reader.readAsDataURL(files[0]);
        }
    };
    AddCategoryComponent.prototype.cancelImage = function () {
        alert("alert");
    };
    AddCategoryComponent.prototype.chooseGetTexture = function () {
        var _this = this;
        this.httpservice.GetRequest(this.httpservice.base_path + "texture_category/").subscribe(function (res) {
            _this.texture = res[0].json.texture_cat_list;
        }, function (error) {
            console.log(error);
        });
    };
    // getCategory() {
    //   this.httpservice.GetRequest(this.httpservice.base_path + "product_category/").subscribe((res) => {
    //     this.options = res[0].json.product_category_list;
    //     console.log(this.options)
    //   }, (error) => {
    //     console.log(error)
    //   })
    // }
    AddCategoryComponent.prototype.searchCategory = function (event) {
        var _this = this;
        if (event.target.value.length > 0) {
            this.httpservice.GetRequest(this.httpservice.base_path + "product_category/?search=" + event.target.value).subscribe(function (res) {
                _this.options = res[0].json.product_category_list;
            }, function (error) {
                console.log(error);
            });
        }
        else {
            this.options = [];
        }
    };
    AddCategoryComponent.prototype.selectOption = function (event, info) {
        switch (info) {
            case 1:
                var ary_1 = [];
                event.forEach(function (value) {
                    ary_1.push(value.id);
                });
                this.category.controls['texture_cat_ids'].setValue(ary_1);
                break;
            case 2:
                for (var i = 0; i < this.options.length; i++) {
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
    };
    /*-----------------*/
    AddCategoryComponent.prototype.addTexture = function (info) {
        var _this = this;
        if (this.category.valid && this.imageUpload) {
            this.formData.append("texture_name", this.category.value.texture_name);
            this.formData.append("file", this.imageUpload.img);
            this.category.value.texture_cat_ids.forEach(function (value) {
                _this.formData.append("texture_cat_ids", value);
            });
            var xhttp_1 = new XMLHttpRequest();
            xhttp_1.onreadystatechange = function () {
                if (xhttp_1.readyState === 4) {
                    if (xhttp_1.status === 200) {
                        console.log(xhttp_1.response);
                        _this.notification('success', 'Successfully Add', 'Your List Successfully Add');
                        _this.category.reset();
                    }
                    else {
                        console.log(xhttp_1);
                        _this.notification('error', '!Oops Error', 'Something went wrong try again.');
                    }
                    if (info) {
                        _this.category.reset();
                        _this.imageUpload = '';
                    }
                }
            };
            var authTocken = localStorage.getItem("token");
            xhttp_1.open("POST", this.httpservice.base_path + "texture_category/", true);
            xhttp_1.setRequestHeader("Authorization", "Bearer " + authTocken);
            xhttp_1.send(this.formData);
        }
        else {
            var validation = document.querySelectorAll("#addTxtr .error");
            if (!this.category.controls['texture_cat_ids'].valid) {
                validation[0].innerHTML = "Required field";
            }
            if (!this.category.controls['texture_name'].valid) {
                validation[1].innerHTML = "Required field";
            }
            console.log(this.imageUpload, "=-=-");
            console.log(this.category.value, validation);
        }
    };
    AddCategoryComponent.prototype.addCategory = function (info) {
        var _this = this;
        if (this.category.valid) {
            this.httpservice.PostRequest(this.httpservice.base_path + "product_category/", this.category.value).subscribe(function (res) {
                console.log(res);
                _this.notification('success', 'Successfully Add', 'Add Category Successfully Add');
                if (info) {
                    _this.category.reset();
                }
            }, function (error) {
                console.log(error);
                _this.notification('error', '!Oops Error', 'Something went wrong try again.');
            });
        }
        else {
            var validation = document.querySelectorAll("#Adcategory .error");
            validation[0].innerHTML = "Required field";
        }
    };
    AddCategoryComponent.prototype.addSubCategory = function (info) {
        var _this = this;
        if (this.category.valid && this._id) {
            this.category.value.category_id = this._id; /*--first set id--*/
            this.httpservice.PostRequest(this.httpservice.base_path + "product_subcategory/", this.category.value).subscribe(function (res) {
                console.log(res);
                _this.notification('success', 'Successfully', 'Add Sub Category Successfully Add');
                _this.category.reset();
                _this._id = -1;
            }, function (error) {
                console.log(error);
                _this.notification('error', '!Oops Error', 'Something went wrong try again.');
            });
        }
        else {
            var validation = document.querySelectorAll("#AdSubcategory .error");
            if (this._id == -1) {
                validation[0].innerHTML = "Required field";
            }
            if (this.category.value.name == '') {
                validation[1].innerHTML = "Required field";
            }
        }
    };
    AddCategoryComponent.prototype.addTextureCategory = function (info) {
        var _this = this;
        if (this.category.valid) {
            console.log(this.category.value);
            this.httpservice.PostRequest(this.httpservice.base_path + "texture_category/", this.category.value).subscribe(function (res) {
                console.log(res);
                _this.notification('success', 'Successfully', 'Add Sub Category Successfully Add');
                if (info) {
                    _this.category.reset();
                }
            }, function (error) {
                console.log(error);
                _this.notification('error', '!Oops Error', 'Something went wrong try again.');
            });
        }
        else {
            var validation = document.querySelectorAll("#atC .error");
            validation[0].innerHTML = "Required field";
        }
    };
    AddCategoryComponent.prototype.notification = function (type, summary, detail) {
        this.msgs = [];
        this.msgs.push({ severity: type, summary: summary, detail: detail });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AddCategoryComponent.prototype, "data", void 0);
    AddCategoryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-category',
            template: __webpack_require__(/*! ./add-category.component.html */ "./src/app/cards/add-category/add-category.component.html"),
            styles: [__webpack_require__(/*! ./add-category.component.scss */ "./src/app/cards/add-category/add-category.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_http_service_service__WEBPACK_IMPORTED_MODULE_1__["HttpServiceService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], AddCategoryComponent);
    return AddCategoryComponent;
}());



/***/ }),

/***/ "./src/app/cards/add-category/add-category.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/cards/add-category/add-category.module.ts ***!
  \***********************************************************/
/*! exports provided: AddCategoryModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCategoryModule", function() { return AddCategoryModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _add_category_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-category.component */ "./src/app/cards/add-category/add-category.component.ts");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/esm5/autocomplete.es5.js");
/* harmony import */ var primeng_multiselect__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/multiselect */ "./node_modules/primeng/multiselect.js");
/* harmony import */ var primeng_multiselect__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(primeng_multiselect__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var primeng_growl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/growl */ "./node_modules/primeng/growl.js");
/* harmony import */ var primeng_growl__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(primeng_growl__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





// import {MatSelectModule} from '@angular/material/select';





var AddCategoryModule = /** @class */ (function () {
    function AddCategoryModule() {
    }
    AddCategoryModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_5__["MatAutocompleteModule"],
                primeng_multiselect__WEBPACK_IMPORTED_MODULE_6__["MultiSelectModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"],
                primeng_growl__WEBPACK_IMPORTED_MODULE_8__["GrowlModule"],
            ],
            declarations: [_add_category_component__WEBPACK_IMPORTED_MODULE_2__["AddCategoryComponent"]],
            exports: [_add_category_component__WEBPACK_IMPORTED_MODULE_2__["AddCategoryComponent"]]
        })
    ], AddCategoryModule);
    return AddCategoryModule;
}());



/***/ }),

/***/ "./src/app/pages/add-category/option-category/option-category.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/add-category/option-category/option-category.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"full\">\n  <div class=\"container b3\">\n    <app-add-category [data]=\"sendData\"></app-add-category>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/add-category/option-category/option-category.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/add-category/option-category/option-category.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/add-category/option-category/option-category.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/add-category/option-category/option-category.component.ts ***!
  \*********************************************************************************/
/*! exports provided: OptionCategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OptionCategoryComponent", function() { return OptionCategoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var OptionCategoryComponent = /** @class */ (function () {
    function OptionCategoryComponent(activeRoute) {
        this.activeRoute = activeRoute;
    }
    OptionCategoryComponent.prototype.ngOnInit = function () {
        this.checkRouting(this.activeRoute.snapshot.paramMap.get('id'));
    };
    OptionCategoryComponent.prototype.checkRouting = function (info) {
        switch (info) {
            case null:
                this.sendData = { header: 'Category List', id: 1 };
                break;
            case 'addsubcategory':
                this.sendData = { header: 'Add Sub Category', id: 2 };
                break;
            case 'addtexturecategory':
                this.sendData = { header: 'Add Texture Category', id: 3 };
                break;
            case 'addtexture':
                this.sendData = { header: 'Add Texture', id: 4 };
                break;
            default:
                this.sendData = { header: '404 Error', id: 404 };
        }
    };
    OptionCategoryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-option-category',
            template: __webpack_require__(/*! ./option-category.component.html */ "./src/app/pages/add-category/option-category/option-category.component.html"),
            styles: [__webpack_require__(/*! ./option-category.component.scss */ "./src/app/pages/add-category/option-category/option-category.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], OptionCategoryComponent);
    return OptionCategoryComponent;
}());



/***/ }),

/***/ "./src/app/pages/add-category/option-category/option-category.module.ts":
/*!******************************************************************************!*\
  !*** ./src/app/pages/add-category/option-category/option-category.module.ts ***!
  \******************************************************************************/
/*! exports provided: OptionCategoryModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OptionCategoryModule", function() { return OptionCategoryModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _option_category_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./option-category.component */ "./src/app/pages/add-category/option-category/option-category.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _cards_add_category_add_category_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../cards/add-category/add-category.module */ "./src/app/cards/add-category/add-category.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: '',
        component: _option_category_component__WEBPACK_IMPORTED_MODULE_2__["OptionCategoryComponent"]
    }
];
var OptionCategoryModule = /** @class */ (function () {
    function OptionCategoryModule() {
    }
    OptionCategoryModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _cards_add_category_add_category_module__WEBPACK_IMPORTED_MODULE_4__["AddCategoryModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]],
            declarations: [_option_category_component__WEBPACK_IMPORTED_MODULE_2__["OptionCategoryComponent"]]
        })
    ], OptionCategoryModule);
    return OptionCategoryModule;
}());



/***/ })

}]);
//# sourceMappingURL=option-category-option-category-module.js.map