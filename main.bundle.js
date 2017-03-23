webpackJsonp([1,4],{

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(477);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var totalResults = 0;
var SearchService = (function () {
    function SearchService(_http) {
        this._http = _http;
    }
    SearchService.prototype.getItems = function (from) {
        if (from === void 0) { from = 0; }
        var getItems = 'https://search-fittery-challenge-pv7vc3ugoko5hngpgxdh4szuqm.us-east-1.es.amazonaws.com/items/_search?q=is_live:true&_source_include=id,item_price,item_name,image&size=12&from=' + from;
        return this._http.get(getItems)
            .map(function (res) {
            totalResults = res.json().hits.total;
            return res.json().hits.hits;
        });
    };
    SearchService.prototype.getItemById = function (id) {
        var getItemsByIdURL = 'https://search-fittery-challenge-pv7vc3ugoko5hngpgxdh4szuqm.us-east-1.es.amazonaws.com/items/_search?q=id:' + id;
        return this._http.get(getItemsByIdURL)
            .map(function (res) { return res.json().hits.hits; });
    };
    SearchService.prototype.getTotalResults = function () {
        return totalResults;
    };
    SearchService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object])
    ], SearchService);
    return SearchService;
    var _a;
}());
//# sourceMappingURL=search.service.js.map

/***/ }),

/***/ 300:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 300;


/***/ }),

/***/ 301:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(382);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(413);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(416);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 412:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// Component
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
            selector: 'my-app',
            template: "\n    <h1 class=\"text-center\"><a [routerLink]=\"['/items', 0]\">Billy-Bob's warehouse</a></h1>\n    <router-outlet></router-outlet>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 413:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(412);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__items_grid_component__ = __webpack_require__(415);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__items_detail_component__ = __webpack_require__(414);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var routes = [
    { path: '', redirectTo: '/items/0', pathMatch: 'full' },
    { path: 'detail/:id', component: __WEBPACK_IMPORTED_MODULE_6__items_detail_component__["a" /* ItemsDetail */] },
    { path: 'items/:page', component: __WEBPACK_IMPORTED_MODULE_5__items_grid_component__["a" /* ItemsGrid */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */].forRoot(routes),
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__items_grid_component__["a" /* ItemsGrid */],
                __WEBPACK_IMPORTED_MODULE_6__items_detail_component__["a" /* ItemsDetail */]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 414:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search_service__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap__ = __webpack_require__(478);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemsDetail; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ItemsDetail = (function () {
    function ItemsDetail(route, searchService) {
        this.route = route;
        this.searchService = searchService;
        this.items = [];
    }
    ItemsDetail.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .map(function (params) { return params['id']; })
            .subscribe(function (id) {
            _this.searchService.getItemById(id)
                .subscribe(function (items) {
                _this.items = items;
            });
        });
    };
    ItemsDetail = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
            selector: 'items-detail-detail',
            template: __webpack_require__(472),
            providers: [__WEBPACK_IMPORTED_MODULE_2__search_service__["a" /* SearchService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__search_service__["a" /* SearchService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__search_service__["a" /* SearchService */]) === 'function' && _b) || Object])
    ], ItemsDetail);
    return ItemsDetail;
    var _a, _b;
}());
//# sourceMappingURL=items-detail.component.js.map

/***/ }),

/***/ 415:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search_service__ = __webpack_require__(270);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemsGrid; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// Component
var ItemsGrid = (function () {
    function ItemsGrid(route, searchService, router) {
        this.route = route;
        this.searchService = searchService;
        this.router = router;
        this.items = [];
    }
    ItemsGrid.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .map(function (params) { return params['page']; })
            .subscribe(function (page) {
            _this.searchService.getItems(page)
                .subscribe(function (items) {
                _this.items = items;
            });
        });
    };
    ItemsGrid.prototype.gotoNextPage = function () {
        var params = this.route.params;
        var currentPageNum = parseInt(params.getValue().page);
        var totalItemCount = this.searchService.getTotalResults();
        if (currentPageNum + 12 < totalItemCount) {
            this.router.navigate(['/items', currentPageNum + 12]);
        }
        else {
            this.router.navigate(['/items', totalItemCount - 12]);
        }
    };
    ItemsGrid.prototype.gotoPrevPage = function () {
        var params = this.route.params;
        var currentPageNum = parseInt(params.getValue().page);
        if (currentPageNum - 12 >= 0) {
            this.router.navigate(['/items', currentPageNum - 12]);
        }
        else {
            this.router.navigate(['/items', 0]);
        }
    };
    ItemsGrid = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
            selector: 'items-grid',
            template: __webpack_require__(473),
            styles: [__webpack_require__(470)],
            providers: [__WEBPACK_IMPORTED_MODULE_2__search_service__["a" /* SearchService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__search_service__["a" /* SearchService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__search_service__["a" /* SearchService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === 'function' && _c) || Object])
    ], ItemsGrid);
    return ItemsGrid;
    var _a, _b, _c;
}());
//# sourceMappingURL=items-grid.component.js.map

/***/ }),

/***/ 416:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 470:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(182)();
// imports


// module
exports.push([module.i, ".item {}\n\n.item small {\n  white-space: nowrap;\n  overflow: hidden;\n  width: 100%;\n  display: inline-block;\n  text-overflow: ellipsis;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 472:
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\" *ngIf=\"items\">\n  <div class=\"col-md-12\" *ngFor=\"let item of items\">\n\n    <div class=\"row\">\n\n      <figure class=\"col-md-3\">\n        <img class=\"img-responsive\" src=\"{{item._source.image}}\" />\n      </figure>\n\n      <section class=\"col-md-9\">\n        <header>\n          <h1>{{item._source.item_name}}</h1>\n        </header>\n        <p>{{item._source.description}}</p>\n        <h3><strong>{{item._source.item_price | currency:'USD':true }}</strong></h3>\n\n        <section class=\"col-md-6\" *ngIf=\"item._source.colors.length > 0\">\n          <h6>Colors</h6>\n          <ul>\n            <li *ngFor=\"let color of item._source.colors\">{{color}}</li>\n          </ul>\n        </section>\n\n        <section class=\"col-md-6\" *ngIf=\"item._source.patterns.length > 0\">\n          <h6>Patterns</h6>\n          <ul>\n            <li *ngFor=\"let pattern of item._source.patterns\">{{pattern}}</li>\n          </ul>\n        </section>\n\n      </section>\n\n    </div>\n\n  </div>\n</div>"

/***/ }),

/***/ 473:
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row\">\n\n    <div class=\"col-md-3 form-group\" *ngFor=\"let item of items\">\n      <a [routerLink]=\"['/detail', item._source.id]\" class=\"item\">\n\n        <figure>\n          <img class=\"img-responsive\" src=\"{{item._source.image}}\" />\n          <figcaption><small>{{item._source.item_name}}</small></figcaption>\n\n          <p><strong>{{item._source.item_price | currency:'USD':true }}</strong></p>\n        </figure>\n      </a>\n    </div>\n\n  </div>\n\n  <div class=\"row text-right form-group\">\n    <button class=\"btn btn-primary btn-lg\" (click)=\"gotoPrevPage()\">Previous</button>\n    <button class=\"btn btn-primary btn-lg\" (click)=\"gotoNextPage()\">Next</button>\n  </div>\n\n</div>"

/***/ }),

/***/ 493:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(301);


/***/ })

},[493]);
//# sourceMappingURL=main.bundle.js.map