(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tabs-tabs-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/tabs/tabs.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tabs/tabs.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content class=\"tabs-content\">\n  <ion-tabs #tabs (ionTabsDidChange)=\"getSelectedTab()\">\n    <ion-tab-bar slot=\"bottom\" color=\"primary\">\n      <ion-tab-button tab=\"restaurants-list\">\n        <ion-icon name=\"home\"></ion-icon>\n        <ion-label>Restaurants</ion-label>\n      </ion-tab-button>\n\n      <ion-tab-button tab=\"restaurant-menu\">\n        <ion-icon name=\"restaurant\"></ion-icon>\n        <ion-label>Menu</ion-label>\n      </ion-tab-button>\n\n      <ion-tab-button tab=\"order-status\">\n        <ion-icon name=\"clipboard\"></ion-icon>\n        <ion-label>Order Status</ion-label>\n      </ion-tab-button>\n\n      <ion-tab-button tab=\"user-profile\">\n          <ion-icon name=\"contact\"></ion-icon>\n          <ion-label>Account</ion-label>\n        </ion-tab-button>\n    </ion-tab-bar>\n  </ion-tabs>\n    <ion-fab vertical=\"bottom\" horizontal=\"center\" slot=\"fixed\">\n      <ion-fab-button class=\"scan-button\" color=\"secondary\" (click)=\"performScan()\">\n        <ion-icon name=\"qr-scanner\"></ion-icon>\n      </ion-fab-button>\n    </ion-fab>\n</ion-content>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var MenuResolver = /** @class */ (function () {
    function MenuResolver(restaurantService) {
        this.restaurantService = restaurantService;
    }
    MenuResolver.prototype.resolve = function (route) {
        return this.restaurantService.getMenu(+route.paramMap.get('id'));
    };
    MenuResolver.ctorParameters = function () { return [
        { type: _restaurant_service__WEBPACK_IMPORTED_MODULE_1__["RestaurantService"] }
    ]; };
    MenuResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_restaurant_service__WEBPACK_IMPORTED_MODULE_1__["RestaurantService"]])
    ], MenuResolver);
    return MenuResolver;
}());



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
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/barcode-scanner/ngx */ "./node_modules/@ionic-native/barcode-scanner/ngx/index.js");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @capacitor/core */ "./node_modules/@capacitor/core/dist/esm/index.js");







var Toast = _capacitor_core__WEBPACK_IMPORTED_MODULE_6__["Plugins"].Toast;
var TabsPage = /** @class */ (function () {
    function TabsPage(barcodeScanner, route, authService) {
        this.barcodeScanner = barcodeScanner;
        this.route = route;
        this.authService = authService;
    }
    TabsPage.prototype.ngOnInit = function () {
    };
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
        { type: _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_5__["BarcodeScanner"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])('tabs', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonTabs"])
    ], TabsPage.prototype, "tabs", void 0);
    TabsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-tabs',
            template: __webpack_require__(/*! raw-loader!./tabs.page.html */ "./node_modules/raw-loader/index.js!./src/app/tabs/tabs.page.html"),
            styles: [__webpack_require__(/*! ./tabs.page.scss */ "./src/app/tabs/tabs.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_5__["BarcodeScanner"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
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
/* harmony import */ var _menu_resolver_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../menu-resolver.service */ "./src/app/menu-resolver.service.ts");






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
                            return __webpack_require__.e(/*! import() | restaurant-menu-restaurant-menu-module */ "restaurant-menu-restaurant-menu-module").then(__webpack_require__.bind(null, /*! ../restaurant-menu/restaurant-menu.module */ "./src/app/restaurant-menu/restaurant-menu.module.ts")).then(function (m) { return m.RestaurantMenuPageModule; });
                        }
                    }
                ]
            },
            {
                path: 'restaurant-menu/menu/:id',
                loadChildren: function () {
                    return __webpack_require__.e(/*! import() | restaurant-menu-menu-products-menu-products-module */ "restaurant-menu-menu-products-menu-products-module").then(__webpack_require__.bind(null, /*! ../restaurant-menu/menu-products/menu-products.module */ "./src/app/restaurant-menu/menu-products/menu-products.module.ts")).then(function (m) { return m.MenuProductsPageModule; });
                },
                resolve: {
                    menu: _menu_resolver_service__WEBPACK_IMPORTED_MODULE_5__["MenuResolver"]
                }
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
                path: 'order-status/payment',
                loadChildren: function () {
                    return __webpack_require__.e(/*! import() | payment-payment-module */ "payment-payment-module").then(__webpack_require__.bind(null, /*! ../payment/payment.module */ "./src/app/payment/payment.module.ts")).then(function (m) { return m.PaymentPageModule; });
                },
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