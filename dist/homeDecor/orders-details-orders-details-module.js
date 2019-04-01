(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["orders-details-orders-details-module"],{

/***/ "./node_modules/primeng/components/splitbutton/splitbutton.js":
/*!********************************************************************!*\
  !*** ./node_modules/primeng/components/splitbutton/splitbutton.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var animations_1 = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
var common_1 = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var domhandler_1 = __webpack_require__(/*! ../dom/domhandler */ "./node_modules/primeng/components/dom/domhandler.js");
var button_1 = __webpack_require__(/*! ../button/button */ "./node_modules/primeng/components/button/button.js");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var router_2 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var SplitButton = /** @class */ (function () {
    function SplitButton(el, domHandler, renderer, router, cd) {
        this.el = el;
        this.domHandler = domHandler;
        this.renderer = renderer;
        this.router = router;
        this.cd = cd;
        this.iconPos = 'left';
        this.onClick = new core_1.EventEmitter();
        this.onDropdownClick = new core_1.EventEmitter();
        this.overlayVisible = false;
    }
    SplitButton.prototype.onDefaultButtonClick = function (event) {
        this.onClick.emit(event);
    };
    SplitButton.prototype.itemClick = function (event, item) {
        if (item.disabled) {
            event.preventDefault();
            return;
        }
        if (!item.url) {
            event.preventDefault();
        }
        if (item.command) {
            item.command({
                originalEvent: event,
                item: item
            });
        }
        this.overlayVisible = false;
    };
    SplitButton.prototype.show = function () {
        this.overlayVisible = !this.overlayVisible;
    };
    SplitButton.prototype.onOverlayAnimationStart = function (event) {
        switch (event.toState) {
            case 'visible':
                this.overlay = event.element;
                this.appendOverlay();
                this.overlay.style.zIndex = String(++domhandler_1.DomHandler.zindex);
                this.alignOverlay();
                this.bindDocumentClickListener();
                break;
            case 'void':
                this.onOverlayHide();
                break;
        }
    };
    SplitButton.prototype.onDropdownButtonClick = function (event) {
        this.onDropdownClick.emit(event);
        this.dropdownClick = true;
        this.show();
    };
    SplitButton.prototype.alignOverlay = function () {
        if (this.appendTo)
            this.domHandler.absolutePosition(this.overlay, this.containerViewChild.nativeElement);
        else
            this.domHandler.relativePosition(this.overlay, this.containerViewChild.nativeElement);
    };
    SplitButton.prototype.appendOverlay = function () {
        if (this.appendTo) {
            if (this.appendTo === 'body')
                document.body.appendChild(this.overlay);
            else
                this.domHandler.appendChild(this.overlay, this.appendTo);
            this.overlay.style.minWidth = this.domHandler.getWidth(this.el.nativeElement.children[0]) + 'px';
        }
    };
    SplitButton.prototype.restoreOverlayAppend = function () {
        if (this.overlay && this.appendTo) {
            this.el.nativeElement.appendChild(this.overlay);
        }
    };
    SplitButton.prototype.bindDocumentClickListener = function () {
        var _this = this;
        if (!this.documentClickListener) {
            this.documentClickListener = this.renderer.listen('document', 'click', function () {
                if (_this.dropdownClick) {
                    _this.dropdownClick = false;
                }
                else {
                    _this.overlayVisible = false;
                    _this.unbindDocumentClickListener();
                    _this.cd.markForCheck();
                }
            });
        }
    };
    SplitButton.prototype.unbindDocumentClickListener = function () {
        if (this.documentClickListener) {
            this.documentClickListener();
            this.documentClickListener = null;
        }
    };
    SplitButton.prototype.onOverlayHide = function () {
        this.unbindDocumentClickListener();
        this.overlay = null;
    };
    SplitButton.prototype.ngOnDestroy = function () {
        this.restoreOverlayAppend();
        this.onOverlayHide();
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Array)
    ], SplitButton.prototype, "model", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], SplitButton.prototype, "icon", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], SplitButton.prototype, "iconPos", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], SplitButton.prototype, "label", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], SplitButton.prototype, "onClick", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], SplitButton.prototype, "onDropdownClick", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], SplitButton.prototype, "style", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], SplitButton.prototype, "styleClass", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], SplitButton.prototype, "menuStyle", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], SplitButton.prototype, "menuStyleClass", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], SplitButton.prototype, "disabled", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], SplitButton.prototype, "tabindex", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], SplitButton.prototype, "appendTo", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], SplitButton.prototype, "dir", void 0);
    __decorate([
        core_1.ViewChild('container'),
        __metadata("design:type", core_1.ElementRef)
    ], SplitButton.prototype, "containerViewChild", void 0);
    __decorate([
        core_1.ViewChild('defaultbtn'),
        __metadata("design:type", core_1.ElementRef)
    ], SplitButton.prototype, "buttonViewChild", void 0);
    SplitButton = __decorate([
        core_1.Component({
            selector: 'p-splitButton',
            template: "\n        <div #container [ngClass]=\"{'ui-splitbutton ui-buttonset ui-widget':true,'ui-state-disabled':disabled}\" [ngStyle]=\"style\" [class]=\"styleClass\">\n            <button #defaultbtn type=\"button\" pButton [icon]=\"icon\" [iconPos]=\"iconPos\" [label]=\"label\" [cornerStyleClass]=\"dir === 'rtl' ? 'ui-corner-right': 'ui-corner-left'\" (click)=\"onDefaultButtonClick($event)\" [disabled]=\"disabled\" [attr.tabindex]=\"tabindex\">\n            </button><button type=\"button\" pButton class=\"ui-splitbutton-menubutton\" icon=\"pi pi-caret-down\" [cornerStyleClass]=\"dir === 'rtl' ? 'ui-corner-left': 'ui-corner-right'\" (click)=\"onDropdownButtonClick($event)\" [disabled]=\"disabled\"></button>\n            <div #overlay [ngClass]=\"'ui-menu ui-menu-dynamic ui-widget ui-widget-content ui-corner-all ui-helper-clearfix ui-shadow'\" *ngIf=\"overlayVisible\"\n                    [ngStyle]=\"menuStyle\" [class]=\"menuStyleClass\"\n                    [@overlayAnimation]=\"'visible'\" (@overlayAnimation.start)=\"onOverlayAnimationStart($event)\">\n                <ul class=\"ui-menu-list ui-helper-reset\">\n                    <ng-template ngFor let-item [ngForOf]=\"model\">\n                        <li class=\"ui-menuitem ui-widget ui-corner-all\" role=\"menuitem\" *ngIf=\"item.visible !== false\">\n                            <a *ngIf=\"!item.routerLink\" [href]=\"item.url||'#'\" class=\"ui-menuitem-link ui-corner-all\" [attr.target]=\"item.target\"\n                                [ngClass]=\"{'ui-state-disabled':item.disabled}\" (click)=\"itemClick($event, item)\">\n                                <span [ngClass]=\"'ui-menuitem-icon'\" [class]=\"item.icon\" *ngIf=\"item.icon\"></span>\n                                <span class=\"ui-menuitem-text\">{{item.label}}</span>\n                            </a>\n                            <a *ngIf=\"item.routerLink\" [routerLink]=\"item.routerLink\" [queryParams]=\"item.queryParams\"\n                                class=\"ui-menuitem-link ui-corner-all\" [attr.target]=\"item.target\" [ngClass]=\"{'ui-state-disabled':item.disabled}\" (click)=\"itemClick($event, item)\">\n                                <span [ngClass]=\"'ui-menuitem-icon'\" [class]=\"item.icon\" *ngIf=\"item.icon\"></span>\n                                <span class=\"ui-menuitem-text\">{{item.label}}</span>\n                            </a>\n                        </li>\n                    </ng-template>\n                </ul>\n            </div>\n        </div>\n    ",
            animations: [
                animations_1.trigger('overlayAnimation', [
                    animations_1.state('void', animations_1.style({
                        transform: 'translateY(5%)',
                        opacity: 0
                    })),
                    animations_1.state('visible', animations_1.style({
                        transform: 'translateY(0)',
                        opacity: 1
                    })),
                    animations_1.transition('void => visible', animations_1.animate('225ms ease-out')),
                    animations_1.transition('visible => void', animations_1.animate('195ms ease-in'))
                ])
            ],
            providers: [domhandler_1.DomHandler]
        }),
        __metadata("design:paramtypes", [core_1.ElementRef, domhandler_1.DomHandler, core_1.Renderer2, router_1.Router, core_1.ChangeDetectorRef])
    ], SplitButton);
    return SplitButton;
}());
exports.SplitButton = SplitButton;
var SplitButtonModule = /** @class */ (function () {
    function SplitButtonModule() {
    }
    SplitButtonModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, button_1.ButtonModule, router_2.RouterModule],
            exports: [SplitButton, button_1.ButtonModule, router_2.RouterModule],
            declarations: [SplitButton]
        })
    ], SplitButtonModule);
    return SplitButtonModule;
}());
exports.SplitButtonModule = SplitButtonModule;
//# sourceMappingURL=splitbutton.js.map

/***/ }),

/***/ "./node_modules/primeng/splitbutton.js":
/*!*********************************************!*\
  !*** ./node_modules/primeng/splitbutton.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* Shorthand */

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./components/splitbutton/splitbutton */ "./node_modules/primeng/components/splitbutton/splitbutton.js"));

/***/ }),

/***/ "./src/app/pages/orders/orders-details/orders-details.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/pages/orders/orders-details/orders-details.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"full\">\n    <div class=\"container b3\">\n        <div class=\"ui-g-12 br2\">\n            <h2 class=\"f4 ptb ui-g-4\">All Order</h2>\n            <div class=\"ui-g-8 b \">\n\n\n\n                <div style=\"float:right\">\n                    <mat-form-field style=\"\">\n                        <input matInput placeholder=\"Search Here...\" (keyup)=\"searchWithFilter($event)\" style=\"margin-right:5%;\">\n                        <span matPrefix><i class=\"fa fa-search\" style=\"color: #d5d5d5;\"aria-hidden=\"true\"></i>&nbsp;</span>\n                    </mat-form-field>\n                    <p-splitButton dir=\"null\" (onClick)=\"onSelect($event)\" [model]=\"items\" label=\"Sort By:\"></p-splitButton>\n                </div>\n\n\n                <!-- <button mat-button class=\"f4 b7 c3 mgl15\"><i class=\"material-icons\">filter_list</i> FILTER</button> -->\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"full\">\n    <div class=\"container b3 _orderView\">\n        <div class=\"ui-g-12\">\n            <table class=\"full b3\" style=\"border-collapse:collapse;\">\n                <tr style=\"\">\n                    <td>S.No</td>\n                    <td>Order Id</td>\n                    <td>User Name</td>\n                    <td>Product Name</td>\n                    <td>Material Used</td>\n                    <td>Texture</td>\n                    <td>Size</td>\n                    <td>Order Date & Time</td>\n                    <td>Active</td>\n                </tr>\n                <tr class=\"c5\" *ngFor=\"let order of orders;let i=index;\">\n                    <td>{{i+1}}</td>\n                    <td>{{order?.id}}</td>\n                    <td>{{order?.user}}</td>\n                    <td>{{order?.product}}</td>\n                    <td>{{order?.texture_category}}</td>\n                    <td>{{order?.texture}}</td>\n                    <td>W {{order?.breadth}}\",D {{order?.length}}\", H {{order?.height}}</td>\n                    <td>{{order?.created_at | date:'MMM d, y, h:mm a'}}</td>\n                    <td class=\"odmbt\">\n                        <button mat-mini-fab [routerLink]=\"order?.id\">\n                <mat-icon aria-label=\"visibility\">visibility</mat-icon>\n              </button>\n                    </td>\n                </tr>\n            </table>\n        </div>\n\n        <div class=\"_pagnat\">\n            <p-paginator [rows]=\"10\" [totalRecords]=\"count\" (onPageChange)=\"paginate($event)\"></p-paginator>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/pages/orders/orders-details/orders-details.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/orders/orders-details/orders-details.component.ts ***!
  \*************************************************************************/
/*! exports provided: OrdersDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersDetailsComponent", function() { return OrdersDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_http_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/http-service.service */ "./src/app/services/http-service.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var OrdersDetailsComponent = /** @class */ (function () {
    function OrdersDetailsComponent(httpService) {
        this.httpService = httpService;
        this.items = [];
    }
    OrdersDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getOrderDetails(1);
        this.items = [
            { label: 'Order Id', command: function () { _this.sortBy("id"); } },
            { label: 'User Name', command: function () { _this.sortBy("user__name"); } },
            { label: 'Product Name', command: function () { _this.sortBy("product__name"); } },
            { label: 'Texture', command: function () { _this.sortBy("texture__name"); } }
        ];
        this.httpService.GetRequest(this.httpService.base_path + "get_orders/?page=")
            .subscribe(function (res) {
            console.log(res[0].json.count);
        });
    };
    OrdersDetailsComponent.prototype.sortBy = function (str) {
        var _this = this;
        this.httpService.GetRequest(this.httpService.base_path + "get_orders/?page=1&order_by=" + str)
            .subscribe(function (res) {
            _this.count = res[0].json.count; //to count the no of pages
            _this.orders = res[0].json.data;
            console.log(res[0].json.data, "--------------------res.json.data");
        }, function (error) {
            console.log(error);
        });
    };
    OrdersDetailsComponent.prototype.getOrderDetails = function (page) {
        var _this = this;
        this.httpService.GetRequest(this.httpService.base_path + "get_orders/?page=" + page).subscribe(function (res) {
            console.log("getting orders ");
            var resp = res[0].json;
            _this.orders = resp.data;
            _this.count = resp.count; //to count the no of pages
            console.log(resp, _this.orders, _this.count);
        }, function (error) {
            console.log(error);
        });
        console.log("orders Entered --");
    };
    OrdersDetailsComponent.prototype.onSelect = function (event) {
        console.log(event, "----");
    };
    OrdersDetailsComponent.prototype.searchWithFilter = function (event) {
        var _this = this;
        if (event.target.value.length > 0) {
            this.httpService.GetRequest(this.httpService.base_path + "get_orders/?search=" + event.target.value).subscribe(function (res) {
                console.log(res);
                _this.count = res[0].json.count; //to count the no of pages
                _this.orders = res[0].json.data;
                _this.orderDetails = res[0].json.data;
                _this.totalData = res[0].json.count;
                console.log("searching orders----------------");
            }, function (error) {
                console.log(error);
            });
        }
        else {
            this.getOrderDetails(1);
        }
    };
    OrdersDetailsComponent.prototype.paginate = function (event) {
        this.getOrderDetails(event.page + 1);
    };
    OrdersDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-orders-details',
            template: __webpack_require__(/*! ./orders-details.component.html */ "./src/app/pages/orders/orders-details/orders-details.component.html"),
            styles: [__webpack_require__(/*! ../../../cards/cmstabel/cmstabel.component.scss */ "./src/app/cards/cmstabel/cmstabel.component.scss")],
        }),
        __metadata("design:paramtypes", [_services_http_service_service__WEBPACK_IMPORTED_MODULE_1__["HttpServiceService"]])
    ], OrdersDetailsComponent);
    return OrdersDetailsComponent;
}());



/***/ }),

/***/ "./src/app/pages/orders/orders-details/orders-details.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pages/orders/orders-details/orders-details.module.ts ***!
  \**********************************************************************/
/*! exports provided: OrdersDetailsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersDetailsModule", function() { return OrdersDetailsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _orders_details_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./orders-details.component */ "./src/app/pages/orders/orders-details/orders-details.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var primeng_paginator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/paginator */ "./node_modules/primeng/paginator.js");
/* harmony import */ var primeng_paginator__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(primeng_paginator__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var primeng_splitbutton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/splitbutton */ "./node_modules/primeng/splitbutton.js");
/* harmony import */ var primeng_splitbutton__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(primeng_splitbutton__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var routes = [
    {
        path: '',
        component: _orders_details_component__WEBPACK_IMPORTED_MODULE_2__["OrdersDetailsComponent"]
    }
];
var OrdersDetailsModule = /** @class */ (function () {
    function OrdersDetailsModule() {
    }
    OrdersDetailsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
                primeng_splitbutton__WEBPACK_IMPORTED_MODULE_8__["SplitButtonModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
                primeng_paginator__WEBPACK_IMPORTED_MODULE_7__["PaginatorModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]],
            declarations: [_orders_details_component__WEBPACK_IMPORTED_MODULE_2__["OrdersDetailsComponent"]]
        })
    ], OrdersDetailsModule);
    return OrdersDetailsModule;
}());



/***/ })

}]);
//# sourceMappingURL=orders-details-orders-details-module.js.map