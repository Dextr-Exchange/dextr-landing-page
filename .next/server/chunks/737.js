exports.id = 737;
exports.ids = [737];
exports.modules = {

/***/ 8526:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 2927, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 9967));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 209, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 8124, 23))

/***/ }),

/***/ 3247:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 3858))

/***/ }),

/***/ 3279:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ header)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(8421);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./src/app/images/companylogo.svg
/* harmony default export */ const companylogo = ({"src":"/_next/static/media/companylogo.a466db2d.svg","height":54,"width":202,"blurWidth":0,"blurHeight":0});
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1621);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(8038);
// EXTERNAL MODULE: ./node_modules/react-icons/hi/index.esm.js
var index_esm = __webpack_require__(5655);
// EXTERNAL MODULE: ./node_modules/react-icons/ai/index.esm.js
var ai_index_esm = __webpack_require__(9722);
// EXTERNAL MODULE: ./node_modules/react-icons/fa/index.esm.js
var fa_index_esm = __webpack_require__(6775);
// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/render/dom/motion.mjs + 219 modules
var motion = __webpack_require__(9591);
;// CONCATENATED MODULE: ./src/app/components/v2/header.tsx









const Header = ()=>{
    const [toggleMenu, setToggleMenu] = (0,react_.useState)(false);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(motion/* motion */.E.a, {
                className: "bg-black text-gray-100 py-3 px-2 flex banner h-8 w-full justify-center items-center cursor-pointer font-semibold ease-in-out duration-500 hover:scale-105 max-sm:text-xs",
                href: "https://twitter.com/Dextr_Exchange/status/1772980594705621318?t=Pw77powQ1MDvOLPo3lWnKA&s=19",
                target: "_blank",
                initial: {
                    opacity: 0,
                    y: -50
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    duration: 0.5
                },
                children: [
                    "Applications Live \uD83D\uDD25 : Dextr Genius Guild!",
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                        className: "rounded-lg flex items-center gap-2 text-sm ml-5 bg-[#b12a29] p-2 max-sm:text-[8px]",
                        children: [
                            "Apply Now ",
                            /*#__PURE__*/ jsx_runtime_.jsx(fa_index_esm/* FaArrowCircleRight */.Wgy, {})
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(motion/* motion */.E.header, {
                className: "flex justify-between items-center py-6 px-12 max-sm:px-6",
                initial: {
                    opacity: 0,
                    y: -50
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    duration: 1,
                    delay: 0.5
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/",
                        className: "flex items-center space-x-2 max-sm:space-x-0",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            src: companylogo,
                            alt: "Dextr Logo",
                            width: 150,
                            height: 100
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
                        className: "font-primary font-semibold text-gray-100 hidden lg:flex gap-12 justify-center items-center text-sm",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                href: "#features",
                                className: `hover:underline underline-offset-8 duration-150`,
                                children: "FEATURES"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                href: "https://dextr-protocol.gitbook.io/dextr-mcamm-whitepaper-v3.0/",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: `hover:underline underline-offset-8 duration-150 `,
                                children: " WHITEPAPER "
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                href: "mailto:info@dextr.exchange",
                                className: `hover:underline underline-offset-8 duration-150`,
                                children: "CONTACT"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex relative mb-3",
                        children: [
                            !toggleMenu && /*#__PURE__*/ jsx_runtime_.jsx(index_esm/* HiMenuAlt4 */.iwI, {
                                fontSize: 28,
                                className: "text-white lg:hidden cursor-pointer h-full pt-3",
                                onClick: ()=>setToggleMenu(true)
                            }),
                            toggleMenu && /*#__PURE__*/ jsx_runtime_.jsx(ai_index_esm/* AiOutlineClose */.oHP, {
                                fontSize: 28,
                                className: "text-white hidden cursor-pointer",
                                onClick: ()=>setToggleMenu(false)
                            }),
                            toggleMenu && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                className: "z-10 fixed -top-0 -right-4 p-3 w-[60vw] h-full shadow-2xl lg:hidden gap-5 list-none flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        className: "text-xl w-full my-2 font-primary ",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(ai_index_esm/* AiOutlineClose */.oHP, {
                                            onClick: ()=>setToggleMenu(false)
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "#features",
                                        className: `hover:underline underline-offset-8 duration-150 mr-7`,
                                        children: "FEATURES"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        href: "https://dextr.gitbook.io/whitepaper/",
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: `hover:underline underline-offset-8 duration-150 mr-7`,
                                        children: "WHITEPAPER"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        href: "mailto:info@dextr.exchange",
                                        className: `hover:underline underline-offset-8 duration-150 mr-7`,
                                        children: "CONTACT"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        href: "https://forms.zohopublic.com/brainchain/form/DextrBetaProgram1/formperma/jwTVjPwh8O2gVFb0TZSSjuBkc-IluEevhgOxTLzDqeY?utm_source=twitter&utm_medium=Zoho+SocialmG",
                                        rel: "noopener noreferrer",
                                        target: "_blank",
                                        className: `font-primary font-semibold bg-gray-100 text-gray-800 px-4 py-2 rounded duration-150 mr-7`,
                                        children: "App Coming Soon"
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        href: "https://forms.zohopublic.com/brainchain/form/DextrBetaProgram1/formperma/jwTVjPwh8O2gVFb0TZSSjuBkc-IluEevhgOxTLzDqeY?utm_source=twitter&utm_medium=Zoho+SocialmG",
                        rel: "noopener noreferrer",
                        target: "_blank",
                        className: "hidden lg:block font-primary font-semibold bg-gray-100 text-gray-800 px-4 py-2 rounded",
                        children: "App Coming Soon"
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const header = (Header);


/***/ }),

/***/ 3858:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1621);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_v2_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3279);
/* __next_internal_client_entry_do_not_use__ default auto */ 


const Custom404 = ()=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "min-h-screen flex flex-col overflow-x-hidden bg-radial-gradient",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_v2_header__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "h-full mt-56 flex flex-col w-full justify-center items-center",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "text-5xl text-white font-bold",
                        children: "Opps.... Looks like you are lost"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                        className: "text-white text-base mt-10",
                        href: "/",
                        children: "Let us help you get back to home page by clicking here"
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Custom404);


/***/ }),

/***/ 6660:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RootLayout),
/* harmony export */   metadata: () => (/* binding */ metadata)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5553);
/* harmony import */ var _globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_globals_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9663);
/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_script__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _next_third_parties_google__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1084);




const metadata = {
    title: "Dextr Exchange",
    description: "Transform your on-chain liquidity with Dextr! Eliminate rebalancing losses and make your idle liquidity work for you. Discover the best prices and protect your profits with our comprehensive MEV insurance. Join us today and start unlocking your trading potential!"
};
function RootLayout({ children }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("html", {
        lang: "en",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("head", {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "icon",
                        type: "image",
                        href: "/dextr_icon_new.png"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_script__WEBPACK_IMPORTED_MODULE_2___default()), {
                        src: "https://cdn.pagesense.io/js/brainchain/f56e5f0b854a40d4a059d58ef7165b61.js"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("body", {
                className: "scroll-smooth",
                children: children
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_next_third_parties_google__WEBPACK_IMPORTED_MODULE_3__/* .GoogleAnalytics */ .Wi, {
                gaId: "G-H83B715197"
            })
        ]
    });
}


/***/ }),

/***/ 8708:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $$typeof: () => (/* binding */ $$typeof),
/* harmony export */   __esModule: () => (/* binding */ __esModule),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1913);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/kanishkchhabra/dextr/dextr-landing-page/src/app/not-found.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__default__);

/***/ }),

/***/ 5553:
/***/ (() => {



/***/ })

};
;