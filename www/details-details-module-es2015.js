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

module.exports = ".welcome-card {\n  width: 100%;\n  height: 100%;\n  margin: 0; }\n\n:host ::ng-deep ion-card-header {\n  padding-bottom: 5px;\n  padding-top: 10px; }\n\n:host ::ng-deep ion-card-subtitle {\n  text-transform: none; }\n\n:host ::ng-deep ion-card-content {\n  padding-top: 5px; }\n\n.social-container ion-button {\n  font-size: 12px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9taW9yZGFjaC9EZXNrdG9wL3ByYWN0aWNlL29yZGVyLW5vdy9zcmMvYXBwL2RldGFpbHMvZGV0YWlscy1jYXJkL2RldGFpbHMtY2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osU0FBUyxFQUFBOztBQUdYO0VBQ0UsbUJBQW1CO0VBQ25CLGlCQUFpQixFQUFBOztBQUduQjtFQUNFLG9CQUFvQixFQUFBOztBQUd0QjtFQUNFLGdCQUFnQixFQUFBOztBQUdsQjtFQUVNLGVBQWMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2RldGFpbHMvZGV0YWlscy1jYXJkL2RldGFpbHMtY2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53ZWxjb21lLWNhcmQge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXJnaW46IDA7XG59XG5cbjpob3N0IDo6bmctZGVlcCBpb24tY2FyZC1oZWFkZXIge1xuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuICBwYWRkaW5nLXRvcDogMTBweDtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIGlvbi1jYXJkLXN1YnRpdGxlIHtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG59XG5cbjpob3N0IDo6bmctZGVlcCBpb24tY2FyZC1jb250ZW50IHtcbiAgcGFkZGluZy10b3A6IDVweDtcbn1cblxuLnNvY2lhbC1jb250YWluZXIge1xuICAgICAgaW9uLWJ1dHRvbiB7XG4gICAgICBmb250LXNpemU6MTJweDtcbiAgICB9XG59XG4iXX0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DetailsCardComponent = class DetailsCardComponent {
    constructor() { }
    ngOnInit() { }
    increaseLikes(restaurant) {
        restaurant.likes++;
    }
    onRateChange(e) {
        console.log(e);
    }
    viewDetailsPage() {
    }
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _details_card_details_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../details-card/details-card.component */ "./src/app/details/details-card/details-card.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var ionic4_rating__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ionic4-rating */ "./node_modules/ionic4-rating/dist/index.js");
/* harmony import */ var _yellowspot_ng_truncate__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @yellowspot/ng-truncate */ "./node_modules/@yellowspot/ng-truncate/fesm2015/yellowspot-ng-truncate.js");
/* harmony import */ var _slide_header_slide_header_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./slide-header/slide-header.module */ "./src/app/details/details-card/slide-header/slide-header.module.ts");









let DetailsCardModule = class DetailsCardModule {
};
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



/***/ }),

/***/ "./src/app/details/details-card/slide-header/slide-header.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/details/details-card/slide-header/slide-header.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host ion-slide {\n  height: inherit;\n  width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9taW9yZGFjaC9EZXNrdG9wL3ByYWN0aWNlL29yZGVyLW5vdy9zcmMvYXBwL2RldGFpbHMvZGV0YWlscy1jYXJkL3NsaWRlLWhlYWRlci9zbGlkZS1oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFUSxlQUFlO0VBQ2YsV0FBVyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvZGV0YWlscy9kZXRhaWxzLWNhcmQvc2xpZGUtaGVhZGVyL3NsaWRlLWhlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHsgXG4gICAgaW9uLXNsaWRlIHtcbiAgICAgICAgaGVpZ2h0OiBpbmhlcml0O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG59Il19 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SlideHeaderComponent = class SlideHeaderComponent {
    constructor() {
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
    ngOnInit() {
    }
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _slide_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./slide-header.component */ "./src/app/details/details-card/slide-header/slide-header.component.ts");






let SlideHeaderModule = class SlideHeaderModule {
};
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _details_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./details.page */ "./src/app/details/details.page.ts");








const routes = [
    {
        path: '',
        component: _details_page__WEBPACK_IMPORTED_MODULE_7__["DetailsPage"]
    }
];
let DetailsPageModule = class DetailsPageModule {
};
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let DetailsPage = class DetailsPage {
    constructor(route) {
        this.route = route;
    }
    ngOnInit() {
        this.restaurant = this.route.snapshot.data.restaurant;
    }
};
DetailsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
DetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-details',
        template: __webpack_require__(/*! raw-loader!./details.page.html */ "./node_modules/raw-loader/index.js!./src/app/details/details.page.html"),
        styles: [__webpack_require__(/*! ./details.page.scss */ "./src/app/details/details.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
], DetailsPage);



/***/ })

}]);
//# sourceMappingURL=details-details-module-es2015.js.map