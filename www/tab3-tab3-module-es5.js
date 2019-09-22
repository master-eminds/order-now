(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab3-tab3-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/tab3/tab3.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/tab3/tab3.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"secondary\">\n    <ion-title>\n      Your Order\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <!-- <ion-list-header>\n          Your order\n        </ion-list-header> -->\n    <ion-item-sliding *ngFor=\"let order of orderList\">\n      <ion-item color=\"light\">\n        <div class=\"item-avatar-container\">\n            <ion-avatar item-start>\n                <img [src]=\"order.image\">\n              </ion-avatar>\n              <p [ngStyle]=\"{'color':order.status === 'pending' ? 'yellow' : 'green' }\">{{order.status}}</p>\n        </div>\n        <div class=\"item-name\">\n          <p>{{order.name}}</p>\n        </div>\n        <div class=\"item-price\">\n          <p>Price</p>\n          <p>{{ order.price | currency }}</p>\n        </div>\n        <div class=\"item-quantity\">\n            <p>Quantity</p>\n            <div>\n                <ion-icon name=\"add-circle-outline\" (click)=\"incrementQuantity(order)\"></ion-icon>\n                {{order.cantitate}}\n              <ion-icon name=\"remove-circle-outline\" (click)=\"decrementQuantity(order)\"></ion-icon>\n            </div>\n        </div>\n      </ion-item>\n      <ion-item-options>\n        <ion-button color=\"light\" size=\"large\" icon-start>\n          <ion-icon name=\"ios-more\"></ion-icon>\n          More\n        </ion-button>\n        <ion-button color=\"danger\" size=\"large\" icon-start>\n          <ion-icon name=\"text\"></ion-icon>\n          Cancel\n        </ion-button>\n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-list>\n  <div class=\"total-order\"> TOTAL: {{ total | currency }}</div>\n</ion-content>\n"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _tab3_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab3.page */ "./src/app/tab3/tab3.page.ts");







var Tab3PageModule = /** @class */ (function () {
    function Tab3PageModule() {
    }
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
    return Tab3PageModule;
}());



/***/ }),

/***/ "./src/app/tab3/tab3.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab3/tab3.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-item {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n          align-items: center;\n}\nion-item .item-avatar-container {\n  flex-basis: 20%;\n  height: 75%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-align: center;\n          align-items: center;\n}\nion-item .item-avatar-container ion-avatar {\n  border: 1px solid var(--ion-color-dark);\n}\nion-item .item-avatar-container p {\n  margin: 5px 0 0 0;\n  font-size: 10px;\n}\nion-item .item-name {\n  flex-basis: 30%;\n  font-size: 17px;\n  text-align: center;\n}\nion-item div.item-name ~ div {\n  flex-basis: 20%;\n  font-size: 14px;\n  text-align: left;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\nion-item .item-quantity {\n  height: 100%;\n}\nion-item .item-quantity div {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-align: center;\n          align-items: center;\n  margin-bottom: 5px;\n}\nion-item .item-quantity ion-icon {\n  font-size: 25px;\n  padding: 5px;\n}\n.total-order {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 20%;\n  left: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9taW9yZGFjaC9EZXNrdG9wL3dvcmtzcGFjZS9vcmRlci1ub3cvc3JjL2FwcC90YWIzL3RhYjMucGFnZS5zY3NzIiwic3JjL2FwcC90YWIzL3RhYjMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVVBO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSw4QkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7QUNUSjtBRFdJO0VBQ0ksZUFBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0FDVFI7QURXUTtFQUNJLHVDQUFBO0FDVFo7QURZUTtFQUNJLGlCQUFBO0VBQ0EsZUFBQTtBQ1ZaO0FEY0k7RUFDSSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDWlI7QURlSTtFQXJDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSw4QkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7QUN5Qko7QURVSTtFQUNJLFlBQUE7QUNSUjtBRFNRO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0EsOEJBQUE7RUFBQSw2QkFBQTtVQUFBLG1CQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLGtCQUFBO0FDUFo7QURVUTtFQUNJLGVBQUE7RUFDQSxZQUFBO0FDUlo7QURhQTtFQUNJLHdCQUFBO0VBQUEsZ0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtBQ1ZKIiwiZmlsZSI6InNyYy9hcHAvdGFiMy90YWIzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtaXhpbiBpdGVtLWZsZXgge1xuICAgIGZsZXgtYmFzaXM6IDIwJTtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbmlvbi1pdGVtIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogIHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgIC5pdGVtLWF2YXRhci1jb250YWluZXIge1xuICAgICAgICBmbGV4LWJhc2lzOiAyMCU7XG4gICAgICAgIGhlaWdodDogNzUlO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBcbiAgICAgICAgaW9uLWF2YXRhciB7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItZGFyayk7XG4gICAgICAgIH1cblxuICAgICAgICBwIHtcbiAgICAgICAgICAgIG1hcmdpbjogNXB4IDAgMCAwO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLml0ZW0tbmFtZSB7XG4gICAgICAgIGZsZXgtYmFzaXM6IDMwJTtcbiAgICAgICAgZm9udC1zaXplOiAxN3B4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuXG4gICAgZGl2Lml0ZW0tbmFtZSB+IGRpdiB7XG4gICAgICAgIEBpbmNsdWRlIGl0ZW0tZmxleDtcbiAgICB9XG5cbiAgICAuaXRlbS1xdWFudGl0eSB7IFxuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIGRpdiB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgICAgIH1cblxuICAgICAgICBpb24taWNvbiB7XG4gICAgICAgICAgICBmb250LXNpemU6IDI1cHg7XG4gICAgICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi50b3RhbC1vcmRlciB7XG4gICAgcG9zaXRpb246IHN0aWNreTtcbiAgICB0b3A6IDIwJTtcbiAgICBsZWZ0OiA1MCU7XG59IiwiaW9uLWl0ZW0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5pb24taXRlbSAuaXRlbS1hdmF0YXItY29udGFpbmVyIHtcbiAgZmxleC1iYXNpczogMjAlO1xuICBoZWlnaHQ6IDc1JTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbmlvbi1pdGVtIC5pdGVtLWF2YXRhci1jb250YWluZXIgaW9uLWF2YXRhciB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1kYXJrKTtcbn1cbmlvbi1pdGVtIC5pdGVtLWF2YXRhci1jb250YWluZXIgcCB7XG4gIG1hcmdpbjogNXB4IDAgMCAwO1xuICBmb250LXNpemU6IDEwcHg7XG59XG5pb24taXRlbSAuaXRlbS1uYW1lIHtcbiAgZmxleC1iYXNpczogMzAlO1xuICBmb250LXNpemU6IDE3cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbmlvbi1pdGVtIGRpdi5pdGVtLW5hbWUgfiBkaXYge1xuICBmbGV4LWJhc2lzOiAyMCU7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuaW9uLWl0ZW0gLml0ZW0tcXVhbnRpdHkge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5pb24taXRlbSAuaXRlbS1xdWFudGl0eSBkaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG5pb24taXRlbSAuaXRlbS1xdWFudGl0eSBpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgcGFkZGluZzogNXB4O1xufVxuXG4udG90YWwtb3JkZXIge1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IDIwJTtcbiAgbGVmdDogNTAlO1xufSJdfQ== */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var orderList = [
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
var Tab3Page = /** @class */ (function () {
    function Tab3Page() {
        var _this = this;
        this.orderList = orderList;
        this.total = 0;
        orderList.forEach(function (order) {
            _this.total += order.cantitate * order.price;
        });
    }
    Tab3Page.prototype.incrementQuantity = function (order) {
        order.cantitate += 1;
        this.changeTotal();
    };
    Tab3Page.prototype.decrementQuantity = function (order) {
        if (order.cantitate === 0) {
            return;
        }
        order.cantitate -= 1;
        this.changeTotal();
    };
    Tab3Page.prototype.changeTotal = function () {
        var _this = this;
        this.total = 0;
        orderList.forEach(function (order) {
            _this.total += order.cantitate * order.price;
        });
    };
    Tab3Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tab3',
            template: __webpack_require__(/*! raw-loader!./tab3.page.html */ "./node_modules/raw-loader/index.js!./src/app/tab3/tab3.page.html"),
            styles: [__webpack_require__(/*! ./tab3.page.scss */ "./src/app/tab3/tab3.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], Tab3Page);
    return Tab3Page;
}());



/***/ })

}]);
//# sourceMappingURL=tab3-tab3-module-es5.js.map