(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["add-model-add-model-module~category-lists-category-lists-module~option-category-option-category-modu~6c3a31f1"],{

/***/ "./node_modules/@angular/cdk/esm5/text-field.es5.js":
/*!**********************************************************!*\
  !*** ./node_modules/@angular/cdk/esm5/text-field.es5.js ***!
  \**********************************************************/
/*! exports provided: AutofillMonitor, CdkAutofill, CdkTextareaAutosize, TextFieldModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutofillMonitor", function() { return AutofillMonitor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkAutofill", function() { return CdkAutofill; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkTextareaAutosize", function() { return CdkTextareaAutosize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextFieldModule", function() { return TextFieldModule; });
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/platform */ "./node_modules/@angular/cdk/esm5/platform.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/coercion */ "./node_modules/@angular/cdk/esm5/coercion.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
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
/** *
 * Options to pass to the animationstart listener.
  @type {?} */
var listenerOptions = Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__["supportsPassiveEventListeners"])() ? { passive: true } : false;
/**
 * An injectable service that can be used to monitor the autofill state of an input.
 * Based on the following blog post:
 * https://medium.com/\@brunn/detecting-autofilled-fields-in-javascript-aed598d25da7
 */
var AutofillMonitor = /** @class */ (function () {
    function AutofillMonitor(_platform, _ngZone) {
        this._platform = _platform;
        this._ngZone = _ngZone;
        this._monitoredElements = new Map();
    }
    /**
     * @param {?} elementOrRef
     * @return {?}
     */
    AutofillMonitor.prototype.monitor = /**
     * @param {?} elementOrRef
     * @return {?}
     */
    function (elementOrRef) {
        var _this = this;
        if (!this._platform.isBrowser) {
            return rxjs__WEBPACK_IMPORTED_MODULE_2__["EMPTY"];
        }
        /** @type {?} */
        var element = elementOrRef instanceof _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] ? elementOrRef.nativeElement : elementOrRef;
        /** @type {?} */
        var info = this._monitoredElements.get(element);
        if (info) {
            return info.subject.asObservable();
        }
        /** @type {?} */
        var result = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /** @type {?} */
        var cssClass = 'cdk-text-field-autofilled';
        /** @type {?} */
        var listener = /** @type {?} */ ((function (event) {
            // Animation events fire on initial element render, we check for the presence of the autofill
            // CSS class to make sure this is a real change in state, not just the initial render before
            // we fire off events.
            if (event.animationName === 'cdk-text-field-autofill-start' &&
                !element.classList.contains(cssClass)) {
                element.classList.add(cssClass);
                _this._ngZone.run(function () { return result.next({ target: /** @type {?} */ (event.target), isAutofilled: true }); });
            }
            else if (event.animationName === 'cdk-text-field-autofill-end' &&
                element.classList.contains(cssClass)) {
                element.classList.remove(cssClass);
                _this._ngZone.run(function () { return result.next({ target: /** @type {?} */ (event.target), isAutofilled: false }); });
            }
        }));
        this._ngZone.runOutsideAngular(function () {
            element.addEventListener('animationstart', listener, listenerOptions);
            element.classList.add('cdk-text-field-autofill-monitored');
        });
        this._monitoredElements.set(element, {
            subject: result,
            unlisten: function () {
                element.removeEventListener('animationstart', listener, listenerOptions);
            }
        });
        return result.asObservable();
    };
    /**
     * @param {?} elementOrRef
     * @return {?}
     */
    AutofillMonitor.prototype.stopMonitoring = /**
     * @param {?} elementOrRef
     * @return {?}
     */
    function (elementOrRef) {
        /** @type {?} */
        var element = elementOrRef instanceof _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] ? elementOrRef.nativeElement : elementOrRef;
        /** @type {?} */
        var info = this._monitoredElements.get(element);
        if (info) {
            info.unlisten();
            info.subject.complete();
            element.classList.remove('cdk-text-field-autofill-monitored');
            element.classList.remove('cdk-text-field-autofilled');
            this._monitoredElements.delete(element);
        }
    };
    /**
     * @return {?}
     */
    AutofillMonitor.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._monitoredElements.forEach(function (_info, element) { return _this.stopMonitoring(element); });
    };
    AutofillMonitor.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"], args: [{ providedIn: 'root' },] },
    ];
    /** @nocollapse */
    AutofillMonitor.ctorParameters = function () { return [
        { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__["Platform"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
    ]; };
    /** @nocollapse */ AutofillMonitor.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["defineInjectable"])({ factory: function AutofillMonitor_Factory() { return new AutofillMonitor(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["inject"])(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__["Platform"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"])); }, token: AutofillMonitor, providedIn: "root" });
    return AutofillMonitor;
}());
/**
 * A directive that can be used to monitor the autofill state of an input.
 */
var CdkAutofill = /** @class */ (function () {
    function CdkAutofill(_elementRef, _autofillMonitor) {
        this._elementRef = _elementRef;
        this._autofillMonitor = _autofillMonitor;
        /**
         * Emits when the autofill state of the element changes.
         */
        this.cdkAutofill = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    /**
     * @return {?}
     */
    CdkAutofill.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._autofillMonitor
            .monitor(this._elementRef)
            .subscribe(function (event) { return _this.cdkAutofill.emit(event); });
    };
    /**
     * @return {?}
     */
    CdkAutofill.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._autofillMonitor.stopMonitoring(this._elementRef);
    };
    CdkAutofill.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{
                    selector: '[cdkAutofill]',
                },] },
    ];
    /** @nocollapse */
    CdkAutofill.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: AutofillMonitor }
    ]; };
    CdkAutofill.propDecorators = {
        cdkAutofill: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }]
    };
    return CdkAutofill;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * Directive to automatically resize a textarea to fit its content.
 */
var CdkTextareaAutosize = /** @class */ (function () {
    function CdkTextareaAutosize(_elementRef, _platform, _ngZone) {
        this._elementRef = _elementRef;
        this._platform = _platform;
        this._ngZone = _ngZone;
        this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this._enabled = true;
        this._textareaElement = /** @type {?} */ (this._elementRef.nativeElement);
    }
    Object.defineProperty(CdkTextareaAutosize.prototype, "minRows", {
        /** Minimum amount of rows in the textarea. */
        get: /**
         * Minimum amount of rows in the textarea.
         * @return {?}
         */
        function () { return this._minRows; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._minRows = value;
            this._setMinHeight();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CdkTextareaAutosize.prototype, "maxRows", {
        /** Maximum amount of rows in the textarea. */
        get: /**
         * Maximum amount of rows in the textarea.
         * @return {?}
         */
        function () { return this._maxRows; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._maxRows = value;
            this._setMaxHeight();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CdkTextareaAutosize.prototype, "enabled", {
        /** Whether autosizing is enabled or not */
        get: /**
         * Whether autosizing is enabled or not
         * @return {?}
         */
        function () { return this._enabled; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            value = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceBooleanProperty"])(value);
            // Only act if the actual value changed. This specifically helps to not run
            // resizeToFitContent too early (i.e. before ngAfterViewInit)
            if (this._enabled !== value) {
                (this._enabled = value) ? this.resizeToFitContent(true) : this.reset();
            }
        },
        enumerable: true,
        configurable: true
    });
    /** Sets the minimum height of the textarea as determined by minRows. */
    /**
     * Sets the minimum height of the textarea as determined by minRows.
     * @return {?}
     */
    CdkTextareaAutosize.prototype._setMinHeight = /**
     * Sets the minimum height of the textarea as determined by minRows.
     * @return {?}
     */
    function () {
        /** @type {?} */
        var minHeight = this.minRows && this._cachedLineHeight ?
            this.minRows * this._cachedLineHeight + "px" : null;
        if (minHeight) {
            this._textareaElement.style.minHeight = minHeight;
        }
    };
    /** Sets the maximum height of the textarea as determined by maxRows. */
    /**
     * Sets the maximum height of the textarea as determined by maxRows.
     * @return {?}
     */
    CdkTextareaAutosize.prototype._setMaxHeight = /**
     * Sets the maximum height of the textarea as determined by maxRows.
     * @return {?}
     */
    function () {
        /** @type {?} */
        var maxHeight = this.maxRows && this._cachedLineHeight ?
            this.maxRows * this._cachedLineHeight + "px" : null;
        if (maxHeight) {
            this._textareaElement.style.maxHeight = maxHeight;
        }
    };
    /**
     * @return {?}
     */
    CdkTextareaAutosize.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this._platform.isBrowser) {
            // Remember the height which we started with in case autosizing is disabled
            this._initialHeight = this._textareaElement.style.height;
            this.resizeToFitContent();
            this._ngZone.runOutsideAngular(function () {
                Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(window, 'resize')
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["auditTime"])(16), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(_this._destroyed))
                    .subscribe(function () { return _this.resizeToFitContent(true); });
            });
        }
    };
    /**
     * @return {?}
     */
    CdkTextareaAutosize.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._destroyed.next();
        this._destroyed.complete();
    };
    /**
     * Cache the height of a single-row textarea if it has not already been cached.
     *
     * We need to know how large a single "row" of a textarea is in order to apply minRows and
     * maxRows. For the initial version, we will assume that the height of a single line in the
     * textarea does not ever change.
     * @return {?}
     */
    CdkTextareaAutosize.prototype._cacheTextareaLineHeight = /**
     * Cache the height of a single-row textarea if it has not already been cached.
     *
     * We need to know how large a single "row" of a textarea is in order to apply minRows and
     * maxRows. For the initial version, we will assume that the height of a single line in the
     * textarea does not ever change.
     * @return {?}
     */
    function () {
        if (this._cachedLineHeight) {
            return;
        }
        /** @type {?} */
        var textareaClone = /** @type {?} */ (this._textareaElement.cloneNode(false));
        textareaClone.rows = 1;
        // Use `position: absolute` so that this doesn't cause a browser layout and use
        // `visibility: hidden` so that nothing is rendered. Clear any other styles that
        // would affect the height.
        textareaClone.style.position = 'absolute';
        textareaClone.style.visibility = 'hidden';
        textareaClone.style.border = 'none';
        textareaClone.style.padding = '0';
        textareaClone.style.height = '';
        textareaClone.style.minHeight = '';
        textareaClone.style.maxHeight = '';
        // In Firefox it happens that textarea elements are always bigger than the specified amount
        // of rows. This is because Firefox tries to add extra space for the horizontal scrollbar.
        // As a workaround that removes the extra space for the scrollbar, we can just set overflow
        // to hidden. This ensures that there is no invalid calculation of the line height.
        // See Firefox bug report: https://bugzilla.mozilla.org/show_bug.cgi?id=33654
        textareaClone.style.overflow = 'hidden'; /** @type {?} */
        ((this._textareaElement.parentNode)).appendChild(textareaClone);
        this._cachedLineHeight = textareaClone.clientHeight; /** @type {?} */
        ((this._textareaElement.parentNode)).removeChild(textareaClone);
        // Min and max heights have to be re-calculated if the cached line height changes
        this._setMinHeight();
        this._setMaxHeight();
    };
    /**
     * @return {?}
     */
    CdkTextareaAutosize.prototype.ngDoCheck = /**
     * @return {?}
     */
    function () {
        if (this._platform.isBrowser) {
            this.resizeToFitContent();
        }
    };
    /**
     * Resize the textarea to fit its content.
     * @param force Whether to force a height recalculation. By default the height will be
     *    recalculated only if the value changed since the last call.
     */
    /**
     * Resize the textarea to fit its content.
     * @param {?=} force Whether to force a height recalculation. By default the height will be
     *    recalculated only if the value changed since the last call.
     * @return {?}
     */
    CdkTextareaAutosize.prototype.resizeToFitContent = /**
     * Resize the textarea to fit its content.
     * @param {?=} force Whether to force a height recalculation. By default the height will be
     *    recalculated only if the value changed since the last call.
     * @return {?}
     */
    function (force) {
        var _this = this;
        if (force === void 0) { force = false; }
        // If autosizing is disabled, just skip everything else
        if (!this._enabled) {
            return;
        }
        this._cacheTextareaLineHeight();
        // If we haven't determined the line-height yet, we know we're still hidden and there's no point
        // in checking the height of the textarea.
        if (!this._cachedLineHeight) {
            return;
        }
        /** @type {?} */
        var textarea = /** @type {?} */ (this._elementRef.nativeElement);
        /** @type {?} */
        var value = textarea.value;
        // Only resize of the value changed since these calculations can be expensive.
        if (value === this._previousValue && !force) {
            return;
        }
        /** @type {?} */
        var placeholderText = textarea.placeholder;
        // Reset the textarea height to auto in order to shrink back to its default size.
        // Also temporarily force overflow:hidden, so scroll bars do not interfere with calculations.
        // Long placeholders that are wider than the textarea width may lead to a bigger scrollHeight
        // value. To ensure that the scrollHeight is not bigger than the content, the placeholders
        // need to be removed temporarily.
        textarea.classList.add('cdk-textarea-autosize-measuring');
        textarea.placeholder = '';
        /** @type {?} */
        var height = textarea.scrollHeight - 4;
        // Use the scrollHeight to know how large the textarea *would* be if fit its entire value.
        textarea.style.height = height + "px";
        textarea.classList.remove('cdk-textarea-autosize-measuring');
        textarea.placeholder = placeholderText;
        // On Firefox resizing the textarea will prevent it from scrolling to the caret position.
        // We need to re-set the selection in order for it to scroll to the proper position.
        if (typeof requestAnimationFrame !== 'undefined') {
            this._ngZone.runOutsideAngular(function () { return requestAnimationFrame(function () {
                var selectionStart = textarea.selectionStart, selectionEnd = textarea.selectionEnd;
                // IE will throw an "Unspecified error" if we try to set the selection range after the
                // element has been removed from the DOM. Assert that the directive hasn't been destroyed
                // between the time we requested the animation frame and when it was executed.
                // Also note that we have to assert that the textarea is focused before we set the
                // selection range. Setting the selection range on a non-focused textarea will cause
                // it to receive focus on IE and Edge.
                if (!_this._destroyed.isStopped && document.activeElement === textarea) {
                    textarea.setSelectionRange(selectionStart, selectionEnd);
                }
            }); });
        }
        this._previousValue = value;
    };
    /**
     * Resets the textarea to it's original size
     */
    /**
     * Resets the textarea to it's original size
     * @return {?}
     */
    CdkTextareaAutosize.prototype.reset = /**
     * Resets the textarea to it's original size
     * @return {?}
     */
    function () {
        // Do not try to change the textarea, if the initialHeight has not been determined yet
        // This might potentially remove styles when reset() is called before ngAfterViewInit
        if (this._initialHeight === undefined) {
            return;
        }
        this._textareaElement.style.height = this._initialHeight;
    };
    /**
     * @return {?}
     */
    CdkTextareaAutosize.prototype._noopInputHandler = /**
     * @return {?}
     */
    function () {
        // no-op handler that ensures we're running change detection on input events.
    };
    CdkTextareaAutosize.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{
                    selector: 'textarea[cdkTextareaAutosize]',
                    exportAs: 'cdkTextareaAutosize',
                    host: {
                        'class': 'cdk-textarea-autosize',
                        // Textarea elements that have the directive applied should have a single row by default.
                        // Browsers normally show two rows by default and therefore this limits the minRows binding.
                        'rows': '1',
                        '(input)': '_noopInputHandler()',
                    },
                },] },
    ];
    /** @nocollapse */
    CdkTextareaAutosize.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__["Platform"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
    ]; };
    CdkTextareaAutosize.propDecorators = {
        minRows: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['cdkAutosizeMinRows',] }],
        maxRows: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['cdkAutosizeMaxRows',] }],
        enabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['cdkTextareaAutosize',] }]
    };
    return CdkTextareaAutosize;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var TextFieldModule = /** @class */ (function () {
    function TextFieldModule() {
    }
    TextFieldModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"], args: [{
                    declarations: [CdkAutofill, CdkTextareaAutosize],
                    imports: [_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__["PlatformModule"]],
                    exports: [CdkAutofill, CdkTextareaAutosize],
                },] },
    ];
    return TextFieldModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */


//# sourceMappingURL=text-field.es5.js.map


/***/ }),

/***/ "./node_modules/@angular/material/esm5/input.es5.js":
/*!**********************************************************!*\
  !*** ./node_modules/@angular/material/esm5/input.es5.js ***!
  \**********************************************************/
/*! exports provided: _CdkTextareaAutosize, MatTextareaAutosize, MatInputBase, _MatInputMixinBase, MatInput, getMatInputUnsupportedTypeError, MatInputModule, MAT_INPUT_VALUE_ACCESSOR */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_CdkTextareaAutosize", function() { return _CdkTextareaAutosize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatTextareaAutosize", function() { return MatTextareaAutosize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatInputBase", function() { return MatInputBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_MatInputMixinBase", function() { return _MatInputMixinBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatInput", function() { return MatInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMatInputUnsupportedTypeError", function() { return getMatInputUnsupportedTypeError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatInputModule", function() { return MatInputModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_INPUT_VALUE_ACCESSOR", function() { return MAT_INPUT_VALUE_ACCESSOR; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/text-field */ "./node_modules/@angular/cdk/esm5/text-field.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/coercion */ "./node_modules/@angular/cdk/esm5/coercion.es5.js");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/platform */ "./node_modules/@angular/cdk/esm5/platform.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm5/core.es5.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
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
var _CdkTextareaAutosize = _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_1__["CdkTextareaAutosize"];
/**
 * Directive to automatically resize a textarea to fit its content.
 * @deprecated Use `cdkTextareaAutosize` from `\@angular/cdk/text-field` instead.
 * \@breaking-change 7.0.0
 */
var MatTextareaAutosize = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(MatTextareaAutosize, _super);
    function MatTextareaAutosize() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(MatTextareaAutosize.prototype, "matAutosizeMinRows", {
        get: /**
         * @return {?}
         */
        function () { return this.minRows; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) { this.minRows = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatTextareaAutosize.prototype, "matAutosizeMaxRows", {
        get: /**
         * @return {?}
         */
        function () { return this.maxRows; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) { this.maxRows = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatTextareaAutosize.prototype, "matAutosize", {
        get: /**
         * @return {?}
         */
        function () { return this.enabled; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) { this.enabled = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatTextareaAutosize.prototype, "matTextareaAutosize", {
        get: /**
         * @return {?}
         */
        function () { return this.enabled; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) { this.enabled = value; },
        enumerable: true,
        configurable: true
    });
    MatTextareaAutosize.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"], args: [{
                    selector: 'textarea[mat-autosize], textarea[matTextareaAutosize]',
                    exportAs: 'matTextareaAutosize',
                    inputs: ['cdkAutosizeMinRows', 'cdkAutosizeMaxRows'],
                    host: {
                        'class': 'cdk-textarea-autosize mat-autosize',
                        // Textarea elements that have the directive applied should have a single row by default.
                        // Browsers normally show two rows by default and therefore this limits the minRows binding.
                        'rows': '1',
                        '(input)': '_noopInputHandler()',
                    },
                },] },
    ];
    MatTextareaAutosize.propDecorators = {
        matAutosizeMinRows: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        matAutosizeMaxRows: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        matAutosize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"], args: ['mat-autosize',] }],
        matTextareaAutosize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }]
    };
    return MatTextareaAutosize;
}(_CdkTextareaAutosize));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * \@docs-private
 * @param {?} type
 * @return {?}
 */
function getMatInputUnsupportedTypeError(type) {
    return Error("Input type \"" + type + "\" isn't supported by matInput.");
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** *
 * This token is used to inject the object whose value should be set into `MatInput`. If none is
 * provided, the native `HTMLInputElement` is used. Directives like `MatDatepickerInput` can provide
 * themselves for this token, in order to make `MatInput` delegate the getting and setting of the
 * value to them.
  @type {?} */
var MAT_INPUT_VALUE_ACCESSOR = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["InjectionToken"]('MAT_INPUT_VALUE_ACCESSOR');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
var MAT_INPUT_INVALID_TYPES = [
    'button',
    'checkbox',
    'file',
    'hidden',
    'image',
    'radio',
    'range',
    'reset',
    'submit'
];
/** @type {?} */
var nextUniqueId = 0;
/**
 * \@docs-private
 */
var  /**
 * \@docs-private
 */
MatInputBase = /** @class */ (function () {
    function MatInputBase(_defaultErrorStateMatcher, _parentForm, _parentFormGroup, ngControl) {
        this._defaultErrorStateMatcher = _defaultErrorStateMatcher;
        this._parentForm = _parentForm;
        this._parentFormGroup = _parentFormGroup;
        this.ngControl = ngControl;
    }
    return MatInputBase;
}());
/** @type {?} */
var _MatInputMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_6__["mixinErrorState"])(MatInputBase);
/**
 * Directive that allows a native input to work inside a `MatFormField`.
 */
var MatInput = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(MatInput, _super);
    function MatInput(_elementRef, _platform, /** @docs-private */
    ngControl, _parentForm, _parentFormGroup, _defaultErrorStateMatcher, inputValueAccessor, _autofillMonitor, ngZone) {
        var _this = _super.call(this, _defaultErrorStateMatcher, _parentForm, _parentFormGroup, ngControl) || this;
        _this._elementRef = _elementRef;
        _this._platform = _platform;
        _this.ngControl = ngControl;
        _this._autofillMonitor = _autofillMonitor;
        _this._uid = "mat-input-" + nextUniqueId++;
        /**
         * Whether the component is being rendered on the server.
         */
        _this._isServer = false;
        /**
         * Whether the component is a native html select.
         */
        _this._isNativeSelect = false;
        /**
         * Implemented as part of MatFormFieldControl.
         * \@docs-private
         */
        _this.focused = false;
        /**
         * Implemented as part of MatFormFieldControl.
         * \@docs-private
         */
        _this.stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_8__["Subject"]();
        /**
         * Implemented as part of MatFormFieldControl.
         * \@docs-private
         */
        _this.controlType = 'mat-input';
        /**
         * Implemented as part of MatFormFieldControl.
         * \@docs-private
         */
        _this.autofilled = false;
        _this._disabled = false;
        _this._required = false;
        _this._type = 'text';
        _this._readonly = false;
        _this._neverEmptyInputTypes = [
            'date',
            'datetime',
            'datetime-local',
            'month',
            'time',
            'week'
        ].filter(function (t) { return Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["getSupportedInputTypes"])().has(t); });
        /** @type {?} */
        var element = _this._elementRef.nativeElement;
        // If no input value accessor was explicitly specified, use the element as the input value
        // accessor.
        _this._inputValueAccessor = inputValueAccessor || element;
        _this._previousNativeValue = _this.value;
        // Force setter to be called in case id was not specified.
        _this.id = _this.id;
        // On some versions of iOS the caret gets stuck in the wrong place when holding down the delete
        // key. In order to get around this we need to "jiggle" the caret loose. Since this bug only
        // exists on iOS, we only bother to install the listener on iOS.
        if (_platform.IOS) {
            ngZone.runOutsideAngular(function () {
                _elementRef.nativeElement.addEventListener('keyup', function (event) {
                    /** @type {?} */
                    var el = /** @type {?} */ (event.target);
                    if (!el.value && !el.selectionStart && !el.selectionEnd) {
                        // Note: Just setting `0, 0` doesn't fix the issue. Setting
                        // `1, 1` fixes it for the first time that you type text and
                        // then hold delete. Toggling to `1, 1` and then back to
                        // `0, 0` seems to completely fix it.
                        el.setSelectionRange(1, 1);
                        el.setSelectionRange(0, 0);
                    }
                });
            });
        }
        _this._isServer = !_this._platform.isBrowser;
        _this._isNativeSelect = element.nodeName.toLowerCase() === 'select';
        if (_this._isNativeSelect) {
            _this.controlType = (/** @type {?} */ (element)).multiple ? 'mat-native-select-multiple' :
                'mat-native-select';
        }
        return _this;
    }
    Object.defineProperty(MatInput.prototype, "disabled", {
        /**
         * Implemented as part of MatFormFieldControl.
         * @docs-private
         */
        get: /**
         * Implemented as part of MatFormFieldControl.
         * \@docs-private
         * @return {?}
         */
        function () {
            if (this.ngControl && this.ngControl.disabled !== null) {
                return this.ngControl.disabled;
            }
            return this._disabled;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceBooleanProperty"])(value);
            // Browsers may not fire the blur event if the input is disabled too quickly.
            // Reset from here to ensure that the element doesn't become stuck.
            if (this.focused) {
                this.focused = false;
                this.stateChanges.next();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatInput.prototype, "id", {
        /**
         * Implemented as part of MatFormFieldControl.
         * @docs-private
         */
        get: /**
         * Implemented as part of MatFormFieldControl.
         * \@docs-private
         * @return {?}
         */
        function () { return this._id; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) { this._id = value || this._uid; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatInput.prototype, "required", {
        /**
         * Implemented as part of MatFormFieldControl.
         * @docs-private
         */
        get: /**
         * Implemented as part of MatFormFieldControl.
         * \@docs-private
         * @return {?}
         */
        function () { return this._required; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) { this._required = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceBooleanProperty"])(value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatInput.prototype, "type", {
        /** Input type of the element. */
        get: /**
         * Input type of the element.
         * @return {?}
         */
        function () { return this._type; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._type = value || 'text';
            this._validateType();
            // When using Angular inputs, developers are no longer able to set the properties on the native
            // input element. To ensure that bindings for `type` work, we need to sync the setter
            // with the native property. Textarea elements don't support the type property or attribute.
            if (!this._isTextarea() && Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["getSupportedInputTypes"])().has(this._type)) {
                (/** @type {?} */ (this._elementRef.nativeElement)).type = this._type;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatInput.prototype, "value", {
        /**
         * Implemented as part of MatFormFieldControl.
         * @docs-private
         */
        get: /**
         * Implemented as part of MatFormFieldControl.
         * \@docs-private
         * @return {?}
         */
        function () { return this._inputValueAccessor.value; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value !== this.value) {
                this._inputValueAccessor.value = value;
                this.stateChanges.next();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatInput.prototype, "readonly", {
        /** Whether the element is readonly. */
        get: /**
         * Whether the element is readonly.
         * @return {?}
         */
        function () { return this._readonly; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) { this._readonly = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceBooleanProperty"])(value); },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    MatInput.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this._platform.isBrowser) {
            this._autofillMonitor.monitor(this._elementRef.nativeElement).subscribe(function (event) {
                _this.autofilled = event.isAutofilled;
                _this.stateChanges.next();
            });
        }
    };
    /**
     * @return {?}
     */
    MatInput.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        this.stateChanges.next();
    };
    /**
     * @return {?}
     */
    MatInput.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.stateChanges.complete();
        if (this._platform.isBrowser) {
            this._autofillMonitor.stopMonitoring(this._elementRef.nativeElement);
        }
    };
    /**
     * @return {?}
     */
    MatInput.prototype.ngDoCheck = /**
     * @return {?}
     */
    function () {
        if (this.ngControl) {
            // We need to re-evaluate this on every change detection cycle, because there are some
            // error triggers that we can't subscribe to (e.g. parent form submissions). This means
            // that whatever logic is in here has to be super lean or we risk destroying the performance.
            this.updateErrorState();
        }
        // We need to dirty-check the native element's value, because there are some cases where
        // we won't be notified when it changes (e.g. the consumer isn't using forms or they're
        // updating the value using `emitEvent: false`).
        this._dirtyCheckNativeValue();
    };
    /** Focuses the input. */
    /**
     * Focuses the input.
     * @return {?}
     */
    MatInput.prototype.focus = /**
     * Focuses the input.
     * @return {?}
     */
    function () { this._elementRef.nativeElement.focus(); };
    /** Callback for the cases where the focused state of the input changes. */
    /**
     * Callback for the cases where the focused state of the input changes.
     * @param {?} isFocused
     * @return {?}
     */
    MatInput.prototype._focusChanged = /**
     * Callback for the cases where the focused state of the input changes.
     * @param {?} isFocused
     * @return {?}
     */
    function (isFocused) {
        if (isFocused !== this.focused && !this.readonly) {
            this.focused = isFocused;
            this.stateChanges.next();
        }
    };
    /**
     * @return {?}
     */
    MatInput.prototype._onInput = /**
     * @return {?}
     */
    function () {
        // This is a noop function and is used to let Angular know whenever the value changes.
        // Angular will run a new change detection each time the `input` event has been dispatched.
        // It's necessary that Angular recognizes the value change, because when floatingLabel
        // is set to false and Angular forms aren't used, the placeholder won't recognize the
        // value changes and will not disappear.
        // Listening to the input event wouldn't be necessary when the input is using the
        // FormsModule or ReactiveFormsModule, because Angular forms also listens to input events.
    };
    /** Does some manual dirty checking on the native input `value` property. */
    /**
     * Does some manual dirty checking on the native input `value` property.
     * @return {?}
     */
    MatInput.prototype._dirtyCheckNativeValue = /**
     * Does some manual dirty checking on the native input `value` property.
     * @return {?}
     */
    function () {
        /** @type {?} */
        var newValue = this._elementRef.nativeElement.value;
        if (this._previousNativeValue !== newValue) {
            this._previousNativeValue = newValue;
            this.stateChanges.next();
        }
    };
    /** Make sure the input is a supported type. */
    /**
     * Make sure the input is a supported type.
     * @return {?}
     */
    MatInput.prototype._validateType = /**
     * Make sure the input is a supported type.
     * @return {?}
     */
    function () {
        if (MAT_INPUT_INVALID_TYPES.indexOf(this._type) > -1) {
            throw getMatInputUnsupportedTypeError(this._type);
        }
    };
    /** Checks whether the input type is one of the types that are never empty. */
    /**
     * Checks whether the input type is one of the types that are never empty.
     * @return {?}
     */
    MatInput.prototype._isNeverEmpty = /**
     * Checks whether the input type is one of the types that are never empty.
     * @return {?}
     */
    function () {
        return this._neverEmptyInputTypes.indexOf(this._type) > -1;
    };
    /** Checks whether the input is invalid based on the native validation. */
    /**
     * Checks whether the input is invalid based on the native validation.
     * @return {?}
     */
    MatInput.prototype._isBadInput = /**
     * Checks whether the input is invalid based on the native validation.
     * @return {?}
     */
    function () {
        /** @type {?} */
        var validity = (/** @type {?} */ (this._elementRef.nativeElement)).validity;
        return validity && validity.badInput;
    };
    /** Determines if the component host is a textarea. */
    /**
     * Determines if the component host is a textarea.
     * @return {?}
     */
    MatInput.prototype._isTextarea = /**
     * Determines if the component host is a textarea.
     * @return {?}
     */
    function () {
        return this._elementRef.nativeElement.nodeName.toLowerCase() === 'textarea';
    };
    Object.defineProperty(MatInput.prototype, "empty", {
        /**
         * Implemented as part of MatFormFieldControl.
         * @docs-private
         */
        get: /**
         * Implemented as part of MatFormFieldControl.
         * \@docs-private
         * @return {?}
         */
        function () {
            return !this._isNeverEmpty() && !this._elementRef.nativeElement.value && !this._isBadInput() &&
                !this.autofilled;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatInput.prototype, "shouldLabelFloat", {
        /**
         * Implemented as part of MatFormFieldControl.
         * @docs-private
         */
        get: /**
         * Implemented as part of MatFormFieldControl.
         * \@docs-private
         * @return {?}
         */
        function () {
            if (this._isNativeSelect) {
                /** @type {?} */
                var selectElement = /** @type {?} */ (this._elementRef.nativeElement);
                return selectElement.multiple || !this.empty || !!selectElement.options[0].label ||
                    this.focused;
            }
            else {
                return this.focused || !this.empty;
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Implemented as part of MatFormFieldControl.
     * @docs-private
     */
    /**
     * Implemented as part of MatFormFieldControl.
     * \@docs-private
     * @param {?} ids
     * @return {?}
     */
    MatInput.prototype.setDescribedByIds = /**
     * Implemented as part of MatFormFieldControl.
     * \@docs-private
     * @param {?} ids
     * @return {?}
     */
    function (ids) { this._ariaDescribedby = ids.join(' '); };
    /**
     * Implemented as part of MatFormFieldControl.
     * @docs-private
     */
    /**
     * Implemented as part of MatFormFieldControl.
     * \@docs-private
     * @return {?}
     */
    MatInput.prototype.onContainerClick = /**
     * Implemented as part of MatFormFieldControl.
     * \@docs-private
     * @return {?}
     */
    function () {
        // Do not re-focus the input element if the element is already focused. Otherwise it can happen
        // that someone clicks on a time input and the cursor resets to the "hours" field while the
        // "minutes" field was actually clicked. See: https://github.com/angular/material2/issues/12849
        if (!this.focused) {
            this.focus();
        }
    };
    MatInput.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"], args: [{
                    selector: "input[matInput], textarea[matInput], select[matNativeControl],\n      input[matNativeControl], textarea[matNativeControl]",
                    exportAs: 'matInput',
                    host: {
                        /**
                             * @breaking-change 7.0.0 remove .mat-form-field-autofill-control in favor of AutofillMonitor.
                             */
                        'class': 'mat-input-element mat-form-field-autofill-control',
                        '[class.mat-input-server]': '_isServer',
                        // Native input properties that are overwritten by Angular inputs need to be synced with
                        // the native input element. Otherwise property bindings for those don't work.
                        '[attr.id]': 'id',
                        '[attr.placeholder]': 'placeholder',
                        '[disabled]': 'disabled',
                        '[required]': 'required',
                        '[attr.readonly]': 'readonly && !_isNativeSelect || null',
                        '[attr.aria-describedby]': '_ariaDescribedby || null',
                        '[attr.aria-invalid]': 'errorState',
                        '[attr.aria-required]': 'required.toString()',
                        '(blur)': '_focusChanged(false)',
                        '(focus)': '_focusChanged(true)',
                        '(input)': '_onInput()',
                    },
                    providers: [{ provide: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldControl"], useExisting: MatInput }],
                },] },
    ];
    /** @nocollapse */
    MatInput.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] },
        { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControl"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Self"] }] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"] }] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroupDirective"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"] }] },
        { type: _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["ErrorStateMatcher"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Self"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [MAT_INPUT_VALUE_ACCESSOR,] }] },
        { type: _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_1__["AutofillMonitor"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"] }
    ]; };
    MatInput.propDecorators = {
        disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        placeholder: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        required: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        type: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        errorStateMatcher: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        value: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        readonly: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }]
    };
    return MatInput;
}(_MatInputMixinBase));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var MatInputModule = /** @class */ (function () {
    function MatInputModule() {
    }
    MatInputModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"], args: [{
                    declarations: [MatInput, MatTextareaAutosize],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_9__["CommonModule"],
                        _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_1__["TextFieldModule"],
                        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
                    ],
                    exports: [
                        _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_1__["TextFieldModule"],
                        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
                        MatInput,
                        MatTextareaAutosize,
                    ],
                    providers: [_angular_material_core__WEBPACK_IMPORTED_MODULE_6__["ErrorStateMatcher"]],
                },] },
    ];
    return MatInputModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */


//# sourceMappingURL=input.es5.js.map


/***/ })

}]);
//# sourceMappingURL=add-model-add-model-module~category-lists-category-lists-module~option-category-option-category-modu~6c3a31f1.js.map