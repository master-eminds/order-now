(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./auth/auth.module": [
		"./src/app/auth/auth.module.ts",
		"auth-auth-module"
	],
	"./welcome/welcome.module": [
		"./src/app/welcome/welcome.module.ts",
		"welcome-welcome-module"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./capacitor.config.json":
/*!*******************************!*\
  !*** ./capacitor.config.json ***!
  \*******************************/
/*! exports provided: appId, appName, bundledWebRuntime, npmClient, webDir, plugins, default */
/***/ (function(module) {

module.exports = {"appId":"com.ordernow.app","appName":"order-now","bundledWebRuntime":false,"npmClient":"npm","webDir":"www","plugins":{"GoogleAuth":{"scopes":["profile","email"],"serverClientId":"145226042019-u5dcg9edl0qfjqookqq1q7n3qm3eggs9.apps.googleusercontent.com"}}};

/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./ion-action-sheet-controller_8.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-action-sheet-controller_8.entry.js",
		"common",
		0
	],
	"./ion-action-sheet-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-action-sheet-ios.entry.js",
		"common",
		1
	],
	"./ion-action-sheet-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-action-sheet-md.entry.js",
		"common",
		2
	],
	"./ion-alert-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-alert-ios.entry.js",
		"common",
		3
	],
	"./ion-alert-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-alert-md.entry.js",
		"common",
		4
	],
	"./ion-app_8-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-app_8-ios.entry.js",
		"common",
		5
	],
	"./ion-app_8-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-app_8-md.entry.js",
		"common",
		6
	],
	"./ion-avatar_3-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-avatar_3-ios.entry.js",
		"common",
		7
	],
	"./ion-avatar_3-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-avatar_3-md.entry.js",
		"common",
		8
	],
	"./ion-back-button-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-back-button-ios.entry.js",
		"common",
		9
	],
	"./ion-back-button-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-back-button-md.entry.js",
		"common",
		10
	],
	"./ion-backdrop-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-backdrop-ios.entry.js",
		11
	],
	"./ion-backdrop-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-backdrop-md.entry.js",
		12
	],
	"./ion-button_2-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-button_2-ios.entry.js",
		"common",
		13
	],
	"./ion-button_2-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-button_2-md.entry.js",
		"common",
		14
	],
	"./ion-card_5-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-card_5-ios.entry.js",
		"common",
		15
	],
	"./ion-card_5-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-card_5-md.entry.js",
		"common",
		16
	],
	"./ion-checkbox-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-checkbox-ios.entry.js",
		"common",
		17
	],
	"./ion-checkbox-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-checkbox-md.entry.js",
		"common",
		18
	],
	"./ion-chip-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-chip-ios.entry.js",
		"common",
		19
	],
	"./ion-chip-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-chip-md.entry.js",
		"common",
		20
	],
	"./ion-col_3.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-col_3.entry.js",
		21
	],
	"./ion-datetime_3-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-datetime_3-ios.entry.js",
		"common",
		22
	],
	"./ion-datetime_3-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-datetime_3-md.entry.js",
		"common",
		23
	],
	"./ion-fab_3-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-fab_3-ios.entry.js",
		"common",
		24
	],
	"./ion-fab_3-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-fab_3-md.entry.js",
		"common",
		25
	],
	"./ion-img.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-img.entry.js",
		26
	],
	"./ion-infinite-scroll_2-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2-ios.entry.js",
		"common",
		27
	],
	"./ion-infinite-scroll_2-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2-md.entry.js",
		"common",
		28
	],
	"./ion-input-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-input-ios.entry.js",
		"common",
		29
	],
	"./ion-input-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-input-md.entry.js",
		"common",
		30
	],
	"./ion-item-option_3-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-item-option_3-ios.entry.js",
		"common",
		31
	],
	"./ion-item-option_3-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-item-option_3-md.entry.js",
		"common",
		32
	],
	"./ion-item_8-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-item_8-ios.entry.js",
		"common",
		33
	],
	"./ion-item_8-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-item_8-md.entry.js",
		"common",
		34
	],
	"./ion-loading-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-loading-ios.entry.js",
		"common",
		35
	],
	"./ion-loading-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-loading-md.entry.js",
		"common",
		36
	],
	"./ion-menu_4-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-menu_4-ios.entry.js",
		"common",
		37
	],
	"./ion-menu_4-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-menu_4-md.entry.js",
		"common",
		38
	],
	"./ion-modal-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-modal-ios.entry.js",
		"common",
		39
	],
	"./ion-modal-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-modal-md.entry.js",
		"common",
		40
	],
	"./ion-nav_5.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-nav_5.entry.js",
		"common",
		41
	],
	"./ion-popover-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-popover-ios.entry.js",
		"common",
		42
	],
	"./ion-popover-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-popover-md.entry.js",
		"common",
		43
	],
	"./ion-progress-bar-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-progress-bar-ios.entry.js",
		"common",
		44
	],
	"./ion-progress-bar-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-progress-bar-md.entry.js",
		"common",
		45
	],
	"./ion-radio_2-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-radio_2-ios.entry.js",
		"common",
		46
	],
	"./ion-radio_2-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-radio_2-md.entry.js",
		"common",
		47
	],
	"./ion-range-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-range-ios.entry.js",
		"common",
		48
	],
	"./ion-range-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-range-md.entry.js",
		"common",
		49
	],
	"./ion-refresher_2-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-refresher_2-ios.entry.js",
		"common",
		50
	],
	"./ion-refresher_2-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-refresher_2-md.entry.js",
		"common",
		51
	],
	"./ion-reorder_2-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-reorder_2-ios.entry.js",
		"common",
		52
	],
	"./ion-reorder_2-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-reorder_2-md.entry.js",
		"common",
		53
	],
	"./ion-ripple-effect.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-ripple-effect.entry.js",
		54
	],
	"./ion-route_4.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-route_4.entry.js",
		"common",
		55
	],
	"./ion-searchbar-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-searchbar-ios.entry.js",
		"common",
		56
	],
	"./ion-searchbar-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-searchbar-md.entry.js",
		"common",
		57
	],
	"./ion-segment_2-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-segment_2-ios.entry.js",
		"common",
		58
	],
	"./ion-segment_2-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-segment_2-md.entry.js",
		"common",
		59
	],
	"./ion-select_3-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-select_3-ios.entry.js",
		"common",
		60
	],
	"./ion-select_3-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-select_3-md.entry.js",
		"common",
		61
	],
	"./ion-slide_2-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-slide_2-ios.entry.js",
		62
	],
	"./ion-slide_2-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-slide_2-md.entry.js",
		63
	],
	"./ion-spinner.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-spinner.entry.js",
		"common",
		64
	],
	"./ion-split-pane-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-split-pane-ios.entry.js",
		65
	],
	"./ion-split-pane-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-split-pane-md.entry.js",
		66
	],
	"./ion-tab-bar_2-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-tab-bar_2-ios.entry.js",
		"common",
		67
	],
	"./ion-tab-bar_2-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-tab-bar_2-md.entry.js",
		"common",
		68
	],
	"./ion-tab_2.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-tab_2.entry.js",
		"common",
		69
	],
	"./ion-text.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-text.entry.js",
		"common",
		70
	],
	"./ion-textarea-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-textarea-ios.entry.js",
		"common",
		71
	],
	"./ion-textarea-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-textarea-md.entry.js",
		"common",
		72
	],
	"./ion-toast-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-toast-ios.entry.js",
		"common",
		73
	],
	"./ion-toast-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-toast-md.entry.js",
		"common",
		74
	],
	"./ion-toggle-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-toggle-ios.entry.js",
		"common",
		75
	],
	"./ion-toggle-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-toggle-md.entry.js",
		"common",
		76
	],
	"./ion-virtual-scroll.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-virtual-scroll.entry.js",
		77
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-app>\n  <ion-router-outlet></ion-router-outlet>\n</ion-app>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/tabs/tabs.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tabs/tabs.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content class=\"tabs-content\">\n  <ion-tabs #tabs (ionTabsDidChange)=\"getSelectedTab()\">\n    <ion-tab-bar slot=\"bottom\" color=\"primary\">\n      <ion-tab-button tab=\"restaurants-list\">\n        <ion-icon name=\"home\"></ion-icon>\n        <ion-label>Restaurants</ion-label>\n      </ion-tab-button>\n\n      <ion-tab-button tab=\"restaurant-menu\">\n        <ion-icon name=\"restaurant\"></ion-icon>\n        <ion-label>Menu</ion-label>\n      </ion-tab-button>\n\n      <ion-tab-button tab=\"order-status\">\n        <ion-icon name=\"clipboard\"></ion-icon>\n        <ion-label>Order Status</ion-label>\n      </ion-tab-button>\n\n      <ion-tab-button tab=\"order-status\">\n          <ion-icon name=\"person\"></ion-icon>\n          <ion-label>Account</ion-label>\n        </ion-tab-button>\n    </ion-tab-bar>\n  </ion-tabs>\n    <ion-fab vertical=\"bottom\" horizontal=\"center\" slot=\"fixed\">\n      <ion-fab-button class=\"scan-button\" color=\"secondary\" (click)=\"performScan()\">\n        <ion-icon name=\"qr-scanner\"></ion-icon>\n      </ion-fab-button>\n    </ion-fab>\n</ion-content>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/welcome/welcome.page.html":
/*!*********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/welcome/welcome.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n      <ion-toolbar>\n            <ion-title>Preview</ion-title>\n      </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen scroll-y=\"false\" class=\"welcome-page\">\n      <ion-slides class=\"welcome-page__slides\" pager=\"true\">\n            <ion-slide>\n                  <ion-grid fixed=\"true\">\n                        <ion-row class=\"ion-align-items-center ion-justify-content-center\">\n                              <ion-col size=\"12\">\n                                    <p class=\"brand-banner\">\n                                          Place your order faster then ever\n                                          <span class=\"brand-name\">\n                                                ORDER NOW\n                                          </span>\n                                          &mdash; no Account required &mdash;\n                                    </p>\n                              </ion-col>\n                              <ion-col size=\"12\">\n                                    <p>The application is specially designed to automate your order management. It helps your\n                                          waiters to take their orders precisely and convey them to the kitchen so that all\n                                          your dine-in and takeaway orders get properly organised.\n                                    </p>\n                              </ion-col>\n                        </ion-row>\n                  </ion-grid>\n\n\n            </ion-slide>\n            <ion-slide>\n                  <img src=\"../../assets/welcome-page2.gif\" />\n                  <h2>How to use our app</h2>\n                  <p>\n                        <b>Use QR Scan button</b> at the bottom of the application in order to scan the QR code and preview\n                        the menu for your favourite restaurant. </p>\n            </ion-slide>\n            <ion-slide>\n                  <ion-grid fixed=\"true\">\n                        <ion-row class=\"ion-align-items-stretch\">\n                              <ion-col size=\"12\">\n                                    <h2>Ready to order something?</h2>\n                              </ion-col>\n                              <ion-col size=\"12\">\n                                    <ion-button class=\"try-button\" color=\"secondary\" [routerLink]=\"['auth']\" size=\"default\">\n                                          <ion-icon name=\"arrow-dropright-circle\"></ion-icon>\n                                          {{ 'CONTINUE' | translate}}\n                                    </ion-button>\n                              </ion-col>\n                              <ion-col size=\"12\">\n                                    <ion-row class=\"ion-justify-content-end language-actions-container\">\n                                          <ion-col size=\"4\">\n                                                <ion-button fill=\"clear\" (click)=\"changeLanguage('en')\" size=\"large\">\n                                                      <ion-icon [ngStyle]=\"{'border-color': translate.store.currentLang === 'en' ? '#08a8bc' : 'white' }\" slot=\"icon-only\" src=\"./../../assets/en-flag.svg\">\n                                                      </ion-icon>\n                                                </ion-button>\n                                          </ion-col>\n                                          <ion-col size=\"4\">\n                                                {{ 'SELECT_LANG' | translate}}\n                                          </ion-col>\n                                          <ion-col size=\"4\">\n                                                <ion-button fill=\"clear\" (click)=\"changeLanguage('ro')\" size=\"large\">\n                                                      <ion-icon [ngStyle]=\"{'border-color': translate.store.currentLang === 'ro' ? '#08a8bc' : 'white' }\" slot=\"icon-only\" src=\"./../../assets/ro-flag.svg\">\n                                                      </ion-icon>\n                                                </ion-button>\n                                          </ion-col>\n                                    </ion-row>\n                              </ion-col>\n                        </ion-row>\n                  </ion-grid>\n            </ion-slide>\n      </ion-slides>\n</ion-content>"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [
    {
        path: 'tabs',
        loadChildren: () => __webpack_require__.e(/*! import() | tabs-tabs-module */ "tabs-tabs-module").then(__webpack_require__.bind(null, /*! ./tabs/tabs.module */ "./src/app/tabs/tabs.module.ts")).then(m => m.TabsPageModule)
    },
    { path: '', loadChildren: './welcome/welcome.module#WelcomePageModule' },
    { path: 'auth', loadChildren: './auth/auth.module#AuthPageModule' }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/splash-screen/ngx */ "./node_modules/@ionic-native/splash-screen/ngx/index.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _codetrix_studio_capacitor_google_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @codetrix-studio/capacitor-google-auth */ "./node_modules/@codetrix-studio/capacitor-google-auth/dist/esm/index.js");
/* harmony import */ var _rdlabo_capacitor_facebook_login__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @rdlabo/capacitor-facebook-login */ "./node_modules/@rdlabo/capacitor-facebook-login/dist/esm/index.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _tabs_tabs_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./tabs/tabs.page */ "./src/app/tabs/tabs.page.ts");
/* harmony import */ var _welcome_welcome_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./welcome/welcome.page */ "./src/app/welcome/welcome.page.ts");











let AppComponent = class AppComponent {
    constructor(platform, splashScreen, statusBar, translate, authService) {
        this.platform = platform;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.translate = translate;
        this.authService = authService;
        this.rootPage = _tabs_tabs_page__WEBPACK_IMPORTED_MODULE_9__["TabsPage"];
        if (this.authService.currentUser) {
            this.rootPage = _tabs_tabs_page__WEBPACK_IMPORTED_MODULE_9__["TabsPage"];
        }
        else {
            this.rootPage = _welcome_welcome_page__WEBPACK_IMPORTED_MODULE_10__["WelcomePage"];
        }
        this.initializeApp();
        translate.addLangs(['en', 'ro']);
        translate.setDefaultLang('en');
        const browserLang = translate.getBrowserLang();
        translate.use(browserLang.match(/en|ro/) ? browserLang : 'en');
    }
    initializeApp() {
        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            this.splashScreen.hide();
        });
    }
};
AppComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
    { type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__["SplashScreen"] },
    { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] },
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"],
        _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__["SplashScreen"],
        _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"],
        _auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"]])
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule, createTranslateLoader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTranslateLoader", function() { return createTranslateLoader; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/barcode-scanner/ngx */ "./node_modules/@ionic-native/barcode-scanner/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/splash-screen/ngx */ "./node_modules/@ionic-native/splash-screen/ngx/index.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _restaurant_resolver_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./restaurant-resolver.service */ "./src/app/restaurant-resolver.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/fesm2015/ngx-translate-http-loader.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ngrx/store-devtools */ "./node_modules/@ngrx/store-devtools/fesm2015/store-devtools.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm2015/effects.js");


















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]],
        exports: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__["TranslateModule"]],
        entryComponents: [],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"].forRoot(),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__["TranslateModule"].forRoot({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__["TranslateLoader"],
                    useFactory: (createTranslateLoader),
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClient"]]
                }
            }),
            _ngrx_store__WEBPACK_IMPORTED_MODULE_15__["StoreModule"].forRoot({}, {
                runtimeChecks: {
                    strictStateImmutability: true,
                    strictActionImmutability: true
                }
            }),
            _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_16__["StoreDevtoolsModule"].instrument(),
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_17__["EffectsModule"].forRoot([])
        ],
        providers: [
            _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_8__["StatusBar"],
            _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_7__["SplashScreen"],
            _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_5__["BarcodeScanner"],
            { provide: _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouteReuseStrategy"], useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicRouteStrategy"] },
            _restaurant_resolver_service__WEBPACK_IMPORTED_MODULE_11__["RestaurantResolver"]
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]]
    })
], AppModule);

function createTranslateLoader(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_13__["TranslateHttpLoader"](http, './assets/i18n/', '.json');
}


/***/ }),

/***/ "./src/app/auth.service.ts":
/*!*********************************!*\
  !*** ./src/app/auth.service.ts ***!
  \*********************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/core */ "./node_modules/@capacitor/core/dist/esm/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





const { FacebookLogin, GoogleAuth } = _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["Plugins"];
const FACEBOOK_PERMISSIONS = ['email', 'user_birthday', 'user_photos', 'user_gender'];
const FACEBOOK_FIELDS = 'id,first_name,last_name,name,email,picture';
const { Storage } = _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["Plugins"];
let AuthService = class AuthService {
    constructor(router) {
        this.router = router;
        Storage.get({ key: 'currentUser' }).then(res => {
            this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](res);
            this.currentUser = this.currentUserSubject.asObservable();
        });
    }
    get currentUserValue() {
        return this.currentUserSubject.value;
    }
    signIn(provider) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            switch (provider) {
                case 'GOOGLE':
                    const googleUser = yield GoogleAuth.signIn();
                    yield Storage.set({ key: 'currentUser', value: JSON.stringify(googleUser) });
                    this.currentUserSubject.next(googleUser);
                    break;
                case 'FACEBOOK':
                    const result = yield FacebookLogin.login({ permissions: FACEBOOK_PERMISSIONS });
                    if (result.accessToken) {
                        yield FB.api('/me', { fields: FACEBOOK_FIELDS }, (res) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                            yield Storage.set({ key: 'currentUser', value: JSON.stringify(res) });
                            this.currentUserSubject.next(res);
                        }));
                    }
                    else {
                        console.log('Facebook API failed');
                    }
                    break;
                default:
                    const dummyUser = { id: Math.random(), dummyUser: true };
                    yield Storage.set({ key: 'currentUser', value: JSON.stringify(dummyUser) });
                    this.currentUserSubject.next(dummyUser);
            }
        });
    }
    login(data) {
        return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"]((observer) => {
            observer.next(data);
            localStorage.setItem('currentUser', JSON.stringify(data));
            this.currentUserSubject.next(data);
            return data;
        });
    }
    logout() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            Storage.remove({ key: 'currentUser' });
            this.currentUserSubject.next(null);
            this.router.navigate(['/auth']);
        });
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
], AuthService);



/***/ }),

/***/ "./src/app/restaurant-resolver.service.ts":
/*!************************************************!*\
  !*** ./src/app/restaurant-resolver.service.ts ***!
  \************************************************/
/*! exports provided: RestaurantResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestaurantResolver", function() { return RestaurantResolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _restaurant_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./restaurant.service */ "./src/app/restaurant.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");



let RestaurantResolver = class RestaurantResolver {
    constructor(restaurantService) {
        this.restaurantService = restaurantService;
    }
    resolve(route) {
        console.log('RestaurantResolver');
        return this.restaurantService.getRestaurant(+route.paramMap.get('id'));
    }
};
RestaurantResolver.ctorParameters = () => [
    { type: _restaurant_service__WEBPACK_IMPORTED_MODULE_1__["RestaurantService"] }
];
RestaurantResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_restaurant_service__WEBPACK_IMPORTED_MODULE_1__["RestaurantService"]])
], RestaurantResolver);



/***/ }),

/***/ "./src/app/restaurant.service.ts":
/*!***************************************!*\
  !*** ./src/app/restaurant.service.ts ***!
  \***************************************/
/*! exports provided: RestaurantService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestaurantService", function() { return RestaurantService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



let RestaurantService = class RestaurantService {
    constructor() {
        this.RESTAURANTS = [{
                id: 0,
                image: '/assets/image1.jpeg',
                slides: [],
                name: 'Yraqi',
                subtitle: '9 Ridiculously Good Lebanese Foods You Need to Try',
                rate: 2,
                likes: 3,
                description: `Fast food restaurants are traditionally distinguished by their
     ability to serve food via a drive-through. Outlets may be stands or kiosks,
      which may provide no shelter or seating,[2] or fast food restaurants 
    (also known as quick service restaurants).[citation needed] Franchise operations 
    that are part of restaurant chains have standardized foodstuffs shipped to each restaurant from central locations.[3]`
            },
            {
                id: 1,
                image: '/assets/image2.jpg',
                name: 'Trattoria Roz Cafe',
                rate: 3,
                subtitle: 'Gusta preparate speciale italienesti',
                likes: 20,
                slides: [
                    '../assets/slides/slide1.jpg',
                    '../assets/slides/slide2.jpg',
                    '../assets/slides/slide3.jpg',
                    '../assets/slides/slide4.jpg'
                ],
                description: `In cadrul Trattoriei Roz Cafe beneficiezi de servcii de calitate 
    si iti petreci timpul alaturi de oameni ce aduc cu ei povesti si ganduri, 
    oferind dinamism şi energie intregului local. Trattoria Roz Cafe creeaza o
     lume in care arta, pasiunea si talentul isi dau intalnire doar pentru tine.
     Ambientul placut si linistitor te vor face sa te scufunzi in timp literalmente. 
     Va asteptam cu drag la Trattoria Roz Cafe!`
            },
            {
                id: 2,
                image: '/assets/image3.jpg',
                name: 'Aqua Herastrau',
                subtitle: 'Relax enjoying special food',
                rate: 4,
                likes: 18,
                slides: [],
                description: `AQUA embodies and urbane sophistication serving
     simple yet accomplished dishes of Mediterranean cuisine. 
     With its luxurious setting, flawless services, fashionable
    crowd and cool vibe this is clearly the place to be in Bucharest`
            },
            {
                id: 3,
                image: '/assets/image4.jpg',
                name: 'Funky Lounge',
                subtitle: 'Urban kitcken with light summer meals',
                rate: 5,
                likes: 3,
                slides: [],
                description: `It’s the second venue belonging to Funky Lounge chain
    . A summer terrace that catches the attention by being positioned 
    on the shore of Herastrau Lake and by the impressive sunsets that 
    can be admired from there`
            },
            {
                id: 4,
                image: '/assets/image5.jpg',
                name: 'Cornul Vanatorului',
                subtitle: 'Relax while eating in the nature',
                rate: 4,
                likes: 35,
                slides: [],
                description: `Complexul Turistic Cornul Vanatorului vine in ajutorul vostru pentru evenimentele speciale din viata,
     cu meniuri pregatite cu grija, sali moderne si armonioase si multe surprize pe care va invitam sa le descoperiti`
            }];
    }
    getRestaurants() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(this.RESTAURANTS);
    }
    getRestaurant(id) {
        // return of(this.RESTAURANTS).pipe(
        //   find((restaurant:any) => restaurant.id === id)
        // );
        return this.RESTAURANTS.find(rest => rest.id === id);
    }
};
RestaurantService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], RestaurantService);



/***/ }),

/***/ "./src/app/tabs/tabs.page.scss":
/*!*************************************!*\
  !*** ./src/app/tabs/tabs.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tabs-content ion-tab-button:nth-child(3) {\n  padding-left: 15%;\n}\n.tabs-content .scan-button {\n  -webkit-animation: shadow-pulse 1s infinite;\n          animation: shadow-pulse 1s infinite;\n  border-radius: 50%;\n}\n@-webkit-keyframes shadow-pulse {\n  0% {\n    box-shadow: 0 0 0 0px rgba(229, 197, 0, 0.5);\n  }\n  100% {\n    box-shadow: 0 0 0 10px rgba(229, 197, 0, 0.2);\n  }\n}\n@keyframes shadow-pulse {\n  0% {\n    box-shadow: 0 0 0 0px rgba(229, 197, 0, 0.5);\n  }\n  100% {\n    box-shadow: 0 0 0 10px rgba(229, 197, 0, 0.2);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9taW9yZGFjaC9EZXNrdG9wL3dvcmtzcGFjZS9vcmRlci1ub3cvc3JjL2FwcC90YWJzL3RhYnMucGFnZS5zY3NzIiwic3JjL2FwcC90YWJzL3RhYnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsaUJBQUE7QUNBSjtBREVFO0VBQ0UsMkNBQUE7VUFBQSxtQ0FBQTtFQUNBLGtCQUFBO0FDQUo7QURHRTtFQUNFO0lBQ0UsNENBQUE7RUNESjtFREdFO0lBQ0UsNkNBQUE7RUNESjtBQUNGO0FETEU7RUFDRTtJQUNFLDRDQUFBO0VDREo7RURHRTtJQUNFLDZDQUFBO0VDREo7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3RhYnMvdGFicy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGFicy1jb250ZW50IHtcbiAgaW9uLXRhYi1idXR0b246bnRoLWNoaWxkKDMpIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDE1JTtcbiAgfVxuICAuc2Nhbi1idXR0b24ge1xuICAgIGFuaW1hdGlvbjogc2hhZG93LXB1bHNlIDFzIGluZmluaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgfVxuXG4gIEBrZXlmcmFtZXMgc2hhZG93LXB1bHNlIHtcbiAgICAwJSB7XG4gICAgICBib3gtc2hhZG93OiAwIDAgMCAwcHggcmdiYSgyMjksIDE5NywgMCwgMC41KTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICBib3gtc2hhZG93OiAwIDAgMCAxMHB4IHJnYmEoMjI5LCAxOTcsIDAsIDAuMik7XG4gICAgfVxuICB9XG59XG4iLCIudGFicy1jb250ZW50IGlvbi10YWItYnV0dG9uOm50aC1jaGlsZCgzKSB7XG4gIHBhZGRpbmctbGVmdDogMTUlO1xufVxuLnRhYnMtY29udGVudCAuc2Nhbi1idXR0b24ge1xuICBhbmltYXRpb246IHNoYWRvdy1wdWxzZSAxcyBpbmZpbml0ZTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuQGtleWZyYW1lcyBzaGFkb3ctcHVsc2Uge1xuICAwJSB7XG4gICAgYm94LXNoYWRvdzogMCAwIDAgMHB4IHJnYmEoMjI5LCAxOTcsIDAsIDAuNSk7XG4gIH1cbiAgMTAwJSB7XG4gICAgYm94LXNoYWRvdzogMCAwIDAgMTBweCByZ2JhKDIyOSwgMTk3LCAwLCAwLjIpO1xuICB9XG59Il19 */"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/barcode-scanner/ngx */ "./node_modules/@ionic-native/barcode-scanner/ngx/index.js");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @capacitor/core */ "./node_modules/@capacitor/core/dist/esm/index.js");






const { Toast } = _capacitor_core__WEBPACK_IMPORTED_MODULE_5__["Plugins"];
let TabsPage = class TabsPage {
    constructor(barcodeScanner, route) {
        this.barcodeScanner = barcodeScanner;
        this.route = route;
    }
    getSelectedTab() {
        this.currentTab = this.tabs.getSelected();
    }
    performScan() {
        this.barcodeScanner.scan().then((barcodeData) => {
            Toast.show({
                duration: 'long',
                text: JSON.stringify(barcodeData)
            });
            console.log('Barcode data', barcodeData);
            this.route.navigate(['/details/' + JSON.parse(barcodeData.text).id]);
        }).catch(err => {
            console.log('Error', err);
        });
    }
};
TabsPage.ctorParameters = () => [
    { type: _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_4__["BarcodeScanner"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('tabs', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonTabs"])
], TabsPage.prototype, "tabs", void 0);
TabsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-tabs',
        template: __webpack_require__(/*! raw-loader!./tabs.page.html */ "./node_modules/raw-loader/index.js!./src/app/tabs/tabs.page.html"),
        styles: [__webpack_require__(/*! ./tabs.page.scss */ "./src/app/tabs/tabs.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_4__["BarcodeScanner"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
], TabsPage);



/***/ }),

/***/ "./src/app/welcome/welcome.page.scss":
/*!*******************************************!*\
  !*** ./src/app/welcome/welcome.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-toolbar {\n  --background: transparent;\n  --ion-color-base: transparent !important;\n  color: white;\n}\n\n.welcome-page {\n  --background: url('login-wallpaper.jpg') no-repeat center center / cover;\n  --background-size:cover;\n}\n\n.welcome-page ion-slides {\n  height: 100%;\n}\n\n.welcome-page ion-slides h2 {\n  color: white;\n}\n\n.welcome-page ion-slides ion-row {\n  height: 90%;\n}\n\n.welcome-page ion-slide {\n  background-color: rgba(0, 0, 0, 0.6);\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n\n.welcome-page ion-slide ion-grid ion-row {\n  align-content: center;\n}\n\n.welcome-page ion-slide p {\n  font-size: 15px;\n  color: white;\n  padding: 5px;\n}\n\n.welcome-page ion-slide:first-child img {\n  max-height: 50%;\n  max-width: 100%;\n  margin: 0;\n}\n\n.welcome-page ion-slide:nth-child(3) img {\n  width: 80%;\n}\n\n.welcome-page ion-slide:nth-child(3) .language-actions-container ion-icon {\n  border: 2px solid white;\n  border-radius: 50%;\n}\n\n@-webkit-keyframes text {\n  0% {\n    color: black;\n    margin-bottom: -40px;\n  }\n  30% {\n    letter-spacing: 25px;\n    margin-bottom: -40px;\n  }\n  85% {\n    letter-spacing: 8px;\n    margin-bottom: -40px;\n  }\n}\n\n@keyframes text {\n  0% {\n    color: black;\n    margin-bottom: -40px;\n  }\n  30% {\n    letter-spacing: 25px;\n    margin-bottom: -40px;\n  }\n  85% {\n    letter-spacing: 8px;\n    margin-bottom: -40px;\n  }\n}\n\n.welcome-page .try-button {\n  border-radius: 10px;\n  cursor: pointer;\n  display: inline-block;\n  -webkit-animation: glowing 1500ms infinite;\n  animation: glowing 1500ms infinite;\n}\n\n@-webkit-keyframes glowing {\n  0% {\n    background-color: var(--ion-color-secondary);\n    -webkit-box-shadow: 0 0 3px var(--ion-color-secondary);\n  }\n  50% {\n    background-color: var(--ion-color-secondary-shade);\n    -webkit-box-shadow: 0 0 40px var(--ion-color-secondary-shade);\n  }\n  100% {\n    background-color: var(--ion-color-secondary);\n    -webkit-box-shadow: 0 0 3px var(--ion-color-secondary);\n  }\n}\n\n@keyframes glowing {\n  0% {\n    background-color: var(--ion-color-secondary);\n    box-shadow: 0 0 3px var(--ion-color-secondary);\n  }\n  50% {\n    background-color: var(--ion-color-secondary-shade);\n    box-shadow: 0 0 40px var(--ion-color-secondary-shade);\n  }\n  100% {\n    background-color: var(--ion-color-secondary);\n    box-shadow: 0 0 3px var(--ion-color-secondary);\n  }\n}\n\n.brand-banner {\n  font-size: 10px !important;\n  text-transform: uppercase;\n  letter-spacing: 0.5em;\n  border: 4px double rgba(255, 255, 255, 0.25);\n  border-width: 4px 0;\n}\n\n.brand-banner span {\n  font: 700 5em/1 \"Oswald\", sans-serif;\n  letter-spacing: 0;\n  display: block;\n  margin: 0 auto;\n  text-shadow: 0 0 80px rgba(255, 255, 255, 0.5);\n  /* Clip Background Image */\n  background: url(http://f.cl.ly/items/010q3E1u3p2Q0j1L1S1o/animated_text_fill.png) repeat-y;\n  -webkit-background-clip: text;\n  background-clip: text;\n  /* Animate Background Image */\n  -webkit-text-fill-color: transparent;\n  -webkit-animation: aitf 80s linear infinite;\n  /* Activate hardware acceleration for smoother animations */\n  -webkit-transform: translate3d(0, 0, 0);\n  -webkit-backface-visibility: hidden;\n}\n\n/* Animate Background Image */\n\n@-webkit-keyframes aitf {\n  0% {\n    background-position: 0% 50%;\n  }\n  100% {\n    background-position: 100% 50%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9taW9yZGFjaC9EZXNrdG9wL3dvcmtzcGFjZS9vcmRlci1ub3cvc3JjL2FwcC93ZWxjb21lL3dlbGNvbWUucGFnZS5zY3NzIiwic3JjL2FwcC93ZWxjb21lL3dlbGNvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UseUJBQUE7RUFDQSx3Q0FBQTtFQUNBLFlBQUE7QUNBRjs7QURHQTtFQUNJLHdFQUFBO0VBQ0EsdUJBQUE7QUNBSjs7QURFRTtFQUNFLFlBQUE7QUNBSjs7QURFSTtFQUNFLFlBQUE7QUNBTjs7QURHSTtFQUNFLFdBQUE7QUNETjs7QURLRTtFQUNFLG9DQUFBO0VBT0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0FDVEo7O0FES007RUFDRSxxQkFBQTtBQ0hSOztBRE9JO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FDTE47O0FEVUs7RUFDQyxlQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7QUNSTjs7QURhSTtFQUNFLFVBQUE7QUNYTjs7QURlTTtFQUNFLHVCQUFBO0VBQ0Esa0JBQUE7QUNiUjs7QURtQkU7RUFDRTtJQUNFLFlBQUE7SUFDQSxvQkFBQTtFQ2pCSjtFRG1CRTtJQUNFLG9CQUFBO0lBQ0Esb0JBQUE7RUNqQko7RURtQkU7SUFDRSxtQkFBQTtJQUNBLG9CQUFBO0VDakJKO0FBQ0Y7O0FES0U7RUFDRTtJQUNFLFlBQUE7SUFDQSxvQkFBQTtFQ2pCSjtFRG1CRTtJQUNFLG9CQUFBO0lBQ0Esb0JBQUE7RUNqQko7RURtQkU7SUFDRSxtQkFBQTtJQUNBLG9CQUFBO0VDakJKO0FBQ0Y7O0FEb0JFO0VBRUUsbUJBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSwwQ0FBQTtFQUdBLGtDQUFBO0FDbEJKOztBRG9CRTtFQUNFO0lBQ0UsNENBQUE7SUFDQSxzREFBQTtFQ2xCSjtFRG9CRTtJQUNFLGtEQUFBO0lBQ0EsNkRBQUE7RUNsQko7RURvQkU7SUFDRSw0Q0FBQTtJQUNBLHNEQUFBO0VDbEJKO0FBQ0Y7O0FEbURFO0VBQ0U7SUFDRSw0Q0FBQTtJQUNBLDhDQUFBO0VDckJKO0VEdUJFO0lBQ0Usa0RBQUE7SUFDQSxxREFBQTtFQ3JCSjtFRHVCRTtJQUNFLDRDQUFBO0lBQ0EsOENBQUE7RUNyQko7QUFDRjs7QUQyQkE7RUFDRSwwQkFBQTtFQUNELHlCQUFBO0VBQ0EscUJBQUE7RUFDQSw0Q0FBQTtFQUNBLG1CQUFBO0FDeEJEOztBRDBCRTtFQUNDLG9DQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLDhDQUFBO0VBRUgsMEJBQUE7RUFFRywwRkFBQTtFQUNBLDZCQUFBO0VBQ0EscUJBQUE7RUFFSCw2QkFBQTtFQUVHLG9DQUFBO0VBQ0EsMkNBQUE7RUFFSCwyREFBQTtFQUVHLHVDQUFBO0VBQ0EsbUNBQUE7QUM5Qkg7O0FEbUNBLDZCQUFBOztBQUVBO0VBQ0M7SUFBSywyQkFBQTtFQ2hDSjtFRGlDRDtJQUFPLDZCQUFBO0VDOUJOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC93ZWxjb21lL3dlbGNvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIC0taW9uLWNvbG9yLWJhc2U6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLndlbGNvbWUtcGFnZSB7XG4gICAgLS1iYWNrZ3JvdW5kOiB1cmwoJy4uLy4uL2Fzc2V0cy9sb2dpbi13YWxscGFwZXIuanBnJykgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIgLyBjb3ZlcjtcbiAgICAtLWJhY2tncm91bmQtc2l6ZTpjb3ZlcjtcblxuICBpb24tc2xpZGVzIHtcbiAgICBoZWlnaHQ6MTAwJTtcblxuICAgIGgyIHtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB9XG5cbiAgICBpb24tcm93IHtcbiAgICAgIGhlaWdodDogOTAlO1xuICAgIH1cbiAgfVxuXG4gIGlvbi1zbGlkZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsMCwwLCAwLjYpO1xuXG4gICAgaW9uLWdyaWQge1xuICAgICAgaW9uLXJvdyB7XG4gICAgICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIH1cbiAgICB9XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBwIHtcbiAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgIGNvbG9yOndoaXRlOztcbiAgICAgIHBhZGRpbmc6IDVweDtcbiAgICB9XG4gIH1cblxuICBpb24tc2xpZGU6Zmlyc3QtY2hpbGQge1xuICAgICBpbWcge1xuICAgICAgbWF4LWhlaWdodDogNTAlO1xuICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgICAgbWFyZ2luOiAwO1xuICAgICB9XG4gIH1cbiAgXG4gIGlvbi1zbGlkZTpudGgtY2hpbGQoMykge1xuICAgIGltZyB7XG4gICAgICB3aWR0aDogODAlO1xuICAgIH1cblxuICAgIC5sYW5ndWFnZS1hY3Rpb25zLWNvbnRhaW5lciB7XG4gICAgICBpb24taWNvbiB7XG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gQ29udGludWUgYnV0dG9uIGVmZmVjdFxuICBAa2V5ZnJhbWVzIHRleHQge1xuICAgIDAlIHtcbiAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgIG1hcmdpbi1ib3R0b206IC00MHB4O1xuICAgIH1cbiAgICAzMCUge1xuICAgICAgbGV0dGVyLXNwYWNpbmc6IDI1cHg7XG4gICAgICBtYXJnaW4tYm90dG9tOiAtNDBweDtcbiAgICB9XG4gICAgODUlIHtcbiAgICAgIGxldHRlci1zcGFjaW5nOiA4cHg7XG4gICAgICBtYXJnaW4tYm90dG9tOiAtNDBweDtcbiAgICB9XG4gIH1cblxuICAudHJ5LWJ1dHRvbiB7XG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogZ2xvd2luZyAxNTAwbXMgaW5maW5pdGU7XG4gICAgLW1vei1hbmltYXRpb246IGdsb3dpbmcgMTUwMG1zIGluZmluaXRlO1xuICAgIC1vLWFuaW1hdGlvbjogZ2xvd2luZyAxNTAwbXMgaW5maW5pdGU7XG4gICAgYW5pbWF0aW9uOiBnbG93aW5nIDE1MDBtcyBpbmZpbml0ZTtcbiAgfVxuICBALXdlYmtpdC1rZXlmcmFtZXMgZ2xvd2luZyB7XG4gICAgMCUge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG4gICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCAzcHggdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG4gICAgfVxuICAgIDUwJSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5LXNoYWRlKTtcbiAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDQwcHggdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeS1zaGFkZSk7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG4gICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCAzcHggdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG4gICAgfVxuICB9XG5cbiAgQC1tb3ota2V5ZnJhbWVzIGdsb3dpbmcge1xuICAgIDAlIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xuICAgICAgLW1vei1ib3gtc2hhZG93OiAwIDAgM3B4IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xuICAgIH1cbiAgICA1MCUge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeS1zaGFkZSk7XG4gICAgICAtbW96LWJveC1zaGFkb3c6IDAgMCA0MHB4IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnktc2hhZGUpO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xuICAgICAgLW1vei1ib3gtc2hhZG93OiAwIDAgM3B4IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xuICAgIH1cbiAgfVxuXG4gIEAtby1rZXlmcmFtZXMgZ2xvd2luZyB7XG4gICAgMCUge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG4gICAgICBib3gtc2hhZG93OiAwIDAgM3B4IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xuICAgIH1cbiAgICA1MCUge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeS1zaGFkZSk7XG4gICAgICBib3gtc2hhZG93OiAwIDAgNDBweCB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5LXNoYWRlKTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbiAgICAgIGJveC1zaGFkb3c6IDAgMCAzcHggdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG4gICAgfVxuICB9XG5cbiAgQGtleWZyYW1lcyBnbG93aW5nIHtcbiAgICAwJSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbiAgICAgIGJveC1zaGFkb3c6IDAgMCAzcHggdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG4gICAgfVxuICAgIDUwJSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5LXNoYWRlKTtcbiAgICAgIGJveC1zaGFkb3c6IDAgMCA0MHB4IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnktc2hhZGUpO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xuICAgICAgYm94LXNoYWRvdzogMCAwIDNweCB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbiAgICB9XG4gIH1cbn1cblxuLy8gT1JERVIgTk9XIFRleHQgZWZmZWN0XG5cbi5icmFuZC1iYW5uZXIge1xuICBmb250LXNpemU6IDEwcHggIWltcG9ydGFudDtcblx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcblx0bGV0dGVyLXNwYWNpbmc6IC41ZW07XG5cdGJvcmRlcjogNHB4IGRvdWJsZSByZ2JhKDI1NSwyNTUsMjU1LC4yNSk7XG5cdGJvcmRlci13aWR0aDogNHB4IDA7XG4gIFxuICBzcGFuIHtcbiAgXHRmb250OiA3MDAgNWVtLzEgXCJPc3dhbGRcIiwgc2Fucy1zZXJpZjtcbiAgXHRsZXR0ZXItc3BhY2luZzogMDtcblx0ICBkaXNwbGF5OiBibG9jaztcblx0ICBtYXJnaW46IDAgYXV0bztcbiAgXHR0ZXh0LXNoYWRvdzogMCAwIDgwcHggcmdiYSgyNTUsMjU1LDI1NSwuNSk7XG5cbi8qIENsaXAgQmFja2dyb3VuZCBJbWFnZSAqL1xuXG5cdCAgYmFja2dyb3VuZDogdXJsKGh0dHA6Ly9mLmNsLmx5L2l0ZW1zLzAxMHEzRTF1M3AyUTBqMUwxUzFvL2FuaW1hdGVkX3RleHRfZmlsbC5wbmcpIHJlcGVhdC15O1xuXHQgIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuXHQgIGJhY2tncm91bmQtY2xpcDogdGV4dDtcblxuLyogQW5pbWF0ZSBCYWNrZ3JvdW5kIEltYWdlICovXG5cblx0ICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XG5cdCAgLXdlYmtpdC1hbmltYXRpb246IGFpdGYgODBzIGxpbmVhciBpbmZpbml0ZTtcblxuLyogQWN0aXZhdGUgaGFyZHdhcmUgYWNjZWxlcmF0aW9uIGZvciBzbW9vdGhlciBhbmltYXRpb25zICovXG5cblx0ICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwwLDApO1xuXHQgIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuXG4gIH1cbn1cblxuLyogQW5pbWF0ZSBCYWNrZ3JvdW5kIEltYWdlICovXG5cbkAtd2Via2l0LWtleWZyYW1lcyBhaXRmIHtcblx0MCUgeyBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwJSA1MCU7IH1cblx0MTAwJSB7IGJhY2tncm91bmQtcG9zaXRpb246IDEwMCUgNTAlOyB9XG59IiwiaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAtLWlvbi1jb2xvci1iYXNlOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi53ZWxjb21lLXBhZ2Uge1xuICAtLWJhY2tncm91bmQ6IHVybChcIi4uLy4uL2Fzc2V0cy9sb2dpbi13YWxscGFwZXIuanBnXCIpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyIC8gY292ZXI7XG4gIC0tYmFja2dyb3VuZC1zaXplOmNvdmVyO1xufVxuLndlbGNvbWUtcGFnZSBpb24tc2xpZGVzIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLndlbGNvbWUtcGFnZSBpb24tc2xpZGVzIGgyIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuLndlbGNvbWUtcGFnZSBpb24tc2xpZGVzIGlvbi1yb3cge1xuICBoZWlnaHQ6IDkwJTtcbn1cbi53ZWxjb21lLXBhZ2UgaW9uLXNsaWRlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLndlbGNvbWUtcGFnZSBpb24tc2xpZGUgaW9uLWdyaWQgaW9uLXJvdyB7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi53ZWxjb21lLXBhZ2UgaW9uLXNsaWRlIHAge1xuICBmb250LXNpemU6IDE1cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogNXB4O1xufVxuLndlbGNvbWUtcGFnZSBpb24tc2xpZGU6Zmlyc3QtY2hpbGQgaW1nIHtcbiAgbWF4LWhlaWdodDogNTAlO1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMDtcbn1cbi53ZWxjb21lLXBhZ2UgaW9uLXNsaWRlOm50aC1jaGlsZCgzKSBpbWcge1xuICB3aWR0aDogODAlO1xufVxuLndlbGNvbWUtcGFnZSBpb24tc2xpZGU6bnRoLWNoaWxkKDMpIC5sYW5ndWFnZS1hY3Rpb25zLWNvbnRhaW5lciBpb24taWNvbiB7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5Aa2V5ZnJhbWVzIHRleHQge1xuICAwJSB7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIG1hcmdpbi1ib3R0b206IC00MHB4O1xuICB9XG4gIDMwJSB7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDI1cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogLTQwcHg7XG4gIH1cbiAgODUlIHtcbiAgICBsZXR0ZXItc3BhY2luZzogOHB4O1xuICAgIG1hcmdpbi1ib3R0b206IC00MHB4O1xuICB9XG59XG4ud2VsY29tZS1wYWdlIC50cnktYnV0dG9uIHtcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgLXdlYmtpdC1hbmltYXRpb246IGdsb3dpbmcgMTUwMG1zIGluZmluaXRlO1xuICAtbW96LWFuaW1hdGlvbjogZ2xvd2luZyAxNTAwbXMgaW5maW5pdGU7XG4gIC1vLWFuaW1hdGlvbjogZ2xvd2luZyAxNTAwbXMgaW5maW5pdGU7XG4gIGFuaW1hdGlvbjogZ2xvd2luZyAxNTAwbXMgaW5maW5pdGU7XG59XG5ALXdlYmtpdC1rZXlmcmFtZXMgZ2xvd2luZyB7XG4gIDAlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCAzcHggdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG4gIH1cbiAgNTAlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5LXNoYWRlKTtcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCA0MHB4IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnktc2hhZGUpO1xuICB9XG4gIDEwMCUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDNweCB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbiAgfVxufVxuQC1tb3ota2V5ZnJhbWVzIGdsb3dpbmcge1xuICAwJSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG4gICAgLW1vei1ib3gtc2hhZG93OiAwIDAgM3B4IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xuICB9XG4gIDUwJSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeS1zaGFkZSk7XG4gICAgLW1vei1ib3gtc2hhZG93OiAwIDAgNDBweCB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5LXNoYWRlKTtcbiAgfVxuICAxMDAlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbiAgICAtbW96LWJveC1zaGFkb3c6IDAgMCAzcHggdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG4gIH1cbn1cbkAtby1rZXlmcmFtZXMgZ2xvd2luZyB7XG4gIDAlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbiAgICBib3gtc2hhZG93OiAwIDAgM3B4IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xuICB9XG4gIDUwJSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeS1zaGFkZSk7XG4gICAgYm94LXNoYWRvdzogMCAwIDQwcHggdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeS1zaGFkZSk7XG4gIH1cbiAgMTAwJSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG4gICAgYm94LXNoYWRvdzogMCAwIDNweCB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbiAgfVxufVxuQGtleWZyYW1lcyBnbG93aW5nIHtcbiAgMCUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xuICAgIGJveC1zaGFkb3c6IDAgMCAzcHggdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG4gIH1cbiAgNTAlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5LXNoYWRlKTtcbiAgICBib3gtc2hhZG93OiAwIDAgNDBweCB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5LXNoYWRlKTtcbiAgfVxuICAxMDAlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbiAgICBib3gtc2hhZG93OiAwIDAgM3B4IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xuICB9XG59XG5cbi5icmFuZC1iYW5uZXIge1xuICBmb250LXNpemU6IDEwcHggIWltcG9ydGFudDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNWVtO1xuICBib3JkZXI6IDRweCBkb3VibGUgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI1KTtcbiAgYm9yZGVyLXdpZHRoOiA0cHggMDtcbn1cbi5icmFuZC1iYW5uZXIgc3BhbiB7XG4gIGZvbnQ6IDcwMCA1ZW0vMSBcIk9zd2FsZFwiLCBzYW5zLXNlcmlmO1xuICBsZXR0ZXItc3BhY2luZzogMDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogMCBhdXRvO1xuICB0ZXh0LXNoYWRvdzogMCAwIDgwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xuICAvKiBDbGlwIEJhY2tncm91bmQgSW1hZ2UgKi9cbiAgYmFja2dyb3VuZDogdXJsKGh0dHA6Ly9mLmNsLmx5L2l0ZW1zLzAxMHEzRTF1M3AyUTBqMUwxUzFvL2FuaW1hdGVkX3RleHRfZmlsbC5wbmcpIHJlcGVhdC15O1xuICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcbiAgYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuICAvKiBBbmltYXRlIEJhY2tncm91bmQgSW1hZ2UgKi9cbiAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xuICAtd2Via2l0LWFuaW1hdGlvbjogYWl0ZiA4MHMgbGluZWFyIGluZmluaXRlO1xuICAvKiBBY3RpdmF0ZSBoYXJkd2FyZSBhY2NlbGVyYXRpb24gZm9yIHNtb290aGVyIGFuaW1hdGlvbnMgKi9cbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbn1cblxuLyogQW5pbWF0ZSBCYWNrZ3JvdW5kIEltYWdlICovXG5ALXdlYmtpdC1rZXlmcmFtZXMgYWl0ZiB7XG4gIDAlIHtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwJSA1MCU7XG4gIH1cbiAgMTAwJSB7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTAwJSA1MCU7XG4gIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/welcome/welcome.page.ts":
/*!*****************************************!*\
  !*** ./src/app/welcome/welcome.page.ts ***!
  \*****************************************/
/*! exports provided: WelcomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomePage", function() { return WelcomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");



let WelcomePage = class WelcomePage {
    constructor(translate) {
        this.translate = translate;
    }
    ngOnInit() {
    }
    changeLanguage(lang) {
        this.translate.use(lang);
    }
};
WelcomePage.ctorParameters = () => [
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"] }
];
WelcomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-welcome',
        template: __webpack_require__(/*! raw-loader!./welcome.page.html */ "./node_modules/raw-loader/index.js!./src/app/welcome/welcome.page.html"),
        styles: [__webpack_require__(/*! ./welcome.page.scss */ "./src/app/welcome/welcome.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"]])
], WelcomePage);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _codetrix_studio_capacitor_google_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @codetrix-studio/capacitor-google-auth */ "./node_modules/@codetrix-studio/capacitor-google-auth/dist/esm/index.js");
/* harmony import */ var _rdlabo_capacitor_facebook_login__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @rdlabo/capacitor-facebook-login */ "./node_modules/@rdlabo/capacitor-facebook-login/dist/esm/index.js");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.log(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/miordach/Desktop/workspace/order-now/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map