(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-cms-cms-module"],{

/***/ "./src/app/pages/cms/cms.component.html":
/*!**********************************************!*\
  !*** ./src/app/pages/cms/cms.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header active=\"4\"></app-header>\n\n<div class=\"full mgb15 mgt15\">\n  <div class=\"container nopad\">\n    <app-locator></app-locator>\n  </div>\n</div>\n\n<div>\n  <router-outlet></router-outlet>\n</div> \n"

/***/ }),

/***/ "./src/app/pages/cms/cms.component.scss":
/*!**********************************************!*\
  !*** ./src/app/pages/cms/cms.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/cms/cms.component.ts":
/*!********************************************!*\
  !*** ./src/app/pages/cms/cms.component.ts ***!
  \********************************************/
/*! exports provided: CmsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CmsComponent", function() { return CmsComponent; });
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

var CmsComponent = /** @class */ (function () {
    function CmsComponent() {
    }
    CmsComponent.prototype.ngOnInit = function () {
    };
    CmsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cms',
            template: __webpack_require__(/*! ./cms.component.html */ "./src/app/pages/cms/cms.component.html"),
            styles: [__webpack_require__(/*! ./cms.component.scss */ "./src/app/pages/cms/cms.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CmsComponent);
    return CmsComponent;
}());



/***/ }),

/***/ "./src/app/pages/cms/cms.module.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/cms/cms.module.ts ***!
  \*****************************************/
/*! exports provided: CmsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CmsModule", function() { return CmsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _cms_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cms.component */ "./src/app/pages/cms/cms.component.ts");
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
        component: _cms_component__WEBPACK_IMPORTED_MODULE_2__["CmsComponent"],
        children: [
            { path: '', redirectTo: 'categoryList', pathMatch: 'full' },
            { path: 'categoryList', loadChildren: './category-lists/category-lists.module#CategoryListsModule', data: { state: 'categoryList' } },
            { path: 'categoryList/:id', loadChildren: './categorylist/categorylist.module#CategorylistModule', data: { state: 'categoryList' } },
            { path: 'categoryList/:id/:product', loadChildren: './add-model/add-model.module#AddModelModule', data: { state: 'categoryList' } },
            { path: 'texturelist', loadChildren: './texture-list/texture-list.module#TextureListModule', data: { state: 'texturelist' } },
            { path: 'texturelist/:product', loadChildren: './texture-list/product/product.module#ProductModule', data: { state: 'texturelist' } },
        ]
    }
];
var CmsModule = /** @class */ (function () {
    function CmsModule() {
    }
    CmsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _components_header_header_module__WEBPACK_IMPORTED_MODULE_4__["HeaderModule"],
                _components_locator_locator_component__WEBPACK_IMPORTED_MODULE_5__["LocatorModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]],
            declarations: [_cms_component__WEBPACK_IMPORTED_MODULE_2__["CmsComponent"]]
        })
    ], CmsModule);
    return CmsModule;
}());



/***/ })

}]);
//# sourceMappingURL=pages-cms-cms-module.js.map