(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tabs-tabs-module"],{

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
                        loadChildren: () => __webpack_require__.e(/*! import() | restaurant-menu-restaurant-menu-module */ "restaurant-menu-restaurant-menu-module").then(__webpack_require__.bind(null, /*! ../restaurant-menu/restaurant-menu.module */ "./src/app/restaurant-menu/restaurant-menu.module.ts")).then(m => m.OnlineOrderPageModule)
                    }
                ]
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