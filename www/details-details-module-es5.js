(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["details-details-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/details/details-card/details-card.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/details/details-card/details-card.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n  <ion-card class=\"welcome-card\">\n    <!-- <img [src]=\"restaurant.image\" alt=\"\" /> -->\n    <app-slide-header [slides]=\"restaurant.slides\"></app-slide-header>\n    <ion-card-header class=\"card-header\">\n      <ion-card-subtitle>\n        {{restaurant.subtitle}}\n      </ion-card-subtitle>\n      <ion-card-title>Welcome to {{restaurant.name}} </ion-card-title>\n      <div class=\"rating-container\">\n        <rating [(ngModel)]=\"restaurant.rate\" readonly=\"false\" size=\"small\" (ngModelChange)=\"onRateChange($event)\">\n        </rating>\n      </div>\n    </ion-card-header>\n    <ion-card-content>\n      <p>{{restaurant.description | truncate : 150}} </p>\n    </ion-card-content>\n    <ion-row class=\"social-container\">\n      <ion-col>\n        <ion-button  color=\"secondary\" class=\"btn-t\" icon-start clear small (click)=\"increaseLikes(restaurant)\">\n          <ion-icon name=\"thumbs-up\"></ion-icon>\n          <div>{{restaurant.likes}} Likes</div>\n        </ion-button>\n      </ion-col>\n      <ion-col>\n        <ion-button color=\"secondary\" icon-start clear small>\n          <ion-icon name=\"text\"></ion-icon>\n          <div>4 Comments</div>\n        </ion-button>\n      </ion-col>\n      <ion-col align-self-center text-center>\n        <ion-note>\n          11h ago\n        </ion-note>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n</ion-content>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/details/details-card/slide-header/slide-header.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/details/details-card/slide-header/slide-header.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-slides pager=\"true\" [options]=\"slideOpts\">\n    <ion-slide  *ngFor=\"let slide of slides\">\n        <img [src]=\"slide\"/>\n      </ion-slide>\n  </ion-slides>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/details/details.page.html":
/*!*********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/details/details.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"secondary\">\n    <ion-buttons slot=\"start\">\n          <ion-back-button defaulthref=\"\"></ion-back-button>\n        </ion-buttons>\n        <ion-title>Details Page</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <app-details-card [restaurant]=\"restaurant\"></app-details-card>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/details/details-card/details-card.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/details/details-card/details-card.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".welcome-card {\n  width: 100%;\n  height: 100%;\n  margin: 0;\n}\n\n:host ::ng-deep ion-card-header {\n  padding-bottom: 5px;\n  padding-top: 10px;\n}\n\n:host ::ng-deep ion-card-subtitle {\n  text-transform: none;\n}\n\n:host ::ng-deep ion-card-content {\n  padding-top: 5px;\n}\n\n.social-container ion-button {\n  font-size: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9taW9yZGFjaC9EZXNrdG9wL3dvcmtzcGFjZS9vcmRlci1ub3cvc3JjL2FwcC9kZXRhaWxzL2RldGFpbHMtY2FyZC9kZXRhaWxzLWNhcmQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2RldGFpbHMvZGV0YWlscy1jYXJkL2RldGFpbHMtY2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtBQ0NGOztBREVBO0VBQ0UsbUJBQUE7RUFDQSxpQkFBQTtBQ0NGOztBREVBO0VBQ0Usb0JBQUE7QUNDRjs7QURFQTtFQUNFLGdCQUFBO0FDQ0Y7O0FER007RUFDQSxlQUFBO0FDQU4iLCJmaWxlIjoic3JjL2FwcC9kZXRhaWxzL2RldGFpbHMtY2FyZC9kZXRhaWxzLWNhcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud2VsY29tZS1jYXJkIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgbWFyZ2luOiAwO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgaW9uLWNhcmQtaGVhZGVyIHtcbiAgcGFkZGluZy1ib3R0b206IDVweDtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG59XG5cbjpob3N0IDo6bmctZGVlcCBpb24tY2FyZC1zdWJ0aXRsZSB7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgaW9uLWNhcmQtY29udGVudCB7XG4gIHBhZGRpbmctdG9wOiA1cHg7XG59XG5cbi5zb2NpYWwtY29udGFpbmVyIHtcbiAgICAgIGlvbi1idXR0b24ge1xuICAgICAgZm9udC1zaXplOjEycHg7XG4gICAgfVxufVxuIiwiLndlbGNvbWUtY2FyZCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1hcmdpbjogMDtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIGlvbi1jYXJkLWhlYWRlciB7XG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xufVxuXG46aG9zdCA6Om5nLWRlZXAgaW9uLWNhcmQtc3VidGl0bGUge1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIGlvbi1jYXJkLWNvbnRlbnQge1xuICBwYWRkaW5nLXRvcDogNXB4O1xufVxuXG4uc29jaWFsLWNvbnRhaW5lciBpb24tYnV0dG9uIHtcbiAgZm9udC1zaXplOiAxMnB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/details/details-card/details-card.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/details/details-card/details-card.component.ts ***!
  \****************************************************************/
/*! exports provided: DetailsCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsCardComponent", function() { return DetailsCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DetailsCardComponent = /** @class */ (function () {
    function DetailsCardComponent() {
    }
    DetailsCardComponent.prototype.ngOnInit = function () { };
    DetailsCardComponent.prototype.increaseLikes = function (restaurant) {
        restaurant.likes++;
    };
    DetailsCardComponent.prototype.onRateChange = function (e) {
        console.log(e);
    };
    DetailsCardComponent.prototype.viewDetailsPage = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DetailsCardComponent.prototype, "restaurant", void 0);
    DetailsCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-details-card',
            template: __webpack_require__(/*! raw-loader!./details-card.component.html */ "./node_modules/raw-loader/index.js!./src/app/details/details-card/details-card.component.html"),
            styles: [__webpack_require__(/*! ./details-card.component.scss */ "./src/app/details/details-card/details-card.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DetailsCardComponent);
    return DetailsCardComponent;
}());



/***/ }),

/***/ "./src/app/details/details-card/details-card.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/details/details-card/details-card.module.ts ***!
  \*************************************************************/
/*! exports provided: DetailsCardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsCardModule", function() { return DetailsCardModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _details_card_details_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../details-card/details-card.component */ "./src/app/details/details-card/details-card.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var ionic4_rating__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ionic4-rating */ "./node_modules/ionic4-rating/dist/index.js");
/* harmony import */ var _yellowspot_ng_truncate__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @yellowspot/ng-truncate */ "./node_modules/@yellowspot/ng-truncate/fesm5/yellowspot-ng-truncate.js");
/* harmony import */ var _slide_header_slide_header_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./slide-header/slide-header.module */ "./src/app/details/details-card/slide-header/slide-header.module.ts");









var DetailsCardModule = /** @class */ (function () {
    function DetailsCardModule() {
    }
    DetailsCardModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
                ionic4_rating__WEBPACK_IMPORTED_MODULE_6__["IonicRatingModule"],
                _yellowspot_ng_truncate__WEBPACK_IMPORTED_MODULE_7__["TruncateModule"],
                _slide_header_slide_header_module__WEBPACK_IMPORTED_MODULE_8__["SlideHeaderModule"]
            ],
            declarations: [
                _details_card_details_card_component__WEBPACK_IMPORTED_MODULE_2__["DetailsCardComponent"]
            ],
            exports: [
                _details_card_details_card_component__WEBPACK_IMPORTED_MODULE_2__["DetailsCardComponent"]
            ]
        })
    ], DetailsCardModule);
    return DetailsCardModule;
}());



/***/ }),

/***/ "./src/app/details/details-card/slide-header/slide-header.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/details/details-card/slide-header/slide-header.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host ion-slide {\n  height: inherit;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9taW9yZGFjaC9EZXNrdG9wL3dvcmtzcGFjZS9vcmRlci1ub3cvc3JjL2FwcC9kZXRhaWxzL2RldGFpbHMtY2FyZC9zbGlkZS1oZWFkZXIvc2xpZGUtaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9kZXRhaWxzL2RldGFpbHMtY2FyZC9zbGlkZS1oZWFkZXIvc2xpZGUtaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksZUFBQTtFQUNBLFdBQUE7QUNBUiIsImZpbGUiOiJzcmMvYXBwL2RldGFpbHMvZGV0YWlscy1jYXJkL3NsaWRlLWhlYWRlci9zbGlkZS1oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7IFxuICAgIGlvbi1zbGlkZSB7XG4gICAgICAgIGhlaWdodDogaW5oZXJpdDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxufSIsIjpob3N0IGlvbi1zbGlkZSB7XG4gIGhlaWdodDogaW5oZXJpdDtcbiAgd2lkdGg6IDEwMCU7XG59Il19 */"

/***/ }),

/***/ "./src/app/details/details-card/slide-header/slide-header.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/details/details-card/slide-header/slide-header.component.ts ***!
  \*****************************************************************************/
/*! exports provided: SlideHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlideHeaderComponent", function() { return SlideHeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SlideHeaderComponent = /** @class */ (function () {
    function SlideHeaderComponent() {
        this.slideOpts = {
            autoplay: {
                delay: 2000,
            },
            coverflowEffect: {
                stretch: 100
            },
            autoHeight: true,
            effect: 'cube'
        };
    }
    SlideHeaderComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SlideHeaderComponent.prototype, "slides", void 0);
    SlideHeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-slide-header',
            template: __webpack_require__(/*! raw-loader!./slide-header.component.html */ "./node_modules/raw-loader/index.js!./src/app/details/details-card/slide-header/slide-header.component.html"),
            styles: [__webpack_require__(/*! ./slide-header.component.scss */ "./src/app/details/details-card/slide-header/slide-header.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SlideHeaderComponent);
    return SlideHeaderComponent;
}());



/***/ }),

/***/ "./src/app/details/details-card/slide-header/slide-header.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/details/details-card/slide-header/slide-header.module.ts ***!
  \**************************************************************************/
/*! exports provided: SlideHeaderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlideHeaderModule", function() { return SlideHeaderModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _slide_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./slide-header.component */ "./src/app/details/details-card/slide-header/slide-header.component.ts");






var SlideHeaderModule = /** @class */ (function () {
    function SlideHeaderModule() {
    }
    SlideHeaderModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"]
            ],
            declarations: [
                _slide_header_component__WEBPACK_IMPORTED_MODULE_5__["SlideHeaderComponent"]
            ],
            exports: [
                _slide_header_component__WEBPACK_IMPORTED_MODULE_5__["SlideHeaderComponent"]
            ]
        })
    ], SlideHeaderModule);
    return SlideHeaderModule;
}());



/***/ }),

/***/ "./src/app/details/details.module.ts":
/*!*******************************************!*\
  !*** ./src/app/details/details.module.ts ***!
  \*******************************************/
/*! exports provided: DetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsPageModule", function() { return DetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _details_card_details_card_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./details-card/details-card.module */ "./src/app/details/details-card/details-card.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _details_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./details.page */ "./src/app/details/details.page.ts");








var routes = [
    {
        path: '',
        component: _details_page__WEBPACK_IMPORTED_MODULE_7__["DetailsPage"]
    }
];
var DetailsPageModule = /** @class */ (function () {
    function DetailsPageModule() {
    }
    DetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _details_card_details_card_module__WEBPACK_IMPORTED_MODULE_1__["DetailsCardModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes)
            ],
            declarations: [_details_page__WEBPACK_IMPORTED_MODULE_7__["DetailsPage"]]
        })
    ], DetailsPageModule);
    return DetailsPageModule;
}());



/***/ }),

/***/ "./src/app/details/details.page.scss":
/*!*******************************************!*\
  !*** ./src/app/details/details.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RldGFpbHMvZGV0YWlscy5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/details/details.page.ts":
/*!*****************************************!*\
  !*** ./src/app/details/details.page.ts ***!
  \*****************************************/
/*! exports provided: DetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsPage", function() { return DetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var DetailsPage = /** @class */ (function () {
    function DetailsPage(route) {
        this.route = route;
    }
    DetailsPage.prototype.ngOnInit = function () {
        this.restaurant = this.route.snapshot.data.restaurant;
    };
    DetailsPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
    ]; };
    DetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-details',
            template: __webpack_require__(/*! raw-loader!./details.page.html */ "./node_modules/raw-loader/index.js!./src/app/details/details.page.html"),
            styles: [__webpack_require__(/*! ./details.page.scss */ "./src/app/details/details.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], DetailsPage);
    return DetailsPage;
}());



/***/ })

}]);
//# sourceMappingURL=details-details-module-es5.js.map