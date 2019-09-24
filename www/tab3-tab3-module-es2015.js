(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab3-tab3-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/tab3/tab3.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tab3/tab3.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"secondary\">\n    <ion-title>\n      Your Order\n      <div class=\"total-order\"> TOTAL: {{ total | currency }}</div>\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"order-page-content\">\n  <ion-list>\n    <ion-item-sliding *ngFor=\"let order of orderList; let index = index;\">\n      <ion-item>\n        <div class=\"item-avatar-container\">\n            <ion-avatar item-start>\n                <img [src]=\"order.image\">\n              </ion-avatar>\n              <p [ngStyle]=\"{'color':order.status === 'pending' ? '#FFFF4C' : 'green' }\">{{order.status}}</p>\n        </div>\n        <div class=\"item-name\">\n          <p>{{order.name}}</p>\n        </div>\n        <div class=\"item-price\">\n          <p>Price</p>\n          <p>{{ order.price | currency }}</p>\n        </div>\n        <div class=\"item-quantity\">\n            <p>Quantity</p>\n            <div>\n                <ion-icon name=\"add-circle-outline\" (click)=\"incrementQuantity(order)\"></ion-icon>\n                {{order.cantitate}}\n              <ion-icon name=\"remove-circle-outline\" (click)=\"decrementQuantity(order)\"></ion-icon>\n            </div>\n        </div>\n      </ion-item>\n      <ion-item-options>\n        <ion-button class=\"btn-resize\" color=\"light\" size=\"large\" icon-start>\n          <ion-icon name=\"ios-more\"></ion-icon>\n          More\n        </ion-button>\n        <ion-button class=\"btn-resize\" color=\"danger\" [disabled]=\"order.status === 'done'\"\n         (click)=\"removeProduct(index)\" size=\"large\" icon-start>\n         <ion-icon name=\"trash\"></ion-icon>\n          Remove\n        </ion-button>\n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-list>\n</ion-content>\n"

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

module.exports = ".order-page-content ion-item {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n          align-items: center;\n}\n.order-page-content ion-item .item-avatar-container {\n  flex-basis: 20%;\n  height: 75%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-align: center;\n          align-items: center;\n}\n.order-page-content ion-item .item-avatar-container ion-avatar {\n  border: 1px solid var(--ion-color-dark);\n}\n.order-page-content ion-item .item-avatar-container p {\n  margin: 5px 0 0 0;\n  font-size: 10px;\n  padding: 2px;\n  background-color: gainsboro;\n}\n.order-page-content ion-item .item-name {\n  flex-basis: 30%;\n  font-size: 17px;\n  text-align: center;\n}\n.order-page-content ion-item div.item-name ~ div {\n  flex-basis: 20%;\n  font-size: 14px;\n  text-align: left;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n.order-page-content ion-item .item-quantity {\n  height: 100%;\n}\n.order-page-content ion-item .item-quantity div {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-align: center;\n          align-items: center;\n  margin-bottom: 5px;\n}\n.order-page-content ion-item .item-quantity ion-icon {\n  font-size: 25px;\n  padding: 5px;\n}\n.order-page-content .total-order {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 20%;\n  left: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9taW9yZGFjaC9EZXNrdG9wL3dvcmtzcGFjZS9vcmRlci1ub3cvc3JjL2FwcC90YWIzL3RhYjMucGFnZS5zY3NzIiwic3JjL2FwcC90YWIzL3RhYjMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVdJO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSw4QkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7QUNWUjtBRFlRO0VBQ0ksZUFBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0FDVlo7QURZWTtFQUNJLHVDQUFBO0FDVmhCO0FEYVk7RUFDSSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsMkJBQUE7QUNYaEI7QURlUTtFQUNJLGVBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUNiWjtBRGdCUTtFQXhDSixlQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSw4QkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7QUMyQko7QURXUTtFQUNJLFlBQUE7QUNUWjtBRFdZO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0EsOEJBQUE7RUFBQSw2QkFBQTtVQUFBLG1CQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLGtCQUFBO0FDVGhCO0FEWVk7RUFDSSxlQUFBO0VBQ0EsWUFBQTtBQ1ZoQjtBRGVJO0VBQ0ksd0JBQUE7RUFBQSxnQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0FDYlIiLCJmaWxlIjoic3JjL2FwcC90YWIzL3RhYjMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1peGluIGl0ZW0tZmxleCB7XG4gICAgZmxleC1iYXNpczogMjAlO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLm9yZGVyLXBhZ2UtY29udGVudCB7XG4gICAgaW9uLWl0ZW0ge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAgICAgLml0ZW0tYXZhdGFyLWNvbnRhaW5lciB7XG4gICAgICAgICAgICBmbGV4LWJhc2lzOiAyMCU7XG4gICAgICAgICAgICBoZWlnaHQ6IDc1JTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgICAgICAgICAgaW9uLWF2YXRhciB7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLWRhcmspO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBwIHtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDVweCAwIDAgMDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMnB4O1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGdhaW5zYm9ybztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5pdGVtLW5hbWUge1xuICAgICAgICAgICAgZmxleC1iYXNpczogMzAlO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxN3B4O1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgZGl2Lml0ZW0tbmFtZX5kaXYge1xuICAgICAgICAgICAgQGluY2x1ZGUgaXRlbS1mbGV4O1xuICAgICAgICB9XG5cbiAgICAgICAgLml0ZW0tcXVhbnRpdHkge1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuXG4gICAgICAgICAgICBkaXYge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaW9uLWljb24ge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAudG90YWwtb3JkZXIge1xuICAgICAgICBwb3NpdGlvbjogc3RpY2t5O1xuICAgICAgICB0b3A6IDIwJTtcbiAgICAgICAgbGVmdDogNTAlO1xuICAgIH1cbn1cbiIsIi5vcmRlci1wYWdlLWNvbnRlbnQgaW9uLWl0ZW0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ub3JkZXItcGFnZS1jb250ZW50IGlvbi1pdGVtIC5pdGVtLWF2YXRhci1jb250YWluZXIge1xuICBmbGV4LWJhc2lzOiAyMCU7XG4gIGhlaWdodDogNzUlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLm9yZGVyLXBhZ2UtY29udGVudCBpb24taXRlbSAuaXRlbS1hdmF0YXItY29udGFpbmVyIGlvbi1hdmF0YXIge1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItZGFyayk7XG59XG4ub3JkZXItcGFnZS1jb250ZW50IGlvbi1pdGVtIC5pdGVtLWF2YXRhci1jb250YWluZXIgcCB7XG4gIG1hcmdpbjogNXB4IDAgMCAwO1xuICBmb250LXNpemU6IDEwcHg7XG4gIHBhZGRpbmc6IDJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ2FpbnNib3JvO1xufVxuLm9yZGVyLXBhZ2UtY29udGVudCBpb24taXRlbSAuaXRlbS1uYW1lIHtcbiAgZmxleC1iYXNpczogMzAlO1xuICBmb250LXNpemU6IDE3cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5vcmRlci1wYWdlLWNvbnRlbnQgaW9uLWl0ZW0gZGl2Lml0ZW0tbmFtZSB+IGRpdiB7XG4gIGZsZXgtYmFzaXM6IDIwJTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4ub3JkZXItcGFnZS1jb250ZW50IGlvbi1pdGVtIC5pdGVtLXF1YW50aXR5IHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLm9yZGVyLXBhZ2UtY29udGVudCBpb24taXRlbSAuaXRlbS1xdWFudGl0eSBkaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG4ub3JkZXItcGFnZS1jb250ZW50IGlvbi1pdGVtIC5pdGVtLXF1YW50aXR5IGlvbi1pY29uIHtcbiAgZm9udC1zaXplOiAyNXB4O1xuICBwYWRkaW5nOiA1cHg7XG59XG4ub3JkZXItcGFnZS1jb250ZW50IC50b3RhbC1vcmRlciB7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHRvcDogMjAlO1xuICBsZWZ0OiA1MCU7XG59Il19 */"

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
    },
    {
        id: 4,
        name: 'Cuba Libre',
        price: '21',
        cantitate: 1,
        status: 'pending',
        image: './../../assets/order/cuba.jpg'
    },
    {
        id: 5,
        name: 'Paste Bolognese',
        price: '25',
        cantitate: 2,
        status: 'pending',
        image: './../../assets/order/paste.jpg'
    },
    {
        id: 6,
        name: 'Fanta',
        price: '7',
        cantitate: 3,
        status: 'done',
        image: './../../assets/order/fanta.jpg'
    },
    {
        id: 7,
        name: 'Pizza Polo',
        price: '24',
        cantitate: 1,
        status: 'done',
        image: './../../assets/order/pizza-polo.jpg'
    },
    {
        id: 8,
        name: 'CheeseCake',
        price: '19',
        cantitate: 1,
        status: 'done',
        image: './../../assets/order/cheese.jpg'
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
    incrementQuantity(order) {
        order.cantitate += 1;
        this.changeTotal();
    }
    decrementQuantity(order) {
        if (order.cantitate === 0) {
            return;
        }
        order.cantitate -= 1;
        this.changeTotal();
    }
    changeTotal() {
        this.total = 0;
        orderList.forEach((order) => {
            this.total += order.cantitate * order.price;
        });
    }
    removeProduct(index) {
        //allow removing if  order is in pending
        this.orderList.splice(index, 1);
        this.changeTotal();
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