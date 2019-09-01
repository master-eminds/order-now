(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab3-tab3-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/tab3/tab3.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tab3/tab3.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      Tab Three\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-list>\n        <ion-list-header>\n          Your order\n        </ion-list-header>\n        <ion-item-sliding *ngFor=\"let product of orderList\">\n          <ion-item>\n            <ion-avatar item-start>\n              <img [src]=\"product.image\">\n            </ion-avatar>\n            <h5>{{product.name}}</h5>\n            <div class=\"item-price\" size=\"6\">\n                <p>Status</p>\n                <p>{{ product.status }}</p>\n              </div>\n              <div class=\"item-status\" size=\"6\">\n                  <p>Price</p>\n                  <p>{{ product.price | currency }}</p>\n              </div>\n          </ion-item>\n          <ion-item-options>\n            <ion-button color=\"light\" size=\"large\" icon-start>\n              <ion-icon name=\"ios-more\"></ion-icon>\n              More\n            </ion-button>\n            <ion-button color=\"danger\" size=\"large\" icon-start>\n              <ion-icon name=\"text\"></ion-icon>\n              Cancel\n            </ion-button>\n          </ion-item-options>\n        </ion-item-sliding>\n        </ion-list>\n        <h2> TOTAL: {{ total | currency }}</h2>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/tab3/tab3.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab3/tab3.module.ts ***!
  \*************************************/
/*! exports provided: Tab3PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab3PageModule", function() { return Tab3PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _tab3_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab3.page */ "./src/app/tab3/tab3.page.ts");







let Tab3PageModule = class Tab3PageModule {
};
Tab3PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _tab3_page__WEBPACK_IMPORTED_MODULE_6__["Tab3Page"] }])
        ],
        declarations: [_tab3_page__WEBPACK_IMPORTED_MODULE_6__["Tab3Page"]]
    })
], Tab3PageModule);



/***/ }),

/***/ "./src/app/tab3/tab3.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab3/tab3.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYjMvdGFiMy5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/tab3/tab3.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab3/tab3.page.ts ***!
  \***********************************/
/*! exports provided: Tab3Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab3Page", function() { return Tab3Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


const orderList = [
    {
        id: 0,
        name: 'Bere Heineken',
        price: '7',
        cantitate: 2,
        status: 'done',
        image: './../../assets/order/beer.jpg'
    },
    {
        id: 1,
        name: 'Pizza quatro formaggi',
        price: '27',
        cantitate: 1,
        status: 'pending',
        image: './../../assets/order/pizza.jpg'
    },
    {
        id: 2,
        name: 'Clatite',
        price: '18',
        cantitate: 2,
        status: 'pending',
        image: './../../assets/order/clatite.jpg'
    },
    {
        id: 3,
        name: 'Mojito',
        price: '27',
        cantitate: 1,
        status: 'done',
        image: './../../assets/order/mojito.jpg'
    }
];
let Tab3Page = class Tab3Page {
    constructor() {
        this.orderList = orderList;
        this.total = 0;
        orderList.forEach((order) => {
            this.total += order.cantitate * order.price;
        });
    }
};
Tab3Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tab3',
        template: __webpack_require__(/*! raw-loader!./tab3.page.html */ "./node_modules/raw-loader/index.js!./src/app/tab3/tab3.page.html"),
        styles: [__webpack_require__(/*! ./tab3.page.scss */ "./src/app/tab3/tab3.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], Tab3Page);



/***/ })

}]);
//# sourceMappingURL=tab3-tab3-module-es2015.js.map