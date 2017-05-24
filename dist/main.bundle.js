webpackJsonp([1,5],{

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CashComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CashComponent = (function () {
    function CashComponent() {
    }
    return CashComponent;
}());
CashComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'cash',
        template: __webpack_require__(551)
    })
], CashComponent);

//# sourceMappingURL=cash.component.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vendor_flot_jquery_flot_js__ = __webpack_require__(626);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vendor_flot_jquery_flot_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__vendor_flot_jquery_flot_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__vendor_flot_jquery_flot_tooltip_min_js__ = __webpack_require__(629);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__vendor_flot_jquery_flot_tooltip_min_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__vendor_flot_jquery_flot_tooltip_min_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__vendor_flot_jquery_flot_spline_js__ = __webpack_require__(627);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__vendor_flot_jquery_flot_spline_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__vendor_flot_jquery_flot_spline_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__vendor_flot_jquery_flot_time_js__ = __webpack_require__(628);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__vendor_flot_jquery_flot_time_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__vendor_flot_jquery_flot_time_js__);
/* unused harmony export FlotChartDirective */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlotModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// Import Chart.js library




var FlotChartDirective = (function () {
    function FlotChartDirective(element) {
        this.initFlag = false;
        this.element = element;
    }
    // Initialise
    FlotChartDirective.prototype.ngOnInit = function () {
        this.initFlag = true;
        if (this.options || this.dataset) {
            this.build();
        }
    };
    // Build
    FlotChartDirective.prototype.build = function () {
        // Clear before rebuild
        this.ngOnDestroy();
        // Check if Flot is available
        if (typeof jQuery.plot === 'undefined') {
            throw new Error('Configuration issue: Embedding jquery.flot.js lib is mandatory');
        }
        // Let's build chart
        this.chart = jQuery.plot(this.element.nativeElement, this.dataset, this.options);
    };
    // Change
    FlotChartDirective.prototype.ngOnChanges = function (changes) {
        if (this.initFlag) {
            // Check if the changes are in the datasets
            if (changes.hasOwnProperty('dataset')) {
                this.updateChartData(changes['dataset'].currentValue);
            }
            else {
                // Otherwise rebuild the chart
                this.build();
            }
        }
    };
    // Update
    FlotChartDirective.prototype.updateChartData = function (newDataValues) {
        this.chart.setData(newDataValues);
        this.chart.setupGrid();
        this.chart.draw();
    };
    // Destroy
    FlotChartDirective.prototype.ngOnDestroy = function () {
        if (this.chart) {
            this.chart.shutdown();
            this.chart = void 0;
        }
    };
    // Resize
    FlotChartDirective.prototype.onResize = function () {
        this.chart.resize();
        this.chart.setupGrid();
        this.chart.draw();
    };
    return FlotChartDirective;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], FlotChartDirective.prototype, "options", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], FlotChartDirective.prototype, "dataset", void 0);
FlotChartDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: 'div[flotChart]',
        exportAs: 'flot-chart',
        host: {
            '(window:resize)': 'onResize()'
        }
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object])
], FlotChartDirective);

var FlotModule = (function () {
    function FlotModule() {
    }
    return FlotModule;
}());
FlotModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            FlotChartDirective
        ],
        exports: [
            FlotChartDirective
        ],
        imports: []
    })
], FlotModule);

var _a;
//# sourceMappingURL=flotChart.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_helpers__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(7);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ClientsComponent = (function () {
    function ClientsComponent(db, router) {
        this.db = db;
        this.router = router;
        this.clients = db.list('/clients');
    }
    ClientsComponent.prototype.ngOnInit = function () {
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__app_helpers__["c" /* footable */])();
    };
    ClientsComponent.prototype.onAddSubmit = function () {
        var client = {
            name: this.name,
            phone: this.phone,
            email: this.email,
            status: this.status,
            address: "",
            orderHistory: "",
        };
        this.clients.push(client);
        //setTimeout(() => {
        //  this.router.navigate(['/chart']);
        //}, 2000);
    };
    return ClientsComponent;
}());
ClientsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'clients',
        template: __webpack_require__(552)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["b" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["b" /* AngularFireDatabase */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _b || Object])
], ClientsComponent);

var _a, _b;
//# sourceMappingURL=clients.component.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_helpers__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(7);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditClientComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EditClientComponent = (function () {
    function EditClientComponent(db, router, route) {
        this.db = db;
        this.router = router;
        this.route = route;
        /** Uploaded images server folder */
        this.uploadFolder = "";
    }
    EditClientComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.id = this.route.snapshot.params['id'];
        this.clients = this.db.list('/clients');
        this.client = this.db.object('/clients/' + this.id).subscribe(function (client) {
            _this.name = client.name;
            _this.phone = client.phone;
            _this.email = client.email;
            _this.status = client.status;
            _this.address = client.address;
            _this.orderHistory = client.orderHistory;
            //console.log(this.data);
            var markupStr = '' + _this.orderHistory;
            $('.summernote').summernote('code', markupStr);
        });
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__app_helpers__["d" /* summernote */])();
    };
    EditClientComponent.prototype.onSubmit = function () {
        //this.model.data = this.data;
    };
    EditClientComponent.prototype.onEditSubmit = function () {
        var markupStrIn = $('.summernote').summernote('code');
        var client = {
            name: this.name,
            phone: this.phone,
            email: this.email,
            status: this.status,
            address: this.address,
            orderHistory: markupStrIn,
        };
        //this.model.data = this.data;
        //console.log(this.model.data,44);
        console.log(markupStrIn, 44);
        this.clients.update(this.id, client);
        this.router.navigate(['/clients']);
    };
    return EditClientComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], EditClientComponent.prototype, "height", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], EditClientComponent.prototype, "minHeight", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], EditClientComponent.prototype, "maxHeight", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], EditClientComponent.prototype, "placeholder", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], EditClientComponent.prototype, "focus", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], EditClientComponent.prototype, "airMode", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], EditClientComponent.prototype, "dialogsInBody", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], EditClientComponent.prototype, "editable", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], EditClientComponent.prototype, "disableResizeEditor", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], EditClientComponent.prototype, "serverImgUp", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], EditClientComponent.prototype, "config", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], EditClientComponent.prototype, "hostUpload", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], EditClientComponent.prototype, "uploadFolder", void 0);
EditClientComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-edit-client-component',
        template: __webpack_require__(553)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["b" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["b" /* AngularFireDatabase */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object])
], EditClientComponent);

var _a, _b, _c;
//# sourceMappingURL=edit-client.component.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__iboxtools_component__ = __webpack_require__(376);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IboxtoolsModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var IboxtoolsModule = (function () {
    function IboxtoolsModule() {
    }
    return IboxtoolsModule;
}());
IboxtoolsModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [__WEBPACK_IMPORTED_MODULE_3__iboxtools_component__["a" /* IboxtoolsComponent */]],
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap__["a" /* BsDropdownModule */].forRoot()],
        exports: [__WEBPACK_IMPORTED_MODULE_3__iboxtools_component__["a" /* IboxtoolsComponent */]],
    })
], IboxtoolsModule);

//# sourceMappingURL=iboxtools.module.js.map

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_helpers__ = __webpack_require__(17);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BasicLayoutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var BasicLayoutComponent = (function () {
    function BasicLayoutComponent() {
    }
    BasicLayoutComponent.prototype.ngOnInit = function () {
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__app_helpers__["a" /* detectBody */])();
    };
    BasicLayoutComponent.prototype.onResize = function () {
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__app_helpers__["a" /* detectBody */])();
    };
    return BasicLayoutComponent;
}());
BasicLayoutComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'basic',
        template: __webpack_require__(556),
        host: {
            '(window:resize)': 'onResize()'
        }
    })
], BasicLayoutComponent);

//# sourceMappingURL=basicLayout.component.js.map

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlankLayoutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var BlankLayoutComponent = (function () {
    function BlankLayoutComponent() {
    }
    BlankLayoutComponent.prototype.ngAfterViewInit = function () {
        jQuery('body').addClass('gray-bg');
    };
    BlankLayoutComponent.prototype.ngOnDestroy = function () {
        jQuery('body').removeClass('gray-bg');
    };
    return BlankLayoutComponent;
}());
BlankLayoutComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'blank',
        template: __webpack_require__(557)
    })
], BlankLayoutComponent);

//# sourceMappingURL=blankLayout.component.js.map

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_helpers__ = __webpack_require__(17);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopNavigationLayoutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var TopNavigationLayoutComponent = (function () {
    function TopNavigationLayoutComponent() {
    }
    TopNavigationLayoutComponent.prototype.ngOnInit = function () {
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__app_helpers__["a" /* detectBody */])();
    };
    TopNavigationLayoutComponent.prototype.onResize = function () {
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__app_helpers__["a" /* detectBody */])();
    };
    return TopNavigationLayoutComponent;
}());
TopNavigationLayoutComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'topnavigationlayout',
        template: __webpack_require__(558),
        host: {
            '(window:resize)': 'onResize()'
        }
    })
], TopNavigationLayoutComponent);

//# sourceMappingURL=topNavigationlayout.component.js.map

/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(8);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DashboardComponent = (function () {
    function DashboardComponent(db) {
        var _this = this;
        this.db = db;
        this.infos = [];
        this.data1 = [
            [this.gd(2012, 1, 1), 7], [this.gd(2012, 1, 2), 6], [this.gd(2012, 1, 3), 4], [this.gd(2012, 1, 4), 8],
            [this.gd(2012, 1, 5), 9], [this.gd(2012, 1, 6), 7], [this.gd(2012, 1, 7), 5], [this.gd(2012, 1, 8), 4],
            [this.gd(2012, 1, 9), 7], [this.gd(2012, 1, 10), 8], [this.gd(2012, 1, 11), 9], [this.gd(2012, 1, 12), 6],
            [this.gd(2012, 1, 13), 4], [this.gd(2012, 1, 14), 5], [this.gd(2012, 1, 15), 11], [this.gd(2012, 1, 16), 8],
            [this.gd(2012, 1, 17), 8], [this.gd(2012, 1, 18), 11], [this.gd(2012, 1, 19), 11], [this.gd(2012, 1, 20), 6],
            [this.gd(2012, 1, 21), 6], [this.gd(2012, 1, 22), 8], [this.gd(2012, 1, 23), 11], [this.gd(2012, 1, 24), 13],
            [this.gd(2012, 1, 25), 7], [this.gd(2012, 1, 26), 9], [this.gd(2012, 1, 27), 9], [this.gd(2012, 1, 28), 8],
            [this.gd(2012, 1, 29), 5], [this.gd(2012, 1, 30), 8], [this.gd(2012, 1, 31), 25]
        ];
        this.data2 = this.infos;
        this.flotOptions = {
            xaxis: {
                mode: "time",
                tickSize: [30, "day"],
                tickLength: 0,
                axisLabel: "Date",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Arial',
                axisLabelPadding: 10,
                color: "#d5d5d5"
            },
            yaxes: [{
                    position: "left",
                    max: 1070,
                    color: "#d5d5d5",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Arial',
                    axisLabelPadding: 3
                }, {
                    position: "right",
                    clolor: "#d5d5d5",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: ' Arial',
                    axisLabelPadding: 67
                }
            ],
            legend: {
                noColumns: 1,
                labelBoxBorderColor: "#000000",
                position: "nw"
            },
            grid: {
                hoverable: false,
                borderWidth: 0
            }
        };
        // jVector Map options
        this.mapOptions = {
            map: 'world_mill_en',
            backgroundColor: "transparent",
            regionStyle: {
                initial: {
                    fill: '#e4e4e4',
                    "fill-opacity": 0.9,
                    stroke: 'none',
                    "stroke-width": 0,
                    "stroke-opacity": 0
                }
            },
            series: {
                regions: [{
                        values: {
                            "US": 298,
                            "SA": 200,
                            "DE": 220,
                            "FR": 540,
                            "CN": 120,
                            "AU": 760,
                            "BR": 550,
                            "IN": 200,
                            "GB": 120
                        },
                        scale: ["#1ab394", "#22d6b1"],
                        normalizeFunction: 'polynomial'
                    }]
            },
        };
        this.nav = document.querySelector('nav.navbar');
        this.todos = [
            { name: "Buy a milk", completed: true },
            { name: "Go to shop and find some products.", completed: false },
            { name: "Send documents to Mike ", completed: false, time: 1 },
            { name: "Go to the doctor dr Smith", completed: false },
            { name: "Plan vacation", completed: true },
            { name: "Create new stuff", completed: false },
            { name: "Call to Anna for dinner", completed: false },
        ];
        this.projects = db.list('/projects');
        this.mainData = db.object('/mainData').subscribe(function (client) {
            _this.orders = client.orders;
            _this.income = client.income;
            _this.visits = client.visits;
            _this.userActivity = client.userActivity;
        });
        console.log(this.orders, 55);
        this.ordersTable = db.list('/orders').subscribe(function (snapshots) {
            snapshots.forEach(function (snapshot) {
                var day = [];
                var split = snapshot.date.split(',');
                day.push(snapshot.date, 500);
                _this.infos.push([_this.gd(+split[0], +split[1], +split[2]), snapshot.orderSum]);
                console.log(snapshot.date, 32);
                console.log(day, 33);
                console.log(_this.infos, 34);
            });
            setTimeout(function () {
                _this.flotDataset = [
                    {
                        label: "Number of orders",
                        data: _this.infos,
                        color: "#1ab394",
                        bars: {
                            show: true,
                            align: "center",
                            barWidth: 24 * 60 * 60 * 600,
                            lineWidth: 0
                        }
                    }
                ];
            }, 3000);
        });
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.nav.className += " white-bg";
    };
    DashboardComponent.prototype.ngOnDestroy = function () {
        this.nav.classList.remove("white-bg");
    };
    // Flot chart data and options
    DashboardComponent.prototype.gd = function (year, month, day) {
        return new Date(year, month - 1, day).getTime();
    };
    DashboardComponent.prototype.monthSort = function () {
        console.log("Sort month");
        this.flotOptions =
            {
                xaxis: {
                    mode: "time",
                    tickSize: [30, "day"],
                    tickLength: 0,
                    axisLabel: "Date",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Arial',
                    axisLabelPadding: 10,
                    color: "#d5d5d5"
                },
                yaxes: [{
                        position: "left",
                        max: 1070,
                        color: "#d5d5d5",
                        axisLabelUseCanvas: true,
                        axisLabelFontSizePixels: 12,
                        axisLabelFontFamily: 'Arial',
                        axisLabelPadding: 3
                    }, {
                        position: "right",
                        clolor: "#d5d5d5",
                        axisLabelUseCanvas: true,
                        axisLabelFontSizePixels: 12,
                        axisLabelFontFamily: ' Arial',
                        axisLabelPadding: 67
                    }
                ],
                legend: {
                    noColumns: 1,
                    labelBoxBorderColor: "#000000",
                    position: "nw"
                },
                grid: {
                    hoverable: false,
                    borderWidth: 0
                }
            };
        //this.ordersTable.subscribe(snapshots => {
        //
        //
        //  snapshots.forEach(snapshot => {
        //    let day = [];
        //    let split = snapshot.date.split(',');
        //    day.push(snapshot.date, 500);
        //    this.infos.push([this.gd(+split[0], +split[1], +split[2]), snapshot.orderSum]);
        //    console.log(snapshot.date,32);
        //    console.log(day,33);
        //    console.log(this.infos,34);
        //  });
        //
        //  setTimeout(()=>{
        //    this.flotDataset = [
        //      {
        //        label: "Number of orders",
        //        data: this.infos,
        //        color: "#1ab394",
        //        bars: {
        //          show: true,
        //          align: "center",
        //          barWidth: 24 * 60 * 60 * 600,
        //          lineWidth: 0
        //        }
        //
        //      }
        //    ];
        //  },5000)
        //
        //
        //
        //});
    };
    DashboardComponent.prototype.yearsSort = function () {
        console.log("Sort month");
        this.flotOptions =
            {
                xaxis: {
                    mode: "time",
                    tickSize: [365, "day"],
                    tickLength: 0,
                    axisLabel: "Date",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Arial',
                    axisLabelPadding: 10,
                    color: "#d5d5d5"
                },
                yaxes: [{
                        position: "left",
                        max: 1070,
                        color: "#d5d5d5",
                        axisLabelUseCanvas: true,
                        axisLabelFontSizePixels: 12,
                        axisLabelFontFamily: 'Arial',
                        axisLabelPadding: 3
                    }, {
                        position: "right",
                        clolor: "#d5d5d5",
                        axisLabelUseCanvas: true,
                        axisLabelFontSizePixels: 12,
                        axisLabelFontFamily: ' Arial',
                        axisLabelPadding: 67
                    }
                ],
                legend: {
                    noColumns: 1,
                    labelBoxBorderColor: "#000000",
                    position: "nw"
                },
                grid: {
                    hoverable: false,
                    borderWidth: 0
                }
            };
    };
    DashboardComponent.prototype.daySort = function () {
        console.log("Sort month");
        this.flotOptions =
            {
                xaxis: {
                    mode: "time",
                    tickSize: [3, "day"],
                    tickLength: 0,
                    axisLabel: "Date",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Arial',
                    axisLabelPadding: 10,
                    color: "#d5d5d5"
                },
                yaxes: [{
                        position: "left",
                        max: 1070,
                        color: "#d5d5d5",
                        axisLabelUseCanvas: true,
                        axisLabelFontSizePixels: 12,
                        axisLabelFontFamily: 'Arial',
                        axisLabelPadding: 3
                    }, {
                        position: "right",
                        clolor: "#d5d5d5",
                        axisLabelUseCanvas: true,
                        axisLabelFontSizePixels: 12,
                        axisLabelFontFamily: ' Arial',
                        axisLabelPadding: 67
                    }
                ],
                legend: {
                    noColumns: 1,
                    labelBoxBorderColor: "#000000",
                    position: "nw"
                },
                grid: {
                    hoverable: false,
                    borderWidth: 0
                }
            };
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'dashboard',
        template: __webpack_require__(562)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["b" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["b" /* AngularFireDatabase */]) === "function" && _a || Object])
], DashboardComponent);

var _a;
//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_cookies__ = __webpack_require__(517);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_cookies___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_cookies__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_user_service__ = __webpack_require__(60);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginUserComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginUserComponent = (function () {
    function LoginUserComponent(afAuth, db, router, userService) {
        this.afAuth = afAuth;
        this.db = db;
        this.router = router;
        this.userService = userService;
        this.state = '';
        this.user = afAuth.authState;
        this.users = db.list('/users');
    }
    LoginUserComponent.prototype.onSubmit = function (formData) {
        var _this = this;
        if (formData.valid) {
            var name_1 = formData.value.name;
            var email = formData.value.email;
            var password = formData.value.password;
            this.afAuth.auth.signInWithEmailAndPassword(email, password).then(function (success) {
                console.log(success);
                _this.user.subscribe(function (data) {
                    if (data && data.email) {
                        _this.users.subscribe(function (snapshots) {
                            var flag;
                            snapshots.forEach(function (snapshot) {
                                if (snapshot.name === name_1) {
                                    flag = true;
                                    console.log(snapshot.email, data.email, name_1, snapshot.name);
                                    console.log("Пользователь залогинелся!");
                                    var userInfo = {
                                        email: snapshot.email,
                                    };
                                    _this.userService.addUser(userInfo);
                                    console.log(userInfo, 44);
                                    _this.router.navigate(['/dashboards/main-view']);
                                }
                                else {
                                    console.log("Вы ввели неверный логин!");
                                }
                            });
                        });
                    }
                    else {
                        console.log(2);
                    }
                });
            }).catch(function (err) {
                console.log(err);
                _this.error = err;
            });
        }
    };
    LoginUserComponent.prototype.logout = function () {
        this.afAuth.auth.signOut();
        console.log("Пользователь вышел!");
        this.router.navigate(['/dashboards/main-view']);
        __WEBPACK_IMPORTED_MODULE_4_ng2_cookies__["Cookie"].set("User", null);
    };
    LoginUserComponent.prototype.ngOnInit = function () {
    };
    return LoginUserComponent;
}());
LoginUserComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-email',
        template: __webpack_require__(563),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["b" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["b" /* AngularFireAuth */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["b" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["b" /* AngularFireDatabase */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__shared_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__shared_user_service__["a" /* UserService */]) === "function" && _d || Object])
], LoginUserComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_jvectormap_jquery_jvectormap_min_js__ = __webpack_require__(511);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_jvectormap_jquery_jvectormap_min_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__node_modules_jvectormap_jquery_jvectormap_min_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_jvectormap_tests_assets_jquery_jvectormap_world_mill_en_js__ = __webpack_require__(512);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_jvectormap_tests_assets_jquery_jvectormap_world_mill_en_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__node_modules_jvectormap_tests_assets_jquery_jvectormap_world_mill_en_js__);
/* unused harmony export JVectorMapDirective */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JVectorMapModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// Import Chart.js library


var JVectorMapDirective = (function () {
    function JVectorMapDirective(element) {
        this.initFlag = false;
        this.element = element;
    }
    // Initialise
    JVectorMapDirective.prototype.ngOnInit = function () {
        this.initFlag = true;
        if (this.options) {
            this.build();
        }
    };
    // Build
    JVectorMapDirective.prototype.build = function () {
        // Clear before rebuild
        this.ngOnDestroy();
        // Check if Flot is available
        if (typeof jQuery(this.element.nativeElement).vectorMap === 'undefined') {
            throw new Error('Configuration issue: Embedding jvectormap lib is mandatory');
        }
        // Let's build chart
        this.map = jQuery(this.element.nativeElement).vectorMap(this.options);
    };
    // Change
    JVectorMapDirective.prototype.ngOnChanges = function (changes) {
        if (this.initFlag) {
            this.build();
        }
    };
    // Destroy
    JVectorMapDirective.prototype.ngOnDestroy = function () {
        if (this.map) {
            this.map.remove();
        }
    };
    return JVectorMapDirective;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], JVectorMapDirective.prototype, "options", void 0);
JVectorMapDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: 'div[jvectormap]',
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object])
], JVectorMapDirective);

var JVectorMapModule = (function () {
    function JVectorMapModule() {
    }
    return JVectorMapModule;
}());
JVectorMapModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            JVectorMapDirective
        ],
        exports: [
            JVectorMapDirective
        ],
        imports: []
    })
], JVectorMapModule);

var _a;
//# sourceMappingURL=jvectorMap.js.map

/***/ }),

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessagesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MessagesComponent = (function () {
    function MessagesComponent() {
    }
    return MessagesComponent;
}());
MessagesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'messages',
        template: __webpack_require__(564),
        styles: [__webpack_require__(497)]
    })
], MessagesComponent);

//# sourceMappingURL=messages.component.js.map

/***/ }),

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(7);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditOrderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EditOrderComponent = (function () {
    function EditOrderComponent(db, router, route) {
        this.db = db;
        this.router = router;
        this.route = route;
        this.data = 'appendix';
        this.model = {
            data: this.data,
        };
        /** Uploaded images server folder */
        this.uploadFolder = "";
    }
    EditOrderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.id = this.route.snapshot.params['id'];
        this.orders = this.db.list('/orders');
        this.order = this.db.object('/orders/' + this.id).subscribe(function (order) {
            _this.clientName = order.clientName;
            _this.products = order.products;
            _this.quantity = order.quantity;
            _this.paid = order.paid;
            _this.priceMethod = order.priceMethod;
            _this.notes = order.notes;
            _this.ticketNumber = order.ticketNumber;
            _this.status = order.status;
        });
    };
    EditOrderComponent.prototype.onSubmit = function () {
        this.model.data = this.data;
    };
    EditOrderComponent.prototype.onEditSubmit = function () {
        var order = {
            clientName: this.clientName,
            products: this.products,
            quantity: this.quantity,
            paid: this.paid,
            priceMethod: this.priceMethod,
            notes: this.notes,
            ticketNumber: this.ticketNumber,
            status: this.status,
        };
        this.orders.update(this.id, order);
        this.router.navigate(['/orders']);
    };
    return EditOrderComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], EditOrderComponent.prototype, "height", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], EditOrderComponent.prototype, "minHeight", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], EditOrderComponent.prototype, "maxHeight", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], EditOrderComponent.prototype, "placeholder", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], EditOrderComponent.prototype, "focus", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], EditOrderComponent.prototype, "airMode", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], EditOrderComponent.prototype, "dialogsInBody", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], EditOrderComponent.prototype, "editable", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], EditOrderComponent.prototype, "disableResizeEditor", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], EditOrderComponent.prototype, "serverImgUp", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], EditOrderComponent.prototype, "config", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], EditOrderComponent.prototype, "hostUpload", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], EditOrderComponent.prototype, "uploadFolder", void 0);
EditOrderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-edit-order-component',
        template: __webpack_require__(565)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["b" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["b" /* AngularFireDatabase */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object])
], EditOrderComponent);

var _a, _b, _c;
//# sourceMappingURL=edit-order.component.js.map

/***/ }),

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_helpers__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(7);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrdersComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var OrdersComponent = (function () {
    function OrdersComponent(db, router) {
        this.db = db;
        this.router = router;
        this.orders = db.list('/orders');
    }
    OrdersComponent.prototype.ngOnInit = function () {
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__app_helpers__["c" /* footable */])();
    };
    OrdersComponent.prototype.onAddSubmit = function () {
        var order = {
            orderId: this.orderId,
            clientName: this.clientName,
            status: this.status,
            paid: this.paid,
            products: "",
            quantity: "",
            priceMethod: "",
            notes: "",
            ticketNumber: "",
            date: "2016, 12, 30",
            orderSum: '800'
        };
        this.orders.push(order);
    };
    return OrdersComponent;
}());
OrdersComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'orders',
        template: __webpack_require__(566)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["b" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["b" /* AngularFireDatabase */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _b || Object])
], OrdersComponent);

var _a, _b;
//# sourceMappingURL=orders.component.js.map

/***/ }),

/***/ 122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymentComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PaymentComponent = (function () {
    function PaymentComponent() {
    }
    return PaymentComponent;
}());
PaymentComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'payment',
        template: __webpack_require__(567)
    })
], PaymentComponent);

//# sourceMappingURL=payment.component.js.map

/***/ }),

/***/ 123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(7);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PreferencesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PreferencesComponent = (function () {
    function PreferencesComponent(db, router, route) {
        this.db = db;
        this.router = router;
        this.route = route;
        this.data = 'appendix';
        this.model = {
            data: this.data,
        };
        /** Uploaded images server folder */
        this.uploadFolder = "";
    }
    PreferencesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.id = this.route.snapshot.params['id'];
        this.users = this.db.list('/users');
        this.user = this.db.object('/users/' + this.id).subscribe(function (user) {
            _this.name = user.name;
            _this.phone = user.phone;
            _this.email = user.email;
            _this.status = user.status;
            _this.address = user.address;
            _this.country = user.country;
        });
    };
    PreferencesComponent.prototype.onSubmit = function () {
        this.model.data = this.data;
    };
    PreferencesComponent.prototype.onEditSubmit = function () {
        var user = {
            name: this.name,
            phone: this.phone,
            email: this.email,
            status: this.status,
            address: this.address,
            country: this.country,
        };
        this.users.update(this.id, user);
        this.router.navigate(['/clients']);
    };
    return PreferencesComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], PreferencesComponent.prototype, "hostUpload", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], PreferencesComponent.prototype, "uploadFolder", void 0);
PreferencesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'preferences',
        template: __webpack_require__(568),
        styles: [__webpack_require__(498)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["b" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["b" /* AngularFireDatabase */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object])
], PreferencesComponent);

var _a, _b, _c;
//# sourceMappingURL=preferences.component.js.map

/***/ }),

/***/ 124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(7);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditProductComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EditProductComponent = (function () {
    function EditProductComponent(db, router, route) {
        this.db = db;
        this.router = router;
        this.route = route;
        this.data = 'appendix';
        this.model = {
            data: this.data,
        };
        /** Uploaded images server folder */
        this.uploadFolder = "";
    }
    EditProductComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.id = this.route.snapshot.params['id'];
        this.products = this.db.list('/products');
        this.product = this.db.object('/products/' + this.id).subscribe(function (product) {
            _this.name = product.name;
            _this.price = product.price;
            _this.quantity = product.quantity;
            _this.description = product.description;
            _this.category = product.category;
            _this.tag = product.tag;
        });
    };
    EditProductComponent.prototype.onSubmit = function () {
        this.model.data = this.data;
    };
    EditProductComponent.prototype.onEditSubmit = function () {
        var client = {
            name: this.name,
            price: this.price,
            quantity: this.quantity,
            description: this.description,
            category: this.category,
            tag: this.tag,
        };
        this.products.update(this.id, client);
        this.router.navigate(['/products']);
    };
    return EditProductComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], EditProductComponent.prototype, "height", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], EditProductComponent.prototype, "minHeight", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], EditProductComponent.prototype, "maxHeight", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], EditProductComponent.prototype, "placeholder", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], EditProductComponent.prototype, "focus", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], EditProductComponent.prototype, "airMode", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], EditProductComponent.prototype, "dialogsInBody", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], EditProductComponent.prototype, "editable", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], EditProductComponent.prototype, "disableResizeEditor", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], EditProductComponent.prototype, "serverImgUp", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], EditProductComponent.prototype, "config", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], EditProductComponent.prototype, "hostUpload", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], EditProductComponent.prototype, "uploadFolder", void 0);
EditProductComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-edit-product-component',
        template: __webpack_require__(569)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["b" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["b" /* AngularFireDatabase */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object])
], EditProductComponent);

var _a, _b, _c;
//# sourceMappingURL=edit-product.component.js.map

/***/ }),

/***/ 125:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_helpers__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(7);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProductsComponent = (function () {
    function ProductsComponent(db, router) {
        this.db = db;
        this.router = router;
        this.products = db.list('/products');
    }
    ProductsComponent.prototype.ngOnInit = function () {
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__app_helpers__["c" /* footable */])();
    };
    ProductsComponent.prototype.onAddSubmit = function () {
        var product = {
            name: this.name,
            price: this.price,
            quantity: this.quantity,
            description: "",
            category: "",
            tag: "",
        };
        this.products.push(product);
    };
    return ProductsComponent;
}());
ProductsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'products',
        template: __webpack_require__(570)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["b" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["b" /* AngularFireDatabase */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _b || Object])
], ProductsComponent);

var _a, _b;
//# sourceMappingURL=product.component.js.map

/***/ }),

/***/ 126:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_user_service__ = __webpack_require__(60);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProfilComponent = (function () {
    function ProfilComponent(afAuth, db, router, route, userService) {
        this.afAuth = afAuth;
        this.db = db;
        this.router = router;
        this.route = route;
        this.userService = userService;
        /** Uploaded images server folder */
        this.uploadFolder = "";
        this.userAf = this.afAuth.authState;
        this.users = db.list('/users');
    }
    ProfilComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.id = this.route.snapshot.params['id'];
        this.users = this.db.list('/users');
        this.user = this.db.object('/users/' + this.id).subscribe(function (user) {
            _this.name = user.name;
            _this.phone = user.phone;
            _this.email = user.email;
            _this.status = user.status;
            _this.address = user.address;
            _this.country = user.country;
        });
        this.obj = this.userService.getUser();
        console.log(this.obj.email);
    };
    ProfilComponent.prototype.onEditSubmit = function () {
        var user = {
            name: this.name,
            phone: this.phone,
            email: this.email,
            status: this.status,
            address: this.address,
            country: this.country,
        };
        this.users.update(this.id, user);
        this.router.navigate(['/profil']);
    };
    return ProfilComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], ProfilComponent.prototype, "hostUpload", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], ProfilComponent.prototype, "uploadFolder", void 0);
ProfilComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'preferences',
        template: __webpack_require__(571),
        styles: [__webpack_require__(499)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["b" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["b" /* AngularFireAuth */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["b" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["b" /* AngularFireDatabase */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__shared_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared_user_service__["a" /* UserService */]) === "function" && _e || Object])
], ProfilComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=profil.component.js.map

/***/ }),

/***/ 127:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_helpers__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(7);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProjectsComponent = (function () {
    function ProjectsComponent(db, router) {
        this.db = db;
        this.router = router;
        this.projects = db.list('/projects');
    }
    ProjectsComponent.prototype.ngOnInit = function () {
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__app_helpers__["c" /* footable */])();
    };
    ProjectsComponent.prototype.onAddSubmit = function () {
        var project = {
            project: this.project,
            name: this.name,
            phone: this.phone,
            company: this.company,
            completed: this.completed,
            task: this.task,
            date: this.date,
            action: this.action,
        };
        this.projects.push(project);
    };
    return ProjectsComponent;
}());
ProjectsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'projects',
        template: __webpack_require__(572)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["b" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["b" /* AngularFireDatabase */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _b || Object])
], ProjectsComponent);

var _a, _b;
//# sourceMappingURL=projects.component.js.map

/***/ }),

/***/ 128:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(7);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SignupComponent = (function () {
    function SignupComponent(afAuth, db, router) {
        this.afAuth = afAuth;
        this.db = db;
        this.router = router;
        this.state = '';
        this.users = db.list('/users');
    }
    SignupComponent.prototype.onSubmit = function (formData) {
        var _this = this;
        if (formData.valid) {
            console.log(formData.value);
            var name_1 = formData.value.name;
            var email_1 = formData.value.email;
            var password_1 = formData.value.password;
            this.afAuth.auth.createUserWithEmailAndPassword(email_1, password_1).then(function (success) {
                _this.users.push({
                    name: name_1,
                    email: email_1,
                    password: password_1,
                });
                console.log("Пользователь создан!");
                _this.router.navigate(['/dashboards/main-view']);
            }).catch(function (err) {
                _this.error = err;
            });
        }
    };
    SignupComponent.prototype.ngOnInit = function () {
    };
    return SignupComponent;
}());
SignupComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-signup',
        template: __webpack_require__(573),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["b" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["b" /* AngularFireAuth */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["b" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["b" /* AngularFireDatabase */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _c || Object])
], SignupComponent);

var _a, _b, _c;
//# sourceMappingURL=signup.component.js.map

/***/ }),

/***/ 129:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(8);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StarterViewComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StarterViewComponent = (function () {
    function StarterViewComponent(db) {
        this.nav = document.querySelector('nav.navbar');
        this.items = db.list('/users');
    }
    StarterViewComponent.prototype.ngOnInit = function () {
        this.nav.className += " white-bg";
    };
    StarterViewComponent.prototype.ngOnDestroy = function () {
        this.nav.classList.remove("white-bg");
    };
    return StarterViewComponent;
}());
StarterViewComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'starter',
        template: __webpack_require__(575)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["b" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["b" /* AngularFireDatabase */]) === "function" && _a || Object])
], StarterViewComponent);

var _a;
//# sourceMappingURL=starterview.component.js.map

/***/ }),

/***/ 130:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_chart_js__ = __webpack_require__(390);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_chart_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_chart_js__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Dashboard1Component; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

// Import Chart.js library

var Dashboard1Component = (function () {
    function Dashboard1Component() {
        // Dounghunt chart
        this.doughnutChartType = 'doughnut';
        this.doughnutChartLabels1 = ['App', 'Software', 'Laptop'];
        this.doughnutChartData1 = [70, 27, 85];
        this.doughnutChartLabels2 = ['App', 'Software', 'Laptop'];
        this.doughnutChartData2 = [300, 50, 100];
        this.colors = [{ backgroundColor: ["#a3e1d4", "#dedede", "#9CC3DA"] }];
        // Main Chart
        this.flotDataset = [
            [[0, 4], [1, 8], [2, 5], [3, 10], [4, 4], [5, 16], [6, 5], [7, 11], [8, 6], [9, 11], [10, 30], [11, 10], [12, 13], [13, 4], [14, 3], [15, 3], [16, 6]],
            [[0, 1], [1, 0], [2, 2], [3, 0], [4, 1], [5, 3], [6, 1], [7, 5], [8, 2], [9, 3], [10, 2], [11, 1], [12, 0], [13, 2], [14, 8], [15, 0], [16, 0]]
        ];
        this.flotOptions = {
            series: { splines: { show: true, tension: 0.4, lineWidth: 1, fill: 0.4 }, },
            grid: { tickColor: "#d5d5d5", borderWidth: 1, color: '#d5d5d5' },
            colors: ["#1ab394", "#1C84C6"],
        };
        // Peity chart
        this.peityType1 = "bar";
        this.peityOptions1 = { fill: ["#1ab394", "#d7d7d7"], width: 100 };
        this.peityType2 = "line";
        this.peityOptions2 = { fill: '#1ab394', stroke: '#169c81', width: 64 };
        // Sparkline chart
        this.sparklineData = [5, 6, 7, 2, 0, 4, 2, 4, 5, 7, 2, 4, 12, 14, 4, 2, 14, 12, 7];
        this.sparklineOptions = { type: 'bar', barWidth: 8, height: '150px', barColor: '#1ab394', negBarColor: '#c6c6c6' };
    }
    return Dashboard1Component;
}());
Dashboard1Component = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'dashboard1',
        template: __webpack_require__(576)
    })
], Dashboard1Component);

//# sourceMappingURL=dashboard1.component.js.map

/***/ }),

/***/ 131:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Dashboard2Component; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Dashboard2Component = (function () {
    function Dashboard2Component() {
        this.data1 = [
            [this.gd(2012, 1, 1), 7], [this.gd(2012, 1, 2), 6], [this.gd(2012, 1, 3), 4], [this.gd(2012, 1, 4), 8],
            [this.gd(2012, 1, 5), 9], [this.gd(2012, 1, 6), 7], [this.gd(2012, 1, 7), 5], [this.gd(2012, 1, 8), 4],
            [this.gd(2012, 1, 9), 7], [this.gd(2012, 1, 10), 8], [this.gd(2012, 1, 11), 9], [this.gd(2012, 1, 12), 6],
            [this.gd(2012, 1, 13), 4], [this.gd(2012, 1, 14), 5], [this.gd(2012, 1, 15), 11], [this.gd(2012, 1, 16), 8],
            [this.gd(2012, 1, 17), 8], [this.gd(2012, 1, 18), 11], [this.gd(2012, 1, 19), 11], [this.gd(2012, 1, 20), 6],
            [this.gd(2012, 1, 21), 6], [this.gd(2012, 1, 22), 8], [this.gd(2012, 1, 23), 11], [this.gd(2012, 1, 24), 13],
            [this.gd(2012, 1, 25), 7], [this.gd(2012, 1, 26), 9], [this.gd(2012, 1, 27), 9], [this.gd(2012, 1, 28), 8],
            [this.gd(2012, 1, 29), 5], [this.gd(2012, 1, 30), 8], [this.gd(2012, 1, 31), 25]
        ];
        this.data2 = [
            [this.gd(2012, 1, 1), 800], [this.gd(2012, 1, 2), 500], [this.gd(2012, 1, 3), 600], [this.gd(2012, 1, 4), 700],
            [this.gd(2012, 1, 5), 500], [this.gd(2012, 1, 6), 456], [this.gd(2012, 1, 7), 800], [this.gd(2012, 1, 8), 589],
            [this.gd(2012, 1, 9), 467], [this.gd(2012, 1, 10), 876], [this.gd(2012, 1, 11), 689], [this.gd(2012, 1, 12), 700],
            [this.gd(2012, 1, 13), 500], [this.gd(2012, 1, 14), 600], [this.gd(2012, 1, 15), 700], [this.gd(2012, 1, 16), 786],
            [this.gd(2012, 1, 17), 345], [this.gd(2012, 1, 18), 888], [this.gd(2012, 1, 19), 888], [this.gd(2012, 1, 20), 888],
            [this.gd(2012, 1, 21), 987], [this.gd(2012, 1, 22), 444], [this.gd(2012, 1, 23), 999], [this.gd(2012, 1, 24), 567],
            [this.gd(2012, 1, 25), 786], [this.gd(2012, 1, 26), 666], [this.gd(2012, 1, 27), 888], [this.gd(2012, 1, 28), 900],
            [this.gd(2012, 1, 29), 178], [this.gd(2012, 1, 30), 555], [this.gd(2012, 1, 31), 993]
        ];
        this.flotDataset = [
            {
                label: "Number of orders",
                data: this.data2,
                color: "#1ab394",
                bars: {
                    show: true,
                    align: "center",
                    barWidth: 24 * 60 * 60 * 600,
                    lineWidth: 0
                }
            }, {
                label: "Payments",
                data: this.data1,
                yaxis: 2,
                color: "#1C84C6",
                lines: {
                    lineWidth: 1,
                    show: true,
                    fill: true,
                    fillColor: {
                        colors: [{
                                opacity: 0.2
                            }, {
                                opacity: 0.4
                            }]
                    }
                },
                splines: {
                    show: false,
                    tension: 0.6,
                    lineWidth: 1,
                    fill: 0.1
                },
            }
        ];
        this.flotOptions = {
            xaxis: {
                mode: "time",
                tickSize: [3, "day"],
                tickLength: 0,
                axisLabel: "Date",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Arial',
                axisLabelPadding: 10,
                color: "#d5d5d5"
            },
            yaxes: [{
                    position: "left",
                    max: 1070,
                    color: "#d5d5d5",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Arial',
                    axisLabelPadding: 3
                }, {
                    position: "right",
                    clolor: "#d5d5d5",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: ' Arial',
                    axisLabelPadding: 67
                }
            ],
            legend: {
                noColumns: 1,
                labelBoxBorderColor: "#000000",
                position: "nw"
            },
            grid: {
                hoverable: false,
                borderWidth: 0
            }
        };
        // jVector Map options
        this.mapOptions = {
            map: 'world_mill_en',
            backgroundColor: "transparent",
            regionStyle: {
                initial: {
                    fill: '#e4e4e4',
                    "fill-opacity": 0.9,
                    stroke: 'none',
                    "stroke-width": 0,
                    "stroke-opacity": 0
                }
            },
            series: {
                regions: [{
                        values: {
                            "US": 298,
                            "SA": 200,
                            "DE": 220,
                            "FR": 540,
                            "CN": 120,
                            "AU": 760,
                            "BR": 550,
                            "IN": 200,
                            "GB": 120
                        },
                        scale: ["#1ab394", "#22d6b1"],
                        normalizeFunction: 'polynomial'
                    }]
            },
        };
        this.nav = document.querySelector('nav.navbar');
        this.todos = [
            { name: "Buy a milk", completed: true },
            { name: "Go to shop and find some products.", completed: false },
            { name: "Send documents to Mike ", completed: false, time: 1 },
            { name: "Go to the doctor dr Smith", completed: false },
            { name: "Plan vacation", completed: true },
            { name: "Create new stuff", completed: false },
            { name: "Call to Anna for dinner", completed: false },
        ];
    }
    Dashboard2Component.prototype.ngOnInit = function () {
        this.nav.className += " white-bg";
    };
    Dashboard2Component.prototype.ngOnDestroy = function () {
        this.nav.classList.remove("white-bg");
    };
    // Flot chart data and options
    Dashboard2Component.prototype.gd = function (year, month, day) {
        return new Date(year, month - 1, day).getTime();
    };
    return Dashboard2Component;
}());
Dashboard2Component = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'dashboard2',
        template: __webpack_require__(577)
    }),
    __metadata("design:paramtypes", [])
], Dashboard2Component);

//# sourceMappingURL=dashboard2.component.js.map

/***/ }),

/***/ 132:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Dashboard3Component; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Dashboard3Component = (function () {
    function Dashboard3Component() {
        this.lineChartData = [
            { data: [28, 48, 40, 19, 86, 27, 90], label: 'Example data 1' },
            { data: [65, 59, 80, 81, 56, 55, 40], label: 'Example data 2' },
        ];
        this.lineChartLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
        this.lineChartType = 'line';
        this.lineChartColors = [
            {
                backgroundColor: "rgba(26,179,148,0.5)",
                borderColor: "rgba(26,179,148,0.7)",
                pointBackgroundColor: "rgba(26,179,148,1)",
                pointBorderColor: "#fff",
            },
            {
                backgroundColor: "rgba(220,220,220,0.5)",
                borderColor: "rgba(220,220,220,1)",
                pointBackgroundColor: "rgba(220,220,220,1)",
                pointBorderColor: "#fff",
            }
        ];
        this.peityType1 = "bar";
        this.peityType2 = "line";
        this.peityOptions1 = { fill: ["#1ab394", "#d7d7d7"], width: 100 };
        this.peityOptions2 = { fill: ["#1ab394", "#d7d7d7"] };
        this.peityOptions3 = { fill: '#1ab394', stroke: '#169c81' };
        this.nav = document.querySelector('nav.navbar');
        this.wrapper = document.getElementById('page-wrapper');
    }
    Dashboard3Component.prototype.ngOnInit = function () {
        this.nav.className += " white-bg";
        this.wrapper.className += " sidebar-content";
    };
    Dashboard3Component.prototype.ngOnDestroy = function () {
        this.nav.classList.remove("white-bg");
        this.wrapper.classList.remove("sidebar-content");
    };
    return Dashboard3Component;
}());
Dashboard3Component = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'dashboard3',
        template: __webpack_require__(578)
    }),
    __metadata("design:paramtypes", [])
], Dashboard3Component);

//# sourceMappingURL=dashboard3.component.js.map

/***/ }),

/***/ 133:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Dashboard4Component; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Dashboard4Component = (function () {
    function Dashboard4Component() {
        this.lineChartData = [
            { data: [48, 48, 60, 39, 56, 37, 30], label: 'Example data 1' },
            { data: [65, 59, 40, 51, 36, 25, 40], label: 'Example data 2' },
        ];
        this.lineChartLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
        this.lineChartType = 'line';
        this.lineChartColors = [
            {
                backgroundColor: "rgba(26,179,148,0.5)",
                borderColor: "rgba(26,179,148,0.7)",
                pointBackgroundColor: "rgba(26,179,148,1)",
                pointBorderColor: "#fff",
            },
            {
                backgroundColor: "rgba(220,220,220,0.5)",
                borderColor: "rgba(220,220,220,1)",
                pointBackgroundColor: "rgba(220,220,220,1)",
                pointBorderColor: "#fff",
            }
        ];
        this.flotDataset = [
            { label: "Data 1", data: [[1262304000000, 6], [1264982400000, 3057], [1267401600000, 20434], [1270080000000, 31982], [1272672000000, 26602], [1275350400000, 27826], [1277942400000, 24302], [1280620800000, 24237], [1283299200000, 21004], [1285891200000, 12144], [1288569600000, 10577], [1291161600000, 10295]], color: '#17a084' },
            { label: "Data 2", data: [[1262304000000, 5], [1264982400000, 200], [1267401600000, 1605], [1270080000000, 6129], [1272672000000, 11643], [1275350400000, 19055], [1277942400000, 30062], [1280620800000, 39197], [1283299200000, 37000], [1285891200000, 27000], [1288569600000, 21000], [1291161600000, 17000]], color: '#127e68' }
        ];
        this.flotOptions = {
            xaxis: {
                tickDecimals: 0
            },
            series: {
                lines: {
                    show: true,
                    fill: true,
                    fillColor: {
                        colors: [{
                                opacity: 1
                            }, {
                                opacity: 1
                            }]
                    },
                },
                points: {
                    width: 0.1,
                    show: false
                },
            },
            grid: {
                show: false,
                borderWidth: 0
            },
            legend: {
                show: false,
            }
        };
        this.peityType = "pie";
        this.peityOptions = { fill: ['#1ab394', '#d7d7d7', '#ffffff'] };
        this.nav = document.querySelector('nav.navbar');
    }
    Dashboard4Component.prototype.ngOnInit = function () {
        this.nav.className += " white-bg";
    };
    Dashboard4Component.prototype.ngOnDestroy = function () {
        this.nav.classList.remove("white-bg");
    };
    return Dashboard4Component;
}());
Dashboard4Component = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'dashboard4',
        template: __webpack_require__(579)
    }),
    __metadata("design:paramtypes", [])
], Dashboard4Component);

//# sourceMappingURL=dashboard4.component.js.map

/***/ }),

/***/ 134:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Dashboard41Component; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Dashboard41Component = (function () {
    function Dashboard41Component() {
        this.lineChartData = [
            { data: [48, 48, 60, 39, 56, 37, 30], label: 'Example data 1' },
            { data: [65, 59, 40, 51, 36, 25, 40], label: 'Example data 2' },
        ];
        this.lineChartLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
        this.lineChartType = 'line';
        this.lineChartColors = [
            {
                backgroundColor: "rgba(26,179,148,0.5)",
                borderColor: "rgba(26,179,148,0.7)",
                pointBackgroundColor: "rgba(26,179,148,1)",
                pointBorderColor: "#fff",
            },
            {
                backgroundColor: "rgba(220,220,220,0.5)",
                borderColor: "rgba(220,220,220,1)",
                pointBackgroundColor: "rgba(220,220,220,1)",
                pointBorderColor: "#fff",
            }
        ];
        this.flotDataset = [
            { label: "Data 1", data: [[1262304000000, 6], [1264982400000, 3057], [1267401600000, 20434], [1270080000000, 31982], [1272672000000, 26602], [1275350400000, 27826], [1277942400000, 24302], [1280620800000, 24237], [1283299200000, 21004], [1285891200000, 12144], [1288569600000, 10577], [1291161600000, 10295]], color: '#17a084' },
            { label: "Data 2", data: [[1262304000000, 5], [1264982400000, 200], [1267401600000, 1605], [1270080000000, 6129], [1272672000000, 11643], [1275350400000, 19055], [1277942400000, 30062], [1280620800000, 39197], [1283299200000, 37000], [1285891200000, 27000], [1288569600000, 21000], [1291161600000, 17000]], color: '#127e68' }
        ];
        this.flotOptions = {
            xaxis: {
                tickDecimals: 0
            },
            series: {
                lines: {
                    show: true,
                    fill: true,
                    fillColor: {
                        colors: [{
                                opacity: 1
                            }, {
                                opacity: 1
                            }]
                    },
                },
                points: {
                    width: 0.1,
                    show: false
                },
            },
            grid: {
                show: false,
                borderWidth: 0
            },
            legend: {
                show: false,
            }
        };
        this.peityType = "pie";
        this.peityOptions = { fill: ['#1ab394', '#d7d7d7', '#ffffff'] };
        this.nav = document.querySelector('nav.navbar');
        this.body = document.querySelector("body");
    }
    Dashboard41Component.prototype.ngOnInit = function () {
        this.nav.className += " white-bg";
        this.body.className += " top-navigation";
    };
    Dashboard41Component.prototype.ngOnDestroy = function () {
        this.nav.classList.remove("white-bg");
        this.body.classList.remove("top-navigation");
    };
    return Dashboard41Component;
}());
Dashboard41Component = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'dashboard41',
        template: __webpack_require__(580)
    }),
    __metadata("design:paramtypes", [])
], Dashboard41Component);

//# sourceMappingURL=dashboard41.component.js.map

/***/ }),

/***/ 135:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Dashboard5Component; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Dashboard5Component = (function () {
    function Dashboard5Component() {
        this.flotDataset = [
            [[0, 4], [1, 8], [2, 5], [3, 10], [4, 4], [5, 16], [6, 5], [7, 11], [8, 6], [9, 11], [10, 20], [11, 10], [12, 13], [13, 4], [14, 7], [15, 8], [16, 12]],
            [[0, 0], [1, 2], [2, 7], [3, 4], [4, 11], [5, 4], [6, 2], [7, 5], [8, 11], [9, 5], [10, 4], [11, 1], [12, 5], [13, 2], [14, 5], [15, 2], [16, 0]]
        ];
        this.flotOptions = {
            series: {
                lines: {
                    show: false,
                    fill: true
                },
                splines: {
                    show: true,
                    tension: 0.4,
                    lineWidth: 1,
                    fill: 0.4
                },
                points: {
                    radius: 0,
                    show: true
                },
                shadowSize: 2
            },
            grid: {
                hoverable: true,
                clickable: true,
                borderWidth: 2,
                color: 'transparent'
            },
            colors: ["#1ab394", "#1C84C6"],
            xaxis: {},
            yaxis: {},
            tooltip: false
        };
        this.sparklineData = [34, 43, 43, 35, 44, 32, 44, 52];
        this.sparklineData2 = [32, 11, 25, 37, 41, 32, 34, 42];
        this.sparklineOptions = { type: 'line', width: '100%', height: '50', lineColor: '#1ab394', fillColor: "transparent" };
        this.nav = document.querySelector('nav.navbar');
    }
    Dashboard5Component.prototype.ngOnInit = function () {
        this.nav.className += " white-bg";
    };
    Dashboard5Component.prototype.ngOnDestroy = function () {
        this.nav.classList.remove("white-bg");
    };
    return Dashboard5Component;
}());
Dashboard5Component = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'dashboard5',
        template: __webpack_require__(581)
    }),
    __metadata("design:paramtypes", [])
], Dashboard5Component);

//# sourceMappingURL=dashboard5.component.js.map

/***/ }),

/***/ 17:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export correctHeight */
/* harmony export (immutable) */ __webpack_exports__["a"] = detectBody;
/* harmony export (immutable) */ __webpack_exports__["b"] = smoothlyMenu;
/* harmony export (immutable) */ __webpack_exports__["c"] = footable;
/* harmony export (immutable) */ __webpack_exports__["d"] = summernote;
/*
 * Inspinia js helpers:
 *
 * correctHeight() - fix the height of main wrapper
 * detectBody() - detect windows size
 * smoothlyMenu() - add smooth fade in/out on navigation show/ide
 *
 */
function correctHeight() {
    var pageWrapper = jQuery('#page-wrapper');
    var navbarHeight = jQuery('nav.navbar-default').height();
    var wrapperHeight = pageWrapper.height();
    if (navbarHeight > wrapperHeight) {
        pageWrapper.css("min-height", navbarHeight + "px");
    }
    if (navbarHeight <= wrapperHeight) {
        if (navbarHeight < jQuery(window).height()) {
            pageWrapper.css("min-height", jQuery(window).height() + "px");
        }
        else {
            pageWrapper.css("min-height", navbarHeight + "px");
        }
    }
    if (jQuery('body').hasClass('fixed-nav')) {
        if (navbarHeight > wrapperHeight) {
            pageWrapper.css("min-height", navbarHeight + "px");
        }
        else {
            pageWrapper.css("min-height", jQuery(window).height() - 60 + "px");
        }
    }
}
function detectBody() {
    if (jQuery(document).width() < 769) {
        jQuery('body').addClass('body-small');
    }
    else {
        jQuery('body').removeClass('body-small');
    }
}
function smoothlyMenu() {
    if (!jQuery('body').hasClass('mini-navbar') || jQuery('body').hasClass('body-small')) {
        // Hide menu in order to smoothly turn on when maximize menu
        jQuery('#side-menu').hide();
        // For smoothly turn on menu
        setTimeout(function () {
            jQuery('#side-menu').fadeIn(400);
        }, 200);
    }
    else if (jQuery('body').hasClass('fixed-sidebar')) {
        jQuery('#side-menu').hide();
        setTimeout(function () {
            jQuery('#side-menu').fadeIn(400);
        }, 100);
    }
    else {
        // Remove all inline style from jquery fadeIn function to reset menu state
        jQuery('#side-menu').removeAttr('style');
    }
}
function footable() {
    $('.footable').footable();
}
function summernote() {
    $('.summernote').summernote();
}
//# sourceMappingURL=app.helpers.js.map

/***/ }),

/***/ 352:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 352;


/***/ }),

/***/ 353:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(370);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(373);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(384);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 372:
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

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(550),
        styles: [__webpack_require__(496)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 373:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_routes__ = __webpack_require__(374);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(372);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2__ = __webpack_require__(388);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angularfire2_database__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angularfire2_auth__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_signup_signup_component__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_login_login_component__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_dashboard_dashboard_component__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_cash_cash_component__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_clients_clients_component__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_clients_edit_client_edit_client_component__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_products_product_component__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_products_edit_product_edit_product_component__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_orders_orders_component__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_orders_edit_order_edit_order_component__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_preferences_preferences_component__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_projects_projects_component__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_profil_profil_component__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_shared_user_service__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_payment_payment_component__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_messages_messages_component__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27_ng2_summernote_ng2_summernote__ = __webpack_require__(371);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28_ng2_charts_ng2_charts__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28_ng2_charts_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_28_ng2_charts_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__components_charts_flotChart__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__components_common_iboxtools_iboxtools_module__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__components_charts_peity__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__components_charts_sparkline__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__components_map_jvectorMap__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__views_dashboards_dashboards_module__ = __webpack_require__(383);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__views_appviews_appviews_module__ = __webpack_require__(381);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__components_common_layouts_layouts_module__ = __webpack_require__(377);
/* unused harmony export firebaseConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


































// App views


// App modules/components

// Must export the config
var firebaseConfig = {
    apiKey: "AIzaSyDV8ZIYD4c7rNFMdORcEFl-7TApLXZBxqE",
    authDomain: "inspinia-58904.firebaseapp.com",
    databaseURL: "https://inspinia-58904.firebaseio.com",
    projectId: "inspinia-58904",
    storageBucket: "inspinia-58904.appspot.com",
    messagingSenderId: "157737978226"
};
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_27_ng2_summernote_ng2_summernote__["a" /* Ng2Summernote */],
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_signup_signup_component__["a" /* SignupComponent */],
            __WEBPACK_IMPORTED_MODULE_12__components_login_login_component__["a" /* LoginUserComponent */],
            __WEBPACK_IMPORTED_MODULE_13__components_dashboard_dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_14__components_cash_cash_component__["a" /* CashComponent */],
            __WEBPACK_IMPORTED_MODULE_15__components_clients_clients_component__["a" /* ClientsComponent */],
            __WEBPACK_IMPORTED_MODULE_16__components_clients_edit_client_edit_client_component__["a" /* EditClientComponent */],
            __WEBPACK_IMPORTED_MODULE_17__components_products_product_component__["a" /* ProductsComponent */],
            __WEBPACK_IMPORTED_MODULE_18__components_products_edit_product_edit_product_component__["a" /* EditProductComponent */],
            __WEBPACK_IMPORTED_MODULE_19__components_orders_orders_component__["a" /* OrdersComponent */],
            __WEBPACK_IMPORTED_MODULE_20__components_orders_edit_order_edit_order_component__["a" /* EditOrderComponent */],
            __WEBPACK_IMPORTED_MODULE_21__components_preferences_preferences_component__["a" /* PreferencesComponent */],
            __WEBPACK_IMPORTED_MODULE_22__components_projects_projects_component__["a" /* ProjectsComponent */],
            __WEBPACK_IMPORTED_MODULE_23__components_profil_profil_component__["a" /* ProfilComponent */],
            __WEBPACK_IMPORTED_MODULE_25__components_payment_payment_component__["a" /* PaymentComponent */],
            __WEBPACK_IMPORTED_MODULE_26__components_messages_messages_component__["a" /* MessagesComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_34__views_dashboards_dashboards_module__["a" /* DashboardsModule */],
            __WEBPACK_IMPORTED_MODULE_36__components_common_layouts_layouts_module__["a" /* LayoutsModule */],
            __WEBPACK_IMPORTED_MODULE_35__views_appviews_appviews_module__["a" /* AppviewsModule */],
            __WEBPACK_IMPORTED_MODULE_28_ng2_charts_ng2_charts__["ChartsModule"], __WEBPACK_IMPORTED_MODULE_29__components_charts_flotChart__["a" /* FlotModule */], __WEBPACK_IMPORTED_MODULE_30__components_common_iboxtools_iboxtools_module__["a" /* IboxtoolsModule */], __WEBPACK_IMPORTED_MODULE_31__components_charts_peity__["a" /* PeityModule */], __WEBPACK_IMPORTED_MODULE_32__components_charts_sparkline__["a" /* SparklineModule */], __WEBPACK_IMPORTED_MODULE_33__components_map_jvectorMap__["a" /* JVectorMapModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_routes__["a" /* ROUTES */]),
            __WEBPACK_IMPORTED_MODULE_8_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig),
            __WEBPACK_IMPORTED_MODULE_10_angularfire2_auth__["a" /* AngularFireAuthModule */],
            __WEBPACK_IMPORTED_MODULE_9_angularfire2_database__["a" /* AngularFireDatabaseModule */]
        ],
        providers: [{ provide: __WEBPACK_IMPORTED_MODULE_5__angular_common__["a" /* LocationStrategy */], useClass: __WEBPACK_IMPORTED_MODULE_5__angular_common__["b" /* HashLocationStrategy */] }, __WEBPACK_IMPORTED_MODULE_24__components_shared_user_service__["a" /* UserService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 374:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__views_dashboards_dashboard1_component__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__views_dashboards_dashboard2_component__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__views_dashboards_dashboard3_component__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__views_dashboards_dashboard4_component__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__views_dashboards_dashboard41_component__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__views_dashboards_dashboard5_component__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__views_appviews_starterview_component__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_common_layouts_blankLayout_component__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_common_layouts_basicLayout_component__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_common_layouts_topNavigationlayout_component__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_signup_signup_component__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_login_login_component__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_dashboard_dashboard_component__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_cash_cash_component__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_clients_clients_component__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_clients_edit_client_edit_client_component__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_products_product_component__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_products_edit_product_edit_product_component__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_orders_orders_component__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_orders_edit_order_edit_order_component__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_preferences_preferences_component__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_projects_projects_component__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_profil_profil_component__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_payment_payment_component__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_messages_messages_component__ = __webpack_require__(119);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ROUTES; });

























var ROUTES = [
    // Main redirect
    { path: '', redirectTo: 'dashboards/main-view', pathMatch: 'full' },
    // App views
    {
        path: 'dashboards', component: __WEBPACK_IMPORTED_MODULE_8__components_common_layouts_basicLayout_component__["a" /* BasicLayoutComponent */],
        children: [
            { path: 'main-view', component: __WEBPACK_IMPORTED_MODULE_12__components_dashboard_dashboard_component__["a" /* DashboardComponent */] },
            { path: 'cash', component: __WEBPACK_IMPORTED_MODULE_13__components_cash_cash_component__["a" /* CashComponent */] },
            { path: 'dashboard1', component: __WEBPACK_IMPORTED_MODULE_0__views_dashboards_dashboard1_component__["a" /* Dashboard1Component */] },
            { path: 'dashboard2', component: __WEBPACK_IMPORTED_MODULE_1__views_dashboards_dashboard2_component__["a" /* Dashboard2Component */] },
            { path: 'dashboard3', component: __WEBPACK_IMPORTED_MODULE_2__views_dashboards_dashboard3_component__["a" /* Dashboard3Component */] },
            { path: 'dashboard4', component: __WEBPACK_IMPORTED_MODULE_3__views_dashboards_dashboard4_component__["a" /* Dashboard4Component */] },
            { path: 'dashboard5', component: __WEBPACK_IMPORTED_MODULE_5__views_dashboards_dashboard5_component__["a" /* Dashboard5Component */] }
        ]
    },
    {
        path: 'preferences', component: __WEBPACK_IMPORTED_MODULE_8__components_common_layouts_basicLayout_component__["a" /* BasicLayoutComponent */],
        children: [
            { path: 'profil', component: __WEBPACK_IMPORTED_MODULE_22__components_profil_profil_component__["a" /* ProfilComponent */] },
            { path: 'payment', component: __WEBPACK_IMPORTED_MODULE_23__components_payment_payment_component__["a" /* PaymentComponent */] },
            { path: 'messages', component: __WEBPACK_IMPORTED_MODULE_24__components_messages_messages_component__["a" /* MessagesComponent */] },
        ]
    },
    {
        path: 'dashboards', component: __WEBPACK_IMPORTED_MODULE_9__components_common_layouts_topNavigationlayout_component__["a" /* TopNavigationLayoutComponent */],
        children: [
            { path: 'dashboard41', component: __WEBPACK_IMPORTED_MODULE_4__views_dashboards_dashboard41_component__["a" /* Dashboard41Component */] }
        ]
    },
    {
        path: '', component: __WEBPACK_IMPORTED_MODULE_8__components_common_layouts_basicLayout_component__["a" /* BasicLayoutComponent */],
        children: [
            { path: 'starterview', component: __WEBPACK_IMPORTED_MODULE_6__views_appviews_starterview_component__["a" /* StarterViewComponent */] },
            { path: 'clients', component: __WEBPACK_IMPORTED_MODULE_14__components_clients_clients_component__["a" /* ClientsComponent */] },
            { path: 'clients/:id', component: __WEBPACK_IMPORTED_MODULE_15__components_clients_edit_client_edit_client_component__["a" /* EditClientComponent */] },
            { path: 'products', component: __WEBPACK_IMPORTED_MODULE_16__components_products_product_component__["a" /* ProductsComponent */] },
            { path: 'products/:id', component: __WEBPACK_IMPORTED_MODULE_17__components_products_edit_product_edit_product_component__["a" /* EditProductComponent */] },
            { path: 'orders', component: __WEBPACK_IMPORTED_MODULE_18__components_orders_orders_component__["a" /* OrdersComponent */] },
            { path: 'orders/:id', component: __WEBPACK_IMPORTED_MODULE_19__components_orders_edit_order_edit_order_component__["a" /* EditOrderComponent */] },
            { path: 'preferences', component: __WEBPACK_IMPORTED_MODULE_20__components_preferences_preferences_component__["a" /* PreferencesComponent */] },
            { path: 'projects', component: __WEBPACK_IMPORTED_MODULE_21__components_projects_projects_component__["a" /* ProjectsComponent */] },
        ]
    },
    {
        path: '', component: __WEBPACK_IMPORTED_MODULE_7__components_common_layouts_blankLayout_component__["a" /* BlankLayoutComponent */],
        children: [
            { path: 'login', component: __WEBPACK_IMPORTED_MODULE_11__components_login_login_component__["a" /* LoginUserComponent */] },
            { path: 'register', component: __WEBPACK_IMPORTED_MODULE_10__components_signup_signup_component__["a" /* SignupComponent */] },
        ]
    },
    // Handle all other routes
    { path: '**', redirectTo: 'dashboards/main-view' }
];
//# sourceMappingURL=app.routes.js.map

/***/ }),

/***/ 375:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    return FooterComponent;
}());
FooterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'footer',
        template: __webpack_require__(554)
    })
], FooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ 376:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IboxtoolsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var IboxtoolsComponent = (function () {
    function IboxtoolsComponent() {
    }
    IboxtoolsComponent.prototype.collapse = function (e) {
        e.preventDefault();
        var ibox = jQuery(e.target).closest('div.ibox');
        var button = jQuery(e.target).closest('i');
        var content = ibox.children('.ibox-content');
        content.slideToggle(200);
        button.toggleClass('fa-chevron-up').toggleClass('fa-chevron-down');
        ibox.toggleClass('').toggleClass('border-bottom');
        setTimeout(function () {
            ibox.resize();
            ibox.find('[id^=map-]').resize();
        }, 50);
    };
    IboxtoolsComponent.prototype.close = function (e) {
        e.preventDefault();
        var content = jQuery(e.target).closest('div.ibox');
        content.remove();
    };
    return IboxtoolsComponent;
}());
IboxtoolsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'iboxtools',
        template: __webpack_require__(555)
    })
], IboxtoolsComponent);

//# sourceMappingURL=iboxtools.component.js.map

/***/ }),

/***/ 377:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__basicLayout_component__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__blankLayout_component__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__topNavigationlayout_component__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__navigation_navigation_component__ = __webpack_require__(378);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__footer_footer_component__ = __webpack_require__(375);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__topnavbar_topnavbar_component__ = __webpack_require__(379);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__topnavbar_topnavigationnavbar_component__ = __webpack_require__(380);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LayoutsModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var LayoutsModule = (function () {
    function LayoutsModule() {
    }
    return LayoutsModule;
}());
LayoutsModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_8__footer_footer_component__["a" /* FooterComponent */],
            __WEBPACK_IMPORTED_MODULE_4__basicLayout_component__["a" /* BasicLayoutComponent */],
            __WEBPACK_IMPORTED_MODULE_5__blankLayout_component__["a" /* BlankLayoutComponent */],
            __WEBPACK_IMPORTED_MODULE_7__navigation_navigation_component__["a" /* NavigationComponent */],
            __WEBPACK_IMPORTED_MODULE_6__topNavigationlayout_component__["a" /* TopNavigationLayoutComponent */],
            __WEBPACK_IMPORTED_MODULE_9__topnavbar_topnavbar_component__["a" /* TopNavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_10__topnavbar_topnavigationnavbar_component__["a" /* TopNavigationNavbarComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */],
            __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap__["a" /* BsDropdownModule */].forRoot()
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_8__footer_footer_component__["a" /* FooterComponent */],
            __WEBPACK_IMPORTED_MODULE_4__basicLayout_component__["a" /* BasicLayoutComponent */],
            __WEBPACK_IMPORTED_MODULE_5__blankLayout_component__["a" /* BlankLayoutComponent */],
            __WEBPACK_IMPORTED_MODULE_7__navigation_navigation_component__["a" /* NavigationComponent */],
            __WEBPACK_IMPORTED_MODULE_6__topNavigationlayout_component__["a" /* TopNavigationLayoutComponent */],
            __WEBPACK_IMPORTED_MODULE_9__topnavbar_topnavbar_component__["a" /* TopNavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_10__topnavbar_topnavigationnavbar_component__["a" /* TopNavigationNavbarComponent */]
        ],
    })
], LayoutsModule);

//# sourceMappingURL=layouts.module.js.map

/***/ }),

/***/ 378:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery_slimscroll__ = __webpack_require__(510);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery_slimscroll___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_jquery_slimscroll__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavigationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavigationComponent = (function () {
    function NavigationComponent(router) {
        this.router = router;
    }
    NavigationComponent.prototype.ngAfterViewInit = function () {
        jQuery('#side-menu').metisMenu();
        if (jQuery("body").hasClass('fixed-sidebar')) {
            jQuery('.sidebar-collapse').slimscroll({
                height: '100%'
            });
        }
    };
    NavigationComponent.prototype.activeRoute = function (routename) {
        return this.router.url.indexOf(routename) > -1;
    };
    return NavigationComponent;
}());
NavigationComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'navigation',
        template: __webpack_require__(559)
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object])
], NavigationComponent);

var _a;
//# sourceMappingURL=navigation.component.js.map

/***/ }),

/***/ 379:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_helpers__ = __webpack_require__(17);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopNavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var TopNavbarComponent = (function () {
    function TopNavbarComponent() {
    }
    TopNavbarComponent.prototype.toggleNavigation = function () {
        jQuery("body").toggleClass("mini-navbar");
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__app_helpers__["b" /* smoothlyMenu */])();
    };
    return TopNavbarComponent;
}());
TopNavbarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'topnavbar',
        template: __webpack_require__(560)
    })
], TopNavbarComponent);

//# sourceMappingURL=topnavbar.component.js.map

/***/ }),

/***/ 380:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_helpers__ = __webpack_require__(17);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopNavigationNavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var TopNavigationNavbarComponent = (function () {
    function TopNavigationNavbarComponent() {
    }
    TopNavigationNavbarComponent.prototype.toggleNavigation = function () {
        jQuery("body").toggleClass("mini-navbar");
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__app_helpers__["b" /* smoothlyMenu */])();
    };
    return TopNavigationNavbarComponent;
}());
TopNavigationNavbarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'topnavigationnavbar',
        template: __webpack_require__(561)
    })
], TopNavigationNavbarComponent);

//# sourceMappingURL=topnavigationnavbar.component.js.map

/***/ }),

/***/ 381:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__starterview_component__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_component__ = __webpack_require__(382);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_charts_peity__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_charts_sparkline__ = __webpack_require__(59);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppviewsModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppviewsModule = (function () {
    function AppviewsModule() {
    }
    return AppviewsModule;
}());
AppviewsModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__starterview_component__["a" /* StarterViewComponent */],
            __WEBPACK_IMPORTED_MODULE_4__login_component__["a" /* LoginComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */],
            __WEBPACK_IMPORTED_MODULE_5__components_charts_peity__["a" /* PeityModule */],
            __WEBPACK_IMPORTED_MODULE_6__components_charts_sparkline__["a" /* SparklineModule */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_3__starterview_component__["a" /* StarterViewComponent */],
            __WEBPACK_IMPORTED_MODULE_4__login_component__["a" /* LoginComponent */]
        ],
    })
], AppviewsModule);

//# sourceMappingURL=appviews.module.js.map

/***/ }),

/***/ 382:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var LoginComponent = (function () {
    function LoginComponent() {
    }
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'login',
        template: __webpack_require__(574)
    })
], LoginComponent);

//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ 383:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard1_component__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dashboard2_component__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dashboard3_component__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__dashboard4_component__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__dashboard41_component__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__dashboard5_component__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_charts_ng2_charts__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_charts_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_ng2_charts_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_charts_flotChart__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_common_iboxtools_iboxtools_module__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_charts_peity__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_charts_sparkline__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_map_jvectorMap__ = __webpack_require__(118);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardsModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








// Chart.js Angular 2 Directive by Valor Software (npm)






var DashboardsModule = (function () {
    function DashboardsModule() {
    }
    return DashboardsModule;
}());
DashboardsModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [__WEBPACK_IMPORTED_MODULE_2__dashboard1_component__["a" /* Dashboard1Component */], __WEBPACK_IMPORTED_MODULE_3__dashboard2_component__["a" /* Dashboard2Component */], __WEBPACK_IMPORTED_MODULE_4__dashboard3_component__["a" /* Dashboard3Component */], __WEBPACK_IMPORTED_MODULE_5__dashboard4_component__["a" /* Dashboard4Component */], __WEBPACK_IMPORTED_MODULE_6__dashboard41_component__["a" /* Dashboard41Component */], __WEBPACK_IMPORTED_MODULE_7__dashboard5_component__["a" /* Dashboard5Component */]],
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_8_ng2_charts_ng2_charts__["ChartsModule"], __WEBPACK_IMPORTED_MODULE_9__components_charts_flotChart__["a" /* FlotModule */], __WEBPACK_IMPORTED_MODULE_10__components_common_iboxtools_iboxtools_module__["a" /* IboxtoolsModule */], __WEBPACK_IMPORTED_MODULE_11__components_charts_peity__["a" /* PeityModule */], __WEBPACK_IMPORTED_MODULE_12__components_charts_sparkline__["a" /* SparklineModule */], __WEBPACK_IMPORTED_MODULE_13__components_map_jvectorMap__["a" /* JVectorMapModule */]],
        exports: [__WEBPACK_IMPORTED_MODULE_2__dashboard1_component__["a" /* Dashboard1Component */], __WEBPACK_IMPORTED_MODULE_3__dashboard2_component__["a" /* Dashboard2Component */], __WEBPACK_IMPORTED_MODULE_4__dashboard3_component__["a" /* Dashboard3Component */], __WEBPACK_IMPORTED_MODULE_5__dashboard4_component__["a" /* Dashboard4Component */], __WEBPACK_IMPORTED_MODULE_6__dashboard41_component__["a" /* Dashboard41Component */], __WEBPACK_IMPORTED_MODULE_7__dashboard5_component__["a" /* Dashboard5Component */]],
    })
], DashboardsModule);

//# sourceMappingURL=dashboards.module.js.map

/***/ }),

/***/ 384:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyDV8ZIYD4c7rNFMdORcEFl-7TApLXZBxqE",
        authDomain: "inspinia-58904.firebaseapp.com",
        databaseURL: "https://inspinia-58904.firebaseio.com",
        projectId: "inspinia-58904",
        storageBucket: "inspinia-58904.appspot.com",
        messagingSenderId: "157737978226"
    }
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 496:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 497:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)(false);
// imports


// module
exports.push([module.i, ".message {\r\n  max-width: 600px;\r\n  margin: 0 auto;\r\n  display: block;\r\n  padding: 20px;\r\n}\r\n.message .main {\r\n  background: #fff;\r\n  border: 1px solid #e9e9e9;\r\n  border-radius: 3px;\r\n}\r\n.message .content-wrap {\r\n  padding: 20px;\r\n}\r\n.message table td {\r\n  vertical-align: top;\r\n}\r\n.message .content-block {\r\n  padding: 0 0 20px;\r\n}\r\n\r\n.message .alert.alert-good {\r\n  background: #1ab394;\r\n}\r\n.message .alert {\r\n  font-size: 16px;\r\n  color: #fff;\r\n  font-weight: 500;\r\n  padding: 20px;\r\n  text-align: center;\r\n  border-radius: 3px 3px 0 0;\r\n}\r\n.message .btn-primary {\r\n  text-decoration: none;\r\n  color: #FFF;\r\n  background-color: #1ab394;\r\n  border: solid #1ab394;\r\n  border-width: 5px 10px;\r\n  line-height: 2;\r\n  font-weight: bold;\r\n  text-align: center;\r\n  cursor: pointer;\r\n  display: inline-block;\r\n  border-radius: 5px;\r\n  text-transform: capitalize;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 498:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)(false);
// imports


// module
exports.push([module.i, ".message {\r\n  max-width: 600px;\r\n  margin: 0 auto;\r\n  display: block;\r\n  padding: 20px;\r\n}\r\n.message .main {\r\n  background: #fff;\r\n  border: 1px solid #e9e9e9;\r\n  border-radius: 3px;\r\n}\r\n.message .content-wrap {\r\n  padding: 20px;\r\n}\r\n.message table td {\r\n  vertical-align: top;\r\n}\r\n.message .content-block {\r\n  padding: 0 0 20px;\r\n}\r\n\r\n.message .alert.alert-good {\r\n  background: #1ab394;\r\n}\r\n.message .alert {\r\n  font-size: 16px;\r\n  color: #fff;\r\n  font-weight: 500;\r\n  padding: 20px;\r\n  text-align: center;\r\n  border-radius: 3px 3px 0 0;\r\n}\r\n.message .btn-primary {\r\n  text-decoration: none;\r\n  color: #FFF;\r\n  background-color: #1ab394;\r\n  border: solid #1ab394;\r\n  border-width: 5px 10px;\r\n  line-height: 2;\r\n  font-weight: bold;\r\n  text-align: center;\r\n  cursor: pointer;\r\n  display: inline-block;\r\n  border-radius: 5px;\r\n  text-transform: capitalize;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 499:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 513:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 159,
	"./af.js": 159,
	"./ar": 166,
	"./ar-dz": 160,
	"./ar-dz.js": 160,
	"./ar-kw": 161,
	"./ar-kw.js": 161,
	"./ar-ly": 162,
	"./ar-ly.js": 162,
	"./ar-ma": 163,
	"./ar-ma.js": 163,
	"./ar-sa": 164,
	"./ar-sa.js": 164,
	"./ar-tn": 165,
	"./ar-tn.js": 165,
	"./ar.js": 166,
	"./az": 167,
	"./az.js": 167,
	"./be": 168,
	"./be.js": 168,
	"./bg": 169,
	"./bg.js": 169,
	"./bn": 170,
	"./bn.js": 170,
	"./bo": 171,
	"./bo.js": 171,
	"./br": 172,
	"./br.js": 172,
	"./bs": 173,
	"./bs.js": 173,
	"./ca": 174,
	"./ca.js": 174,
	"./cs": 175,
	"./cs.js": 175,
	"./cv": 176,
	"./cv.js": 176,
	"./cy": 177,
	"./cy.js": 177,
	"./da": 178,
	"./da.js": 178,
	"./de": 181,
	"./de-at": 179,
	"./de-at.js": 179,
	"./de-ch": 180,
	"./de-ch.js": 180,
	"./de.js": 181,
	"./dv": 182,
	"./dv.js": 182,
	"./el": 183,
	"./el.js": 183,
	"./en-au": 184,
	"./en-au.js": 184,
	"./en-ca": 185,
	"./en-ca.js": 185,
	"./en-gb": 186,
	"./en-gb.js": 186,
	"./en-ie": 187,
	"./en-ie.js": 187,
	"./en-nz": 188,
	"./en-nz.js": 188,
	"./eo": 189,
	"./eo.js": 189,
	"./es": 191,
	"./es-do": 190,
	"./es-do.js": 190,
	"./es.js": 191,
	"./et": 192,
	"./et.js": 192,
	"./eu": 193,
	"./eu.js": 193,
	"./fa": 194,
	"./fa.js": 194,
	"./fi": 195,
	"./fi.js": 195,
	"./fo": 196,
	"./fo.js": 196,
	"./fr": 199,
	"./fr-ca": 197,
	"./fr-ca.js": 197,
	"./fr-ch": 198,
	"./fr-ch.js": 198,
	"./fr.js": 199,
	"./fy": 200,
	"./fy.js": 200,
	"./gd": 201,
	"./gd.js": 201,
	"./gl": 202,
	"./gl.js": 202,
	"./gom-latn": 203,
	"./gom-latn.js": 203,
	"./he": 204,
	"./he.js": 204,
	"./hi": 205,
	"./hi.js": 205,
	"./hr": 206,
	"./hr.js": 206,
	"./hu": 207,
	"./hu.js": 207,
	"./hy-am": 208,
	"./hy-am.js": 208,
	"./id": 209,
	"./id.js": 209,
	"./is": 210,
	"./is.js": 210,
	"./it": 211,
	"./it.js": 211,
	"./ja": 212,
	"./ja.js": 212,
	"./jv": 213,
	"./jv.js": 213,
	"./ka": 214,
	"./ka.js": 214,
	"./kk": 215,
	"./kk.js": 215,
	"./km": 216,
	"./km.js": 216,
	"./kn": 217,
	"./kn.js": 217,
	"./ko": 218,
	"./ko.js": 218,
	"./ky": 219,
	"./ky.js": 219,
	"./lb": 220,
	"./lb.js": 220,
	"./lo": 221,
	"./lo.js": 221,
	"./lt": 222,
	"./lt.js": 222,
	"./lv": 223,
	"./lv.js": 223,
	"./me": 224,
	"./me.js": 224,
	"./mi": 225,
	"./mi.js": 225,
	"./mk": 226,
	"./mk.js": 226,
	"./ml": 227,
	"./ml.js": 227,
	"./mr": 228,
	"./mr.js": 228,
	"./ms": 230,
	"./ms-my": 229,
	"./ms-my.js": 229,
	"./ms.js": 230,
	"./my": 231,
	"./my.js": 231,
	"./nb": 232,
	"./nb.js": 232,
	"./ne": 233,
	"./ne.js": 233,
	"./nl": 235,
	"./nl-be": 234,
	"./nl-be.js": 234,
	"./nl.js": 235,
	"./nn": 236,
	"./nn.js": 236,
	"./pa-in": 237,
	"./pa-in.js": 237,
	"./pl": 238,
	"./pl.js": 238,
	"./pt": 240,
	"./pt-br": 239,
	"./pt-br.js": 239,
	"./pt.js": 240,
	"./ro": 241,
	"./ro.js": 241,
	"./ru": 242,
	"./ru.js": 242,
	"./sd": 243,
	"./sd.js": 243,
	"./se": 244,
	"./se.js": 244,
	"./si": 245,
	"./si.js": 245,
	"./sk": 246,
	"./sk.js": 246,
	"./sl": 247,
	"./sl.js": 247,
	"./sq": 248,
	"./sq.js": 248,
	"./sr": 250,
	"./sr-cyrl": 249,
	"./sr-cyrl.js": 249,
	"./sr.js": 250,
	"./ss": 251,
	"./ss.js": 251,
	"./sv": 252,
	"./sv.js": 252,
	"./sw": 253,
	"./sw.js": 253,
	"./ta": 254,
	"./ta.js": 254,
	"./te": 255,
	"./te.js": 255,
	"./tet": 256,
	"./tet.js": 256,
	"./th": 257,
	"./th.js": 257,
	"./tl-ph": 258,
	"./tl-ph.js": 258,
	"./tlh": 259,
	"./tlh.js": 259,
	"./tr": 260,
	"./tr.js": 260,
	"./tzl": 261,
	"./tzl.js": 261,
	"./tzm": 263,
	"./tzm-latn": 262,
	"./tzm-latn.js": 262,
	"./tzm.js": 263,
	"./uk": 264,
	"./uk.js": 264,
	"./ur": 265,
	"./ur.js": 265,
	"./uz": 267,
	"./uz-latn": 266,
	"./uz-latn.js": 266,
	"./uz.js": 267,
	"./vi": 268,
	"./vi.js": 268,
	"./x-pseudo": 269,
	"./x-pseudo.js": 269,
	"./yo": 270,
	"./yo.js": 270,
	"./zh-cn": 271,
	"./zh-cn.js": 271,
	"./zh-hk": 272,
	"./zh-hk.js": 272,
	"./zh-tw": 273,
	"./zh-tw.js": 273
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 513;


/***/ }),

/***/ 550:
/***/ (function(module, exports) {

module.exports = "<!-- Main view/routes wrapper-->\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ 551:
/***/ (function(module, exports) {

module.exports = "<h1>Cash page</h1>\r\n"

/***/ }),

/***/ 552:
/***/ (function(module, exports) {

module.exports = "<!-- Main view/routes wrapper-->\r\n<div class=\"row wrapper border-bottom white-bg page-heading\">\r\n  <div class=\"col-lg-10\">\r\n    <h2>Clients list</h2>\r\n    <ol class=\"breadcrumb\">\r\n      <li>\r\n        <a href=\"index.html\">Home</a>\r\n      </li>\r\n      <li>\r\n        <a>E-commerce</a>\r\n      </li>\r\n      <li class=\"active\">\r\n        <strong>Product list</strong>\r\n      </li>\r\n    </ol>\r\n  </div>\r\n  <div class=\"col-lg-2\">\r\n\r\n  </div>\r\n</div>\r\n\r\n<div class=\"wrapper wrapper-content animated fadeInRight ecommerce\">\r\n\r\n\r\n  <div class=\"ibox-content m-b-sm border-bottom\">\r\n    <form class=\"form-edit\" (submit)=\"onAddSubmit()\">\r\n        <div class=\"row\">\r\n          <div class=\"col-sm-4\">\r\n            <div class=\"form-group\">\r\n              <label class=\"control-label\" for=\"product_name\">Name</label>\r\n              <input type=\"text\" id=\"product_name\" [(ngModel)]=\"name\" name=\"name\" value=\"\" placeholder=\"Name\" class=\"form-control\">\r\n            </div>\r\n          </div>\r\n          <div class=\"col-sm-2\">\r\n            <div class=\"form-group\">\r\n              <label class=\"control-label\" for=\"price\">Phone</label>\r\n              <input type=\"text\" id=\"price\" [(ngModel)]=\"phone\" name=\"phone\" value=\"\" placeholder=\"Phone\" class=\"form-control\">\r\n            </div>\r\n          </div>\r\n          <div class=\"col-sm-2\">\r\n            <div class=\"form-group\">\r\n              <label class=\"control-label\" for=\"quantity\">Email</label>\r\n              <input type=\"text\" id=\"quantity\" [(ngModel)]=\"email\" name=\"email\" value=\"\" placeholder=\"Email\" class=\"form-control\">\r\n            </div>\r\n          </div>\r\n          <div class=\"col-sm-4\">\r\n            <div class=\"form-group\">\r\n              <label class=\"control-label\" for=\"status\">Status</label>\r\n              <select [(ngModel)]=\"status\" name=\"status\" id=\"status\" class=\"form-control\" placeholder=\"Status\">\r\n                <option value=\"1\" selected>Enabled</option>\r\n                <option value=\"0\">Disabled</option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-sm-4\">\r\n            <div class=\"form-group\">\r\n              <button>Create client</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </form>\r\n  </div>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-12\">\r\n      <div class=\"ibox\">\r\n        <div class=\"ibox-content\">\r\n\r\n          <table class=\"footable table table-stripped toggle-arrow-tiny\" data-page-size=\"15\">\r\n            <thead>\r\n            <tr>\r\n\r\n              <th data-toggle=\"true\">Name</th>\r\n              <th data-hide=\"phone\">Phone</th>\r\n              <th data-hide=\"all\">Email</th>\r\n              <th data-hide=\"phone\">Status</th>\r\n              <th class=\"text-right\" data-sort-ignore=\"true\">Action</th>\r\n\r\n            </tr>\r\n            </thead>\r\n            <tbody>\r\n            <tr *ngFor=\"let client of clients | async\">\r\n              <td>\r\n                {{client.name}}\r\n              </td>\r\n              <td>\r\n                {{client.phone}}\r\n              </td>\r\n              <td>\r\n                {{client.email}}\r\n              </td>\r\n              <td>\r\n                <span class=\"label label-primary\">{{client.status}}</span>\r\n              </td>\r\n              <td class=\"text-right\">\r\n                <div class=\"btn-group\">\r\n                  <button class=\"btn-white btn btn-xs\" [routerLink]=\"['/clients/'+client.$key]\">View</button>\r\n                  <button class=\"btn-white btn btn-xs\" [routerLink]=\"['/clients/'+client.$key]\">Edit</button>\r\n                </div>\r\n              </td>\r\n            </tr>\r\n            </tbody>\r\n            <tfoot>\r\n            <tr>\r\n              <td colspan=\"6\">\r\n                <ul class=\"pagination pull-right\"></ul>\r\n              </td>\r\n            </tr>\r\n            </tfoot>\r\n          </table>\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n\r\n</div>\r\n<!-- End page wrapper-->\r\n"

/***/ }),

/***/ 553:
/***/ (function(module, exports) {

module.exports = "<div class=\"row wrapper border-bottom white-bg page-heading\">\r\n  <div class=\"col-lg-10\">\r\n    <h2>Client edit</h2>\r\n    <ol class=\"breadcrumb\">\r\n      <li>\r\n        <a href=\"index.html\">Home</a>\r\n      </li>\r\n      <li>\r\n        <a>E-commerce</a>\r\n      </li>\r\n      <li class=\"active\">\r\n        <strong>Product edit</strong>\r\n      </li>\r\n    </ol>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"wrapper wrapper-content animated fadeInRight ecommerce\">\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-12\">\r\n      <div class=\"tabs-container\">\r\n        <ul class=\"nav nav-tabs\">\r\n          <li class=\"active\"><a data-toggle=\"tab\" href=\"#tab-1\"> Client info</a></li>\r\n        </ul>\r\n        <div class=\"tab-content\">\r\n          <div id=\"tab-1\" class=\"tab-pane active\">\r\n            <div class=\"panel-body\">\r\n              <form class=\"form-edit\" (submit)=\"onEditSubmit()\">\r\n                <fieldset class=\"form-horizontal\">\r\n                  <div class=\"form-group\"><label class=\"col-sm-2 control-label\">Name:</label>\r\n                    <div class=\"col-sm-10\"><input [(ngModel)]=\"name\" name=\"name\" type=\"text\" class=\"form-control\" placeholder=\"Name\"></div>\r\n                  </div>\r\n                  <div class=\"form-group\"><label class=\"col-sm-2 control-label\">Phone:</label>\r\n                    <div class=\"col-sm-10\"><input [(ngModel)]=\"phone\" name=\"phone\" type=\"text\" class=\"form-control\" placeholder=\"Phone\"></div>\r\n                  </div>\r\n                  <div class=\"form-group\"><label class=\"col-sm-2 control-label\">Email:</label>\r\n                    <div class=\"col-sm-10\"><input [(ngModel)]=\"email\" name=\"email\" type=\"text\" class=\"form-control\" placeholder=\"Email\"></div>\r\n                  </div>\r\n                  <div class=\"form-group\"><label class=\"col-sm-2 control-label\">Status:</label>\r\n                    <div class=\"col-sm-10\">\r\n                      <select [(ngModel)]=\"status\" name=\"status\" id=\"status\" class=\"form-control\" placeholder=\"Status\">\r\n                        <option value=\"0\" selected>Enabled</option>\r\n                        <option value=\"1\">Disabled</option>\r\n                      </select>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"form-group\"><label class=\"col-sm-2 control-label\">Address:</label>\r\n                    <div class=\"col-sm-10\"><input [(ngModel)]=\"address\" name=\"address\" type=\"text\" class=\"form-control\" placeholder=\"Address\"></div>\r\n                  </div>\r\n                  <div class=\"form-group\"><label class=\"col-sm-2 control-label\">Order history:</label>\r\n                    <div class=\"col-sm-10\"><div class=\"summernote\"></div></div>\r\n                  </div>\r\n                  <!--<ng2-summernote [(ngModel)]=\"data\" height=\"500\" ></ng2-summernote>-->\r\n                  <input type=\"submit\" value=\"submit\" class=\"btn btn-success\">\r\n                </fieldset>\r\n              </form>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ 554:
/***/ (function(module, exports) {

module.exports = "<div class=\"footer\">\n  <div class=\"pull-right\">\n    10GB of <strong>250GB</strong> Free.\n  </div>\n  <div>\n    <strong>Copyright</strong> Example Company &copy; 2014-2017\n  </div>\n</div>\n"

/***/ }),

/***/ 555:
/***/ (function(module, exports) {

module.exports = "<div class=\"ibox-tools\" dropdown>\n  <a class=\"collapse-link\" (click)=\"collapse($event)\">\n    <i class=\"fa fa-chevron-up\"></i>\n  </a>\n  <a dropdownToggle>\n    <i class=\"fa fa-wrench\"></i>\n  </a>\n  <ul class=\"dropdown-menu dropdown-user\" *dropdownMenu>\n    <li><a href=\"#\">Config option 1</a>\n    </li>\n    <li><a href=\"#\">Config option 2</a>\n    </li>\n  </ul>\n  <a class=\"close-link\" (click)=\"close($event)\">\n    <i class=\"fa fa-times\"></i>\n  </a>\n</div>\n"

/***/ }),

/***/ 556:
/***/ (function(module, exports) {

module.exports = "<!-- Wrapper-->\n<div id=\"wrapper\">\n\n  <!-- Left navigation bar -->\n  <navigation></navigation>\n\n  <!-- Main page wrapper -->\n  <div id=\"page-wrapper\" class=\"gray-bg\">\n\n    <!-- Top navigation -->\n    <topnavbar></topnavbar>\n\n    <!-- Main view/routes wrapper-->\n    <router-outlet></router-outlet>\n\n    <!-- Footer -->\n    <footer></footer>\n\n  </div>\n  <!-- End page wrapper-->\n\n</div>\n<!-- End wrapper-->\n"

/***/ }),

/***/ 557:
/***/ (function(module, exports) {

module.exports = "<!-- View/routes wrapper-->\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ 558:
/***/ (function(module, exports) {

module.exports = "<!-- Wrapper-->\n<div id=\"wrapper\">\n\n  <!-- Main page wrapper -->\n  <div id=\"page-wrapper\" class=\"gray-bg\">\n\n    <!-- Top navigation -->\n    <topnavigationnavbar></topnavigationnavbar>\n\n    <!-- Main view/routes wrapper-->\n    <router-outlet></router-outlet>\n\n    <!-- Footer -->\n    <footer></footer>\n\n  </div>\n  <!-- End page wrapper-->\n\n</div>\n<!-- End wrapper-->\n"

/***/ }),

/***/ 559:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar-default navbar-static-side\" role=\"navigation\">\n  <div class=\"sidebar-collapse\">\n    <ul class=\"nav metismenu\" id=\"side-menu\">\n      <li class=\"nav-header\">\n        <div class=\"profile-element\" dropdown>\n          <img alt=\"image\" class=\"img-circle\" src=\"assets/images/profile_small.jpg\">\n          <a dropdownToggle>\n            <span class=\"block m-t-xs\"> <strong class=\"font-bold\">David Williams</strong> </span>\n            <span class=\"text-muted text-xs block\">Art Director <b class=\"caret\"></b> </span>\n          </a>\n          <ul class=\"animated fadeInRight dropdown-menu\" *dropdownMenu>\n            <li><a [routerLink]=\"['/preferences']\">Profile</a></li>\n            <!--<li><a href=\"#\">Contacts</a></li>-->\n            <!--<li><a href=\"#\">Mailbox</a></li>-->\n            <li class=\"divider\"></li>\n            <li><a href=\"#\">Logout</a></li>\n          </ul>\n        </div>\n        <div class=\"logo-element\">\n          IN+\n        </div>\n      </li>\n      <li [ngClass]=\"{active: activeRoute('dashboards')}\">\n        <a href=\"#\"><i class=\"fa fa-th-large\"></i> <span class=\"nav-label\">Dashboard</span> <span class=\"fa arrow\"></span> </a>\n        <ul class=\"nav nav-second-level collapse\" [ngClass]=\"{in: activeRoute('dashboards')}\">\n          <li [ngClass]=\"{active: activeRoute('dashboard1')}\"><a [routerLink]=\"['/dashboards/main-view']\">Main view</a></li>\n          <li [ngClass]=\"{active: activeRoute('dashboard1')}\"><a [routerLink]=\"['/dashboards/cash']\">Cash</a></li>\n\n        </ul>\n      </li>\n      <li [ngClass]=\"{active: activeRoute('clients')}\">\n        <a [routerLink]=\"['/clients']\"><i class=\"fa fa-diamond\"></i> <span class=\"nav-label\">Clients</span></a>\n      </li>\n      <li [ngClass]=\"{active: activeRoute('orders')}\">\n        <a [routerLink]=\"['/orders']\"><i class=\"fa fa-bar-chart-o\"></i> <span class=\"nav-label\">Orders</span></a>\n      </li>\n      <li [ngClass]=\"{active: activeRoute('products')}\">\n        <a [routerLink]=\"['/products']\"><i class=\"fa fa-flask\"></i> <span class=\"nav-label\">Products</span></a>\n      </li>\n      <li [ngClass]=\"{active: activeRoute('preferences')}\">\n        <a href=\"#\"><i class=\"fa fa-edit\"></i> <span class=\"nav-label\">Preferences</span> <span class=\"fa arrow\"></span> </a>\n        <ul class=\"nav nav-second-level collapse\" [ngClass]=\"{in: activeRoute('preferences')}\">\n          <li [ngClass]=\"{active: activeRoute('profil')}\"><a [routerLink]=\"['/preferences/profil']\">Profil</a></li>\n          <li [ngClass]=\"{active: activeRoute('payment')}\"><a [routerLink]=\"['/preferences/payment']\">Payment</a></li>\n          <li [ngClass]=\"{active: activeRoute('messages')}\"><a [routerLink]=\"['/preferences/messages']\">Messages</a></li>\n        </ul>\n      </li>\n      <li [ngClass]=\"{active: activeRoute('login')}\">\n        <a [routerLink]=\"['/login']\"><i class=\"fa fa-th-large\"></i> <span class=\"nav-label\">Login example</span></a>\n      </li>\n    </ul>\n\n  </div>\n</nav>\n"

/***/ }),

/***/ 560:
/***/ (function(module, exports) {

module.exports = "<div class=\"row border-bottom\">\n  <nav class=\"navbar navbar-static-top\" role=\"navigation\" style=\"margin-bottom: 0\">\n    <div class=\"navbar-header\">\n      <a class=\"minimalize-styl-2 btn btn-primary \" (click)=\"toggleNavigation()\"><i class=\"fa fa-bars\"></i> </a>\n      <form role=\"search\" class=\"navbar-form-custom\" method=\"post\" action=\"#\">\n        <div class=\"form-group\">\n          <input type=\"text\" placeholder=\"Search for something...\" class=\"form-control\" name=\"top-search\" id=\"top-search\">\n        </div>\n      </form>\n    </div>\n    <ul class=\"nav navbar-top-links navbar-right\">\n      <li>\n        <a href=\"#\">\n          <i class=\"fa fa-sign-out\"></i> Log out\n        </a>\n      </li>\n    </ul>\n\n  </nav>\n</div>\n"

/***/ }),

/***/ 561:
/***/ (function(module, exports) {

module.exports = "<div class=\"row border-bottom white-bg\">\n  <nav class=\"navbar navbar-static-top\" role=\"navigation\">\n    <div class=\"navbar-header\">\n      <button aria-controls=\"navbar\" aria-expanded=\"false\" data-target=\"#navbar\" data-toggle=\"collapse\" class=\"navbar-toggle collapsed\" type=\"button\">\n        <i class=\"fa fa-reorder\"></i>\n      </button>\n      <a href=\"#\" class=\"navbar-brand\">Inspinia</a>\n    </div>\n    <div class=\"navbar-collapse collapse\" id=\"navbar\">\n      <ul class=\"nav navbar-nav\">\n        <li class=\"active\">\n          <a aria-expanded=\"false\" role=\"button\" [routerLink]=\"['/layoutsview']\"> Back to main Layout page</a>\n        </li>\n        <li dropdown>\n          <a aria-expanded=\"false\" role=\"button\"  dropdownToggle> Menu item <span class=\"caret\"></span></a>\n          <ul role=\"menu\" *dropdownMenu class=\"dropdown-menu\">\n            <li><a href=\"\">Menu item</a></li>\n            <li><a href=\"\">Menu item</a></li>\n            <li><a href=\"\">Menu item</a></li>\n            <li><a href=\"\">Menu item</a></li>\n          </ul>\n        </li>\n        <li dropdown>\n          <a aria-expanded=\"false\" role=\"button\" dropdownToggle> Menu item <span class=\"caret\"></span></a>\n          <ul role=\"menu\" *dropdownMenu class=\"dropdown-menu\">\n            <li><a href=\"\">Menu item</a></li>\n            <li><a href=\"\">Menu item</a></li>\n            <li><a href=\"\">Menu item</a></li>\n            <li><a href=\"\">Menu item</a></li>\n          </ul>\n        </li>\n        <li dropdown>\n          <a aria-expanded=\"false\" role=\"button\" dropdownToggle> Menu item <span class=\"caret\"></span></a>\n          <ul role=\"menu\" *dropdownMenu class=\"dropdown-menu\">\n            <li><a href=\"\">Menu item</a></li>\n            <li><a href=\"\">Menu item</a></li>\n            <li><a href=\"\">Menu item</a></li>\n            <li><a href=\"\">Menu item</a></li>\n          </ul>\n        </li>\n        <li dropdown>\n          <a aria-expanded=\"false\" role=\"button\" dropdownToggle> Menu item <span class=\"caret\"></span></a>\n          <ul role=\"menu\" *dropdownMenu class=\"dropdown-menu\">\n            <li><a href=\"\">Menu item</a></li>\n            <li><a href=\"\">Menu item</a></li>\n            <li><a href=\"\">Menu item</a></li>\n            <li><a href=\"\">Menu item</a></li>\n          </ul>\n        </li>\n      </ul>\n      <ul class=\"nav navbar-top-links navbar-right\">\n        <li>\n          <a href=\"login.html\">\n            <i class=\"fa fa-sign-out\"></i> Log out\n          </a>\n        </li>\n      </ul>\n    </div>\n  </nav>\n</div>\n"

/***/ }),

/***/ 562:
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper wrapper-content\">\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-3\">\r\n      <div class=\"ibox float-e-margins\">\r\n        <div class=\"ibox-title\">\r\n          <span class=\"label label-success pull-right\">Monthly</span>\r\n          <h5>Income</h5>\r\n        </div>\r\n        <div class=\"ibox-content\">\r\n          <h1 class=\"no-margins\">{{income}}</h1>\r\n          <div class=\"stat-percent font-bold text-success\">98% <i class=\"fa fa-bolt\"></i></div>\r\n          <small>Total income</small>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-lg-3\">\r\n      <div class=\"ibox float-e-margins\">\r\n        <div class=\"ibox-title\">\r\n          <span class=\"label label-info pull-right\">Annual</span>\r\n          <h5>Orders</h5>\r\n        </div>\r\n        <div class=\"ibox-content\">\r\n          <h1 class=\"no-margins\">{{orders}}</h1>\r\n          <div class=\"stat-percent font-bold text-info\">20% <i class=\"fa fa-level-up\"></i></div>\r\n          <small>New orders</small>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-lg-3\">\r\n      <div class=\"ibox float-e-margins\">\r\n        <div class=\"ibox-title\">\r\n          <span class=\"label label-primary pull-right\">Today</span>\r\n          <h5>visits</h5>\r\n        </div>\r\n        <div class=\"ibox-content\">\r\n          <h1 class=\"no-margins\">{{visits}}</h1>\r\n          <div class=\"stat-percent font-bold text-navy\">44% <i class=\"fa fa-level-up\"></i></div>\r\n          <small>New visits</small>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-lg-3\">\r\n      <div class=\"ibox float-e-margins\">\r\n        <div class=\"ibox-title\">\r\n          <span class=\"label label-danger pull-right\">Low value</span>\r\n          <h5>User activity</h5>\r\n        </div>\r\n        <div class=\"ibox-content\">\r\n          <h1 class=\"no-margins\">{{userActivity}}</h1>\r\n          <div class=\"stat-percent font-bold text-danger\">38% <i class=\"fa fa-level-down\"></i></div>\r\n          <small>In first month</small>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-12\">\r\n      <div class=\"ibox float-e-margins\">\r\n        <div class=\"ibox-title\">\r\n          <h5>Orders</h5>\r\n          <div class=\"pull-right\">\r\n            <div class=\"btn-group\">\r\n              <button (click)=\"daySort()\" type=\"button\" class=\"btn btn-xs btn-white\">Today</button>\r\n              <button (click)=\"monthSort()\" type=\"button\" class=\"btn btn-xs btn-white\">Monthly</button>\r\n              <button (click)=\"yearsSort()\" type=\"button\" class=\"btn btn-xs btn-white\">Annual</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"ibox-content\">\r\n          <div class=\"row\">\r\n            <div class=\"col-lg-9\">\r\n              <div *ngIf=\"flotDataset\"  class=\"flot-chart\">\r\n                <div flotChart class=\"flot-chart-content\" [options]=\"flotOptions\" [dataset]=\"flotDataset\"></div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-lg-3\">\r\n              <ul class=\"stat-list\">\r\n                <li>\r\n                  <h2 class=\"no-margins\">2,346</h2>\r\n                  <small>Total orders in period</small>\r\n                  <div class=\"stat-percent\">48% <i class=\"fa fa-level-up text-navy\"></i></div>\r\n                  <div class=\"progress progress-mini\">\r\n                    <div style=\"width: 48%;\" class=\"progress-bar\"></div>\r\n                  </div>\r\n                </li>\r\n                <li>\r\n                  <h2 class=\"no-margins \">4,422</h2>\r\n                  <small>Orders in last month</small>\r\n                  <div class=\"stat-percent\">60% <i class=\"fa fa-level-down text-navy\"></i></div>\r\n                  <div class=\"progress progress-mini\">\r\n                    <div style=\"width: 60%;\" class=\"progress-bar\"></div>\r\n                  </div>\r\n                </li>\r\n                <li>\r\n                  <h2 class=\"no-margins \">9,180</h2>\r\n                  <small>Monthly income from orders</small>\r\n                  <div class=\"stat-percent\">22% <i class=\"fa fa-bolt text-navy\"></i></div>\r\n                  <div class=\"progress progress-mini\">\r\n                    <div style=\"width: 22%;\" class=\"progress-bar\"></div>\r\n                  </div>\r\n                </li>\r\n              </ul>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n\r\n  <div class=\"row\">\r\n\r\n    <div class=\"col-lg-12\">\r\n      <div class=\"ibox float-e-margins\">\r\n        <div class=\"ibox-title\">\r\n          <h5>Custom responsive table </h5>\r\n          <iboxtools></iboxtools>\r\n        </div>\r\n        <div class=\"ibox-content\">\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-9 m-b-xs\">\r\n              <div data-toggle=\"buttons\" class=\"btn-group\">\r\n                <label class=\"btn btn-sm btn-white\"> <input type=\"radio\" id=\"option1\" name=\"options\"> Day </label>\r\n                <label class=\"btn btn-sm btn-white active\"> <input type=\"radio\" id=\"option2\" name=\"options\"> Week </label>\r\n                <label class=\"btn btn-sm btn-white\"> <input type=\"radio\" id=\"option3\" name=\"options\"> Month </label>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-sm-3\">\r\n              <div class=\"input-group\"><input type=\"text\" placeholder=\"Search\" class=\"input-sm form-control\"> <span class=\"input-group-btn\">\r\n                                        <button type=\"button\" class=\"btn btn-sm btn-primary\"> Go!</button> </span></div>\r\n            </div>\r\n          </div>\r\n          <div class=\"table-responsive\">\r\n            <table class=\"table table-striped\">\r\n              <thead>\r\n              <tr>\r\n\r\n                <th>#</th>\r\n                <th>Project </th>\r\n                <th>Name </th>\r\n                <th>Phone </th>\r\n                <th>Company </th>\r\n                <th>Completed </th>\r\n                <th>Task</th>\r\n                <th>Date</th>\r\n                <th>Action</th>\r\n              </tr>\r\n              </thead>\r\n              <tbody>\r\n              <tr *ngFor=\"let project of projects | async\">\r\n                <td>1</td>\r\n                <td>{{project.project}}</td>\r\n                <td>{{project.name}}</td>\r\n                <td>{{project.phone}}</td>\r\n                <td>{{project.company}}</td>\r\n                <td><span peity [type]=\"peityType\" [options]=\"peityOptions\">0.52/1.561</span></td>\r\n                <td>{{project.task}}</td>\r\n                <td>{{project.date}}</td>\r\n                <td><a href=\"#\"><i class=\"fa fa-check text-navy\"></i></a></td>\r\n              </tr>\r\n\r\n              </tbody>\r\n            </table>\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ 563:
/***/ (function(module, exports) {

module.exports = "<div class=\"middle-box text-center loginscreen  animated fadeInDown\">\r\n  <div>\r\n    <div>\r\n      <h1 class=\"logo-name\">IN+</h1>\r\n    </div>\r\n    <h3>Welcome to IN+</h3>\r\n    <p>Login in. To see it in action.</p>\r\n    <form class=\"m-t\" role=\"form\" #formData='ngForm' (ngSubmit)=\"onSubmit(formData)\">\r\n      <div class=\"form-group\">\r\n        <input (ngModel)=\"name\" name=\"name\" type=\"text\" class=\"form-control\" placeholder=\"Name\" required=\"\">\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <input (ngModel)=\"email\" name=\"email\" type=\"email\" class=\"form-control\" placeholder=\"Email\" required=\"\">\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <input (ngModel)=\"password\" name=\"password\" type=\"password\" class=\"form-control\" placeholder=\"Password\" required=\"\">\r\n      </div>\r\n      <button type=\"submit\" class=\"btn btn-primary block full-width m-b\">Login</button>\r\n\r\n      <p class=\"text-muted text-center\"><small>Do not have an account?</small></p>\r\n      <button class=\"btn btn-default btn-block\" (click)=\"logout()\">Logout</button>\r\n      <a class=\"btn btn-sm btn-white btn-block\" [routerLink]=\"['/register']\">Register</a>\r\n    </form>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ 564:
/***/ (function(module, exports) {

module.exports = "<div class=\"row wrapper border-bottom white-bg page-heading\">\r\n  <div class=\"col-lg-10\">\r\n    <h2>Messages Page</h2>\r\n    <ol class=\"breadcrumb\">\r\n      <li>\r\n        <a href=\"index.html\">Home</a>\r\n      </li>\r\n      <li>\r\n        <a>E-commerce</a>\r\n      </li>\r\n      <li class=\"active\">\r\n        <strong>Messages Page</strong>\r\n      </li>\r\n    </ol>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"wrapper wrapper-content animated fadeInRight ecommerce\">\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-12\">\r\n      <div class=\"tabs-container\">\r\n        <div class=\"tab-content\">\r\n          <div id=\"tab-3\" class=\"tab-pane active\">\r\n            <div class=\"panel-body\">\r\n\r\n              <div class=\"message\">\r\n                <table class=\"main\" width=\"100%\" cellpadding=\"0\" cellspacing=\"0\">\r\n                  <tbody><tr>\r\n                    <td class=\"alert alert-good\">\r\n                      Info: You're approaching your limit. Please upgrade.\r\n                    </td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td class=\"content-wrap\">\r\n                      <table width=\"100%\" cellpadding=\"0\" cellspacing=\"0\">\r\n                        <tbody><tr>\r\n                          <td class=\"content-block\">\r\n                            You have <strong>1 free report</strong> remaining.\r\n                          </td>\r\n                        </tr>\r\n                        <tr>\r\n                          <td class=\"content-block\">\r\n                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.\r\n                          </td>\r\n                        </tr>\r\n                        <tr>\r\n                          <td class=\"content-block\">\r\n                            Thanks for choosing Company Inc.\r\n                          </td>\r\n                        </tr>\r\n                        </tbody></table>\r\n                    </td>\r\n                  </tr>\r\n                  </tbody></table>\r\n                <div class=\"footer\">\r\n                  <table width=\"100%\">\r\n                    <tbody><tr>\r\n                      <td class=\"aligncenter content-block\"><a href=\"#\">Unsubscribe</a> from these alerts.</td>\r\n                    </tr>\r\n                    </tbody></table>\r\n                </div></div>\r\n\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ 565:
/***/ (function(module, exports) {

module.exports = "<div class=\"row wrapper border-bottom white-bg page-heading\">\r\n  <div class=\"col-lg-10\">\r\n    <h2>Order edit</h2>\r\n    <ol class=\"breadcrumb\">\r\n      <li>\r\n        <a href=\"index.html\">Home</a>\r\n      </li>\r\n      <li>\r\n        <a>E-commerce</a>\r\n      </li>\r\n      <li class=\"active\">\r\n        <strong>Order edit</strong>\r\n      </li>\r\n    </ol>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"wrapper wrapper-content animated fadeInRight ecommerce\">\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-12\">\r\n      <div class=\"tabs-container\">\r\n        <ul class=\"nav nav-tabs\">\r\n          <li class=\"active\"><a data-toggle=\"tab\" href=\"#tab-1\"> Order info</a></li>\r\n        </ul>\r\n        <div class=\"tab-content\">\r\n          <div id=\"tab-1\" class=\"tab-pane active\">\r\n            <div class=\"panel-body\">\r\n              <form class=\"form-edit\" (submit)=\"onEditSubmit()\">\r\n                <fieldset class=\"form-horizontal\">\r\n                  <div class=\"form-group\"><label class=\"col-sm-2 control-label\">Client Name:</label>\r\n                    <div class=\"col-sm-10\"><input [(ngModel)]=\"clientName\" name=\"clientName\" type=\"text\" class=\"form-control\" placeholder=\"Client Name\"></div>\r\n                  </div>\r\n                  <div class=\"form-group\"><label class=\"col-sm-2 control-label\">Products:</label>\r\n                    <div class=\"col-sm-10\"><input [(ngModel)]=\"products\" name=\"products\" type=\"text\" class=\"form-control\" placeholder=\"Products\"></div>\r\n                  </div>\r\n                  <div class=\"form-group\"><label class=\"col-sm-2 control-label\">Quantity:</label>\r\n                    <div class=\"col-sm-10\"><input [(ngModel)]=\"quantity\" name=\"quantity\" type=\"text\" class=\"form-control\" placeholder=\"Quantity\"></div>\r\n                  </div>\r\n                  <div class=\"form-group\"><label class=\"col-sm-2 control-label\">Price paid/unpaid:</label>\r\n                    <div class=\"col-sm-10\"><input [(ngModel)]=\"paid\" name=\"paid\" type=\"text\" class=\"form-control\" placeholder=\"Price paid/unpaid\"></div>\r\n                  </div>\r\n                  <div class=\"form-group\"><label class=\"col-sm-2 control-label\">Price Method:</label>\r\n                    <div class=\"col-sm-10\"><input [(ngModel)]=\"priceMethod\" name=\"priceMethod\" type=\"text\" class=\"form-control\" placeholder=\"Price Method\"></div>\r\n                  </div>\r\n                  <div class=\"form-group\"><label class=\"col-sm-2 control-label\">Notes:</label>\r\n                    <div class=\"col-sm-10\"><input [(ngModel)]=\"notes\" name=\"notes\" type=\"text\" class=\"form-control\" placeholder=\"Notes\"></div>\r\n                  </div>\r\n                  <div class=\"form-group\"><label class=\"col-sm-2 control-label\">Ticket Number:</label>\r\n                    <div class=\"col-sm-10\"><input [(ngModel)]=\"ticketNumber\" name=\"ticketNumber\" type=\"text\" class=\"form-control\" placeholder=\"Ticket Number\"></div>\r\n                  </div>\r\n                  <div class=\"form-group\"><label class=\"col-sm-2 control-label\">Status:</label>\r\n                    <div class=\"col-sm-10\"><input [(ngModel)]=\"status\" name=\"status\" type=\"text\" class=\"form-control\" placeholder=\"Status\"></div>\r\n                  </div>\r\n                  <input type=\"submit\" value=\"submit\" class=\"btn btn-success\">\r\n                </fieldset>\r\n              </form>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ 566:
/***/ (function(module, exports) {

module.exports = "<!-- Main view/routes wrapper-->\r\n<div class=\"row wrapper border-bottom white-bg page-heading\">\r\n  <div class=\"col-lg-10\">\r\n    <h2>Orders list</h2>\r\n    <ol class=\"breadcrumb\">\r\n      <li>\r\n        <a href=\"index.html\">Home</a>\r\n      </li>\r\n      <li>\r\n        <a>E-commerce</a>\r\n      </li>\r\n      <li class=\"active\">\r\n        <strong>Orders list</strong>\r\n      </li>\r\n    </ol>\r\n  </div>\r\n  <div class=\"col-lg-2\">\r\n\r\n  </div>\r\n</div>\r\n\r\n<div class=\"wrapper wrapper-content animated fadeInRight ecommerce\">\r\n\r\n\r\n  <div class=\"ibox-content m-b-sm border-bottom\">\r\n    <form class=\"form-edit\" (submit)=\"onAddSubmit()\">\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-4\">\r\n          <div class=\"form-group\">\r\n            <label class=\"control-label\" for=\"product_name\">Order ID</label>\r\n            <input type=\"text\" id=\"product_name\" [(ngModel)]=\"orderId\" name=\"orderId\" value=\"\" placeholder=\"Order ID\" class=\"form-control\">\r\n          </div>\r\n        </div>\r\n        <div class=\"col-sm-2\">\r\n          <div class=\"form-group\">\r\n            <label class=\"control-label\" for=\"price\">Client Name</label>\r\n            <input type=\"text\" id=\"price\" [(ngModel)]=\"clientName\" name=\"clientName\" value=\"\" placeholder=\"Client Name\" class=\"form-control\">\r\n          </div>\r\n        </div>\r\n        <div class=\"col-sm-2\">\r\n          <div class=\"form-group\">\r\n            <label class=\"control-label\" for=\"quantity\">Price paid/unpaid</label>\r\n            <input type=\"text\" id=\"quantity\" [(ngModel)]=\"paid\" name=\"paid\" value=\"\" placeholder=\"Price paid/unpaid\" class=\"form-control\">\r\n          </div>\r\n        </div>\r\n        <div class=\"col-sm-4\">\r\n          <div class=\"form-group\">\r\n            <label class=\"control-label\" for=\"status\">Status</label>\r\n            <select [(ngModel)]=\"status\" name=\"status\" id=\"status\" class=\"form-control\" placeholder=\"Status\">\r\n              <option value=\"pending\" selected>Pending</option>\r\n              <option value=\"done\">Done</option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-sm-4\">\r\n          <div class=\"form-group\">\r\n            <button>Create order</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-12\">\r\n      <div class=\"ibox\">\r\n        <div class=\"ibox-content\">\r\n\r\n          <table class=\"footable table table-stripped toggle-arrow-tiny\" data-page-size=\"15\">\r\n            <thead>\r\n            <tr>\r\n\r\n              <th data-toggle=\"true\">Order ID</th>\r\n              <th data-hide=\"phone\">Client name</th>\r\n              <th data-hide=\"all\">Status</th>\r\n              <th data-hide=\"phone\">Paid/unpaid</th>\r\n              <th class=\"text-right\" data-sort-ignore=\"true\">Action</th>\r\n\r\n            </tr>\r\n            </thead>\r\n            <tbody>\r\n            <tr *ngFor=\"let order of orders | async\">\r\n              <td>\r\n                {{order.orderId}}\r\n              </td>\r\n              <td>\r\n                {{order.clientName}}\r\n              </td>\r\n              <td>\r\n                <span class=\"label label-primary\">{{order.status}}</span>\r\n              </td>\r\n              <td>\r\n                {{order.paid}}\r\n              </td>\r\n              <td class=\"text-right\">\r\n                <div class=\"btn-group\">\r\n                  <button class=\"btn-white btn btn-xs\" [routerLink]=\"['/orders/'+order.$key]\">View</button>\r\n                  <button class=\"btn-white btn btn-xs\" [routerLink]=\"['/orders/'+order.$key]\">Edit</button>\r\n                </div>\r\n              </td>\r\n            </tr>\r\n            </tbody>\r\n            <tfoot>\r\n            <tr>\r\n              <td colspan=\"6\">\r\n                <ul class=\"pagination pull-right\"></ul>\r\n              </td>\r\n            </tr>\r\n            </tfoot>\r\n          </table>\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n\r\n</div>\r\n<!-- End page wrapper-->\r\n"

/***/ }),

/***/ 567:
/***/ (function(module, exports) {

module.exports = "<div class=\"row wrapper border-bottom white-bg page-heading\">\r\n  <div class=\"col-lg-10\">\r\n    <h2>Payment Page</h2>\r\n    <ol class=\"breadcrumb\">\r\n      <li>\r\n        <a href=\"index.html\">Home</a>\r\n      </li>\r\n      <li>\r\n        <a>E-commerce</a>\r\n      </li>\r\n      <li class=\"active\">\r\n        <strong>Payment Page</strong>\r\n      </li>\r\n    </ol>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"wrapper wrapper-content animated fadeInRight ecommerce\">\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-12\">\r\n      <div class=\"tabs-container\">\r\n        <div class=\"tab-content\">\r\n          <div id=\"tab-2\" class=\"tab-pane active\">\r\n            <div class=\"panel-body\">\r\n\r\n              <fieldset class=\"form-horizontal\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-md-4\">\r\n                    <div class=\"payment-card\">\r\n                      <i class=\"fa fa-cc-visa payment-icon-big text-success\"></i>\r\n                      <h2>\r\n                        **** **** **** 1060\r\n                      </h2>\r\n                      <div class=\"row\">\r\n                        <div class=\"col-sm-6\">\r\n                          <small>\r\n                            <strong>Expiry date:</strong> 10/16\r\n                          </small>\r\n                        </div>\r\n                        <div class=\"col-sm-6 text-right\">\r\n                          <small>\r\n                            <strong>Name:</strong> David Williams\r\n                          </small>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-md-4\">\r\n                    <div class=\"payment-card\">\r\n                      <i class=\"fa fa-cc-mastercard payment-icon-big text-warning\"></i>\r\n                      <h2>\r\n                        **** **** **** 7002\r\n                      </h2>\r\n                      <div class=\"row\">\r\n                        <div class=\"col-sm-6\">\r\n                          <small>\r\n                            <strong>Expiry date:</strong> 10/16\r\n                          </small>\r\n                        </div>\r\n                        <div class=\"col-sm-6 text-right\">\r\n                          <small>\r\n                            <strong>Name:</strong> Anna Smith\r\n                          </small>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-md-4\">\r\n                    <div class=\"payment-card\">\r\n                      <i class=\"fa fa-cc-discover payment-icon-big text-danger\"></i>\r\n                      <h2>\r\n                        **** **** **** 3466\r\n                      </h2>\r\n                      <div class=\"row\">\r\n                        <div class=\"col-sm-6\">\r\n                          <small>\r\n                            <strong>Expiry date:</strong> 10/16\r\n                          </small>\r\n                        </div>\r\n                        <div class=\"col-sm-6 text-right\">\r\n                          <small>\r\n                            <strong>Name:</strong> Morgan Stanch\r\n                          </small>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n\r\n                </div>\r\n              </fieldset>\r\n\r\n\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ 568:
/***/ (function(module, exports) {

module.exports = "<div class=\"row wrapper border-bottom white-bg page-heading\">\r\n  <div class=\"col-lg-10\">\r\n    <h2>Preferences Page</h2>\r\n    <ol class=\"breadcrumb\">\r\n      <li>\r\n        <a href=\"index.html\">Home</a>\r\n      </li>\r\n      <li>\r\n        <a>E-commerce</a>\r\n      </li>\r\n      <li class=\"active\">\r\n        <strong>Preferences Page</strong>\r\n      </li>\r\n    </ol>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"wrapper wrapper-content animated fadeInRight ecommerce\">\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-12\">\r\n      <div class=\"tabs-container\">\r\n        <ul class=\"nav nav-tabs\">\r\n          <li class=\"active\"><a data-toggle=\"tab\" href=\"#tab-1\"> Profil</a></li>\r\n          <li class=\"\"><a data-toggle=\"tab\" href=\"#tab-2\"> Payment accepted</a></li>\r\n          <li class=\"\"><a data-toggle=\"tab\" href=\"#tab-3\"> Messages</a></li>\r\n        </ul>\r\n        <div class=\"tab-content\">\r\n          <div id=\"tab-1\" class=\"tab-pane active\">\r\n            <div class=\"panel-body\">\r\n\r\n              <fieldset class=\"form-horizontal\">\r\n                <div class=\"form-group\"><label class=\"col-sm-2 control-label\">User Name:</label>\r\n                  <div class=\"col-sm-10\"><input type=\"text\" class=\"form-control\" placeholder=\"User Name\"></div>\r\n                </div>\r\n                <div class=\"form-group\"><label class=\"col-sm-2 control-label\">Email:</label>\r\n                  <div class=\"col-sm-10\"><input type=\"text\" class=\"form-control\" placeholder=\"Email\"></div>\r\n                </div>\r\n                <div class=\"form-group\"><label class=\"col-sm-2 control-label\">Password:</label>\r\n                  <div class=\"col-sm-10\"><input type=\"text\" class=\"form-control\" placeholder=\"Password\"></div>\r\n                </div>\r\n                <div class=\"form-group\"><label class=\"col-sm-2 control-label\">Store name:</label>\r\n                  <div class=\"col-sm-10\"><input type=\"text\" class=\"form-control\" placeholder=\"Store name\"></div>\r\n                </div>\r\n                <div class=\"form-group\"><label class=\"col-sm-2 control-label\">Address:</label>\r\n                  <div class=\"col-sm-10\"><input type=\"text\" class=\"form-control\" placeholder=\"Address\"></div>\r\n                </div>\r\n                <div class=\"form-group\"><label class=\"col-sm-2 control-label\">Country:</label>\r\n                  <div class=\"col-sm-10\"><input type=\"text\" class=\"form-control\" placeholder=\"Country\"></div>\r\n                </div>\r\n                <div class=\"form-group\"><label class=\"col-sm-2 control-label\">User status:</label>\r\n                  <div class=\"col-sm-10\"><input type=\"text\" class=\"form-control\" placeholder=\"User status\"></div>\r\n                </div>\r\n              </fieldset>\r\n\r\n            </div>\r\n          </div>\r\n          <div id=\"tab-2\" class=\"tab-pane\">\r\n            <div class=\"panel-body\">\r\n\r\n              <fieldset class=\"form-horizontal\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-md-4\">\r\n                    <div class=\"payment-card\">\r\n                      <i class=\"fa fa-cc-visa payment-icon-big text-success\"></i>\r\n                      <h2>\r\n                        **** **** **** 1060\r\n                      </h2>\r\n                      <div class=\"row\">\r\n                        <div class=\"col-sm-6\">\r\n                          <small>\r\n                            <strong>Expiry date:</strong> 10/16\r\n                          </small>\r\n                        </div>\r\n                        <div class=\"col-sm-6 text-right\">\r\n                          <small>\r\n                            <strong>Name:</strong> David Williams\r\n                          </small>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-md-4\">\r\n                    <div class=\"payment-card\">\r\n                      <i class=\"fa fa-cc-mastercard payment-icon-big text-warning\"></i>\r\n                      <h2>\r\n                        **** **** **** 7002\r\n                      </h2>\r\n                      <div class=\"row\">\r\n                        <div class=\"col-sm-6\">\r\n                          <small>\r\n                            <strong>Expiry date:</strong> 10/16\r\n                          </small>\r\n                        </div>\r\n                        <div class=\"col-sm-6 text-right\">\r\n                          <small>\r\n                            <strong>Name:</strong> Anna Smith\r\n                          </small>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-md-4\">\r\n                    <div class=\"payment-card\">\r\n                      <i class=\"fa fa-cc-discover payment-icon-big text-danger\"></i>\r\n                      <h2>\r\n                        **** **** **** 3466\r\n                      </h2>\r\n                      <div class=\"row\">\r\n                        <div class=\"col-sm-6\">\r\n                          <small>\r\n                            <strong>Expiry date:</strong> 10/16\r\n                          </small>\r\n                        </div>\r\n                        <div class=\"col-sm-6 text-right\">\r\n                          <small>\r\n                            <strong>Name:</strong> Morgan Stanch\r\n                          </small>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n\r\n                </div>\r\n              </fieldset>\r\n\r\n\r\n            </div>\r\n          </div>\r\n          <div id=\"tab-3\" class=\"tab-pane\">\r\n            <div class=\"panel-body\">\r\n\r\n              <div class=\"message\">\r\n                <table class=\"main\" width=\"100%\" cellpadding=\"0\" cellspacing=\"0\">\r\n                  <tbody><tr>\r\n                    <td class=\"alert alert-good\">\r\n                      Info: You're approaching your limit. Please upgrade.\r\n                    </td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td class=\"content-wrap\">\r\n                      <table width=\"100%\" cellpadding=\"0\" cellspacing=\"0\">\r\n                        <tbody><tr>\r\n                          <td class=\"content-block\">\r\n                            You have <strong>1 free report</strong> remaining.\r\n                          </td>\r\n                        </tr>\r\n                        <tr>\r\n                          <td class=\"content-block\">\r\n                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.\r\n                          </td>\r\n                        </tr>\r\n                        <tr>\r\n                          <td class=\"content-block\">\r\n                            Thanks for choosing Company Inc.\r\n                          </td>\r\n                        </tr>\r\n                        </tbody></table>\r\n                    </td>\r\n                  </tr>\r\n                  </tbody></table>\r\n                <div class=\"footer\">\r\n                  <table width=\"100%\">\r\n                    <tbody><tr>\r\n                      <td class=\"aligncenter content-block\"><a href=\"#\">Unsubscribe</a> from these alerts.</td>\r\n                    </tr>\r\n                    </tbody></table>\r\n                </div></div>\r\n\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ 569:
/***/ (function(module, exports) {

module.exports = "<div class=\"row wrapper border-bottom white-bg page-heading\">\r\n  <div class=\"col-lg-10\">\r\n    <h2>Client edit</h2>\r\n    <ol class=\"breadcrumb\">\r\n      <li>\r\n        <a href=\"index.html\">Home</a>\r\n      </li>\r\n      <li>\r\n        <a>E-commerce</a>\r\n      </li>\r\n      <li class=\"active\">\r\n        <strong>Product edit</strong>\r\n      </li>\r\n    </ol>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"wrapper wrapper-content animated fadeInRight ecommerce\">\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-12\">\r\n      <div class=\"tabs-container\">\r\n        <ul class=\"nav nav-tabs\">\r\n          <li class=\"active\"><a data-toggle=\"tab\" href=\"#tab-1\"> Client info</a></li>\r\n        </ul>\r\n        <div class=\"tab-content\">\r\n          <div id=\"tab-1\" class=\"tab-pane active\">\r\n            <div class=\"panel-body\">\r\n              <form class=\"form-edit\" (submit)=\"onEditSubmit()\">\r\n                <fieldset class=\"form-horizontal\">\r\n                  <div class=\"form-group\"><label class=\"col-sm-2 control-label\">Name:</label>\r\n                    <div class=\"col-sm-10\"><input [(ngModel)]=\"name\" name=\"name\" type=\"text\" class=\"form-control\" placeholder=\"Name\"></div>\r\n                  </div>\r\n                  <div class=\"form-group\"><label class=\"col-sm-2 control-label\">Price:</label>\r\n                    <div class=\"col-sm-10\"><input [(ngModel)]=\"price\" name=\"price\" type=\"text\" class=\"form-control\" placeholder=\"Price\"></div>\r\n                  </div>\r\n                  <div class=\"form-group\"><label class=\"col-sm-2 control-label\">Quantity:</label>\r\n                    <div class=\"col-sm-10\"><input [(ngModel)]=\"quantity\" name=\"quantity\" type=\"text\" class=\"form-control\" placeholder=\"Quantity\"></div>\r\n                  </div>\r\n                  <div class=\"form-group\"><label class=\"col-sm-2 control-label\">Description:</label>\r\n                    <div class=\"col-sm-10\"><input [(ngModel)]=\"description\" name=\"description\" type=\"text\" class=\"form-control\" placeholder=\"Description\"></div>\r\n                  </div>\r\n                  <div class=\"form-group\"><label class=\"col-sm-2 control-label\">Category:</label>\r\n                    <div class=\"col-sm-10\"><input [(ngModel)]=\"category\" name=\"category\" type=\"text\" class=\"form-control\" placeholder=\"Category\"></div>\r\n                  </div>\r\n                  <div class=\"form-group\"><label class=\"col-sm-2 control-label\">Tag:</label>\r\n                    <div class=\"col-sm-10\"><input [(ngModel)]=\"tag\" name=\"tag\" type=\"text\" class=\"form-control\" placeholder=\"Tag\"></div>\r\n                  </div>\r\n                  <input type=\"submit\" value=\"submit\" class=\"btn btn-success\">\r\n                </fieldset>\r\n              </form>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ 570:
/***/ (function(module, exports) {

module.exports = "<!-- Main view/routes wrapper-->\r\n<div class=\"row wrapper border-bottom white-bg page-heading\">\r\n  <div class=\"col-lg-10\">\r\n    <h2>Product list</h2>\r\n    <ol class=\"breadcrumb\">\r\n      <li>\r\n        <a href=\"index.html\">Home</a>\r\n      </li>\r\n      <li>\r\n        <a>E-commerce</a>\r\n      </li>\r\n      <li class=\"active\">\r\n        <strong>Product list</strong>\r\n      </li>\r\n    </ol>\r\n  </div>\r\n  <div class=\"col-lg-2\">\r\n\r\n  </div>\r\n</div>\r\n\r\n<div class=\"wrapper wrapper-content animated fadeInRight ecommerce\">\r\n\r\n\r\n  <div class=\"ibox-content m-b-sm border-bottom\">\r\n    <form class=\"form-edit\" (submit)=\"onAddSubmit()\">\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-4\">\r\n          <div class=\"form-group\">\r\n            <label class=\"control-label\" for=\"product_name\">Name</label>\r\n            <input type=\"text\" id=\"product_name\" [(ngModel)]=\"name\" name=\"name\" value=\"\" placeholder=\"Name\" class=\"form-control\">\r\n          </div>\r\n        </div>\r\n        <div class=\"col-sm-2\">\r\n          <div class=\"form-group\">\r\n            <label class=\"control-label\" for=\"price\">Price</label>\r\n            <input type=\"text\" id=\"price\" [(ngModel)]=\"price\" name=\"price\" value=\"\" placeholder=\"Price\" class=\"form-control\">\r\n          </div>\r\n        </div>\r\n        <div class=\"col-sm-2\">\r\n          <div class=\"form-group\">\r\n            <label class=\"control-label\" for=\"quantity\">Quantity</label>\r\n            <input type=\"text\" id=\"quantity\" [(ngModel)]=\"quantity\" name=\"quantity\" value=\"\" placeholder=\"Quantity\" class=\"form-control\">\r\n          </div>\r\n        </div>\r\n        <div class=\"col-sm-4\">\r\n          <div class=\"form-group\">\r\n            <button>Create product</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-12\">\r\n      <div class=\"ibox\">\r\n        <div class=\"ibox-content\">\r\n\r\n          <table class=\"footable table table-stripped toggle-arrow-tiny\" data-page-size=\"15\">\r\n            <thead>\r\n            <tr>\r\n\r\n              <th data-toggle=\"true\">Name</th>\r\n              <th data-hide=\"phone\">Price</th>\r\n              <th data-hide=\"all\">Quantity</th>\r\n              <th class=\"text-right\" data-sort-ignore=\"true\">Action</th>\r\n\r\n            </tr>\r\n            </thead>\r\n            <tbody>\r\n            <tr *ngFor=\"let product of products | async\">\r\n              <td>\r\n                {{product.name}}\r\n              </td>\r\n              <td>\r\n                {{product.price}}\r\n              </td>\r\n              <td>\r\n                {{product.quantity}}\r\n              </td>\r\n              <td class=\"text-right\">\r\n                <div class=\"btn-group\">\r\n                  <button class=\"btn-white btn btn-xs\" [routerLink]=\"['/products/'+product.$key]\">View</button>\r\n                  <button class=\"btn-white btn btn-xs\" [routerLink]=\"['/products/'+product.$key]\">Edit</button>\r\n                </div>\r\n              </td>\r\n            </tr>\r\n            </tbody>\r\n            <tfoot>\r\n            <tr>\r\n              <td colspan=\"6\">\r\n                <ul class=\"pagination pull-right\"></ul>\r\n              </td>\r\n            </tr>\r\n            </tfoot>\r\n          </table>\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n\r\n</div>\r\n<!-- End page wrapper-->\r\n"

/***/ }),

/***/ 571:
/***/ (function(module, exports) {

module.exports = "<div class=\"row wrapper border-bottom white-bg page-heading\">\r\n  <div class=\"col-lg-10\">\r\n    <h2>Profil Page</h2>\r\n    <ol class=\"breadcrumb\">\r\n      <li>\r\n        <a href=\"index.html\">Home</a>\r\n      </li>\r\n      <li>\r\n        <a>E-commerce</a>\r\n      </li>\r\n      <li class=\"active\">\r\n        <strong>Profil Page</strong>\r\n      </li>\r\n    </ol>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"wrapper wrapper-content animated fadeInRight ecommerce\">\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-12\">\r\n      <div class=\"tabs-container\">\r\n        <div class=\"tab-content\">\r\n          <div id=\"tab-1\" class=\"tab-pane active\">\r\n            <div class=\"panel-body\">\r\n\r\n              <fieldset class=\"form-horizontal\">\r\n                <div class=\"form-group\"><label class=\"col-sm-2 control-label\">User Name:</label>\r\n                  <div class=\"col-sm-10\"><input type=\"text\" class=\"form-control\" placeholder=\"User Name\"></div>\r\n                </div>\r\n                <div class=\"form-group\"><label class=\"col-sm-2 control-label\">Email:</label>\r\n                  <div class=\"col-sm-10\"><input type=\"text\" class=\"form-control\" placeholder=\"Email\"></div>\r\n                </div>\r\n                <div class=\"form-group\"><label class=\"col-sm-2 control-label\">Password:</label>\r\n                  <div class=\"col-sm-10\"><input type=\"text\" class=\"form-control\" placeholder=\"Password\"></div>\r\n                </div>\r\n                <div class=\"form-group\"><label class=\"col-sm-2 control-label\">Store name:</label>\r\n                  <div class=\"col-sm-10\"><input type=\"text\" class=\"form-control\" placeholder=\"Store name\"></div>\r\n                </div>\r\n                <div class=\"form-group\"><label class=\"col-sm-2 control-label\">Address:</label>\r\n                  <div class=\"col-sm-10\"><input type=\"text\" class=\"form-control\" placeholder=\"Address\"></div>\r\n                </div>\r\n                <div class=\"form-group\"><label class=\"col-sm-2 control-label\">Country:</label>\r\n                  <div class=\"col-sm-10\"><input type=\"text\" class=\"form-control\" placeholder=\"Country\"></div>\r\n                </div>\r\n                <div class=\"form-group\"><label class=\"col-sm-2 control-label\">User status:</label>\r\n                  <div class=\"col-sm-10\"><input type=\"text\" class=\"form-control\" placeholder=\"User status\"></div>\r\n                </div>\r\n              </fieldset>\r\n\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ 572:
/***/ (function(module, exports) {

module.exports = "<!-- Main view/routes wrapper-->\r\n<div class=\"row wrapper border-bottom white-bg page-heading\">\r\n  <div class=\"col-lg-10\">\r\n    <h2>Clients list</h2>\r\n    <ol class=\"breadcrumb\">\r\n      <li>\r\n        <a href=\"index.html\">Home</a>\r\n      </li>\r\n      <li>\r\n        <a>E-commerce</a>\r\n      </li>\r\n      <li class=\"active\">\r\n        <strong>Product list</strong>\r\n      </li>\r\n    </ol>\r\n  </div>\r\n  <div class=\"col-lg-2\">\r\n\r\n  </div>\r\n</div>\r\n\r\n<div class=\"wrapper wrapper-content animated fadeInRight ecommerce\">\r\n\r\n\r\n  <div class=\"ibox-content m-b-sm border-bottom\">\r\n    <form class=\"form-edit\" (submit)=\"onAddSubmit()\">\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-4\">\r\n          <div class=\"form-group\">\r\n            <label class=\"control-label\" for=\"product_name\">Project</label>\r\n            <input type=\"text\" id=\"project_name\" [(ngModel)]=\"project\" name=\"project\" value=\"\" placeholder=\"Project\" class=\"form-control\">\r\n          </div>\r\n        </div>\r\n        <div class=\"col-sm-4\">\r\n          <div class=\"form-group\">\r\n            <label class=\"control-label\" for=\"product_name\">Name</label>\r\n            <input type=\"text\" id=\"product_name\" [(ngModel)]=\"name\" name=\"name\" value=\"\" placeholder=\"Name\" class=\"form-control\">\r\n          </div>\r\n        </div>\r\n        <div class=\"col-sm-2\">\r\n          <div class=\"form-group\">\r\n            <label class=\"control-label\" for=\"price\">Phone</label>\r\n            <input type=\"text\" id=\"price\" [(ngModel)]=\"phone\" name=\"phone\" value=\"\" placeholder=\"Phone\" class=\"form-control\">\r\n          </div>\r\n        </div>\r\n        <div class=\"col-sm-2\">\r\n          <div class=\"form-group\">\r\n            <label class=\"control-label\" for=\"quantity\">Company</label>\r\n            <input type=\"text\" id=\"quantity\" [(ngModel)]=\"company\" name=\"company\" value=\"\" placeholder=\"Company\" class=\"form-control\">\r\n          </div>\r\n        </div>\r\n        <div class=\"col-sm-4\">\r\n          <div class=\"form-group\">\r\n            <label class=\"control-label\" for=\"completed\">Completed</label>\r\n            <select [(ngModel)]=\"completed\" name=\"completed\" id=\"completed\" class=\"form-control\" placeholder=\"Completed\">\r\n              <option value=\"1\" selected>Canceled</option>\r\n              <option value=\"0\">Completed</option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-sm-2\">\r\n          <div class=\"form-group\">\r\n            <label class=\"control-label\" for=\"task\">Task</label>\r\n            <input type=\"text\" id=\"task\" [(ngModel)]=\"task\" name=\"task\" value=\"\" placeholder=\"Task\" class=\"form-control\">\r\n          </div>\r\n        </div>\r\n        <div class=\"col-sm-2\">\r\n          <div class=\"form-group\">\r\n            <label class=\"control-label\" for=\"date\">Date</label>\r\n            <input type=\"text\" id=\"date\" [(ngModel)]=\"date\" name=\"date\" value=\"\" placeholder=\"Date\" class=\"form-control\">\r\n          </div>\r\n        </div>\r\n        <div class=\"col-sm-2\">\r\n          <div class=\"form-group\">\r\n            <label class=\"control-label\" for=\"quantity\">Action</label>\r\n            <input type=\"text\" id=\"action\" [(ngModel)]=\"action\" name=\"action\" value=\"\" placeholder=\"Action\" class=\"form-control\">\r\n          </div>\r\n        </div>\r\n        <div class=\"col-sm-4\">\r\n          <div class=\"form-group\">\r\n            <button>Create client</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n\r\n\r\n\r\n</div>\r\n<!-- End page wrapper-->\r\n"

/***/ }),

/***/ 573:
/***/ (function(module, exports) {

module.exports = "<div class=\"middle-box text-center loginscreen  animated fadeInDown\">\r\n  <div>\r\n    <div>\r\n      <h1 class=\"logo-name\">Reg+</h1>\r\n    </div>\r\n    <form class=\"m-t\" role=\"form\" #formData='ngForm' (ngSubmit)=\"onSubmit(formData)\">\r\n      <div class=\"form-group\">\r\n        <input (ngModel)=\"name\" name=\"name\" type=\"text\" class=\"form-control\" placeholder=\"Name\" required=\"\">\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <input (ngModel)=\"email\" name=\"email\" type=\"email\" class=\"form-control\" placeholder=\"Email\" required=\"\">\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <input (ngModel)=\"password\" name=\"password\" type=\"password\" class=\"form-control\" placeholder=\"Password\" required=\"\">\r\n      </div>\r\n      <button type=\"submit\" [disabled]=\"!formData.valid\" class=\"btn btn-primary block full-width m-b\">Register</button>\r\n    </form>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ 574:
/***/ (function(module, exports) {

module.exports = "<div class=\"middle-box text-center loginscreen  animated fadeInDown\">\n    <div>\n        <div>\n            <h1 class=\"logo-name\">IN+</h1>\n        </div>\n        <h3>Welcome to IN+</h3>\n        <p>Perfectly designed and precisely prepared admin theme with over 50 pages with extra new web app views.\n        </p>\n        <p>Login in. To see it in action.</p>\n        <form class=\"m-t\" role=\"form\" action=\"#\">\n            <div class=\"form-group\">\n                <input type=\"email\" class=\"form-control\" placeholder=\"Username\" required=\"\">\n            </div>\n            <div class=\"form-group\">\n                <input type=\"password\" class=\"form-control\" placeholder=\"Password\" required=\"\">\n            </div>\n            <button type=\"submit\" class=\"btn btn-primary block full-width m-b\">Login</button>\n\n            <a href=\"#\"><small>Forgot password?</small></a>\n            <p class=\"text-muted text-center\"><small>Do not have an account?</small></p>\n            <a class=\"btn btn-sm btn-white btn-block\" href=\"#\">Create an account</a>\n        </form>\n        <p class=\"m-t\"> <small>Inspinia we app framework base on Bootstrap 3 &copy; 2014</small> </p>\n    </div>\n</div>\n"

/***/ }),

/***/ 575:
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper wrapper-content animated fadeInRight\">\n    <div class=\"row\">\n        <div class=\"col-lg-12\">\n            <div class=\"text-center m-t-lg\">\n                <h1>\n                    Welcome in Inspinia Angular 4 Starter Project\n                </h1>\n                <small>\n                    It is an application skeleton for a typical web app. You can use it to quickly bootstrap your webapp projects and dev environment.\n                </small>\n              <ul>\n                <li class=\"text\" *ngFor=\"let item of items | async\">\n                  {{item.$value}}\n                </li>\n              </ul>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ 576:
/***/ (function(module, exports) {

module.exports = "<div class=\"row  border-bottom white-bg dashboard-header\">\n  <div class=\"col-sm-3\">\n    <h2>Welcome Amelia</h2>\n    <small>You have 42 messages and 6 notifications.</small>\n    <ul class=\"list-group clear-list m-t\">\n      <li class=\"list-group-item fist-item\">\n                                <span class=\"pull-right\">\n                                    09:00 pm\n                                </span>\n        <span class=\"label label-success\">1</span> Please contact me\n      </li>\n      <li class=\"list-group-item\">\n                                <span class=\"pull-right\">\n                                    10:16 am\n                                </span>\n        <span class=\"label label-info\">2</span> Sign a contract\n      </li>\n      <li class=\"list-group-item\">\n                                <span class=\"pull-right\">\n                                    08:22 pm\n                                </span>\n        <span class=\"label label-primary\">3</span> Open new shop\n      </li>\n      <li class=\"list-group-item\">\n                                <span class=\"pull-right\">\n                                    11:06 pm\n                                </span>\n        <span class=\"label label-default\">4</span> Call back to Sylvia\n      </li>\n      <li class=\"list-group-item\">\n                                <span class=\"pull-right\">\n                                    12:00 am\n                                </span>\n        <span class=\"label label-primary\">5</span> Write a letter to Sandra\n      </li>\n    </ul>\n  </div>\n  <div class=\"col-sm-6\">\n    <div class=\"flot-chart dashboard-chart\">\n      <div flotChart class=\"flot-chart-content\" [options]=\"flotOptions\" [dataset]=\"flotDataset\"></div>\n    </div>\n    <div class=\"row text-left\">\n      <div class=\"col-xs-4\">\n        <div class=\" m-l-md\">\n          <span class=\"h4 font-bold m-t block\">$ 406,100</span>\n          <small class=\"text-muted m-b block\">Sales marketing report</small>\n        </div>\n      </div>\n      <div class=\"col-xs-4\">\n        <span class=\"h4 font-bold m-t block\">$ 150,401</span>\n        <small class=\"text-muted m-b block\">Annual sales revenue</small>\n      </div>\n      <div class=\"col-xs-4\">\n        <span class=\"h4 font-bold m-t block\">$ 16,822</span>\n        <small class=\"text-muted m-b block\">Half-year revenue margin</small>\n      </div>\n\n    </div>\n  </div>\n  <div class=\"col-sm-3\">\n    <div class=\"statistic-box\">\n      <h4>\n        Project Beta progress\n      </h4>\n\n      <p>\n        You have two project with not compleated task.\n      </p>\n\n      <div class=\"row text-center\">\n        <div class=\"col-lg-6\">\n          <div style=\"height: 80px; width: 80px; margin: auto\">\n            <canvas baseChart\n                    [data]=\"doughnutChartData1\"\n                    [labels]=\"doughnutChartLabels1\"\n                    [chartType]=\"doughnutChartType\"\n                    [colors]=\"colors\"\n                    [legend]=\"false\"></canvas>\n          </div>\n          <h5>Kolter</h5>\n        </div>\n        <div class=\"col-lg-6\">\n          <div style=\"height: 80px; width: 80px; margin: auto\">\n            <canvas baseChart\n                    [data]=\"doughnutChartData2\"\n                    [labels]=\"doughnutChartLabels2\"\n                    [chartType]=\"doughnutChartType\"\n                    [colors]=\"colors\"\n                    [legend]=\"false\"></canvas>\n          </div>\n          <h5>Maxtor</h5>\n        </div>\n      </div>\n      <div class=\"m-t\">\n        <small>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</small>\n      </div>\n\n    </div>\n  </div>\n\n</div>\n\n<div class=\"row\">\n  <div class=\"col-lg-12\">\n    <div class=\"wrapper wrapper-content\">\n      <div class=\"row\">\n        <div class=\"col-lg-4\">\n          <div class=\"ibox float-e-margins\">\n            <div class=\"ibox-title\">\n              <h5>New data for the report</h5> <span class=\"label label-primary\">IN+</span>\n              <iboxtools></iboxtools>\n            </div>\n            <div class=\"ibox-content\">\n              <div>\n\n                <div class=\"pull-right text-right\">\n\n                  <span peity [type]=\"peityType1\" [options]=\"peityOptions1\">5,3,9,6,5,9,7,3,5,2,4,7,3,2,7,9,6,4,5,7,3,2,1,0,9,5,6,8,3,2,1</span>\n                  <br/>\n                  <small class=\"font-bold\">$ 20 054.43</small>\n                </div>\n                <h4>NYS report new data!\n                  <br/>\n                  <small class=\"m-r\"><a href=\"#\"> Check the stock price! </a> </small>\n                </h4>\n              </div>\n            </div>\n          </div>\n          <div class=\"ibox float-e-margins\">\n            <div class=\"ibox-title\">\n              <h5>Read below comments</h5>\n              <iboxtools></iboxtools>\n            </div>\n            <div class=\"ibox-content no-padding\">\n              <ul class=\"list-group\">\n                <li class=\"list-group-item\">\n                  <p><a class=\"text-info\" href=\"#\">@Alan Marry</a> I belive that. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>\n                  <small class=\"block text-muted\"><i class=\"fa fa-clock-o\"></i> 1 minuts ago</small>\n                </li>\n                <li class=\"list-group-item\">\n                  <p><a class=\"text-info\" href=\"#\">@Stock Man</a> Check this stock chart. This price is crazy! </p>\n                  <div class=\"text-center m\">\n                    <span sparkline [datasets]=\"sparklineData\" [options]=\"sparklineOptions\"></span>\n                  </div>\n                  <small class=\"block text-muted\"><i class=\"fa fa-clock-o\"></i> 2 hours ago</small>\n                </li>\n                <li class=\"list-group-item\">\n                  <p><a class=\"text-info\" href=\"#\">@Kevin Smith</a> Lorem ipsum unknown printer took a galley </p>\n                  <small class=\"block text-muted\"><i class=\"fa fa-clock-o\"></i> 2 minuts ago</small>\n                </li>\n                <li class=\"list-group-item \">\n                  <p><a class=\"text-info\" href=\"#\">@Jonathan Febrick</a> The standard chunk of Lorem Ipsum</p>\n                  <small class=\"block text-muted\"><i class=\"fa fa-clock-o\"></i> 1 hour ago</small>\n                </li>\n                <li class=\"list-group-item\">\n                  <p><a class=\"text-info\" href=\"#\">@Alan Marry</a> I belive that. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>\n                  <small class=\"block text-muted\"><i class=\"fa fa-clock-o\"></i> 1 minuts ago</small>\n                </li>\n                <li class=\"list-group-item\">\n                  <p><a class=\"text-info\" href=\"#\">@Kevin Smith</a> Lorem ipsum unknown printer took a galley </p>\n                  <small class=\"block text-muted\"><i class=\"fa fa-clock-o\"></i> 2 minuts ago</small>\n                </li>\n              </ul>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-lg-4\">\n          <div class=\"ibox float-e-margins\">\n            <div class=\"ibox-title\">\n              <h5>Your daily feed</h5>\n              <div class=\"ibox-tools\">\n                <span class=\"label label-warning-light pull-right\">10 Messages</span>\n              </div>\n            </div>\n            <div class=\"ibox-content\">\n\n              <div>\n                <div class=\"feed-activity-list\">\n\n                  <div class=\"feed-element\">\n                    <a href=\"profile.html\" class=\"pull-left\">\n                      <img alt=\"image\" class=\"img-circle\" src=\"assets/images/profile.jpg\">\n                    </a>\n                    <div class=\"media-body \">\n                      <small class=\"pull-right\">5m ago</small>\n                      <strong>Monica Smith</strong> posted a new blog. <br>\n                      <small class=\"text-muted\">Today 5:60 pm - 12.06.2014</small>\n\n                    </div>\n                  </div>\n\n                  <div class=\"feed-element\">\n                    <a href=\"profile.html\" class=\"pull-left\">\n                      <img alt=\"image\" class=\"img-circle\" src=\"assets/images/a2.jpg\">\n                    </a>\n                    <div class=\"media-body \">\n                      <small class=\"pull-right\">2h ago</small>\n                      <strong>Mark Johnson</strong> posted message on <strong>Monica Smith</strong> site. <br>\n                      <small class=\"text-muted\">Today 2:10 pm - 12.06.2014</small>\n                    </div>\n                  </div>\n                  <div class=\"feed-element\">\n                    <a href=\"profile.html\" class=\"pull-left\">\n                      <img alt=\"image\" class=\"img-circle\" src=\"assets/images/a3.jpg\">\n                    </a>\n                    <div class=\"media-body \">\n                      <small class=\"pull-right\">2h ago</small>\n                      <strong>Janet Rosowski</strong> add 1 photo on <strong>Monica Smith</strong>. <br>\n                      <small class=\"text-muted\">2 days ago at 8:30am</small>\n                    </div>\n                  </div>\n                  <div class=\"feed-element\">\n                    <a href=\"profile.html\" class=\"pull-left\">\n                      <img alt=\"image\" class=\"img-circle\" src=\"assets/images/a4.jpg\">\n                    </a>\n                    <div class=\"media-body \">\n                      <small class=\"pull-right text-navy\">5h ago</small>\n                      <strong>Chris Johnatan Overtunk</strong> started following <strong>Monica Smith</strong>. <br>\n                      <small class=\"text-muted\">Yesterday 1:21 pm - 11.06.2014</small>\n                      <div class=\"actions\">\n                        <a class=\"btn btn-xs btn-white\"><i class=\"fa fa-thumbs-up\"></i> Like </a>\n                        <a class=\"btn btn-xs btn-white\"><i class=\"fa fa-heart\"></i> Love</a>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"feed-element\">\n                    <a href=\"profile.html\" class=\"pull-left\">\n                      <img alt=\"image\" class=\"img-circle\" src=\"assets/images/a5.jpg\">\n                    </a>\n                    <div class=\"media-body \">\n                      <small class=\"pull-right\">2h ago</small>\n                      <strong>Kim Smith</strong> posted message on <strong>Monica Smith</strong> site. <br>\n                      <small class=\"text-muted\">Yesterday 5:20 pm - 12.06.2014</small>\n                      <div class=\"well\">\n                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.\n                        Over the years, sometimes by accident, sometimes on purpose (injected humour and the like).\n                      </div>\n                      <div class=\"pull-right\">\n                        <a class=\"btn btn-xs btn-white\"><i class=\"fa fa-thumbs-up\"></i> Like </a>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"feed-element\">\n                    <a href=\"profile.html\" class=\"pull-left\">\n                      <img alt=\"image\" class=\"img-circle\" src=\"assets/images/profile.jpg\">\n                    </a>\n                    <div class=\"media-body \">\n                      <small class=\"pull-right\">23h ago</small>\n                      <strong>Monica Smith</strong> love <strong>Kim Smith</strong>. <br>\n                      <small class=\"text-muted\">2 days ago at 2:30 am - 11.06.2014</small>\n                    </div>\n                  </div>\n                  <div class=\"feed-element\">\n                    <a href=\"profile.html\" class=\"pull-left\">\n                      <img alt=\"image\" class=\"img-circle\" src=\"assets/images/a7.jpg\">\n                    </a>\n                    <div class=\"media-body \">\n                      <small class=\"pull-right\">46h ago</small>\n                      <strong>Mike Loreipsum</strong> started following <strong>Monica Smith</strong>. <br>\n                      <small class=\"text-muted\">3 days ago at 7:58 pm - 10.06.2014</small>\n                    </div>\n                  </div>\n                </div>\n\n                <button class=\"btn btn-primary btn-block m-t\"><i class=\"fa fa-arrow-down\"></i> Show More</button>\n\n              </div>\n\n            </div>\n          </div>\n\n        </div>\n        <div class=\"col-lg-4\">\n          <div class=\"ibox float-e-margins\">\n            <div class=\"ibox-title\">\n              <h5>Alpha project</h5>\n              <iboxtools></iboxtools>\n            </div>\n            <div class=\"ibox-content ibox-heading\">\n              <h3>You have meeting today!</h3>\n              <small><i class=\"fa fa-map-marker\"></i> Meeting is on 6:00am. Check your schedule to see detail.</small>\n            </div>\n            <div class=\"ibox-content inspinia-timeline\">\n\n              <div class=\"timeline-item\">\n                <div class=\"row\">\n                  <div class=\"col-xs-3 date\">\n                    <i class=\"fa fa-briefcase\"></i>\n                    6:00 am\n                    <br/>\n                    <small class=\"text-navy\">2 hour ago</small>\n                  </div>\n                  <div class=\"col-xs-7 content no-top-border\">\n                    <p class=\"m-b-xs\"><strong>Meeting</strong></p>\n\n                    <p>Conference on the sales results for the previous year. Monica please examine sales trends in marketing and products. Below please find the current status of the\n                      sale.</p>\n\n                    <p><span peity [type]=\"peityType2\" [options]=\"peityOptions2\">5,3,9,6,5,9,7,3,5,2,5,3,9,6,5,9,4,7,3,2,9,8,7,4,5,1,2,9,5,4,7,2,7,7,3,5,2</span></p>\n                  </div>\n                </div>\n              </div>\n              <div class=\"timeline-item\">\n                <div class=\"row\">\n                  <div class=\"col-xs-3 date\">\n                    <i class=\"fa fa-file-text\"></i>\n                    7:00 am\n                    <br/>\n                    <small class=\"text-navy\">3 hour ago</small>\n                  </div>\n                  <div class=\"col-xs-7 content\">\n                    <p class=\"m-b-xs\"><strong>Send documents to Mike</strong></p>\n                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.</p>\n                  </div>\n                </div>\n              </div>\n              <div class=\"timeline-item\">\n                <div class=\"row\">\n                  <div class=\"col-xs-3 date\">\n                    <i class=\"fa fa-coffee\"></i>\n                    8:00 am\n                    <br/>\n                  </div>\n                  <div class=\"col-xs-7 content\">\n                    <p class=\"m-b-xs\"><strong>Coffee Break</strong></p>\n                    <p>\n                      Go to shop and find some products.\n                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.\n                    </p>\n                  </div>\n                </div>\n              </div>\n              <div class=\"timeline-item\">\n                <div class=\"row\">\n                  <div class=\"col-xs-3 date\">\n                    <i class=\"fa fa-phone\"></i>\n                    11:00 am\n                    <br/>\n                    <small class=\"text-navy\">21 hour ago</small>\n                  </div>\n                  <div class=\"col-xs-7 content\">\n                    <p class=\"m-b-xs\"><strong>Phone with Jeronimo</strong></p>\n                    <p>\n                      Lorem Ipsum has been the industry's standard dummy text ever since.\n                    </p>\n                  </div>\n                </div>\n              </div>\n              <div class=\"timeline-item\">\n                <div class=\"row\">\n                  <div class=\"col-xs-3 date\">\n                    <i class=\"fa fa-user-md\"></i>\n                    09:00 pm\n                    <br/>\n                    <small>21 hour ago</small>\n                  </div>\n                  <div class=\"col-xs-7 content\">\n                    <p class=\"m-b-xs\"><strong>Go to the doctor dr Smith</strong></p>\n                    <p>\n                      Find some issue and go to doctor.\n                    </p>\n                  </div>\n                </div>\n              </div>\n              <div class=\"timeline-item\">\n                <div class=\"row\">\n                  <div class=\"col-xs-3 date\">\n                    <i class=\"fa fa-comments\"></i>\n                    12:50 pm\n                    <br/>\n                    <small class=\"text-navy\">48 hour ago</small>\n                  </div>\n                  <div class=\"col-xs-7 content\">\n                    <p class=\"m-b-xs\"><strong>Chat with Monica and Sandra</strong></p>\n                    <p>\n                      Web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).\n                    </p>\n                  </div>\n                </div>\n              </div>\n\n            </div>\n          </div>\n        </div>\n\n      </div>\n    </div>\n    <div class=\"footer\">\n      <div class=\"pull-right\">\n        10GB of <strong>250GB</strong> Free.\n      </div>\n      <div>\n        <strong>Copyright</strong> Example Company &copy; 2014-2017\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 577:
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper wrapper-content\">\n  <div class=\"row\">\n    <div class=\"col-lg-3\">\n      <div class=\"ibox float-e-margins\">\n        <div class=\"ibox-title\">\n          <span class=\"label label-success pull-right\">Monthly</span>\n          <h5>Income</h5>\n        </div>\n        <div class=\"ibox-content\">\n          <h1 class=\"no-margins\">40 886,200</h1>\n          <div class=\"stat-percent font-bold text-success\">98% <i class=\"fa fa-bolt\"></i></div>\n          <small>Total income</small>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-lg-3\">\n      <div class=\"ibox float-e-margins\">\n        <div class=\"ibox-title\">\n          <span class=\"label label-info pull-right\">Annual</span>\n          <h5>Orders</h5>\n        </div>\n        <div class=\"ibox-content\">\n          <h1 class=\"no-margins\">275,800</h1>\n          <div class=\"stat-percent font-bold text-info\">20% <i class=\"fa fa-level-up\"></i></div>\n          <small>New orders</small>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-lg-3\">\n      <div class=\"ibox float-e-margins\">\n        <div class=\"ibox-title\">\n          <span class=\"label label-primary pull-right\">Today</span>\n          <h5>visits</h5>\n        </div>\n        <div class=\"ibox-content\">\n          <h1 class=\"no-margins\">106,120</h1>\n          <div class=\"stat-percent font-bold text-navy\">44% <i class=\"fa fa-level-up\"></i></div>\n          <small>New visits</small>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-lg-3\">\n      <div class=\"ibox float-e-margins\">\n        <div class=\"ibox-title\">\n          <span class=\"label label-danger pull-right\">Low value</span>\n          <h5>User activity</h5>\n        </div>\n        <div class=\"ibox-content\">\n          <h1 class=\"no-margins\">80,600</h1>\n          <div class=\"stat-percent font-bold text-danger\">38% <i class=\"fa fa-level-down\"></i></div>\n          <small>In first month</small>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-lg-12\">\n      <div class=\"ibox float-e-margins\">\n        <div class=\"ibox-title\">\n          <h5>Orders</h5>\n          <div class=\"pull-right\">\n            <div class=\"btn-group\">\n              <button type=\"button\" class=\"btn btn-xs btn-white active\">Today</button>\n              <button type=\"button\" class=\"btn btn-xs btn-white\">Monthly</button>\n              <button type=\"button\" class=\"btn btn-xs btn-white\">Annual</button>\n            </div>\n          </div>\n        </div>\n        <div class=\"ibox-content\">\n          <div class=\"row\">\n            <div class=\"col-lg-9\">\n              <div class=\"flot-chart\">\n                <div flotChart class=\"flot-chart-content\" [options]=\"flotOptions\" [dataset]=\"flotDataset\"></div>\n              </div>\n            </div>\n            <div class=\"col-lg-3\">\n              <ul class=\"stat-list\">\n                <li>\n                  <h2 class=\"no-margins\">2,346</h2>\n                  <small>Total orders in period</small>\n                  <div class=\"stat-percent\">48% <i class=\"fa fa-level-up text-navy\"></i></div>\n                  <div class=\"progress progress-mini\">\n                    <div style=\"width: 48%;\" class=\"progress-bar\"></div>\n                  </div>\n                </li>\n                <li>\n                  <h2 class=\"no-margins \">4,422</h2>\n                  <small>Orders in last month</small>\n                  <div class=\"stat-percent\">60% <i class=\"fa fa-level-down text-navy\"></i></div>\n                  <div class=\"progress progress-mini\">\n                    <div style=\"width: 60%;\" class=\"progress-bar\"></div>\n                  </div>\n                </li>\n                <li>\n                  <h2 class=\"no-margins \">9,180</h2>\n                  <small>Monthly income from orders</small>\n                  <div class=\"stat-percent\">22% <i class=\"fa fa-bolt text-navy\"></i></div>\n                  <div class=\"progress progress-mini\">\n                    <div style=\"width: 22%;\" class=\"progress-bar\"></div>\n                  </div>\n                </li>\n              </ul>\n            </div>\n          </div>\n        </div>\n\n      </div>\n    </div>\n  </div>\n\n\n  <div class=\"row\">\n    <div class=\"col-lg-4\">\n      <div class=\"ibox float-e-margins\">\n        <div class=\"ibox-title\">\n          <h5>Messages</h5>\n          <iboxtools></iboxtools>\n        </div>\n        <div class=\"ibox-content ibox-heading\">\n          <h3><i class=\"fa fa-envelope-o\"></i> New messages</h3>\n          <small><i class=\"fa fa-tim\"></i> You have 22 new messages and 16 waiting in draft folder.</small>\n        </div>\n        <div class=\"ibox-content\">\n          <div class=\"feed-activity-list\">\n\n            <div class=\"feed-element\">\n              <div>\n                <small class=\"pull-right text-navy\">1m ago</small>\n                <strong>Monica Smith</strong>\n                <div>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum</div>\n                <small class=\"text-muted\">Today 5:60 pm - 12.06.2014</small>\n              </div>\n            </div>\n\n            <div class=\"feed-element\">\n              <div>\n                <small class=\"pull-right\">2m ago</small>\n                <strong>Jogn Angel</strong>\n                <div>There are many variations of passages of Lorem Ipsum available</div>\n                <small class=\"text-muted\">Today 2:23 pm - 11.06.2014</small>\n              </div>\n            </div>\n\n            <div class=\"feed-element\">\n              <div>\n                <small class=\"pull-right\">5m ago</small>\n                <strong>Jesica Ocean</strong>\n                <div>Contrary to popular belief, Lorem Ipsum</div>\n                <small class=\"text-muted\">Today 1:00 pm - 08.06.2014</small>\n              </div>\n            </div>\n\n            <div class=\"feed-element\">\n              <div>\n                <small class=\"pull-right\">5m ago</small>\n                <strong>Monica Jackson</strong>\n                <div>The generated Lorem Ipsum is therefore </div>\n                <small class=\"text-muted\">Yesterday 8:48 pm - 10.06.2014</small>\n              </div>\n            </div>\n\n\n            <div class=\"feed-element\">\n              <div>\n                <small class=\"pull-right\">5m ago</small>\n                <strong>Anna Legend</strong>\n                <div>All the Lorem Ipsum generators on the Internet tend to repeat </div>\n                <small class=\"text-muted\">Yesterday 8:48 pm - 10.06.2014</small>\n              </div>\n            </div>\n            <div class=\"feed-element\">\n              <div>\n                <small class=\"pull-right\">5m ago</small>\n                <strong>Damian Nowak</strong>\n                <div>The standard chunk of Lorem Ipsum used </div>\n                <small class=\"text-muted\">Yesterday 8:48 pm - 10.06.2014</small>\n              </div>\n            </div>\n            <div class=\"feed-element\">\n              <div>\n                <small class=\"pull-right\">5m ago</small>\n                <strong>Gary Smith</strong>\n                <div>200 Latin words, combined with a handful</div>\n                <small class=\"text-muted\">Yesterday 8:48 pm - 10.06.2014</small>\n              </div>\n            </div>\n\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"col-lg-8\">\n\n      <div class=\"row\">\n        <div class=\"col-lg-6\">\n          <div class=\"ibox float-e-margins\">\n            <div class=\"ibox-title\">\n              <h5>User project list</h5>\n              <iboxtools></iboxtools>\n            </div>\n            <div class=\"ibox-content\">\n              <table class=\"table table-hover no-margins\">\n                <thead>\n                <tr>\n                  <th>Status</th>\n                  <th>Date</th>\n                  <th>User</th>\n                  <th>Value</th>\n                </tr>\n                </thead>\n                <tbody>\n                <tr>\n                  <td><small>Pending...</small></td>\n                  <td><i class=\"fa fa-clock-o\"></i> 11:20pm</td>\n                  <td>Samantha</td>\n                  <td class=\"text-navy\"> <i class=\"fa fa-level-up\"></i> 24% </td>\n                </tr>\n                <tr>\n                  <td><span class=\"label label-warning\">Canceled</span> </td>\n                  <td><i class=\"fa fa-clock-o\"></i> 10:40am</td>\n                  <td>Monica</td>\n                  <td class=\"text-navy\"> <i class=\"fa fa-level-up\"></i> 66% </td>\n                </tr>\n                <tr>\n                  <td><small>Pending...</small> </td>\n                  <td><i class=\"fa fa-clock-o\"></i> 01:30pm</td>\n                  <td>John</td>\n                  <td class=\"text-navy\"> <i class=\"fa fa-level-up\"></i> 54% </td>\n                </tr>\n                <tr>\n                  <td><small>Pending...</small> </td>\n                  <td><i class=\"fa fa-clock-o\"></i> 02:20pm</td>\n                  <td>Agnes</td>\n                  <td class=\"text-navy\"> <i class=\"fa fa-level-up\"></i> 12% </td>\n                </tr>\n                <tr>\n                  <td><small>Pending...</small> </td>\n                  <td><i class=\"fa fa-clock-o\"></i> 09:40pm</td>\n                  <td>Janet</td>\n                  <td class=\"text-navy\"> <i class=\"fa fa-level-up\"></i> 22% </td>\n                </tr>\n                <tr>\n                  <td><span class=\"label label-primary\">Completed</span> </td>\n                  <td><i class=\"fa fa-clock-o\"></i> 04:10am</td>\n                  <td>Amelia</td>\n                  <td class=\"text-navy\"> <i class=\"fa fa-level-up\"></i> 66% </td>\n                </tr>\n                <tr>\n                  <td><small>Pending...</small> </td>\n                  <td><i class=\"fa fa-clock-o\"></i> 12:08am</td>\n                  <td>Damian</td>\n                  <td class=\"text-navy\"> <i class=\"fa fa-level-up\"></i> 23% </td>\n                </tr>\n                </tbody>\n              </table>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-lg-6\">\n          <div class=\"ibox float-e-margins\">\n            <div class=\"ibox-title\">\n              <h5>Small todo list</h5>\n              <iboxtools></iboxtools>\n            </div>\n            <div class=\"ibox-content\">\n              <ul class=\"todo-list m-t small-list\">\n                <li *ngFor=\"let todo of todos; let i=index\">\n                  <a (click)=\"todo.completed = !todo.completed\" class=\"check-link\"><i class=\"fa\" [ngClass]=\"{'fa-check-square': todo.completed,'fa-square-o': !todo.completed}\"></i> </a>\n                  <span class=\"m-l-xs\" [ngClass]=\"{'todo-completed': todo.completed}\">{{ todo.name }}</span>\n                  <small *ngIf=\"todo.time\" class=\"label label-primary\"><i class=\"fa fa-clock-o\"></i> {{todo.time}} mins</small>\n                </li>\n              </ul>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-lg-12\">\n          <div class=\"ibox float-e-margins\">\n            <div class=\"ibox-title\">\n              <h5>Transactions worldwide</h5>\n              <iboxtools></iboxtools>\n            </div>\n            <div class=\"ibox-content\">\n\n              <div class=\"row\">\n                <div class=\"col-lg-6\">\n                  <table class=\"table table-hover margin bottom\">\n                    <thead>\n                    <tr>\n                      <th style=\"width: 1%\" class=\"text-center\">No.</th>\n                      <th>Transaction</th>\n                      <th class=\"text-center\">Date</th>\n                      <th class=\"text-center\">Amount</th>\n                    </tr>\n                    </thead>\n                    <tbody>\n                    <tr>\n                      <td class=\"text-center\">1</td>\n                      <td> Security doors\n                      </td>\n                      <td class=\"text-center small\">16 Jun 2014</td>\n                      <td class=\"text-center\"><span class=\"label label-primary\">$483.00</span></td>\n\n                    </tr>\n                    <tr>\n                      <td class=\"text-center\">2</td>\n                      <td> Wardrobes\n                      </td>\n                      <td class=\"text-center small\">10 Jun 2014</td>\n                      <td class=\"text-center\"><span class=\"label label-primary\">$327.00</span></td>\n\n                    </tr>\n                    <tr>\n                      <td class=\"text-center\">3</td>\n                      <td> Set of tools\n                      </td>\n                      <td class=\"text-center small\">12 Jun 2014</td>\n                      <td class=\"text-center\"><span class=\"label label-warning\">$125.00</span></td>\n\n                    </tr>\n                    <tr>\n                      <td class=\"text-center\">4</td>\n                      <td> Panoramic pictures</td>\n                      <td class=\"text-center small\">22 Jun 2013</td>\n                      <td class=\"text-center\"><span class=\"label label-primary\">$344.00</span></td>\n                    </tr>\n                    <tr>\n                      <td class=\"text-center\">5</td>\n                      <td>Phones</td>\n                      <td class=\"text-center small\">24 Jun 2013</td>\n                      <td class=\"text-center\"><span class=\"label label-primary\">$235.00</span></td>\n                    </tr>\n                    <tr>\n                      <td class=\"text-center\">6</td>\n                      <td>Monitors</td>\n                      <td class=\"text-center small\">26 Jun 2013</td>\n                      <td class=\"text-center\"><span class=\"label label-primary\">$100.00</span></td>\n                    </tr>\n                    </tbody>\n                  </table>\n                </div>\n                <div class=\"col-lg-6\">\n                  <div jvectormap id=\"world-map\" style=\"height: 300px;\" [options]=\"mapOptions\"></div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n\n    </div>\n\n\n  </div>\n</div>\n"

/***/ }),

/***/ 578:
/***/ (function(module, exports) {

module.exports = "<div class=\"sidebar-panel\">\n  <div>\n    <h4>Messages <span class=\"badge badge-info pull-right\">16</span></h4>\n    <div class=\"feed-element\">\n      <a href=\"#\" class=\"pull-left\">\n        <img alt=\"image\" class=\"img-circle\" src=\"assets/images/a1.jpg\">\n      </a>\n      <div class=\"media-body\">\n        There are many variations of passages of Lorem Ipsum available.\n        <br>\n        <small class=\"text-muted\">Today 4:21 pm</small>\n      </div>\n    </div>\n    <div class=\"feed-element\">\n      <a href=\"#\" class=\"pull-left\">\n        <img alt=\"image\" class=\"img-circle\" src=\"assets/images/a2.jpg\">\n      </a>\n      <div class=\"media-body\">\n        TIt is a long established fact that.\n        <br>\n        <small class=\"text-muted\">Yesterday 2:45 pm</small>\n      </div>\n    </div>\n    <div class=\"feed-element\">\n      <a href=\"#\" class=\"pull-left\">\n        <img alt=\"image\" class=\"img-circle\" src=\"assets/images/a3.jpg\">\n      </a>\n      <div class=\"media-body\">\n        Many desktop publishing packages.\n        <br>\n        <small class=\"text-muted\">Yesterday 1:10 pm</small>\n      </div>\n    </div>\n    <div class=\"feed-element\">\n      <a href=\"#\" class=\"pull-left\">\n        <img alt=\"image\" class=\"img-circle\" src=\"assets/images/a4.jpg\">\n      </a>\n      <div class=\"media-body\">\n        The generated Lorem Ipsum is therefore always free.\n        <br>\n        <small class=\"text-muted\">Monday 8:37 pm</small>\n      </div>\n    </div>\n  </div>\n  <div class=\"m-t-md\">\n    <h4>Statistics</h4>\n    <p>\n      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.\n    </p>\n    <div class=\"row m-t-sm\">\n      <div class=\"col-md-6\">\n        <span peity [type]=\"peityType1\" [options]=\"peityOptions2\">5,3,9,6,5,9,7,3,5,2</span>\n        <h5><strong>169</strong> Posts</h5>\n      </div>\n      <div class=\"col-md-6\">\n        <span peity [type]=\"peityType2\" [options]=\"peityOptions3\">5,3,9,6,5,9,7,3,5,2</span>\n        <h5><strong>28</strong> Orders</h5>\n      </div>\n    </div>\n  </div>\n  <div class=\"m-t-md\">\n    <h4>Discussion</h4>\n    <div>\n      <ul class=\"list-group\">\n        <li class=\"list-group-item\">\n          <span class=\"badge badge-primary\">16</span>\n          General topic\n        </li>\n        <li class=\"list-group-item \">\n          <span class=\"badge badge-info\">12</span>\n          The generated Lorem\n        </li>\n        <li class=\"list-group-item\">\n          <span class=\"badge badge-warning\">7</span>\n          There are many variations\n        </li>\n      </ul>\n    </div>\n  </div>\n</div>\n<div class=\"wrapper wrapper-content\">\n  <div class=\"row\">\n    <div class=\"col-lg-12\">\n      <div class=\"ibox float-e-margins\">\n        <div class=\"ibox-content\">\n          <div>\n                                        <span class=\"pull-right text-right\">\n                                        <small>Average value of sales in the past month in: <strong>United states</strong></small>\n                                            <br/>\n                                            All sales: 162,862\n                                        </span>\n\n            <h1 class=\"m-b-xs\">$ 50,992</h1>\n\n            <h3 class=\"font-bold no-margins\">\n              Half-year revenue margin\n            </h3>\n            <small>Sales marketing.</small>\n          </div>\n\n          <div>\n            <canvas baseChart height=\"70\"\n                    [datasets]=\"lineChartData\"\n                    [labels]=\"lineChartLabels\"\n                    [options]=\"lineChartOptions\"\n                    [chartType]=\"lineChartType\"\n                    [colors]=\"lineChartColors\">\n            </canvas>\n          </div>\n\n          <div class=\"m-t-md\">\n            <small class=\"pull-right\">\n              <i class=\"fa fa-clock-o\"> </i>\n              Update on 16.07.2015\n            </small>\n            <small>\n              <strong>Analysis of sales:</strong> The value has been changed over time, and last month reached a level over $50,000.\n            </small>\n          </div>\n\n        </div>\n      </div>\n    </div>\n  </div>\n\n\n  <div class=\"row\">\n\n    <div class=\"col-lg-4\">\n      <div class=\"ibox float-e-margins\">\n        <div class=\"ibox-title\">\n          <span class=\"label label-primary pull-right\">Today</span>\n          <h5>visits</h5>\n        </div>\n        <div class=\"ibox-content\">\n          <h1 class=\"no-margins\">22 285,400</h1>\n          <div class=\"stat-percent font-bold text-navy\">20% <i class=\"fa fa-level-up\"></i></div>\n          <small>New orders</small>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-lg-4\">\n      <div class=\"ibox float-e-margins\">\n        <div class=\"ibox-title\">\n          <span class=\"label label-info pull-right\">Monthly</span>\n          <h5>Orders</h5>\n        </div>\n        <div class=\"ibox-content\">\n          <h1 class=\"no-margins\">60 420,600</h1>\n          <div class=\"stat-percent font-bold text-info\">40% <i class=\"fa fa-level-up\"></i></div>\n          <small>New orders</small>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-lg-4\">\n      <div class=\"ibox float-e-margins\">\n        <div class=\"ibox-title\">\n          <span class=\"label label-warning pull-right\">Annual</span>\n          <h5>Income</h5>\n        </div>\n        <div class=\"ibox-content\">\n          <h1 class=\"no-margins\">$ 120 430,800</h1>\n          <div class=\"stat-percent font-bold text-warning\">16% <i class=\"fa fa-level-up\"></i></div>\n          <small>New orders</small>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-lg-6\">\n      <div class=\"ibox float-e-margins\">\n        <div class=\"ibox-title\">\n          <h5>New data for the report</h5>\n          <iboxtools></iboxtools>\n        </div>\n        <div class=\"ibox-content ibox-heading\">\n          <h3>Stock price up\n            <div class=\"stat-percent text-navy\">34% <i class=\"fa fa-level-up\"></i></div>\n          </h3>\n          <small><i class=\"fa fa-stack-exchange\"></i> New economic data from the previous quarter.</small>\n        </div>\n        <div class=\"ibox-content\">\n          <div>\n\n            <div class=\"pull-right text-right\">\n\n              <span peity [type]=\"peityType1\" [options]=\"peityOptions1\">5,3,9,6,5,9,7,3,5,2,4,7,3,2,7,9,6,4,5,7,3,2,1,0,9,5,6,8,3,2,1</span>\n              <br/>\n              <small class=\"font-bold\">$ 20 054.43</small>\n            </div>\n            <h4>NYS report new data!\n              <br/>\n              <small class=\"m-r\"><a href=\"graph_flot.html\"> Check the stock price! </a> </small>\n            </h4>\n          </div>\n        </div>\n      </div>\n      <div class=\"ibox float-e-margins\">\n        <div class=\"ibox-title\">\n          <h5>Read below comments and tweets</h5>\n          <iboxtools></iboxtools>\n        </div>\n        <div class=\"ibox-content no-padding\">\n          <ul class=\"list-group\">\n            <li class=\"list-group-item\">\n              <p><a class=\"text-info\" href=\"#\">@Alan Marry</a> I belive that. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>\n              <small class=\"block text-muted\"><i class=\"fa fa-clock-o\"></i> 1 minuts ago</small>\n            </li>\n            <li class=\"list-group-item\">\n              <p><a class=\"text-info\" href=\"#\">@Stock Man</a> Check this stock chart. This price is crazy! </p>\n              <small class=\"block text-muted\"><i class=\"fa fa-clock-o\"></i> 2 hours ago</small>\n            </li>\n            <li class=\"list-group-item\">\n              <p><a class=\"text-info\" href=\"#\">@Kevin Smith</a> Lorem ipsum unknown printer took a galley </p>\n              <small class=\"block text-muted\"><i class=\"fa fa-clock-o\"></i> 2 minuts ago</small>\n            </li>\n            <li class=\"list-group-item \">\n              <p><a class=\"text-info\" href=\"#\">@Jonathan Febrick</a> The standard chunk of Lorem Ipsum</p>\n              <small class=\"block text-muted\"><i class=\"fa fa-clock-o\"></i> 1 hour ago</small>\n            </li>\n          </ul>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"col-lg-6\">\n      <div class=\"ibox float-e-margins\">\n        <div class=\"ibox-title\">\n          <h5>Timeline</h5>\n          <span class=\"label label-primary\">Meeting today</span>\n          <iboxtools></iboxtools>\n        </div>\n\n        <div class=\"ibox-content inspinia-timeline\">\n\n          <div class=\"timeline-item\">\n            <div class=\"row\">\n              <div class=\"col-xs-3 date\">\n                <i class=\"fa fa-briefcase\"></i>\n                6:00 am\n                <br/>\n                <small class=\"text-navy\">2 hour ago</small>\n              </div>\n              <div class=\"col-xs-7 content no-top-border\">\n                <p class=\"m-b-xs\"><strong>Meeting</strong></p>\n\n                <p>Conference on the sales results for the previous year. Monica please examine sales trends in marketing and products.</p>\n\n              </div>\n            </div>\n          </div>\n          <div class=\"timeline-item\">\n            <div class=\"row\">\n              <div class=\"col-xs-3 date\">\n                <i class=\"fa fa-file-text\"></i>\n                7:00 am\n                <br/>\n                <small class=\"text-navy\">3 hour ago</small>\n              </div>\n              <div class=\"col-xs-7 content\">\n                <p class=\"m-b-xs\"><strong>Send documents to Mike</strong></p>\n                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.</p>\n              </div>\n            </div>\n          </div>\n          <div class=\"timeline-item\">\n            <div class=\"row\">\n              <div class=\"col-xs-3 date\">\n                <i class=\"fa fa-coffee\"></i>\n                8:00 am\n                <br/>\n              </div>\n              <div class=\"col-xs-7 content\">\n                <p class=\"m-b-xs\"><strong>Coffee Break</strong></p>\n                <p>\n                  Go to shop and find some products.\n                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.\n                </p>\n              </div>\n            </div>\n          </div>\n          <div class=\"timeline-item\">\n            <div class=\"row\">\n              <div class=\"col-xs-3 date\">\n                <i class=\"fa fa-phone\"></i>\n                11:00 am\n                <br/>\n                <small class=\"text-navy\">21 hour ago</small>\n              </div>\n              <div class=\"col-xs-7 content\">\n                <p class=\"m-b-xs\"><strong>Phone with Jeronimo</strong></p>\n                <p>\n                  Lorem Ipsum has been the industry's standard dummy text ever since.\n                </p>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n  </div>\n\n</div>\n"

/***/ }),

/***/ 579:
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper wrapper-content\">\n  <div class=\"row\">\n    <div class=\"col-lg-2\">\n      <div class=\"ibox float-e-margins\">\n        <div class=\"ibox-title\">\n          <span class=\"label label-success pull-right\">Monthly</span>\n          <h5>Views</h5>\n        </div>\n        <div class=\"ibox-content\">\n          <h1 class=\"no-margins\">386,200</h1>\n          <div class=\"stat-percent font-bold text-success\">98% <i class=\"fa fa-bolt\"></i></div>\n          <small>Total views</small>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-lg-2\">\n      <div class=\"ibox float-e-margins\">\n        <div class=\"ibox-title\">\n          <span class=\"label label-info pull-right\">Annual</span>\n          <h5>Orders</h5>\n        </div>\n        <div class=\"ibox-content\">\n          <h1 class=\"no-margins\">80,800</h1>\n          <div class=\"stat-percent font-bold text-info\">20% <i class=\"fa fa-level-up\"></i></div>\n          <small>New orders</small>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"col-lg-4\">\n      <div class=\"ibox float-e-margins\">\n        <div class=\"ibox-title\">\n          <span class=\"label label-primary pull-right\">Today</span>\n          <h5>visits</h5>\n        </div>\n        <div class=\"ibox-content\">\n\n          <div class=\"row\">\n            <div class=\"col-md-6\">\n              <h1 class=\"no-margins\">406,42</h1>\n              <div class=\"font-bold text-navy\">44% <i class=\"fa fa-level-up\"></i> <small>Rapid pace</small></div>\n            </div>\n            <div class=\"col-md-6\">\n              <h1 class=\"no-margins\">206,12</h1>\n              <div class=\"font-bold text-navy\">22% <i class=\"fa fa-level-up\"></i> <small>Slow pace</small></div>\n            </div>\n          </div>\n\n\n        </div>\n      </div>\n    </div>\n    <div class=\"col-lg-4\">\n      <div class=\"ibox float-e-margins\">\n        <div class=\"ibox-title\">\n          <h5>Monthly income</h5>\n          <div class=\"ibox-tools\">\n            <span class=\"label label-primary\">Updated 12.2015</span>\n          </div>\n        </div>\n        <div class=\"ibox-content no-padding\">\n          <div class=\"flot-chart m-t-lg\" style=\"height: 55px;\">\n            <div flotChart class=\"flot-chart-content\" [options]=\"flotOptions\" [dataset]=\"flotDataset\"></div>\n          </div>\n        </div>\n\n      </div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-lg-8\">\n      <div class=\"ibox float-e-margins\">\n        <div class=\"ibox-content\">\n          <div>\n                                        <span class=\"pull-right text-right\">\n                                        <small>Average value of sales in the past month in: <strong>United states</strong></small>\n                                            <br/>\n                                            All sales: 162,862\n                                        </span>\n            <h3 class=\"font-bold no-margins\">\n              Half-year revenue margin\n            </h3>\n            <small>Sales marketing.</small>\n          </div>\n\n          <div class=\"m-t-sm\">\n\n            <div class=\"row\">\n              <div class=\"col-md-8\">\n                <div>\n                  <canvas baseChart height=\"114\"\n                          [datasets]=\"lineChartData\"\n                          [labels]=\"lineChartLabels\"\n                          [options]=\"lineChartOptions\"\n                          [chartType]=\"lineChartType\"\n                          [colors]=\"lineChartColors\">\n                  </canvas>\n                </div>\n              </div>\n              <div class=\"col-md-4\">\n                <ul class=\"stat-list m-t-lg\">\n                  <li>\n                    <h2 class=\"no-margins\">2,346</h2>\n                    <small>Total orders in period</small>\n                    <div class=\"progress progress-mini\">\n                      <div class=\"progress-bar\" style=\"width: 48%;\"></div>\n                    </div>\n                  </li>\n                  <li>\n                    <h2 class=\"no-margins \">4,422</h2>\n                    <small>Orders in last month</small>\n                    <div class=\"progress progress-mini\">\n                      <div class=\"progress-bar\" style=\"width: 60%;\"></div>\n                    </div>\n                  </li>\n                </ul>\n              </div>\n            </div>\n\n          </div>\n\n          <div class=\"m-t-md\">\n            <small class=\"pull-right\">\n              <i class=\"fa fa-clock-o\"> </i>\n              Update on 16.07.2015\n            </small>\n            <small>\n              <strong>Analysis of sales:</strong> The value has been changed over time, and last month reached a level over $50,000.\n            </small>\n          </div>\n\n        </div>\n      </div>\n    </div>\n    <div class=\"col-lg-4\">\n      <div class=\"ibox float-e-margins\">\n        <div class=\"ibox-title\">\n          <span class=\"label label-warning pull-right\">Data has changed</span>\n          <h5>User activity</h5>\n        </div>\n        <div class=\"ibox-content\">\n          <div class=\"row\">\n            <div class=\"col-xs-4\">\n              <small class=\"stats-label\">Pages / Visit</small>\n              <h4>236 321.80</h4>\n            </div>\n\n            <div class=\"col-xs-4\">\n              <small class=\"stats-label\">% New Visits</small>\n              <h4>46.11%</h4>\n            </div>\n            <div class=\"col-xs-4\">\n              <small class=\"stats-label\">Last week</small>\n              <h4>432.021</h4>\n            </div>\n          </div>\n        </div>\n        <div class=\"ibox-content\">\n          <div class=\"row\">\n            <div class=\"col-xs-4\">\n              <small class=\"stats-label\">Pages / Visit</small>\n              <h4>643 321.10</h4>\n            </div>\n\n            <div class=\"col-xs-4\">\n              <small class=\"stats-label\">% New Visits</small>\n              <h4>92.43%</h4>\n            </div>\n            <div class=\"col-xs-4\">\n              <small class=\"stats-label\">Last week</small>\n              <h4>564.554</h4>\n            </div>\n          </div>\n        </div>\n        <div class=\"ibox-content\">\n          <div class=\"row\">\n            <div class=\"col-xs-4\">\n              <small class=\"stats-label\">Pages / Visit</small>\n              <h4>436 547.20</h4>\n            </div>\n\n            <div class=\"col-xs-4\">\n              <small class=\"stats-label\">% New Visits</small>\n              <h4>150.23%</h4>\n            </div>\n            <div class=\"col-xs-4\">\n              <small class=\"stats-label\">Last week</small>\n              <h4>124.990</h4>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n  </div>\n\n  <div class=\"row\">\n\n    <div class=\"col-lg-12\">\n      <div class=\"ibox float-e-margins\">\n        <div class=\"ibox-title\">\n          <h5>Custom responsive table </h5>\n          <iboxtools></iboxtools>\n        </div>\n        <div class=\"ibox-content\">\n          <div class=\"row\">\n            <div class=\"col-sm-9 m-b-xs\">\n              <div data-toggle=\"buttons\" class=\"btn-group\">\n                <label class=\"btn btn-sm btn-white\"> <input type=\"radio\" id=\"option1\" name=\"options\"> Day </label>\n                <label class=\"btn btn-sm btn-white active\"> <input type=\"radio\" id=\"option2\" name=\"options\"> Week </label>\n                <label class=\"btn btn-sm btn-white\"> <input type=\"radio\" id=\"option3\" name=\"options\"> Month </label>\n              </div>\n            </div>\n            <div class=\"col-sm-3\">\n              <div class=\"input-group\"><input type=\"text\" placeholder=\"Search\" class=\"input-sm form-control\"> <span class=\"input-group-btn\">\n                                        <button type=\"button\" class=\"btn btn-sm btn-primary\"> Go!</button> </span></div>\n            </div>\n          </div>\n          <div class=\"table-responsive\">\n            <table class=\"table table-striped\">\n              <thead>\n              <tr>\n\n                <th>#</th>\n                <th>Project </th>\n                <th>Name </th>\n                <th>Phone </th>\n                <th>Company </th>\n                <th>Completed </th>\n                <th>Task</th>\n                <th>Date</th>\n                <th>Action</th>\n              </tr>\n              </thead>\n              <tbody>\n              <tr>\n                <td>1</td>\n                <td>Project <small>This is example of project</small></td>\n                <td>Patrick Smith</td>\n                <td>0800 051213</td>\n                <td>Inceptos Hymenaeos Ltd</td>\n                <td><span peity [type]=\"peityType\" [options]=\"peityOptions\">0.52/1.561</span></td>\n                <td>20%</td>\n                <td>Jul 14, 2013</td>\n                <td><a href=\"#\"><i class=\"fa fa-check text-navy\"></i></a></td>\n              </tr>\n              <tr>\n                <td>2</td>\n                <td>Alpha project</td>\n                <td>Alice Jackson</td>\n                <td>0500 780909</td>\n                <td>Nec Euismod In Company</td>\n                <td><span peity [type]=\"peityType\" [options]=\"peityOptions\">6/9</span></td>\n                <td>40%</td>\n                <td>Jul 16, 2013</td>\n                <td><a href=\"#\"><i class=\"fa fa-check text-navy\"></i></a></td>\n              </tr>\n              <tr>\n                <td>3</td>\n                <td>Betha project</td>\n                <td>John Smith</td>\n                <td>0800 1111</td>\n                <td>Erat Volutpat</td>\n                <td><span peity [type]=\"peityType\" [options]=\"peityOptions\">3/1</span></td>\n                <td>75%</td>\n                <td>Jul 18, 2013</td>\n                <td><a href=\"#\"><i class=\"fa fa-check text-navy\"></i></a></td>\n              </tr>\n              <tr>\n                <td>4</td>\n                <td>Gamma project</td>\n                <td>Anna Jordan</td>\n                <td>(016977) 0648</td>\n                <td>Tellus Ltd</td>\n                <td><span peity [type]=\"peityType\" [options]=\"peityOptions\">4/9</span></td>\n                <td>18%</td>\n                <td>Jul 22, 2013</td>\n                <td><a href=\"#\"><i class=\"fa fa-check text-navy\"></i></a></td>\n              </tr>\n              <tr>\n                <td>2</td>\n                <td>Alpha project</td>\n                <td>Alice Jackson</td>\n                <td>0500 780909</td>\n                <td>Nec Euismod In Company</td>\n                <td><span peity [type]=\"peityType\" [options]=\"peityOptions\">6/9</span></td>\n                <td>40%</td>\n                <td>Jul 16, 2013</td>\n                <td><a href=\"#\"><i class=\"fa fa-check text-navy\"></i></a></td>\n              </tr>\n              <tr>\n                <td>1</td>\n                <td>Project <small>This is example of project</small></td>\n                <td>Patrick Smith</td>\n                <td>0800 051213</td>\n                <td>Inceptos Hymenaeos Ltd</td>\n                <td><span peity [type]=\"peityType\" [options]=\"peityOptions\">5/1</span></td>\n                <td>20%</td>\n                <td>Jul 14, 2013</td>\n                <td><a href=\"#\"><i class=\"fa fa-check text-navy\"></i></a></td>\n              </tr>\n              <tr>\n                <td>4</td>\n                <td>Gamma project</td>\n                <td>Anna Jordan</td>\n                <td>(016977) 0648</td>\n                <td>Tellus Ltd</td>\n                <td><span peity [type]=\"peityType\" [options]=\"peityOptions\">4/9</span></td>\n                <td>18%</td>\n                <td>Jul 22, 2013</td>\n                <td><a href=\"#\"><i class=\"fa fa-check text-navy\"></i></a></td>\n              </tr>\n              <tr>\n                <td>1</td>\n                <td>Project <small>This is example of project</small></td>\n                <td>Patrick Smith</td>\n                <td>0800 051213</td>\n                <td>Inceptos Hymenaeos Ltd</td>\n                <td><span peity [type]=\"peityType\" [options]=\"peityOptions\">4/2</span></td>\n                <td>20%</td>\n                <td>Jul 14, 2013</td>\n                <td><a href=\"#\"><i class=\"fa fa-check text-navy\"></i></a></td>\n              </tr>\n              <tr>\n                <td>2</td>\n                <td>Alpha project</td>\n                <td>Alice Jackson</td>\n                <td>0500 780909</td>\n                <td>Nec Euismod In Company</td>\n                <td><span peity [type]=\"peityType\" [options]=\"peityOptions\">6/9</span></td>\n                <td>40%</td>\n                <td>Jul 16, 2013</td>\n                <td><a href=\"#\"><i class=\"fa fa-check text-navy\"></i></a></td>\n              </tr>\n              <tr>\n                <td>3</td>\n                <td>Betha project</td>\n                <td>John Smith</td>\n                <td>0800 1111</td>\n                <td>Erat Volutpat</td>\n                <td><span peity [type]=\"peityType\" [options]=\"peityOptions\">3/1</span></td>\n                <td>75%</td>\n                <td>Jul 18, 2013</td>\n                <td><a href=\"#\"><i class=\"fa fa-check text-navy\"></i></a></td>\n              </tr>\n              <tr>\n                <td>4</td>\n                <td>Gamma project</td>\n                <td>Anna Jordan</td>\n                <td>(016977) 0648</td>\n                <td>Tellus Ltd</td>\n                <td><span peity [type]=\"peityType\" [options]=\"peityOptions\">4/9</span></td>\n                <td>18%</td>\n                <td>Jul 22, 2013</td>\n                <td><a href=\"#\"><i class=\"fa fa-check text-navy\"></i></a></td>\n              </tr>\n              <tr>\n                <td>2</td>\n                <td>Alpha project</td>\n                <td>Alice Jackson</td>\n                <td>0500 780909</td>\n                <td>Nec Euismod In Company</td>\n                <td><span peity [type]=\"peityType\" [options]=\"peityOptions\">4/9</span></td>\n                <td>40%</td>\n                <td>Jul 16, 2013</td>\n                <td><a href=\"#\"><i class=\"fa fa-check text-navy\"></i></a></td>\n              </tr>\n              <tr>\n                <td>1</td>\n                <td>Project <small>This is example of project</small></td>\n                <td>Patrick Smith</td>\n                <td>0800 051213</td>\n                <td>Inceptos Hymenaeos Ltd</td>\n                <td><span peity [type]=\"peityType\" [options]=\"peityOptions\">0.52/1.561</span></td>\n                <td>20%</td>\n                <td>Jul 14, 2013</td>\n                <td><a href=\"#\"><i class=\"fa fa-check text-navy\"></i></a></td>\n              </tr>\n              <tr>\n                <td>4</td>\n                <td>Gamma project</td>\n                <td>Anna Jordan</td>\n                <td>(016977) 0648</td>\n                <td>Tellus Ltd</td>\n                <td><span peity [type]=\"peityType\" [options]=\"peityOptions\">4,9</span></td>\n                <td>18%</td>\n                <td>Jul 22, 2013</td>\n                <td><a href=\"#\"><i class=\"fa fa-check text-navy\"></i></a></td>\n              </tr>\n              </tbody>\n            </table>\n          </div>\n\n        </div>\n      </div>\n    </div>\n\n  </div>\n\n\n</div>\n"

/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_peity__ = __webpack_require__(540);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_peity___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_peity__);
/* unused harmony export PeityDirective */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PeityModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// Import Peity chart library

var PeityDirective = (function () {
    function PeityDirective(element) {
        this.initFlag = false;
        this.element = element;
    }
    // Initialise
    PeityDirective.prototype.ngOnInit = function () {
        this.initFlag = true;
        if (this.options || this.type) {
            this.build();
        }
    };
    // Build
    PeityDirective.prototype.build = function () {
        // Check if peity is available
        if (typeof jQuery(this.element).peity === 'undefined') {
            throw new Error('Configuration issue: Embedding peity lib is mandatory');
        }
        // Let's build chart
        this.chart = jQuery(this.element.nativeElement).peity(this.type, this.options);
    };
    // Change
    PeityDirective.prototype.ngOnChanges = function () {
        if (this.initFlag) {
            this.build();
        }
    };
    return PeityDirective;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], PeityDirective.prototype, "options", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], PeityDirective.prototype, "type", void 0);
PeityDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: 'span[peity]',
        exportAs: 'peity-chart',
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object])
], PeityDirective);

var PeityModule = (function () {
    function PeityModule() {
    }
    return PeityModule;
}());
PeityModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            PeityDirective
        ],
        exports: [
            PeityDirective
        ],
        imports: []
    })
], PeityModule);

var _a;
//# sourceMappingURL=peity.js.map

/***/ }),

/***/ 580:
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper wrapper-content\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-2\">\n        <div class=\"ibox float-e-margins\">\n          <div class=\"ibox-title\">\n            <span class=\"label label-success pull-right\">Monthly</span>\n            <h5>Views</h5>\n          </div>\n          <div class=\"ibox-content\">\n            <h1 class=\"no-margins\">386,200</h1>\n            <div class=\"stat-percent font-bold text-success\">98% <i class=\"fa fa-bolt\"></i></div>\n            <small>Total views</small>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-2\">\n        <div class=\"ibox float-e-margins\">\n          <div class=\"ibox-title\">\n            <span class=\"label label-info pull-right\">Annual</span>\n            <h5>Orders</h5>\n          </div>\n          <div class=\"ibox-content\">\n            <h1 class=\"no-margins\">80,800</h1>\n            <div class=\"stat-percent font-bold text-info\">20% <i class=\"fa fa-level-up\"></i></div>\n            <small>New orders</small>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"col-md-4\">\n        <div class=\"ibox float-e-margins\">\n          <div class=\"ibox-title\">\n            <span class=\"label label-primary pull-right\">Today</span>\n            <h5>visits</h5>\n          </div>\n          <div class=\"ibox-content\">\n\n            <div class=\"row\">\n              <div class=\"col-md-6\">\n                <h1 class=\"no-margins\">$ 406,420</h1>\n                <div class=\"font-bold text-navy\">44% <i class=\"fa fa-level-up\"></i> <small>Rapid pace</small></div>\n              </div>\n              <div class=\"col-md-6\">\n                <h1 class=\"no-margins\">206,120</h1>\n                <div class=\"font-bold text-navy\">22% <i class=\"fa fa-level-up\"></i> <small>Slow pace</small></div>\n              </div>\n            </div>\n\n\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-4\">\n        <div class=\"ibox float-e-margins\">\n          <div class=\"ibox-title\">\n            <h5>Monthly income</h5>\n            <div class=\"ibox-tools\">\n              <span class=\"label label-primary\">Updated 12.2015</span>\n            </div>\n          </div>\n          <div class=\"ibox-content no-padding\">\n            <div class=\"flot-chart m-t-lg\" style=\"height: 55px;\">\n              <div flotChart class=\"flot-chart-content\" [options]=\"flotOptions\" [dataset]=\"flotDataset\"></div>\n            </div>\n          </div>\n\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-lg-8\">\n        <div class=\"ibox float-e-margins\">\n          <div class=\"ibox-content\">\n            <div>\n                                        <span class=\"pull-right text-right\">\n                                        <small>Average value of sales in the past month in: <strong>United states</strong></small>\n                                            <br/>\n                                            All sales: 162,862\n                                        </span>\n              <h3 class=\"font-bold no-margins\">\n                Half-year revenue margin\n              </h3>\n              <small>Sales marketing.</small>\n            </div>\n\n            <div class=\"m-t-sm\">\n\n              <div class=\"row\">\n                <div class=\"col-md-8\">\n                  <div>\n                    <canvas baseChart height=\"114\"\n                            [datasets]=\"lineChartData\"\n                            [labels]=\"lineChartLabels\"\n                            [options]=\"lineChartOptions\"\n                            [chartType]=\"lineChartType\"\n                            [colors]=\"lineChartColors\">\n                    </canvas>\n                  </div>\n                </div>\n                <div class=\"col-md-4\">\n                  <ul class=\"stat-list m-t-lg\">\n                    <li>\n                      <h2 class=\"no-margins\">2,346</h2>\n                      <small>Total orders in period</small>\n                      <div class=\"progress progress-mini\">\n                        <div class=\"progress-bar\" style=\"width: 48%;\"></div>\n                      </div>\n                    </li>\n                    <li>\n                      <h2 class=\"no-margins \">4,422</h2>\n                      <small>Orders in last month</small>\n                      <div class=\"progress progress-mini\">\n                        <div class=\"progress-bar\" style=\"width: 60%;\"></div>\n                      </div>\n                    </li>\n                  </ul>\n                </div>\n              </div>\n\n            </div>\n\n            <div class=\"m-t-md\">\n              <small class=\"pull-right\">\n                <i class=\"fa fa-clock-o\"> </i>\n                Update on 16.07.2015\n              </small>\n              <small>\n                <strong>Analysis of sales:</strong> The value has been changed over time, and last month reached a level over $50,000.\n              </small>\n            </div>\n\n          </div>\n        </div>\n      </div>\n      <div class=\"col-lg-4\">\n        <div class=\"ibox float-e-margins\">\n          <div class=\"ibox-title\">\n            <span class=\"label label-warning pull-right\">Data has changed</span>\n            <h5>User activity</h5>\n          </div>\n          <div class=\"ibox-content\">\n            <div class=\"row\">\n              <div class=\"col-xs-4\">\n                <small class=\"stats-label\">Pages / Visit</small>\n                <h4>236 321.80</h4>\n              </div>\n\n              <div class=\"col-xs-4\">\n                <small class=\"stats-label\">% New Visits</small>\n                <h4>46.11%</h4>\n              </div>\n              <div class=\"col-xs-4\">\n                <small class=\"stats-label\">Last week</small>\n                <h4>432.021</h4>\n              </div>\n            </div>\n          </div>\n          <div class=\"ibox-content\">\n            <div class=\"row\">\n              <div class=\"col-xs-4\">\n                <small class=\"stats-label\">Pages / Visit</small>\n                <h4>643 321.10</h4>\n              </div>\n\n              <div class=\"col-xs-4\">\n                <small class=\"stats-label\">% New Visits</small>\n                <h4>92.43%</h4>\n              </div>\n              <div class=\"col-xs-4\">\n                <small class=\"stats-label\">Last week</small>\n                <h4>564.554</h4>\n              </div>\n            </div>\n          </div>\n          <div class=\"ibox-content\">\n            <div class=\"row\">\n              <div class=\"col-xs-4\">\n                <small class=\"stats-label\">Pages / Visit</small>\n                <h4>436 547.20</h4>\n              </div>\n\n              <div class=\"col-xs-4\">\n                <small class=\"stats-label\">% New Visits</small>\n                <h4>150.23%</h4>\n              </div>\n              <div class=\"col-xs-4\">\n                <small class=\"stats-label\">Last week</small>\n                <h4>124.990</h4>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n\n    </div>\n\n    <div class=\"row\">\n\n      <div class=\"col-lg-12\">\n        <div class=\"ibox float-e-margins\">\n          <div class=\"ibox-title\">\n            <h5>Custom responsive table </h5>\n            <iboxtools></iboxtools>\n          </div>\n          <div class=\"ibox-content\">\n            <div class=\"row\">\n              <div class=\"col-sm-9 m-b-xs\">\n                <div data-toggle=\"buttons\" class=\"btn-group\">\n                  <label class=\"btn btn-sm btn-white\"> <input type=\"radio\" id=\"option1\" name=\"options\"> Day </label>\n                  <label class=\"btn btn-sm btn-white active\"> <input type=\"radio\" id=\"option2\" name=\"options\"> Week </label>\n                  <label class=\"btn btn-sm btn-white\"> <input type=\"radio\" id=\"option3\" name=\"options\"> Month </label>\n                </div>\n              </div>\n              <div class=\"col-sm-3\">\n                <div class=\"input-group\"><input type=\"text\" placeholder=\"Search\" class=\"input-sm form-control\"> <span class=\"input-group-btn\">\n                                        <button type=\"button\" class=\"btn btn-sm btn-primary\"> Go!</button> </span></div>\n              </div>\n            </div>\n            <div class=\"table-responsive\">\n              <table class=\"table table-striped\">\n                <thead>\n                <tr>\n\n                  <th>#</th>\n                  <th>Project </th>\n                  <th>Name </th>\n                  <th>Phone </th>\n                  <th>Company </th>\n                  <th>Completed </th>\n                  <th>Task</th>\n                  <th>Date</th>\n                  <th>Action</th>\n                </tr>\n                </thead>\n                <tbody>\n                <tr>\n                  <td>1</td>\n                  <td>Project <small>This is example of project</small></td>\n                  <td>Patrick Smith</td>\n                  <td>0800 051213</td>\n                  <td>Inceptos Hymenaeos Ltd</td>\n                  <td><span peity [type]=\"peityType\" [options]=\"peityOptions\">0.52/1.561</span></td>\n                  <td>20%</td>\n                  <td>Jul 14, 2013</td>\n                  <td><a href=\"#\"><i class=\"fa fa-check text-navy\"></i></a></td>\n                </tr>\n                <tr>\n                  <td>2</td>\n                  <td>Alpha project</td>\n                  <td>Alice Jackson</td>\n                  <td>0500 780909</td>\n                  <td>Nec Euismod In Company</td>\n                  <td><span peity [type]=\"peityType\" [options]=\"peityOptions\">6/9</span></td>\n                  <td>40%</td>\n                  <td>Jul 16, 2013</td>\n                  <td><a href=\"#\"><i class=\"fa fa-check text-navy\"></i></a></td>\n                </tr>\n                <tr>\n                  <td>3</td>\n                  <td>Betha project</td>\n                  <td>John Smith</td>\n                  <td>0800 1111</td>\n                  <td>Erat Volutpat</td>\n                  <td><span peity [type]=\"peityType\" [options]=\"peityOptions\">3/1</span></td>\n                  <td>75%</td>\n                  <td>Jul 18, 2013</td>\n                  <td><a href=\"#\"><i class=\"fa fa-check text-navy\"></i></a></td>\n                </tr>\n                <tr>\n                  <td>4</td>\n                  <td>Gamma project</td>\n                  <td>Anna Jordan</td>\n                  <td>(016977) 0648</td>\n                  <td>Tellus Ltd</td>\n                  <td><span peity [type]=\"peityType\" [options]=\"peityOptions\">4/9</span></td>\n                  <td>18%</td>\n                  <td>Jul 22, 2013</td>\n                  <td><a href=\"#\"><i class=\"fa fa-check text-navy\"></i></a></td>\n                </tr>\n                <tr>\n                  <td>2</td>\n                  <td>Alpha project</td>\n                  <td>Alice Jackson</td>\n                  <td>0500 780909</td>\n                  <td>Nec Euismod In Company</td>\n                  <td><span peity [type]=\"peityType\" [options]=\"peityOptions\">6/9</span></td>\n                  <td>40%</td>\n                  <td>Jul 16, 2013</td>\n                  <td><a href=\"#\"><i class=\"fa fa-check text-navy\"></i></a></td>\n                </tr>\n                <tr>\n                  <td>1</td>\n                  <td>Project <small>This is example of project</small></td>\n                  <td>Patrick Smith</td>\n                  <td>0800 051213</td>\n                  <td>Inceptos Hymenaeos Ltd</td>\n                  <td><span peity [type]=\"peityType\" [options]=\"peityOptions\">5/1</span></td>\n                  <td>20%</td>\n                  <td>Jul 14, 2013</td>\n                  <td><a href=\"#\"><i class=\"fa fa-check text-navy\"></i></a></td>\n                </tr>\n                <tr>\n                  <td>4</td>\n                  <td>Gamma project</td>\n                  <td>Anna Jordan</td>\n                  <td>(016977) 0648</td>\n                  <td>Tellus Ltd</td>\n                  <td><span peity [type]=\"peityType\" [options]=\"peityOptions\">4/9</span></td>\n                  <td>18%</td>\n                  <td>Jul 22, 2013</td>\n                  <td><a href=\"#\"><i class=\"fa fa-check text-navy\"></i></a></td>\n                </tr>\n                <tr>\n                  <td>1</td>\n                  <td>Project <small>This is example of project</small></td>\n                  <td>Patrick Smith</td>\n                  <td>0800 051213</td>\n                  <td>Inceptos Hymenaeos Ltd</td>\n                  <td><span peity [type]=\"peityType\" [options]=\"peityOptions\">4/2</span></td>\n                  <td>20%</td>\n                  <td>Jul 14, 2013</td>\n                  <td><a href=\"#\"><i class=\"fa fa-check text-navy\"></i></a></td>\n                </tr>\n                <tr>\n                  <td>2</td>\n                  <td>Alpha project</td>\n                  <td>Alice Jackson</td>\n                  <td>0500 780909</td>\n                  <td>Nec Euismod In Company</td>\n                  <td><span peity [type]=\"peityType\" [options]=\"peityOptions\">6/9</span></td>\n                  <td>40%</td>\n                  <td>Jul 16, 2013</td>\n                  <td><a href=\"#\"><i class=\"fa fa-check text-navy\"></i></a></td>\n                </tr>\n                <tr>\n                  <td>3</td>\n                  <td>Betha project</td>\n                  <td>John Smith</td>\n                  <td>0800 1111</td>\n                  <td>Erat Volutpat</td>\n                  <td><span peity [type]=\"peityType\" [options]=\"peityOptions\">3/1</span></td>\n                  <td>75%</td>\n                  <td>Jul 18, 2013</td>\n                  <td><a href=\"#\"><i class=\"fa fa-check text-navy\"></i></a></td>\n                </tr>\n                <tr>\n                  <td>4</td>\n                  <td>Gamma project</td>\n                  <td>Anna Jordan</td>\n                  <td>(016977) 0648</td>\n                  <td>Tellus Ltd</td>\n                  <td><span peity [type]=\"peityType\" [options]=\"peityOptions\">4/9</span></td>\n                  <td>18%</td>\n                  <td>Jul 22, 2013</td>\n                  <td><a href=\"#\"><i class=\"fa fa-check text-navy\"></i></a></td>\n                </tr>\n                <tr>\n                  <td>2</td>\n                  <td>Alpha project</td>\n                  <td>Alice Jackson</td>\n                  <td>0500 780909</td>\n                  <td>Nec Euismod In Company</td>\n                  <td><span peity [type]=\"peityType\" [options]=\"peityOptions\">4/9</span></td>\n                  <td>40%</td>\n                  <td>Jul 16, 2013</td>\n                  <td><a href=\"#\"><i class=\"fa fa-check text-navy\"></i></a></td>\n                </tr>\n                <tr>\n                  <td>1</td>\n                  <td>Project <small>This is example of project</small></td>\n                  <td>Patrick Smith</td>\n                  <td>0800 051213</td>\n                  <td>Inceptos Hymenaeos Ltd</td>\n                  <td><span peity [type]=\"peityType\" [options]=\"peityOptions\">0.52/1.561</span></td>\n                  <td>20%</td>\n                  <td>Jul 14, 2013</td>\n                  <td><a href=\"#\"><i class=\"fa fa-check text-navy\"></i></a></td>\n                </tr>\n                <tr>\n                  <td>4</td>\n                  <td>Gamma project</td>\n                  <td>Anna Jordan</td>\n                  <td>(016977) 0648</td>\n                  <td>Tellus Ltd</td>\n                  <td><span peity [type]=\"peityType\" [options]=\"peityOptions\">4,9</span></td>\n                  <td>18%</td>\n                  <td>Jul 22, 2013</td>\n                  <td><a href=\"#\"><i class=\"fa fa-check text-navy\"></i></a></td>\n                </tr>\n                </tbody>\n              </table>\n            </div>\n\n          </div>\n        </div>\n      </div>\n\n    </div>\n\n  </div>\n\n</div>\n"

/***/ }),

/***/ 581:
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper wrapper-content animated fadeIn\">\n\n  <div class=\"p-w-md m-t-sm\">\n    <div class=\"row\">\n\n      <div class=\"col-sm-4\">\n        <h1 class=\"m-b-xs\">\n          26,900\n        </h1>\n        <small>\n          Sales in current month\n        </small>\n        <div class=\"m-b-sm\">\n        <span sparkline [datasets]=\"sparklineData\" [options]=\"sparklineOptions\"></span>\n        </div>\n          <div class=\"row\">\n          <div class=\"col-xs-4\">\n            <small class=\"stats-label\">Pages / Visit</small>\n            <h4>236 321.80</h4>\n          </div>\n\n          <div class=\"col-xs-4\">\n            <small class=\"stats-label\">% New Visits</small>\n            <h4>46.11%</h4>\n          </div>\n          <div class=\"col-xs-4\">\n            <small class=\"stats-label\">Last week</small>\n            <h4>432.021</h4>\n          </div>\n        </div>\n\n      </div>\n      <div class=\"col-sm-4\">\n        <h1 class=\"m-b-xs\">\n          98,100\n        </h1>\n        <small>\n          Sales in last 24h\n        </small>\n        <div class=\"m-b-sm\">\n          <span sparkline [datasets]=\"sparklineData2\" [options]=\"sparklineOptions\"></span>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-xs-4\">\n            <small class=\"stats-label\">Pages / Visit</small>\n            <h4>166 781.80</h4>\n          </div>\n\n          <div class=\"col-xs-4\">\n            <small class=\"stats-label\">% New Visits</small>\n            <h4>22.45%</h4>\n          </div>\n          <div class=\"col-xs-4\">\n            <small class=\"stats-label\">Last week</small>\n            <h4>862.044</h4>\n          </div>\n        </div>\n\n\n      </div>\n      <div class=\"col-sm-4\">\n\n        <div class=\"row m-t-xs\">\n          <div class=\"col-xs-6\">\n            <h5 class=\"m-b-xs\">Income last month</h5>\n            <h1 class=\"no-margins\">160,000</h1>\n            <div class=\"font-bold text-navy\">98% <i class=\"fa fa-bolt\"></i></div>\n          </div>\n          <div class=\"col-xs-6\">\n            <h5 class=\"m-b-xs\">Sals current year</h5>\n            <h1 class=\"no-margins\">42,120</h1>\n            <div class=\"font-bold text-navy\">98% <i class=\"fa fa-bolt\"></i></div>\n          </div>\n        </div>\n\n\n        <table class=\"table small m-t-sm\">\n          <tbody>\n          <tr>\n            <td>\n              <strong>142</strong> Projects\n\n            </td>\n            <td>\n              <strong>22</strong> Messages\n            </td>\n\n          </tr>\n          <tr>\n            <td>\n              <strong>61</strong> Comments\n            </td>\n            <td>\n              <strong>54</strong> Articles\n            </td>\n          </tr>\n          <tr>\n            <td>\n              <strong>154</strong> Companies\n            </td>\n            <td>\n              <strong>32</strong> Clients\n            </td>\n          </tr>\n          </tbody>\n        </table>\n\n\n\n      </div>\n\n    </div>\n\n    <div class=\"row\">\n      <div class=\"col-lg-12\">\n        <div class=\"small pull-left col-md-3 m-l-lg m-t-md\">\n          <strong>Sales char</strong> have evolved over the years sometimes.\n        </div>\n        <div class=\"small pull-right col-md-3 m-t-md text-right\">\n          <strong>There are many</strong> variations of passages of Lorem Ipsum available, but the majority have suffered.\n        </div>\n        <div class=\"flot-chart m-b-xl\">\n          <div flotChart class=\"flot-chart-content\" [options]=\"flotOptions\" [dataset]=\"flotDataset\"></div>\n        </div>\n      </div>\n    </div>\n\n\n    <div class=\"row\">\n      <div class=\"col-lg-12\">\n        <div class=\"ibox\">\n\n\n\n          <div class=\"ibox-content\">\n\n            <div class=\"row\">\n              <div class=\"col-sm-4\">\n                <div class=\"form-group\">\n                  <label class=\"control-label\" for=\"product_name\">Project Name</label>\n                  <input type=\"text\" id=\"product_name\" name=\"product_name\" value=\"\" placeholder=\"Project Name\" class=\"form-control\">\n                </div>\n              </div>\n              <div class=\"col-sm-2\">\n                <div class=\"form-group\">\n                  <label class=\"control-label\" for=\"price\">Name</label>\n                  <input type=\"text\" id=\"price\" name=\"price\" value=\"\" placeholder=\"Name\" class=\"form-control\">\n                </div>\n              </div>\n              <div class=\"col-sm-2\">\n                <div class=\"form-group\">\n                  <label class=\"control-label\" for=\"quantity\">Company</label>\n                  <input type=\"text\" id=\"quantity\" name=\"quantity\" value=\"\" placeholder=\"Company\" class=\"form-control\">\n                </div>\n              </div>\n              <div class=\"col-sm-4\">\n                <div class=\"form-group\">\n                  <label class=\"control-label\" for=\"status\">Status</label>\n                  <select name=\"status\" id=\"status\" class=\"form-control\">\n                    <option value=\"1\" selected=\"\">Completed</option>\n                    <option value=\"0\">Pending</option>\n                  </select>\n                </div>\n              </div>\n            </div>\n\n            <div class=\"table-responsive\">\n              <table class=\"table table-striped\">\n\n                <tbody>\n                <tr>\n                  <td>1</td>\n                  <td>Master project</td>\n                  <td>Patrick Smith</td>\n                  <td>$892,074</td>\n                  <td>Inceptos Hymenaeos Ltd</td>\n                  <td><strong>20%</strong></td>\n                  <td>Jul 14, 2015</td>\n                  <td><a href=\"#\"><i class=\"fa fa-check text-navy\"></i></a></td>\n                </tr>\n                <tr>\n                  <td>2</td>\n                  <td>Alpha project</td>\n                  <td>Alice Jackson</td>\n                  <td>$963,486</td>\n                  <td>Nec Euismod In Company</td>\n                  <td><strong>40%</strong></td>\n                  <td>Jul 16, 2015</td>\n                  <td><a href=\"#\"><i class=\"fa fa-check text-navy\"></i></a></td>\n                </tr>\n                <tr>\n                  <td>3</td>\n                  <td>Betha project</td>\n                  <td>John Smith</td>\n                  <td>$996,824</td>\n                  <td>Erat Volutpat</td>\n                  <td><strong>75%</strong></td>\n                  <td>Jul 18, 2015</td>\n                  <td><a href=\"#\"><i class=\"fa fa-check text-navy\"></i></a></td>\n                </tr>\n                <tr>\n                  <td>4</td>\n                  <td>Gamma project</td>\n                  <td>Anna Jordan</td>\n                  <td>$105,192</td>\n                  <td>Tellus Ltd</td>\n                  <td><strong>18%</strong></td>\n                  <td>Jul 22, 2015</td>\n                  <td><a href=\"#\"><i class=\"fa fa-check text-navy\"></i></a></td>\n                </tr>\n                <tr>\n                  <td>2</td>\n                  <td>Alpha project</td>\n                  <td>Alice Jackson</td>\n                  <td>$674,803</td>\n                  <td>Nec Euismod In Company</td>\n                  <td><strong>40%</strong></td>\n                  <td>Jul 16, 2015</td>\n                  <td><a href=\"#\"><i class=\"fa fa-check text-navy\"></i></a></td>\n                </tr>\n                <tr>\n                  <td>1</td>\n                  <td>Master project</td>\n                  <td>Patrick Smith</td>\n                  <td>$174,729</td>\n                  <td>Inceptos Hymenaeos Ltd</td>\n                  <td><strong>20%</strong></td>\n                  <td>Jul 14, 2015</td>\n                  <td><a href=\"#\"><i class=\"fa fa-check text-navy\"></i></a></td>\n                </tr>\n                <tr>\n                  <td>4</td>\n                  <td>Gamma project</td>\n                  <td>Anna Jordan</td>\n                  <td>$823,198</td>\n                  <td>Tellus Ltd</td>\n                  <td><strong>18%</strong></td>\n                  <td>Jul 22, 2015</td>\n                  <td><a href=\"#\"><i class=\"fa fa-check text-navy\"></i></a></td>\n                </tr>\n                <tr>\n                  <td>1</td>\n                  <td>Project <small>This is example of project</small></td>\n                  <td>Patrick Smith</td>\n                  <td>$778,696</td>\n                  <td>Inceptos Hymenaeos Ltd</td>\n                  <td><strong>20%</strong></td>\n                  <td>Jul 14, 2015</td>\n                  <td><a href=\"#\"><i class=\"fa fa-check text-navy\"></i></a></td>\n                </tr>\n                <tr>\n                  <td>2</td>\n                  <td>Alpha project</td>\n                  <td>Alice Jackson</td>\n                  <td>$861,063</td>\n                  <td>Nec Euismod In Company</td>\n                  <td><strong>40%</strong></td>\n                  <td>Jul 16, 2015</td>\n                  <td><a href=\"#\"><i class=\"fa fa-check text-navy\"></i></a></td>\n                </tr>\n                <tr>\n                  <td>3</td>\n                  <td>Betha project</td>\n                  <td>John Smith</td>\n                  <td>$109,125</td>\n                  <td>Erat Volutpat</td>\n                  <td><strong>75%</strong></td>\n                  <td>Jul 18, 2015</td>\n                  <td><a href=\"#\"><i class=\"fa fa-check text-navy\"></i></a></td>\n                </tr>\n                <tr>\n                  <td>4</td>\n                  <td>Gamma project</td>\n                  <td>Anna Jordan</td>\n                  <td>$600,978</td>\n                  <td>Tellus Ltd</td>\n                  <td><strong>18%</strong></td>\n                  <td>Jul 22, 2015</td>\n                  <td><a href=\"#\"><i class=\"fa fa-check text-navy\"></i></a></td>\n                </tr>\n                <tr>\n                  <td>2</td>\n                  <td>Alpha project</td>\n                  <td>Alice Jackson</td>\n                  <td>$150,161</td>\n                  <td>Nec Euismod In Company</td>\n                  <td><strong>40%</strong></td>\n                  <td>Jul 16, 2015</td>\n                  <td><a href=\"#\"><i class=\"fa fa-check text-navy\"></i></a></td>\n                </tr>\n                <tr>\n                  <td>1</td>\n                  <td>Project <small>This is example of project</small></td>\n                  <td>Patrick Smith</td>\n                  <td>$160,586</td>\n                  <td>Inceptos Hymenaeos Ltd</td>\n                  <td><strong>20%</strong></td>\n                  <td>Jul 14, 2015</td>\n                  <td><a href=\"#\"><i class=\"fa fa-check text-navy\"></i></a></td>\n                </tr>\n                <tr>\n                  <td>4</td>\n                  <td>Gamma project</td>\n                  <td>Anna Jordan</td>\n                  <td>$110,612</td>\n                  <td>Tellus Ltd</td>\n                  <td><strong>18%</strong></td>\n                  <td>Jul 22, 2015</td>\n                  <td><a href=\"#\"><i class=\"fa fa-check text-navy\"></i></a></td>\n                </tr>\n                </tbody>\n              </table>\n            </div>\n\n          </div>\n        </div>\n      </div>\n    </div>\n\n  </div>\n\n\n</div>\n"

/***/ }),

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* unused harmony export SparklineDirective */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SparklineModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SparklineDirective = (function () {
    function SparklineDirective(element) {
        this.initFlag = false;
        this.element = element.nativeElement;
    }
    // Initialise
    SparklineDirective.prototype.ngOnInit = function () {
        this.initFlag = true;
        if (this.options || this.datasets) {
            this.build();
        }
    };
    // Build
    SparklineDirective.prototype.build = function () {
        // Check if sparkline is available
        if (typeof jQuery(this.element).sparkline() === 'undefined') {
            throw new Error('Configuration issue: Embedding sparkline lib is mandatory');
        }
        // Let's build chart
        this.chart = jQuery(this.element).sparkline(this.datasets, this.options);
    };
    // Change
    SparklineDirective.prototype.ngOnChanges = function () {
        if (this.initFlag) {
            this.build();
        }
    };
    return SparklineDirective;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], SparklineDirective.prototype, "options", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], SparklineDirective.prototype, "datasets", void 0);
SparklineDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: 'span[sparkline]',
        exportAs: 'sparkline-chart',
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object])
], SparklineDirective);

var SparklineModule = (function () {
    function SparklineModule() {
    }
    return SparklineModule;
}());
SparklineModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            SparklineDirective
        ],
        exports: [
            SparklineDirective
        ],
        imports: []
    })
], SparklineModule);

var _a;
//# sourceMappingURL=sparkline.js.map

/***/ }),

/***/ 60:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_do__ = __webpack_require__(589);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(331);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_take__ = __webpack_require__(591);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_take___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_take__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserService = (function () {
    function UserService() {
        this.user = {};
    }
    UserService.prototype.addUser = function (userInfo) {
        this.user = {
            email: userInfo.email
        };
    };
    UserService.prototype.getUser = function () {
        return this.user;
    };
    return UserService;
}());
UserService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], UserService);

//# sourceMappingURL=user.service.js.map

/***/ }),

/***/ 626:
/***/ (function(module, exports) {

/* Javascript plotting library for jQuery, version 0.8.3.

Copyright (c) 2007-2014 IOLA and Ole Laursen.
Licensed under the MIT license.

*/

// first an inline dependency, jquery.colorhelpers.js, we inline it here
// for convenience

/* Plugin for jQuery for working with colors.
 *
 * Version 1.1.
 *
 * Inspiration from jQuery color animation plugin by John Resig.
 *
 * Released under the MIT license by Ole Laursen, October 2009.
 *
 * Examples:
 *
 *   $.color.parse("#fff").scale('rgb', 0.25).add('a', -0.5).toString()
 *   var c = $.color.extract($("#mydiv"), 'background-color');
 *   console.log(c.r, c.g, c.b, c.a);
 *   $.color.make(100, 50, 25, 0.4).toString() // returns "rgba(100,50,25,0.4)"
 *
 * Note that .scale() and .add() return the same modified object
 * instead of making a new one.
 *
 * V. 1.1: Fix error handling so e.g. parsing an empty string does
 * produce a color rather than just crashing.
 */
(function($){$.color={};$.color.make=function(r,g,b,a){var o={};o.r=r||0;o.g=g||0;o.b=b||0;o.a=a!=null?a:1;o.add=function(c,d){for(var i=0;i<c.length;++i)o[c.charAt(i)]+=d;return o.normalize()};o.scale=function(c,f){for(var i=0;i<c.length;++i)o[c.charAt(i)]*=f;return o.normalize()};o.toString=function(){if(o.a>=1){return"rgb("+[o.r,o.g,o.b].join(",")+")"}else{return"rgba("+[o.r,o.g,o.b,o.a].join(",")+")"}};o.normalize=function(){function clamp(min,value,max){return value<min?min:value>max?max:value}o.r=clamp(0,parseInt(o.r),255);o.g=clamp(0,parseInt(o.g),255);o.b=clamp(0,parseInt(o.b),255);o.a=clamp(0,o.a,1);return o};o.clone=function(){return $.color.make(o.r,o.b,o.g,o.a)};return o.normalize()};$.color.extract=function(elem,css){var c;do{c=elem.css(css).toLowerCase();if(c!=""&&c!="transparent")break;elem=elem.parent()}while(elem.length&&!$.nodeName(elem.get(0),"body"));if(c=="rgba(0, 0, 0, 0)")c="transparent";return $.color.parse(c)};$.color.parse=function(str){var res,m=$.color.make;if(res=/rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(str))return m(parseInt(res[1],10),parseInt(res[2],10),parseInt(res[3],10));if(res=/rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]+(?:\.[0-9]+)?)\s*\)/.exec(str))return m(parseInt(res[1],10),parseInt(res[2],10),parseInt(res[3],10),parseFloat(res[4]));if(res=/rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(str))return m(parseFloat(res[1])*2.55,parseFloat(res[2])*2.55,parseFloat(res[3])*2.55);if(res=/rgba\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\s*\)/.exec(str))return m(parseFloat(res[1])*2.55,parseFloat(res[2])*2.55,parseFloat(res[3])*2.55,parseFloat(res[4]));if(res=/#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(str))return m(parseInt(res[1],16),parseInt(res[2],16),parseInt(res[3],16));if(res=/#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(str))return m(parseInt(res[1]+res[1],16),parseInt(res[2]+res[2],16),parseInt(res[3]+res[3],16));var name=$.trim(str).toLowerCase();if(name=="transparent")return m(255,255,255,0);else{res=lookupColors[name]||[0,0,0];return m(res[0],res[1],res[2])}};var lookupColors={aqua:[0,255,255],azure:[240,255,255],beige:[245,245,220],black:[0,0,0],blue:[0,0,255],brown:[165,42,42],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgrey:[169,169,169],darkgreen:[0,100,0],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkviolet:[148,0,211],fuchsia:[255,0,255],gold:[255,215,0],green:[0,128,0],indigo:[75,0,130],khaki:[240,230,140],lightblue:[173,216,230],lightcyan:[224,255,255],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightyellow:[255,255,224],lime:[0,255,0],magenta:[255,0,255],maroon:[128,0,0],navy:[0,0,128],olive:[128,128,0],orange:[255,165,0],pink:[255,192,203],purple:[128,0,128],violet:[128,0,128],red:[255,0,0],silver:[192,192,192],white:[255,255,255],yellow:[255,255,0]}})(jQuery);

// the actual Flot code
(function($) {

	// Cache the prototype hasOwnProperty for faster access

	var hasOwnProperty = Object.prototype.hasOwnProperty;

    // A shim to provide 'detach' to jQuery versions prior to 1.4.  Using a DOM
    // operation produces the same effect as detach, i.e. removing the element
    // without touching its jQuery data.

    // Do not merge this into Flot 0.9, since it requires jQuery 1.4.4+.

    if (!$.fn.detach) {
        $.fn.detach = function() {
            return this.each(function() {
                if (this.parentNode) {
                    this.parentNode.removeChild( this );
                }
            });
        };
    }

	///////////////////////////////////////////////////////////////////////////
	// The Canvas object is a wrapper around an HTML5 <canvas> tag.
	//
	// @constructor
	// @param {string} cls List of classes to apply to the canvas.
	// @param {element} container Element onto which to append the canvas.
	//
	// Requiring a container is a little iffy, but unfortunately canvas
	// operations don't work unless the canvas is attached to the DOM.

	function Canvas(cls, container) {

		var element = container.children("." + cls)[0];

		if (element == null) {

			element = document.createElement("canvas");
			element.className = cls;

			$(element).css({ direction: "ltr", position: "absolute", left: 0, top: 0 })
				.appendTo(container);

			// If HTML5 Canvas isn't available, fall back to [Ex|Flash]canvas

			if (!element.getContext) {
				if (window.G_vmlCanvasManager) {
					element = window.G_vmlCanvasManager.initElement(element);
				} else {
					throw new Error("Canvas is not available. If you're using IE with a fall-back such as Excanvas, then there's either a mistake in your conditional include, or the page has no DOCTYPE and is rendering in Quirks Mode.");
				}
			}
		}

		this.element = element;

		var context = this.context = element.getContext("2d");

		// Determine the screen's ratio of physical to device-independent
		// pixels.  This is the ratio between the canvas width that the browser
		// advertises and the number of pixels actually present in that space.

		// The iPhone 4, for example, has a device-independent width of 320px,
		// but its screen is actually 640px wide.  It therefore has a pixel
		// ratio of 2, while most normal devices have a ratio of 1.

		var devicePixelRatio = window.devicePixelRatio || 1,
			backingStoreRatio =
				context.webkitBackingStorePixelRatio ||
				context.mozBackingStorePixelRatio ||
				context.msBackingStorePixelRatio ||
				context.oBackingStorePixelRatio ||
				context.backingStorePixelRatio || 1;

		this.pixelRatio = devicePixelRatio / backingStoreRatio;

		// Size the canvas to match the internal dimensions of its container

		this.resize(container.width(), container.height());

		// Collection of HTML div layers for text overlaid onto the canvas

		this.textContainer = null;
		this.text = {};

		// Cache of text fragments and metrics, so we can avoid expensively
		// re-calculating them when the plot is re-rendered in a loop.

		this._textCache = {};
	}

	// Resizes the canvas to the given dimensions.
	//
	// @param {number} width New width of the canvas, in pixels.
	// @param {number} width New height of the canvas, in pixels.

	Canvas.prototype.resize = function(width, height) {

		if (width <= 0 || height <= 0) {
			throw new Error("Invalid dimensions for plot, width = " + width + ", height = " + height);
		}

		var element = this.element,
			context = this.context,
			pixelRatio = this.pixelRatio;

		// Resize the canvas, increasing its density based on the display's
		// pixel ratio; basically giving it more pixels without increasing the
		// size of its element, to take advantage of the fact that retina
		// displays have that many more pixels in the same advertised space.

		// Resizing should reset the state (excanvas seems to be buggy though)

		if (this.width != width) {
			element.width = width * pixelRatio;
			element.style.width = width + "px";
			this.width = width;
		}

		if (this.height != height) {
			element.height = height * pixelRatio;
			element.style.height = height + "px";
			this.height = height;
		}

		// Save the context, so we can reset in case we get replotted.  The
		// restore ensure that we're really back at the initial state, and
		// should be safe even if we haven't saved the initial state yet.

		context.restore();
		context.save();

		// Scale the coordinate space to match the display density; so even though we
		// may have twice as many pixels, we still want lines and other drawing to
		// appear at the same size; the extra pixels will just make them crisper.

		context.scale(pixelRatio, pixelRatio);
	};

	// Clears the entire canvas area, not including any overlaid HTML text

	Canvas.prototype.clear = function() {
		this.context.clearRect(0, 0, this.width, this.height);
	};

	// Finishes rendering the canvas, including managing the text overlay.

	Canvas.prototype.render = function() {

		var cache = this._textCache;

		// For each text layer, add elements marked as active that haven't
		// already been rendered, and remove those that are no longer active.

		for (var layerKey in cache) {
			if (hasOwnProperty.call(cache, layerKey)) {

				var layer = this.getTextLayer(layerKey),
					layerCache = cache[layerKey];

				layer.hide();

				for (var styleKey in layerCache) {
					if (hasOwnProperty.call(layerCache, styleKey)) {
						var styleCache = layerCache[styleKey];
						for (var key in styleCache) {
							if (hasOwnProperty.call(styleCache, key)) {

								var positions = styleCache[key].positions;

								for (var i = 0, position; position = positions[i]; i++) {
									if (position.active) {
										if (!position.rendered) {
											layer.append(position.element);
											position.rendered = true;
										}
									} else {
										positions.splice(i--, 1);
										if (position.rendered) {
											position.element.detach();
										}
									}
								}

								if (positions.length == 0) {
									delete styleCache[key];
								}
							}
						}
					}
				}

				layer.show();
			}
		}
	};

	// Creates (if necessary) and returns the text overlay container.
	//
	// @param {string} classes String of space-separated CSS classes used to
	//     uniquely identify the text layer.
	// @return {object} The jQuery-wrapped text-layer div.

	Canvas.prototype.getTextLayer = function(classes) {

		var layer = this.text[classes];

		// Create the text layer if it doesn't exist

		if (layer == null) {

			// Create the text layer container, if it doesn't exist

			if (this.textContainer == null) {
				this.textContainer = $("<div class='flot-text'></div>")
					.css({
						position: "absolute",
						top: 0,
						left: 0,
						bottom: 0,
						right: 0,
						'font-size': "smaller",
						color: "#545454"
					})
					.insertAfter(this.element);
			}

			layer = this.text[classes] = $("<div></div>")
				.addClass(classes)
				.css({
					position: "absolute",
					top: 0,
					left: 0,
					bottom: 0,
					right: 0
				})
				.appendTo(this.textContainer);
		}

		return layer;
	};

	// Creates (if necessary) and returns a text info object.
	//
	// The object looks like this:
	//
	// {
	//     width: Width of the text's wrapper div.
	//     height: Height of the text's wrapper div.
	//     element: The jQuery-wrapped HTML div containing the text.
	//     positions: Array of positions at which this text is drawn.
	// }
	//
	// The positions array contains objects that look like this:
	//
	// {
	//     active: Flag indicating whether the text should be visible.
	//     rendered: Flag indicating whether the text is currently visible.
	//     element: The jQuery-wrapped HTML div containing the text.
	//     x: X coordinate at which to draw the text.
	//     y: Y coordinate at which to draw the text.
	// }
	//
	// Each position after the first receives a clone of the original element.
	//
	// The idea is that that the width, height, and general 'identity' of the
	// text is constant no matter where it is placed; the placements are a
	// secondary property.
	//
	// Canvas maintains a cache of recently-used text info objects; getTextInfo
	// either returns the cached element or creates a new entry.
	//
	// @param {string} layer A string of space-separated CSS classes uniquely
	//     identifying the layer containing this text.
	// @param {string} text Text string to retrieve info for.
	// @param {(string|object)=} font Either a string of space-separated CSS
	//     classes or a font-spec object, defining the text's font and style.
	// @param {number=} angle Angle at which to rotate the text, in degrees.
	//     Angle is currently unused, it will be implemented in the future.
	// @param {number=} width Maximum width of the text before it wraps.
	// @return {object} a text info object.

	Canvas.prototype.getTextInfo = function(layer, text, font, angle, width) {

		var textStyle, layerCache, styleCache, info;

		// Cast the value to a string, in case we were given a number or such

		text = "" + text;

		// If the font is a font-spec object, generate a CSS font definition

		if (typeof font === "object") {
			textStyle = font.style + " " + font.variant + " " + font.weight + " " + font.size + "px/" + font.lineHeight + "px " + font.family;
		} else {
			textStyle = font;
		}

		// Retrieve (or create) the cache for the text's layer and styles

		layerCache = this._textCache[layer];

		if (layerCache == null) {
			layerCache = this._textCache[layer] = {};
		}

		styleCache = layerCache[textStyle];

		if (styleCache == null) {
			styleCache = layerCache[textStyle] = {};
		}

		info = styleCache[text];

		// If we can't find a matching element in our cache, create a new one

		if (info == null) {

			var element = $("<div></div>").html(text)
				.css({
					position: "absolute",
					'max-width': width,
					top: -9999
				})
				.appendTo(this.getTextLayer(layer));

			if (typeof font === "object") {
				element.css({
					font: textStyle,
					color: font.color
				});
			} else if (typeof font === "string") {
				element.addClass(font);
			}

			info = styleCache[text] = {
				width: element.outerWidth(true),
				height: element.outerHeight(true),
				element: element,
				positions: []
			};

			element.detach();
		}

		return info;
	};

	// Adds a text string to the canvas text overlay.
	//
	// The text isn't drawn immediately; it is marked as rendering, which will
	// result in its addition to the canvas on the next render pass.
	//
	// @param {string} layer A string of space-separated CSS classes uniquely
	//     identifying the layer containing this text.
	// @param {number} x X coordinate at which to draw the text.
	// @param {number} y Y coordinate at which to draw the text.
	// @param {string} text Text string to draw.
	// @param {(string|object)=} font Either a string of space-separated CSS
	//     classes or a font-spec object, defining the text's font and style.
	// @param {number=} angle Angle at which to rotate the text, in degrees.
	//     Angle is currently unused, it will be implemented in the future.
	// @param {number=} width Maximum width of the text before it wraps.
	// @param {string=} halign Horizontal alignment of the text; either "left",
	//     "center" or "right".
	// @param {string=} valign Vertical alignment of the text; either "top",
	//     "middle" or "bottom".

	Canvas.prototype.addText = function(layer, x, y, text, font, angle, width, halign, valign) {

		var info = this.getTextInfo(layer, text, font, angle, width),
			positions = info.positions;

		// Tweak the div's position to match the text's alignment

		if (halign == "center") {
			x -= info.width / 2;
		} else if (halign == "right") {
			x -= info.width;
		}

		if (valign == "middle") {
			y -= info.height / 2;
		} else if (valign == "bottom") {
			y -= info.height;
		}

		// Determine whether this text already exists at this position.
		// If so, mark it for inclusion in the next render pass.

		for (var i = 0, position; position = positions[i]; i++) {
			if (position.x == x && position.y == y) {
				position.active = true;
				return;
			}
		}

		// If the text doesn't exist at this position, create a new entry

		// For the very first position we'll re-use the original element,
		// while for subsequent ones we'll clone it.

		position = {
			active: true,
			rendered: false,
			element: positions.length ? info.element.clone() : info.element,
			x: x,
			y: y
		};

		positions.push(position);

		// Move the element to its final position within the container

		position.element.css({
			top: Math.round(y),
			left: Math.round(x),
			'text-align': halign	// In case the text wraps
		});
	};

	// Removes one or more text strings from the canvas text overlay.
	//
	// If no parameters are given, all text within the layer is removed.
	//
	// Note that the text is not immediately removed; it is simply marked as
	// inactive, which will result in its removal on the next render pass.
	// This avoids the performance penalty for 'clear and redraw' behavior,
	// where we potentially get rid of all text on a layer, but will likely
	// add back most or all of it later, as when redrawing axes, for example.
	//
	// @param {string} layer A string of space-separated CSS classes uniquely
	//     identifying the layer containing this text.
	// @param {number=} x X coordinate of the text.
	// @param {number=} y Y coordinate of the text.
	// @param {string=} text Text string to remove.
	// @param {(string|object)=} font Either a string of space-separated CSS
	//     classes or a font-spec object, defining the text's font and style.
	// @param {number=} angle Angle at which the text is rotated, in degrees.
	//     Angle is currently unused, it will be implemented in the future.

	Canvas.prototype.removeText = function(layer, x, y, text, font, angle) {
		if (text == null) {
			var layerCache = this._textCache[layer];
			if (layerCache != null) {
				for (var styleKey in layerCache) {
					if (hasOwnProperty.call(layerCache, styleKey)) {
						var styleCache = layerCache[styleKey];
						for (var key in styleCache) {
							if (hasOwnProperty.call(styleCache, key)) {
								var positions = styleCache[key].positions;
								for (var i = 0, position; position = positions[i]; i++) {
									position.active = false;
								}
							}
						}
					}
				}
			}
		} else {
			var positions = this.getTextInfo(layer, text, font, angle).positions;
			for (var i = 0, position; position = positions[i]; i++) {
				if (position.x == x && position.y == y) {
					position.active = false;
				}
			}
		}
	};

	///////////////////////////////////////////////////////////////////////////
	// The top-level container for the entire plot.

    function Plot(placeholder, data_, options_, plugins) {
        // data is on the form:
        //   [ series1, series2 ... ]
        // where series is either just the data as [ [x1, y1], [x2, y2], ... ]
        // or { data: [ [x1, y1], [x2, y2], ... ], label: "some label", ... }

        var series = [],
            options = {
                // the color theme used for graphs
                colors: ["#edc240", "#afd8f8", "#cb4b4b", "#4da74d", "#9440ed"],
                legend: {
                    show: true,
                    noColumns: 1, // number of colums in legend table
                    labelFormatter: null, // fn: string -> string
                    labelBoxBorderColor: "#ccc", // border color for the little label boxes
                    container: null, // container (as jQuery object) to put legend in, null means default on top of graph
                    position: "ne", // position of default legend container within plot
                    margin: 5, // distance from grid edge to default legend container within plot
                    backgroundColor: null, // null means auto-detect
                    backgroundOpacity: 0.85, // set to 0 to avoid background
                    sorted: null    // default to no legend sorting
                },
                xaxis: {
                    show: null, // null = auto-detect, true = always, false = never
                    position: "bottom", // or "top"
                    mode: null, // null or "time"
                    font: null, // null (derived from CSS in placeholder) or object like { size: 11, lineHeight: 13, style: "italic", weight: "bold", family: "sans-serif", variant: "small-caps" }
                    color: null, // base color, labels, ticks
                    tickColor: null, // possibly different color of ticks, e.g. "rgba(0,0,0,0.15)"
                    transform: null, // null or f: number -> number to transform axis
                    inverseTransform: null, // if transform is set, this should be the inverse function
                    min: null, // min. value to show, null means set automatically
                    max: null, // max. value to show, null means set automatically
                    autoscaleMargin: null, // margin in % to add if auto-setting min/max
                    ticks: null, // either [1, 3] or [[1, "a"], 3] or (fn: axis info -> ticks) or app. number of ticks for auto-ticks
                    tickFormatter: null, // fn: number -> string
                    labelWidth: null, // size of tick labels in pixels
                    labelHeight: null,
                    reserveSpace: null, // whether to reserve space even if axis isn't shown
                    tickLength: null, // size in pixels of ticks, or "full" for whole line
                    alignTicksWithAxis: null, // axis number or null for no sync
                    tickDecimals: null, // no. of decimals, null means auto
                    tickSize: null, // number or [number, "unit"]
                    minTickSize: null // number or [number, "unit"]
                },
                yaxis: {
                    autoscaleMargin: 0.02,
                    position: "left" // or "right"
                },
                xaxes: [],
                yaxes: [],
                series: {
                    points: {
                        show: false,
                        radius: 3,
                        lineWidth: 2, // in pixels
                        fill: true,
                        fillColor: "#ffffff",
                        symbol: "circle" // or callback
                    },
                    lines: {
                        // we don't put in show: false so we can see
                        // whether lines were actively disabled
                        lineWidth: 2, // in pixels
                        fill: false,
                        fillColor: null,
                        steps: false
                        // Omit 'zero', so we can later default its value to
                        // match that of the 'fill' option.
                    },
                    bars: {
                        show: false,
                        lineWidth: 2, // in pixels
                        barWidth: 1, // in units of the x axis
                        fill: true,
                        fillColor: null,
                        align: "left", // "left", "right", or "center"
                        horizontal: false,
                        zero: true
                    },
                    shadowSize: 3,
                    highlightColor: null
                },
                grid: {
                    show: true,
                    aboveData: false,
                    color: "#545454", // primary color used for outline and labels
                    backgroundColor: null, // null for transparent, else color
                    borderColor: null, // set if different from the grid color
                    tickColor: null, // color for the ticks, e.g. "rgba(0,0,0,0.15)"
                    margin: 0, // distance from the canvas edge to the grid
                    labelMargin: 5, // in pixels
                    axisMargin: 8, // in pixels
                    borderWidth: 2, // in pixels
                    minBorderMargin: null, // in pixels, null means taken from points radius
                    markings: null, // array of ranges or fn: axes -> array of ranges
                    markingsColor: "#f4f4f4",
                    markingsLineWidth: 2,
                    // interactive stuff
                    clickable: false,
                    hoverable: false,
                    autoHighlight: true, // highlight in case mouse is near
                    mouseActiveRadius: 10 // how far the mouse can be away to activate an item
                },
                interaction: {
                    redrawOverlayInterval: 1000/60 // time between updates, -1 means in same flow
                },
                hooks: {}
            },
        surface = null,     // the canvas for the plot itself
        overlay = null,     // canvas for interactive stuff on top of plot
        eventHolder = null, // jQuery object that events should be bound to
        ctx = null, octx = null,
        xaxes = [], yaxes = [],
        plotOffset = { left: 0, right: 0, top: 0, bottom: 0},
        plotWidth = 0, plotHeight = 0,
        hooks = {
            processOptions: [],
            processRawData: [],
            processDatapoints: [],
            processOffset: [],
            drawBackground: [],
            drawSeries: [],
            draw: [],
            bindEvents: [],
            drawOverlay: [],
            shutdown: []
        },
        plot = this;

        // public functions
        plot.setData = setData;
        plot.setupGrid = setupGrid;
        plot.draw = draw;
        plot.getPlaceholder = function() { return placeholder; };
        plot.getCanvas = function() { return surface.element; };
        plot.getPlotOffset = function() { return plotOffset; };
        plot.width = function () { return plotWidth; };
        plot.height = function () { return plotHeight; };
        plot.offset = function () {
            var o = eventHolder.offset();
            o.left += plotOffset.left;
            o.top += plotOffset.top;
            return o;
        };
        plot.getData = function () { return series; };
        plot.getAxes = function () {
            var res = {}, i;
            $.each(xaxes.concat(yaxes), function (_, axis) {
                if (axis)
                    res[axis.direction + (axis.n != 1 ? axis.n : "") + "axis"] = axis;
            });
            return res;
        };
        plot.getXAxes = function () { return xaxes; };
        plot.getYAxes = function () { return yaxes; };
        plot.c2p = canvasToAxisCoords;
        plot.p2c = axisToCanvasCoords;
        plot.getOptions = function () { return options; };
        plot.highlight = highlight;
        plot.unhighlight = unhighlight;
        plot.triggerRedrawOverlay = triggerRedrawOverlay;
        plot.pointOffset = function(point) {
            return {
                left: parseInt(xaxes[axisNumber(point, "x") - 1].p2c(+point.x) + plotOffset.left, 10),
                top: parseInt(yaxes[axisNumber(point, "y") - 1].p2c(+point.y) + plotOffset.top, 10)
            };
        };
        plot.shutdown = shutdown;
        plot.destroy = function () {
            shutdown();
            placeholder.removeData("plot").empty();

            series = [];
            options = null;
            surface = null;
            overlay = null;
            eventHolder = null;
            ctx = null;
            octx = null;
            xaxes = [];
            yaxes = [];
            hooks = null;
            highlights = [];
            plot = null;
        };
        plot.resize = function () {
        	var width = placeholder.width(),
        		height = placeholder.height();
            surface.resize(width, height);
            overlay.resize(width, height);
        };

        // public attributes
        plot.hooks = hooks;

        // initialize
        initPlugins(plot);
        parseOptions(options_);
        setupCanvases();
        setData(data_);
        setupGrid();
        draw();
        bindEvents();


        function executeHooks(hook, args) {
            args = [plot].concat(args);
            for (var i = 0; i < hook.length; ++i)
                hook[i].apply(this, args);
        }

        function initPlugins() {

            // References to key classes, allowing plugins to modify them

            var classes = {
                Canvas: Canvas
            };

            for (var i = 0; i < plugins.length; ++i) {
                var p = plugins[i];
                p.init(plot, classes);
                if (p.options)
                    $.extend(true, options, p.options);
            }
        }

        function parseOptions(opts) {

            $.extend(true, options, opts);

            // $.extend merges arrays, rather than replacing them.  When less
            // colors are provided than the size of the default palette, we
            // end up with those colors plus the remaining defaults, which is
            // not expected behavior; avoid it by replacing them here.

            if (opts && opts.colors) {
            	options.colors = opts.colors;
            }

            if (options.xaxis.color == null)
                options.xaxis.color = $.color.parse(options.grid.color).scale('a', 0.22).toString();
            if (options.yaxis.color == null)
                options.yaxis.color = $.color.parse(options.grid.color).scale('a', 0.22).toString();

            if (options.xaxis.tickColor == null) // grid.tickColor for back-compatibility
                options.xaxis.tickColor = options.grid.tickColor || options.xaxis.color;
            if (options.yaxis.tickColor == null) // grid.tickColor for back-compatibility
                options.yaxis.tickColor = options.grid.tickColor || options.yaxis.color;

            if (options.grid.borderColor == null)
                options.grid.borderColor = options.grid.color;
            if (options.grid.tickColor == null)
                options.grid.tickColor = $.color.parse(options.grid.color).scale('a', 0.22).toString();

            // Fill in defaults for axis options, including any unspecified
            // font-spec fields, if a font-spec was provided.

            // If no x/y axis options were provided, create one of each anyway,
            // since the rest of the code assumes that they exist.

            var i, axisOptions, axisCount,
                fontSize = placeholder.css("font-size"),
                fontSizeDefault = fontSize ? +fontSize.replace("px", "") : 13,
                fontDefaults = {
                    style: placeholder.css("font-style"),
                    size: Math.round(0.8 * fontSizeDefault),
                    variant: placeholder.css("font-variant"),
                    weight: placeholder.css("font-weight"),
                    family: placeholder.css("font-family")
                };

            axisCount = options.xaxes.length || 1;
            for (i = 0; i < axisCount; ++i) {

                axisOptions = options.xaxes[i];
                if (axisOptions && !axisOptions.tickColor) {
                    axisOptions.tickColor = axisOptions.color;
                }

                axisOptions = $.extend(true, {}, options.xaxis, axisOptions);
                options.xaxes[i] = axisOptions;

                if (axisOptions.font) {
                    axisOptions.font = $.extend({}, fontDefaults, axisOptions.font);
                    if (!axisOptions.font.color) {
                        axisOptions.font.color = axisOptions.color;
                    }
                    if (!axisOptions.font.lineHeight) {
                        axisOptions.font.lineHeight = Math.round(axisOptions.font.size * 1.15);
                    }
                }
            }

            axisCount = options.yaxes.length || 1;
            for (i = 0; i < axisCount; ++i) {

                axisOptions = options.yaxes[i];
                if (axisOptions && !axisOptions.tickColor) {
                    axisOptions.tickColor = axisOptions.color;
                }

                axisOptions = $.extend(true, {}, options.yaxis, axisOptions);
                options.yaxes[i] = axisOptions;

                if (axisOptions.font) {
                    axisOptions.font = $.extend({}, fontDefaults, axisOptions.font);
                    if (!axisOptions.font.color) {
                        axisOptions.font.color = axisOptions.color;
                    }
                    if (!axisOptions.font.lineHeight) {
                        axisOptions.font.lineHeight = Math.round(axisOptions.font.size * 1.15);
                    }
                }
            }

            // backwards compatibility, to be removed in future
            if (options.xaxis.noTicks && options.xaxis.ticks == null)
                options.xaxis.ticks = options.xaxis.noTicks;
            if (options.yaxis.noTicks && options.yaxis.ticks == null)
                options.yaxis.ticks = options.yaxis.noTicks;
            if (options.x2axis) {
                options.xaxes[1] = $.extend(true, {}, options.xaxis, options.x2axis);
                options.xaxes[1].position = "top";
                // Override the inherit to allow the axis to auto-scale
                if (options.x2axis.min == null) {
                    options.xaxes[1].min = null;
                }
                if (options.x2axis.max == null) {
                    options.xaxes[1].max = null;
                }
            }
            if (options.y2axis) {
                options.yaxes[1] = $.extend(true, {}, options.yaxis, options.y2axis);
                options.yaxes[1].position = "right";
                // Override the inherit to allow the axis to auto-scale
                if (options.y2axis.min == null) {
                    options.yaxes[1].min = null;
                }
                if (options.y2axis.max == null) {
                    options.yaxes[1].max = null;
                }
            }
            if (options.grid.coloredAreas)
                options.grid.markings = options.grid.coloredAreas;
            if (options.grid.coloredAreasColor)
                options.grid.markingsColor = options.grid.coloredAreasColor;
            if (options.lines)
                $.extend(true, options.series.lines, options.lines);
            if (options.points)
                $.extend(true, options.series.points, options.points);
            if (options.bars)
                $.extend(true, options.series.bars, options.bars);
            if (options.shadowSize != null)
                options.series.shadowSize = options.shadowSize;
            if (options.highlightColor != null)
                options.series.highlightColor = options.highlightColor;

            // save options on axes for future reference
            for (i = 0; i < options.xaxes.length; ++i)
                getOrCreateAxis(xaxes, i + 1).options = options.xaxes[i];
            for (i = 0; i < options.yaxes.length; ++i)
                getOrCreateAxis(yaxes, i + 1).options = options.yaxes[i];

            // add hooks from options
            for (var n in hooks)
                if (options.hooks[n] && options.hooks[n].length)
                    hooks[n] = hooks[n].concat(options.hooks[n]);

            executeHooks(hooks.processOptions, [options]);
        }

        function setData(d) {
            series = parseData(d);
            fillInSeriesOptions();
            processData();
        }

        function parseData(d) {
            var res = [];
            for (var i = 0; i < d.length; ++i) {
                var s = $.extend(true, {}, options.series);

                if (d[i].data != null) {
                    s.data = d[i].data; // move the data instead of deep-copy
                    delete d[i].data;

                    $.extend(true, s, d[i]);

                    d[i].data = s.data;
                }
                else
                    s.data = d[i];
                res.push(s);
            }

            return res;
        }

        function axisNumber(obj, coord) {
            var a = obj[coord + "axis"];
            if (typeof a == "object") // if we got a real axis, extract number
                a = a.n;
            if (typeof a != "number")
                a = 1; // default to first axis
            return a;
        }

        function allAxes() {
            // return flat array without annoying null entries
            return $.grep(xaxes.concat(yaxes), function (a) { return a; });
        }

        function canvasToAxisCoords(pos) {
            // return an object with x/y corresponding to all used axes
            var res = {}, i, axis;
            for (i = 0; i < xaxes.length; ++i) {
                axis = xaxes[i];
                if (axis && axis.used)
                    res["x" + axis.n] = axis.c2p(pos.left);
            }

            for (i = 0; i < yaxes.length; ++i) {
                axis = yaxes[i];
                if (axis && axis.used)
                    res["y" + axis.n] = axis.c2p(pos.top);
            }

            if (res.x1 !== undefined)
                res.x = res.x1;
            if (res.y1 !== undefined)
                res.y = res.y1;

            return res;
        }

        function axisToCanvasCoords(pos) {
            // get canvas coords from the first pair of x/y found in pos
            var res = {}, i, axis, key;

            for (i = 0; i < xaxes.length; ++i) {
                axis = xaxes[i];
                if (axis && axis.used) {
                    key = "x" + axis.n;
                    if (pos[key] == null && axis.n == 1)
                        key = "x";

                    if (pos[key] != null) {
                        res.left = axis.p2c(pos[key]);
                        break;
                    }
                }
            }

            for (i = 0; i < yaxes.length; ++i) {
                axis = yaxes[i];
                if (axis && axis.used) {
                    key = "y" + axis.n;
                    if (pos[key] == null && axis.n == 1)
                        key = "y";

                    if (pos[key] != null) {
                        res.top = axis.p2c(pos[key]);
                        break;
                    }
                }
            }

            return res;
        }

        function getOrCreateAxis(axes, number) {
            if (!axes[number - 1])
                axes[number - 1] = {
                    n: number, // save the number for future reference
                    direction: axes == xaxes ? "x" : "y",
                    options: $.extend(true, {}, axes == xaxes ? options.xaxis : options.yaxis)
                };

            return axes[number - 1];
        }

        function fillInSeriesOptions() {

            var neededColors = series.length, maxIndex = -1, i;

            // Subtract the number of series that already have fixed colors or
            // color indexes from the number that we still need to generate.

            for (i = 0; i < series.length; ++i) {
                var sc = series[i].color;
                if (sc != null) {
                    neededColors--;
                    if (typeof sc == "number" && sc > maxIndex) {
                        maxIndex = sc;
                    }
                }
            }

            // If any of the series have fixed color indexes, then we need to
            // generate at least as many colors as the highest index.

            if (neededColors <= maxIndex) {
                neededColors = maxIndex + 1;
            }

            // Generate all the colors, using first the option colors and then
            // variations on those colors once they're exhausted.

            var c, colors = [], colorPool = options.colors,
                colorPoolSize = colorPool.length, variation = 0;

            for (i = 0; i < neededColors; i++) {

                c = $.color.parse(colorPool[i % colorPoolSize] || "#666");

                // Each time we exhaust the colors in the pool we adjust
                // a scaling factor used to produce more variations on
                // those colors. The factor alternates negative/positive
                // to produce lighter/darker colors.

                // Reset the variation after every few cycles, or else
                // it will end up producing only white or black colors.

                if (i % colorPoolSize == 0 && i) {
                    if (variation >= 0) {
                        if (variation < 0.5) {
                            variation = -variation - 0.2;
                        } else variation = 0;
                    } else variation = -variation;
                }

                colors[i] = c.scale('rgb', 1 + variation);
            }

            // Finalize the series options, filling in their colors

            var colori = 0, s;
            for (i = 0; i < series.length; ++i) {
                s = series[i];

                // assign colors
                if (s.color == null) {
                    s.color = colors[colori].toString();
                    ++colori;
                }
                else if (typeof s.color == "number")
                    s.color = colors[s.color].toString();

                // turn on lines automatically in case nothing is set
                if (s.lines.show == null) {
                    var v, show = true;
                    for (v in s)
                        if (s[v] && s[v].show) {
                            show = false;
                            break;
                        }
                    if (show)
                        s.lines.show = true;
                }

                // If nothing was provided for lines.zero, default it to match
                // lines.fill, since areas by default should extend to zero.

                if (s.lines.zero == null) {
                    s.lines.zero = !!s.lines.fill;
                }

                // setup axes
                s.xaxis = getOrCreateAxis(xaxes, axisNumber(s, "x"));
                s.yaxis = getOrCreateAxis(yaxes, axisNumber(s, "y"));
            }
        }

        function processData() {
            var topSentry = Number.POSITIVE_INFINITY,
                bottomSentry = Number.NEGATIVE_INFINITY,
                fakeInfinity = Number.MAX_VALUE,
                i, j, k, m, length,
                s, points, ps, x, y, axis, val, f, p,
                data, format;

            function updateAxis(axis, min, max) {
                if (min < axis.datamin && min != -fakeInfinity)
                    axis.datamin = min;
                if (max > axis.datamax && max != fakeInfinity)
                    axis.datamax = max;
            }

            $.each(allAxes(), function (_, axis) {
                // init axis
                axis.datamin = topSentry;
                axis.datamax = bottomSentry;
                axis.used = false;
            });

            for (i = 0; i < series.length; ++i) {
                s = series[i];
                s.datapoints = { points: [] };

                executeHooks(hooks.processRawData, [ s, s.data, s.datapoints ]);
            }

            // first pass: clean and copy data
            for (i = 0; i < series.length; ++i) {
                s = series[i];

                data = s.data;
                format = s.datapoints.format;

                if (!format) {
                    format = [];
                    // find out how to copy
                    format.push({ x: true, number: true, required: true });
                    format.push({ y: true, number: true, required: true });

                    if (s.bars.show || (s.lines.show && s.lines.fill)) {
                        var autoscale = !!((s.bars.show && s.bars.zero) || (s.lines.show && s.lines.zero));
                        format.push({ y: true, number: true, required: false, defaultValue: 0, autoscale: autoscale });
                        if (s.bars.horizontal) {
                            delete format[format.length - 1].y;
                            format[format.length - 1].x = true;
                        }
                    }

                    s.datapoints.format = format;
                }

                if (s.datapoints.pointsize != null)
                    continue; // already filled in

                s.datapoints.pointsize = format.length;

                ps = s.datapoints.pointsize;
                points = s.datapoints.points;

                var insertSteps = s.lines.show && s.lines.steps;
                s.xaxis.used = s.yaxis.used = true;

                for (j = k = 0; j < data.length; ++j, k += ps) {
                    p = data[j];

                    var nullify = p == null;
                    if (!nullify) {
                        for (m = 0; m < ps; ++m) {
                            val = p[m];
                            f = format[m];

                            if (f) {
                                if (f.number && val != null) {
                                    val = +val; // convert to number
                                    if (isNaN(val))
                                        val = null;
                                    else if (val == Infinity)
                                        val = fakeInfinity;
                                    else if (val == -Infinity)
                                        val = -fakeInfinity;
                                }

                                if (val == null) {
                                    if (f.required)
                                        nullify = true;

                                    if (f.defaultValue != null)
                                        val = f.defaultValue;
                                }
                            }

                            points[k + m] = val;
                        }
                    }

                    if (nullify) {
                        for (m = 0; m < ps; ++m) {
                            val = points[k + m];
                            if (val != null) {
                                f = format[m];
                                // extract min/max info
                                if (f.autoscale !== false) {
                                    if (f.x) {
                                        updateAxis(s.xaxis, val, val);
                                    }
                                    if (f.y) {
                                        updateAxis(s.yaxis, val, val);
                                    }
                                }
                            }
                            points[k + m] = null;
                        }
                    }
                    else {
                        // a little bit of line specific stuff that
                        // perhaps shouldn't be here, but lacking
                        // better means...
                        if (insertSteps && k > 0
                            && points[k - ps] != null
                            && points[k - ps] != points[k]
                            && points[k - ps + 1] != points[k + 1]) {
                            // copy the point to make room for a middle point
                            for (m = 0; m < ps; ++m)
                                points[k + ps + m] = points[k + m];

                            // middle point has same y
                            points[k + 1] = points[k - ps + 1];

                            // we've added a point, better reflect that
                            k += ps;
                        }
                    }
                }
            }

            // give the hooks a chance to run
            for (i = 0; i < series.length; ++i) {
                s = series[i];

                executeHooks(hooks.processDatapoints, [ s, s.datapoints]);
            }

            // second pass: find datamax/datamin for auto-scaling
            for (i = 0; i < series.length; ++i) {
                s = series[i];
                points = s.datapoints.points;
                ps = s.datapoints.pointsize;
                format = s.datapoints.format;

                var xmin = topSentry, ymin = topSentry,
                    xmax = bottomSentry, ymax = bottomSentry;

                for (j = 0; j < points.length; j += ps) {
                    if (points[j] == null)
                        continue;

                    for (m = 0; m < ps; ++m) {
                        val = points[j + m];
                        f = format[m];
                        if (!f || f.autoscale === false || val == fakeInfinity || val == -fakeInfinity)
                            continue;

                        if (f.x) {
                            if (val < xmin)
                                xmin = val;
                            if (val > xmax)
                                xmax = val;
                        }
                        if (f.y) {
                            if (val < ymin)
                                ymin = val;
                            if (val > ymax)
                                ymax = val;
                        }
                    }
                }

                if (s.bars.show) {
                    // make sure we got room for the bar on the dancing floor
                    var delta;

                    switch (s.bars.align) {
                        case "left":
                            delta = 0;
                            break;
                        case "right":
                            delta = -s.bars.barWidth;
                            break;
                        default:
                            delta = -s.bars.barWidth / 2;
                    }

                    if (s.bars.horizontal) {
                        ymin += delta;
                        ymax += delta + s.bars.barWidth;
                    }
                    else {
                        xmin += delta;
                        xmax += delta + s.bars.barWidth;
                    }
                }

                updateAxis(s.xaxis, xmin, xmax);
                updateAxis(s.yaxis, ymin, ymax);
            }

            $.each(allAxes(), function (_, axis) {
                if (axis.datamin == topSentry)
                    axis.datamin = null;
                if (axis.datamax == bottomSentry)
                    axis.datamax = null;
            });
        }

        function setupCanvases() {

            // Make sure the placeholder is clear of everything except canvases
            // from a previous plot in this container that we'll try to re-use.

            placeholder.css("padding", 0) // padding messes up the positioning
                .children().filter(function(){
                    return !$(this).hasClass("flot-overlay") && !$(this).hasClass('flot-base');
                }).remove();

            if (placeholder.css("position") == 'static')
                placeholder.css("position", "relative"); // for positioning labels and overlay

            surface = new Canvas("flot-base", placeholder);
            overlay = new Canvas("flot-overlay", placeholder); // overlay canvas for interactive features

            ctx = surface.context;
            octx = overlay.context;

            // define which element we're listening for events on
            eventHolder = $(overlay.element).unbind();

            // If we're re-using a plot object, shut down the old one

            var existing = placeholder.data("plot");

            if (existing) {
                existing.shutdown();
                overlay.clear();
            }

            // save in case we get replotted
            placeholder.data("plot", plot);
        }

        function bindEvents() {
            // bind events
            if (options.grid.hoverable) {
                eventHolder.mousemove(onMouseMove);

                // Use bind, rather than .mouseleave, because we officially
                // still support jQuery 1.2.6, which doesn't define a shortcut
                // for mouseenter or mouseleave.  This was a bug/oversight that
                // was fixed somewhere around 1.3.x.  We can return to using
                // .mouseleave when we drop support for 1.2.6.

                eventHolder.bind("mouseleave", onMouseLeave);
            }

            if (options.grid.clickable)
                eventHolder.click(onClick);

            executeHooks(hooks.bindEvents, [eventHolder]);
        }

        function shutdown() {
            if (redrawTimeout)
                clearTimeout(redrawTimeout);

            eventHolder.unbind("mousemove", onMouseMove);
            eventHolder.unbind("mouseleave", onMouseLeave);
            eventHolder.unbind("click", onClick);

            executeHooks(hooks.shutdown, [eventHolder]);
        }

        function setTransformationHelpers(axis) {
            // set helper functions on the axis, assumes plot area
            // has been computed already

            function identity(x) { return x; }

            var s, m, t = axis.options.transform || identity,
                it = axis.options.inverseTransform;

            // precompute how much the axis is scaling a point
            // in canvas space
            if (axis.direction == "x") {
                s = axis.scale = plotWidth / Math.abs(t(axis.max) - t(axis.min));
                m = Math.min(t(axis.max), t(axis.min));
            }
            else {
                s = axis.scale = plotHeight / Math.abs(t(axis.max) - t(axis.min));
                s = -s;
                m = Math.max(t(axis.max), t(axis.min));
            }

            // data point to canvas coordinate
            if (t == identity) // slight optimization
                axis.p2c = function (p) { return (p - m) * s; };
            else
                axis.p2c = function (p) { return (t(p) - m) * s; };
            // canvas coordinate to data point
            if (!it)
                axis.c2p = function (c) { return m + c / s; };
            else
                axis.c2p = function (c) { return it(m + c / s); };
        }

        function measureTickLabels(axis) {

            var opts = axis.options,
                ticks = axis.ticks || [],
                labelWidth = opts.labelWidth || 0,
                labelHeight = opts.labelHeight || 0,
                maxWidth = labelWidth || (axis.direction == "x" ? Math.floor(surface.width / (ticks.length || 1)) : null),
                legacyStyles = axis.direction + "Axis " + axis.direction + axis.n + "Axis",
                layer = "flot-" + axis.direction + "-axis flot-" + axis.direction + axis.n + "-axis " + legacyStyles,
                font = opts.font || "flot-tick-label tickLabel";

            for (var i = 0; i < ticks.length; ++i) {

                var t = ticks[i];

                if (!t.label)
                    continue;

                var info = surface.getTextInfo(layer, t.label, font, null, maxWidth);

                labelWidth = Math.max(labelWidth, info.width);
                labelHeight = Math.max(labelHeight, info.height);
            }

            axis.labelWidth = opts.labelWidth || labelWidth;
            axis.labelHeight = opts.labelHeight || labelHeight;
        }

        function allocateAxisBoxFirstPhase(axis) {
            // find the bounding box of the axis by looking at label
            // widths/heights and ticks, make room by diminishing the
            // plotOffset; this first phase only looks at one
            // dimension per axis, the other dimension depends on the
            // other axes so will have to wait

            var lw = axis.labelWidth,
                lh = axis.labelHeight,
                pos = axis.options.position,
                isXAxis = axis.direction === "x",
                tickLength = axis.options.tickLength,
                axisMargin = options.grid.axisMargin,
                padding = options.grid.labelMargin,
                innermost = true,
                outermost = true,
                first = true,
                found = false;

            // Determine the axis's position in its direction and on its side

            $.each(isXAxis ? xaxes : yaxes, function(i, a) {
                if (a && (a.show || a.reserveSpace)) {
                    if (a === axis) {
                        found = true;
                    } else if (a.options.position === pos) {
                        if (found) {
                            outermost = false;
                        } else {
                            innermost = false;
                        }
                    }
                    if (!found) {
                        first = false;
                    }
                }
            });

            // The outermost axis on each side has no margin

            if (outermost) {
                axisMargin = 0;
            }

            // The ticks for the first axis in each direction stretch across

            if (tickLength == null) {
                tickLength = first ? "full" : 5;
            }

            if (!isNaN(+tickLength))
                padding += +tickLength;

            if (isXAxis) {
                lh += padding;

                if (pos == "bottom") {
                    plotOffset.bottom += lh + axisMargin;
                    axis.box = { top: surface.height - plotOffset.bottom, height: lh };
                }
                else {
                    axis.box = { top: plotOffset.top + axisMargin, height: lh };
                    plotOffset.top += lh + axisMargin;
                }
            }
            else {
                lw += padding;

                if (pos == "left") {
                    axis.box = { left: plotOffset.left + axisMargin, width: lw };
                    plotOffset.left += lw + axisMargin;
                }
                else {
                    plotOffset.right += lw + axisMargin;
                    axis.box = { left: surface.width - plotOffset.right, width: lw };
                }
            }

             // save for future reference
            axis.position = pos;
            axis.tickLength = tickLength;
            axis.box.padding = padding;
            axis.innermost = innermost;
        }

        function allocateAxisBoxSecondPhase(axis) {
            // now that all axis boxes have been placed in one
            // dimension, we can set the remaining dimension coordinates
            if (axis.direction == "x") {
                axis.box.left = plotOffset.left - axis.labelWidth / 2;
                axis.box.width = surface.width - plotOffset.left - plotOffset.right + axis.labelWidth;
            }
            else {
                axis.box.top = plotOffset.top - axis.labelHeight / 2;
                axis.box.height = surface.height - plotOffset.bottom - plotOffset.top + axis.labelHeight;
            }
        }

        function adjustLayoutForThingsStickingOut() {
            // possibly adjust plot offset to ensure everything stays
            // inside the canvas and isn't clipped off

            var minMargin = options.grid.minBorderMargin,
                axis, i;

            // check stuff from the plot (FIXME: this should just read
            // a value from the series, otherwise it's impossible to
            // customize)
            if (minMargin == null) {
                minMargin = 0;
                for (i = 0; i < series.length; ++i)
                    minMargin = Math.max(minMargin, 2 * (series[i].points.radius + series[i].points.lineWidth/2));
            }

            var margins = {
                left: minMargin,
                right: minMargin,
                top: minMargin,
                bottom: minMargin
            };

            // check axis labels, note we don't check the actual
            // labels but instead use the overall width/height to not
            // jump as much around with replots
            $.each(allAxes(), function (_, axis) {
                if (axis.reserveSpace && axis.ticks && axis.ticks.length) {
                    if (axis.direction === "x") {
                        margins.left = Math.max(margins.left, axis.labelWidth / 2);
                        margins.right = Math.max(margins.right, axis.labelWidth / 2);
                    } else {
                        margins.bottom = Math.max(margins.bottom, axis.labelHeight / 2);
                        margins.top = Math.max(margins.top, axis.labelHeight / 2);
                    }
                }
            });

            plotOffset.left = Math.ceil(Math.max(margins.left, plotOffset.left));
            plotOffset.right = Math.ceil(Math.max(margins.right, plotOffset.right));
            plotOffset.top = Math.ceil(Math.max(margins.top, plotOffset.top));
            plotOffset.bottom = Math.ceil(Math.max(margins.bottom, plotOffset.bottom));
        }

        function setupGrid() {
            var i, axes = allAxes(), showGrid = options.grid.show;

            // Initialize the plot's offset from the edge of the canvas

            for (var a in plotOffset) {
                var margin = options.grid.margin || 0;
                plotOffset[a] = typeof margin == "number" ? margin : margin[a] || 0;
            }

            executeHooks(hooks.processOffset, [plotOffset]);

            // If the grid is visible, add its border width to the offset

            for (var a in plotOffset) {
                if(typeof(options.grid.borderWidth) == "object") {
                    plotOffset[a] += showGrid ? options.grid.borderWidth[a] : 0;
                }
                else {
                    plotOffset[a] += showGrid ? options.grid.borderWidth : 0;
                }
            }

            $.each(axes, function (_, axis) {
                var axisOpts = axis.options;
                axis.show = axisOpts.show == null ? axis.used : axisOpts.show;
                axis.reserveSpace = axisOpts.reserveSpace == null ? axis.show : axisOpts.reserveSpace;
                setRange(axis);
            });

            if (showGrid) {

                var allocatedAxes = $.grep(axes, function (axis) {
                    return axis.show || axis.reserveSpace;
                });

                $.each(allocatedAxes, function (_, axis) {
                    // make the ticks
                    setupTickGeneration(axis);
                    setTicks(axis);
                    snapRangeToTicks(axis, axis.ticks);
                    // find labelWidth/Height for axis
                    measureTickLabels(axis);
                });

                // with all dimensions calculated, we can compute the
                // axis bounding boxes, start from the outside
                // (reverse order)
                for (i = allocatedAxes.length - 1; i >= 0; --i)
                    allocateAxisBoxFirstPhase(allocatedAxes[i]);

                // make sure we've got enough space for things that
                // might stick out
                adjustLayoutForThingsStickingOut();

                $.each(allocatedAxes, function (_, axis) {
                    allocateAxisBoxSecondPhase(axis);
                });
            }

            plotWidth = surface.width - plotOffset.left - plotOffset.right;
            plotHeight = surface.height - plotOffset.bottom - plotOffset.top;

            // now we got the proper plot dimensions, we can compute the scaling
            $.each(axes, function (_, axis) {
                setTransformationHelpers(axis);
            });

            if (showGrid) {
                drawAxisLabels();
            }

            insertLegend();
        }

        function setRange(axis) {
            var opts = axis.options,
                min = +(opts.min != null ? opts.min : axis.datamin),
                max = +(opts.max != null ? opts.max : axis.datamax),
                delta = max - min;

            if (delta == 0.0) {
                // degenerate case
                var widen = max == 0 ? 1 : 0.01;

                if (opts.min == null)
                    min -= widen;
                // always widen max if we couldn't widen min to ensure we
                // don't fall into min == max which doesn't work
                if (opts.max == null || opts.min != null)
                    max += widen;
            }
            else {
                // consider autoscaling
                var margin = opts.autoscaleMargin;
                if (margin != null) {
                    if (opts.min == null) {
                        min -= delta * margin;
                        // make sure we don't go below zero if all values
                        // are positive
                        if (min < 0 && axis.datamin != null && axis.datamin >= 0)
                            min = 0;
                    }
                    if (opts.max == null) {
                        max += delta * margin;
                        if (max > 0 && axis.datamax != null && axis.datamax <= 0)
                            max = 0;
                    }
                }
            }
            axis.min = min;
            axis.max = max;
        }

        function setupTickGeneration(axis) {
            var opts = axis.options;

            // estimate number of ticks
            var noTicks;
            if (typeof opts.ticks == "number" && opts.ticks > 0)
                noTicks = opts.ticks;
            else
                // heuristic based on the model a*sqrt(x) fitted to
                // some data points that seemed reasonable
                noTicks = 0.3 * Math.sqrt(axis.direction == "x" ? surface.width : surface.height);

            var delta = (axis.max - axis.min) / noTicks,
                dec = -Math.floor(Math.log(delta) / Math.LN10),
                maxDec = opts.tickDecimals;

            if (maxDec != null && dec > maxDec) {
                dec = maxDec;
            }

            var magn = Math.pow(10, -dec),
                norm = delta / magn, // norm is between 1.0 and 10.0
                size;

            if (norm < 1.5) {
                size = 1;
            } else if (norm < 3) {
                size = 2;
                // special case for 2.5, requires an extra decimal
                if (norm > 2.25 && (maxDec == null || dec + 1 <= maxDec)) {
                    size = 2.5;
                    ++dec;
                }
            } else if (norm < 7.5) {
                size = 5;
            } else {
                size = 10;
            }

            size *= magn;

            if (opts.minTickSize != null && size < opts.minTickSize) {
                size = opts.minTickSize;
            }

            axis.delta = delta;
            axis.tickDecimals = Math.max(0, maxDec != null ? maxDec : dec);
            axis.tickSize = opts.tickSize || size;

            // Time mode was moved to a plug-in in 0.8, and since so many people use it
            // we'll add an especially friendly reminder to make sure they included it.

            if (opts.mode == "time" && !axis.tickGenerator) {
                throw new Error("Time mode requires the flot.time plugin.");
            }

            // Flot supports base-10 axes; any other mode else is handled by a plug-in,
            // like flot.time.js.

            if (!axis.tickGenerator) {

                axis.tickGenerator = function (axis) {

                    var ticks = [],
                        start = floorInBase(axis.min, axis.tickSize),
                        i = 0,
                        v = Number.NaN,
                        prev;

                    do {
                        prev = v;
                        v = start + i * axis.tickSize;
                        ticks.push(v);
                        ++i;
                    } while (v < axis.max && v != prev);
                    return ticks;
                };

				axis.tickFormatter = function (value, axis) {

					var factor = axis.tickDecimals ? Math.pow(10, axis.tickDecimals) : 1;
					var formatted = "" + Math.round(value * factor) / factor;

					// If tickDecimals was specified, ensure that we have exactly that
					// much precision; otherwise default to the value's own precision.

					if (axis.tickDecimals != null) {
						var decimal = formatted.indexOf(".");
						var precision = decimal == -1 ? 0 : formatted.length - decimal - 1;
						if (precision < axis.tickDecimals) {
							return (precision ? formatted : formatted + ".") + ("" + factor).substr(1, axis.tickDecimals - precision);
						}
					}

                    return formatted;
                };
            }

            if ($.isFunction(opts.tickFormatter))
                axis.tickFormatter = function (v, axis) { return "" + opts.tickFormatter(v, axis); };

            if (opts.alignTicksWithAxis != null) {
                var otherAxis = (axis.direction == "x" ? xaxes : yaxes)[opts.alignTicksWithAxis - 1];
                if (otherAxis && otherAxis.used && otherAxis != axis) {
                    // consider snapping min/max to outermost nice ticks
                    var niceTicks = axis.tickGenerator(axis);
                    if (niceTicks.length > 0) {
                        if (opts.min == null)
                            axis.min = Math.min(axis.min, niceTicks[0]);
                        if (opts.max == null && niceTicks.length > 1)
                            axis.max = Math.max(axis.max, niceTicks[niceTicks.length - 1]);
                    }

                    axis.tickGenerator = function (axis) {
                        // copy ticks, scaled to this axis
                        var ticks = [], v, i;
                        for (i = 0; i < otherAxis.ticks.length; ++i) {
                            v = (otherAxis.ticks[i].v - otherAxis.min) / (otherAxis.max - otherAxis.min);
                            v = axis.min + v * (axis.max - axis.min);
                            ticks.push(v);
                        }
                        return ticks;
                    };

                    // we might need an extra decimal since forced
                    // ticks don't necessarily fit naturally
                    if (!axis.mode && opts.tickDecimals == null) {
                        var extraDec = Math.max(0, -Math.floor(Math.log(axis.delta) / Math.LN10) + 1),
                            ts = axis.tickGenerator(axis);

                        // only proceed if the tick interval rounded
                        // with an extra decimal doesn't give us a
                        // zero at end
                        if (!(ts.length > 1 && /\..*0$/.test((ts[1] - ts[0]).toFixed(extraDec))))
                            axis.tickDecimals = extraDec;
                    }
                }
            }
        }

        function setTicks(axis) {
            var oticks = axis.options.ticks, ticks = [];
            if (oticks == null || (typeof oticks == "number" && oticks > 0))
                ticks = axis.tickGenerator(axis);
            else if (oticks) {
                if ($.isFunction(oticks))
                    // generate the ticks
                    ticks = oticks(axis);
                else
                    ticks = oticks;
            }

            // clean up/labelify the supplied ticks, copy them over
            var i, v;
            axis.ticks = [];
            for (i = 0; i < ticks.length; ++i) {
                var label = null;
                var t = ticks[i];
                if (typeof t == "object") {
                    v = +t[0];
                    if (t.length > 1)
                        label = t[1];
                }
                else
                    v = +t;
                if (label == null)
                    label = axis.tickFormatter(v, axis);
                if (!isNaN(v))
                    axis.ticks.push({ v: v, label: label });
            }
        }

        function snapRangeToTicks(axis, ticks) {
            if (axis.options.autoscaleMargin && ticks.length > 0) {
                // snap to ticks
                if (axis.options.min == null)
                    axis.min = Math.min(axis.min, ticks[0].v);
                if (axis.options.max == null && ticks.length > 1)
                    axis.max = Math.max(axis.max, ticks[ticks.length - 1].v);
            }
        }

        function draw() {

            surface.clear();

            executeHooks(hooks.drawBackground, [ctx]);

            var grid = options.grid;

            // draw background, if any
            if (grid.show && grid.backgroundColor)
                drawBackground();

            if (grid.show && !grid.aboveData) {
                drawGrid();
            }

            for (var i = 0; i < series.length; ++i) {
                executeHooks(hooks.drawSeries, [ctx, series[i]]);
                drawSeries(series[i]);
            }

            executeHooks(hooks.draw, [ctx]);

            if (grid.show && grid.aboveData) {
                drawGrid();
            }

            surface.render();

            // A draw implies that either the axes or data have changed, so we
            // should probably update the overlay highlights as well.

            triggerRedrawOverlay();
        }

        function extractRange(ranges, coord) {
            var axis, from, to, key, axes = allAxes();

            for (var i = 0; i < axes.length; ++i) {
                axis = axes[i];
                if (axis.direction == coord) {
                    key = coord + axis.n + "axis";
                    if (!ranges[key] && axis.n == 1)
                        key = coord + "axis"; // support x1axis as xaxis
                    if (ranges[key]) {
                        from = ranges[key].from;
                        to = ranges[key].to;
                        break;
                    }
                }
            }

            // backwards-compat stuff - to be removed in future
            if (!ranges[key]) {
                axis = coord == "x" ? xaxes[0] : yaxes[0];
                from = ranges[coord + "1"];
                to = ranges[coord + "2"];
            }

            // auto-reverse as an added bonus
            if (from != null && to != null && from > to) {
                var tmp = from;
                from = to;
                to = tmp;
            }

            return { from: from, to: to, axis: axis };
        }

        function drawBackground() {
            ctx.save();
            ctx.translate(plotOffset.left, plotOffset.top);

            ctx.fillStyle = getColorOrGradient(options.grid.backgroundColor, plotHeight, 0, "rgba(255, 255, 255, 0)");
            ctx.fillRect(0, 0, plotWidth, plotHeight);
            ctx.restore();
        }

        function drawGrid() {
            var i, axes, bw, bc;

            ctx.save();
            ctx.translate(plotOffset.left, plotOffset.top);

            // draw markings
            var markings = options.grid.markings;
            if (markings) {
                if ($.isFunction(markings)) {
                    axes = plot.getAxes();
                    // xmin etc. is backwards compatibility, to be
                    // removed in the future
                    axes.xmin = axes.xaxis.min;
                    axes.xmax = axes.xaxis.max;
                    axes.ymin = axes.yaxis.min;
                    axes.ymax = axes.yaxis.max;

                    markings = markings(axes);
                }

                for (i = 0; i < markings.length; ++i) {
                    var m = markings[i],
                        xrange = extractRange(m, "x"),
                        yrange = extractRange(m, "y");

                    // fill in missing
                    if (xrange.from == null)
                        xrange.from = xrange.axis.min;
                    if (xrange.to == null)
                        xrange.to = xrange.axis.max;
                    if (yrange.from == null)
                        yrange.from = yrange.axis.min;
                    if (yrange.to == null)
                        yrange.to = yrange.axis.max;

                    // clip
                    if (xrange.to < xrange.axis.min || xrange.from > xrange.axis.max ||
                        yrange.to < yrange.axis.min || yrange.from > yrange.axis.max)
                        continue;

                    xrange.from = Math.max(xrange.from, xrange.axis.min);
                    xrange.to = Math.min(xrange.to, xrange.axis.max);
                    yrange.from = Math.max(yrange.from, yrange.axis.min);
                    yrange.to = Math.min(yrange.to, yrange.axis.max);

                    var xequal = xrange.from === xrange.to,
                        yequal = yrange.from === yrange.to;

                    if (xequal && yequal) {
                        continue;
                    }

                    // then draw
                    xrange.from = Math.floor(xrange.axis.p2c(xrange.from));
                    xrange.to = Math.floor(xrange.axis.p2c(xrange.to));
                    yrange.from = Math.floor(yrange.axis.p2c(yrange.from));
                    yrange.to = Math.floor(yrange.axis.p2c(yrange.to));

                    if (xequal || yequal) {
                        var lineWidth = m.lineWidth || options.grid.markingsLineWidth,
                            subPixel = lineWidth % 2 ? 0.5 : 0;
                        ctx.beginPath();
                        ctx.strokeStyle = m.color || options.grid.markingsColor;
                        ctx.lineWidth = lineWidth;
                        if (xequal) {
                            ctx.moveTo(xrange.to + subPixel, yrange.from);
                            ctx.lineTo(xrange.to + subPixel, yrange.to);
                        } else {
                            ctx.moveTo(xrange.from, yrange.to + subPixel);
                            ctx.lineTo(xrange.to, yrange.to + subPixel);                            
                        }
                        ctx.stroke();
                    } else {
                        ctx.fillStyle = m.color || options.grid.markingsColor;
                        ctx.fillRect(xrange.from, yrange.to,
                                     xrange.to - xrange.from,
                                     yrange.from - yrange.to);
                    }
                }
            }

            // draw the ticks
            axes = allAxes();
            bw = options.grid.borderWidth;

            for (var j = 0; j < axes.length; ++j) {
                var axis = axes[j], box = axis.box,
                    t = axis.tickLength, x, y, xoff, yoff;
                if (!axis.show || axis.ticks.length == 0)
                    continue;

                ctx.lineWidth = 1;

                // find the edges
                if (axis.direction == "x") {
                    x = 0;
                    if (t == "full")
                        y = (axis.position == "top" ? 0 : plotHeight);
                    else
                        y = box.top - plotOffset.top + (axis.position == "top" ? box.height : 0);
                }
                else {
                    y = 0;
                    if (t == "full")
                        x = (axis.position == "left" ? 0 : plotWidth);
                    else
                        x = box.left - plotOffset.left + (axis.position == "left" ? box.width : 0);
                }

                // draw tick bar
                if (!axis.innermost) {
                    ctx.strokeStyle = axis.options.color;
                    ctx.beginPath();
                    xoff = yoff = 0;
                    if (axis.direction == "x")
                        xoff = plotWidth + 1;
                    else
                        yoff = plotHeight + 1;

                    if (ctx.lineWidth == 1) {
                        if (axis.direction == "x") {
                            y = Math.floor(y) + 0.5;
                        } else {
                            x = Math.floor(x) + 0.5;
                        }
                    }

                    ctx.moveTo(x, y);
                    ctx.lineTo(x + xoff, y + yoff);
                    ctx.stroke();
                }

                // draw ticks

                ctx.strokeStyle = axis.options.tickColor;

                ctx.beginPath();
                for (i = 0; i < axis.ticks.length; ++i) {
                    var v = axis.ticks[i].v;

                    xoff = yoff = 0;

                    if (isNaN(v) || v < axis.min || v > axis.max
                        // skip those lying on the axes if we got a border
                        || (t == "full"
                            && ((typeof bw == "object" && bw[axis.position] > 0) || bw > 0)
                            && (v == axis.min || v == axis.max)))
                        continue;

                    if (axis.direction == "x") {
                        x = axis.p2c(v);
                        yoff = t == "full" ? -plotHeight : t;

                        if (axis.position == "top")
                            yoff = -yoff;
                    }
                    else {
                        y = axis.p2c(v);
                        xoff = t == "full" ? -plotWidth : t;

                        if (axis.position == "left")
                            xoff = -xoff;
                    }

                    if (ctx.lineWidth == 1) {
                        if (axis.direction == "x")
                            x = Math.floor(x) + 0.5;
                        else
                            y = Math.floor(y) + 0.5;
                    }

                    ctx.moveTo(x, y);
                    ctx.lineTo(x + xoff, y + yoff);
                }

                ctx.stroke();
            }


            // draw border
            if (bw) {
                // If either borderWidth or borderColor is an object, then draw the border
                // line by line instead of as one rectangle
                bc = options.grid.borderColor;
                if(typeof bw == "object" || typeof bc == "object") {
                    if (typeof bw !== "object") {
                        bw = {top: bw, right: bw, bottom: bw, left: bw};
                    }
                    if (typeof bc !== "object") {
                        bc = {top: bc, right: bc, bottom: bc, left: bc};
                    }

                    if (bw.top > 0) {
                        ctx.strokeStyle = bc.top;
                        ctx.lineWidth = bw.top;
                        ctx.beginPath();
                        ctx.moveTo(0 - bw.left, 0 - bw.top/2);
                        ctx.lineTo(plotWidth, 0 - bw.top/2);
                        ctx.stroke();
                    }

                    if (bw.right > 0) {
                        ctx.strokeStyle = bc.right;
                        ctx.lineWidth = bw.right;
                        ctx.beginPath();
                        ctx.moveTo(plotWidth + bw.right / 2, 0 - bw.top);
                        ctx.lineTo(plotWidth + bw.right / 2, plotHeight);
                        ctx.stroke();
                    }

                    if (bw.bottom > 0) {
                        ctx.strokeStyle = bc.bottom;
                        ctx.lineWidth = bw.bottom;
                        ctx.beginPath();
                        ctx.moveTo(plotWidth + bw.right, plotHeight + bw.bottom / 2);
                        ctx.lineTo(0, plotHeight + bw.bottom / 2);
                        ctx.stroke();
                    }

                    if (bw.left > 0) {
                        ctx.strokeStyle = bc.left;
                        ctx.lineWidth = bw.left;
                        ctx.beginPath();
                        ctx.moveTo(0 - bw.left/2, plotHeight + bw.bottom);
                        ctx.lineTo(0- bw.left/2, 0);
                        ctx.stroke();
                    }
                }
                else {
                    ctx.lineWidth = bw;
                    ctx.strokeStyle = options.grid.borderColor;
                    ctx.strokeRect(-bw/2, -bw/2, plotWidth + bw, plotHeight + bw);
                }
            }

            ctx.restore();
        }

        function drawAxisLabels() {

            $.each(allAxes(), function (_, axis) {
                var box = axis.box,
                    legacyStyles = axis.direction + "Axis " + axis.direction + axis.n + "Axis",
                    layer = "flot-" + axis.direction + "-axis flot-" + axis.direction + axis.n + "-axis " + legacyStyles,
                    font = axis.options.font || "flot-tick-label tickLabel",
                    tick, x, y, halign, valign;

                // Remove text before checking for axis.show and ticks.length;
                // otherwise plugins, like flot-tickrotor, that draw their own
                // tick labels will end up with both theirs and the defaults.

                surface.removeText(layer);

                if (!axis.show || axis.ticks.length == 0)
                    return;

                for (var i = 0; i < axis.ticks.length; ++i) {

                    tick = axis.ticks[i];
                    if (!tick.label || tick.v < axis.min || tick.v > axis.max)
                        continue;

                    if (axis.direction == "x") {
                        halign = "center";
                        x = plotOffset.left + axis.p2c(tick.v);
                        if (axis.position == "bottom") {
                            y = box.top + box.padding;
                        } else {
                            y = box.top + box.height - box.padding;
                            valign = "bottom";
                        }
                    } else {
                        valign = "middle";
                        y = plotOffset.top + axis.p2c(tick.v);
                        if (axis.position == "left") {
                            x = box.left + box.width - box.padding;
                            halign = "right";
                        } else {
                            x = box.left + box.padding;
                        }
                    }

                    surface.addText(layer, x, y, tick.label, font, null, null, halign, valign);
                }
            });
        }

        function drawSeries(series) {
            if (series.lines.show)
                drawSeriesLines(series);
            if (series.bars.show)
                drawSeriesBars(series);
            if (series.points.show)
                drawSeriesPoints(series);
        }

        function drawSeriesLines(series) {
            function plotLine(datapoints, xoffset, yoffset, axisx, axisy) {
                var points = datapoints.points,
                    ps = datapoints.pointsize,
                    prevx = null, prevy = null;

                ctx.beginPath();
                for (var i = ps; i < points.length; i += ps) {
                    var x1 = points[i - ps], y1 = points[i - ps + 1],
                        x2 = points[i], y2 = points[i + 1];

                    if (x1 == null || x2 == null)
                        continue;

                    // clip with ymin
                    if (y1 <= y2 && y1 < axisy.min) {
                        if (y2 < axisy.min)
                            continue;   // line segment is outside
                        // compute new intersection point
                        x1 = (axisy.min - y1) / (y2 - y1) * (x2 - x1) + x1;
                        y1 = axisy.min;
                    }
                    else if (y2 <= y1 && y2 < axisy.min) {
                        if (y1 < axisy.min)
                            continue;
                        x2 = (axisy.min - y1) / (y2 - y1) * (x2 - x1) + x1;
                        y2 = axisy.min;
                    }

                    // clip with ymax
                    if (y1 >= y2 && y1 > axisy.max) {
                        if (y2 > axisy.max)
                            continue;
                        x1 = (axisy.max - y1) / (y2 - y1) * (x2 - x1) + x1;
                        y1 = axisy.max;
                    }
                    else if (y2 >= y1 && y2 > axisy.max) {
                        if (y1 > axisy.max)
                            continue;
                        x2 = (axisy.max - y1) / (y2 - y1) * (x2 - x1) + x1;
                        y2 = axisy.max;
                    }

                    // clip with xmin
                    if (x1 <= x2 && x1 < axisx.min) {
                        if (x2 < axisx.min)
                            continue;
                        y1 = (axisx.min - x1) / (x2 - x1) * (y2 - y1) + y1;
                        x1 = axisx.min;
                    }
                    else if (x2 <= x1 && x2 < axisx.min) {
                        if (x1 < axisx.min)
                            continue;
                        y2 = (axisx.min - x1) / (x2 - x1) * (y2 - y1) + y1;
                        x2 = axisx.min;
                    }

                    // clip with xmax
                    if (x1 >= x2 && x1 > axisx.max) {
                        if (x2 > axisx.max)
                            continue;
                        y1 = (axisx.max - x1) / (x2 - x1) * (y2 - y1) + y1;
                        x1 = axisx.max;
                    }
                    else if (x2 >= x1 && x2 > axisx.max) {
                        if (x1 > axisx.max)
                            continue;
                        y2 = (axisx.max - x1) / (x2 - x1) * (y2 - y1) + y1;
                        x2 = axisx.max;
                    }

                    if (x1 != prevx || y1 != prevy)
                        ctx.moveTo(axisx.p2c(x1) + xoffset, axisy.p2c(y1) + yoffset);

                    prevx = x2;
                    prevy = y2;
                    ctx.lineTo(axisx.p2c(x2) + xoffset, axisy.p2c(y2) + yoffset);
                }
                ctx.stroke();
            }

            function plotLineArea(datapoints, axisx, axisy) {
                var points = datapoints.points,
                    ps = datapoints.pointsize,
                    bottom = Math.min(Math.max(0, axisy.min), axisy.max),
                    i = 0, top, areaOpen = false,
                    ypos = 1, segmentStart = 0, segmentEnd = 0;

                // we process each segment in two turns, first forward
                // direction to sketch out top, then once we hit the
                // end we go backwards to sketch the bottom
                while (true) {
                    if (ps > 0 && i > points.length + ps)
                        break;

                    i += ps; // ps is negative if going backwards

                    var x1 = points[i - ps],
                        y1 = points[i - ps + ypos],
                        x2 = points[i], y2 = points[i + ypos];

                    if (areaOpen) {
                        if (ps > 0 && x1 != null && x2 == null) {
                            // at turning point
                            segmentEnd = i;
                            ps = -ps;
                            ypos = 2;
                            continue;
                        }

                        if (ps < 0 && i == segmentStart + ps) {
                            // done with the reverse sweep
                            ctx.fill();
                            areaOpen = false;
                            ps = -ps;
                            ypos = 1;
                            i = segmentStart = segmentEnd + ps;
                            continue;
                        }
                    }

                    if (x1 == null || x2 == null)
                        continue;

                    // clip x values

                    // clip with xmin
                    if (x1 <= x2 && x1 < axisx.min) {
                        if (x2 < axisx.min)
                            continue;
                        y1 = (axisx.min - x1) / (x2 - x1) * (y2 - y1) + y1;
                        x1 = axisx.min;
                    }
                    else if (x2 <= x1 && x2 < axisx.min) {
                        if (x1 < axisx.min)
                            continue;
                        y2 = (axisx.min - x1) / (x2 - x1) * (y2 - y1) + y1;
                        x2 = axisx.min;
                    }

                    // clip with xmax
                    if (x1 >= x2 && x1 > axisx.max) {
                        if (x2 > axisx.max)
                            continue;
                        y1 = (axisx.max - x1) / (x2 - x1) * (y2 - y1) + y1;
                        x1 = axisx.max;
                    }
                    else if (x2 >= x1 && x2 > axisx.max) {
                        if (x1 > axisx.max)
                            continue;
                        y2 = (axisx.max - x1) / (x2 - x1) * (y2 - y1) + y1;
                        x2 = axisx.max;
                    }

                    if (!areaOpen) {
                        // open area
                        ctx.beginPath();
                        ctx.moveTo(axisx.p2c(x1), axisy.p2c(bottom));
                        areaOpen = true;
                    }

                    // now first check the case where both is outside
                    if (y1 >= axisy.max && y2 >= axisy.max) {
                        ctx.lineTo(axisx.p2c(x1), axisy.p2c(axisy.max));
                        ctx.lineTo(axisx.p2c(x2), axisy.p2c(axisy.max));
                        continue;
                    }
                    else if (y1 <= axisy.min && y2 <= axisy.min) {
                        ctx.lineTo(axisx.p2c(x1), axisy.p2c(axisy.min));
                        ctx.lineTo(axisx.p2c(x2), axisy.p2c(axisy.min));
                        continue;
                    }

                    // else it's a bit more complicated, there might
                    // be a flat maxed out rectangle first, then a
                    // triangular cutout or reverse; to find these
                    // keep track of the current x values
                    var x1old = x1, x2old = x2;

                    // clip the y values, without shortcutting, we
                    // go through all cases in turn

                    // clip with ymin
                    if (y1 <= y2 && y1 < axisy.min && y2 >= axisy.min) {
                        x1 = (axisy.min - y1) / (y2 - y1) * (x2 - x1) + x1;
                        y1 = axisy.min;
                    }
                    else if (y2 <= y1 && y2 < axisy.min && y1 >= axisy.min) {
                        x2 = (axisy.min - y1) / (y2 - y1) * (x2 - x1) + x1;
                        y2 = axisy.min;
                    }

                    // clip with ymax
                    if (y1 >= y2 && y1 > axisy.max && y2 <= axisy.max) {
                        x1 = (axisy.max - y1) / (y2 - y1) * (x2 - x1) + x1;
                        y1 = axisy.max;
                    }
                    else if (y2 >= y1 && y2 > axisy.max && y1 <= axisy.max) {
                        x2 = (axisy.max - y1) / (y2 - y1) * (x2 - x1) + x1;
                        y2 = axisy.max;
                    }

                    // if the x value was changed we got a rectangle
                    // to fill
                    if (x1 != x1old) {
                        ctx.lineTo(axisx.p2c(x1old), axisy.p2c(y1));
                        // it goes to (x1, y1), but we fill that below
                    }

                    // fill triangular section, this sometimes result
                    // in redundant points if (x1, y1) hasn't changed
                    // from previous line to, but we just ignore that
                    ctx.lineTo(axisx.p2c(x1), axisy.p2c(y1));
                    ctx.lineTo(axisx.p2c(x2), axisy.p2c(y2));

                    // fill the other rectangle if it's there
                    if (x2 != x2old) {
                        ctx.lineTo(axisx.p2c(x2), axisy.p2c(y2));
                        ctx.lineTo(axisx.p2c(x2old), axisy.p2c(y2));
                    }
                }
            }

            ctx.save();
            ctx.translate(plotOffset.left, plotOffset.top);
            ctx.lineJoin = "round";

            var lw = series.lines.lineWidth,
                sw = series.shadowSize;
            // FIXME: consider another form of shadow when filling is turned on
            if (lw > 0 && sw > 0) {
                // draw shadow as a thick and thin line with transparency
                ctx.lineWidth = sw;
                ctx.strokeStyle = "rgba(0,0,0,0.1)";
                // position shadow at angle from the mid of line
                var angle = Math.PI/18;
                plotLine(series.datapoints, Math.sin(angle) * (lw/2 + sw/2), Math.cos(angle) * (lw/2 + sw/2), series.xaxis, series.yaxis);
                ctx.lineWidth = sw/2;
                plotLine(series.datapoints, Math.sin(angle) * (lw/2 + sw/4), Math.cos(angle) * (lw/2 + sw/4), series.xaxis, series.yaxis);
            }

            ctx.lineWidth = lw;
            ctx.strokeStyle = series.color;
            var fillStyle = getFillStyle(series.lines, series.color, 0, plotHeight);
            if (fillStyle) {
                ctx.fillStyle = fillStyle;
                plotLineArea(series.datapoints, series.xaxis, series.yaxis);
            }

            if (lw > 0)
                plotLine(series.datapoints, 0, 0, series.xaxis, series.yaxis);
            ctx.restore();
        }

        function drawSeriesPoints(series) {
            function plotPoints(datapoints, radius, fillStyle, offset, shadow, axisx, axisy, symbol) {
                var points = datapoints.points, ps = datapoints.pointsize;

                for (var i = 0; i < points.length; i += ps) {
                    var x = points[i], y = points[i + 1];
                    if (x == null || x < axisx.min || x > axisx.max || y < axisy.min || y > axisy.max)
                        continue;

                    ctx.beginPath();
                    x = axisx.p2c(x);
                    y = axisy.p2c(y) + offset;
                    if (symbol == "circle")
                        ctx.arc(x, y, radius, 0, shadow ? Math.PI : Math.PI * 2, false);
                    else
                        symbol(ctx, x, y, radius, shadow);
                    ctx.closePath();

                    if (fillStyle) {
                        ctx.fillStyle = fillStyle;
                        ctx.fill();
                    }
                    ctx.stroke();
                }
            }

            ctx.save();
            ctx.translate(plotOffset.left, plotOffset.top);

            var lw = series.points.lineWidth,
                sw = series.shadowSize,
                radius = series.points.radius,
                symbol = series.points.symbol;

            // If the user sets the line width to 0, we change it to a very 
            // small value. A line width of 0 seems to force the default of 1.
            // Doing the conditional here allows the shadow setting to still be 
            // optional even with a lineWidth of 0.

            if( lw == 0 )
                lw = 0.0001;

            if (lw > 0 && sw > 0) {
                // draw shadow in two steps
                var w = sw / 2;
                ctx.lineWidth = w;
                ctx.strokeStyle = "rgba(0,0,0,0.1)";
                plotPoints(series.datapoints, radius, null, w + w/2, true,
                           series.xaxis, series.yaxis, symbol);

                ctx.strokeStyle = "rgba(0,0,0,0.2)";
                plotPoints(series.datapoints, radius, null, w/2, true,
                           series.xaxis, series.yaxis, symbol);
            }

            ctx.lineWidth = lw;
            ctx.strokeStyle = series.color;
            plotPoints(series.datapoints, radius,
                       getFillStyle(series.points, series.color), 0, false,
                       series.xaxis, series.yaxis, symbol);
            ctx.restore();
        }

        function drawBar(x, y, b, barLeft, barRight, fillStyleCallback, axisx, axisy, c, horizontal, lineWidth) {
            var left, right, bottom, top,
                drawLeft, drawRight, drawTop, drawBottom,
                tmp;

            // in horizontal mode, we start the bar from the left
            // instead of from the bottom so it appears to be
            // horizontal rather than vertical
            if (horizontal) {
                drawBottom = drawRight = drawTop = true;
                drawLeft = false;
                left = b;
                right = x;
                top = y + barLeft;
                bottom = y + barRight;

                // account for negative bars
                if (right < left) {
                    tmp = right;
                    right = left;
                    left = tmp;
                    drawLeft = true;
                    drawRight = false;
                }
            }
            else {
                drawLeft = drawRight = drawTop = true;
                drawBottom = false;
                left = x + barLeft;
                right = x + barRight;
                bottom = b;
                top = y;

                // account for negative bars
                if (top < bottom) {
                    tmp = top;
                    top = bottom;
                    bottom = tmp;
                    drawBottom = true;
                    drawTop = false;
                }
            }

            // clip
            if (right < axisx.min || left > axisx.max ||
                top < axisy.min || bottom > axisy.max)
                return;

            if (left < axisx.min) {
                left = axisx.min;
                drawLeft = false;
            }

            if (right > axisx.max) {
                right = axisx.max;
                drawRight = false;
            }

            if (bottom < axisy.min) {
                bottom = axisy.min;
                drawBottom = false;
            }

            if (top > axisy.max) {
                top = axisy.max;
                drawTop = false;
            }

            left = axisx.p2c(left);
            bottom = axisy.p2c(bottom);
            right = axisx.p2c(right);
            top = axisy.p2c(top);

            // fill the bar
            if (fillStyleCallback) {
                c.fillStyle = fillStyleCallback(bottom, top);
                c.fillRect(left, top, right - left, bottom - top)
            }

            // draw outline
            if (lineWidth > 0 && (drawLeft || drawRight || drawTop || drawBottom)) {
                c.beginPath();

                // FIXME: inline moveTo is buggy with excanvas
                c.moveTo(left, bottom);
                if (drawLeft)
                    c.lineTo(left, top);
                else
                    c.moveTo(left, top);
                if (drawTop)
                    c.lineTo(right, top);
                else
                    c.moveTo(right, top);
                if (drawRight)
                    c.lineTo(right, bottom);
                else
                    c.moveTo(right, bottom);
                if (drawBottom)
                    c.lineTo(left, bottom);
                else
                    c.moveTo(left, bottom);
                c.stroke();
            }
        }

        function drawSeriesBars(series) {
            function plotBars(datapoints, barLeft, barRight, fillStyleCallback, axisx, axisy) {
                var points = datapoints.points, ps = datapoints.pointsize;

                for (var i = 0; i < points.length; i += ps) {
                    if (points[i] == null)
                        continue;
                    drawBar(points[i], points[i + 1], points[i + 2], barLeft, barRight, fillStyleCallback, axisx, axisy, ctx, series.bars.horizontal, series.bars.lineWidth);
                }
            }

            ctx.save();
            ctx.translate(plotOffset.left, plotOffset.top);

            // FIXME: figure out a way to add shadows (for instance along the right edge)
            ctx.lineWidth = series.bars.lineWidth;
            ctx.strokeStyle = series.color;

            var barLeft;

            switch (series.bars.align) {
                case "left":
                    barLeft = 0;
                    break;
                case "right":
                    barLeft = -series.bars.barWidth;
                    break;
                default:
                    barLeft = -series.bars.barWidth / 2;
            }

            var fillStyleCallback = series.bars.fill ? function (bottom, top) { return getFillStyle(series.bars, series.color, bottom, top); } : null;
            plotBars(series.datapoints, barLeft, barLeft + series.bars.barWidth, fillStyleCallback, series.xaxis, series.yaxis);
            ctx.restore();
        }

        function getFillStyle(filloptions, seriesColor, bottom, top) {
            var fill = filloptions.fill;
            if (!fill)
                return null;

            if (filloptions.fillColor)
                return getColorOrGradient(filloptions.fillColor, bottom, top, seriesColor);

            var c = $.color.parse(seriesColor);
            c.a = typeof fill == "number" ? fill : 0.4;
            c.normalize();
            return c.toString();
        }

        function insertLegend() {

            if (options.legend.container != null) {
                $(options.legend.container).html("");
            } else {
                placeholder.find(".legend").remove();
            }

            if (!options.legend.show) {
                return;
            }

            var fragments = [], entries = [], rowStarted = false,
                lf = options.legend.labelFormatter, s, label;

            // Build a list of legend entries, with each having a label and a color

            for (var i = 0; i < series.length; ++i) {
                s = series[i];
                if (s.label) {
                    label = lf ? lf(s.label, s) : s.label;
                    if (label) {
                        entries.push({
                            label: label,
                            color: s.color
                        });
                    }
                }
            }

            // Sort the legend using either the default or a custom comparator

            if (options.legend.sorted) {
                if ($.isFunction(options.legend.sorted)) {
                    entries.sort(options.legend.sorted);
                } else if (options.legend.sorted == "reverse") {
                	entries.reverse();
                } else {
                    var ascending = options.legend.sorted != "descending";
                    entries.sort(function(a, b) {
                        return a.label == b.label ? 0 : (
                            (a.label < b.label) != ascending ? 1 : -1   // Logical XOR
                        );
                    });
                }
            }

            // Generate markup for the list of entries, in their final order

            for (var i = 0; i < entries.length; ++i) {

                var entry = entries[i];

                if (i % options.legend.noColumns == 0) {
                    if (rowStarted)
                        fragments.push('</tr>');
                    fragments.push('<tr>');
                    rowStarted = true;
                }

                fragments.push(
                    '<td class="legendColorBox"><div style="border:1px solid ' + options.legend.labelBoxBorderColor + ';padding:1px"><div style="width:4px;height:0;border:5px solid ' + entry.color + ';overflow:hidden"></div></div></td>' +
                    '<td class="legendLabel">' + entry.label + '</td>'
                );
            }

            if (rowStarted)
                fragments.push('</tr>');

            if (fragments.length == 0)
                return;

            var table = '<table style="font-size:smaller;color:' + options.grid.color + '">' + fragments.join("") + '</table>';
            if (options.legend.container != null)
                $(options.legend.container).html(table);
            else {
                var pos = "",
                    p = options.legend.position,
                    m = options.legend.margin;
                if (m[0] == null)
                    m = [m, m];
                if (p.charAt(0) == "n")
                    pos += 'top:' + (m[1] + plotOffset.top) + 'px;';
                else if (p.charAt(0) == "s")
                    pos += 'bottom:' + (m[1] + plotOffset.bottom) + 'px;';
                if (p.charAt(1) == "e")
                    pos += 'right:' + (m[0] + plotOffset.right) + 'px;';
                else if (p.charAt(1) == "w")
                    pos += 'left:' + (m[0] + plotOffset.left) + 'px;';
                var legend = $('<div class="legend">' + table.replace('style="', 'style="position:absolute;' + pos +';') + '</div>').appendTo(placeholder);
                if (options.legend.backgroundOpacity != 0.0) {
                    // put in the transparent background
                    // separately to avoid blended labels and
                    // label boxes
                    var c = options.legend.backgroundColor;
                    if (c == null) {
                        c = options.grid.backgroundColor;
                        if (c && typeof c == "string")
                            c = $.color.parse(c);
                        else
                            c = $.color.extract(legend, 'background-color');
                        c.a = 1;
                        c = c.toString();
                    }
                    var div = legend.children();
                    $('<div style="position:absolute;width:' + div.width() + 'px;height:' + div.height() + 'px;' + pos +'background-color:' + c + ';"> </div>').prependTo(legend).css('opacity', options.legend.backgroundOpacity);
                }
            }
        }


        // interactive features

        var highlights = [],
            redrawTimeout = null;

        // returns the data item the mouse is over, or null if none is found
        function findNearbyItem(mouseX, mouseY, seriesFilter) {
            var maxDistance = options.grid.mouseActiveRadius,
                smallestDistance = maxDistance * maxDistance + 1,
                item = null, foundPoint = false, i, j, ps;

            for (i = series.length - 1; i >= 0; --i) {
                if (!seriesFilter(series[i]))
                    continue;

                var s = series[i],
                    axisx = s.xaxis,
                    axisy = s.yaxis,
                    points = s.datapoints.points,
                    mx = axisx.c2p(mouseX), // precompute some stuff to make the loop faster
                    my = axisy.c2p(mouseY),
                    maxx = maxDistance / axisx.scale,
                    maxy = maxDistance / axisy.scale;

                ps = s.datapoints.pointsize;
                // with inverse transforms, we can't use the maxx/maxy
                // optimization, sadly
                if (axisx.options.inverseTransform)
                    maxx = Number.MAX_VALUE;
                if (axisy.options.inverseTransform)
                    maxy = Number.MAX_VALUE;

                if (s.lines.show || s.points.show) {
                    for (j = 0; j < points.length; j += ps) {
                        var x = points[j], y = points[j + 1];
                        if (x == null)
                            continue;

                        // For points and lines, the cursor must be within a
                        // certain distance to the data point
                        if (x - mx > maxx || x - mx < -maxx ||
                            y - my > maxy || y - my < -maxy)
                            continue;

                        // We have to calculate distances in pixels, not in
                        // data units, because the scales of the axes may be different
                        var dx = Math.abs(axisx.p2c(x) - mouseX),
                            dy = Math.abs(axisy.p2c(y) - mouseY),
                            dist = dx * dx + dy * dy; // we save the sqrt

                        // use <= to ensure last point takes precedence
                        // (last generally means on top of)
                        if (dist < smallestDistance) {
                            smallestDistance = dist;
                            item = [i, j / ps];
                        }
                    }
                }

                if (s.bars.show && !item) { // no other point can be nearby

                    var barLeft, barRight;

                    switch (s.bars.align) {
                        case "left":
                            barLeft = 0;
                            break;
                        case "right":
                            barLeft = -s.bars.barWidth;
                            break;
                        default:
                            barLeft = -s.bars.barWidth / 2;
                    }

                    barRight = barLeft + s.bars.barWidth;

                    for (j = 0; j < points.length; j += ps) {
                        var x = points[j], y = points[j + 1], b = points[j + 2];
                        if (x == null)
                            continue;

                        // for a bar graph, the cursor must be inside the bar
                        if (series[i].bars.horizontal ?
                            (mx <= Math.max(b, x) && mx >= Math.min(b, x) &&
                             my >= y + barLeft && my <= y + barRight) :
                            (mx >= x + barLeft && mx <= x + barRight &&
                             my >= Math.min(b, y) && my <= Math.max(b, y)))
                                item = [i, j / ps];
                    }
                }
            }

            if (item) {
                i = item[0];
                j = item[1];
                ps = series[i].datapoints.pointsize;

                return { datapoint: series[i].datapoints.points.slice(j * ps, (j + 1) * ps),
                         dataIndex: j,
                         series: series[i],
                         seriesIndex: i };
            }

            return null;
        }

        function onMouseMove(e) {
            if (options.grid.hoverable)
                triggerClickHoverEvent("plothover", e,
                                       function (s) { return s["hoverable"] != false; });
        }

        function onMouseLeave(e) {
            if (options.grid.hoverable)
                triggerClickHoverEvent("plothover", e,
                                       function (s) { return false; });
        }

        function onClick(e) {
            triggerClickHoverEvent("plotclick", e,
                                   function (s) { return s["clickable"] != false; });
        }

        // trigger click or hover event (they send the same parameters
        // so we share their code)
        function triggerClickHoverEvent(eventname, event, seriesFilter) {
            var offset = eventHolder.offset(),
                canvasX = event.pageX - offset.left - plotOffset.left,
                canvasY = event.pageY - offset.top - plotOffset.top,
            pos = canvasToAxisCoords({ left: canvasX, top: canvasY });

            pos.pageX = event.pageX;
            pos.pageY = event.pageY;

            var item = findNearbyItem(canvasX, canvasY, seriesFilter);

            if (item) {
                // fill in mouse pos for any listeners out there
                item.pageX = parseInt(item.series.xaxis.p2c(item.datapoint[0]) + offset.left + plotOffset.left, 10);
                item.pageY = parseInt(item.series.yaxis.p2c(item.datapoint[1]) + offset.top + plotOffset.top, 10);
            }

            if (options.grid.autoHighlight) {
                // clear auto-highlights
                for (var i = 0; i < highlights.length; ++i) {
                    var h = highlights[i];
                    if (h.auto == eventname &&
                        !(item && h.series == item.series &&
                          h.point[0] == item.datapoint[0] &&
                          h.point[1] == item.datapoint[1]))
                        unhighlight(h.series, h.point);
                }

                if (item)
                    highlight(item.series, item.datapoint, eventname);
            }

            placeholder.trigger(eventname, [ pos, item ]);
        }

        function triggerRedrawOverlay() {
            var t = options.interaction.redrawOverlayInterval;
            if (t == -1) {      // skip event queue
                drawOverlay();
                return;
            }

            if (!redrawTimeout)
                redrawTimeout = setTimeout(drawOverlay, t);
        }

        function drawOverlay() {
            redrawTimeout = null;

            // draw highlights
            octx.save();
            overlay.clear();
            octx.translate(plotOffset.left, plotOffset.top);

            var i, hi;
            for (i = 0; i < highlights.length; ++i) {
                hi = highlights[i];

                if (hi.series.bars.show)
                    drawBarHighlight(hi.series, hi.point);
                else
                    drawPointHighlight(hi.series, hi.point);
            }
            octx.restore();

            executeHooks(hooks.drawOverlay, [octx]);
        }

        function highlight(s, point, auto) {
            if (typeof s == "number")
                s = series[s];

            if (typeof point == "number") {
                var ps = s.datapoints.pointsize;
                point = s.datapoints.points.slice(ps * point, ps * (point + 1));
            }

            var i = indexOfHighlight(s, point);
            if (i == -1) {
                highlights.push({ series: s, point: point, auto: auto });

                triggerRedrawOverlay();
            }
            else if (!auto)
                highlights[i].auto = false;
        }

        function unhighlight(s, point) {
            if (s == null && point == null) {
                highlights = [];
                triggerRedrawOverlay();
                return;
            }

            if (typeof s == "number")
                s = series[s];

            if (typeof point == "number") {
                var ps = s.datapoints.pointsize;
                point = s.datapoints.points.slice(ps * point, ps * (point + 1));
            }

            var i = indexOfHighlight(s, point);
            if (i != -1) {
                highlights.splice(i, 1);

                triggerRedrawOverlay();
            }
        }

        function indexOfHighlight(s, p) {
            for (var i = 0; i < highlights.length; ++i) {
                var h = highlights[i];
                if (h.series == s && h.point[0] == p[0]
                    && h.point[1] == p[1])
                    return i;
            }
            return -1;
        }

        function drawPointHighlight(series, point) {
            var x = point[0], y = point[1],
                axisx = series.xaxis, axisy = series.yaxis,
                highlightColor = (typeof series.highlightColor === "string") ? series.highlightColor : $.color.parse(series.color).scale('a', 0.5).toString();

            if (x < axisx.min || x > axisx.max || y < axisy.min || y > axisy.max)
                return;

            var pointRadius = series.points.radius + series.points.lineWidth / 2;
            octx.lineWidth = pointRadius;
            octx.strokeStyle = highlightColor;
            var radius = 1.5 * pointRadius;
            x = axisx.p2c(x);
            y = axisy.p2c(y);

            octx.beginPath();
            if (series.points.symbol == "circle")
                octx.arc(x, y, radius, 0, 2 * Math.PI, false);
            else
                series.points.symbol(octx, x, y, radius, false);
            octx.closePath();
            octx.stroke();
        }

        function drawBarHighlight(series, point) {
            var highlightColor = (typeof series.highlightColor === "string") ? series.highlightColor : $.color.parse(series.color).scale('a', 0.5).toString(),
                fillStyle = highlightColor,
                barLeft;

            switch (series.bars.align) {
                case "left":
                    barLeft = 0;
                    break;
                case "right":
                    barLeft = -series.bars.barWidth;
                    break;
                default:
                    barLeft = -series.bars.barWidth / 2;
            }

            octx.lineWidth = series.bars.lineWidth;
            octx.strokeStyle = highlightColor;

            drawBar(point[0], point[1], point[2] || 0, barLeft, barLeft + series.bars.barWidth,
                    function () { return fillStyle; }, series.xaxis, series.yaxis, octx, series.bars.horizontal, series.bars.lineWidth);
        }

        function getColorOrGradient(spec, bottom, top, defaultColor) {
            if (typeof spec == "string")
                return spec;
            else {
                // assume this is a gradient spec; IE currently only
                // supports a simple vertical gradient properly, so that's
                // what we support too
                var gradient = ctx.createLinearGradient(0, top, 0, bottom);

                for (var i = 0, l = spec.colors.length; i < l; ++i) {
                    var c = spec.colors[i];
                    if (typeof c != "string") {
                        var co = $.color.parse(defaultColor);
                        if (c.brightness != null)
                            co = co.scale('rgb', c.brightness);
                        if (c.opacity != null)
                            co.a *= c.opacity;
                        c = co.toString();
                    }
                    gradient.addColorStop(i / (l - 1), c);
                }

                return gradient;
            }
        }
    }

    // Add the plot function to the top level of the jQuery object

    $.plot = function(placeholder, data, options) {
        //var t0 = new Date();
        var plot = new Plot($(placeholder), data, options, $.plot.plugins);
        //(window.console ? console.log : alert)("time used (msecs): " + ((new Date()).getTime() - t0.getTime()));
        return plot;
    };

    $.plot.version = "0.8.3";

    $.plot.plugins = [];

    // Also add the plot function as a chainable property

    $.fn.plot = function(data, options) {
        return this.each(function() {
            $.plot(this, data, options);
        });
    };

    // round to nearby lower multiple of base
    function floorInBase(n, base) {
        return base * Math.floor(n / base);
    }

})(jQuery);


/***/ }),

/***/ 627:
/***/ (function(module, exports) {

/**
 * Flot plugin that provides spline interpolation for line graphs
 * author: Alex Bardas < alex.bardas@gmail.com >
 * modified by: Avi Kohn https://github.com/AMKohn
 * based on the spline interpolation described at:
 *		 http://scaledinnovation.com/analytics/splines/aboutSplines.html
 *
 * Example usage: (add in plot options series object)
 *		for linespline:
 *			series: {
 *				...
 *				lines: {
 *					show: false
 *				},
 *				splines: {
 *					show: true,
 *					tension: x, (float between 0 and 1, defaults to 0.5),
 *					lineWidth: y (number, defaults to 2),
 *					fill: z (float between 0 .. 1 or false, as in flot documentation)
 *				},
 *				...
 *			}
 *		areaspline:
 *			series: {
 *				...
 *				lines: {
 *					show: true,
 *					lineWidth: 0, (line drawing will not execute)
 *					fill: x, (float between 0 .. 1, as in flot documentation)
 *					...
 *				},
 *				splines: {
 *					show: true,
 *					tension: 0.5 (float between 0 and 1)
 *				},
 *				...
 *			}
 *
 */

(function($) {
    'use strict'

    /**
     * @param {Number} x0, y0, x1, y1: coordinates of the end (knot) points of the segment
     * @param {Number} x2, y2: the next knot (not connected, but needed to calculate p2)
     * @param {Number} tension: control how far the control points spread
     * @return {Array}: p1 -> control point, from x1 back toward x0
     * 					p2 -> the next control point, returned to become the next segment's p1
     *
     * @api private
     */
    function getControlPoints(x0, y0, x1, y1, x2, y2, tension) {

        var pow = Math.pow,
            sqrt = Math.sqrt,
            d01, d12, fa, fb, p1x, p1y, p2x, p2y;

        //  Scaling factors: distances from this knot to the previous and following knots.
        d01 = sqrt(pow(x1 - x0, 2) + pow(y1 - y0, 2));
        d12 = sqrt(pow(x2 - x1, 2) + pow(y2 - y1, 2));

        fa = tension * d01 / (d01 + d12);
        fb = tension - fa;

        p1x = x1 + fa * (x0 - x2);
        p1y = y1 + fa * (y0 - y2);

        p2x = x1 - fb * (x0 - x2);
        p2y = y1 - fb * (y0 - y2);

        return [p1x, p1y, p2x, p2y];
    }

    var line = [];

    function drawLine(points, ctx, height, fill, seriesColor) {
        var c = $.color.parse(seriesColor);

        c.a = typeof fill == "number" ? fill : .3;
        c.normalize();
        c = c.toString();

        ctx.beginPath();
        ctx.moveTo(points[0][0], points[0][1]);

        var plength = points.length;

        for (var i = 0; i < plength; i++) {
            ctx[points[i][3]].apply(ctx, points[i][2]);
        }

        ctx.stroke();

        ctx.lineWidth = 0;
        ctx.lineTo(points[plength - 1][0], height);
        ctx.lineTo(points[0][0], height);

        ctx.closePath();

        if (fill !== false) {
            ctx.fillStyle = c;
            ctx.fill();
        }
    }

    /**
     * @param {Object} ctx: canvas context
     * @param {String} type: accepted strings: 'bezier' or 'quadratic' (defaults to quadratic)
     * @param {Array} points: 2 points for which to draw the interpolation
     * @param {Array} cpoints: control points for those segment points
     *
     * @api private
     */
    function queue(ctx, type, points, cpoints) {
        if (type === void 0 || (type !== 'bezier' && type !== 'quadratic')) {
            type = 'quadratic';
        }
        type = type + 'CurveTo';

        if (line.length == 0) line.push([points[0], points[1], cpoints.concat(points.slice(2)), type]);
        else if (type == "quadraticCurveTo" && points.length == 2) {
            cpoints = cpoints.slice(0, 2).concat(points);

            line.push([points[0], points[1], cpoints, type]);
        }
        else line.push([points[2], points[3], cpoints.concat(points.slice(2)), type]);
    }

    /**
     * @param {Object} plot
     * @param {Object} ctx: canvas context
     * @param {Object} series
     *
     * @api private
     */

    function drawSpline(plot, ctx, series) {
        // Not interested if spline is not requested
        if (series.splines.show !== true) {
            return;
        }

        var cp = [],
        // array of control points
            tension = series.splines.tension || 0.5,
            idx, x, y, points = series.datapoints.points,
            ps = series.datapoints.pointsize,
            plotOffset = plot.getPlotOffset(),
            len = points.length,
            pts = [];

        line = [];

        // Cannot display a linespline/areaspline if there are less than 3 points
        if (len / ps < 4) {
            $.extend(series.lines, series.splines);
            return;
        }

        for (idx = 0; idx < len; idx += ps) {
            x = points[idx];
            y = points[idx + 1];
            if (x == null || x < series.xaxis.min || x > series.xaxis.max || y < series.yaxis.min || y > series.yaxis.max) {
                continue;
            }

            pts.push(series.xaxis.p2c(x) + plotOffset.left, series.yaxis.p2c(y) + plotOffset.top);
        }

        len = pts.length;

        // Draw an open curve, not connected at the ends
        for (idx = 0; idx < len - 2; idx += 2) {
            cp = cp.concat(getControlPoints.apply(this, pts.slice(idx, idx + 6).concat([tension])));
        }

        ctx.save();
        ctx.strokeStyle = series.color;
        ctx.lineWidth = series.splines.lineWidth;

        queue(ctx, 'quadratic', pts.slice(0, 4), cp.slice(0, 2));

        for (idx = 2; idx < len - 3; idx += 2) {
            queue(ctx, 'bezier', pts.slice(idx, idx + 4), cp.slice(2 * idx - 2, 2 * idx + 2));
        }

        queue(ctx, 'quadratic', pts.slice(len - 2, len), [cp[2 * len - 10], cp[2 * len - 9], pts[len - 4], pts[len - 3]]);

        drawLine(line, ctx, plot.height() + 10, series.splines.fill, series.color);

        ctx.restore();
    }

    $.plot.plugins.push({
        init: function(plot) {
            plot.hooks.drawSeries.push(drawSpline);
        },
        options: {
            series: {
                splines: {
                    show: false,
                    lineWidth: 2,
                    tension: 0.5,
                    fill: false
                }
            }
        },
        name: 'spline',
        version: '0.8.2'
    });
})(jQuery);


/***/ }),

/***/ 628:
/***/ (function(module, exports) {

/* Pretty handling of time axes.

Copyright (c) 2007-2014 IOLA and Ole Laursen.
Licensed under the MIT license.

Set axis.mode to "time" to enable. See the section "Time series data" in
API.txt for details.

*/

(function($) {

	var options = {
		xaxis: {
			timezone: null,		// "browser" for local to the client or timezone for timezone-js
			timeformat: null,	// format string to use
			twelveHourClock: false,	// 12 or 24 time in time mode
			monthNames: null	// list of names of months
		}
	};

	// round to nearby lower multiple of base

	function floorInBase(n, base) {
		return base * Math.floor(n / base);
	}

	// Returns a string with the date d formatted according to fmt.
	// A subset of the Open Group's strftime format is supported.

	function formatDate(d, fmt, monthNames, dayNames) {

		if (typeof d.strftime == "function") {
			return d.strftime(fmt);
		}

		var leftPad = function(n, pad) {
			n = "" + n;
			pad = "" + (pad == null ? "0" : pad);
			return n.length == 1 ? pad + n : n;
		};

		var r = [];
		var escape = false;
		var hours = d.getHours();
		var isAM = hours < 12;

		if (monthNames == null) {
			monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
		}

		if (dayNames == null) {
			dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
		}

		var hours12;

		if (hours > 12) {
			hours12 = hours - 12;
		} else if (hours == 0) {
			hours12 = 12;
		} else {
			hours12 = hours;
		}

		for (var i = 0; i < fmt.length; ++i) {

			var c = fmt.charAt(i);

			if (escape) {
				switch (c) {
					case 'a': c = "" + dayNames[d.getDay()]; break;
					case 'b': c = "" + monthNames[d.getMonth()]; break;
					case 'd': c = leftPad(d.getDate()); break;
					case 'e': c = leftPad(d.getDate(), " "); break;
					case 'h':	// For back-compat with 0.7; remove in 1.0
					case 'H': c = leftPad(hours); break;
					case 'I': c = leftPad(hours12); break;
					case 'l': c = leftPad(hours12, " "); break;
					case 'm': c = leftPad(d.getMonth() + 1); break;
					case 'M': c = leftPad(d.getMinutes()); break;
					// quarters not in Open Group's strftime specification
					case 'q':
						c = "" + (Math.floor(d.getMonth() / 3) + 1); break;
					case 'S': c = leftPad(d.getSeconds()); break;
					case 'y': c = leftPad(d.getFullYear() % 100); break;
					case 'Y': c = "" + d.getFullYear(); break;
					case 'p': c = (isAM) ? ("" + "am") : ("" + "pm"); break;
					case 'P': c = (isAM) ? ("" + "AM") : ("" + "PM"); break;
					case 'w': c = "" + d.getDay(); break;
				}
				r.push(c);
				escape = false;
			} else {
				if (c == "%") {
					escape = true;
				} else {
					r.push(c);
				}
			}
		}

		return r.join("");
	}

	// To have a consistent view of time-based data independent of which time
	// zone the client happens to be in we need a date-like object independent
	// of time zones.  This is done through a wrapper that only calls the UTC
	// versions of the accessor methods.

	function makeUtcWrapper(d) {

		function addProxyMethod(sourceObj, sourceMethod, targetObj, targetMethod) {
			sourceObj[sourceMethod] = function() {
				return targetObj[targetMethod].apply(targetObj, arguments);
			};
		};

		var utc = {
			date: d
		};

		// support strftime, if found

		if (d.strftime != undefined) {
			addProxyMethod(utc, "strftime", d, "strftime");
		}

		addProxyMethod(utc, "getTime", d, "getTime");
		addProxyMethod(utc, "setTime", d, "setTime");

		var props = ["Date", "Day", "FullYear", "Hours", "Milliseconds", "Minutes", "Month", "Seconds"];

		for (var p = 0; p < props.length; p++) {
			addProxyMethod(utc, "get" + props[p], d, "getUTC" + props[p]);
			addProxyMethod(utc, "set" + props[p], d, "setUTC" + props[p]);
		}

		return utc;
	};

	// select time zone strategy.  This returns a date-like object tied to the
	// desired timezone

	function dateGenerator(ts, opts) {
		if (opts.timezone == "browser") {
			return new Date(ts);
		} else if (!opts.timezone || opts.timezone == "utc") {
			return makeUtcWrapper(new Date(ts));
		} else if (typeof timezoneJS != "undefined" && typeof timezoneJS.Date != "undefined") {
			var d = new timezoneJS.Date();
			// timezone-js is fickle, so be sure to set the time zone before
			// setting the time.
			d.setTimezone(opts.timezone);
			d.setTime(ts);
			return d;
		} else {
			return makeUtcWrapper(new Date(ts));
		}
	}
	
	// map of app. size of time units in milliseconds

	var timeUnitSize = {
		"second": 1000,
		"minute": 60 * 1000,
		"hour": 60 * 60 * 1000,
		"day": 24 * 60 * 60 * 1000,
		"month": 30 * 24 * 60 * 60 * 1000,
		"quarter": 3 * 30 * 24 * 60 * 60 * 1000,
		"year": 365.2425 * 24 * 60 * 60 * 1000
	};

	// the allowed tick sizes, after 1 year we use
	// an integer algorithm

	var baseSpec = [
		[1, "second"], [2, "second"], [5, "second"], [10, "second"],
		[30, "second"], 
		[1, "minute"], [2, "minute"], [5, "minute"], [10, "minute"],
		[30, "minute"], 
		[1, "hour"], [2, "hour"], [4, "hour"],
		[8, "hour"], [12, "hour"],
		[1, "day"], [2, "day"], [3, "day"],
		[0.25, "month"], [0.5, "month"], [1, "month"],
		[2, "month"]
	];

	// we don't know which variant(s) we'll need yet, but generating both is
	// cheap

	var specMonths = baseSpec.concat([[3, "month"], [6, "month"],
		[1, "year"]]);
	var specQuarters = baseSpec.concat([[1, "quarter"], [2, "quarter"],
		[1, "year"]]);

	function init(plot) {
		plot.hooks.processOptions.push(function (plot, options) {
			$.each(plot.getAxes(), function(axisName, axis) {

				var opts = axis.options;

				if (opts.mode == "time") {
					axis.tickGenerator = function(axis) {

						var ticks = [];
						var d = dateGenerator(axis.min, opts);
						var minSize = 0;

						// make quarter use a possibility if quarters are
						// mentioned in either of these options

						var spec = (opts.tickSize && opts.tickSize[1] ===
							"quarter") ||
							(opts.minTickSize && opts.minTickSize[1] ===
							"quarter") ? specQuarters : specMonths;

						if (opts.minTickSize != null) {
							if (typeof opts.tickSize == "number") {
								minSize = opts.tickSize;
							} else {
								minSize = opts.minTickSize[0] * timeUnitSize[opts.minTickSize[1]];
							}
						}

						for (var i = 0; i < spec.length - 1; ++i) {
							if (axis.delta < (spec[i][0] * timeUnitSize[spec[i][1]]
											  + spec[i + 1][0] * timeUnitSize[spec[i + 1][1]]) / 2
								&& spec[i][0] * timeUnitSize[spec[i][1]] >= minSize) {
								break;
							}
						}

						var size = spec[i][0];
						var unit = spec[i][1];

						// special-case the possibility of several years

						if (unit == "year") {

							// if given a minTickSize in years, just use it,
							// ensuring that it's an integer

							if (opts.minTickSize != null && opts.minTickSize[1] == "year") {
								size = Math.floor(opts.minTickSize[0]);
							} else {

								var magn = Math.pow(10, Math.floor(Math.log(axis.delta / timeUnitSize.year) / Math.LN10));
								var norm = (axis.delta / timeUnitSize.year) / magn;

								if (norm < 1.5) {
									size = 1;
								} else if (norm < 3) {
									size = 2;
								} else if (norm < 7.5) {
									size = 5;
								} else {
									size = 10;
								}

								size *= magn;
							}

							// minimum size for years is 1

							if (size < 1) {
								size = 1;
							}
						}

						axis.tickSize = opts.tickSize || [size, unit];
						var tickSize = axis.tickSize[0];
						unit = axis.tickSize[1];

						var step = tickSize * timeUnitSize[unit];

						if (unit == "second") {
							d.setSeconds(floorInBase(d.getSeconds(), tickSize));
						} else if (unit == "minute") {
							d.setMinutes(floorInBase(d.getMinutes(), tickSize));
						} else if (unit == "hour") {
							d.setHours(floorInBase(d.getHours(), tickSize));
						} else if (unit == "month") {
							d.setMonth(floorInBase(d.getMonth(), tickSize));
						} else if (unit == "quarter") {
							d.setMonth(3 * floorInBase(d.getMonth() / 3,
								tickSize));
						} else if (unit == "year") {
							d.setFullYear(floorInBase(d.getFullYear(), tickSize));
						}

						// reset smaller components

						d.setMilliseconds(0);

						if (step >= timeUnitSize.minute) {
							d.setSeconds(0);
						}
						if (step >= timeUnitSize.hour) {
							d.setMinutes(0);
						}
						if (step >= timeUnitSize.day) {
							d.setHours(0);
						}
						if (step >= timeUnitSize.day * 4) {
							d.setDate(1);
						}
						if (step >= timeUnitSize.month * 2) {
							d.setMonth(floorInBase(d.getMonth(), 3));
						}
						if (step >= timeUnitSize.quarter * 2) {
							d.setMonth(floorInBase(d.getMonth(), 6));
						}
						if (step >= timeUnitSize.year) {
							d.setMonth(0);
						}

						var carry = 0;
						var v = Number.NaN;
						var prev;

						do {

							prev = v;
							v = d.getTime();
							ticks.push(v);

							if (unit == "month" || unit == "quarter") {
								if (tickSize < 1) {

									// a bit complicated - we'll divide the
									// month/quarter up but we need to take
									// care of fractions so we don't end up in
									// the middle of a day

									d.setDate(1);
									var start = d.getTime();
									d.setMonth(d.getMonth() +
										(unit == "quarter" ? 3 : 1));
									var end = d.getTime();
									d.setTime(v + carry * timeUnitSize.hour + (end - start) * tickSize);
									carry = d.getHours();
									d.setHours(0);
								} else {
									d.setMonth(d.getMonth() +
										tickSize * (unit == "quarter" ? 3 : 1));
								}
							} else if (unit == "year") {
								d.setFullYear(d.getFullYear() + tickSize);
							} else {
								d.setTime(v + step);
							}
						} while (v < axis.max && v != prev);

						return ticks;
					};

					axis.tickFormatter = function (v, axis) {

						var d = dateGenerator(v, axis.options);

						// first check global format

						if (opts.timeformat != null) {
							return formatDate(d, opts.timeformat, opts.monthNames, opts.dayNames);
						}

						// possibly use quarters if quarters are mentioned in
						// any of these places

						var useQuarters = (axis.options.tickSize &&
								axis.options.tickSize[1] == "quarter") ||
							(axis.options.minTickSize &&
								axis.options.minTickSize[1] == "quarter");

						var t = axis.tickSize[0] * timeUnitSize[axis.tickSize[1]];
						var span = axis.max - axis.min;
						var suffix = (opts.twelveHourClock) ? " %p" : "";
						var hourCode = (opts.twelveHourClock) ? "%I" : "%H";
						var fmt;

						if (t < timeUnitSize.minute) {
							fmt = hourCode + ":%M:%S" + suffix;
						} else if (t < timeUnitSize.day) {
							if (span < 2 * timeUnitSize.day) {
								fmt = hourCode + ":%M" + suffix;
							} else {
								fmt = "%b %d " + hourCode + ":%M" + suffix;
							}
						} else if (t < timeUnitSize.month) {
							fmt = "%b %d";
						} else if ((useQuarters && t < timeUnitSize.quarter) ||
							(!useQuarters && t < timeUnitSize.year)) {
							if (span < timeUnitSize.year) {
								fmt = "%b";
							} else {
								fmt = "%b %Y";
							}
						} else if (useQuarters && t < timeUnitSize.year) {
							if (span < timeUnitSize.year) {
								fmt = "Q%q";
							} else {
								fmt = "Q%q %Y";
							}
						} else {
							fmt = "%Y";
						}

						var rt = formatDate(d, fmt, opts.monthNames, opts.dayNames);

						return rt;
					};
				}
			});
		});
	}

	$.plot.plugins.push({
		init: init,
		options: options,
		name: 'time',
		version: '1.0'
	});

	// Time-axis support used to be in Flot core, which exposed the
	// formatDate function on the plot object.  Various plugins depend
	// on the function, so we need to re-expose it here.

	$.plot.formatDate = formatDate;
	$.plot.dateGenerator = dateGenerator;

})(jQuery);


/***/ }),

/***/ 629:
/***/ (function(module, exports) {

/*
 * jquery.flot.tooltip
 * 
 * description: easy-to-use tooltips for Flot charts
 * version: 0.6.2
 * author: Krzysztof Urbas @krzysu [myviews.pl]
 * website: https://github.com/krzysu/flot.tooltip
 * 
 * build on 2013-09-30
 * released under MIT License, 2012
*/ 
(function(t){var o={tooltip:!1,tooltipOpts:{content:"%s | X: %x | Y: %y",xDateFormat:null,yDateFormat:null,shifts:{x:10,y:20},defaultTheme:!0,onHover:function(){}}},i=function(t){this.tipPosition={x:0,y:0},this.init(t)};i.prototype.init=function(o){function i(t){var o={};o.x=t.pageX,o.y=t.pageY,s.updateTooltipPosition(o)}function e(t,o,i){var e=s.getDomElement();if(i){var n;n=s.stringFormat(s.tooltipOptions.content,i),e.html(n),s.updateTooltipPosition({x:o.pageX,y:o.pageY}),e.css({left:s.tipPosition.x+s.tooltipOptions.shifts.x,top:s.tipPosition.y+s.tooltipOptions.shifts.y}).show(),"function"==typeof s.tooltipOptions.onHover&&s.tooltipOptions.onHover(i,e)}else e.hide().html("")}var s=this;o.hooks.bindEvents.push(function(o,n){s.plotOptions=o.getOptions(),s.plotOptions.tooltip!==!1&&void 0!==s.plotOptions.tooltip&&(s.tooltipOptions=s.plotOptions.tooltipOpts,s.getDomElement(),t(o.getPlaceholder()).bind("plothover",e),t(n).bind("mousemove",i))}),o.hooks.shutdown.push(function(o,s){t(o.getPlaceholder()).unbind("plothover",e),t(s).unbind("mousemove",i)})},i.prototype.getDomElement=function(){var o;return t("#flotTip").length>0?o=t("#flotTip"):(o=t("<div />").attr("id","flotTip"),o.appendTo("body").hide().css({position:"absolute"}),this.tooltipOptions.defaultTheme&&o.css({background:"#fff","z-index":"100",padding:"0.4em 0.6em","border-radius":"0.5em","font-size":"0.8em",border:"1px solid #111",display:"none","white-space":"nowrap"})),o},i.prototype.updateTooltipPosition=function(o){var i=t("#flotTip").outerWidth()+this.tooltipOptions.shifts.x,e=t("#flotTip").outerHeight()+this.tooltipOptions.shifts.y;o.x-t(window).scrollLeft()>t(window).innerWidth()-i&&(o.x-=i),o.y-t(window).scrollTop()>t(window).innerHeight()-e&&(o.y-=e),this.tipPosition.x=o.x,this.tipPosition.y=o.y},i.prototype.stringFormat=function(t,o){var i=/%p\.{0,1}(\d{0,})/,e=/%s/,s=/%x\.{0,1}(?:\d{0,})/,n=/%y\.{0,1}(?:\d{0,})/;return"function"==typeof t&&(t=t(o.series.label,o.series.data[o.dataIndex][0],o.series.data[o.dataIndex][1],o)),o.series.percent!==void 0&&(t=this.adjustValPrecision(i,t,o.series.percent)),o.series.label!==void 0&&(t=t.replace(e,o.series.label)),this.isTimeMode("xaxis",o)&&this.isXDateFormat(o)&&(t=t.replace(s,this.timestampToDate(o.series.data[o.dataIndex][0],this.tooltipOptions.xDateFormat))),this.isTimeMode("yaxis",o)&&this.isYDateFormat(o)&&(t=t.replace(n,this.timestampToDate(o.series.data[o.dataIndex][1],this.tooltipOptions.yDateFormat))),"number"==typeof o.series.data[o.dataIndex][0]&&(t=this.adjustValPrecision(s,t,o.series.data[o.dataIndex][0])),"number"==typeof o.series.data[o.dataIndex][1]&&(t=this.adjustValPrecision(n,t,o.series.data[o.dataIndex][1])),o.series.xaxis.tickFormatter!==void 0&&(t=t.replace(s,o.series.xaxis.tickFormatter(o.series.data[o.dataIndex][0],o.series.xaxis))),o.series.yaxis.tickFormatter!==void 0&&(t=t.replace(n,o.series.yaxis.tickFormatter(o.series.data[o.dataIndex][1],o.series.yaxis))),t},i.prototype.isTimeMode=function(t,o){return o.series[t].options.mode!==void 0&&"time"===o.series[t].options.mode},i.prototype.isXDateFormat=function(){return this.tooltipOptions.xDateFormat!==void 0&&null!==this.tooltipOptions.xDateFormat},i.prototype.isYDateFormat=function(){return this.tooltipOptions.yDateFormat!==void 0&&null!==this.tooltipOptions.yDateFormat},i.prototype.timestampToDate=function(o,i){var e=new Date(o);return t.plot.formatDate(e,i)},i.prototype.adjustValPrecision=function(t,o,i){var e,s=o.match(t);return null!==s&&""!==RegExp.$1&&(e=RegExp.$1,i=i.toFixed(e),o=o.replace(t,i)),o};var e=function(t){new i(t)};t.plot.plugins.push({init:e,options:o,name:"tooltip",version:"0.6.1"})})(jQuery);

/***/ }),

/***/ 647:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(353);


/***/ })

},[647]);
//# sourceMappingURL=main.bundle.js.map