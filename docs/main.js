(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\el_fr\portfolio_angular\src\main.ts */"zUnb");


/***/ }),

/***/ "3hPs":
/*!***********************************************!*\
  !*** ./src/app/technologies/tenchnoligies.ts ***!
  \***********************************************/
/*! exports provided: technologies */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "technologies", function() { return technologies; });
const technologies = [
    {
        name: 'Java',
        icon_url: 'https://elasticbeanstalk-us-east-1-840967018261.s3.amazonaws.com/icons/icons8-logotipo-de-java-coffee-cup.svg'
    },
    {
        name: 'C#',
        icon_url: 'https://elasticbeanstalk-us-east-1-840967018261.s3.amazonaws.com/icons/icons8-c-sharp-logotipo.svg'
    },
    {
        name: 'Html5',
        icon_url: 'https://elasticbeanstalk-us-east-1-840967018261.s3.amazonaws.com/icons/icons8-html-5.svg'
    },
    {
        name: 'Typescript',
        icon_url: 'https://elasticbeanstalk-us-east-1-840967018261.s3.amazonaws.com/icons/icons8-typescript.svg'
    },
    {
        name: 'Javascript',
        icon_url: 'https://elasticbeanstalk-us-east-1-840967018261.s3.amazonaws.com/icons/icons8-javascript.svg'
    },
    {
        name: 'Angular',
        icon_url: 'https://elasticbeanstalk-us-east-1-840967018261.s3.amazonaws.com/icons/icons8-angularjs.svg'
    },
    {
        name: 'CSS3',
        icon_url: 'https://elasticbeanstalk-us-east-1-840967018261.s3.amazonaws.com/icons/icons8-css3.svg'
    },
    {
        name: 'MongoDB',
        icon_url: 'https://elasticbeanstalk-us-east-1-840967018261.s3.amazonaws.com/icons/icons8-mongodb.svg'
    },
    {
        name: 'Mysql',
        icon_url: 'https://elasticbeanstalk-us-east-1-840967018261.s3.amazonaws.com/icons/icons8-logo-de-mysql.svg'
    },
    {
        name: 'Git',
        icon_url: 'https://elasticbeanstalk-us-east-1-840967018261.s3.amazonaws.com/icons/icons8-git.svg'
    },
    {
        name: 'R',
        icon_url: 'https://elasticbeanstalk-us-east-1-840967018261.s3.amazonaws.com/icons/r-lang.svg'
    }
];


/***/ }),

/***/ "5sOh":
/*!***********************************************!*\
  !*** ./src/app/navbar/local-theme.service.ts ***!
  \***********************************************/
/*! exports provided: LocalThemeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalThemeService", function() { return LocalThemeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class LocalThemeService {
    constructor() { }
    getTheme() {
        let theme = localStorage.getItem('theme');
        return theme;
    }
    setTheme() {
        let theme = localStorage.getItem('theme');
        if (theme === 'light') {
            localStorage.setItem('theme', 'dark');
        }
        else if (theme === "dark") {
            localStorage.setItem('theme', 'light');
        }
    }
    verifyTheme() {
        let theme = localStorage.getItem('theme');
        if (theme) {
            return true;
        }
        else {
            localStorage.setItem('theme', 'light');
            return false;
        }
    }
}
LocalThemeService.ɵfac = function LocalThemeService_Factory(t) { return new (t || LocalThemeService)(); };
LocalThemeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LocalThemeService, factory: LocalThemeService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "84zG":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _utils_animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/animation */ "kgjW");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class AboutComponent {
    constructor(el) {
        this.el = el;
        this.state = 'scrolled';
    }
    ngOnInit() {
        this.checkStart();
    }
    listener() {
        this.state = Object(_utils_animation__WEBPACK_IMPORTED_MODULE_0__["checkScroll"])(this.el);
    }
    checkStart() {
        setTimeout(() => {
            this.state = Object(_utils_animation__WEBPACK_IMPORTED_MODULE_0__["checkStart"])(this.state);
        }, 400);
    }
}
AboutComponent.ɵfac = function AboutComponent_Factory(t) { return new (t || AboutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])); };
AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AboutComponent, selectors: [["app-about"]], hostBindings: function AboutComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("scroll", function AboutComponent_scroll_HostBindingHandler($event) { return ctx.listener($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveWindow"]);
    } }, decls: 18, vars: 1, consts: [[1, "content-about"], [1, "content-title"], [1, "content-text-title"], [1, "content-img"], ["src", "https://res.cloudinary.com/drqewsbya/image/upload/v1638579465/perfil_qdsujo.png", "alt", "", "srcset", ""], [1, "content-text"]], template: function AboutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "About me");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, " My name is Jose Alfredo Nu\u00F1ez Aguirre and I'm living in Cd. Obregon, Sonora, M\u00E9xico. I study Software Engineer ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, " 2 years ago I started learn and resolve problem with languages backend as JAVA, C#, PHP, JS with node.JS. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, " My vision is to continue training myself, work to improve or generate new or improve features to the problems with responsibility I will do my best and seek the best. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@scrollAnimation", ctx.state);
    } }, styles: [".content-about[_ngcontent-%COMP%]{\r\n     \r\n    width: 100%;\r\n    position: relative;\r\n    display: flex;\r\n    margin: 40px 0;\r\n    padding: 80px 10px 10px 10px;\r\n    align-items: center;\r\n    justify-content: space-evenly;\r\n    border-radius: 10px;\r\n    box-shadow: 4px 4px 8px 5px rgba(0, 0, 0, 0.2);\r\n    box-sizing: border-box;\r\n    transition: all 0.5s ease;\r\n  \r\n   \r\n}\r\n\r\n.dark[_ngcontent-%COMP%]   .content-about[_ngcontent-%COMP%] {\r\n    color: white;\r\n}\r\n\r\n.content-title[_ngcontent-%COMP%]   .content-text-title[_ngcontent-%COMP%]{\r\n    width: 200px;\r\n    height: 50px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    box-sizing: border-box;\r\n    border-bottom: 5px solid var(--color-hover);\r\n    cursor: default;\r\n}\r\n\r\n.content-about[_ngcontent-%COMP%]   .content-title[_ngcontent-%COMP%]{\r\n    position: absolute;\r\n    top: 0px;\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: center;\r\n    height: 50px;\r\n   \r\n    \r\n \r\n}\r\n\r\n.content-about[_ngcontent-%COMP%]   .content-title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\r\n    \r\n    text-align: center;\r\n    color: var(--txt-dark)\r\n}\r\n\r\n.dark[_ngcontent-%COMP%]   .content-title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\r\n    color:var(--txt-white);\r\n}\r\n\r\n.content-about[_ngcontent-%COMP%]   .content-img[_ngcontent-%COMP%]{\r\n    width: 300px;\r\n    height: auto;\r\n    border-radius: 10px;\r\n    \r\n    object-fit: cover;\r\n    overflow: hidden;\r\n}\r\n\r\n.content-about[_ngcontent-%COMP%]   .content-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n   width: 110%;\r\n   height: 110%;\r\n   box-sizing: border-box;\r\n}\r\n\r\n.content-about[_ngcontent-%COMP%]   .content-text[_ngcontent-%COMP%]{\r\n    \r\nwidth: 400px;\r\n   height: auto;\r\n   padding: 20px;\r\n   box-sizing: border-box;\r\n   font-weight: bold;\r\n   color: var(--txt-dark);\r\n   transition: font-size 0.5s ease;\r\n   \r\n}\r\n\r\n.dark[_ngcontent-%COMP%]   .content-text[_ngcontent-%COMP%]{\r\n    color:var(--txt-white);\r\n}\r\n\r\n.content-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n    margin:  5px;\r\n}\r\n\r\n@media (max-width: 800px){\r\n   .content-about[_ngcontent-%COMP%]{\r\n       width: 100%;\r\n        display: block;\r\n       padding: 10px 10px 10px 10px;\r\n       height: auto;\r\n        border-radius: 10px;\r\n    }\r\n\r\n    .content-about[_ngcontent-%COMP%]   .content-title[_ngcontent-%COMP%]{\r\n        width: 80%;\r\n        position: relative;\r\n        margin: 0 auto;\r\n    }\r\n\r\n    .content-about[_ngcontent-%COMP%]   .content-img[_ngcontent-%COMP%]{\r\n       border-radius: 20px;\r\n       width: 200px;\r\n       height: 200px;\r\n       margin: 30px auto;\r\n    }\r\n\r\n    .content-about[_ngcontent-%COMP%]   .content-text[_ngcontent-%COMP%]{\r\n        width: 100%;\r\n        height: auto;\r\n        padding: 0px;\r\n        font-size: 15px;\r\n        transition: font-size 0.5s ease;\r\n     }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFib3V0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztDQUlDOztJQUVHLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLGNBQWM7SUFDZCw0QkFBNEI7SUFDNUIsbUJBQW1CO0lBQ25CLDZCQUE2QjtJQUM3QixtQkFBbUI7SUFDbkIsOENBQThDO0lBQzlDLHNCQUFzQjtJQUN0Qix5QkFBeUI7OztBQUc3Qjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBQ0E7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLHNCQUFzQjtJQUN0QiwyQ0FBMkM7SUFDM0MsZUFBZTtBQUNuQjs7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsV0FBVztJQUNYLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsWUFBWTs7SUFFWix1REFBdUQ7O0FBRTNEOztBQUNBOztJQUVJLGtCQUFrQjtJQUNsQjtBQUNKOztBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWixtQkFBbUI7O0lBRW5CLGlCQUFpQjtJQUNqQixnQkFBZ0I7QUFDcEI7O0FBRUE7R0FDRyxXQUFXO0dBQ1gsWUFBWTtHQUNaLHNCQUFzQjtBQUN6Qjs7QUFFQTs7QUFFQSxZQUFZO0dBQ1QsWUFBWTtHQUNaLGFBQWE7R0FDYixzQkFBc0I7R0FDdEIsaUJBQWlCO0dBQ2pCLHNCQUFzQjtHQUN0QiwrQkFBK0I7O0FBRWxDOztBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFHQTtHQUNHO09BQ0ksV0FBVztRQUNWLGNBQWM7T0FDZiw0QkFBNEI7T0FDNUIsWUFBWTtRQUNYLG1CQUFtQjtJQUN2Qjs7SUFFQTtRQUNJLFVBQVU7UUFDVixrQkFBa0I7UUFDbEIsY0FBYztJQUNsQjs7SUFFQTtPQUNHLG1CQUFtQjtPQUNuQixZQUFZO09BQ1osYUFBYTtPQUNiLGlCQUFpQjtJQUNwQjs7SUFFQTtRQUNJLFdBQVc7UUFDWCxZQUFZO1FBQ1osWUFBWTtRQUNaLGVBQWU7UUFDZiwrQkFBK0I7S0FDbEM7QUFDTCIsImZpbGUiOiJhYm91dC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG5cclxuXHJcbiAuY29udGVudC1hYm91dHtcclxuICAgICBcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIG1hcmdpbjogNDBweCAwO1xyXG4gICAgcGFkZGluZzogODBweCAxMHB4IDEwcHggMTBweDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBib3gtc2hhZG93OiA0cHggNHB4IDhweCA1cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2U7XHJcbiAgXHJcbiAgIFxyXG59XHJcblxyXG4uZGFyayAuY29udGVudC1hYm91dCB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuLmNvbnRlbnQtdGl0bGUgLmNvbnRlbnQtdGV4dC10aXRsZXtcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkIHZhcigtLWNvbG9yLWhvdmVyKTtcclxuICAgIGN1cnNvcjogZGVmYXVsdDtcclxufVxyXG4uY29udGVudC1hYm91dCAuY29udGVudC10aXRsZXtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgIFxyXG4gICAgLyogYm94LXNoYWRvdzogMTBweCA1cHggMTBweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC44KTsgKi9cclxuIFxyXG59XHJcbi5jb250ZW50LWFib3V0IC5jb250ZW50LXRpdGxlIGgxe1xyXG4gICAgXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogdmFyKC0tdHh0LWRhcmspXHJcbn1cclxuXHJcbi5kYXJrIC5jb250ZW50LXRpdGxlIGgxe1xyXG4gICAgY29sb3I6dmFyKC0tdHh0LXdoaXRlKTtcclxufVxyXG5cclxuLmNvbnRlbnQtYWJvdXQgLmNvbnRlbnQtaW1ne1xyXG4gICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIFxyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4uY29udGVudC1hYm91dCAuY29udGVudC1pbWcgaW1ne1xyXG4gICB3aWR0aDogMTEwJTtcclxuICAgaGVpZ2h0OiAxMTAlO1xyXG4gICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG4uY29udGVudC1hYm91dCAuY29udGVudC10ZXh0e1xyXG4gICAgXHJcbndpZHRoOiA0MDBweDtcclxuICAgaGVpZ2h0OiBhdXRvO1xyXG4gICBwYWRkaW5nOiAyMHB4O1xyXG4gICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICBmb250LXdlaWdodDogYm9sZDtcclxuICAgY29sb3I6IHZhcigtLXR4dC1kYXJrKTtcclxuICAgdHJhbnNpdGlvbjogZm9udC1zaXplIDAuNXMgZWFzZTtcclxuICAgXHJcbn1cclxuXHJcbi5kYXJrIC5jb250ZW50LXRleHR7XHJcbiAgICBjb2xvcjp2YXIoLS10eHQtd2hpdGUpO1xyXG59XHJcblxyXG4uY29udGVudC10ZXh0IHB7XHJcbiAgICBtYXJnaW46ICA1cHg7XHJcbn1cclxuXHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogODAwcHgpe1xyXG4gICAuY29udGVudC1hYm91dHtcclxuICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgcGFkZGluZzogMTBweCAxMHB4IDEwcHggMTBweDtcclxuICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5jb250ZW50LWFib3V0IC5jb250ZW50LXRpdGxle1xyXG4gICAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgfVxyXG5cclxuICAgIC5jb250ZW50LWFib3V0IC5jb250ZW50LWltZ3tcclxuICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICB3aWR0aDogMjAwcHg7XHJcbiAgICAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgICAgbWFyZ2luOiAzMHB4IGF1dG87XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbnRlbnQtYWJvdXQgLmNvbnRlbnQtdGV4dHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgcGFkZGluZzogMHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICB0cmFuc2l0aW9uOiBmb250LXNpemUgMC41cyBlYXNlO1xyXG4gICAgIH1cclxufSJdfQ== */"], data: { animation: [_utils_animation__WEBPACK_IMPORTED_MODULE_0__["scroll"]] } });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _utils_emails_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/emails.service */ "k1px");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./navbar/navbar.component */ "kWWo");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./about/about.component */ "84zG");
/* harmony import */ var _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./portfolio/portfolio.component */ "zyDg");
/* harmony import */ var _technologies_technologies_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./technologies/technologies.component */ "myQx");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./contact/contact.component */ "bzTf");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./footer/footer.component */ "fp1T");










class AppComponent {
    constructor(_emailsService) {
        this._emailsService = _emailsService;
        this.title = 'Portfolio';
        this.getIP().then(res => {
            res.subscribe(data => {
            }, err => {
            });
        });
    }
    ngOnInit() {
        this._emailsService.getCountriesVisit().subscribe(data => {
        });
        this._emailsService.getAllVisits().subscribe(data => {
        });
    }
    getIP() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this._emailsService.getIP();
        });
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_utils_emails_service__WEBPACK_IMPORTED_MODULE_2__["EmailsService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 8, vars: 0, consts: [["id", "Home"], [1, "primary"], ["id", "About"], ["id", "Portfolio"], ["id", "Contact"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-navbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "app-about", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "app-portfolio", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "app-technologies");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "app-contact", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "app-footer");
    } }, directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__["NavbarComponent"], _about_about_component__WEBPACK_IMPORTED_MODULE_4__["AboutComponent"], _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_5__["PortfolioComponent"], _technologies_technologies_component__WEBPACK_IMPORTED_MODULE_6__["TechnologiesComponent"], _contact_contact_component__WEBPACK_IMPORTED_MODULE_7__["ContactComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterOutlet"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"]], styles: ["app-navbar[_ngcontent-%COMP%]{\r\n    display: block;\r\n    width: 100%;\r\n    height: 58px;\r\n}\r\n\r\napp-about[_ngcontent-%COMP%]{\r\n    display: block;\r\n    width: 100%;\r\n}\r\n\r\napp-portfolio[_ngcontent-%COMP%] {\r\n     display: block;\r\n    width: 100%;\r\n}\r\n\r\napp-technologies[_ngcontent-%COMP%]{\r\n     display: block;\r\n    width: 100%;\r\n}\r\n\r\napp-contact[_ngcontent-%COMP%]{\r\n      display: block;\r\n    width: 100%;\r\n }\r\n\r\napp-footer[_ngcontent-%COMP%]{\r\n    display: block;\r\n  width: 100%;\r\n}\r\n\r\n@media (max-width: 800px) {\r\n\r\n    .font[_ngcontent-%COMP%] {\r\n       \r\n      object-fit: scale-down;\r\n    \r\n    }\r\n    .font[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n        width: 800px;\r\n        height: 100%;\r\n     }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLGNBQWM7SUFDZCxXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxXQUFXO0FBQ2Y7O0FBRUE7S0FDSyxjQUFjO0lBQ2YsV0FBVztBQUNmOztBQUNBO0tBQ0ssY0FBYztJQUNmLFdBQVc7QUFDZjs7QUFDQztNQUNLLGNBQWM7SUFDaEIsV0FBVztDQUNkOztBQUNBO0lBQ0csY0FBYztFQUNoQixXQUFXO0FBQ2I7O0FBS0E7O0lBRUk7O01BRUUsc0JBQXNCOztJQUV4QjtJQUNBO1FBQ0ksWUFBWTtRQUNaLFlBQVk7S0FDZjtBQUNMIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmFwcC1uYXZiYXJ7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA1OHB4O1xyXG59XHJcblxyXG5hcHAtYWJvdXR7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5hcHAtcG9ydGZvbGlvIHtcclxuICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcbmFwcC10ZWNobm9sb2dpZXN7XHJcbiAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG4gYXBwLWNvbnRhY3R7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiB9XHJcbiBhcHAtZm9vdGVye1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA4MDBweCkge1xyXG5cclxuICAgIC5mb250IHtcclxuICAgICAgIFxyXG4gICAgICBvYmplY3QtZml0OiBzY2FsZS1kb3duO1xyXG4gICAgXHJcbiAgICB9XHJcbiAgICAuZm9udCBpbWd7XHJcbiAgICAgICAgd2lkdGg6IDgwMHB4O1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICB9XHJcbn0iXX0= */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./navbar/navbar.component */ "kWWo");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./about/about.component */ "84zG");
/* harmony import */ var _navbar_change_theme_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./navbar/change-theme.directive */ "oR3K");
/* harmony import */ var _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./portfolio/portfolio.component */ "zyDg");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./contact/contact.component */ "bzTf");
/* harmony import */ var _technologies_technologies_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./technologies/technologies.component */ "myQx");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./footer/footer.component */ "fp1T");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ "fXoL");
















const rutas = [];
class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineInjector"]({ providers: [{ provide: _angular_common__WEBPACK_IMPORTED_MODULE_7__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_7__["HashLocationStrategy"] }], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(rutas),
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"],
        _about_about_component__WEBPACK_IMPORTED_MODULE_8__["AboutComponent"],
        _navbar_change_theme_directive__WEBPACK_IMPORTED_MODULE_9__["ChangeThemeDirective"],
        _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_10__["PortfolioComponent"],
        _contact_contact_component__WEBPACK_IMPORTED_MODULE_11__["ContactComponent"],
        _technologies_technologies_component__WEBPACK_IMPORTED_MODULE_12__["TechnologiesComponent"],
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_13__["FooterComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]] }); })();


/***/ }),

/***/ "bzTf":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _utils_animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/animation */ "kgjW");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _utils_emails_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/emails.service */ "k1px");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");






function ContactComponent_div_30_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ContactComponent_div_30_Template_div_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r3.changeEstado(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "X");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMapInterpolate2"]("toast  bg-danger  animate__animated animate__fadeInRight ", ctx_r1.salida, " ", ctx_r1.show, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r1.msg, " ");
} }
function ContactComponent_div_31_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ContactComponent_div_31_Template_div_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r5.changeEstado(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "X");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMapInterpolate2"]("toast align-items-center text-white bg-success enter  animate__animated animate__fadeInRight  ", ctx_r2.salida, "  border-0 ", ctx_r2.show, " flotante mt-3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r2.msg, " ");
} }
class ContactComponent {
    constructor(_emailsService, el) {
        this._emailsService = _emailsService;
        this.el = el;
        this.state = 'scrolled';
        this.salida = "";
        this.estado = "";
        this.show = "";
        this.msg = "";
        this.email = "";
        this.first = "";
        this.end = "";
        this.description = "";
        this.phone = "";
    }
    ngOnInit() {
    }
    onSubmit(f) {
        let body = {
            email: this.email,
            name: `${this.first} ${this.end}`,
            description: this.description,
            phone: this.phone,
        };
        if (this.email == "" && this.first == "" && this.end == "" && this.phone == "" && this.description == "") {
            this.estado = "error";
            this.msg = "complete all fields";
            this.show = "show";
            setTimeout(() => {
                this.changeEstado();
            }, 5000);
            return;
        }
        this.sendEmail(body).then(res => {
            res.subscribe(() => {
                this.estado = "succes";
                this.msg = "Mail was sent, check your folder spam";
                this.show = "show";
                setTimeout(() => {
                    this.changeEstado();
                }, 5000);
                f.reset();
            }, err => {
                this.estado = "error";
                this.msg = err.error.message;
                this.show = "show";
                setTimeout(() => {
                    this.changeEstado();
                }, 5000);
            });
        });
    }
    sendEmail(body) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this._emailsService.getCursos(body);
        });
    }
    changeEstado() {
        if (this.estado == 'error' || this.estado == 'succes') {
            this.estado = '';
            this.show = 'hide';
        }
    }
    listener() {
        this.state = Object(_utils_animation__WEBPACK_IMPORTED_MODULE_1__["checkScroll"])(this.el);
    }
}
ContactComponent.ɵfac = function ContactComponent_Factory(t) { return new (t || ContactComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_utils_emails_service__WEBPACK_IMPORTED_MODULE_3__["EmailsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"])); };
ContactComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ContactComponent, selectors: [["app-contact"]], hostBindings: function ContactComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("scroll", function ContactComponent_scroll_HostBindingHandler($event) { return ctx.listener($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresolveWindow"]);
    } }, decls: 32, vars: 8, consts: [[1, "content-contact"], [1, "content-form"], [1, "container"], [1, "form"], ["form", "ngForm"], [1, "content-title"], [1, "group"], [1, "fa", "fa-user"], ["id", "fname", "name", "name", "type", "text", "placeholder", "First Name", 1, "form-control", 3, "ngModel", "ngModelChange"], ["id", "lname", "name", "end", "type", "text", "placeholder", "Last Name", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "fa", "fa-envelope-o"], ["id", "email", "name", "email", "type", "text", "placeholder", "Email Address", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "fa", "fa-phone-square"], ["id", "phone", "name", "phone", "type", "phone", "placeholder", "Phone", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "fa", "fa-pencil-square-o"], ["id", "message", "name", "description", "placeholder", "Enter your massage for us here. We will get back to you within 2 business days.", "rows", "7", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "col-md-12", "text-center"], ["type", "none", "type", "submit", 1, "btn", "btn-primary", "btn-lg", "form-control", 3, "click"], [1, "txtbtn"], [1, "fas", "fa-envelope-open-text"], [4, "ngIf"], ["role", "alert", "aria-live", "assertive", "aria-atomic", "true"], [1, "d-flex"], [1, "toast-body"], ["type", "button", "data-bs-dismiss", "toast", "aria-label", "Close", 1, "btn-close", 3, "click"], [1, "btn-close", 3, "click"]], template: function ContactComponent_Template(rf, ctx) { if (rf & 1) {
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "form", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Contact me");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ContactComponent_Template_input_ngModelChange_10_listener($event) { return ctx.first = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ContactComponent_Template_input_ngModelChange_13_listener($event) { return ctx.end = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ContactComponent_Template_input_ngModelChange_16_listener($event) { return ctx.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ContactComponent_Template_input_ngModelChange_19_listener($event) { return ctx.phone = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](21, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "textarea", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ContactComponent_Template_textarea_ngModelChange_22_listener($event) { return ctx.description = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ContactComponent_Template_div_click_25_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](4); return ctx.onSubmit(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](27, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "Send");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](30, ContactComponent_div_30_Template, 8, 5, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](31, ContactComponent_div_31_Template, 8, 5, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("@scrollAnimation", ctx.state);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.end);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.phone);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.estado == "error");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.estado == "succes");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]], styles: [".content-contact[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    display: block;\r\n    margin: 50px 0 150px 0;\r\n    box-sizing: border-box;\r\n    overflow: hidden;\r\n    position: relative;\r\n    border-radius: 10px;\r\n    box-shadow: 4px 4px 8px 5px rgba(0, 0, 0, 0.2);\r\n    \r\n}\r\n.content-contact[_ngcontent-%COMP%]   .content-form[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n   \r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    box-sizing:border-box;\r\n    padding: 5px;\r\n   \r\n}\r\n.content-contact[_ngcontent-%COMP%]   .content-title[_ngcontent-%COMP%]{\r\n    width: 250px;\r\n    margin: 20px auto;\r\n    color: var(--txt-dark);\r\n    text-align: center;\r\n    border-bottom: 5px solid;\r\n    border-color: var( --color-hover);\r\n    cursor: default;\r\n}\r\n.dark[_ngcontent-%COMP%]   .content-form[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]{\r\n    color: white;\r\n    \r\n}\r\n.container[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    max-width: 800px;\r\n   display: flex;\r\n   flex-direction: column;\r\n   align-items: center;\r\n}\r\n.dark[_ngcontent-%COMP%]   .content-title[_ngcontent-%COMP%] {\r\n    color: white;\r\n}\r\n.content-contact[_ngcontent-%COMP%]   .content-form[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{\r\n    font-size: 30px;\r\n    box-sizing: border-box;\r\n \r\n   \r\n}\r\n.content-contact[_ngcontent-%COMP%]   .content-form[_ngcontent-%COMP%]{\r\n    margin: 0 auto;\r\n   \r\n    width: 100%;\r\n    display: block;\r\n}\r\n.container[_ngcontent-%COMP%]   .group[_ngcontent-%COMP%]{\r\n    \r\n    width: 100%;\r\n    display: flex;\r\n    margin: 5px;\r\n    \r\n    justify-content: space-evenly;\r\n    flex-direction: row;\r\n    align-items: center;\r\n}\r\n.group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{\r\n    outline: none;\r\n    width: 80%;\r\n    height: 2rem;\r\n    padding: 5px;\r\n    margin: 5px;\r\n}\r\n.group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{\r\n    outline: none;\r\n    width: 80%;\r\n    padding: 5px;\r\n    margin: 5px;\r\n    resize:none;\r\n    overflow: hidden;\r\n}\r\n.col[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    flex: column;\r\n}\r\n.btn[_ngcontent-%COMP%]{\r\n    box-sizing: border-box;\r\n    position: relative;\r\n    border: none;\r\n    width: 100px;\r\n    height: 40px;\r\n    border: none;\r\n    border-radius: 3px;\r\n    background:var(--color-hover);\r\n    \r\n    display: flex;\r\n   align-items: center;\r\n   justify-content: space-evenly;\r\n    cursor: pointer;\r\n    font-size: 1rem;\r\n    overflow: hidden;\r\n    \r\n}\r\n.btn[_ngcontent-%COMP%]::before    {\r\n    box-sizing: border-box;\r\n    content: \"\";\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    width: 0;\r\n    height: 0;\r\n    background-color:  transparent;\r\n    border-radius: 3px; \r\n    transition: all 300ms ease;\r\n}\r\n.btn[_ngcontent-%COMP%]:hover::before  {\r\n    width: 100%;\r\n    height: 100%;\r\n   background-color: #222222c5;\r\n    left: 0;\r\n}\r\n.btn[_ngcontent-%COMP%]   .txtbtn[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .group[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   .txtbtn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{\r\n    font-size: 1rem;\r\n    margin: 3px 3px;\r\n    color: var(--txt-white);\r\n}\r\n.txtbtn[_ngcontent-%COMP%], .dark[_ngcontent-%COMP%]   .txtbtn[_ngcontent-%COMP%]{\r\n    position: relative;\r\n    width: 100%;\r\n    max-width: 80px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n.toast[_ngcontent-%COMP%]{\r\n    width: auto;\r\n    padding: 2px 30px;\r\n    max-width: 800px;\r\n    min-width: 200px;\r\n    height: 40px;\r\n    position: fixed;\r\n    border-radius: 5px;\r\n    box-sizing: border-box ;\r\n    bottom: 80px;\r\n    right: 40px;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    color: white;\r\n    overflow: hidden;\r\n}\r\n.bg-success[_ngcontent-%COMP%]{\r\n    background-color: rgb(59, 153, 59);\r\n}\r\n.bg-danger[_ngcontent-%COMP%]{\r\n    \r\n    background-color: rgb(255, 50, 50);\r\n}\r\n.toast[_ngcontent-%COMP%]   .btn-close[_ngcontent-%COMP%]{\r\n    position: absolute;\r\n    box-sizing: border-box;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    text-align: center;\r\n    font-weight: bold;\r\n    color: wheat;\r\n    border:none;\r\n    border-radius: 1px;\r\n    width: 20px;\r\n    height: 20px;\r\n    background: transparent ;\r\n    top: 0;\r\n    right: 0;\r\n    cursor: pointer;\r\n}\r\n.toast[_ngcontent-%COMP%]   .btn-close[_ngcontent-%COMP%]:hover{\r\n    background-color:  rgba(130, 130, 130, 0.508) !important;\r\n    border-radius: 7px;\r\n    \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxjQUFjO0lBQ2Qsc0JBQXNCO0lBQ3RCLHNCQUFzQjtJQUN0QixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQiw4Q0FBOEM7O0FBRWxEO0FBQ0E7SUFDSSxXQUFXOztJQUVYLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLHFCQUFxQjtJQUNyQixZQUFZOztBQUVoQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLHdCQUF3QjtJQUN4QixpQ0FBaUM7SUFDakMsZUFBZTtBQUNuQjtBQUVBO0lBQ0ksWUFBWTs7QUFFaEI7QUFFQTtJQUNJLFdBQVc7SUFDWCxnQkFBZ0I7R0FDakIsYUFBYTtHQUNiLHNCQUFzQjtHQUN0QixtQkFBbUI7QUFDdEI7QUFDQTtJQUNJLFlBQVk7QUFDaEI7QUFHQTtJQUNJLGVBQWU7SUFDZixzQkFBc0I7OztBQUcxQjtBQUdBO0lBQ0ksY0FBYzs7SUFFZCxXQUFXO0lBQ1gsY0FBYztBQUNsQjtBQU1BOztJQUVJLFdBQVc7SUFDWCxhQUFhO0lBQ2IsV0FBVzs7SUFFWCw2QkFBNkI7SUFDN0IsbUJBQW1CO0lBQ25CLG1CQUFtQjtBQUN2QjtBQUVBO0lBQ0ksYUFBYTtJQUNiLFVBQVU7SUFDVixZQUFZO0lBQ1osWUFBWTtJQUNaLFdBQVc7QUFDZjtBQUVBO0lBQ0ksYUFBYTtJQUNiLFVBQVU7SUFDVixZQUFZO0lBQ1osV0FBVztJQUNYLFdBQVc7SUFDWCxnQkFBZ0I7QUFDcEI7QUFFQTtJQUNJLGFBQWE7SUFDYixZQUFZO0FBQ2hCO0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixZQUFZO0lBQ1osWUFBWTtJQUNaLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsNkJBQTZCOztJQUU3QixhQUFhO0dBQ2QsbUJBQW1CO0dBQ25CLDZCQUE2QjtJQUM1QixlQUFlO0lBQ2YsZUFBZTtJQUNmLGdCQUFnQjs7QUFFcEI7QUFJQTtJQUNJLHNCQUFzQjtJQUN0QixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixPQUFPO0lBQ1AsUUFBUTtJQUNSLFNBQVM7SUFDVCw4QkFBOEI7SUFDOUIsa0JBQWtCO0lBQ2xCLDBCQUEwQjtBQUM5QjtBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7R0FDYiwyQkFBMkI7SUFDMUIsT0FBTztBQUNYO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsZUFBZTtJQUNmLHVCQUF1QjtBQUMzQjtBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxlQUFlO0lBQ2YsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7QUFDM0I7QUFFQTs7O0dBR0c7QUFFSDtJQUNJLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osZUFBZTtJQUNmLGtCQUFrQjtJQUNsQix1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLFdBQVc7SUFDWCxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osZ0JBQWdCO0FBQ3BCO0FBRUM7SUFDRyxrQ0FBa0M7QUFDdEM7QUFFQzs7SUFFRyxrQ0FBa0M7QUFDdEM7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osV0FBVztJQUNYLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsWUFBWTtJQUNaLHdCQUF3QjtJQUN4QixNQUFNO0lBQ04sUUFBUTtJQUNSLGVBQWU7QUFDbkI7QUFFQTtJQUNJLHdEQUF3RDtJQUN4RCxrQkFBa0I7O0FBRXRCIiwiZmlsZSI6ImNvbnRhY3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW50LWNvbnRhY3R7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luOiA1MHB4IDAgMTUwcHggMDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGJveC1zaGFkb3c6IDRweCA0cHggOHB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgICBcclxufVxyXG4uY29udGVudC1jb250YWN0IC5jb250ZW50LWZvcm0gLmNvbnRhaW5lcntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICBcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBib3gtc2l6aW5nOmJvcmRlci1ib3g7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgIFxyXG59XHJcbi5jb250ZW50LWNvbnRhY3QgLmNvbnRlbnQtdGl0bGV7XHJcbiAgICB3aWR0aDogMjUwcHg7XHJcbiAgICBtYXJnaW46IDIwcHggYXV0bztcclxuICAgIGNvbG9yOiB2YXIoLS10eHQtZGFyayk7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBib3JkZXItYm90dG9tOiA1cHggc29saWQ7XHJcbiAgICBib3JkZXItY29sb3I6IHZhciggLS1jb2xvci1ob3Zlcik7XHJcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XHJcbn1cclxuXHJcbi5kYXJrIC5jb250ZW50LWZvcm0gLmNvbnRhaW5lcntcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIFxyXG59XHJcblxyXG4uY29udGFpbmVyIC5mb3Jte1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXgtd2lkdGg6IDgwMHB4O1xyXG4gICBkaXNwbGF5OiBmbGV4O1xyXG4gICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbi5kYXJrIC5jb250ZW50LXRpdGxlIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuXHJcbi5jb250ZW50LWNvbnRhY3QgLmNvbnRlbnQtZm9ybSAgaXtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiBcclxuICAgXHJcbn1cclxuXHJcblxyXG4uY29udGVudC1jb250YWN0IC5jb250ZW50LWZvcm17XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgXHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuLmNvbnRhaW5lciAuZ3JvdXB7XHJcbiAgICBcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIG1hcmdpbjogNXB4O1xyXG4gICAgXHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uZ3JvdXAgaW5wdXR7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIGhlaWdodDogMnJlbTtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIG1hcmdpbjogNXB4O1xyXG59XHJcblxyXG4uZ3JvdXAgdGV4dGFyZWF7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIG1hcmdpbjogNXB4O1xyXG4gICAgcmVzaXplOm5vbmU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4uY29se1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXg6IGNvbHVtbjtcclxufVxyXG5cclxuLmJ0bntcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICBiYWNrZ3JvdW5kOnZhcigtLWNvbG9yLWhvdmVyKTtcclxuICAgIFxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgXHJcbn1cclxuXHJcblxyXG5cclxuLmJ0bjo6YmVmb3JlICAgIHtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHdpZHRoOiAwO1xyXG4gICAgaGVpZ2h0OiAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4OyBcclxuICAgIHRyYW5zaXRpb246IGFsbCAzMDBtcyBlYXNlO1xyXG59XHJcblxyXG4uYnRuOmhvdmVyOjpiZWZvcmUgIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjIyMjIyYzU7XHJcbiAgICBsZWZ0OiAwO1xyXG59XHJcbi5idG4gIC50eHRidG4gIHNwYW4sIC5ncm91cCAuYnRuIC50eHRidG4gaXtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIG1hcmdpbjogM3B4IDNweDtcclxuICAgIGNvbG9yOiB2YXIoLS10eHQtd2hpdGUpO1xyXG59ICAgXHJcblxyXG4udHh0YnRuLCAuZGFyayAudHh0YnRue1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXgtd2lkdGg6IDgwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4vKiAuYnRuOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIHZhcigtLWNvbG9yLWhvdmVyKTtcclxuXHJcbn0gKi9cclxuXHJcbi50b2FzdHtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgcGFkZGluZzogMnB4IDMwcHg7XHJcbiAgICBtYXgtd2lkdGg6IDgwMHB4O1xyXG4gICAgbWluLXdpZHRoOiAyMDBweDtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3ggO1xyXG4gICAgYm90dG9tOiA4MHB4O1xyXG4gICAgcmlnaHQ6IDQwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuIC5iZy1zdWNjZXNze1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDU5LCAxNTMsIDU5KTtcclxufVxyXG5cclxuIC5iZy1kYW5nZXJ7XHJcbiAgICBcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDUwLCA1MCk7XHJcbn1cclxuXHJcbi50b2FzdCAuYnRuLWNsb3Nle1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiB3aGVhdDtcclxuICAgIGJvcmRlcjpub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMXB4O1xyXG4gICAgd2lkdGg6IDIwcHg7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCA7XHJcbiAgICB0b3A6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLnRvYXN0IC5idG4tY2xvc2U6aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAgcmdiYSgxMzAsIDEzMCwgMTMwLCAwLjUwOCkgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcclxuICAgIFxyXG59XHJcblxyXG5cclxuIl19 */"], data: { animation: [_utils_animation__WEBPACK_IMPORTED_MODULE_1__["scroll"]] } });


/***/ }),

/***/ "fp1T":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 5, vars: 0, consts: [[1, "content-footer"], [1, "columns"], [1, "final"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "All Rights Reserved \u00A9 2021");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".content-footer[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    height: 200px;\r\n    background-color: var(--bg-dark);\r\n    color: var(--txt-white)\r\n}\r\n\r\n.darkFotter[_ngcontent-%COMP%]{\r\n    background-color: var(--bg-dark-footer) !important;\r\n}\r\n\r\n.content-footer[_ngcontent-%COMP%]   .final[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    height: 60px;\r\n    text-align: center;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n   \r\n}\r\n\r\n.content-footer[_ngcontent-%COMP%]   .columns[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    height: 140px;\r\n    \r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-around;\r\n}\r\n\r\n.columns[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:first-child{\r\n  \r\n    \r\n    border-right: 1px solid rgb(53, 82, 64) ;\r\n}\r\n\r\n.columns[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:last-child{\r\n    border-left: 1px solid white ;\r\n}\r\n\r\n.columns[_ngcontent-%COMP%]    > .icons[_ngcontent-%COMP%]  {\r\n    width: 30%;\r\n    box-sizing: border-box;\r\n    height: 100%;\r\n    \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLGFBQWE7SUFDYixnQ0FBZ0M7SUFDaEM7QUFDSjs7QUFFQTtJQUNJLGtEQUFrRDtBQUN0RDs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCOztBQUUzQjs7QUFHQTtJQUNJLFdBQVc7SUFDWCxhQUFhOztJQUViLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsNkJBQTZCO0FBQ2pDOztBQUVBOzs7SUFHSSx3Q0FBd0M7QUFDNUM7O0FBQ0E7SUFDSSw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSxVQUFVO0lBQ1Ysc0JBQXNCO0lBQ3RCLFlBQVk7O0FBRWhCIiwiZmlsZSI6ImZvb3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnQtZm9vdGVye1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctZGFyayk7XHJcbiAgICBjb2xvcjogdmFyKC0tdHh0LXdoaXRlKVxyXG59XHJcblxyXG4uZGFya0ZvdHRlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWRhcmstZm9vdGVyKSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uY29udGVudC1mb290ZXIgLmZpbmFse1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICBcclxufVxyXG5cclxuXHJcbi5jb250ZW50LWZvb3RlciAuY29sdW1uc3tcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxNDBweDtcclxuICAgIFxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxufVxyXG5cclxuLmNvbHVtbnMgPiA6Zmlyc3QtY2hpbGR7XHJcbiAgXHJcbiAgICBcclxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHJnYig1MywgODIsIDY0KSA7XHJcbn1cclxuLmNvbHVtbnMgPiA6bGFzdC1jaGlsZHtcclxuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgd2hpdGUgO1xyXG59XHJcblxyXG4uY29sdW1ucyA+IC5pY29ucyAge1xyXG4gICAgd2lkdGg6IDMwJTtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBcclxufSJdfQ== */"] });


/***/ }),

/***/ "k1px":
/*!*****************************************!*\
  !*** ./src/app/utils/emails.service.ts ***!
  \*****************************************/
/*! exports provided: EmailsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailsService", function() { return EmailsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "vDqi");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");





class EmailsService {
    constructor(http) {
        this.http = http;
    }
    getProyects() {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Content-Type', 'application/json');
        return this.http.get(`https://myprojects23.herokuapp.com/`, { headers });
    }
    getCursos(value) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const { data } = yield axios__WEBPACK_IMPORTED_MODULE_2___default.a.get('https://api.ipify.org/?format=json');
            value.ip = data;
            let params = value;
            let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Content-Type', 'application/json');
            // return this.http.post<any[]>(`http://localhost:5000/?phone=${params.phone}`, params, { headers });
            return this.http.post(`https://jsendmails.herokuapp.com/?phone=${params.phone}`, params, { headers });
        });
    }
    getIP() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const { data } = yield axios__WEBPACK_IMPORTED_MODULE_2___default.a.get('https://api.ipify.org/?format=json');
            let params = {
                ip: data
            };
            let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Content-Type', 'application/json');
            // return this.http.post<any[]>(`http://localhost:5000/ipVisitor`, params, { headers });
            return this.http.post(`https://jsendmails.herokuapp.com/ipVisitor`, params, { headers });
        });
    }
    getCountriesVisit() {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Content-Type', 'application/json');
        //return this.http.get<any[]>(`http://localhost:5000/getVisits`,  { headers });
        return this.http.get(`https://jsendmails.herokuapp.com/getVisits`, { headers });
    }
    getAllVisits() {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Content-Type', 'application/json');
        //return this.http.get<any[]>(`http://localhost:5000/countryVisit`, { headers });
        return this.http.get(`https://jsendmails.herokuapp.com/countryVisit/KKLFDJLJDJFL0303`, { headers });
    }
}
EmailsService.ɵfac = function EmailsService_Factory(t) { return new (t || EmailsService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
EmailsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: EmailsService, factory: EmailsService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "kWWo":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _local_theme_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./local-theme.service */ "5sOh");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



class NavbarComponent {
    constructor(localThemeService) {
        this.localThemeService = localThemeService;
        this.Theme = null;
    }
    ngOnInit() {
        this.localThemeService.verifyTheme();
        this.Theme = this.localThemeService.getTheme();
        if (this.Theme == 'dark') {
            this.setTheme();
        }
    }
    scrolltoTop() {
        var _a;
        (_a = document.querySelector('#Home')) === null || _a === void 0 ? void 0 : _a.scrollIntoView({ behavior: 'smooth', block: 'center' });
        console.log("asdads");
    }
    scrollServices() {
        var _a;
        (_a = document.getElementById('Contact')) === null || _a === void 0 ? void 0 : _a.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
    scrollAbout() {
        var _a;
        (_a = document.querySelector('#About')) === null || _a === void 0 ? void 0 : _a.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
    scrollPortfolio() {
        var _a;
        (_a = document.querySelector('#Portfolio')) === null || _a === void 0 ? void 0 : _a.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
    changeTheme() {
        this.localThemeService.setTheme();
        this.setTheme();
    }
    setTheme() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        (_a = document === null || document === void 0 ? void 0 : document.querySelector('.nav-bar')) === null || _a === void 0 ? void 0 : _a.classList.toggle('dark');
        (_b = document === null || document === void 0 ? void 0 : document.querySelector('body')) === null || _b === void 0 ? void 0 : _b.classList.toggle('dark');
        (_c = document === null || document === void 0 ? void 0 : document.querySelector('.menu')) === null || _c === void 0 ? void 0 : _c.classList.toggle('darked');
        (_d = document === null || document === void 0 ? void 0 : document.querySelector('.content-about')) === null || _d === void 0 ? void 0 : _d.classList.toggle('dark');
        (_e = document === null || document === void 0 ? void 0 : document.querySelector('.content-portfolio')) === null || _e === void 0 ? void 0 : _e.classList.toggle('dark');
        (_f = document === null || document === void 0 ? void 0 : document.querySelector('.content-contact')) === null || _f === void 0 ? void 0 : _f.classList.toggle('dark');
        (_g = document === null || document === void 0 ? void 0 : document.querySelector('.content-technologies')) === null || _g === void 0 ? void 0 : _g.classList.toggle('dark');
        (_h = document === null || document === void 0 ? void 0 : document.querySelector('.content-footer')) === null || _h === void 0 ? void 0 : _h.classList.toggle('darkFotter');
        (_j = document === null || document === void 0 ? void 0 : document.querySelector('.theme')) === null || _j === void 0 ? void 0 : _j.classList.toggle('fa-sun');
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_local_theme_service__WEBPACK_IMPORTED_MODULE_1__["LocalThemeService"])); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], decls: 39, vars: 0, consts: [[1, "nav-bar"], [1, "contenedor-nav"], [1, "logo"], [1, "content-logo"], ["routerLink", "/"], [1, "fas", "fa-laptop-code"], ["for", "btn", 1, "bt-menu"], [1, "fas", "fa-bars"], [1, "menu"], [1, "links"], ["routerLinkActive", "active", "routerLink", "/", 3, "click"], [1, "fas", "fa-home"], [1, "fas", "fa-blog"], [3, "click"], [1, "fas", "fa-user"], [1, "fas", "fa-suitcase"], [1, "fas", "fa-address-book"], [1, "theme", "fas", "fa-moon"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "JanDev");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ul", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_12_listener() { return ctx.scrolltoTop(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Blog");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_22_listener() { return ctx.scrollAbout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_27_listener() { return ctx.scrollPortfolio(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Portfolio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_32_listener() { return ctx.scrollServices(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_37_listener() { return ctx.changeTheme(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"]], styles: [".nav-bar[_ngcontent-%COMP%] {\r\n    position: fixed;\r\n    top: 0;\r\n    width: 100%;\r\n    height: 58px;\r\n    z-index: 1000;\r\n    background-color: white;\r\n    box-sizing: border-box;\r\n    transition: all 0.5s ease;\r\n    color: var(--txt-dark);\r\n    padding: 0px 40px;\r\n    background-color: var(--bg);\r\n\r\n}\r\n\r\n\r\n .dark[_ngcontent-%COMP%]{\r\n    background-color: var(--bg-dark-ts);\r\n    border-color: var(--borders);\r\n    color: var(--txt-white);\r\n}\r\n\r\n\r\n .nav-bar[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{\r\n    box-sizing: border-box;\r\n  \r\n    display: flex;\r\n    padding: 5px;\r\n    align-content: center;\r\n    justify-content: center;\r\n}\r\n\r\n\r\n \r\n\r\n\r\n .logo[_ngcontent-%COMP%]   .searchs[_ngcontent-%COMP%]{\r\n    position: relative;\r\n    display: block;\r\n    width: 300px;\r\n    height: 40px; \r\n\r\n}\r\n\r\n\r\n .logo[_ngcontent-%COMP%]   .searchs[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{\r\n    position: absolute;\r\n    left: 8px;\r\n    top: 11px;\r\n   \r\n    \r\n}\r\n\r\n\r\n .searchs[_ngcontent-%COMP%]   input[type=\"text\"][_ngcontent-%COMP%]{\r\n    \r\n    width: 200px;\r\n    transition: all 0.5s ease;\r\n    height: 100%;\r\n    padding-left: 30px;\r\n    border-style: solid;\r\n    border-width: 1px;\r\n    border-radius: 5px;\r\n    border-color:  var(--borders);\r\n    outline: none;\r\n    \r\n}\r\n\r\n\r\n .logo[_ngcontent-%COMP%]   .searchs[_ngcontent-%COMP%]   input[type=\"text\"][_ngcontent-%COMP%]:focus{\r\n   width: 300px;\r\n   padding-left: 50px;\r\n \r\n}\r\n\r\n\r\n .logo[_ngcontent-%COMP%]   .content-logo[_ngcontent-%COMP%]{\r\n    display: flex;\r\n     \r\n    \r\n}\r\n\r\n\r\n .dark[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   .content-logo[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    \r\n    \r\n}\r\n\r\n\r\n .content-logo[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]  {\r\n    font-size: 40px;\r\n    margin-right: 10px;\r\n}\r\n\r\n\r\n .content-logo[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    font-weight: bold;\r\n    color: var(--txt-dark);\r\n    margin-right: 4px;\r\n    text-decoration: none;\r\n   \r\n}\r\n\r\n\r\n .content-logo[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{\r\n    color: var(--color-hover);\r\n   \r\n}\r\n\r\n\r\n .dark[_ngcontent-%COMP%]   .content-logo[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    color: rgb(204, 204, 204); \r\n   \r\n}\r\n\r\n\r\n .dark[_ngcontent-%COMP%]   .content-logo[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{\r\n    \r\n    color: var(--color-hover);\r\n}\r\n\r\n\r\n \r\n\r\n\r\n .content-logo[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\r\n    font-size: 20px;\r\n}\r\n\r\n\r\n \r\n\r\n\r\n .nav-bar[_ngcontent-%COMP%]   .contenedor-nav[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    height: 100%;\r\n    position: relative;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    margin: 0px;\r\n  \r\n}\r\n\r\n\r\n .nav-bar[_ngcontent-%COMP%]   .contenedor-nav[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]{\r\n   width: auto;\r\n   height: 100%;\r\n   display: flex;\r\n   list-style: none;\r\n   align-items: center;\r\n   right: 0px;\r\n   \r\n}\r\n\r\n\r\n .menu[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]  {\r\n     position: relative;\r\n     width: 80px;\r\n     height: 100%;\r\n     bottom: 0px;\r\n     box-sizing: border-box;\r\n     padding: 5px;\r\n     transition: background-color ease-in .5s;\r\n    \r\n   \r\n}\r\n\r\n\r\n .menu[_ngcontent-%COMP%]   .change[_ngcontent-%COMP%]  {\r\n    position: relative;\r\n    width: 80px;\r\n    height: 100%;\r\n    bottom: 0px;\r\n    box-sizing: border-box;\r\n    padding: 5px;\r\n    transition: background-color ease-in .5s;\r\n   \r\n  \r\n}\r\n\r\n\r\n .nav-bar[_ngcontent-%COMP%]   .contenedor-nav[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]   .darked[_ngcontent-%COMP%]{\r\n    \r\n    border-color: var(--borders);\r\n    color: var(--txt-white);\r\n}\r\n\r\n\r\n .links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content:center;\r\n    justify-items: center;\r\n    height: 100%;\r\n    text-decoration: none;\r\n    \r\n   \r\n}\r\n\r\n\r\n .darked[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    text-decoration: none;\r\n}\r\n\r\n\r\n .links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\r\n    font-size: 12px;\r\n   \r\n}\r\n\r\n\r\n .links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{\r\n    font-size: 30px;\r\n}\r\n\r\n\r\n .links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{\r\n    color: var(--color-hover);\r\n}\r\n\r\n\r\n .links[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]{\r\n    color: var(--color-hover);;\r\n}\r\n\r\n\r\n .links[_ngcontent-%COMP%]:hover{\r\n    cursor: pointer;\r\n    transform: scale(1.05);\r\n}\r\n\r\n\r\n .bt-menu[_ngcontent-%COMP%]{\r\n    display: none;\r\n}\r\n\r\n\r\n @media (max-width: 800px){\r\n\r\n    .nav-bar[_ngcontent-%COMP%] {\r\n        width: 100%;\r\n       \r\n        justify-content: space-around;\r\n    }\r\n\r\n    .nav-bar[_ngcontent-%COMP%]   .contenedor-nav[_ngcontent-%COMP%]{\r\n        justify-content: space-around;\r\n    }\r\n\r\n    .logo[_ngcontent-%COMP%]{\r\n        width: auto;\r\n        height: 100%;\r\n    \r\n    }\r\n   \r\n    .content-logo[_ngcontent-%COMP%] {\r\n        display: flex;\r\n        margin: 0px;\r\n        height: 100%;\r\n        justify-content: space-around;\r\n        align-items: center;\r\n        \r\n     }\r\n    .logo[_ngcontent-%COMP%]   .searchs[_ngcontent-%COMP%]{\r\n        display: none;\r\n    }\r\n\r\n   \r\n   .menu[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]{\r\n        width: 45px;\r\n        margin: 0px 2px;\r\n        padding: 0;\r\n    }\r\n\r\n    .links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\r\n        font-size: 0.5rem;\r\n        font-weight: bold;\r\n       \r\n    }\r\n\r\n    .logo[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{\r\n        font-size: 1.5rem;\r\n        margin: 1px;\r\n        padding: 1px;\r\n    }\r\n    .logo[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\r\n        font-size: 1rem;\r\n        margin: 1px;\r\n        padding: 1px;\r\n    }\r\n\r\n    .logo[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n        display: inline-block;\r\n        text-align: center;\r\n    }\r\n    \r\n    \r\n    .links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{\r\n        font-size: 20px;\r\n        \r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJDQUFDO0lBQ0csZUFBZTtJQUNmLE1BQU07SUFDTixXQUFXO0lBQ1gsWUFBWTtJQUNaLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsc0JBQXNCO0lBQ3RCLHlCQUF5QjtJQUN6QixzQkFBc0I7SUFDdEIsaUJBQWlCO0lBQ2pCLDJCQUEyQjs7QUFFL0I7OztDQUdDO0lBQ0csbUNBQW1DO0lBQ25DLDRCQUE0QjtJQUM1Qix1QkFBdUI7QUFDM0I7OztDQUVDO0lBQ0csc0JBQXNCOztJQUV0QixhQUFhO0lBQ2IsWUFBWTtJQUNaLHFCQUFxQjtJQUNyQix1QkFBdUI7QUFDM0I7OztDQUlBLFdBQVc7OztDQUNYO0lBQ0ksa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxZQUFZO0lBQ1osWUFBWTs7QUFFaEI7OztDQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxTQUFTOzs7QUFHYjs7O0NBR0E7O0lBRUksWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLDZCQUE2QjtJQUM3QixhQUFhOztBQUVqQjs7O0NBQ0E7R0FDRyxZQUFZO0dBQ1osa0JBQWtCOztBQUVyQjs7O0NBRUE7SUFDSSxhQUFhOzs7QUFHakI7OztDQUNBO0lBQ0ksYUFBYTs7O0FBR2pCOzs7Q0FFQTtJQUNJLGVBQWU7SUFDZixrQkFBa0I7QUFDdEI7OztDQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLHNCQUFzQjtJQUN0QixpQkFBaUI7SUFDakIscUJBQXFCOztBQUV6Qjs7O0NBQ0E7SUFDSSx5QkFBeUI7O0FBRTdCOzs7Q0FDQTtJQUNJLHlCQUF5Qjs7QUFFN0I7OztDQUNBOztJQUVJLHlCQUF5QjtBQUM3Qjs7O0NBRUE7Ozs7Ozs7Ozs7R0FVRzs7O0NBRUg7SUFDSSxlQUFlO0FBQ25COzs7Q0FFQSxnQkFBZ0I7OztDQUdoQjtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsOEJBQThCO0lBQzlCLFdBQVc7O0FBRWY7OztDQUVBO0dBQ0csV0FBVztHQUNYLFlBQVk7R0FDWixhQUFhO0dBQ2IsZ0JBQWdCO0dBQ2hCLG1CQUFtQjtHQUNuQixVQUFVOztBQUViOzs7Q0FJQTtLQUNLLGtCQUFrQjtLQUNsQixXQUFXO0tBQ1gsWUFBWTtLQUNaLFdBQVc7S0FDWCxzQkFBc0I7S0FDdEIsWUFBWTtLQUNaLHdDQUF3Qzs7O0FBRzdDOzs7Q0FFQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsWUFBWTtJQUNaLFdBQVc7SUFDWCxzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLHdDQUF3Qzs7O0FBRzVDOzs7Q0FFQTs7SUFFSSw0QkFBNEI7SUFDNUIsdUJBQXVCO0FBQzNCOzs7Q0FJQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0QixxQkFBcUI7SUFDckIsWUFBWTtJQUNaLHFCQUFxQjs7O0FBR3pCOzs7Q0FFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7O0NBR0E7SUFDSSxlQUFlOztBQUVuQjs7O0NBRUE7SUFDSSxlQUFlO0FBQ25COzs7Q0FFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7O0NBSUE7SUFDSSx5QkFBeUI7QUFDN0I7OztDQUtBO0lBQ0ksZUFBZTtJQUNmLHNCQUFzQjtBQUMxQjs7O0NBRUE7SUFDSSxhQUFhO0FBQ2pCOzs7Q0FFQTs7SUFFSTtRQUNJLFdBQVc7O1FBRVgsNkJBQTZCO0lBQ2pDOztJQUVBO1FBQ0ksNkJBQTZCO0lBQ2pDOztJQUVBO1FBQ0ksV0FBVztRQUNYLFlBQVk7O0lBRWhCOztJQUVBO1FBQ0ksYUFBYTtRQUNiLFdBQVc7UUFDWCxZQUFZO1FBQ1osNkJBQTZCO1FBQzdCLG1CQUFtQjs7S0FFdEI7SUFDRDtRQUNJLGFBQWE7SUFDakI7OztHQUdEO1FBQ0ssV0FBVztRQUNYLGVBQWU7UUFDZixVQUFVO0lBQ2Q7O0lBRUE7UUFDSSxpQkFBaUI7UUFDakIsaUJBQWlCOztJQUVyQjs7SUFFQTtRQUNJLGlCQUFpQjtRQUNqQixXQUFXO1FBQ1gsWUFBWTtJQUNoQjtJQUNBO1FBQ0ksZUFBZTtRQUNmLFdBQVc7UUFDWCxZQUFZO0lBQ2hCOztJQUVBO1FBQ0kscUJBQXFCO1FBQ3JCLGtCQUFrQjtJQUN0Qjs7O0lBR0E7UUFDSSxlQUFlOztJQUVuQjtBQUNKIiwiZmlsZSI6Im5hdmJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiIC5uYXYtYmFyIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA1OHB4O1xyXG4gICAgei1pbmRleDogMTAwMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2U7XHJcbiAgICBjb2xvcjogdmFyKC0tdHh0LWRhcmspO1xyXG4gICAgcGFkZGluZzogMHB4IDQwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZyk7XHJcblxyXG59XHJcblxyXG5cclxuIC5kYXJre1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctZGFyay10cyk7XHJcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWJvcmRlcnMpO1xyXG4gICAgY29sb3I6IHZhcigtLXR4dC13aGl0ZSk7XHJcbn1cclxuXHJcbiAubmF2LWJhciAgLmxvZ297XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIFxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG5cclxuXHJcbi8qU2VhcmNoaCAqL1xyXG4ubG9nbyAgLnNlYXJjaHN7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAzMDBweDtcclxuICAgIGhlaWdodDogNDBweDsgXHJcblxyXG59XHJcblxyXG4ubG9nbyAuc2VhcmNocyBpe1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogOHB4O1xyXG4gICAgdG9wOiAxMXB4O1xyXG4gICBcclxuICAgIFxyXG59XHJcblxyXG5cclxuLnNlYXJjaHMgaW5wdXRbdHlwZT1cInRleHRcIl17XHJcbiAgICBcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2U7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XHJcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgYm9yZGVyLXdpZHRoOiAxcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBib3JkZXItY29sb3I6ICB2YXIoLS1ib3JkZXJzKTtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBcclxufVxyXG4ubG9nbyAgLnNlYXJjaHMgaW5wdXRbdHlwZT1cInRleHRcIl06Zm9jdXN7XHJcbiAgIHdpZHRoOiAzMDBweDtcclxuICAgcGFkZGluZy1sZWZ0OiA1MHB4O1xyXG4gXHJcbn1cclxuXHJcbi5sb2dvIC5jb250ZW50LWxvZ297XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgIFxyXG4gICAgXHJcbn1cclxuLmRhcmsgLmxvZ28gLmNvbnRlbnQtbG9nb3tcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBcclxuICAgIFxyXG59XHJcblxyXG4uY29udGVudC1sb2dvIGEgaSAge1xyXG4gICAgZm9udC1zaXplOiA0MHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG59XHJcblxyXG4uY29udGVudC1sb2dvIGEge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjb2xvcjogdmFyKC0tdHh0LWRhcmspO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA0cHg7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgIFxyXG59XHJcbi5jb250ZW50LWxvZ28gYTpob3ZlcntcclxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1ob3Zlcik7XHJcbiAgIFxyXG59XHJcbi5kYXJrIC5jb250ZW50LWxvZ28gYSB7XHJcbiAgICBjb2xvcjogcmdiKDIwNCwgMjA0LCAyMDQpOyBcclxuICAgXHJcbn1cclxuLmRhcmsgLmNvbnRlbnQtbG9nbyBhOmhvdmVye1xyXG4gICAgXHJcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItaG92ZXIpO1xyXG59XHJcblxyXG4vKiAuY29udGVudC1sb2dvIGEgaTpob3ZlciB7XHJcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItaG92ZXIpO1xyXG59XHJcblxyXG4uZGFyayAuY29udGVudC1sb2dvIGEgaSB7XHJcbiAgICBjb2xvcjogcmdiKDIwNCwgMjA0LCAyMDQpOyBcclxufVxyXG5cclxuLmRhcmsgLmNvbnRlbnQtbG9nbyBhIGk6aG92ZXIge1xyXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLWhvdmVyKTtcclxufSAqL1xyXG5cclxuLmNvbnRlbnQtbG9nbyAgc3BhbntcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG5cclxuLypTZWFyY2hoLS0tLS0tKi9cclxuXHJcblxyXG4ubmF2LWJhciAuY29udGVuZWRvci1uYXZ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgXHJcbn1cclxuXHJcbi5uYXYtYmFyIC5jb250ZW5lZG9yLW5hdiAubWVudXtcclxuICAgd2lkdGg6IGF1dG87XHJcbiAgIGhlaWdodDogMTAwJTtcclxuICAgZGlzcGxheTogZmxleDtcclxuICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgcmlnaHQ6IDBweDtcclxuICAgXHJcbn1cclxuXHJcblxyXG5cclxuLm1lbnUgLmxpbmtzICB7XHJcbiAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgIGhlaWdodDogMTAwJTtcclxuICAgICBib3R0b206IDBweDtcclxuICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgIHBhZGRpbmc6IDVweDtcclxuICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIGVhc2UtaW4gLjVzO1xyXG4gICAgXHJcbiAgIFxyXG59XHJcblxyXG4ubWVudSAuY2hhbmdlICB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogODBweDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJvdHRvbTogMHB4O1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgZWFzZS1pbiAuNXM7XHJcbiAgIFxyXG4gIFxyXG59XHJcblxyXG4ubmF2LWJhciAuY29udGVuZWRvci1uYXYgIC5tZW51ICAuZGFya2Vke1xyXG4gICAgXHJcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWJvcmRlcnMpO1xyXG4gICAgY29sb3I6IHZhcigtLXR4dC13aGl0ZSk7XHJcbn1cclxuXHJcblxyXG5cclxuLmxpbmtzIGF7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xyXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgXHJcbiAgIFxyXG59XHJcblxyXG4uZGFya2VkIGEge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcbiBcclxuICAgIFxyXG4ubGlua3MgYSBzcGFue1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICBcclxufVxyXG5cclxuLmxpbmtzIGEgaXtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxufVxyXG5cclxuLmxpbmtzIGE6aG92ZXJ7XHJcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItaG92ZXIpO1xyXG59XHJcblxyXG5cclxuXHJcbi5saW5rcyAuYWN0aXZle1xyXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLWhvdmVyKTs7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbi5saW5rczpob3ZlcntcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XHJcbn0gIFxyXG5cclxuLmJ0LW1lbnV7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogODAwcHgpe1xyXG5cclxuICAgIC5uYXYtYmFyIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgIFxyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgfVxyXG5cclxuICAgIC5uYXYtYmFyIC5jb250ZW5lZG9yLW5hdntcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgIH1cclxuXHJcbiAgICAubG9nb3tcclxuICAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBcclxuICAgIH1cclxuICAgXHJcbiAgICAuY29udGVudC1sb2dvIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIFxyXG4gICAgIH1cclxuICAgIC5sb2dvIC5zZWFyY2hze1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcblxyXG4gICBcclxuICAgLm1lbnUgLmxpbmtze1xyXG4gICAgICAgIHdpZHRoOiA0NXB4O1xyXG4gICAgICAgIG1hcmdpbjogMHB4IDJweDtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgfVxyXG5cclxuICAgIC5saW5rcyBhIHNwYW57XHJcbiAgICAgICAgZm9udC1zaXplOiAwLjVyZW07XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICAubG9nbyBhIGl7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICAgICAgbWFyZ2luOiAxcHg7XHJcbiAgICAgICAgcGFkZGluZzogMXB4O1xyXG4gICAgfVxyXG4gICAgLmxvZ28gYSBzcGFue1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgICBtYXJnaW46IDFweDtcclxuICAgICAgICBwYWRkaW5nOiAxcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmxvZ28gYXtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBcclxuICAgIC5saW5rcyBhIGl7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXHJcbiJdfQ== */"] });


/***/ }),

/***/ "kgjW":
/*!************************************!*\
  !*** ./src/app/utils/animation.ts ***!
  \************************************/
/*! exports provided: scroll, checkScroll, checkStart, checkFinal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scroll", function() { return scroll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkScroll", function() { return checkScroll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkStart", function() { return checkStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkFinal", function() { return checkFinal; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "R0Ic");

const scroll = [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('scrollAnimation', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('scrolled', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            left: '50px',
            opacity: '0',
        })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('normal', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            right: '0px',
            opacity: '1',
        })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('scrolled => normal', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('1s ease')),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('normal => scrolled', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('1s ease'))
    ])
];
const checkScroll = (el) => {
    const componentPosition = el.nativeElement.offsetTop;
    const componentPositionB = componentPosition + el.nativeElement.clientHeight;
    const scrollPosition = window.pageYOffset;
    if (scrollPosition < componentPosition - 400 || scrollPosition > componentPositionB - 50) {
        console.log("Scrolled");
        return 'scrolled';
    }
    else {
        console.log("normal");
        return 'normal';
    }
};
const checkStart = (state) => {
    // const componentPositionB = el.nativeElement.offsetTop + (el.nativeElement.offsetHeight );
    // const scrollPosition = window.pageYOffset
    return state = state === 'scrolled' ? 'normal' : '';
    // if ( scrollPosition > componentPositionB  ) {
    //     return 'scrolled'
    // } else {
    //     return 'normal'
    // }
};
const checkFinal = (el) => {
    const componentPosition = el.nativeElement.offsetTop;
    const scrollPosition = window.pageYOffset;
    if (scrollPosition < componentPosition - 400) {
        return 'scrolled';
    }
    else {
        return 'normal';
    }
};


/***/ }),

/***/ "myQx":
/*!********************************************************!*\
  !*** ./src/app/technologies/technologies.component.ts ***!
  \********************************************************/
/*! exports provided: TechnologiesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TechnologiesComponent", function() { return TechnologiesComponent; });
/* harmony import */ var _utils_animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/animation */ "kgjW");
/* harmony import */ var _tenchnoligies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tenchnoligies */ "3hPs");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");




function TechnologiesComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("src", item_r1.icon_url, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r1.name);
} }
class TechnologiesComponent {
    constructor(el) {
        this.el = el;
        this.state = 'scrolled';
        this.technologies = _tenchnoligies__WEBPACK_IMPORTED_MODULE_1__["technologies"];
    }
    ngOnInit() {
    }
    listener() {
        this.state = Object(_utils_animation__WEBPACK_IMPORTED_MODULE_0__["checkScroll"])(this.el);
    }
}
TechnologiesComponent.ɵfac = function TechnologiesComponent_Factory(t) { return new (t || TechnologiesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"])); };
TechnologiesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: TechnologiesComponent, selectors: [["app-technologies"]], hostBindings: function TechnologiesComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("scroll", function TechnologiesComponent_scroll_HostBindingHandler($event) { return ctx.listener($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresolveWindow"]);
    } }, decls: 6, vars: 2, consts: [["id", "Tecnologies", 1, "content-technologies"], [1, "content-title"], [1, "grid-content"], [4, "ngFor", "ngForOf"], [1, "item"], [1, "tecnologies-icon"], ["alt", "", 3, "src"], [1, "tecnologie-name"]], template: function TechnologiesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Tecnologies");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, TechnologiesComponent_div_5_Template, 7, 2, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("@scrollAnimation", ctx.state);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.technologies);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], styles: [".content-technologies[_ngcontent-%COMP%]{\r\n    position: relative;\r\n    margin: 50px auto;\r\n    width: 100%;\r\n    border-radius: 5px;\r\n    box-sizing: border-box;\r\n    padding: 10px;  \r\n    text-align: center;\r\n    border-radius: 10px;\r\n    box-shadow: 4px 4px 8px 5px rgba(0, 0, 0, 0.2);\r\n}\r\n\r\n.content-technologies[_ngcontent-%COMP%]   .content-title[_ngcontent-%COMP%]{\r\n    width: 250px;\r\n    margin: 20px auto;\r\n    color: var(--txt-dark);\r\n    text-align: center;\r\n    border-bottom: 5px solid;\r\n    border-color: var( --color-hover);\r\n    cursor: default;\r\n}\r\n\r\n.dark[_ngcontent-%COMP%]   .content-title[_ngcontent-%COMP%]{\r\n    color: var(--txt-white);\r\n}\r\n\r\n.content-technologies[_ngcontent-%COMP%]   .grid-content[_ngcontent-%COMP%]{\r\n    box-sizing: border-box;\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;\r\n  \r\n    \r\n}\r\n\r\n.grid-content[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]{\r\n    box-sizing: border-box;\r\n    position: relative;\r\n    max-width: 70%;\r\n    margin: 5px auto;\r\n    border-radius: 8px;\r\n    max-height: 300px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n    padding: 10px;\r\n    background: var(--bg-item-light);\r\n    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);\r\n    cursor: pointer;\r\n}\r\n\r\n.dark[_ngcontent-%COMP%]   .grid-content[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%] {\r\n    color: var(--txt-white);\r\n    border-color: var(--txt-white);\r\n      \r\n}\r\n\r\n.item[_ngcontent-%COMP%]   .tecnologies-icon[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    height: 100%;\r\n    box-sizing: border-box;\r\n    object-fit: cover;\r\n    background-color: white;\r\n    border-radius: 5px;\r\n}\r\n\r\n.tecnologies-icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    height: 100%;\r\n   \r\n}\r\n\r\n.item[_ngcontent-%COMP%]   .tecnologie-name[_ngcontent-%COMP%]{\r\n    color: var(--txt-white) !important;\r\n  position: absolute; \r\n  bottom: 10%;\r\n  visibility: hidden;\r\n  transition: all 200ms ease-in-out;\r\n}\r\n\r\n.tecnologie-name[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n}\r\n\r\n.item[_ngcontent-%COMP%]:hover   .tecnologie-name[_ngcontent-%COMP%]{\r\n    \r\n    visibility: visible;\r\n    background: rgba(79, 79, 79, 0.748);\r\n    padding: 5px;\r\n    border-radius:5px;\r\n    font-size: 20px;\r\n    z-index: 1000;\r\n  \r\n   \r\n  \r\n}\r\n\r\n@media screen and (max-width: 800px) {\r\n    .content-technologies[_ngcontent-%COMP%]   .grid-content[_ngcontent-%COMP%]{\r\n        grid-template-columns: 1fr 1fr 1fr;\r\n\r\n     \r\n    }\r\n    .grid-content[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]{\r\n        max-width: 80%;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlY2hub2xvZ2llcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0QixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQiw4Q0FBOEM7QUFDbEQ7O0FBRUE7SUFDSSxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsd0JBQXdCO0lBQ3hCLGlDQUFpQztJQUNqQyxlQUFlO0FBQ25COztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUdBO0lBQ0ksc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYiwwQ0FBMEM7OztBQUc5Qzs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixhQUFhO0lBQ2IsZ0NBQWdDO0lBQ2hDLDhDQUE4QztJQUM5QyxlQUFlO0FBQ25COztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLDhCQUE4Qjs7QUFFbEM7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLHNCQUFzQjtJQUN0QixpQkFBaUI7SUFDakIsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZOztBQUVoQjs7QUFFQTtJQUNJLGtDQUFrQztFQUNwQyxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixpQ0FBaUM7QUFDbkM7O0FBQ0E7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7O0lBRUksbUJBQW1CO0lBQ25CLG1DQUFtQztJQUNuQyxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixhQUFhOzs7O0FBSWpCOztBQUVBO0lBQ0k7UUFDSSxrQ0FBa0M7OztJQUd0QztJQUNBO1FBQ0ksY0FBYztJQUNsQjtBQUNKIiwiZmlsZSI6InRlY2hub2xvZ2llcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnQtdGVjaG5vbG9naWVze1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWFyZ2luOiA1MHB4IGF1dG87XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBwYWRkaW5nOiAxMHB4OyAgXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgYm94LXNoYWRvdzogNHB4IDRweCA4cHggNXB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxufVxyXG5cclxuLmNvbnRlbnQtdGVjaG5vbG9naWVzIC5jb250ZW50LXRpdGxle1xyXG4gICAgd2lkdGg6IDI1MHB4O1xyXG4gICAgbWFyZ2luOiAyMHB4IGF1dG87XHJcbiAgICBjb2xvcjogdmFyKC0tdHh0LWRhcmspO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkO1xyXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoIC0tY29sb3ItaG92ZXIpO1xyXG4gICAgY3Vyc29yOiBkZWZhdWx0O1xyXG59XHJcblxyXG4uZGFyayAuY29udGVudC10aXRsZXtcclxuICAgIGNvbG9yOiB2YXIoLS10eHQtd2hpdGUpO1xyXG59XHJcblxyXG5cclxuLmNvbnRlbnQtdGVjaG5vbG9naWVzIC5ncmlkLWNvbnRlbnR7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnIgMWZyIDFmcjtcclxuICBcclxuICAgIFxyXG59XHJcblxyXG4uZ3JpZC1jb250ZW50IC5pdGVte1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1heC13aWR0aDogNzAlO1xyXG4gICAgbWFyZ2luOiA1cHggYXV0bztcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIG1heC1oZWlnaHQ6IDMwMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0tYmctaXRlbS1saWdodCk7XHJcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDJweCAxcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uZGFyayAuZ3JpZC1jb250ZW50IC5pdGVtIHtcclxuICAgIGNvbG9yOiB2YXIoLS10eHQtd2hpdGUpO1xyXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS10eHQtd2hpdGUpO1xyXG4gICAgICBcclxufVxyXG5cclxuLml0ZW0gLnRlY25vbG9naWVzLWljb257XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcblxyXG4udGVjbm9sb2dpZXMtaWNvbiBpbWd7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgXHJcbn1cclxuXHJcbi5pdGVtIC50ZWNub2xvZ2llLW5hbWV7XHJcbiAgICBjb2xvcjogdmFyKC0tdHh0LXdoaXRlKSAhaW1wb3J0YW50O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTsgXHJcbiAgYm90dG9tOiAxMCU7XHJcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gIHRyYW5zaXRpb246IGFsbCAyMDBtcyBlYXNlLWluLW91dDtcclxufVxyXG4udGVjbm9sb2dpZS1uYW1lIGgxe1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5pdGVtOmhvdmVyIC50ZWNub2xvZ2llLW5hbWV7XHJcbiAgICBcclxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDc5LCA3OSwgNzksIDAuNzQ4KTtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6NXB4O1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgei1pbmRleDogMTAwMDtcclxuICBcclxuICAgXHJcbiAgXHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XHJcbiAgICAuY29udGVudC10ZWNobm9sb2dpZXMgLmdyaWQtY29udGVudHtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xyXG5cclxuICAgICBcclxuICAgIH1cclxuICAgIC5ncmlkLWNvbnRlbnQgLml0ZW17XHJcbiAgICAgICAgbWF4LXdpZHRoOiA4MCU7XHJcbiAgICB9XHJcbn1cclxuXHJcbiJdfQ== */"], data: { animation: [_utils_animation__WEBPACK_IMPORTED_MODULE_0__["scroll"]] } });


/***/ }),

/***/ "oR3K":
/*!**************************************************!*\
  !*** ./src/app/navbar/change-theme.directive.ts ***!
  \**************************************************/
/*! exports provided: ChangeThemeDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangeThemeDirective", function() { return ChangeThemeDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class ChangeThemeDirective {
    constructor(eleRef, renderer) {
        this.eleRef = eleRef;
        this.renderer = renderer;
    }
}
ChangeThemeDirective.ɵfac = function ChangeThemeDirective_Factory(t) { return new (t || ChangeThemeDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"])); };
ChangeThemeDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: ChangeThemeDirective, selectors: [["", "appChangeTheme", ""]], inputs: { bankName: "bankName", id: ["account-id", "id"] } });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ }),

/***/ "zyDg":
/*!**************************************************!*\
  !*** ./src/app/portfolio/portfolio.component.ts ***!
  \**************************************************/
/*! exports provided: PortfolioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortfolioComponent", function() { return PortfolioComponent; });
/* harmony import */ var _utils_animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/animation */ "kgjW");
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/firestore */ "5x/H");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _utils_emails_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/emails.service */ "k1px");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");





function PortfolioComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "h2", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("src", data_r1.url_img, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](data_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](data_r1.description);
} }
class PortfolioComponent {
    constructor(el, _emailsService) {
        this.el = el;
        this._emailsService = _emailsService;
        this.items = null;
        this.state = 'scrolled';
    }
    ngOnInit() {
        this._emailsService.getProyects().subscribe(result => {
            this.items = result.projects;
        });
    }
    listener() {
        this.state = Object(_utils_animation__WEBPACK_IMPORTED_MODULE_0__["checkScroll"])(this.el);
    }
}
PortfolioComponent.ɵfac = function PortfolioComponent_Factory(t) { return new (t || PortfolioComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_utils_emails_service__WEBPACK_IMPORTED_MODULE_3__["EmailsService"])); };
PortfolioComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: PortfolioComponent, selectors: [["app-portfolio"]], hostBindings: function PortfolioComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("scroll", function PortfolioComponent_scroll_HostBindingHandler($event) { return ctx.listener($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresolveWindow"]);
    } }, decls: 6, vars: 2, consts: [[1, "content-portfolio"], [1, "content-title"], [1, "grid-content"], [4, "ngFor", "ngForOf"], [1, "item"], [1, "item-img"], ["alt", "", 1, "img-responsive", 3, "src"], [1, "item-title"], [1, "title"], [1, "item-text"]], template: function PortfolioComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Portfolio");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, PortfolioComponent_div_5_Template, 10, 3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("@scrollAnimation", ctx.state);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.items);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], styles: [".content-portfolio[_ngcontent-%COMP%]{\r\n    margin: 40px auto;\r\n    position: relative;\r\n    width: 100%;\r\n    border-radius: 5px;\r\n    box-sizing: border-box;\r\n    padding: 10px;  \r\n    border-radius: 10px;\r\n    box-shadow: 4px 4px 8px 5px rgba(0, 0, 0, 0.2);\r\n}\r\n\r\n.content-portfolio[_ngcontent-%COMP%]   .content-title[_ngcontent-%COMP%]{\r\n    width: 200px;\r\n    margin: 20px auto;\r\n    color: var(--txt-dark);\r\n    text-align: center;\r\n    border-bottom: 5px solid;\r\n    border-color: var( --color-hover);\r\n    cursor: default;\r\n}\r\n\r\n.dark[_ngcontent-%COMP%]   .content-title[_ngcontent-%COMP%] {\r\n    color: var(--txt-white);\r\n   \r\n}\r\n\r\n.dark[_ngcontent-%COMP%]   .grid-content[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%] {\r\n    background-color: var(--bg-item-light);\r\n    color: var(--txt-white);\r\n    border-color: var(--txt-white);\r\n   \r\n}\r\n\r\n.grid-content[_ngcontent-%COMP%]{\r\n  \r\n    width: 100%;\r\n    display: flex;\r\n    padding: 5px;\r\n    align-items: center;\r\n    justify-content: center;\r\n    flex-wrap: wrap;\r\n    overflow: hidden;\r\n  \r\n}\r\n\r\n.grid-content[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]{\r\n    \r\n    margin-top: 10px;\r\n    margin-left: 10px;\r\n    margin-right: 10px;\r\n    border-radius: 3px;\r\n    padding: 10px;\r\n    box-sizing: border-box;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    background: var(--bg-item-light);\r\n    color: white;\r\n    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);\r\n    position: relative;\r\n   \r\n  \r\n}\r\n\r\n.item[_ngcontent-%COMP%]   .item-img[_ngcontent-%COMP%]{\r\n  width: 400px;\r\n  height: 190px;\r\n  overflow: hidden;\r\n  top: 0;\r\n  margin: 0 auto;\r\n  cursor: pointer;\r\n  position: relative;\r\n\r\n\r\n}\r\n\r\n.item[_ngcontent-%COMP%]   .item-img[_ngcontent-%COMP%]::after{\r\n    position: absolute;\r\n    content: \"\";\r\n    right: -100%;\r\n    top:0;\r\n    width: 100%;\r\n    height: 100%;\r\n    background: rgba(0, 0, 0, 0.007);\r\n    transition: all 1000ms ease; \r\n}\r\n\r\n.item[_ngcontent-%COMP%]   .item-img[_ngcontent-%COMP%]:hover::after{\r\n    background: rgba(0, 0, 0, 0.63);\r\n    right:0;\r\n}\r\n\r\n.item[_ngcontent-%COMP%]   .item-img[_ngcontent-%COMP%]:hover    ~ .item-text[_ngcontent-%COMP%], .item[_ngcontent-%COMP%]   .item-img[_ngcontent-%COMP%]:hover    ~ .item-title[_ngcontent-%COMP%]\r\n   {\r\n   \r\n    opacity: 1;\r\n}\r\n\r\n.item[_ngcontent-%COMP%]   .item-text[_ngcontent-%COMP%]{\r\n    opacity: 0;\r\n    overflow: hidden;\r\n    margin: 10px;\r\n    padding : 5px;;\r\n    flex: end;\r\n    font-size: 14px;\r\n    transition: opacity 500ms ease;\r\n    position:absolute;\r\n    z-index: 10;\r\n    bottom: 5;\r\n    pointer-events:none;\r\n}\r\n\r\n.item[_ngcontent-%COMP%]   .item-title[_ngcontent-%COMP%]{\r\n    z-index: 10;\r\n    top: 0;\r\n    box-sizing:border-box;\r\n    padding: 5px 5px;\r\n    margin: 10px;\r\n    height: 40px;\r\n    opacity: 0;\r\n    transition: opacity 1s ease;\r\n    position: absolute;\r\n    pointer-events:none;\r\n   \r\n}\r\n\r\n.item[_ngcontent-%COMP%]   .item-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n\twidth: 150%;\r\n\theight: 150%;\r\n\t\r\n}\r\n\r\n.item-img[_ngcontent-%COMP%]   img.img-responsive[_ngcontent-%COMP%]{\r\n    object-fit: cover;\r\n     }\r\n\r\n@media screen and (max-width: 800px){\r\n    \r\n    .grid-content[_ngcontent-%COMP%]{\r\n        width: 100%;\r\n        display: block;\r\n        margin: 1px;\r\n        padding: 5px;\r\n\r\n    }\r\n\r\n    .grid-content[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]{\r\n        width: 100%;\r\n        height: 200px;\r\n        margin: 5px auto;\r\n    }\r\n    .item[_ngcontent-%COMP%]   .item-img[_ngcontent-%COMP%]{\r\n        width: 100%;\r\n        height: 100%;\r\n    }\r\n\r\n    \r\n    \r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvcnRmb2xpby5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJDQUFDO0lBQ0csaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0QixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDhDQUE4QztBQUNsRDs7QUFFQTtJQUNJLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQix3QkFBd0I7SUFDeEIsaUNBQWlDO0lBQ2pDLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSx1QkFBdUI7O0FBRTNCOztBQUNBO0lBQ0ksc0NBQXNDO0lBQ3RDLHVCQUF1QjtJQUN2Qiw4QkFBOEI7O0FBRWxDOztBQUVBOztJQUVJLFdBQVc7SUFDWCxhQUFhO0lBQ2IsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsZUFBZTtJQUNmLGdCQUFnQjs7QUFFcEI7O0FBRUE7SUFDSTs7O3dCQUdvQjtJQUNwQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixnQ0FBZ0M7SUFDaEMsWUFBWTtJQUNaLDhDQUE4QztJQUM5QyxrQkFBa0I7OztBQUd0Qjs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLE1BQU07RUFDTixjQUFjO0VBQ2QsZUFBZTtFQUNmLGtCQUFrQjs7O0FBR3BCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0lBQ1osS0FBSztJQUNMLFdBQVc7SUFDWCxZQUFZO0lBQ1osZ0NBQWdDO0lBQ2hDLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLCtCQUErQjtJQUMvQixPQUFPO0FBQ1g7O0FBR0E7Ozs7SUFJSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixhQUFhO0lBQ2IsU0FBUztJQUNULGVBQWU7SUFDZiw4QkFBOEI7SUFDOUIsaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCxTQUFTO0lBQ1QsbUJBQW1CO0FBQ3ZCOztBQUNBO0lBQ0ksV0FBVztJQUNYLE1BQU07SUFDTixxQkFBcUI7SUFDckIsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixZQUFZO0lBQ1osVUFBVTtJQUNWLDJCQUEyQjtJQUMzQixrQkFBa0I7SUFDbEIsbUJBQW1COztBQUV2Qjs7QUFFQTtDQUNDLFdBQVc7Q0FDWCxZQUFZOztBQUViOztBQUVDO0lBQ0csaUJBQWlCO0tBQ2hCOztBQUdIOztJQUVFO1FBQ0ksV0FBVztRQUNYLGNBQWM7UUFDZCxXQUFXO1FBQ1gsWUFBWTs7SUFFaEI7O0lBRUE7UUFDSSxXQUFXO1FBQ1gsYUFBYTtRQUNiLGdCQUFnQjtJQUNwQjtJQUNBO1FBQ0ksV0FBVztRQUNYLFlBQVk7SUFDaEI7Ozs7RUFJRiIsImZpbGUiOiJwb3J0Zm9saW8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiAuY29udGVudC1wb3J0Zm9saW97XHJcbiAgICBtYXJnaW46IDQwcHggYXV0bztcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIHBhZGRpbmc6IDEwcHg7ICBcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBib3gtc2hhZG93OiA0cHggNHB4IDhweCA1cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG59XHJcblxyXG4uY29udGVudC1wb3J0Zm9saW8gLmNvbnRlbnQtdGl0bGV7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgICBtYXJnaW46IDIwcHggYXV0bztcclxuICAgIGNvbG9yOiB2YXIoLS10eHQtZGFyayk7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBib3JkZXItYm90dG9tOiA1cHggc29saWQ7XHJcbiAgICBib3JkZXItY29sb3I6IHZhciggLS1jb2xvci1ob3Zlcik7XHJcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XHJcbn1cclxuXHJcbi5kYXJrIC5jb250ZW50LXRpdGxlIHtcclxuICAgIGNvbG9yOiB2YXIoLS10eHQtd2hpdGUpO1xyXG4gICBcclxufVxyXG4uZGFyayAuZ3JpZC1jb250ZW50IC5pdGVtIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWl0ZW0tbGlnaHQpO1xyXG4gICAgY29sb3I6IHZhcigtLXR4dC13aGl0ZSk7XHJcbiAgICBib3JkZXItY29sb3I6IHZhcigtLXR4dC13aGl0ZSk7XHJcbiAgIFxyXG59XHJcblxyXG4uZ3JpZC1jb250ZW50e1xyXG4gIFxyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBcclxufVxyXG5cclxuLmdyaWQtY29udGVudCAuaXRlbXtcclxuICAgIC8qIHdpZHRoOiA0MDBweDtcclxuICAgIGhlaWdodDogNDAwcHg7XHJcbiAgICBtYXgtd2lkdGg6IDQwMHB4O1xyXG4gICAgbWF4LWhlaWdodDogNDAwcHg7ICovXHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1pdGVtLWxpZ2h0KTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJveC1zaGFkb3c6IDJweCAycHggMnB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgIFxyXG4gIFxyXG59XHJcblxyXG4uaXRlbSAuaXRlbS1pbWd7XHJcbiAgd2lkdGg6IDQwMHB4O1xyXG4gIGhlaWdodDogMTkwcHg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB0b3A6IDA7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcblxyXG59XHJcblxyXG4uaXRlbSAuaXRlbS1pbWc6OmFmdGVye1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIHJpZ2h0OiAtMTAwJTtcclxuICAgIHRvcDowO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMDA3KTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAxMDAwbXMgZWFzZTsgXHJcbn0gXHJcblxyXG4uaXRlbSAuaXRlbS1pbWc6aG92ZXI6OmFmdGVye1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjYzKTtcclxuICAgIHJpZ2h0OjA7XHJcbn1cclxuXHJcblxyXG4uaXRlbSAuaXRlbS1pbWc6aG92ZXIgfiAuaXRlbS10ZXh0LFxyXG4uaXRlbSAuaXRlbS1pbWc6aG92ZXIgfiAuaXRlbS10aXRsZVxyXG4gICB7XHJcbiAgIFxyXG4gICAgb3BhY2l0eTogMTtcclxufVxyXG5cclxuLml0ZW0gLml0ZW0tdGV4dHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgcGFkZGluZyA6IDVweDs7XHJcbiAgICBmbGV4OiBlbmQ7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDUwMG1zIGVhc2U7XHJcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgIHotaW5kZXg6IDEwO1xyXG4gICAgYm90dG9tOiA1O1xyXG4gICAgcG9pbnRlci1ldmVudHM6bm9uZTtcclxufVxyXG4uaXRlbSAuaXRlbS10aXRsZXtcclxuICAgIHotaW5kZXg6IDEwO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgYm94LXNpemluZzpib3JkZXItYm94O1xyXG4gICAgcGFkZGluZzogNXB4IDVweDtcclxuICAgIG1hcmdpbjogMTBweDtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDFzIGVhc2U7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBwb2ludGVyLWV2ZW50czpub25lO1xyXG4gICBcclxufVxyXG5cclxuLml0ZW0gLml0ZW0taW1nIGltZyB7XHJcblx0d2lkdGg6IDE1MCU7XHJcblx0aGVpZ2h0OiAxNTAlO1xyXG5cdFxyXG59XHJcblxyXG4gLml0ZW0taW1nIGltZy5pbWctcmVzcG9uc2l2ZXtcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgIH1cclxuXHJcblxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KXtcclxuICAgIFxyXG4gICAgLmdyaWQtY29udGVudHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBtYXJnaW46IDFweDtcclxuICAgICAgICBwYWRkaW5nOiA1cHg7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC5ncmlkLWNvbnRlbnQgLml0ZW17XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAyMDBweDtcclxuICAgICAgICBtYXJnaW46IDVweCBhdXRvO1xyXG4gICAgfVxyXG4gICAgLml0ZW0gLml0ZW0taW1ne1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgIH1cclxuXHJcbiAgICBcclxuICAgIFxyXG4gIH0iXX0= */"], data: { animation: [_utils_animation__WEBPACK_IMPORTED_MODULE_0__["scroll"]] } });


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map