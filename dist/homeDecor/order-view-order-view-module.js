(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["order-view-order-view-module"],{

/***/ "./src/app/pages/users/order-view/order-view.component.html":
/*!******************************************************************!*\
  !*** ./src/app/pages/users/order-view/order-view.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"full\">\n    <div class=\"container\">\n        <div class=\"ui-g-12\" *ngIf=\"data\">\n            <orders-view [data]=\"data\" [routingPage]=\"userInfo\"></orders-view>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/pages/users/order-view/order-view.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/pages/users/order-view/order-view.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/users/order-view/order-view.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/users/order-view/order-view.component.ts ***!
  \****************************************************************/
/*! exports provided: OrderViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderViewComponent", function() { return OrderViewComponent; });
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



var OrderViewComponent = /** @class */ (function () {
    function OrderViewComponent(route, httpService) {
        this.route = route;
        this.httpService = httpService;
    }
    OrderViewComponent.prototype.ngOnInit = function () {
        this.userInfo = this.route.snapshot.params;
        console.log(this.userInfo);
        if (this.userInfo.route == 'order-view') {
            this.getHistoryView();
        }
        else if (this.userInfo.route == 'order-product') {
            this.getOrderProduct();
        }
        else if (this.userInfo.route == 'screenshot') {
            this.getScreenshot();
        }
    };
    OrderViewComponent.prototype.getHistoryView = function () {
        var _this = this;
        this.httpService.GetRequest(this.httpService.base_path + "user_history/" + this.userInfo.id + "/").subscribe(function (res) {
            var responce = res[0].json.data;
            _this.data = responce;
        }, function (error) {
            console.log(error);
        });
    };
    OrderViewComponent.prototype.getOrderProduct = function () {
        var _this = this;
        this.httpService.GetRequest(this.httpService.base_path + "user_order/" + this.userInfo.id + "/").subscribe(function (res) {
            var responce = res[0].json.data;
            _this.data = responce;
        }, function (error) {
            console.log(error);
        });
    };
    OrderViewComponent.prototype.getScreenshot = function () {
        var _this = this;
        this.httpService.GetRequest(this.httpService.base_path + "user_screenshot/" + this.userInfo.id + "/").subscribe(function (res) {
            var responce = res[0].json.data;
            _this.data = responce;
        }, function (error) {
            console.log(error);
        });
    };
    OrderViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-order-view',
            template: __webpack_require__(/*! ./order-view.component.html */ "./src/app/pages/users/order-view/order-view.component.html"),
            styles: [__webpack_require__(/*! ./order-view.component.scss */ "./src/app/pages/users/order-view/order-view.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _services_http_service_service__WEBPACK_IMPORTED_MODULE_2__["HttpServiceService"]])
    ], OrderViewComponent);
    return OrderViewComponent;
}());



/***/ }),

/***/ "./src/app/pages/users/order-view/order-view.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/users/order-view/order-view.module.ts ***!
  \*************************************************************/
/*! exports provided: OrderViewModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderViewModule", function() { return OrderViewModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _order_view_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./order-view.component */ "./src/app/pages/users/order-view/order-view.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _cards_view_product_view_product_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../cards/view-product/view-product.component */ "./src/app/cards/view-product/view-product.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: '',
        component: _order_view_component__WEBPACK_IMPORTED_MODULE_2__["OrderViewComponent"]
    }
];
var OrderViewModule = /** @class */ (function () {
    function OrderViewModule() {
    }
    OrderViewModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _cards_view_product_view_product_component__WEBPACK_IMPORTED_MODULE_4__["ViewProductModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]],
            declarations: [_order_view_component__WEBPACK_IMPORTED_MODULE_2__["OrderViewComponent"]]
        })
    ], OrderViewModule);
    return OrderViewModule;
}());



/***/ })

}]);
//# sourceMappingURL=order-view-order-view-module.js.map