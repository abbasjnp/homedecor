(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-add-category-add-category-module"],{

/***/ "./src/app/pages/add-category/add-category.component.html":
/*!****************************************************************!*\
  !*** ./src/app/pages/add-category/add-category.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header active=\"3\"></app-header>\n\n<div class=\"full mgb15 mgt15\">\n  <div class=\"container nopad\">\n    <app-locator></app-locator>\n  </div>\n</div>\n\n<div>\n  <router-outlet></router-outlet>\n</div> \n"

/***/ }),

/***/ "./src/app/pages/add-category/add-category.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/pages/add-category/add-category.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/add-category/add-category.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/add-category/add-category.component.ts ***!
  \**************************************************************/
/*! exports provided: AddCategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCategoryComponent", function() { return AddCategoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
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
    function AddCategoryComponent() {
    }
    AddCategoryComponent.prototype.ngOnInit = function () {
    };
    AddCategoryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-category',
            template: __webpack_require__(/*! ./add-category.component.html */ "./src/app/pages/add-category/add-category.component.html"),
            styles: [__webpack_require__(/*! ./add-category.component.scss */ "./src/app/pages/add-category/add-category.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AddCategoryComponent);
    return AddCategoryComponent;
}());



/***/ }),

/***/ "./src/app/pages/add-category/add-category.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/add-category/add-category.module.ts ***!
  \***********************************************************/
/*! exports provided: AddCategoryModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCategoryModule", function() { return AddCategoryModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _add_category_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-category.component */ "./src/app/pages/add-category/add-category.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_header_header_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/header/header.module */ "./src/app/components/header/header.module.ts");
/* harmony import */ var _components_locator_locator_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/locator/locator.component */ "./src/app/components/locator/locator.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _add_category_component__WEBPACK_IMPORTED_MODULE_2__["AddCategoryComponent"],
        children: [
            { path: '', loadChildren: "./option-category/option-category.module#OptionCategoryModule" },
            { path: ':id', loadChildren: "./option-category/option-category.module#OptionCategoryModule" },
        ]
    }
];
var AddCategoryModule = /** @class */ (function () {
    function AddCategoryModule() {
    }
    AddCategoryModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _components_header_header_module__WEBPACK_IMPORTED_MODULE_4__["HeaderModule"],
                _components_locator_locator_component__WEBPACK_IMPORTED_MODULE_5__["LocatorModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]],
            declarations: [_add_category_component__WEBPACK_IMPORTED_MODULE_2__["AddCategoryComponent"]]
        })
    ], AddCategoryModule);
    return AddCategoryModule;
}());



/***/ })

}]);
//# sourceMappingURL=pages-add-category-add-category-module.js.map