(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["add-model-add-model-module~pages-add-category-add-category-module~pages-cms-cms-module~pages-dashboa~634866ec"],{

/***/ "./node_modules/@angular/material/esm5/badge.es5.js":
/*!**********************************************************!*\
  !*** ./node_modules/@angular/material/esm5/badge.es5.js ***!
  \**********************************************************/
/*! exports provided: MatBadgeModule, MatBadgeBase, _MatBadgeMixinBase, MatBadge */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatBadgeModule", function() { return MatBadgeModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatBadgeBase", function() { return MatBadgeBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_MatBadgeMixinBase", function() { return _MatBadgeMixinBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatBadge", function() { return MatBadge; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm5/a11y.es5.js");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/coercion */ "./node_modules/@angular/cdk/esm5/coercion.es5.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm5/core.es5.js");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */







/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
var nextId = 0;
/**
 * \@docs-private
 */
var  /**
 * \@docs-private
 */
MatBadgeBase = /** @class */ (function () {
    function MatBadgeBase() {
    }
    return MatBadgeBase;
}());
/** @type {?} */
var _MatBadgeMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["mixinDisabled"])(MatBadgeBase);
/**
 * Directive to display a text badge.
 */
var MatBadge = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(MatBadge, _super);
    function MatBadge(_document, _ngZone, _elementRef, _ariaDescriber, _renderer) {
        var _this = _super.call(this) || this;
        _this._document = _document;
        _this._ngZone = _ngZone;
        _this._elementRef = _elementRef;
        _this._ariaDescriber = _ariaDescriber;
        _this._renderer = _renderer;
        /**
         * Whether the badge has any content.
         */
        _this._hasContent = false;
        _this._color = 'primary';
        _this._overlap = true;
        /**
         * Position the badge should reside.
         * Accepts any combination of 'above'|'below' and 'before'|'after'
         */
        _this.position = 'above after';
        /**
         * Size of the badge. Can be 'small', 'medium', or 'large'.
         */
        _this.size = 'medium';
        /**
         * Unique id for the badge
         */
        _this._id = nextId++;
        return _this;
    }
    Object.defineProperty(MatBadge.prototype, "color", {
        /** The color of the badge. Can be `primary`, `accent`, or `warn`. */
        get: /**
         * The color of the badge. Can be `primary`, `accent`, or `warn`.
         * @return {?}
         */
        function () { return this._color; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._setColor(value);
            this._color = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatBadge.prototype, "overlap", {
        /** Whether the badge should overlap its contents or not */
        get: /**
         * Whether the badge should overlap its contents or not
         * @return {?}
         */
        function () { return this._overlap; },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this._overlap = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceBooleanProperty"])(val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatBadge.prototype, "content", {
        /** The content for the badge */
        get: /**
         * The content for the badge
         * @return {?}
         */
        function () { return this._content; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._content = value;
            this._hasContent = value != null && ("" + value).trim().length > 0;
            this._updateTextContent();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatBadge.prototype, "description", {
        /** Message used to describe the decorated element via aria-describedby */
        get: /**
         * Message used to describe the decorated element via aria-describedby
         * @return {?}
         */
        function () { return this._description; },
        set: /**
         * @param {?} newDescription
         * @return {?}
         */
        function (newDescription) {
            if (newDescription !== this._description) {
                this._updateHostAriaDescription(newDescription, this._description);
                this._description = newDescription;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatBadge.prototype, "hidden", {
        /** Whether the badge is hidden. */
        get: /**
         * Whether the badge is hidden.
         * @return {?}
         */
        function () { return this._hidden; },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this._hidden = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceBooleanProperty"])(val);
        },
        enumerable: true,
        configurable: true
    });
    /** Whether the badge is above the host or not */
    /**
     * Whether the badge is above the host or not
     * @return {?}
     */
    MatBadge.prototype.isAbove = /**
     * Whether the badge is above the host or not
     * @return {?}
     */
    function () {
        return this.position.indexOf('below') === -1;
    };
    /** Whether the badge is after the host or not */
    /**
     * Whether the badge is after the host or not
     * @return {?}
     */
    MatBadge.prototype.isAfter = /**
     * Whether the badge is after the host or not
     * @return {?}
     */
    function () {
        return this.position.indexOf('before') === -1;
    };
    /**
     * @return {?}
     */
    MatBadge.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this.description && this._badgeElement) {
            this._ariaDescriber.removeDescription(this._badgeElement, this.description);
        }
    };
    /**
     * Injects a span element into the DOM with the content.
     * @return {?}
     */
    MatBadge.prototype._updateTextContent = /**
     * Injects a span element into the DOM with the content.
     * @return {?}
     */
    function () {
        if (!this._badgeElement) {
            this._badgeElement = this._createBadgeElement();
        }
        else {
            this._badgeElement.textContent = this.content;
        }
        return this._badgeElement;
    };
    /**
     * Creates the badge element
     * @return {?}
     */
    MatBadge.prototype._createBadgeElement = /**
     * Creates the badge element
     * @return {?}
     */
    function () {
        /** @type {?} */
        var rootNode = this._renderer || this._document;
        /** @type {?} */
        var badgeElement = rootNode.createElement('span');
        /** @type {?} */
        var activeClass = 'mat-badge-active';
        badgeElement.setAttribute('id', "mat-badge-content-" + this._id);
        badgeElement.classList.add('mat-badge-content');
        badgeElement.textContent = this.content;
        if (this.description) {
            badgeElement.setAttribute('aria-label', this.description);
        }
        this._elementRef.nativeElement.appendChild(badgeElement);
        // animate in after insertion
        if (typeof requestAnimationFrame === 'function') {
            this._ngZone.runOutsideAngular(function () {
                requestAnimationFrame(function () {
                    badgeElement.classList.add(activeClass);
                });
            });
        }
        else {
            badgeElement.classList.add(activeClass);
        }
        return badgeElement;
    };
    /**
     * Sets the aria-label property on the element
     * @param {?} newDescription
     * @param {?} oldDescription
     * @return {?}
     */
    MatBadge.prototype._updateHostAriaDescription = /**
     * Sets the aria-label property on the element
     * @param {?} newDescription
     * @param {?} oldDescription
     * @return {?}
     */
    function (newDescription, oldDescription) {
        /** @type {?} */
        var content = this._updateTextContent();
        if (oldDescription) {
            this._ariaDescriber.removeDescription(content, oldDescription);
        }
        if (newDescription) {
            this._ariaDescriber.describe(content, newDescription);
        }
    };
    /**
     * Adds css theme class given the color to the component host
     * @param {?} colorPalette
     * @return {?}
     */
    MatBadge.prototype._setColor = /**
     * Adds css theme class given the color to the component host
     * @param {?} colorPalette
     * @return {?}
     */
    function (colorPalette) {
        if (colorPalette !== this._color) {
            if (this._color) {
                this._elementRef.nativeElement.classList.remove("mat-badge-" + this._color);
            }
            if (colorPalette) {
                this._elementRef.nativeElement.classList.add("mat-badge-" + colorPalette);
            }
        }
    };
    MatBadge.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Directive"], args: [{
                    selector: '[matBadge]',
                    inputs: ['disabled: matBadgeDisabled'],
                    host: {
                        'class': 'mat-badge',
                        '[class.mat-badge-overlap]': 'overlap',
                        '[class.mat-badge-above]': 'isAbove()',
                        '[class.mat-badge-below]': '!isAbove()',
                        '[class.mat-badge-before]': '!isAfter()',
                        '[class.mat-badge-after]': 'isAfter()',
                        '[class.mat-badge-small]': 'size === "small"',
                        '[class.mat-badge-medium]': 'size === "medium"',
                        '[class.mat-badge-large]': 'size === "large"',
                        '[class.mat-badge-hidden]': 'hidden || !_hasContent',
                        '[class.mat-badge-disabled]': 'disabled',
                    },
                },] },
    ];
    /** @nocollapse */
    MatBadge.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"],] }] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"] },
        { type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["AriaDescriber"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Renderer2"] }
    ]; };
    MatBadge.propDecorators = {
        color: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"], args: ['matBadgeColor',] }],
        overlap: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"], args: ['matBadgeOverlap',] }],
        position: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"], args: ['matBadgePosition',] }],
        content: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"], args: ['matBadge',] }],
        description: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"], args: ['matBadgeDescription',] }],
        size: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"], args: ['matBadgeSize',] }],
        hidden: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"], args: ['matBadgeHidden',] }]
    };
    return MatBadge;
}(_MatBadgeMixinBase));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var MatBadgeModule = /** @class */ (function () {
    function MatBadgeModule() {
    }
    MatBadgeModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"], args: [{
                    imports: [
                        _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["A11yModule"],
                        _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatCommonModule"]
                    ],
                    exports: [MatBadge],
                    declarations: [MatBadge],
                },] },
    ];
    return MatBadgeModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */


//# sourceMappingURL=badge.es5.js.map


/***/ }),

/***/ "./node_modules/@angular/material/esm5/menu.es5.js":
/*!*********************************************************!*\
  !*** ./node_modules/@angular/material/esm5/menu.es5.js ***!
  \*********************************************************/
/*! exports provided: MAT_MENU_SCROLL_STRATEGY, MatMenuModule, MatMenu, MAT_MENU_DEFAULT_OPTIONS, MatMenuItem, MatMenuTrigger, matMenuAnimations, fadeInItems, transformMenu, MatMenuContent, ɵa24, ɵb24, ɵc24, ɵf24, ɵd24, ɵe24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_MENU_SCROLL_STRATEGY", function() { return MAT_MENU_SCROLL_STRATEGY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatMenuModule", function() { return MatMenuModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatMenu", function() { return MatMenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_MENU_DEFAULT_OPTIONS", function() { return MAT_MENU_DEFAULT_OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatMenuItem", function() { return MatMenuItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatMenuTrigger", function() { return MatMenuTrigger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "matMenuAnimations", function() { return matMenuAnimations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeInItems", function() { return fadeInItems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transformMenu", function() { return transformMenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatMenuContent", function() { return MatMenuContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa24", function() { return MAT_MENU_DEFAULT_OPTIONS_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb24", function() { return MatMenuItemBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵc24", function() { return _MatMenuItemMixinBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵf24", function() { return MAT_MENU_PANEL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵd24", function() { return MAT_MENU_SCROLL_STRATEGY_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵe24", function() { return MAT_MENU_SCROLL_STRATEGY_FACTORY_PROVIDER; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/esm5/portal.es5.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm5/a11y.es5.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm5/core.es5.js");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/coercion */ "./node_modules/@angular/cdk/esm5/coercion.es5.js");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/keycodes */ "./node_modules/@angular/cdk/esm5/keycodes.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/cdk/bidi */ "./node_modules/@angular/cdk/esm5/bidi.es5.js");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/esm5/overlay.es5.js");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */














/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * Menu content that will be rendered lazily once the menu is opened.
 */
var MatMenuContent = /** @class */ (function () {
    function MatMenuContent(_template, _componentFactoryResolver, _appRef, _injector, _viewContainerRef, _document) {
        this._template = _template;
        this._componentFactoryResolver = _componentFactoryResolver;
        this._appRef = _appRef;
        this._injector = _injector;
        this._viewContainerRef = _viewContainerRef;
        this._document = _document;
        /**
         * Emits when the menu content has been attached.
         */
        this._attached = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    /**
     * Attaches the content with a particular context.
     * @docs-private
     */
    /**
     * Attaches the content with a particular context.
     * \@docs-private
     * @param {?=} context
     * @return {?}
     */
    MatMenuContent.prototype.attach = /**
     * Attaches the content with a particular context.
     * \@docs-private
     * @param {?=} context
     * @return {?}
     */
    function (context) {
        if (context === void 0) { context = {}; }
        if (!this._portal) {
            this._portal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["TemplatePortal"](this._template, this._viewContainerRef);
        }
        this.detach();
        if (!this._outlet) {
            this._outlet = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["DomPortalOutlet"](this._document.createElement('div'), this._componentFactoryResolver, this._appRef, this._injector);
        }
        /** @type {?} */
        var element = this._template.elementRef.nativeElement; /** @type {?} */
        ((
        // Because we support opening the same menu from different triggers (which in turn have their
        // own `OverlayRef` panel), we have to re-insert the host element every time, otherwise we
        // risk it staying attached to a pane that's no longer in the DOM.
        element.parentNode)).insertBefore(this._outlet.outletElement, element);
        this._portal.attach(this._outlet, context);
        this._attached.next();
    };
    /**
     * Detaches the content.
     * @docs-private
     */
    /**
     * Detaches the content.
     * \@docs-private
     * @return {?}
     */
    MatMenuContent.prototype.detach = /**
     * Detaches the content.
     * \@docs-private
     * @return {?}
     */
    function () {
        if (this._portal.isAttached) {
            this._portal.detach();
        }
    };
    /**
     * @return {?}
     */
    MatMenuContent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this._outlet) {
            this._outlet.dispose();
        }
    };
    MatMenuContent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: 'ng-template[matMenuContent]'
                },] },
    ];
    /** @nocollapse */
    MatMenuContent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"],] }] }
    ]; };
    return MatMenuContent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** *
 * Animations used by the mat-menu component.
 * Animation duration and timing values are based on:
 * https://material.io/guidelines/components/menus.html#menus-usage
 * \@docs-private
  @type {?} */
var matMenuAnimations = {
    /**
       * This animation controls the menu panel's entry and exit from the page.
       *
       * When the menu panel is added to the DOM, it scales in and fades in its border.
       *
       * When the menu panel is removed from the DOM, it simply fades out after a brief
       * delay to display the ripple.
       */
    transformMenu: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["trigger"])('transformMenu', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
            opacity: 0,
            transform: 'scale(0.8)'
        })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('void => enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["query"])('.mat-menu-content', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('100ms linear', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ opacity: 1 }))),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('120ms cubic-bezier(0, 0, 0.2, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ transform: 'scale(1)' })),
        ])),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('* => void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('100ms 25ms linear', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ opacity: 0 })))
    ]),
    /**
       * This animation fades in the background color and content of the menu panel
       * after its containing element is scaled in.
       */
    fadeInItems: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["trigger"])('fadeInItems', [
        // TODO(crisbeto): this is inside the `transformMenu`
        // now. Remove next time we do breaking changes.
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('showing', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ opacity: 1 })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('void => *', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ opacity: 0 }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('400ms 100ms cubic-bezier(0.55, 0, 0.55, 0.2)')
        ])
    ])
};
/** *
 * @deprecated
 * \@breaking-change 7.0.0
 * \@docs-private
  @type {?} */
var fadeInItems = matMenuAnimations.fadeInItems;
/** *
 * @deprecated
 * \@breaking-change 7.0.0
 * \@docs-private
  @type {?} */
var transformMenu = matMenuAnimations.transformMenu;

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * Throws an exception for the case when menu trigger doesn't have a valid mat-menu instance
 * \@docs-private
 * @return {?}
 */
function throwMatMenuMissingError() {
    throw Error("matMenuTriggerFor: must pass in an mat-menu instance.\n\n    Example:\n      <mat-menu #menu=\"matMenu\"></mat-menu>\n      <button [matMenuTriggerFor]=\"menu\"></button>");
}
/**
 * Throws an exception for the case when menu's x-position value isn't valid.
 * In other words, it doesn't match 'before' or 'after'.
 * \@docs-private
 * @return {?}
 */
function throwMatMenuInvalidPositionX() {
    throw Error("xPosition value must be either 'before' or after'.\n      Example: <mat-menu xPosition=\"before\" #menu=\"matMenu\"></mat-menu>");
}
/**
 * Throws an exception for the case when menu's y-position value isn't valid.
 * In other words, it doesn't match 'above' or 'below'.
 * \@docs-private
 * @return {?}
 */
function throwMatMenuInvalidPositionY() {
    throw Error("yPosition value must be either 'above' or below'.\n      Example: <mat-menu yPosition=\"above\" #menu=\"matMenu\"></mat-menu>");
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** *
 * Injection token used to provide the parent menu to menu-specific components.
 * \@docs-private
  @type {?} */
var MAT_MENU_PANEL = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('MAT_MENU_PANEL');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * \@docs-private
 */
var  /**
 * \@docs-private
 */
MatMenuItemBase = /** @class */ (function () {
    function MatMenuItemBase() {
    }
    return MatMenuItemBase;
}());
/** @type {?} */
var _MatMenuItemMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_7__["mixinDisableRipple"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_7__["mixinDisabled"])(MatMenuItemBase));
/**
 * This directive is intended to be used inside an mat-menu tag.
 * It exists mostly to set the role attribute.
 */
var MatMenuItem = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_5__["__extends"])(MatMenuItem, _super);
    function MatMenuItem(_elementRef, document, _focusMonitor, _parentMenu) {
        var _this = 
        // @breaking-change 7.0.0 make `_focusMonitor` and `document` required params.
        _super.call(this) || this;
        _this._elementRef = _elementRef;
        _this._focusMonitor = _focusMonitor;
        _this._parentMenu = _parentMenu;
        /**
         * Stream that emits when the menu item is hovered.
         */
        _this._hovered = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        /**
         * Whether the menu item is highlighted.
         */
        _this._highlighted = false;
        /**
         * Whether the menu item acts as a trigger for a sub-menu.
         */
        _this._triggersSubmenu = false;
        if (_focusMonitor) {
            // Start monitoring the element so it gets the appropriate focused classes. We want
            // to show the focus style for menu items only when the focus was not caused by a
            // mouse or touch interaction.
            _focusMonitor.monitor(_this._elementRef, false);
        }
        if (_parentMenu && _parentMenu.addItem) {
            _parentMenu.addItem(_this);
        }
        _this._document = document;
        return _this;
    }
    /** Focuses the menu item. */
    /**
     * Focuses the menu item.
     * @param {?=} origin
     * @return {?}
     */
    MatMenuItem.prototype.focus = /**
     * Focuses the menu item.
     * @param {?=} origin
     * @return {?}
     */
    function (origin) {
        if (origin === void 0) { origin = 'program'; }
        if (this._focusMonitor) {
            this._focusMonitor.focusVia(this._getHostElement(), origin);
        }
        else {
            this._getHostElement().focus();
        }
    };
    /**
     * @return {?}
     */
    MatMenuItem.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this._focusMonitor) {
            this._focusMonitor.stopMonitoring(this._elementRef);
        }
        if (this._parentMenu && this._parentMenu.removeItem) {
            this._parentMenu.removeItem(this);
        }
        this._hovered.complete();
    };
    /** Used to set the `tabindex`. */
    /**
     * Used to set the `tabindex`.
     * @return {?}
     */
    MatMenuItem.prototype._getTabIndex = /**
     * Used to set the `tabindex`.
     * @return {?}
     */
    function () {
        return this.disabled ? '-1' : '0';
    };
    /** Returns the host DOM element. */
    /**
     * Returns the host DOM element.
     * @return {?}
     */
    MatMenuItem.prototype._getHostElement = /**
     * Returns the host DOM element.
     * @return {?}
     */
    function () {
        return this._elementRef.nativeElement;
    };
    /** Prevents the default element actions if it is disabled. */
    /**
     * Prevents the default element actions if it is disabled.
     * @param {?} event
     * @return {?}
     */
    MatMenuItem.prototype._checkDisabled = /**
     * Prevents the default element actions if it is disabled.
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this.disabled) {
            event.preventDefault();
            event.stopPropagation();
        }
    };
    /** Emits to the hover stream. */
    /**
     * Emits to the hover stream.
     * @return {?}
     */
    MatMenuItem.prototype._handleMouseEnter = /**
     * Emits to the hover stream.
     * @return {?}
     */
    function () {
        this._hovered.next(this);
    };
    /** Gets the label to be used when determining whether the option should be focused. */
    /**
     * Gets the label to be used when determining whether the option should be focused.
     * @return {?}
     */
    MatMenuItem.prototype.getLabel = /**
     * Gets the label to be used when determining whether the option should be focused.
     * @return {?}
     */
    function () {
        /** @type {?} */
        var element = this._elementRef.nativeElement;
        /** @type {?} */
        var textNodeType = this._document ? this._document.TEXT_NODE : 3;
        /** @type {?} */
        var output = '';
        if (element.childNodes) {
            /** @type {?} */
            var length_1 = element.childNodes.length;
            // Go through all the top-level text nodes and extract their text.
            // We skip anything that's not a text node to prevent the text from
            // being thrown off by something like an icon.
            for (var i = 0; i < length_1; i++) {
                if (element.childNodes[i].nodeType === textNodeType) {
                    output += element.childNodes[i].textContent;
                }
            }
        }
        return output.trim();
    };
    MatMenuItem.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{selector: '[mat-menu-item]',
                    exportAs: 'matMenuItem',
                    inputs: ['disabled', 'disableRipple'],
                    host: {
                        'role': 'menuitem',
                        'class': 'mat-menu-item',
                        '[class.mat-menu-item-highlighted]': '_highlighted',
                        '[class.mat-menu-item-submenu-trigger]': '_triggersSubmenu',
                        '[attr.tabindex]': '_getTabIndex()',
                        '[attr.aria-disabled]': 'disabled.toString()',
                        '[attr.disabled]': 'disabled || null',
                        '(click)': '_checkDisabled($event)',
                        '(mouseenter)': '_handleMouseEnter()',
                    },
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                    template: "<ng-content></ng-content><div class=\"mat-menu-ripple\" matRipple [matRippleDisabled]=\"disableRipple || disabled\" [matRippleTrigger]=\"_getHostElement()\"></div>",
                },] },
    ];
    /** @nocollapse */
    MatMenuItem.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"],] }] },
        { type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__["FocusMonitor"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [MAT_MENU_PANEL,] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }] }
    ]; };
    return MatMenuItem;
}(_MatMenuItemMixinBase));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** *
 * Injection token to be used to override the default options for `mat-menu`.
  @type {?} */
var MAT_MENU_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('mat-menu-default-options', {
    providedIn: 'root',
    factory: MAT_MENU_DEFAULT_OPTIONS_FACTORY
});
/**
 * \@docs-private
 * @return {?}
 */
function MAT_MENU_DEFAULT_OPTIONS_FACTORY() {
    return {
        overlapTrigger: false,
        xPosition: 'after',
        yPosition: 'below',
        backdropClass: 'cdk-overlay-transparent-backdrop',
    };
}
/** *
 * Start elevation for the menu panel.
 * \@docs-private
  @type {?} */
var MAT_MENU_BASE_ELEVATION = 4;
var MatMenu = /** @class */ (function () {
    function MatMenu(_elementRef, _ngZone, _defaultOptions) {
        this._elementRef = _elementRef;
        this._ngZone = _ngZone;
        this._defaultOptions = _defaultOptions;
        this._xPosition = this._defaultOptions.xPosition;
        this._yPosition = this._defaultOptions.yPosition;
        /**
         * Menu items inside the current menu.
         */
        this._items = [];
        /**
         * Emits whenever the amount of menu items changes.
         */
        this._itemChanges = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        /**
         * Subscription to tab events on the menu panel
         */
        this._tabSubscription = rxjs__WEBPACK_IMPORTED_MODULE_3__["Subscription"].EMPTY;
        /**
         * Config object to be passed into the menu's ngClass
         */
        this._classList = {};
        /**
         * Current state of the panel animation.
         */
        this._panelAnimationState = 'void';
        /**
         * Emits whenever an animation on the menu completes.
         */
        this._animationDone = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        /**
         * Class to be added to the backdrop element.
         */
        this.backdropClass = this._defaultOptions.backdropClass;
        this._overlapTrigger = this._defaultOptions.overlapTrigger;
        this._hasBackdrop = this._defaultOptions.hasBackdrop;
        /**
         * Event emitted when the menu is closed.
         */
        this.closed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Event emitted when the menu is closed.
         * @deprecated Switch to `closed` instead
         * \@breaking-change 7.0.0
         */
        this.close = this.closed;
    }
    Object.defineProperty(MatMenu.prototype, "xPosition", {
        /** Position of the menu in the X axis. */
        get: /**
         * Position of the menu in the X axis.
         * @return {?}
         */
        function () { return this._xPosition; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value !== 'before' && value !== 'after') {
                throwMatMenuInvalidPositionX();
            }
            this._xPosition = value;
            this.setPositionClasses();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatMenu.prototype, "yPosition", {
        /** Position of the menu in the Y axis. */
        get: /**
         * Position of the menu in the Y axis.
         * @return {?}
         */
        function () { return this._yPosition; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value !== 'above' && value !== 'below') {
                throwMatMenuInvalidPositionY();
            }
            this._yPosition = value;
            this.setPositionClasses();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatMenu.prototype, "overlapTrigger", {
        /** Whether the menu should overlap its trigger. */
        get: /**
         * Whether the menu should overlap its trigger.
         * @return {?}
         */
        function () { return this._overlapTrigger; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._overlapTrigger = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_8__["coerceBooleanProperty"])(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatMenu.prototype, "hasBackdrop", {
        /** Whether the menu has a backdrop. */
        get: /**
         * Whether the menu has a backdrop.
         * @return {?}
         */
        function () { return this._hasBackdrop; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._hasBackdrop = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_8__["coerceBooleanProperty"])(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatMenu.prototype, "panelClass", {
        /**
         * This method takes classes set on the host mat-menu element and applies them on the
         * menu template that displays in the overlay container.  Otherwise, it's difficult
         * to style the containing menu from outside the component.
         * @param classes list of class names
         */
        set: /**
         * This method takes classes set on the host mat-menu element and applies them on the
         * menu template that displays in the overlay container.  Otherwise, it's difficult
         * to style the containing menu from outside the component.
         * @param {?} classes list of class names
         * @return {?}
         */
        function (classes) {
            if (classes && classes.length) {
                this._classList = classes.split(' ').reduce(function (obj, className) {
                    obj[className] = true;
                    return obj;
                }, {});
                this._elementRef.nativeElement.className = '';
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatMenu.prototype, "classList", {
        /**
         * This method takes classes set on the host mat-menu element and applies them on the
         * menu template that displays in the overlay container.  Otherwise, it's difficult
         * to style the containing menu from outside the component.
         * @deprecated Use `panelClass` instead.
         * @breaking-change 7.0.0
         */
        get: /**
         * This method takes classes set on the host mat-menu element and applies them on the
         * menu template that displays in the overlay container.  Otherwise, it's difficult
         * to style the containing menu from outside the component.
         * @deprecated Use `panelClass` instead.
         * \@breaking-change 7.0.0
         * @return {?}
         */
        function () { return this.panelClass; },
        set: /**
         * @param {?} classes
         * @return {?}
         */
        function (classes) { this.panelClass = classes; },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    MatMenu.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.setPositionClasses();
    };
    /**
     * @return {?}
     */
    MatMenu.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._keyManager = new _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__["FocusKeyManager"](this._items).withWrap().withTypeAhead();
        this._tabSubscription = this._keyManager.tabOut.subscribe(function () { return _this.closed.emit('tab'); });
    };
    /**
     * @return {?}
     */
    MatMenu.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._tabSubscription.unsubscribe();
        this.closed.complete();
    };
    /** Stream that emits whenever the hovered menu item changes. */
    /**
     * Stream that emits whenever the hovered menu item changes.
     * @return {?}
     */
    MatMenu.prototype._hovered = /**
     * Stream that emits whenever the hovered menu item changes.
     * @return {?}
     */
    function () {
        return this._itemChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["startWith"])(this._items), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["switchMap"])(function (items) { return rxjs__WEBPACK_IMPORTED_MODULE_3__["merge"].apply(void 0, items.map(function (item) { return item._hovered; })); }));
    };
    /** Handle a keyboard event from the menu, delegating to the appropriate action. */
    /**
     * Handle a keyboard event from the menu, delegating to the appropriate action.
     * @param {?} event
     * @return {?}
     */
    MatMenu.prototype._handleKeydown = /**
     * Handle a keyboard event from the menu, delegating to the appropriate action.
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var keyCode = event.keyCode;
        switch (keyCode) {
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_9__["ESCAPE"]:
                this.closed.emit('keydown');
                event.stopPropagation();
                break;
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_9__["LEFT_ARROW"]:
                if (this.parentMenu && this.direction === 'ltr') {
                    this.closed.emit('keydown');
                }
                break;
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_9__["RIGHT_ARROW"]:
                if (this.parentMenu && this.direction === 'rtl') {
                    this.closed.emit('keydown');
                }
                break;
            default:
                if (keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_9__["UP_ARROW"] || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_9__["DOWN_ARROW"]) {
                    this._keyManager.setFocusOrigin('keyboard');
                }
                this._keyManager.onKeydown(event);
        }
    };
    /**
     * Focus the first item in the menu.
     * @param origin Action from which the focus originated. Used to set the correct styling.
     */
    /**
     * Focus the first item in the menu.
     * @param {?=} origin Action from which the focus originated. Used to set the correct styling.
     * @return {?}
     */
    MatMenu.prototype.focusFirstItem = /**
     * Focus the first item in the menu.
     * @param {?=} origin Action from which the focus originated. Used to set the correct styling.
     * @return {?}
     */
    function (origin) {
        var _this = this;
        if (origin === void 0) { origin = 'program'; }
        // When the content is rendered lazily, it takes a bit before the items are inside the DOM.
        if (this.lazyContent) {
            this._ngZone.onStable.asObservable()
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["take"])(1))
                .subscribe(function () { return _this._keyManager.setFocusOrigin(origin).setFirstItemActive(); });
        }
        else {
            this._keyManager.setFocusOrigin(origin).setFirstItemActive();
        }
    };
    /**
     * Resets the active item in the menu. This is used when the menu is opened, allowing
     * the user to start from the first option when pressing the down arrow.
     */
    /**
     * Resets the active item in the menu. This is used when the menu is opened, allowing
     * the user to start from the first option when pressing the down arrow.
     * @return {?}
     */
    MatMenu.prototype.resetActiveItem = /**
     * Resets the active item in the menu. This is used when the menu is opened, allowing
     * the user to start from the first option when pressing the down arrow.
     * @return {?}
     */
    function () {
        this._keyManager.setActiveItem(-1);
    };
    /**
     * Sets the menu panel elevation.
     * @param depth Number of parent menus that come before the menu.
     */
    /**
     * Sets the menu panel elevation.
     * @param {?} depth Number of parent menus that come before the menu.
     * @return {?}
     */
    MatMenu.prototype.setElevation = /**
     * Sets the menu panel elevation.
     * @param {?} depth Number of parent menus that come before the menu.
     * @return {?}
     */
    function (depth) {
        /** @type {?} */
        var newElevation = "mat-elevation-z" + (MAT_MENU_BASE_ELEVATION + depth);
        /** @type {?} */
        var customElevation = Object.keys(this._classList).find(function (c) { return c.startsWith('mat-elevation-z'); });
        if (!customElevation || customElevation === this._previousElevation) {
            if (this._previousElevation) {
                this._classList[this._previousElevation] = false;
            }
            this._classList[newElevation] = true;
            this._previousElevation = newElevation;
        }
    };
    /**
     * Registers a menu item with the menu.
     * @docs-private
     */
    /**
     * Registers a menu item with the menu.
     * \@docs-private
     * @param {?} item
     * @return {?}
     */
    MatMenu.prototype.addItem = /**
     * Registers a menu item with the menu.
     * \@docs-private
     * @param {?} item
     * @return {?}
     */
    function (item) {
        // We register the items through this method, rather than picking them up through
        // `ContentChildren`, because we need the items to be picked up by their closest
        // `mat-menu` ancestor. If we used `@ContentChildren(MatMenuItem, {descendants: true})`,
        // all descendant items will bleed into the top-level menu in the case where the consumer
        // has `mat-menu` instances nested inside each other.
        if (this._items.indexOf(item) === -1) {
            this._items.push(item);
            this._itemChanges.next(this._items);
        }
    };
    /**
     * Removes an item from the menu.
     * @docs-private
     */
    /**
     * Removes an item from the menu.
     * \@docs-private
     * @param {?} item
     * @return {?}
     */
    MatMenu.prototype.removeItem = /**
     * Removes an item from the menu.
     * \@docs-private
     * @param {?} item
     * @return {?}
     */
    function (item) {
        /** @type {?} */
        var index = this._items.indexOf(item);
        if (this._items.indexOf(item) > -1) {
            this._items.splice(index, 1);
            this._itemChanges.next(this._items);
        }
    };
    /**
     * Adds classes to the menu panel based on its position. Can be used by
     * consumers to add specific styling based on the position.
     * @param posX Position of the menu along the x axis.
     * @param posY Position of the menu along the y axis.
     * @docs-private
     */
    /**
     * Adds classes to the menu panel based on its position. Can be used by
     * consumers to add specific styling based on the position.
     * \@docs-private
     * @param {?=} posX Position of the menu along the x axis.
     * @param {?=} posY Position of the menu along the y axis.
     * @return {?}
     */
    MatMenu.prototype.setPositionClasses = /**
     * Adds classes to the menu panel based on its position. Can be used by
     * consumers to add specific styling based on the position.
     * \@docs-private
     * @param {?=} posX Position of the menu along the x axis.
     * @param {?=} posY Position of the menu along the y axis.
     * @return {?}
     */
    function (posX, posY) {
        if (posX === void 0) { posX = this.xPosition; }
        if (posY === void 0) { posY = this.yPosition; }
        /** @type {?} */
        var classes = this._classList;
        classes['mat-menu-before'] = posX === 'before';
        classes['mat-menu-after'] = posX === 'after';
        classes['mat-menu-above'] = posY === 'above';
        classes['mat-menu-below'] = posY === 'below';
    };
    /** Starts the enter animation. */
    /**
     * Starts the enter animation.
     * @return {?}
     */
    MatMenu.prototype._startAnimation = /**
     * Starts the enter animation.
     * @return {?}
     */
    function () {
        // @breaking-change 7.0.0 Combine with _resetAnimation.
        this._panelAnimationState = 'enter';
    };
    /** Resets the panel animation to its initial state. */
    /**
     * Resets the panel animation to its initial state.
     * @return {?}
     */
    MatMenu.prototype._resetAnimation = /**
     * Resets the panel animation to its initial state.
     * @return {?}
     */
    function () {
        // @breaking-change 7.0.0 Combine with _startAnimation.
        this._panelAnimationState = 'void';
    };
    /** Callback that is invoked when the panel animation completes. */
    /**
     * Callback that is invoked when the panel animation completes.
     * @param {?} event
     * @return {?}
     */
    MatMenu.prototype._onAnimationDone = /**
     * Callback that is invoked when the panel animation completes.
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this._animationDone.next(event);
        this._isAnimating = false;
        // Scroll the content element to the top once the animation is done. This is necessary, because
        // we move focus to the first item while it's still being animated, which can throw the browser
        // off when it determines the scroll position. Alternatively we can move focus when the
        // animation is done, however moving focus asynchronously will interrupt screen readers
        // which are in the process of reading out the menu already. We take the `element` from
        // the `event` since we can't use a `ViewChild` to access the pane.
        if (event.toState === 'enter' && this._keyManager.activeItemIndex === 0) {
            event.element.scrollTop = 0;
        }
    };
    MatMenu.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{selector: 'mat-menu',
                    template: "<ng-template><div class=\"mat-menu-panel\" [ngClass]=\"_classList\" (keydown)=\"_handleKeydown($event)\" (click)=\"closed.emit('click')\" [@transformMenu]=\"_panelAnimationState\" (@transformMenu.start)=\"_isAnimating = true\" (@transformMenu.done)=\"_onAnimationDone($event)\" tabindex=\"-1\" role=\"menu\"><div class=\"mat-menu-content\"><ng-content></ng-content></div></div></ng-template>",
                    styles: [".mat-menu-panel{min-width:112px;max-width:280px;overflow:auto;-webkit-overflow-scrolling:touch;max-height:calc(100vh - 48px);border-radius:4px;outline:0}@media screen and (-ms-high-contrast:active){.mat-menu-panel{outline:solid 1px}}.mat-menu-content:not(:empty){padding-top:8px;padding-bottom:8px}.mat-menu-item{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;outline:0;border:none;-webkit-tap-highlight-color:transparent;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;line-height:48px;height:48px;padding:0 16px;text-align:left;text-decoration:none;max-width:100%;position:relative}.mat-menu-item::-moz-focus-inner{border:0}.mat-menu-item[disabled]{cursor:default}[dir=rtl] .mat-menu-item{text-align:right}.mat-menu-item .mat-icon{margin-right:16px;vertical-align:middle}.mat-menu-item .mat-icon svg{vertical-align:top}[dir=rtl] .mat-menu-item .mat-icon{margin-left:16px;margin-right:0}@media screen and (-ms-high-contrast:active){.mat-menu-item-highlighted,.mat-menu-item.cdk-keyboard-focused,.mat-menu-item.cdk-program-focused{outline:dotted 1px}}.mat-menu-item-submenu-trigger{padding-right:32px}.mat-menu-item-submenu-trigger::after{width:0;height:0;border-style:solid;border-width:5px 0 5px 5px;border-color:transparent transparent transparent currentColor;content:'';display:inline-block;position:absolute;top:50%;right:16px;transform:translateY(-50%)}[dir=rtl] .mat-menu-item-submenu-trigger{padding-right:16px;padding-left:32px}[dir=rtl] .mat-menu-item-submenu-trigger::after{right:auto;left:16px;transform:rotateY(180deg) translateY(-50%)}.mat-menu-panel.ng-animating .mat-menu-item-submenu-trigger{pointer-events:none}button.mat-menu-item{width:100%}.mat-menu-item .mat-menu-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}"],
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                    exportAs: 'matMenu',
                    animations: [
                        matMenuAnimations.transformMenu,
                        matMenuAnimations.fadeInItems
                    ],
                    providers: [
                        { provide: MAT_MENU_PANEL, useExisting: MatMenu }
                    ]
                },] },
    ];
    /** @nocollapse */
    MatMenu.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [MAT_MENU_DEFAULT_OPTIONS,] }] }
    ]; };
    MatMenu.propDecorators = {
        backdropClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        xPosition: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        yPosition: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        templateRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"],] }],
        items: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"], args: [MatMenuItem,] }],
        lazyContent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"], args: [MatMenuContent,] }],
        overlapTrigger: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        hasBackdrop: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        panelClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['class',] }],
        classList: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        closed: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        close: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
    };
    return MatMenu;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** *
 * Injection token that determines the scroll handling while the menu is open.
  @type {?} */
var MAT_MENU_SCROLL_STRATEGY = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('mat-menu-scroll-strategy');
/**
 * \@docs-private
 * @param {?} overlay
 * @return {?}
 */
function MAT_MENU_SCROLL_STRATEGY_FACTORY(overlay) {
    return function () { return overlay.scrollStrategies.reposition(); };
}
/** *
 * \@docs-private
  @type {?} */
var MAT_MENU_SCROLL_STRATEGY_FACTORY_PROVIDER = {
    provide: MAT_MENU_SCROLL_STRATEGY,
    deps: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_12__["Overlay"]],
    useFactory: MAT_MENU_SCROLL_STRATEGY_FACTORY,
};
/** *
 * Default top padding of the menu panel.
  @type {?} */
var MENU_PANEL_TOP_PADDING = 8;
/**
 * This directive is intended to be used in conjunction with an mat-menu tag.  It is
 * responsible for toggling the display of the provided menu instance.
 */
var MatMenuTrigger = /** @class */ (function () {
    function MatMenuTrigger(_overlay, _element, _viewContainerRef, scrollStrategy, _parentMenu, _menuItemInstance, _dir, _focusMonitor) {
        this._overlay = _overlay;
        this._element = _element;
        this._viewContainerRef = _viewContainerRef;
        this._parentMenu = _parentMenu;
        this._menuItemInstance = _menuItemInstance;
        this._dir = _dir;
        this._focusMonitor = _focusMonitor;
        this._overlayRef = null;
        this._menuOpen = false;
        this._closeSubscription = rxjs__WEBPACK_IMPORTED_MODULE_3__["Subscription"].EMPTY;
        this._hoverSubscription = rxjs__WEBPACK_IMPORTED_MODULE_3__["Subscription"].EMPTY;
        this._openedByMouse = false;
        /**
         * Event emitted when the associated menu is opened.
         */
        this.menuOpened = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Event emitted when the associated menu is opened.
         * @deprecated Switch to `menuOpened` instead
         * \@breaking-change 7.0.0
         */
        this.onMenuOpen = this.menuOpened;
        /**
         * Event emitted when the associated menu is closed.
         */
        this.menuClosed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Event emitted when the associated menu is closed.
         * @deprecated Switch to `menuClosed` instead
         * \@breaking-change 7.0.0
         */
        this.onMenuClose = this.menuClosed;
        if (_menuItemInstance) {
            _menuItemInstance._triggersSubmenu = this.triggersSubmenu();
        }
        this._scrollStrategy = scrollStrategy;
    }
    Object.defineProperty(MatMenuTrigger.prototype, "_deprecatedMatMenuTriggerFor", {
        /**
         * @deprecated
         * @breaking-change 7.0.0
         */
        get: /**
         * @deprecated
         * \@breaking-change 7.0.0
         * @return {?}
         */
        function () {
            return this.menu;
        },
        set: /**
         * @param {?} v
         * @return {?}
         */
        function (v) {
            this.menu = v;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    MatMenuTrigger.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._checkMenu();
        this.menu.close.asObservable().subscribe(function (reason) {
            _this._destroyMenu();
            // If a click closed the menu, we should close the entire chain of nested menus.
            if ((reason === 'click' || reason === 'tab') && _this._parentMenu) {
                _this._parentMenu.closed.emit(reason);
            }
        });
        this._handleHover();
    };
    /**
     * @return {?}
     */
    MatMenuTrigger.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this._overlayRef) {
            this._overlayRef.dispose();
            this._overlayRef = null;
        }
        this._cleanUpSubscriptions();
    };
    Object.defineProperty(MatMenuTrigger.prototype, "menuOpen", {
        /** Whether the menu is open. */
        get: /**
         * Whether the menu is open.
         * @return {?}
         */
        function () {
            return this._menuOpen;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatMenuTrigger.prototype, "dir", {
        /** The text direction of the containing app. */
        get: /**
         * The text direction of the containing app.
         * @return {?}
         */
        function () {
            return this._dir && this._dir.value === 'rtl' ? 'rtl' : 'ltr';
        },
        enumerable: true,
        configurable: true
    });
    /** Whether the menu triggers a sub-menu or a top-level one. */
    /**
     * Whether the menu triggers a sub-menu or a top-level one.
     * @return {?}
     */
    MatMenuTrigger.prototype.triggersSubmenu = /**
     * Whether the menu triggers a sub-menu or a top-level one.
     * @return {?}
     */
    function () {
        return !!(this._menuItemInstance && this._parentMenu);
    };
    /** Toggles the menu between the open and closed states. */
    /**
     * Toggles the menu between the open and closed states.
     * @return {?}
     */
    MatMenuTrigger.prototype.toggleMenu = /**
     * Toggles the menu between the open and closed states.
     * @return {?}
     */
    function () {
        return this._menuOpen ? this.closeMenu() : this.openMenu();
    };
    /** Opens the menu. */
    /**
     * Opens the menu.
     * @return {?}
     */
    MatMenuTrigger.prototype.openMenu = /**
     * Opens the menu.
     * @return {?}
     */
    function () {
        var _this = this;
        if (this._menuOpen) {
            return;
        }
        this._checkMenu();
        /** @type {?} */
        var overlayRef = this._createOverlay();
        this._setPosition(/** @type {?} */ (overlayRef.getConfig().positionStrategy));
        overlayRef.attach(this._portal);
        if (this.menu.lazyContent) {
            this.menu.lazyContent.attach(this.menuData);
        }
        this._closeSubscription = this._menuClosingActions().subscribe(function () { return _this.closeMenu(); });
        this._initMenu();
        if (this.menu instanceof MatMenu) {
            this.menu._startAnimation();
        }
    };
    /** Closes the menu. */
    /**
     * Closes the menu.
     * @return {?}
     */
    MatMenuTrigger.prototype.closeMenu = /**
     * Closes the menu.
     * @return {?}
     */
    function () {
        this.menu.close.emit();
    };
    /**
     * Focuses the menu trigger.
     * @param origin Source of the menu trigger's focus.
     */
    /**
     * Focuses the menu trigger.
     * @param {?=} origin Source of the menu trigger's focus.
     * @return {?}
     */
    MatMenuTrigger.prototype.focus = /**
     * Focuses the menu trigger.
     * @param {?=} origin Source of the menu trigger's focus.
     * @return {?}
     */
    function (origin) {
        if (origin === void 0) { origin = 'program'; }
        if (this._focusMonitor) {
            this._focusMonitor.focusVia(this._element, origin);
        }
        else {
            this._element.nativeElement.focus();
        }
    };
    /**
     * Closes the menu and does the necessary cleanup.
     * @return {?}
     */
    MatMenuTrigger.prototype._destroyMenu = /**
     * Closes the menu and does the necessary cleanup.
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this._overlayRef || !this.menuOpen) {
            return;
        }
        /** @type {?} */
        var menu = this.menu;
        this._closeSubscription.unsubscribe();
        this._overlayRef.detach();
        if (menu instanceof MatMenu) {
            menu._resetAnimation();
            if (menu.lazyContent) {
                // Wait for the exit animation to finish before detaching the content.
                menu._animationDone
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["filter"])(function (event) { return event.toState === 'void'; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["take"])(1), 
                // Interrupt if the content got re-attached.
                Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["takeUntil"])(menu.lazyContent._attached))
                    .subscribe(function () { return ((menu.lazyContent)).detach(); }, undefined, function () {
                    // No matter whether the content got re-attached, reset the menu.
                    _this._resetMenu();
                });
            }
            else {
                this._resetMenu();
            }
        }
        else {
            this._resetMenu();
            if (menu.lazyContent) {
                menu.lazyContent.detach();
            }
        }
    };
    /**
     * This method sets the menu state to open and focuses the first item if
     * the menu was opened via the keyboard.
     * @return {?}
     */
    MatMenuTrigger.prototype._initMenu = /**
     * This method sets the menu state to open and focuses the first item if
     * the menu was opened via the keyboard.
     * @return {?}
     */
    function () {
        this.menu.parentMenu = this.triggersSubmenu() ? this._parentMenu : undefined;
        this.menu.direction = this.dir;
        this._setMenuElevation();
        this._setIsMenuOpen(true);
        this.menu.focusFirstItem(this._openedByMouse ? 'mouse' : 'program');
    };
    /**
     * Updates the menu elevation based on the amount of parent menus that it has.
     * @return {?}
     */
    MatMenuTrigger.prototype._setMenuElevation = /**
     * Updates the menu elevation based on the amount of parent menus that it has.
     * @return {?}
     */
    function () {
        if (this.menu.setElevation) {
            /** @type {?} */
            var depth = 0;
            /** @type {?} */
            var parentMenu = this.menu.parentMenu;
            while (parentMenu) {
                depth++;
                parentMenu = parentMenu.parentMenu;
            }
            this.menu.setElevation(depth);
        }
    };
    /**
     * This method resets the menu when it's closed, most importantly restoring
     * focus to the menu trigger if the menu was opened via the keyboard.
     * @return {?}
     */
    MatMenuTrigger.prototype._resetMenu = /**
     * This method resets the menu when it's closed, most importantly restoring
     * focus to the menu trigger if the menu was opened via the keyboard.
     * @return {?}
     */
    function () {
        this._setIsMenuOpen(false);
        // We should reset focus if the user is navigating using a keyboard or
        // if we have a top-level trigger which might cause focus to be lost
        // when clicking on the backdrop.
        if (!this._openedByMouse) {
            // Note that the focus style will show up both for `program` and
            // `keyboard` so we don't have to specify which one it is.
            this.focus();
        }
        else if (!this.triggersSubmenu()) {
            this.focus('mouse');
        }
        this._openedByMouse = false;
    };
    /**
     * @param {?} isOpen
     * @return {?}
     */
    MatMenuTrigger.prototype._setIsMenuOpen = /**
     * @param {?} isOpen
     * @return {?}
     */
    function (isOpen) {
        this._menuOpen = isOpen;
        this._menuOpen ? this.menuOpened.emit() : this.menuClosed.emit();
        if (this.triggersSubmenu()) {
            this._menuItemInstance._highlighted = isOpen;
        }
    };
    /**
     * This method checks that a valid instance of MatMenu has been passed into
     * matMenuTriggerFor. If not, an exception is thrown.
     * @return {?}
     */
    MatMenuTrigger.prototype._checkMenu = /**
     * This method checks that a valid instance of MatMenu has been passed into
     * matMenuTriggerFor. If not, an exception is thrown.
     * @return {?}
     */
    function () {
        if (!this.menu) {
            throwMatMenuMissingError();
        }
    };
    /**
     * This method creates the overlay from the provided menu's template and saves its
     * OverlayRef so that it can be attached to the DOM when openMenu is called.
     * @return {?}
     */
    MatMenuTrigger.prototype._createOverlay = /**
     * This method creates the overlay from the provided menu's template and saves its
     * OverlayRef so that it can be attached to the DOM when openMenu is called.
     * @return {?}
     */
    function () {
        if (!this._overlayRef) {
            this._portal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["TemplatePortal"](this.menu.templateRef, this._viewContainerRef);
            /** @type {?} */
            var config = this._getOverlayConfig();
            this._subscribeToPositions(/** @type {?} */ (config.positionStrategy));
            this._overlayRef = this._overlay.create(config);
        }
        return this._overlayRef;
    };
    /**
     * This method builds the configuration object needed to create the overlay, the OverlayState.
     * @return {?} OverlayConfig
     */
    MatMenuTrigger.prototype._getOverlayConfig = /**
     * This method builds the configuration object needed to create the overlay, the OverlayState.
     * @return {?} OverlayConfig
     */
    function () {
        return new _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_12__["OverlayConfig"]({
            positionStrategy: this._overlay.position()
                .flexibleConnectedTo(this._element)
                .withLockedPosition()
                .withTransformOriginOn('.mat-menu-panel'),
            hasBackdrop: this.menu.hasBackdrop == null ? !this.triggersSubmenu() : this.menu.hasBackdrop,
            backdropClass: this.menu.backdropClass || 'cdk-overlay-transparent-backdrop',
            scrollStrategy: this._scrollStrategy(),
            direction: this._dir
        });
    };
    /**
     * Listens to changes in the position of the overlay and sets the correct classes
     * on the menu based on the new position. This ensures the animation origin is always
     * correct, even if a fallback position is used for the overlay.
     * @param {?} position
     * @return {?}
     */
    MatMenuTrigger.prototype._subscribeToPositions = /**
     * Listens to changes in the position of the overlay and sets the correct classes
     * on the menu based on the new position. This ensures the animation origin is always
     * correct, even if a fallback position is used for the overlay.
     * @param {?} position
     * @return {?}
     */
    function (position) {
        var _this = this;
        if (this.menu.setPositionClasses) {
            position.positionChanges.subscribe(function (change) {
                /** @type {?} */
                var posX = change.connectionPair.overlayX === 'start' ? 'after' : 'before';
                /** @type {?} */
                var posY = change.connectionPair.overlayY === 'top' ? 'below' : 'above'; /** @type {?} */
                ((_this.menu.setPositionClasses))(posX, posY);
            });
        }
    };
    /**
     * Sets the appropriate positions on a position strategy
     * so the overlay connects with the trigger correctly.
     * @param {?} positionStrategy Strategy whose position to update.
     * @return {?}
     */
    MatMenuTrigger.prototype._setPosition = /**
     * Sets the appropriate positions on a position strategy
     * so the overlay connects with the trigger correctly.
     * @param {?} positionStrategy Strategy whose position to update.
     * @return {?}
     */
    function (positionStrategy) {
        var _a = this.menu.xPosition === 'before' ? ['end', 'start'] : ['start', 'end'], originX = _a[0], originFallbackX = _a[1];
        var _b = this.menu.yPosition === 'above' ? ['bottom', 'top'] : ['top', 'bottom'], overlayY = _b[0], overlayFallbackY = _b[1];
        var _c = [overlayY, overlayFallbackY], originY = _c[0], originFallbackY = _c[1];
        var _d = [originX, originFallbackX], overlayX = _d[0], overlayFallbackX = _d[1];
        /** @type {?} */
        var offsetY = 0;
        if (this.triggersSubmenu()) {
            // When the menu is a sub-menu, it should always align itself
            // to the edges of the trigger, instead of overlapping it.
            overlayFallbackX = originX = this.menu.xPosition === 'before' ? 'start' : 'end';
            originFallbackX = overlayX = originX === 'end' ? 'start' : 'end';
            offsetY = overlayY === 'bottom' ? MENU_PANEL_TOP_PADDING : -MENU_PANEL_TOP_PADDING;
        }
        else if (!this.menu.overlapTrigger) {
            originY = overlayY === 'top' ? 'bottom' : 'top';
            originFallbackY = overlayFallbackY === 'top' ? 'bottom' : 'top';
        }
        positionStrategy.withPositions([
            { originX: originX, originY: originY, overlayX: overlayX, overlayY: overlayY, offsetY: offsetY },
            { originX: originFallbackX, originY: originY, overlayX: overlayFallbackX, overlayY: overlayY, offsetY: offsetY },
            {
                originX: originX,
                originY: originFallbackY,
                overlayX: overlayX,
                overlayY: overlayFallbackY,
                offsetY: -offsetY
            },
            {
                originX: originFallbackX,
                originY: originFallbackY,
                overlayX: overlayFallbackX,
                overlayY: overlayFallbackY,
                offsetY: -offsetY
            }
        ]);
    };
    /**
     * Cleans up the active subscriptions.
     * @return {?}
     */
    MatMenuTrigger.prototype._cleanUpSubscriptions = /**
     * Cleans up the active subscriptions.
     * @return {?}
     */
    function () {
        this._closeSubscription.unsubscribe();
        this._hoverSubscription.unsubscribe();
    };
    /**
     * Returns a stream that emits whenever an action that should close the menu occurs.
     * @return {?}
     */
    MatMenuTrigger.prototype._menuClosingActions = /**
     * Returns a stream that emits whenever an action that should close the menu occurs.
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var backdrop = /** @type {?} */ ((this._overlayRef)).backdropClick();
        /** @type {?} */
        var detachments = /** @type {?} */ ((this._overlayRef)).detachments();
        /** @type {?} */
        var parentClose = this._parentMenu ? this._parentMenu.closed : Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])();
        /** @type {?} */
        var hover = this._parentMenu ? this._parentMenu._hovered().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["filter"])(function (active) { return active !== _this._menuItemInstance; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["filter"])(function () { return _this._menuOpen; })) : Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])();
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["merge"])(backdrop, parentClose, hover, detachments);
    };
    /** Handles mouse presses on the trigger. */
    /**
     * Handles mouse presses on the trigger.
     * @param {?} event
     * @return {?}
     */
    MatMenuTrigger.prototype._handleMousedown = /**
     * Handles mouse presses on the trigger.
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (!Object(_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__["isFakeMousedownFromScreenReader"])(event)) {
            // Since right or middle button clicks won't trigger the `click` event,
            // we shouldn't consider the menu as opened by mouse in those cases.
            this._openedByMouse = event.button === 0;
            // Since clicking on the trigger won't close the menu if it opens a sub-menu,
            // we should prevent focus from moving onto it via click to avoid the
            // highlight from lingering on the menu item.
            if (this.triggersSubmenu()) {
                event.preventDefault();
            }
        }
    };
    /** Handles key presses on the trigger. */
    /**
     * Handles key presses on the trigger.
     * @param {?} event
     * @return {?}
     */
    MatMenuTrigger.prototype._handleKeydown = /**
     * Handles key presses on the trigger.
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var keyCode = event.keyCode;
        if (this.triggersSubmenu() && ((keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_9__["RIGHT_ARROW"] && this.dir === 'ltr') ||
            (keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_9__["LEFT_ARROW"] && this.dir === 'rtl'))) {
            this.openMenu();
        }
    };
    /** Handles click events on the trigger. */
    /**
     * Handles click events on the trigger.
     * @param {?} event
     * @return {?}
     */
    MatMenuTrigger.prototype._handleClick = /**
     * Handles click events on the trigger.
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this.triggersSubmenu()) {
            // Stop event propagation to avoid closing the parent menu.
            event.stopPropagation();
            this.openMenu();
        }
        else {
            this.toggleMenu();
        }
    };
    /**
     * Handles the cases where the user hovers over the trigger.
     * @return {?}
     */
    MatMenuTrigger.prototype._handleHover = /**
     * Handles the cases where the user hovers over the trigger.
     * @return {?}
     */
    function () {
        var _this = this;
        // Subscribe to changes in the hovered item in order to toggle the panel.
        if (!this.triggersSubmenu()) {
            return;
        }
        this._hoverSubscription = this._parentMenu._hovered()
            // Since we might have multiple competing triggers for the same menu (e.g. a sub-menu
            // with different data and triggers), we have to delay it by a tick to ensure that
            // it won't be closed immediately after it is opened.
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["filter"])(function (active) { return active === _this._menuItemInstance && !active.disabled; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["delay"])(0, rxjs__WEBPACK_IMPORTED_MODULE_3__["asapScheduler"]))
            .subscribe(function () {
            _this._openedByMouse = true;
            // If the same menu is used between multiple triggers, it might still be animating
            // while the new trigger tries to re-open it. Wait for the animation to finish
            // before doing so. Also interrupt if the user moves to another item.
            if (_this.menu instanceof MatMenu && _this.menu._isAnimating) {
                // We need the `delay(0)` here in order to avoid
                // 'changed after checked' errors in some cases. See #12194.
                _this.menu._animationDone
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["delay"])(0, rxjs__WEBPACK_IMPORTED_MODULE_3__["asapScheduler"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["takeUntil"])(_this._parentMenu._hovered()))
                    .subscribe(function () { return _this.openMenu(); });
            }
            else {
                _this.openMenu();
            }
        });
    };
    MatMenuTrigger.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: "[mat-menu-trigger-for], [matMenuTriggerFor]",
                    host: {
                        'aria-haspopup': 'true',
                        '[attr.aria-expanded]': 'menuOpen || null',
                        '(mousedown)': '_handleMousedown($event)',
                        '(keydown)': '_handleKeydown($event)',
                        '(click)': '_handleClick($event)',
                    },
                    exportAs: 'matMenuTrigger'
                },] },
    ];
    /** @nocollapse */
    MatMenuTrigger.ctorParameters = function () { return [
        { type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_12__["Overlay"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [MAT_MENU_SCROLL_STRATEGY,] }] },
        { type: MatMenu, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }] },
        { type: MatMenuItem, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"] }] },
        { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_11__["Directionality"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }] },
        { type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__["FocusMonitor"] }
    ]; };
    MatMenuTrigger.propDecorators = {
        _deprecatedMatMenuTriggerFor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['mat-menu-trigger-for',] }],
        menu: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['matMenuTriggerFor',] }],
        menuData: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['matMenuTriggerData',] }],
        menuOpened: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        onMenuOpen: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        menuClosed: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        onMenuClose: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
    };
    return MatMenuTrigger;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var MatMenuModule = /** @class */ (function () {
    function MatMenuModule() {
    }
    MatMenuModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatCommonModule"],
                        _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatRippleModule"],
                        _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_12__["OverlayModule"],
                    ],
                    exports: [MatMenu, MatMenuItem, MatMenuTrigger, MatMenuContent, _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatCommonModule"]],
                    declarations: [MatMenu, MatMenuItem, MatMenuTrigger, MatMenuContent],
                    providers: [MAT_MENU_SCROLL_STRATEGY_FACTORY_PROVIDER]
                },] },
    ];
    return MatMenuModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */


//# sourceMappingURL=menu.es5.js.map


/***/ })

}]);
//# sourceMappingURL=add-model-add-model-module~pages-add-category-add-category-module~pages-cms-cms-module~pages-dashboa~634866ec.js.map