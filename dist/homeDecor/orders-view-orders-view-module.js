(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["orders-view-orders-view-module"],{

/***/ "./src/app/pages/orders/orders-view/orders-view.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/pages/orders/orders-view/orders-view.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"full\">\n    <div class=\"container\">\n        <div class=\"ui-g-12\" *ngIf=\"data\">\n            <orders-view [data]=\"data\"></orders-view>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/pages/orders/orders-view/orders-view.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/pages/orders/orders-view/orders-view.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/orders/orders-view/orders-view.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/orders/orders-view/orders-view.component.ts ***!
  \*******************************************************************/
/*! exports provided: OrdersViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersViewComponent", function() { return OrdersViewComponent; });
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



var OrdersViewComponent = /** @class */ (function () {
    function OrdersViewComponent(httpService, activeRoute) {
        this.httpService = httpService;
        this.activeRoute = activeRoute;
        this.data = { dfd: 'fg' };
    }
    OrdersViewComponent.prototype.ngOnInit = function () {
        this.userInfo = this.activeRoute.snapshot.params;
        console.log(this.userInfo, "-=");
        this.getOrderView();
    };
    OrdersViewComponent.prototype.getOrderView = function () {
        var _this = this;
        this.httpService.GetRequest(this.httpService.base_path + "user_order/" + this.userInfo.id + "/").subscribe(function (res) {
            var resp = res[0].json;
            _this.data = resp.data;
        }, function (error) {
            console.log(error);
        });
    };
    OrdersViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-orders-view',
            template: __webpack_require__(/*! ./orders-view.component.html */ "./src/app/pages/orders/orders-view/orders-view.component.html"),
            styles: [__webpack_require__(/*! ./orders-view.component.scss */ "./src/app/pages/orders/orders-view/orders-view.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_http_service_service__WEBPACK_IMPORTED_MODULE_2__["HttpServiceService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], OrdersViewComponent);
    return OrdersViewComponent;
}());



/***/ }),

/***/ "./src/app/pages/orders/orders-view/orders-view.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/orders/orders-view/orders-view.module.ts ***!
  \****************************************************************/
/*! exports provided: OrdersViewModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersViewModule", function() { return OrdersViewModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _orders_view_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./orders-view.component */ "./src/app/pages/orders/orders-view/orders-view.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _cards_view_product_view_product_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../cards/view-product/view-product.component */ "./src/app/cards/view-product/view-product.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




// import {MatButtonModule} from '@angular/material/button';
// import {MatIconModule} from '@angular/material/icon';
// import {MatInputModule} from '@angular/material/input';
// import {PaginatorModule} from 'primeng/paginator';

var routes = [
    {
        path: '',
        component: _orders_view_component__WEBPACK_IMPORTED_MODULE_2__["OrdersViewComponent"]
    }
];
var OrdersViewModule = /** @class */ (function () {
    function OrdersViewModule() {
    }
    OrdersViewModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _cards_view_product_view_product_component__WEBPACK_IMPORTED_MODULE_4__["ViewProductModule"],
                // MatIconModule,
                // MatInputModule,
                // PaginatorModule,
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]],
            declarations: [_orders_view_component__WEBPACK_IMPORTED_MODULE_2__["OrdersViewComponent"]]
        })
    ], OrdersViewModule);
    return OrdersViewModule;
}());



/***/ })

}]);
//# sourceMappingURL=orders-view-orders-view-module.js.map