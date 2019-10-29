(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tabs-tabs-module"],{

/***/ "./node_modules/@ionic-native/keyboard/index.js":
/*!******************************************************!*\
  !*** ./node_modules/@ionic-native/keyboard/index.js ***!
  \******************************************************/
/*! exports provided: KeyboardStyle, KeyboardResizeMode, Keyboard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeyboardStyle", function() { return KeyboardStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeyboardResizeMode", function() { return KeyboardResizeMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Keyboard", function() { return Keyboard; });
/* harmony import */ var _ionic_native_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic-native/core */ "./node_modules/@ionic-native/core/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var KeyboardStyle;
(function (KeyboardStyle) {
    KeyboardStyle["Light"] = "light";
    KeyboardStyle["Dark"] = "dark";
})(KeyboardStyle || (KeyboardStyle = {}));
var KeyboardResizeMode;
(function (KeyboardResizeMode) {
    KeyboardResizeMode["Native"] = "native";
    KeyboardResizeMode["Ionic"] = "ionic";
    KeyboardResizeMode["Body"] = "body";
    KeyboardResizeMode["None"] = "none";
})(KeyboardResizeMode || (KeyboardResizeMode = {}));
var KeyboardOriginal = /** @class */ (function (_super) {
    __extends(KeyboardOriginal, _super);
    function KeyboardOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    KeyboardOriginal.prototype.hideFormAccessoryBar = function (hide) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordova"])(this, "hideFormAccessoryBar", { "sync": true, "platforms": ["iOS"] }, arguments); };
    KeyboardOriginal.prototype.hide = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordova"])(this, "hide", { "sync": true, "platforms": ["iOS", "Android"] }, arguments); };
    KeyboardOriginal.prototype.show = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordova"])(this, "show", { "sync": true, "platforms": ["Android"] }, arguments); };
    KeyboardOriginal.prototype.setResizeMode = function (mode) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordova"])(this, "setResizeMode", { "sync": true, "platforms": ["iOS"] }, arguments); };
    KeyboardOriginal.prototype.setKeyboardStyle = function (style) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordova"])(this, "setKeyboardStyle", { "sync": true, "platforms": ["iOS"] }, arguments); };
    KeyboardOriginal.prototype.disableScroll = function (disable) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordova"])(this, "disableScroll", { "sync": true, "platforms": ["iOS"] }, arguments); };
    KeyboardOriginal.prototype.onKeyboardShow = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordova"])(this, "onKeyboardShow", { "eventObservable": true, "event": "native.keyboardshow", "platforms": ["iOS", "Android"] }, arguments); };
    KeyboardOriginal.prototype.onKeyboardWillShow = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordova"])(this, "onKeyboardWillShow", { "eventObservable": true, "event": "keyboardWillShow", "platforms": ["iOS", "Android"] }, arguments); };
    KeyboardOriginal.prototype.onKeyboardDidShow = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordova"])(this, "onKeyboardDidShow", { "eventObservable": true, "event": "keyboardDidShow", "platforms": ["iOS", "Android"] }, arguments); };
    KeyboardOriginal.prototype.onKeyboardHide = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordova"])(this, "onKeyboardHide", { "eventObservable": true, "event": "native.keyboardhide", "platforms": ["iOS", "Android"] }, arguments); };
    KeyboardOriginal.prototype.onKeyboardWillHide = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordova"])(this, "onKeyboardWillHide", { "eventObservable": true, "event": "keyboardWillHide", "platforms": ["iOS", "Android"] }, arguments); };
    KeyboardOriginal.prototype.onKeyboardDidHide = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordova"])(this, "onKeyboardDidHide", { "eventObservable": true, "event": "keyboardDidHide", "platforms": ["iOS", "Android"] }, arguments); };
    Object.defineProperty(KeyboardOriginal.prototype, "isVisible", {
        get: function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaPropertyGet"])(this, "isVisible"); },
        set: function (value) { Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["cordovaPropertySet"])(this, "isVisible", value); },
        enumerable: true,
        configurable: true
    });
    KeyboardOriginal.pluginName = "Keyboard";
    KeyboardOriginal.plugin = "cordova-plugin-ionic-keyboard";
    KeyboardOriginal.pluginRef = "window.Keyboard";
    KeyboardOriginal.repo = "https://github.com/ionic-team/cordova-plugin-ionic-keyboard";
    KeyboardOriginal.platforms = ["Android", "iOS"];
    return KeyboardOriginal;
}(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__["IonicNativePlugin"]));
var Keyboard = new KeyboardOriginal();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2tleWJvYXJkL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDQSxPQUFPLHNFQUF1RCxNQUFNLG9CQUFvQixDQUFDO0FBQ3pGLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFbEMsTUFBTSxDQUFOLElBQVksYUFHWDtBQUhELFdBQVksYUFBYTtJQUN2QixnQ0FBZSxDQUFBO0lBQ2YsOEJBQWEsQ0FBQTtBQUNmLENBQUMsRUFIVyxhQUFhLEtBQWIsYUFBYSxRQUd4QjtBQUVELE1BQU0sQ0FBTixJQUFZLGtCQUtYO0FBTEQsV0FBWSxrQkFBa0I7SUFDNUIsdUNBQWlCLENBQUE7SUFDakIscUNBQWUsQ0FBQTtJQUNmLG1DQUFhLENBQUE7SUFDYixtQ0FBYSxDQUFBO0FBQ2YsQ0FBQyxFQUxXLGtCQUFrQixLQUFsQixrQkFBa0IsUUFLN0I7O0lBZ0M2Qiw0QkFBaUI7Ozs7SUFnQjdDLHVDQUFvQixhQUFDLElBQWE7SUFTbEMsdUJBQUk7SUFTSix1QkFBSTtJQVVKLGdDQUFhLGFBQUMsSUFBd0I7SUFVdEMsbUNBQWdCLGFBQUMsS0FBb0I7SUFVckMsZ0NBQWEsYUFBQyxPQUFnQjtJQVc5QixpQ0FBYztJQWFkLHFDQUFrQjtJQWFsQixvQ0FBaUI7SUFhakIsaUNBQWM7SUFhZCxxQ0FBa0I7SUFhbEIsb0NBQWlCOzBCQXRJakIsK0JBQVM7Ozs7Ozs7Ozs7O21CQXBEWDtFQThDOEIsaUJBQWlCO1NBQWxDLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb3Jkb3ZhLCBJb25pY05hdGl2ZVBsdWdpbiwgQ29yZG92YVByb3BlcnR5LCBQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5leHBvcnQgZW51bSBLZXlib2FyZFN0eWxlIHtcbiAgTGlnaHQgPSAnbGlnaHQnLFxuICBEYXJrID0gJ2RhcmsnXG59XG5cbmV4cG9ydCBlbnVtIEtleWJvYXJkUmVzaXplTW9kZSB7XG4gIE5hdGl2ZSA9ICduYXRpdmUnLFxuICBJb25pYyA9ICdpb25pYycsXG4gIEJvZHkgPSAnYm9keScsXG4gIE5vbmUgPSAnbm9uZSdcbn1cblxuXG4vKipcbiAqIEBuYW1lIEtleWJvYXJkXG4gKiBAZGVzY3JpcHRpb25cbiAqIEtleWJvYXJkIHBsdWdpbiBmb3IgQ29yZG92YS5cbiAqXG4gKiBSZXF1aXJlcyBDb3Jkb3ZhIHBsdWdpbjogYGNvcmRvdmEtcGx1Z2luLWlvbmljLWtleWJvYXJkYC4gRm9yIG1vcmUgaW5mbywgcGxlYXNlIHNlZSB0aGUgW0tleWJvYXJkIHBsdWdpbiBkb2NzXShodHRwczovL2dpdGh1Yi5jb20vaW9uaWMtdGVhbS9jb3Jkb3ZhLXBsdWdpbi1pb25pYy1rZXlib2FyZCkuXG4gKlxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBLZXlib2FyZCB9IGZyb20gJ0Bpb25pYy1uYXRpdmUva2V5Ym9hcmQvbmd4JztcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGtleWJvYXJkOiBLZXlib2FyZCkgeyB9XG4gKlxuICogLi4uXG4gKlxuICogdGhpcy5rZXlib2FyZC5zaG93KCk7XG4gKlxuICogdGhpcy5rZXlib2FyZC5oaWRlKCk7XG4gKlxuICogYGBgXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnS2V5Ym9hcmQnLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1pb25pYy1rZXlib2FyZCcsXG4gIHBsdWdpblJlZjogJ3dpbmRvdy5LZXlib2FyZCcsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vaW9uaWMtdGVhbS9jb3Jkb3ZhLXBsdWdpbi1pb25pYy1rZXlib2FyZCcsXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUyddXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEtleWJvYXJkIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogQ2hlY2sga2V5Ym9hcmQgc3RhdHVzIHZpc2libGUgb3Igbm90LlxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICovXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICBpc1Zpc2libGU6IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIEhpZGUgdGhlIGtleWJvYXJkIGFjY2Vzc29yeSBiYXIgd2l0aCB0aGUgbmV4dCwgcHJldmlvdXMgYW5kIGRvbmUgYnV0dG9ucy5cbiAgICogQHBhcmFtIGhpZGUge2Jvb2xlYW59XG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgc3luYzogdHJ1ZSxcbiAgICBwbGF0Zm9ybXM6IFsnaU9TJ11cbiAgfSlcbiAgaGlkZUZvcm1BY2Nlc3NvcnlCYXIoaGlkZTogYm9vbGVhbik6IHZvaWQge31cblxuICAvKipcbiAgICogSGlkZSB0aGUga2V5Ym9hcmQgaWYgc2hvd24uXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgc3luYzogdHJ1ZSxcbiAgICBwbGF0Zm9ybXM6IFsnaU9TJywgJ0FuZHJvaWQnXVxuICB9KVxuICBoaWRlKCk6IHZvaWQge31cblxuICAvKipcbiAgICogRm9yY2Uga2V5Ym9hcmQgdG8gYmUgc2hvd24uXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgc3luYzogdHJ1ZSxcbiAgICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCddXG4gIH0pXG4gIHNob3coKTogdm9pZCB7fVxuXG4gIC8qKlxuICAgKiBQcm9ncmFtYXRpY2FsbHkgc2V0IHRoZSByZXNpemUgbW9kZVxuICAgKiBAcGFyYW0gbW9kZSB7c3RyaW5nfVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHN5bmM6IHRydWUsXG4gICAgcGxhdGZvcm1zOiBbJ2lPUyddXG4gIH0pXG4gIHNldFJlc2l6ZU1vZGUobW9kZTogS2V5Ym9hcmRSZXNpemVNb2RlKTogdm9pZCB7fVxuXG4gIC8qKlxuICAgKiBQcm9ncmFtYXRpY2FsbHkgc2V0IEtleWJvYXJkIHN0eWxlXG4gICAqIEBwYXJhbSBtb2RlIHtzdHJpbmd9XG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgc3luYzogdHJ1ZSxcbiAgICBwbGF0Zm9ybXM6IFsnaU9TJ11cbiAgfSlcbiAgc2V0S2V5Ym9hcmRTdHlsZShzdHlsZTogS2V5Ym9hcmRTdHlsZSk6IHZvaWQge31cblxuICAvKipcbiAgICogUHJvZ3JhbWF0aWNhbGx5IGVuYWJsZSBvciBkaXNhYmxlIHRoZSBXZWJWaWV3IHNjcm9sbFxuICAgKiBAcGFyYW0gbW9kZSB7c3RyaW5nfVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHN5bmM6IHRydWUsXG4gICAgcGxhdGZvcm1zOiBbJ2lPUyddXG4gIH0pXG4gIGRpc2FibGVTY3JvbGwoZGlzYWJsZTogYm9vbGVhbik6IHZvaWQge31cblxuICAvKipcbiAgICogQ3JlYXRlcyBhbiBvYnNlcnZhYmxlIHRoYXQgbm90aWZpZXMgeW91IHdoZW4gdGhlIGtleWJvYXJkIGlzIHNob3duLiBVbnN1YnNjcmliZSB0byBvYnNlcnZhYmxlIHRvIGNhbmNlbCBldmVudCB3YXRjaC5cbiAgICogQHJldHVybnMge09ic2VydmFibGU8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBldmVudE9ic2VydmFibGU6IHRydWUsXG4gICAgZXZlbnQ6ICduYXRpdmUua2V5Ym9hcmRzaG93JyxcbiAgICBwbGF0Zm9ybXM6IFsnaU9TJywgJ0FuZHJvaWQnXVxuICB9KVxuICBvbktleWJvYXJkU2hvdygpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuIG9ic2VydmFibGUgdGhhdCBub3RpZmllcyB5b3Ugd2hlbiB0aGUga2V5Ym9hcmQgd2lsbCBzaG93LiBVbnN1YnNjcmliZSB0byBvYnNlcnZhYmxlIHRvIGNhbmNlbCBldmVudCB3YXRjaC5cbiAgICogQHJldHVybnMge09ic2VydmFibGU8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBldmVudE9ic2VydmFibGU6IHRydWUsXG4gICAgZXZlbnQ6ICdrZXlib2FyZFdpbGxTaG93JyxcbiAgICBwbGF0Zm9ybXM6IFsnaU9TJywgJ0FuZHJvaWQnXVxuICB9KVxuICBvbktleWJvYXJkV2lsbFNob3coKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhbiBvYnNlcnZhYmxlIHRoYXQgbm90aWZpZXMgeW91IHdoZW4gdGhlIGtleWJvYXJkIGRpZCBzaG93LiBVbnN1YnNjcmliZSB0byBvYnNlcnZhYmxlIHRvIGNhbmNlbCBldmVudCB3YXRjaC5cbiAgICogQHJldHVybnMge09ic2VydmFibGU8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBldmVudE9ic2VydmFibGU6IHRydWUsXG4gICAgZXZlbnQ6ICdrZXlib2FyZERpZFNob3cnLFxuICAgIHBsYXRmb3JtczogWydpT1MnLCAnQW5kcm9pZCddXG4gIH0pXG4gIG9uS2V5Ym9hcmREaWRTaG93KCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4gb2JzZXJ2YWJsZSB0aGF0IG5vdGlmaWVzIHlvdSB3aGVuIHRoZSBrZXlib2FyZCBpcyBoaWRkZW4uIFVuc3Vic2NyaWJlIHRvIG9ic2VydmFibGUgdG8gY2FuY2VsIGV2ZW50IHdhdGNoLlxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIGV2ZW50T2JzZXJ2YWJsZTogdHJ1ZSxcbiAgICBldmVudDogJ25hdGl2ZS5rZXlib2FyZGhpZGUnLFxuICAgIHBsYXRmb3JtczogWydpT1MnLCAnQW5kcm9pZCddXG4gIH0pXG4gIG9uS2V5Ym9hcmRIaWRlKCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4gb2JzZXJ2YWJsZSB0aGF0IG5vdGlmaWVzIHlvdSB3aGVuIHRoZSBrZXlib2FyZCB3aWxsIGhpZGUuIFVuc3Vic2NyaWJlIHRvIG9ic2VydmFibGUgdG8gY2FuY2VsIGV2ZW50IHdhdGNoLlxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIGV2ZW50T2JzZXJ2YWJsZTogdHJ1ZSxcbiAgICBldmVudDogJ2tleWJvYXJkV2lsbEhpZGUnLFxuICAgIHBsYXRmb3JtczogWydpT1MnLCAnQW5kcm9pZCddXG4gIH0pXG4gIG9uS2V5Ym9hcmRXaWxsSGlkZSgpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuIG9ic2VydmFibGUgdGhhdCBub3RpZmllcyB5b3Ugd2hlbiB0aGUga2V5Ym9hcmQgZGlkIGhpZGUuIFVuc3Vic2NyaWJlIHRvIG9ic2VydmFibGUgdG8gY2FuY2VsIGV2ZW50IHdhdGNoLlxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIGV2ZW50T2JzZXJ2YWJsZTogdHJ1ZSxcbiAgICBldmVudDogJ2tleWJvYXJkRGlkSGlkZScsXG4gICAgcGxhdGZvcm1zOiBbJ2lPUycsICdBbmRyb2lkJ11cbiAgfSlcbiAgb25LZXlib2FyZERpZEhpZGUoKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cbn1cbiJdfQ==

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/tabs/tabs.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tabs/tabs.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content class=\"tabs-content\">\n  <ion-tabs #tabs (ionTabsDidChange)=\"getSelectedTab()\">\n    <ion-tab-bar slot=\"bottom\" color=\"primary\">\n      <ion-tab-button tab=\"restaurants-list\">\n        <ion-icon name=\"home\"></ion-icon>\n        <ion-label>Restaurants</ion-label>\n      </ion-tab-button>\n\n      <ion-tab-button tab=\"restaurant-menu\">\n        <ion-icon name=\"restaurant\"></ion-icon>\n        <ion-label>Menu</ion-label>\n      </ion-tab-button>\n\n      <ion-tab-button tab=\"order-status\">\n        <ion-icon name=\"clipboard\"></ion-icon>\n        <ion-label>Order Status</ion-label>\n      </ion-tab-button>\n\n      <ion-tab-button tab=\"user-profile\">\n          <ion-icon name=\"contact\"></ion-icon>\n          <ion-label>Account</ion-label>\n        </ion-tab-button>\n    </ion-tab-bar>\n  </ion-tabs>\n    <ion-fab #scanBtn vertical=\"bottom\" horizontal=\"center\" slot=\"fixed\" >\n      <ion-fab-button class=\"scan-button\" color=\"secondary\" (click)=\"performScan()\">\n        <ion-icon name=\"qr-scanner\"></ion-icon>\n      </ion-fab-button>\n    </ion-fab>\n</ion-content>"

/***/ }),

/***/ "./src/app/menu-resolver.service.ts":
/*!******************************************!*\
  !*** ./src/app/menu-resolver.service.ts ***!
  \******************************************/
/*! exports provided: MenuResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuResolver", function() { return MenuResolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _restaurant_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./restaurant.service */ "./src/app/restaurant.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");



let MenuResolver = class MenuResolver {
    constructor(restaurantService) {
        this.restaurantService = restaurantService;
    }
    resolve(route) {
        return this.restaurantService.getMenu(+route.paramMap.get('id'));
    }
};
MenuResolver.ctorParameters = () => [
    { type: _restaurant_service__WEBPACK_IMPORTED_MODULE_1__["RestaurantService"] }
];
MenuResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_restaurant_service__WEBPACK_IMPORTED_MODULE_1__["RestaurantService"]])
], MenuResolver);



/***/ }),

/***/ "./src/app/tabs/tabs.module.ts":
/*!*************************************!*\
  !*** ./src/app/tabs/tabs.module.ts ***!
  \*************************************/
/*! exports provided: TabsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageModule", function() { return TabsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _tabs_router_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tabs.router.module */ "./src/app/tabs/tabs.router.module.ts");
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tabs.page */ "./src/app/tabs/tabs.page.ts");







let TabsPageModule = class TabsPageModule {
};
TabsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _tabs_router_module__WEBPACK_IMPORTED_MODULE_5__["TabsPageRoutingModule"]
        ],
        declarations: [_tabs_page__WEBPACK_IMPORTED_MODULE_6__["TabsPage"]]
    })
], TabsPageModule);



/***/ }),

/***/ "./src/app/tabs/tabs.page.scss":
/*!*************************************!*\
  !*** ./src/app/tabs/tabs.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tabs-content ion-tab-button:nth-child(3) {\n  padding-left: 15%;\n}\n.tabs-content .scan-button {\n  -webkit-animation: shadow-pulse 1s infinite;\n          animation: shadow-pulse 1s infinite;\n  border-radius: 50%;\n}\n@-webkit-keyframes shadow-pulse {\n  0% {\n    box-shadow: 0 0 0 0px rgba(229, 197, 0, 0.5);\n  }\n  100% {\n    box-shadow: 0 0 0 10px rgba(229, 197, 0, 0.2);\n  }\n}\n@keyframes shadow-pulse {\n  0% {\n    box-shadow: 0 0 0 0px rgba(229, 197, 0, 0.5);\n  }\n  100% {\n    box-shadow: 0 0 0 10px rgba(229, 197, 0, 0.2);\n  }\n}\n.scroll-content {\n  padding-bottom: 0 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9taW9yZGFjaC9EZXNrdG9wL3dvcmtzcGFjZS9vcmRlci1ub3cvc3JjL2FwcC90YWJzL3RhYnMucGFnZS5zY3NzIiwic3JjL2FwcC90YWJzL3RhYnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsaUJBQUE7QUNBSjtBREVFO0VBQ0UsMkNBQUE7VUFBQSxtQ0FBQTtFQUNBLGtCQUFBO0FDQUo7QURHRTtFQUNFO0lBQ0UsNENBQUE7RUNESjtFREdFO0lBQ0UsNkNBQUE7RUNESjtBQUNGO0FETEU7RUFDRTtJQUNFLDRDQUFBO0VDREo7RURHRTtJQUNFLDZDQUFBO0VDREo7QUFDRjtBREtBO0VBQ0UsNEJBQUE7QUNGRiIsImZpbGUiOiJzcmMvYXBwL3RhYnMvdGFicy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGFicy1jb250ZW50IHtcbiAgaW9uLXRhYi1idXR0b246bnRoLWNoaWxkKDMpIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDE1JTtcbiAgfVxuICAuc2Nhbi1idXR0b24ge1xuICAgIGFuaW1hdGlvbjogc2hhZG93LXB1bHNlIDFzIGluZmluaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgfVxuXG4gIEBrZXlmcmFtZXMgc2hhZG93LXB1bHNlIHtcbiAgICAwJSB7XG4gICAgICBib3gtc2hhZG93OiAwIDAgMCAwcHggcmdiYSgyMjksIDE5NywgMCwgMC41KTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICBib3gtc2hhZG93OiAwIDAgMCAxMHB4IHJnYmEoMjI5LCAxOTcsIDAsIDAuMik7XG4gICAgfVxuICB9XG59XG5cbi5zY3JvbGwtY29udGVudCB7XG4gIHBhZGRpbmctYm90dG9tOiAwICFpbXBvcnRhbnQ7XG59IiwiLnRhYnMtY29udGVudCBpb24tdGFiLWJ1dHRvbjpudGgtY2hpbGQoMykge1xuICBwYWRkaW5nLWxlZnQ6IDE1JTtcbn1cbi50YWJzLWNvbnRlbnQgLnNjYW4tYnV0dG9uIHtcbiAgYW5pbWF0aW9uOiBzaGFkb3ctcHVsc2UgMXMgaW5maW5pdGU7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cbkBrZXlmcmFtZXMgc2hhZG93LXB1bHNlIHtcbiAgMCUge1xuICAgIGJveC1zaGFkb3c6IDAgMCAwIDBweCByZ2JhKDIyOSwgMTk3LCAwLCAwLjUpO1xuICB9XG4gIDEwMCUge1xuICAgIGJveC1zaGFkb3c6IDAgMCAwIDEwcHggcmdiYSgyMjksIDE5NywgMCwgMC4yKTtcbiAgfVxufVxuXG4uc2Nyb2xsLWNvbnRlbnQge1xuICBwYWRkaW5nLWJvdHRvbTogMCAhaW1wb3J0YW50O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/tabs/tabs.page.ts":
/*!***********************************!*\
  !*** ./src/app/tabs/tabs.page.ts ***!
  \***********************************/
/*! exports provided: TabsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPage", function() { return TabsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_native_keyboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic-native/keyboard */ "./node_modules/@ionic-native/keyboard/index.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/barcode-scanner/ngx */ "./node_modules/@ionic-native/barcode-scanner/ngx/index.js");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @capacitor/core */ "./node_modules/@capacitor/core/dist/esm/index.js");








const { Toast } = _capacitor_core__WEBPACK_IMPORTED_MODULE_7__["Plugins"];
let TabsPage = class TabsPage {
    constructor(barcodeScanner, route, authService) {
        this.barcodeScanner = barcodeScanner;
        this.route = route;
        this.authService = authService;
        _ionic_native_keyboard__WEBPACK_IMPORTED_MODULE_1__["Keyboard"].onKeyboardWillHide().subscribe(() => {
            this.scanBtn.el.style.visibility = 'visible';
        });
        _ionic_native_keyboard__WEBPACK_IMPORTED_MODULE_1__["Keyboard"].onKeyboardDidShow().subscribe(() => {
            this.scanBtn.el.style.visibility = 'hidden';
        });
    }
    ngOnInit() { }
    getSelectedTab() {
        this.currentTab = this.tabs.getSelected();
    }
    performScan() {
        this.barcodeScanner
            .scan()
            .then((barcodeData) => {
            Toast.show({
                duration: 'long',
                text: JSON.stringify(barcodeData)
            });
            console.log('Barcode data', barcodeData);
            this.route.navigate(['/details/' + JSON.parse(barcodeData.text).id]);
        })
            .catch(err => {
            console.log('Error', err);
        });
    }
};
TabsPage.ctorParameters = () => [
    { type: _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_6__["BarcodeScanner"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"])('tabs', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonTabs"])
], TabsPage.prototype, "tabs", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"])('scanBtn', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], TabsPage.prototype, "scanBtn", void 0);
TabsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-tabs',
        template: __webpack_require__(/*! raw-loader!./tabs.page.html */ "./node_modules/raw-loader/index.js!./src/app/tabs/tabs.page.html"),
        styles: [__webpack_require__(/*! ./tabs.page.scss */ "./src/app/tabs/tabs.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_6__["BarcodeScanner"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
], TabsPage);



/***/ }),

/***/ "./src/app/tabs/tabs.router.module.ts":
/*!********************************************!*\
  !*** ./src/app/tabs/tabs.router.module.ts ***!
  \********************************************/
/*! exports provided: TabsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageRoutingModule", function() { return TabsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tabs.page */ "./src/app/tabs/tabs.page.ts");
/* harmony import */ var _restaurant_resolver_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../restaurant-resolver.service */ "./src/app/restaurant-resolver.service.ts");
/* harmony import */ var _menu_resolver_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../menu-resolver.service */ "./src/app/menu-resolver.service.ts");






const routes = [
    {
        path: 'tabs',
        component: _tabs_page__WEBPACK_IMPORTED_MODULE_3__["TabsPage"],
        children: [
            {
                path: 'restaurants-list',
                children: [
                    {
                        path: '',
                        loadChildren: () => Promise.all(/*! import() | restaurants-list-restaurants-list-module */[__webpack_require__.e("common"), __webpack_require__.e("restaurants-list-restaurants-list-module")]).then(__webpack_require__.bind(null, /*! ../restaurants-list/restaurants-list.module */ "./src/app/restaurants-list/restaurants-list.module.ts")).then(m => m.RestaurantsListPageModule)
                    }
                ]
            },
            {
                path: 'restaurants-list/details/:id',
                loadChildren: () => Promise.all(/*! import() | details-details-module */[__webpack_require__.e("common"), __webpack_require__.e("details-details-module")]).then(__webpack_require__.bind(null, /*! ../details/details.module */ "./src/app/details/details.module.ts")).then(m => m.DetailsPageModule),
                resolve: {
                    restaurant: _restaurant_resolver_service__WEBPACK_IMPORTED_MODULE_4__["RestaurantResolver"]
                }
            },
            {
                path: 'restaurant-menu',
                children: [
                    {
                        path: '',
                        loadChildren: () => __webpack_require__.e(/*! import() | restaurant-menu-restaurant-menu-module */ "restaurant-menu-restaurant-menu-module").then(__webpack_require__.bind(null, /*! ../restaurant-menu/restaurant-menu.module */ "./src/app/restaurant-menu/restaurant-menu.module.ts")).then(m => m.RestaurantMenuPageModule)
                    }
                ]
            },
            {
                path: 'restaurant-menu/menu/:id',
                loadChildren: () => __webpack_require__.e(/*! import() | restaurant-menu-menu-products-menu-products-module */ "restaurant-menu-menu-products-menu-products-module").then(__webpack_require__.bind(null, /*! ../restaurant-menu/menu-products/menu-products.module */ "./src/app/restaurant-menu/menu-products/menu-products.module.ts")).then(m => m.MenuProductsPageModule),
                resolve: {
                    menu: _menu_resolver_service__WEBPACK_IMPORTED_MODULE_5__["MenuResolver"]
                }
            },
            {
                path: 'order-status',
                children: [
                    {
                        path: '',
                        loadChildren: () => __webpack_require__.e(/*! import() | order-status-order-status-module */ "order-status-order-status-module").then(__webpack_require__.bind(null, /*! ../order-status/order-status.module */ "./src/app/order-status/order-status.module.ts")).then(m => m.OrderStatusPageModule)
                    }
                ]
            },
            {
                path: 'order-status/payment',
                loadChildren: () => __webpack_require__.e(/*! import() | payment-payment-module */ "payment-payment-module").then(__webpack_require__.bind(null, /*! ../payment/payment.module */ "./src/app/payment/payment.module.ts")).then(m => m.PaymentPageModule),
            },
            {
                path: '',
                redirectTo: 'tabs/restaurans-list',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: 'tabs/restaurants-list',
        pathMatch: 'full'
    }
];
let TabsPageRoutingModule = class TabsPageRoutingModule {
};
TabsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], TabsPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=tabs-tabs-module-es2015.js.map