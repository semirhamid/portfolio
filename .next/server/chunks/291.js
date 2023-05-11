exports.id = 291;
exports.ids = [291];
exports.modules = {

/***/ 1837:
/***/ ((module) => {

// Exports
module.exports = {
	"primary__button": "Button_primary__button__6veBm",
	"secondary__button": "Button_secondary__button__VRJQm"
};


/***/ }),

/***/ 1266:
/***/ ((module) => {

// Exports
module.exports = {
	"cursor": "Cursor_cursor__uDRPa",
	"cursorFollower": "Cursor_cursorFollower__BlF3f"
};


/***/ }),

/***/ 7752:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _Button_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1837);
/* harmony import */ var _Button_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Button_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);



const Button = ({ href , onClick , children , classes , type , ...otherProps })=>{
    let additionalClasses = "";
    if (classes) {
        additionalClasses = classes;
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
        href: href,
        onClick: onClick,
        className: `
        ${type === "primary" ? !otherProps.disable ? (_Button_module_scss__WEBPACK_IMPORTED_MODULE_2___default().primary__button) : (_Button_module_scss__WEBPACK_IMPORTED_MODULE_2___default().primary__disabledButton) : !otherProps.disable ? (_Button_module_scss__WEBPACK_IMPORTED_MODULE_2___default().secondary__button) : (_Button_module_scss__WEBPACK_IMPORTED_MODULE_2___default().secondary__disabledButton)}
          ${additionalClasses}
      `,
        ...otherProps,
        children: children
    });
};
Button.propTypes = {
    href: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
    onClick: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
    children: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired),
    classes: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
    type: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Button);


/***/ }),

/***/ 3166:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4287);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gsap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Cursor_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1266);
/* harmony import */ var _Cursor_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Cursor_module_scss__WEBPACK_IMPORTED_MODULE_3__);




const Cursor = ({ isDesktop  })=>{
    const cursor = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const follower = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (isDesktop && document.body.clientWidth > 767) {
            follower.current.classList.remove("hidden");
            cursor.current.classList.remove("hidden");
            const moveCircle = (e)=>{
                gsap__WEBPACK_IMPORTED_MODULE_2__.gsap.to(cursor.current, {
                    x: e.clientX,
                    y: e.clientY,
                    duration: 0.1,
                    ease: gsap__WEBPACK_IMPORTED_MODULE_2__.Linear.easeNone
                });
                gsap__WEBPACK_IMPORTED_MODULE_2__.gsap.to(follower.current, {
                    x: e.clientX,
                    y: e.clientY,
                    duration: 0.3,
                    ease: gsap__WEBPACK_IMPORTED_MODULE_2__.Linear.easeNone
                });
            };
            const hover = ()=>{
                gsap__WEBPACK_IMPORTED_MODULE_2__.gsap.to(cursor.current, {
                    scale: 0.5,
                    duration: 0.3
                });
                gsap__WEBPACK_IMPORTED_MODULE_2__.gsap.to(follower.current, {
                    scale: 3,
                    duration: 0.3
                });
            };
            const unHover = ()=>{
                gsap__WEBPACK_IMPORTED_MODULE_2__.gsap.to(cursor.current, {
                    scale: 1,
                    duration: 0.3
                });
                gsap__WEBPACK_IMPORTED_MODULE_2__.gsap.to(follower.current, {
                    scale: 1,
                    duration: 0.3
                });
            };
            document.addEventListener("mousemove", moveCircle);
            document.querySelectorAll(".link").forEach((el)=>{
                el.addEventListener("mouseenter", hover);
                el.addEventListener("mouseleave", unHover);
            });
        }
    }, [
        cursor,
        follower,
        isDesktop
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                ref: cursor,
                className: `${(_Cursor_module_scss__WEBPACK_IMPORTED_MODULE_3___default().cursor)} fixed hidden w-4 h-4 select-none pointer-events-none z-50`
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                ref: follower,
                className: `${(_Cursor_module_scss__WEBPACK_IMPORTED_MODULE_3___default().cursorFollower)} fixed hidden w-10 h-10 select-none pointer-events-none z-50`
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Cursor);


/***/ })

};
;