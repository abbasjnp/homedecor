(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["texture-list-product-product-module"],{

/***/ "./src/app/pages/cms/texture-list/product/product.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/pages/cms/texture-list/product/product.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"full\">\n    <div class=\"container b3\">\n        <div class=\"ui-g-12 br2\">\n            <h2 class=\"f4 ptb ui-g-4\">Texture List</h2>\n            <div class=\"ui-g-8 b tr\">\n                <button mat-button class=\"f4 b6 c3 mgl15 u\"><i class=\"material-icons\">add</i> Add Texture</button>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"full\">\n    <div class=\"container\">\n        <div class=\"ui-lg-3 ui-md-3 ui-sm-12\" *ngFor=\"let a of [1,2,3,4,5,6,7,8]\">\n            <div class=\"ui-g-12 cardcat5 b3 nop sh\">\n                <div class=\"full _decImg\" style=\"background-image: url('https://resize.indiatvnews.com/en/resize/newbucket/715_-/2018/05/homedecor-1527248438.jpg')\"></div>\n                <div class=\"full pad\">\n                    <table class=\"full f3 f14\">\n                        <tr>\n                            <td>Texture Name</td>\n                            <td>:</td>\n                            <td>Texture Apply</td>\n                        </tr>\n                        <tr>\n                            <td>Sub Category</td>\n                            <td>:</td>\n                            <td>Coffee Table</td>\n                        </tr>\n                    </table>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/pages/cms/texture-list/product/product.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/pages/cms/texture-list/product/product.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/cms/texture-list/product/product.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/cms/texture-list/product/product.component.ts ***!
  \*********************************************************************/
/*! exports provided: ProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductComponent", function() { return ProductComponent; });
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

var ProductComponent = /** @class */ (function () {
    function ProductComponent() {
    }
    ProductComponent.prototype.ngOnInit = function () {
    };
    ProductComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product',
            template: __webpack_require__(/*! ./product.component.html */ "./src/app/pages/cms/texture-list/product/product.component.html"),
            styles: [__webpack_require__(/*! ./product.component.scss */ "./src/app/pages/cms/texture-list/product/product.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ProductComponent);
    return ProductComponent;
}());



/***/ }),

/***/ "./src/app/pages/cms/texture-list/product/product.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/cms/texture-list/product/product.module.ts ***!
  \******************************************************************/
/*! exports provided: ProductModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductModule", function() { return ProductModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _product_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product.component */ "./src/app/pages/cms/texture-list/product/product.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _product_component__WEBPACK_IMPORTED_MODULE_2__["ProductComponent"]
    }
];
var ProductModule = /** @class */ (function () {
    function ProductModule() {
    }
    ProductModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_product_component__WEBPACK_IMPORTED_MODULE_2__["ProductComponent"]],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
        })
    ], ProductModule);
    return ProductModule;
}());



/***/ })

}]);
//# sourceMappingURL=texture-list-product-product-module.js.map