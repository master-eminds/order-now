(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tabs-tabs-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/tabs/tabs.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tabs/tabs.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n  <ion-tabs #tabs (ionTabsDidChange)=\"getSelectedTab()\">\n\n    <ion-tab-bar slot=\"bottom\">\n      <ion-tab-button tab=\"restaurants-list\">\n        <ion-icon name=\"home\"></ion-icon>\n        <ion-label>Restaurants</ion-label>\n      </ion-tab-button>\n\n      <ion-tab-button tab=\"restaurant-menu\">\n        <ion-icon name=\"restaurant\"></ion-icon>\n        <ion-label>Menu</ion-label>\n      </ion-tab-button>\n\n      <ion-tab-button tab=\"order-status\">\n        <ion-icon name=\"clipboard\"></ion-icon>\n        <ion-label>Order Status</ion-label>\n      </ion-tab-button>\n    </ion-tab-bar>\n  </ion-tabs>\n  <div class=\"scan-container\" *ngIf=\"currentTab === 'restaurants-list'\">\n    <ion-button class=\"suggestion-btn\" size=\"small\" fill=\"solid\">\n      <ion-icon slot=\"end\" src=\"./../../assets/arrow-suggestion.svg\"></ion-icon>\n      Scan menu\n    </ion-button>\n    <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n      <ion-fab-button color=\"secondary\" (click)=\"performScan()\">\n        <ion-icon name=\"qr-scanner\"></ion-icon>\n      </ion-fab-button>\n    </ion-fab>\n  </div>\n</ion-content>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _tabs_router_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tabs.router.module */ "./src/app/tabs/tabs.router.module.ts");
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tabs.page */ "./src/app/tabs/tabs.page.ts");







var TabsPageModule = /** @class */ (function () {
    function TabsPageModule() {
    }
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
    return TabsPageModule;
}());



/***/ }),

/***/ "./src/app/tabs/tabs.page.scss":
/*!*************************************!*\
  !*** ./src/app/tabs/tabs.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-tab-button {\n  --color: var(--ion-color-secondary);\n}\n\n.scan-container {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: end;\n          justify-content: flex-end;\n  position: fixed;\n  bottom: 10%;\n  width: 40%;\n  right: 5%;\n}\n\n.scan-container .suggestion-btn {\n  margin-bottom: 25%;\n  -webkit-animation: fadein 3s;\n          animation: fadein 3s;\n  margin-right: 45%;\n  --border-color: var(--ion-color-dark);\n  --color: var(--ion-color-dark);\n  --background: rgb(255,255,255, 0.8);\n}\n\n.scan-container .suggestion-btn ion-icon {\n  margin-top: 5px;\n}\n\n@-webkit-keyframes fadein {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n\n@keyframes fadein {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9taW9yZGFjaC9EZXNrdG9wL3dvcmtzcGFjZS9vcmRlci1ub3cvc3JjL2FwcC90YWJzL3RhYnMucGFnZS5zY3NzIiwic3JjL2FwcC90YWJzL3RhYnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksbUNBQUE7QUNBSjs7QURHQTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHFCQUFBO1VBQUEseUJBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0FDQUo7O0FERUk7RUFDRSxrQkFBQTtFQUNBLDRCQUFBO1VBQUEsb0JBQUE7RUFDQSxpQkFBQTtFQUNBLHFDQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQ0FBQTtBQ0FOOztBRENNO0VBQ0UsZUFBQTtBQ0NSOztBREdJO0VBQ0k7SUFDSSxVQUFBO0VDRFY7RURHTTtJQUNJLFVBQUE7RUNEVjtBQUNGOztBRExJO0VBQ0k7SUFDSSxVQUFBO0VDRFY7RURHTTtJQUNJLFVBQUE7RUNEVjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvdGFicy90YWJzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW9uLXRhYi1idXR0b24ge1xuICAgIC0tY29sb3JcdDogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG59XG5cbi5zY2FuLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgIHBvc2l0aW9uOmZpeGVkO1xuICAgIGJvdHRvbTogMTAlO1xuICAgIHdpZHRoOiA0MCU7XG4gICAgcmlnaHQ6IDUlO1xuICAgIFxuICAgIC5zdWdnZXN0aW9uLWJ0biB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAyNSU7XG4gICAgICBhbmltYXRpb246IGZhZGVpbiAzcztcbiAgICAgIG1hcmdpbi1yaWdodDogNDUlO1xuICAgICAgLS1ib3JkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcbiAgICAgIC0tY29sb3JcdDogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xuICAgICAgLS1iYWNrZ3JvdW5kOiByZ2IoMjU1LDI1NSwyNTUsIDAuOCk7XG4gICAgICBpb24taWNvbiB7XG4gICAgICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBAa2V5ZnJhbWVzIGZhZGVpbiB7XG4gICAgICAgIGZyb20ge1xuICAgICAgICAgICAgb3BhY2l0eTowO1xuICAgICAgICB9XG4gICAgICAgIHRvIHtcbiAgICAgICAgICAgIG9wYWNpdHk6MTtcbiAgICAgICAgfVxuICAgIH1cbiAgfSIsImlvbi10YWItYnV0dG9uIHtcbiAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG59XG5cbi5zY2FuLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAxMCU7XG4gIHdpZHRoOiA0MCU7XG4gIHJpZ2h0OiA1JTtcbn1cbi5zY2FuLWNvbnRhaW5lciAuc3VnZ2VzdGlvbi1idG4ge1xuICBtYXJnaW4tYm90dG9tOiAyNSU7XG4gIGFuaW1hdGlvbjogZmFkZWluIDNzO1xuICBtYXJnaW4tcmlnaHQ6IDQ1JTtcbiAgLS1ib3JkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcbiAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xuICAtLWJhY2tncm91bmQ6IHJnYigyNTUsMjU1LDI1NSwgMC44KTtcbn1cbi5zY2FuLWNvbnRhaW5lciAuc3VnZ2VzdGlvbi1idG4gaW9uLWljb24ge1xuICBtYXJnaW4tdG9wOiA1cHg7XG59XG5Aa2V5ZnJhbWVzIGZhZGVpbiB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn0iXX0= */"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/barcode-scanner/ngx */ "./node_modules/@ionic-native/barcode-scanner/ngx/index.js");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @capacitor/core */ "./node_modules/@capacitor/core/dist/esm/index.js");






var Toast = _capacitor_core__WEBPACK_IMPORTED_MODULE_5__["Plugins"].Toast;
var TabsPage = /** @class */ (function () {
    function TabsPage(barcodeScanner, route) {
        this.barcodeScanner = barcodeScanner;
        this.route = route;
    }
    TabsPage.prototype.getSelectedTab = function () {
        this.currentTab = this.tabs.getSelected();
    };
    TabsPage.prototype.performScan = function () {
        var _this = this;
        this.barcodeScanner.scan().then(function (barcodeData) {
            Toast.show({
                duration: 'long',
                text: JSON.stringify(barcodeData)
            });
            console.log('Barcode data', barcodeData);
            _this.route.navigate(['/details/' + JSON.parse(barcodeData.text).id]);
        }).catch(function (err) {
            console.log('Error', err);
        });
    };
    TabsPage.ctorParameters = function () { return [
        { type: _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_4__["BarcodeScanner"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
    ]; };
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
    return TabsPage;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tabs.page */ "./src/app/tabs/tabs.page.ts");
/* harmony import */ var _restaurant_resolver_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../restaurant-resolver.service */ "./src/app/restaurant-resolver.service.ts");





var routes = [
    {
        path: 'tabs',
        component: _tabs_page__WEBPACK_IMPORTED_MODULE_3__["TabsPage"],
        children: [
            {
                path: 'restaurants-list',
                children: [
                    {
                        path: '',
                        loadChildren: function () {
                            return Promise.all(/*! import() | restaurants-list-restaurants-list-module */[__webpack_require__.e("common"), __webpack_require__.e("restaurants-list-restaurants-list-module")]).then(__webpack_require__.bind(null, /*! ../restaurants-list/restaurants-list.module */ "./src/app/restaurants-list/restaurants-list.module.ts")).then(function (m) { return m.RestaurantsListPageModule; });
                        }
                    }
                ]
            },
            {
                path: 'restaurants-list/details/:id',
                loadChildren: function () {
                    return Promise.all(/*! import() | details-details-module */[__webpack_require__.e("common"), __webpack_require__.e("details-details-module")]).then(__webpack_require__.bind(null, /*! ../details/details.module */ "./src/app/details/details.module.ts")).then(function (m) { return m.DetailsPageModule; });
                },
                resolve: {
                    restaurant: _restaurant_resolver_service__WEBPACK_IMPORTED_MODULE_4__["RestaurantResolver"]
                }
            },
            {
                path: 'restaurant-menu',
                children: [
                    {
                        path: '',
                        loadChildren: function () {
                            return __webpack_require__.e(/*! import() | restaurant-menu-restaurant-menu-module */ "restaurant-menu-restaurant-menu-module").then(__webpack_require__.bind(null, /*! ../restaurant-menu/restaurant-menu.module */ "./src/app/restaurant-menu/restaurant-menu.module.ts")).then(function (m) { return m.OnlineOrderPageModule; });
                        }
                    }
                ]
            },
            {
                path: 'order-status',
                children: [
                    {
                        path: '',
                        loadChildren: function () {
                            return __webpack_require__.e(/*! import() | order-status-order-status-module */ "order-status-order-status-module").then(__webpack_require__.bind(null, /*! ../order-status/order-status.module */ "./src/app/order-status/order-status.module.ts")).then(function (m) { return m.OrderStatusPageModule; });
                        }
                    }
                ]
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
var TabsPageRoutingModule = /** @class */ (function () {
    function TabsPageRoutingModule() {
    }
    TabsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], TabsPageRoutingModule);
    return TabsPageRoutingModule;
}());



/***/ })

}]);
//# sourceMappingURL=tabs-tabs-module-es5.js.map