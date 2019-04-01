(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["add-model-add-model-module"],{

/***/ "./node_modules/primeng/autocomplete.js":
/*!**********************************************!*\
  !*** ./node_modules/primeng/autocomplete.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* Shorthand */

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./components/autocomplete/autocomplete */ "./node_modules/primeng/components/autocomplete/autocomplete.js"));

/***/ }),

/***/ "./node_modules/primeng/components/autocomplete/autocomplete.js":
/*!**********************************************************************!*\
  !*** ./node_modules/primeng/components/autocomplete/autocomplete.js ***!
  \**********************************************************************/
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
var animations_1 = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
var inputtext_1 = __webpack_require__(/*! ../inputtext/inputtext */ "./node_modules/primeng/components/inputtext/inputtext.js");
var button_1 = __webpack_require__(/*! ../button/button */ "./node_modules/primeng/components/button/button.js");
var shared_1 = __webpack_require__(/*! ../common/shared */ "./node_modules/primeng/components/common/shared.js");
var domhandler_1 = __webpack_require__(/*! ../dom/domhandler */ "./node_modules/primeng/components/dom/domhandler.js");
var objectutils_1 = __webpack_require__(/*! ../utils/objectutils */ "./node_modules/primeng/components/utils/objectutils.js");
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
exports.AUTOCOMPLETE_VALUE_ACCESSOR = {
    provide: forms_1.NG_VALUE_ACCESSOR,
    useExisting: core_1.forwardRef(function () { return AutoComplete; }),
    multi: true
};
var AutoComplete = /** @class */ (function () {
    function AutoComplete(el, domHandler, renderer, objectUtils, cd, differs) {
        this.el = el;
        this.domHandler = domHandler;
        this.renderer = renderer;
        this.objectUtils = objectUtils;
        this.cd = cd;
        this.differs = differs;
        this.minLength = 1;
        this.delay = 300;
        this.type = 'text';
        this.autoZIndex = true;
        this.baseZIndex = 0;
        this.completeMethod = new core_1.EventEmitter();
        this.onSelect = new core_1.EventEmitter();
        this.onUnselect = new core_1.EventEmitter();
        this.onFocus = new core_1.EventEmitter();
        this.onBlur = new core_1.EventEmitter();
        this.onDropdownClick = new core_1.EventEmitter();
        this.onClear = new core_1.EventEmitter();
        this.onKeyUp = new core_1.EventEmitter();
        this.scrollHeight = '200px';
        this.dropdownMode = 'blank';
        this.immutable = true;
        this.onModelChange = function () { };
        this.onModelTouched = function () { };
        this.overlayVisible = false;
        this.focus = false;
        this.inputFieldValue = null;
        this.differ = differs.find([]).create(null);
    }
    Object.defineProperty(AutoComplete.prototype, "suggestions", {
        get: function () {
            return this._suggestions;
        },
        set: function (val) {
            this._suggestions = val;
            if (this.immutable) {
                this.handleSuggestionsChange();
            }
        },
        enumerable: true,
        configurable: true
    });
    AutoComplete.prototype.ngDoCheck = function () {
        if (!this.immutable) {
            var changes = this.differ.diff(this.suggestions);
            if (changes) {
                this.handleSuggestionsChange();
            }
        }
    };
    AutoComplete.prototype.ngAfterViewChecked = function () {
        var _this = this;
        //Use timeouts as since Angular 4.2, AfterViewChecked is broken and not called after panel is updated
        if (this.suggestionsUpdated && this.overlay && this.overlay.offsetParent) {
            setTimeout(function () { return _this.alignOverlay(); }, 1);
            this.suggestionsUpdated = false;
        }
        if (this.highlightOptionChanged) {
            setTimeout(function () {
                var listItem = _this.domHandler.findSingle(_this.overlay, 'li.ui-state-highlight');
                if (listItem) {
                    _this.domHandler.scrollInView(_this.overlay, listItem);
                }
            }, 1);
            this.highlightOptionChanged = false;
        }
    };
    AutoComplete.prototype.handleSuggestionsChange = function () {
        if (this._suggestions != null && this.loading) {
            this.highlightOption = null;
            if (this._suggestions.length) {
                this.noResults = false;
                this.show();
                this.suggestionsUpdated = true;
                if (this.autoHighlight) {
                    this.highlightOption = this._suggestions[0];
                }
            }
            else {
                this.noResults = true;
                if (this.emptyMessage) {
                    this.show();
                    this.suggestionsUpdated = true;
                }
                else {
                    this.hide();
                }
            }
            this.loading = false;
        }
    };
    AutoComplete.prototype.ngAfterContentInit = function () {
        var _this = this;
        this.templates.forEach(function (item) {
            switch (item.getType()) {
                case 'item':
                    _this.itemTemplate = item.template;
                    break;
                case 'selectedItem':
                    _this.selectedItemTemplate = item.template;
                    break;
                default:
                    _this.itemTemplate = item.template;
                    break;
            }
        });
    };
    AutoComplete.prototype.writeValue = function (value) {
        this.value = value;
        this.filled = this.value && this.value != '';
        this.updateInputField();
    };
    AutoComplete.prototype.registerOnChange = function (fn) {
        this.onModelChange = fn;
    };
    AutoComplete.prototype.registerOnTouched = function (fn) {
        this.onModelTouched = fn;
    };
    AutoComplete.prototype.setDisabledState = function (val) {
        this.disabled = val;
    };
    AutoComplete.prototype.onInput = function (event) {
        var _this = this;
        if (!this.inputKeyDown) {
            return;
        }
        if (this.timeout) {
            clearTimeout(this.timeout);
        }
        var value = event.target.value;
        if (!this.multiple && !this.forceSelection) {
            this.onModelChange(value);
        }
        if (value.length === 0) {
            this.hide();
            this.onClear.emit(event);
        }
        if (value.length >= this.minLength) {
            this.timeout = setTimeout(function () {
                _this.search(event, value);
            }, this.delay);
        }
        else {
            this.suggestions = null;
            this.hide();
        }
        this.updateFilledState();
        this.inputKeyDown = false;
    };
    AutoComplete.prototype.onInputClick = function (event) {
        if (this.documentClickListener) {
            this.inputClick = true;
        }
    };
    AutoComplete.prototype.search = function (event, query) {
        //allow empty string but not undefined or null
        if (query === undefined || query === null) {
            return;
        }
        this.loading = true;
        this.completeMethod.emit({
            originalEvent: event,
            query: query
        });
    };
    AutoComplete.prototype.selectItem = function (option, focus) {
        if (focus === void 0) { focus = true; }
        if (this.multiple) {
            this.multiInputEL.nativeElement.value = '';
            this.value = this.value || [];
            if (!this.isSelected(option)) {
                this.value = this.value.concat([option]);
                this.onModelChange(this.value);
            }
        }
        else {
            this.inputEL.nativeElement.value = this.field ? this.objectUtils.resolveFieldData(option, this.field) || '' : option;
            this.value = option;
            this.onModelChange(this.value);
        }
        this.onSelect.emit(option);
        this.updateFilledState();
        if (focus) {
            this.focusInput();
        }
    };
    AutoComplete.prototype.show = function () {
        if (this.multiInputEL || this.inputEL) {
            var hasFocus = this.multiple ? document.activeElement == this.multiInputEL.nativeElement : document.activeElement == this.inputEL.nativeElement;
            if (!this.overlayVisible && hasFocus) {
                this.overlayVisible = true;
            }
        }
    };
    AutoComplete.prototype.onOverlayAnimationStart = function (event) {
        switch (event.toState) {
            case 'visible':
                this.overlay = event.element;
                this.appendOverlay();
                if (this.autoZIndex) {
                    this.overlay.style.zIndex = String(this.baseZIndex + (++domhandler_1.DomHandler.zindex));
                }
                this.alignOverlay();
                this.bindDocumentClickListener();
                break;
            case 'void':
                this.onOverlayHide();
                break;
        }
    };
    AutoComplete.prototype.onOverlayAnimationDone = function (event) {
        if (event.toState === 'void') {
            this._suggestions = null;
        }
    };
    AutoComplete.prototype.appendOverlay = function () {
        if (this.appendTo) {
            if (this.appendTo === 'body')
                document.body.appendChild(this.overlay);
            else
                this.domHandler.appendChild(this.overlay, this.appendTo);
            this.overlay.style.minWidth = this.domHandler.getWidth(this.el.nativeElement.children[0]) + 'px';
        }
    };
    AutoComplete.prototype.restoreOverlayAppend = function () {
        if (this.overlay && this.appendTo) {
            this.el.nativeElement.appendChild(this.overlay);
        }
    };
    AutoComplete.prototype.alignOverlay = function () {
        if (this.appendTo)
            this.domHandler.absolutePosition(this.overlay, (this.multiple ? this.multiContainerEL.nativeElement : this.inputEL.nativeElement));
        else
            this.domHandler.relativePosition(this.overlay, (this.multiple ? this.multiContainerEL.nativeElement : this.inputEL.nativeElement));
    };
    AutoComplete.prototype.hide = function () {
        this.overlayVisible = false;
    };
    AutoComplete.prototype.handleDropdownClick = function (event) {
        this.focusInput();
        var queryValue = this.multiple ? this.multiInputEL.nativeElement.value : this.inputEL.nativeElement.value;
        if (this.dropdownMode === 'blank')
            this.search(event, '');
        else if (this.dropdownMode === 'current')
            this.search(event, queryValue);
        this.onDropdownClick.emit({
            originalEvent: event,
            query: queryValue
        });
    };
    AutoComplete.prototype.focusInput = function () {
        if (this.multiple)
            this.multiInputEL.nativeElement.focus();
        else
            this.inputEL.nativeElement.focus();
    };
    AutoComplete.prototype.removeItem = function (item) {
        var itemIndex = this.domHandler.index(item);
        var removedValue = this.value[itemIndex];
        this.value = this.value.filter(function (val, i) { return i != itemIndex; });
        this.onModelChange(this.value);
        this.updateFilledState();
        this.onUnselect.emit(removedValue);
    };
    AutoComplete.prototype.onKeydown = function (event) {
        if (this.overlayVisible) {
            var highlightItemIndex = this.findOptionIndex(this.highlightOption);
            switch (event.which) {
                //down
                case 40:
                    if (highlightItemIndex != -1) {
                        var nextItemIndex = highlightItemIndex + 1;
                        if (nextItemIndex != (this.suggestions.length)) {
                            this.highlightOption = this.suggestions[nextItemIndex];
                            this.highlightOptionChanged = true;
                        }
                    }
                    else {
                        this.highlightOption = this.suggestions[0];
                    }
                    event.preventDefault();
                    break;
                //up
                case 38:
                    if (highlightItemIndex > 0) {
                        var prevItemIndex = highlightItemIndex - 1;
                        this.highlightOption = this.suggestions[prevItemIndex];
                        this.highlightOptionChanged = true;
                    }
                    event.preventDefault();
                    break;
                //enter
                case 13:
                    if (this.highlightOption) {
                        this.selectItem(this.highlightOption);
                        this.hide();
                    }
                    event.preventDefault();
                    break;
                //escape
                case 27:
                    this.hide();
                    event.preventDefault();
                    break;
                //tab
                case 9:
                    if (this.highlightOption) {
                        this.selectItem(this.highlightOption);
                    }
                    this.hide();
                    break;
            }
        }
        else {
            if (event.which === 40 && this.suggestions) {
                this.search(event, event.target.value);
            }
        }
        if (this.multiple) {
            switch (event.which) {
                //backspace
                case 8:
                    if (this.value && this.value.length && !this.multiInputEL.nativeElement.value) {
                        this.value = this.value.slice();
                        var removedValue = this.value.pop();
                        this.onModelChange(this.value);
                        this.updateFilledState();
                        this.onUnselect.emit(removedValue);
                    }
                    break;
            }
        }
        this.inputKeyDown = true;
    };
    AutoComplete.prototype.onKeyup = function (event) {
        this.onKeyUp.emit(event);
    };
    AutoComplete.prototype.onInputFocus = function (event) {
        this.focus = true;
        this.onFocus.emit(event);
    };
    AutoComplete.prototype.onInputBlur = function (event) {
        this.focus = false;
        this.onModelTouched();
        this.onBlur.emit(event);
    };
    AutoComplete.prototype.onInputChange = function (event) {
        if (this.forceSelection && this.suggestions) {
            var valid = false;
            var inputValue = event.target.value.trim();
            if (this.suggestions) {
                for (var _i = 0, _a = this.suggestions; _i < _a.length; _i++) {
                    var suggestion = _a[_i];
                    var itemValue = this.field ? this.objectUtils.resolveFieldData(suggestion, this.field) : suggestion;
                    if (itemValue && inputValue === itemValue.trim()) {
                        valid = true;
                        this.selectItem(suggestion, false);
                        break;
                    }
                }
            }
            if (!valid) {
                if (this.multiple) {
                    this.multiInputEL.nativeElement.value = '';
                }
                else {
                    this.value = null;
                    this.inputEL.nativeElement.value = '';
                }
                this.onClear.emit(event);
                this.onModelChange(this.value);
            }
        }
    };
    AutoComplete.prototype.onInputPaste = function (event) {
        this.onKeydown(event);
    };
    AutoComplete.prototype.isSelected = function (val) {
        var selected = false;
        if (this.value && this.value.length) {
            for (var i = 0; i < this.value.length; i++) {
                if (this.objectUtils.equals(this.value[i], val, this.dataKey)) {
                    selected = true;
                    break;
                }
            }
        }
        return selected;
    };
    AutoComplete.prototype.findOptionIndex = function (option) {
        var index = -1;
        if (this.suggestions) {
            for (var i = 0; i < this.suggestions.length; i++) {
                if (this.objectUtils.equals(option, this.suggestions[i])) {
                    index = i;
                    break;
                }
            }
        }
        return index;
    };
    AutoComplete.prototype.updateFilledState = function () {
        if (this.multiple)
            this.filled = (this.value && this.value.length) || (this.multiInputEL && this.multiInputEL.nativeElement && this.multiInputEL.nativeElement.value != '');
        else
            this.filled = (this.inputFieldValue && this.inputFieldValue != '') || (this.inputEL && this.inputEL.nativeElement && this.inputEL.nativeElement.value != '');
        ;
    };
    AutoComplete.prototype.updateInputField = function () {
        var formattedValue = this.value ? (this.field ? this.objectUtils.resolveFieldData(this.value, this.field) || '' : this.value) : '';
        this.inputFieldValue = formattedValue;
        if (this.inputEL && this.inputEL.nativeElement) {
            this.inputEL.nativeElement.value = formattedValue;
        }
        this.updateFilledState();
    };
    AutoComplete.prototype.bindDocumentClickListener = function () {
        var _this = this;
        if (!this.documentClickListener) {
            this.documentClickListener = this.renderer.listen('document', 'click', function (event) {
                if (event.which === 3) {
                    return;
                }
                if (!_this.inputClick && !_this.isDropdownClick(event)) {
                    _this.hide();
                }
                _this.inputClick = false;
                _this.cd.markForCheck();
            });
        }
    };
    AutoComplete.prototype.isDropdownClick = function (event) {
        if (this.dropdown) {
            var target = event.target;
            return (target === this.dropdownButton.nativeElement || target.parentNode === this.dropdownButton.nativeElement);
        }
        else {
            return false;
        }
    };
    AutoComplete.prototype.unbindDocumentClickListener = function () {
        if (this.documentClickListener) {
            this.documentClickListener();
            this.documentClickListener = null;
        }
    };
    AutoComplete.prototype.onOverlayHide = function () {
        this.unbindDocumentClickListener();
        this.overlay = null;
    };
    AutoComplete.prototype.ngOnDestroy = function () {
        this.restoreOverlayAppend();
        this.onOverlayHide();
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], AutoComplete.prototype, "minLength", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], AutoComplete.prototype, "delay", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], AutoComplete.prototype, "style", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], AutoComplete.prototype, "styleClass", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], AutoComplete.prototype, "inputStyle", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], AutoComplete.prototype, "inputId", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], AutoComplete.prototype, "inputStyleClass", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], AutoComplete.prototype, "placeholder", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], AutoComplete.prototype, "readonly", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], AutoComplete.prototype, "disabled", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], AutoComplete.prototype, "maxlength", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], AutoComplete.prototype, "required", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], AutoComplete.prototype, "size", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], AutoComplete.prototype, "appendTo", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], AutoComplete.prototype, "autoHighlight", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], AutoComplete.prototype, "forceSelection", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], AutoComplete.prototype, "type", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], AutoComplete.prototype, "autoZIndex", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], AutoComplete.prototype, "baseZIndex", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], AutoComplete.prototype, "completeMethod", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], AutoComplete.prototype, "onSelect", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], AutoComplete.prototype, "onUnselect", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], AutoComplete.prototype, "onFocus", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], AutoComplete.prototype, "onBlur", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], AutoComplete.prototype, "onDropdownClick", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], AutoComplete.prototype, "onClear", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], AutoComplete.prototype, "onKeyUp", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], AutoComplete.prototype, "field", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], AutoComplete.prototype, "scrollHeight", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], AutoComplete.prototype, "dropdown", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], AutoComplete.prototype, "dropdownMode", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], AutoComplete.prototype, "multiple", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], AutoComplete.prototype, "tabindex", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], AutoComplete.prototype, "dataKey", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], AutoComplete.prototype, "emptyMessage", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], AutoComplete.prototype, "immutable", void 0);
    __decorate([
        core_1.ViewChild('in'),
        __metadata("design:type", core_1.ElementRef)
    ], AutoComplete.prototype, "inputEL", void 0);
    __decorate([
        core_1.ViewChild('multiIn'),
        __metadata("design:type", core_1.ElementRef)
    ], AutoComplete.prototype, "multiInputEL", void 0);
    __decorate([
        core_1.ViewChild('multiContainer'),
        __metadata("design:type", core_1.ElementRef)
    ], AutoComplete.prototype, "multiContainerEL", void 0);
    __decorate([
        core_1.ViewChild('ddBtn'),
        __metadata("design:type", core_1.ElementRef)
    ], AutoComplete.prototype, "dropdownButton", void 0);
    __decorate([
        core_1.ContentChildren(shared_1.PrimeTemplate),
        __metadata("design:type", core_1.QueryList)
    ], AutoComplete.prototype, "templates", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Array),
        __metadata("design:paramtypes", [Array])
    ], AutoComplete.prototype, "suggestions", null);
    AutoComplete = __decorate([
        core_1.Component({
            selector: 'p-autoComplete',
            template: "\n        <span [ngClass]=\"{'ui-autocomplete ui-widget':true,'ui-autocomplete-dd':dropdown,'ui-autocomplete-multiple':multiple}\" [ngStyle]=\"style\" [class]=\"styleClass\">\n            <input *ngIf=\"!multiple\" #in [attr.type]=\"type\" [attr.id]=\"inputId\" [ngStyle]=\"inputStyle\" [class]=\"inputStyleClass\" autocomplete=\"off\" [attr.required]=\"required\"\n            [ngClass]=\"'ui-inputtext ui-widget ui-state-default ui-corner-all ui-autocomplete-input'\" [value]=\"inputFieldValue\"\n            (click)=\"onInputClick($event)\" (input)=\"onInput($event)\" (keydown)=\"onKeydown($event)\" (keyup)=\"onKeyup($event)\" (focus)=\"onInputFocus($event)\" (blur)=\"onInputBlur($event)\" (change)=\"onInputChange($event)\" (paste)=\"onInputPaste($event)\"\n            [attr.placeholder]=\"placeholder\" [attr.size]=\"size\" [attr.maxlength]=\"maxlength\" [attr.tabindex]=\"tabindex\" [readonly]=\"readonly\" [disabled]=\"disabled\"\n            ><ul *ngIf=\"multiple\" #multiContainer class=\"ui-autocomplete-multiple-container ui-widget ui-inputtext ui-state-default ui-corner-all\" [ngClass]=\"{'ui-state-disabled':disabled,'ui-state-focus':focus}\" (click)=\"multiIn.focus()\">\n                <li #token *ngFor=\"let val of value\" class=\"ui-autocomplete-token ui-state-highlight ui-corner-all\">\n                    <span class=\"ui-autocomplete-token-icon pi pi-fw pi-times\" (click)=\"removeItem(token)\" *ngIf=\"!disabled\"></span>\n                    <span *ngIf=\"!selectedItemTemplate\" class=\"ui-autocomplete-token-label\">{{field ? objectUtils.resolveFieldData(val, field): val}}</span>\n                    <ng-container *ngTemplateOutlet=\"selectedItemTemplate; context: {$implicit: val}\"></ng-container>\n                </li>\n                <li class=\"ui-autocomplete-input-token\">\n                    <input #multiIn [attr.type]=\"type\" [attr.id]=\"inputId\" [disabled]=\"disabled\" [attr.placeholder]=\"(value&&value.length ? null : placeholder)\" [attr.tabindex]=\"tabindex\" (input)=\"onInput($event)\"  (click)=\"onInputClick($event)\"\n                            (keydown)=\"onKeydown($event)\" [readonly]=\"readonly\" (keyup)=\"onKeyup($event)\" (focus)=\"onInputFocus($event)\" (blur)=\"onInputBlur($event)\" (change)=\"onInputChange($event)\" (paste)=\"onInputPaste($event)\" autocomplete=\"off\" [ngStyle]=\"inputStyle\" [class]=\"inputStyleClass\">\n                </li>\n            </ul\n            ><i *ngIf=\"loading\" class=\"ui-autocomplete-loader pi pi-spinner pi-spin\"></i><button #ddBtn type=\"button\" pButton icon=\"pi pi-fw pi-caret-down\" class=\"ui-autocomplete-dropdown\" [disabled]=\"disabled\"\n                (click)=\"handleDropdownClick($event)\" *ngIf=\"dropdown\"></button>\n            <div #panel *ngIf=\"overlayVisible\" class=\"ui-autocomplete-panel ui-widget ui-widget-content ui-corner-all ui-shadow\" [style.max-height]=\"scrollHeight\"\n                [@overlayAnimation]=\"'visible'\" (@overlayAnimation.start)=\"onOverlayAnimationStart($event)\" (@overlayAnimation.done)=\"onOverlayAnimationDone($event)\">\n                <ul class=\"ui-autocomplete-items ui-autocomplete-list ui-widget-content ui-widget ui-corner-all ui-helper-reset\">\n                    <li *ngFor=\"let option of suggestions; let idx = index\" [ngClass]=\"{'ui-autocomplete-list-item ui-corner-all':true,'ui-state-highlight':(highlightOption==option)}\"\n                        (mouseenter)=\"highlightOption=option\" (mouseleave)=\"highlightOption=null\" (click)=\"selectItem(option)\">\n                        <span *ngIf=\"!itemTemplate\">{{field ? objectUtils.resolveFieldData(option, field) : option}}</span>\n                        <ng-container *ngTemplateOutlet=\"itemTemplate; context: {$implicit: option, index: idx}\"></ng-container>\n                    </li>\n                    <li *ngIf=\"noResults && emptyMessage\" class=\"ui-autocomplete-list-item ui-corner-all\">{{emptyMessage}}</li>\n                </ul>\n            </div>\n        </span>\n    ",
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
            host: {
                '[class.ui-inputwrapper-filled]': 'filled',
                '[class.ui-inputwrapper-focus]': 'focus && !disabled'
            },
            providers: [domhandler_1.DomHandler, objectutils_1.ObjectUtils, exports.AUTOCOMPLETE_VALUE_ACCESSOR]
        }),
        __metadata("design:paramtypes", [core_1.ElementRef, domhandler_1.DomHandler, core_1.Renderer2, objectutils_1.ObjectUtils, core_1.ChangeDetectorRef, core_1.IterableDiffers])
    ], AutoComplete);
    return AutoComplete;
}());
exports.AutoComplete = AutoComplete;
var AutoCompleteModule = /** @class */ (function () {
    function AutoCompleteModule() {
    }
    AutoCompleteModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, inputtext_1.InputTextModule, button_1.ButtonModule, shared_1.SharedModule],
            exports: [AutoComplete, shared_1.SharedModule],
            declarations: [AutoComplete]
        })
    ], AutoCompleteModule);
    return AutoCompleteModule;
}());
exports.AutoCompleteModule = AutoCompleteModule;
//# sourceMappingURL=autocomplete.js.map

/***/ }),

/***/ "./node_modules/primeng/components/inputtext/inputtext.js":
/*!****************************************************************!*\
  !*** ./node_modules/primeng/components/inputtext/inputtext.js ***!
  \****************************************************************/
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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var common_1 = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var InputText = /** @class */ (function () {
    function InputText(el, ngModel) {
        this.el = el;
        this.ngModel = ngModel;
    }
    InputText.prototype.ngDoCheck = function () {
        this.updateFilledState();
    };
    //To trigger change detection to manage ui-state-filled for material labels when there is no value binding
    InputText.prototype.onInput = function (e) {
        this.updateFilledState();
    };
    InputText.prototype.updateFilledState = function () {
        this.filled = (this.el.nativeElement.value && this.el.nativeElement.value.length) ||
            (this.ngModel && this.ngModel.model);
    };
    __decorate([
        core_1.HostListener('input', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], InputText.prototype, "onInput", null);
    InputText = __decorate([
        core_1.Directive({
            selector: '[pInputText]',
            host: {
                '[class.ui-inputtext]': 'true',
                '[class.ui-corner-all]': 'true',
                '[class.ui-state-default]': 'true',
                '[class.ui-widget]': 'true',
                '[class.ui-state-filled]': 'filled'
            }
        }),
        __param(1, core_1.Optional()),
        __metadata("design:paramtypes", [core_1.ElementRef, forms_1.NgModel])
    ], InputText);
    return InputText;
}());
exports.InputText = InputText;
var InputTextModule = /** @class */ (function () {
    function InputTextModule() {
    }
    InputTextModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule],
            exports: [InputText],
            declarations: [InputText]
        })
    ], InputTextModule);
    return InputTextModule;
}());
exports.InputTextModule = InputTextModule;
//# sourceMappingURL=inputtext.js.map

/***/ }),

/***/ "./src/app/pages/cms/add-model/add-model.component.html":
/*!**************************************************************!*\
  !*** ./src/app/pages/cms/add-model/add-model.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"full mgt15 mgb15\">\n    <div class=\"container b3 ptb\">\n        <h3 class=\"f2 nomg pad br2\">Add Model</h3>\n    </div>\n</div>\n<div class=\"full\" style=\"margin-bottom:100px;\">\n    <div class=\"container b3 pad\">\n        <div class=\"ui-g-12 sb\">\n            <div class=\"ui-lg-8 ui-lg-offset-2\">\n                <form [formGroup]=\"addModel\">\n                    <div>\n                        <mat-form-field class=\"example-full-width2\">\n                            <input type=\"text\" placeholder=\"Select Category\" aria-label=\"Number\" matInput [formControl]=\"categoryControl\"\n                                [(ngModel)]=\"getCategoryValue\" [matAutocomplete]=\"auto\" required (click)=\"onLoad(0)\">\n                                <mat-error *ngIf=\"categoryControl.invalid\">{{getErrorMessage()}}</mat-error>\n                            <mat-autocomplete #auto=\"matAutocomplete\" (optionSelected)='getSubCategory($event.option.value.category_id)'\n                                [displayWith]=\"displayFn\">\n                                <mat-option *ngFor=\"let option of filteredCategory | async\" [value]=\"option\">\n                                    {{option.category_name}}\n                                </mat-option>\n                            </mat-autocomplete>\n\n                        </mat-form-field>\n                    </div>\n                    <div>\n                        <mat-form-field class=\"example-full-width2\">\n                            <input type=\"text\" placeholder=\"Select Sub Category\" aria-label=\"Number\" matInput\n                                [formControl]=\"subCategoryControl\" [matAutocomplete]=\"auto2\" (click)=\"onLoad(1)\">\n                          <mat-error *ngIf=\"subCategoryControl.invalid\">{{getErrorMessage()}}</mat-error>\n                            <mat-autocomplete #auto2=\"matAutocomplete\" (optionSelected)='getSubCategoryKey($event.option.value.subcategory_id)'\n                                [displayWith]=\"displayFn2\">\n                                <mat-option *ngFor=\"let option of filteredSubCategory | async\" [value]=\"option\">\n                                    {{option.subcategory_name}}\n                                </mat-option>\n                            </mat-autocomplete>\n                        </mat-form-field>\n                    </div>\n\n                    <!-- <mat-accordion> -->\n                        <!-- <mat-expansion-panel>\n                            <mat-expansion-panel-header>\n                                <mat-panel-title>\n                                    Select Category\n                                </mat-panel-title>\n                                <mat-panel-description>\n                                    <p class=\"error\"></p>\n                                </mat-panel-description>\n                            </mat-expansion-panel-header>\n                            <p-autoComplete formControlName=\"category\" [suggestions]=\"results\" field=\"name\" placeholder=\"search Category...\"\n                                (completeMethod)=\"search($event,0)\" (onSelect)=\"selectOptions($event,0)\" class=\"inpFull\">\n                            </p-autoComplete>\n                        </mat-expansion-panel> -->\n\n                        <!-- <mat-expansion-panel>\n                            <mat-expansion-panel-header>\n                                <mat-panel-title>\n                                    Select Sub Category\n                                </mat-panel-title>\n                                <mat-panel-description>\n                                    <p class=\"error\"></p>\n                                </mat-panel-description>\n                            </mat-expansion-panel-header>\n                            <p-autoComplete formControlName=\"subcategory\" (onSelect)=\"selectOptions($event,1)\"\n                                [suggestions]=\"results\" field=\"name\" placeholder=\"search Category...\" (completeMethod)=\"search($event,1)\"\n                                class=\"inpFull\">\n                            </p-autoComplete>\n                        </mat-expansion-panel> -->\n\n                        <!-- <mat-expansion-panel>\n                            <mat-expansion-panel-header>\n                                <mat-panel-title>\n                                    Available in\n                                </mat-panel-title>\n                                <mat-panel-description>\n                                    <p class=\"error\"></p>\n                                </mat-panel-description>\n                            </mat-expansion-panel-header>\n                            <p-multiSelect (onChange)=\"selectOptions($event,-1)\" (keydown)=\"search($event,-1)\"\n                                [options]=\"results\" class=\"inpFull\">\n                            </p-multiSelect>\n                        </mat-expansion-panel> -->\n                        <mat-form-field>\n                            <mat-select placeholder=\"Availabe In\" [formControl]=\"toppings\" multiple>\n                                <mat-select-trigger>\n                                    {{toppings.value ? toppings.value[0] : ''}}\n                                    <span *ngIf=\"toppings.value?.length > 1\" class=\"example-additional-selection\">\n                                        (+{{toppings.value.length - 1}} {{toppings.value?.length === 2 ? 'other' :\n                                        'others'}})\n                                    </span>\n                                </mat-select-trigger>\n                                <mat-option *ngFor=\"let topping of availableIn\" [value]=\"topping.texturecategory_id\">{{topping.texturecategory_name}}</mat-option>\n                            </mat-select>\n                        </mat-form-field>\n\n                    <!-- </mat-accordion> -->\n                    <div class=\"lst4P mgt15\">\n                        <label>Enter Scale Size</label>\n                        <table cellspacing=\"5\">\n                            <tr>\n                                <td>\n                                    <mat-form-field class=\"example-full-width\">\n                                        <input formControlName=\"length\" matInput type=\"number\" placeholder=\"Length\">\n                                        <p class=\"error e34\"></p>\n                                    </mat-form-field>\n                                </td>\n                                <td>\n                                    <mat-form-field class=\"example-full-width\">\n                                        <input formControlName=\"height\" matInput type=\"number\" placeholder=\"Height\">\n                                        <p class=\"error e34\"></p>\n                                    </mat-form-field>\n                                </td>\n                                <td>\n                                    <mat-form-field class=\"example-full-width\">\n                                        <input formControlName=\"base\" matInput #postalCode type=\"number\" maxlength=\"5\"\n                                            placeholder=\"Base\" value=\"\">\n                                        <p class=\"error e34\"></p>\n                                    </mat-form-field>\n                                </td>\n                            </tr>\n                        </table>\n                        <mat-form-field class=\"full\">\n                            <input formControlName=\"modal\" matInput placeholder=\"Enter Model Name\" value=\"\">\n                            <p class=\"error e34\"></p>\n                        </mat-form-field>\n                    </div>\n                    <div class=\"mgt15\">\n                        <div class=\"ui-lg-3 nop\">\n                            <p for=\"\" style=\"padding:10px 0px;color: #6f6a6a;\"> Image</p>\n                            <div class=\"_imgUpload ov r sb\">\n                                <span *ngIf=\"imageUpload\">\n                                    <div class=\"crossImg c3 c\" (click)=\"imageUpload=''\">\n                                        <i class=\"material-icons\">close</i>\n                                    </div>\n                                    <div class=\"_runBg\" [ngStyle]=\"{'background-image': 'url(' + imageUpload?.base + ')'}\"></div>\n                                </span>\n                                <input type=\"file\" (change)=\"uploadImage($event,'simple model')\">\n                            </div>\n\n                        </div>\n\n                        <div class=\"ui-lg-3 nop\">\n                            <p for=\"\" style=\"padding:10px 0px;color: #6f6a6a;\">3d Model Android</p>\n                            <div class=\"_imgUpload ov r sb\" style=\"background:url('/assets/image/3d_plc.jpeg');background-size: cover;\">\n                                <span *ngIf=\"threedAndroidUrl\">\n                                    <div class=\"crossImg c3 c\" (click)=\"threedAndroidUrl=''\">\n                                        <i class=\"material-icons\">close</i>\n                                    </div>\n                                    <div class=\"_runBg\" [ngStyle]=\"{'background-image': 'url(' + threedAndroidUrl?.base + ')'}\"></div>\n                                </span>\n                                <input type=\"file\" (change)=\"uploadImage($event,'3d model android')\">\n                            </div>\n                        </div>\n                        <div class=\"ui-lg-3 nop\">\n                            <p for=\"\" style=\"padding:10px 0px;color: #6f6a6a;\">3d Model iOS</p>\n                            <div class=\"_imgUpload ov r sb\" style=\"background:url('/assets/image/3d_plc.jpeg');background-size: cover;\">\n                                <span *ngIf=\"threedIosUrl\">\n                                    <div class=\"crossImg c3 c\" (click)=\"threedIosUrl=''\">\n                                        <i class=\"material-icons\">close</i>\n                                    </div>\n                                    <div class=\"_runBg\" [ngStyle]=\"{'background-image': 'url(' + threedIosUrl?.base + ')'}\"></div>\n                                </span>\n                                <input type=\"file\" (change)=\"uploadImage($event,'3d model iOS')\">\n                            </div>\n                        </div>\n\n                    </div>\n                </form>\n                <div class=\"ui-g-12 tr s_g8v\">\n                    <button (click)=\"submitForm(false)\" mat-flat-button color=\"accent\" class=\"f2 f15\">Add</button>\n                    <button (click)=\"submitForm(true)\" mat-flat-button color=\"primary\" class=\"f2 f15\">Save & Add New</button>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<p-growl [(value)]=\"msgs\"></p-growl>"

/***/ }),

/***/ "./src/app/pages/cms/add-model/add-model.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/pages/cms/add-model/add-model.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".lst4P label {\n  width: 100%;\n  display: inline-block; }\n\n.lst4P td {\n  margin-right: 25px;\n  display: initial; }\n\n.s_g8v button {\n  padding-top: 4px;\n  padding-bottom: 4px;\n  margin-left: 20px;\n  min-width: 100px; }\n\n.s_g8v button:last-child {\n  background-color: var(--green); }\n\n.mat-expansion-panel-header-description, .mat-expansion-panel-header-title {\n  width: 100%;\n  position: relative; }\n\n.example-additional-selection {\n  opacity: 0.75;\n  font-size: 0.75em; }\n\n.example-full-width2 {\n  width: 100%; }\n"

/***/ }),

/***/ "./src/app/pages/cms/add-model/add-model.component.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/cms/add-model/add-model.component.ts ***!
  \************************************************************/
/*! exports provided: AddModelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddModelComponent", function() { return AddModelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_http_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/http-service.service */ "./src/app/services/http-service.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddModelComponent = /** @class */ (function () {
    function AddModelComponent(fb, httpService) {
        this.fb = fb;
        this.httpService = httpService;
        this.msgs = [];
        this.panelOpenState = false;
        this.results = [];
        this.category = -1;
        this.subcategory = -1;
        this.categoryList = [];
        this.subCategoryList = [];
        this.categoryControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]);
        this.subCategoryControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]);
        this.toppings = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
    }
    AddModelComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.addModel = this.fb.group({
            categoryControl: [''],
            subcategory: [''],
            available: [''],
            length: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            height: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            base: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            modal: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            image: [''],
        });
        this.watchEditInput();
        this.filteredCategory = this.categoryControl.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (value) { return typeof value === 'string' ? value : value.category_name; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (name) { return name ? _this._filterCategory(name) : _this.categoryList.slice(); }));
        this.httpService.GetRequest(this.httpService.base_path + "get-category").subscribe(function (res) {
            console.log(res, "full response");
            _this.categoryList = res[0].json.category;
            console.log(_this.categoryList);
            _this.availableIn = res[0].json.texturecategory;
            console.log(_this.availableIn, "aaaaaaaaaaaaa");
        }, function (error) {
            console.log(error);
        });
        // var a = [1, 1, 2, 3, 4, 5, 1];
        // for (let i = 0; i < a.length; i++) {
        //   if (a[i] == a[i + 1]) {
        //     let temp = a[i];
        //     a[i] = a[i + 1];
        //     a[i + 1] = temp;
        //     i = i - 2;
        //   }
        // }
        // console.log(a,"sort")
        //console.log('add model');
    };
    AddModelComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.filteredSubCategory = this.subCategoryControl.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (value) { return typeof value === 'string' ? value : value.name; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (name) { return name ? _this._filterSubCategory(name) : _this.subCategoryList.slice(); }));
    };
    AddModelComponent.prototype.onLoad = function (value) {
        var _this = this;
        if (value === 0) {
            this.filteredCategory = this.categoryControl.valueChanges
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (value) { return typeof value === 'string' ? value : value.category_name; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (name) { return name ? _this._filterCategory(name) : _this.categoryList.slice(); }));
        }
        if (value === 1) {
            this.filteredSubCategory = this.subCategoryControl.valueChanges
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (value) { return typeof value === 'string' ? value : value.name; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (name) { return name ? _this._filterSubCategory(name) : _this.subCategoryList.slice(); }));
        }
    };
    AddModelComponent.prototype._filterCategory = function (value) {
        var filterValue = value.toLowerCase();
        return this.categoryList.filter(function (option) { return option.category_name.toLowerCase().indexOf(filterValue) === 0; });
    };
    AddModelComponent.prototype.displayFn = function (category) {
        return category ? category.category_name : undefined;
    };
    AddModelComponent.prototype.getSubCategory = function (categoryId) {
        var _this = this;
        this.category = categoryId;
        console.log(this.category, "cateee");
        // console.log(categoryId,"iiiii");
        this.httpService.GetRequest(this.httpService.base_path + "get-category/" + categoryId + '/').subscribe(function (res) {
            _this.subCategoryList = res[0].json.subcategory;
            console.log(_this.subCategoryList);
        }, function (error) {
            console.log(error);
        });
    };
    AddModelComponent.prototype._filterSubCategory = function (value) {
        var filterValue = value.toLowerCase();
        return this.subCategoryList.filter(function (option) { return option.subcategory_name.toLowerCase().indexOf(filterValue) === 0; });
    };
    AddModelComponent.prototype.displayFn2 = function (category) {
        return category ? category.subcategory_name : undefined;
    };
    AddModelComponent.prototype.getSubCategoryKey = function (subCategoryId) {
        this.subcategory = subCategoryId;
        console.log(this.subcategory, "ssssssub");
    };
    // search(event, id) {
    //   if (id == 0) {
    //     this.httpService.GetRequest(this.httpService.base_path + "product_category/?search=" + event.query).subscribe((res) => {
    //       this.results = res[0].json.product_category_list
    //     }, (error) => {
    //       console.log(error)
    //     })
    //   } else if (id == 1) {
    //     this.httpService.GetRequest(this.httpService.base_path + "product_subcategory/?category_id=" + this.category + "&search=" + event.query).subscribe((res) => {
    //       this.results = res[0].json.product_subcategory_list;
    //       console.log(this.results, "=-=-=")
    //     }, (error) => {
    //       console.log(error)
    //     })
    //   }
    //   else if (id == -1) {
    //     this.httpService.GetRequest(this.httpService.base_path + "texture_category/?search=" + event.target.value).subscribe((res) => {
    //       this.results = [];
    //       let data = res[0].json.texture_cat_list;
    //       for (let i = 0; i < data.length; i++) {
    //         let mkrd = { label: data[i].label, value: { id: data[i].id, name: data[i].label } }
    //         this.results.push(mkrd)
    //       }
    //     }, (error) => {
    //       console.log(error)
    //     })
    //   }
    // }
    AddModelComponent.prototype.uploadImage = function (event, type) {
        var _this = this;
        console.log(type, 'type=---');
        if (type == 'simple model') {
            var files_1 = event.target.files;
            if (files_1.length > 0) {
                var reader_1 = new FileReader();
                reader_1.onloadend = function () {
                    _this.imageUpload = { img: files_1[0], base: reader_1.result };
                    console.log('RESULT', _this.imageUpload);
                };
                reader_1.readAsDataURL(files_1[0]);
            }
        }
        else if (type == '3d model android') {
            var threedAndroidUrl_1 = event.target.files;
            if (threedAndroidUrl_1.length > 0) {
                var reader_2 = new FileReader();
                reader_2.onloadend = function () {
                    _this.threedAndroidUrl = { img: threedAndroidUrl_1[0], base: reader_2.result };
                    console.log('RESULT', _this.threedAndroidUrl);
                };
                reader_2.readAsDataURL(threedAndroidUrl_1[0]);
            }
        }
        else if (type == '3d model iOS') {
            var threedIosUrl_1 = event.target.files;
            if (threedIosUrl_1.length > 0) {
                var reader_3 = new FileReader();
                reader_3.onloadend = function () {
                    _this.threedIosUrl = { img: threedIosUrl_1[0], base: reader_3.result };
                    console.log('RESULT', _this.threedIosUrl);
                };
                reader_3.readAsDataURL(threedIosUrl_1[0]);
            }
        }
    };
    AddModelComponent.prototype.cancelImage = function () {
        alert("alert");
    };
    AddModelComponent.prototype.submitForm = function (info) {
        // console.log(this.addModel.value.length,"lenght");
        // console.log(this.addModel.value.height,"height");
        // console.log(this.category,"categoryy");
        // console.log(this.subcategory,"subcategoryyyyyyyyyyy");
        if (this.addModel.valid && this.categoryControl.valid && this.subCategoryControl.valid && this.category && this.subcategory && this.imageUpload != undefined && this.threedAndroidUrl && this.threedIosUrl) {
            this.addModel.value.category = this.category;
            this.addModel.value.subcategory = this.subcategory;
            // this.addModel.value.available = this.available;
            this.addModel.value.available = this.toppings.value;
            // console.log(this.addModel.value.category,this.addModel.value.subcategory,this.addModel.value.available,"lllll"); 
            this.formDataUserSend(this.addModel.value);
        }
        else {
            var validators = document.getElementsByClassName("error");
            if (!this.addModel.controls['categoryControl'].valid) {
                validators[0].innerHTML = "Required field";
            }
            if (!this.addModel.controls['subcategory'].valid) {
                validators[1].innerHTML = "Required field";
            }
            // if (!this.addModel.controls['available'].valid) {
            //   validators[2].innerHTML = "Required field"
            // }
            if (!this.addModel.controls['length'].valid) {
                validators[3].innerHTML = "Required field";
            }
            if (!this.addModel.controls['height'].valid) {
                validators[4].innerHTML = "Required field";
            }
            if (!this.addModel.controls['base'].valid) {
                validators[5].innerHTML = "Required field";
            }
            if (!this.addModel.controls['modal'].valid) {
                validators[6].innerHTML = "Required field";
            }
            if (!this.addModel.controls['image'].valid) {
            }
        }
    };
    AddModelComponent.prototype.getErrorMessage = function () {
        if (this.categoryControl.hasError('required') || this.subCategoryControl.hasError('required')) {
            return 'Required Field';
        }
    };
    AddModelComponent.prototype.watchEditInput = function () {
        var validators = document.getElementsByClassName("error");
        this.addModel.controls['categoryControl'].valueChanges.subscribe(function (value) {
            validators[0].innerHTML = "";
        });
        this.addModel.controls['subcategory'].valueChanges.subscribe(function (value) {
            validators[1].innerHTML = "";
        });
        this.addModel.controls['available'].valueChanges.subscribe(function (value) {
            validators[2].innerHTML = "";
        });
        this.addModel.controls['length'].valueChanges.subscribe(function (value) {
            validators[3].innerHTML = "";
        });
        this.addModel.controls['height'].valueChanges.subscribe(function (value) {
            validators[4].innerHTML = "";
        });
        this.addModel.controls['base'].valueChanges.subscribe(function (value) {
            validators[5].innerHTML = "";
        });
        this.addModel.controls['modal'].valueChanges.subscribe(function (value) {
            validators[6].innerHTML = "";
        });
    };
    // selectOptions(event, field) {
    //   switch (field) {
    //     case 0:
    //       this.category = event.id;
    //       break;
    //     case 1:
    //       this.subcategory = event.id;
    //       break;
    //     default:
    //       /*-----------Default case set multi select--------*/
    //       let data = [];
    //       for (let i = 0; i < event.value.length; i++) {
    //         data.push(event.value[i].id);
    //       }
    //       this.available = data;
    //       console.log(event, "-=-=", this.available)
    //       break;
    //   }
    // }
    AddModelComponent.prototype.formDataUserSend = function (data) {
        var _this = this;
        var formData = new FormData();
        formData.append("name", data.modal);
        formData.append("category_id", data.category);
        formData.append("sub_category_id", data.subcategory);
        formData.append("file", this.imageUpload.img);
        formData.append("three_d_model_android", this.threedAndroidUrl.img);
        formData.append("three_d_model_ios", this.threedIosUrl.img);
        formData.append("length", data.length);
        // formData.append("texture_cat_ids", data.available);
        formData.append("height", data.height);
        formData.append("base", data.base);
        for (var i = 0; i < data.available.length; i++) {
            formData.append("texture_cat_ids", data.available[i]);
        }
        console.log(formData, "formDataaaaaaaa");
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (xhttp.readyState === 4) {
                if (xhttp.status === 200) {
                    console.log(xhttp.response);
                    _this.notification('success', 'Successfully', 'Successfully Add');
                    _this.addModel.reset();
                    _this.threedAndroidUrl = {};
                    _this.threedIosUrl = {};
                    _this.imageUpload = {};
                }
                else {
                    console.log(xhttp);
                    _this.notification('error', '!Oops Error', 'Something went wrong try again.');
                }
            }
        };
        var authTocken = localStorage.getItem("token");
        xhttp.open("POST", this.httpService.base_path + "product/", true);
        xhttp.setRequestHeader("Authorization", "Bearer " + authTocken);
        xhttp.send(formData);
    };
    AddModelComponent.prototype.notification = function (type, summary, detail) {
        this.msgs = [];
        this.msgs.push({ severity: type, summary: summary, detail: detail });
    };
    AddModelComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-model',
            template: __webpack_require__(/*! ./add-model.component.html */ "./src/app/pages/cms/add-model/add-model.component.html"),
            styles: [__webpack_require__(/*! ./add-model.component.scss */ "./src/app/pages/cms/add-model/add-model.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _services_http_service_service__WEBPACK_IMPORTED_MODULE_2__["HttpServiceService"]])
    ], AddModelComponent);
    return AddModelComponent;
}());



/***/ }),

/***/ "./src/app/pages/cms/add-model/add-model.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/cms/add-model/add-model.module.ts ***!
  \*********************************************************/
/*! exports provided: AddModelModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddModelModule", function() { return AddModelModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _add_model_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-model.component */ "./src/app/pages/cms/add-model/add-model.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm5/expansion.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var primeng_autocomplete__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/autocomplete */ "./node_modules/primeng/autocomplete.js");
/* harmony import */ var primeng_autocomplete__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(primeng_autocomplete__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var primeng_multiselect__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/multiselect */ "./node_modules/primeng/multiselect.js");
/* harmony import */ var primeng_multiselect__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(primeng_multiselect__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var primeng_growl__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/growl */ "./node_modules/primeng/growl.js");
/* harmony import */ var primeng_growl__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(primeng_growl__WEBPACK_IMPORTED_MODULE_10__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var routes = [
    {
        path: '',
        component: _add_model_component__WEBPACK_IMPORTED_MODULE_2__["AddModelComponent"]
    }
];
var AddModelModule = /** @class */ (function () {
    function AddModelModule() {
    }
    AddModelModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"],
                primeng_multiselect__WEBPACK_IMPORTED_MODULE_8__["MultiSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatCheckboxModule"],
                primeng_autocomplete__WEBPACK_IMPORTED_MODULE_7__["AutoCompleteModule"],
                _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSelectModule"],
                primeng_growl__WEBPACK_IMPORTED_MODULE_10__["GrowlModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_add_model_component__WEBPACK_IMPORTED_MODULE_2__["AddModelComponent"]],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
        })
    ], AddModelModule);
    return AddModelModule;
}());



/***/ })

}]);
//# sourceMappingURL=add-model-add-model-module.js.map