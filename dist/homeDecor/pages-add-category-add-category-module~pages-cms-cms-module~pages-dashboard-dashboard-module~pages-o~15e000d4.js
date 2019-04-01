(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-add-category-add-category-module~pages-cms-cms-module~pages-dashboard-dashboard-module~pages-o~15e000d4"],{

/***/ "./node_modules/primeng/breadcrumb.js":
/*!********************************************!*\
  !*** ./node_modules/primeng/breadcrumb.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* Shorthand */

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./components/breadcrumb/breadcrumb */ "./node_modules/primeng/components/breadcrumb/breadcrumb.js"));

/***/ }),

/***/ "./node_modules/primeng/components/breadcrumb/breadcrumb.js":
/*!******************************************************************!*\
  !*** ./node_modules/primeng/components/breadcrumb/breadcrumb.js ***!
  \******************************************************************/
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
var common_1 = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var Breadcrumb = /** @class */ (function () {
    function Breadcrumb() {
    }
    Breadcrumb.prototype.itemClick = function (event, item) {
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
    };
    Breadcrumb.prototype.onHomeClick = function (event) {
        if (this.home) {
            this.itemClick(event, this.home);
        }
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Array)
    ], Breadcrumb.prototype, "model", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], Breadcrumb.prototype, "style", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], Breadcrumb.prototype, "styleClass", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], Breadcrumb.prototype, "home", void 0);
    Breadcrumb = __decorate([
        core_1.Component({
            selector: 'p-breadcrumb',
            template: "\n        <div [class]=\"styleClass\" [ngStyle]=\"style\" [ngClass]=\"'ui-breadcrumb ui-widget ui-widget-header ui-helper-clearfix ui-corner-all'\">\n            <ul>\n                <li class=\"ui-breadcrumb-home\" *ngIf=\"home\">\n                    <a *ngIf=\"!home.routerLink\" [href]=\"home.url||'#'\" class=\"ui-menuitem-link\" (click)=\"itemClick($event, home)\" \n                        [ngClass]=\"{'ui-state-disabled':home.disabled}\" [attr.target]=\"home.target\" [attr.title]=\"home.title\" [attr.id]=\"home.id\">\n                        <span [ngClass]=\"home.icon||'pi pi-home'\"></span>\n                    </a>\n                    <a *ngIf=\"home.routerLink\" [routerLink]=\"home.routerLink\" [queryParams]=\"home.queryParams\" [routerLinkActive]=\"'ui-state-active'\" [routerLinkActiveOptions]=\"home.routerLinkActiveOptions||{exact:false}\" class=\"ui-menuitem-link\" (click)=\"itemClick($event, home)\" \n                        [ngClass]=\"{'ui-state-disabled':home.disabled}\" [attr.target]=\"home.target\" [attr.title]=\"home.title\" [attr.id]=\"home.id\">\n                        <span [ngClass]=\"home.icon||'pi pi-home'\"></span>\n                    </a>\n                </li>\n                <li class=\"ui-breadcrumb-chevron pi pi-chevron-right\" *ngIf=\"model&&home\"></li>\n                <ng-template ngFor let-item let-end=\"last\" [ngForOf]=\"model\">\n                    <li role=\"menuitem\">\n                        <a *ngIf=\"!item.routerLink\" [href]=\"item.url||'#'\" class=\"ui-menuitem-link\" (click)=\"itemClick($event, item)\" \n                            [ngClass]=\"{'ui-state-disabled':item.disabled}\" [attr.target]=\"item.target\" [attr.title]=\"item.title\" [attr.id]=\"item.id\">\n                            <span *ngIf=\"item.icon\" class=\"ui-menuitem-icon\" [ngClass]=\"item.icon\"></span>\n                            <span class=\"ui-menuitem-text\">{{item.label}}</span>\n                        </a>\n                        <a *ngIf=\"item.routerLink\" [routerLink]=\"item.routerLink\" [queryParams]=\"item.queryParams\" [routerLinkActive]=\"'ui-state-active'\" [routerLinkActiveOptions]=\"item.routerLinkActiveOptions||{exact:false}\" class=\"ui-menuitem-link\" (click)=\"itemClick($event, item)\" \n                            [ngClass]=\"{'ui-state-disabled':item.disabled}\" [attr.target]=\"item.target\" [attr.title]=\"item.title\" [attr.id]=\"item.id\">\n                            <span *ngIf=\"item.icon\" class=\"ui-menuitem-icon\" [ngClass]=\"item.icon\"></span>\n                            <span class=\"ui-menuitem-text\">{{item.label}}</span>\n                        </a>\n                    </li>\n                    <li class=\"ui-breadcrumb-chevron pi pi-chevron-right\" *ngIf=\"!end\"></li>\n                </ng-template>\n            </ul>\n        </div>\n    "
        })
    ], Breadcrumb);
    return Breadcrumb;
}());
exports.Breadcrumb = Breadcrumb;
var BreadcrumbModule = /** @class */ (function () {
    function BreadcrumbModule() {
    }
    BreadcrumbModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, router_1.RouterModule],
            exports: [Breadcrumb, router_1.RouterModule],
            declarations: [Breadcrumb]
        })
    ], BreadcrumbModule);
    return BreadcrumbModule;
}());
exports.BreadcrumbModule = BreadcrumbModule;
//# sourceMappingURL=breadcrumb.js.map

/***/ }),

/***/ "./src/app/components/header/header.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n    <div class=\"full b1 c3 ov\" style=\"font-family: Poppinsl;\">\n        <div class=\"container\">\n            <div class=\"ui-g-4\">\n                <h3><a style=\"color: white;font-family: Poppinsl;font-size: 24px;text-decoration: none;margin-top: 3%;\" routerLink=\"/dashboard\"><span style=\" font-weight: 600;\">Home</span> <span style=\" font-weight: 100;\"> Decor</span></a></h3>\n            </div>\n            <div class=\"ui-g-6 nop tr f3\">\n                <nav>\n                    <ul>\n                        <li class=\"c d pad o\" routerLink=\"/dashboard\" routerLinkActive=\"activeTab\">Dashboard</li>\n                        <li class=\"c d pad o\" routerLink=\"/users\" routerLinkActive=\"activeTab\">Users</li>\n                        <li class=\"c d pad o\" routerLink=\"/orders\" routerLinkActive=\"activeTab\">Orders</li>\n                        <li class=\"c d pad droper\" (click)=\"optionWithCategory($event,0)\" [ngClass]=\"{'activeTab':active==3}\">Add Category </li>\n                        <li class=\"c d pad droper\" (click)=\"optionWithCategory($event,1)\" [ngClass]=\"{'activeTab':active==4}\">Cms</li>\n                    </ul>\n                </nav>\n            </div>\n            <div class=\"ui-g-2 tr matIco9n nop\">\n                <button mat-icon-button [matMenuTriggerFor]=\"notify\">\n                    <mat-icon matBadge=\"{{'2'}}\" matBadgeColor=\"primary\">notifications</mat-icon>\n                </button>\n                <button mat-icon-button (click)=\"optionWithCategory($event,2)\">\n                    <mat-icon aria-label=\"icon\">person_outline</mat-icon>\n                </button>\n            </div>\n        </div>\n    </div>\n</header>\n\n<mat-menu #notify=\"matMenu\" class=\"NotifyBox\">\n    <button mat-menu-item>Notification 1</button>\n    <button mat-menu-item>Notification 2</button>\n</mat-menu>\n\n<div class=\"deleteConform\" *ngIf=\"showOption\">\n    <div class=\"overlay-backdrop bt\" (click)=\"heroAction(false)\"></div>\n    <div class=\"_diglogConform b3 sh bd4\" [ngStyle]=\"{'left': left}\">\n        <button mat-button *ngFor=\"let cat of categoryOption\" (click)=\"heroAction(true,cat)\" [routerLink]=\"cat?.route\">{{cat?.cat}}</button>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/components/header/header.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "header .full {\n  box-shadow: 0px 2px 3px 0px #c1c1c1;\n  height: 53px; }\n\n.deleteConform ._diglogConform {\n  position: fixed;\n  z-index: 100;\n  left: 60%;\n  top: 50px;\n  min-width: 150px;\n  max-width: 220px;\n  padding: 10px 0; }\n\n.deleteConform ._diglogConform button {\n    width: 100%;\n    text-align: left;\n    font-size: 14px;\n    height: 50px;\n    border-radius: 0;\n    font-family: 'OpenSans-Regular'; }\n\n/*---------Run time add class--------*/\n\n.activeTab {\n  border-bottom: 2px solid var(--white); }\n\n.matIco9n {\n  padding-top: 6px; }\n\n.matIco9n button {\n    margin-left: 16px; }\n\n.droper {\n  padding-right: 22px;\n  background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAQAAABLCVATAAAAc0lEQVR4Ae3MMQ5AQBBA0RH2ojqdWqWfS+i2U9G43BdZUQzFxjYi8w7w5Aecc3RMVPKAiok2txk4xHtFTeTQ50UjSaQ2zUwySh6UZKaRE83VqBg51ZIqAotpXlSBwGaaV9VqmoLKNGWVShm0qDGVinPuI3ZKQqCFdfwgWQAAAABJRU5ErkJggg==\");\n  background-repeat: no-repeat;\n  background-size: 22px;\n  background-position: right 18px; }\n"

/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
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


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(route) {
        var _this = this;
        this.route = route;
        this.showOption = false;
        this.category = {
            "cms": [
                { cat: "Category List", route: '/cms/categoryList' },
                { cat: "Add Model", route: '/cms/categoryList/p/add-model' },
            ],
            "add": [
                { cat: "Add Category", route: '/add-category' },
                { cat: "Add Sub Category", route: '/add-category/addsubcategory' },
                { cat: "Add Model", route: '/cms/categoryList/p/add-model' },
                { cat: "Add Texture Category", route: '/add-category/addtexturecategory' },
                { cat: "Add Texture", route: '/add-category/addtexture' }
            ],
            "logOut": [
                { cat: "Log out", route: '/login', id: -1 },
            ]
        };
        this.scroll = function () {
            _this.showOption = false;
            window.removeEventListener('scroll', _this.scroll, true);
        };
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.optionWithCategory = function (event, id) {
        window.addEventListener('scroll', this.scroll, true);
        var a = JSON.stringify(id);
        if (id != 2) {
            this.left = (event.clientX - 200) + "px";
        }
        else {
            this.left = (event.clientX - 100) + "px";
        }
        switch (id) {
            case 0:
                this.categoryOption = this.category.add;
                break;
            case 1:
                this.categoryOption = this.category.cms;
                break;
            case 2:
                this.categoryOption = this.category.logOut;
                break;
            default:
                break;
        }
        console.log(this.categoryOption);
        this.showOption = true;
    };
    HeaderComponent.prototype.heroAction = function (info, foo) {
        var _this = this;
        if (info) {
            if (foo.id) {
                localStorage.clear();
                sessionStorage.clear();
                setTimeout(function () {
                    _this.route.navigateByUrl(foo.route);
                }, 500);
            }
            else {
                setTimeout(function () {
                    _this.scroll();
                }, 200);
            }
        }
        else {
            setTimeout(function () {
                _this.scroll();
            }, 200);
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], HeaderComponent.prototype, "active", void 0);
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/components/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/components/header/header.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/header/header.module.ts":
/*!****************************************************!*\
  !*** ./src/app/components/header/header.module.ts ***!
  \****************************************************/
/*! exports provided: HeaderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderModule", function() { return HeaderModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/badge */ "./node_modules/@angular/material/esm5/badge.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm5/menu.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var HeaderModule = /** @class */ (function () {
    function HeaderModule() {
    }
    HeaderModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
                _angular_material_badge__WEBPACK_IMPORTED_MODULE_3__["MatBadgeModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__["MatMenuModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"],
            ],
            declarations: [_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"]],
            exports: [_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"]]
        })
    ], HeaderModule);
    return HeaderModule;
}());



/***/ }),

/***/ "./src/app/components/locator/locator.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/locator/locator.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"ui-g-12 breadcrumbs\">\n    <ul class=\"ui-g-12 nopad\">\n        <li *ngFor=\"let a of ar\">\n            <a> {{a.name}} </a>\n        </li>\n    </ul>\n</div> -->\n<div class=\"ui-g-12 breadcrumbs\">\n    <ul class=\"ui-g-12 nopad fo\">\n        <li *ngFor=\"let element of elements; let i=index\">\n            <a routerLink=\"/dashboard\" style=\"color:gray;\">{{element.nameDash}}</a><span>{{element.name}}</span>\n        </li>\n    </ul>\n</div>"

/***/ }),

/***/ "./src/app/components/locator/locator.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/locator/locator.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".breadcrumbs li {\n  display: inline-block;\n  padding-right: 12px;\n  position: relative;\n  color: var(--rgbW1); }\n  .breadcrumbs li a {\n    color: inherit; }\n  .breadcrumbs li:last-child {\n  color: var(--black); }\n  .breadcrumbs li:not(:first-child) {\n  padding-left: 6px; }\n  .breadcrumbs li:not(:last-child):after {\n  content: \"/\";\n  display: block;\n  position: absolute;\n  right: 0;\n  top: 0; }\n"

/***/ }),

/***/ "./src/app/components/locator/locator.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/locator/locator.component.ts ***!
  \*********************************************************/
/*! exports provided: LocatorComponent, LocatorModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocatorComponent", function() { return LocatorComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocatorModule", function() { return LocatorModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var primeng_breadcrumb__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/breadcrumb */ "./node_modules/primeng/breadcrumb.js");
/* harmony import */ var primeng_breadcrumb__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(primeng_breadcrumb__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// I also import Router so that I can subscribe to events

//import { HttpClient } from 'selenium-webdriver/http';


var LocatorComponent = /** @class */ (function () {
    //elements = [{ name: `Dashboard ${this.router.url == '/dashboard' ? '' : this.router.url}`, path: this.router.url }];  // `Dashboard ${this.router.url == '/dashboard'?'':this.router.url}`
    function LocatorComponent(router, location, header) {
        this.router = router;
        this.header = header;
        //elements =[{ name:`Dashboard ${this.router.url=='/dahsboard' ? '':this.router.url}`, path:this.router.url} ];
        this.elements = [{ nameDash: 'Dashboard /', name: this.routingBreadCrumb(), path: this.router.url }];
        //console.log(window.location.hostname());
        //console.log(location.path(),"------   location.path()  -------");
        //console.log(win.location.host,"=============   window.location.host   ================");
        console.log(header, "http client module");
    }
    LocatorComponent.prototype.ngOnInit = function () {
    };
    LocatorComponent.prototype.routingBreadCrumb = function () {
        if (this.router.url === '/dashboard') {
            return " ";
        }
        else if (this.router.url === '/users') {
            return ' Users';
        }
        else if (this.router.url === '/orders') {
            return ' Orders';
        }
        else if (this.router.url === '/add-category') {
            return ' Add Category';
        }
        else if (this.router.url === '/add-category/addsubcategory') {
            return ' Add Category';
        }
        else if (this.router.url === '/cms/categoryList') {
            return ' CMS';
        }
        else if (this.router.url === '/add-category/addtexture') {
            return ' Add Category';
        }
        else if (this.router.url === '/add-category/addtexturecategory') {
            return ' Add Category ';
        }
        else if (this.router.url === '/cms/categoryList') {
            return ' CMS';
        }
        else if (this.router.url === '/cms/categoryList/p/add-model') {
            return ' Category List';
        }
        else {
            return " ";
        }
    };
    LocatorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-locator',
            template: __webpack_require__(/*! ./locator.component.html */ "./src/app/components/locator/locator.component.html"),
            styles: [__webpack_require__(/*! ./locator.component.scss */ "./src/app/components/locator/locator.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]])
    ], LocatorComponent);
    return LocatorComponent;
}());

var LocatorModule = /** @class */ (function () {
    function LocatorModule() {
    }
    LocatorModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
                primeng_breadcrumb__WEBPACK_IMPORTED_MODULE_3__["BreadcrumbModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_4__["HttpModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"]
            ],
            declarations: [LocatorComponent],
            exports: [LocatorComponent]
        })
    ], LocatorModule);
    return LocatorModule;
}());



/***/ })

}]);
//# sourceMappingURL=pages-add-category-add-category-module~pages-cms-cms-module~pages-dashboard-dashboard-module~pages-o~15e000d4.js.map