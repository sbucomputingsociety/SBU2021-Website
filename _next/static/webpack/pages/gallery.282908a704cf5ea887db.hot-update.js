webpackHotUpdate_N_E("pages/gallery",{

/***/ "./pages/gallery.js":
/*!**************************!*\
  !*** ./pages/gallery.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GalleryPage; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_Lawrence_sbucomputingsociety_github_io_node_modules_next_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/extends */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var C_Users_Lawrence_sbucomputingsociety_github_io_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_icons_Camera__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/Camera */ "./node_modules/@material-ui/icons/Camera.js");
/* harmony import */ var _material_ui_icons_Camera__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Camera__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_icons_Palette__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/Palette */ "./node_modules/@material-ui/icons/Palette.js");
/* harmony import */ var _material_ui_icons_Palette__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Palette__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/Favorite */ "./node_modules/@material-ui/icons/Favorite.js");
/* harmony import */ var _material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var components_Header_Header_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! components/Header/Header.js */ "./components/Header/Header.js");
/* harmony import */ var components_Footer_Footer_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! components/Footer/Footer.js */ "./components/Footer/Footer.js");
/* harmony import */ var components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! components/CustomButtons/Button.js */ "./components/CustomButtons/Button.js");
/* harmony import */ var components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! components/Grid/GridContainer.js */ "./components/Grid/GridContainer.js");
/* harmony import */ var components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! components/Grid/GridItem.js */ "./components/Grid/GridItem.js");
/* harmony import */ var components_Header_HeaderLinks_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! components/Header/HeaderLinks.js */ "./components/Header/HeaderLinks.js");
/* harmony import */ var components_NavPills_NavPills_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! components/NavPills/NavPills.js */ "./components/NavPills/NavPills.js");
/* harmony import */ var components_Parallax_Parallax_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! components/Parallax/Parallax.js */ "./components/Parallax/Parallax.js");
/* harmony import */ var styles_jss_nextjs_material_kit_pages_sponsorsPage_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! styles/jss/nextjs-material-kit/pages/sponsorsPage.js */ "./styles/jss/nextjs-material-kit/pages/sponsorsPage.js");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! react-slick */ "./node_modules/react-slick/lib/index.js");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _material_ui_icons_LocationOn__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @material-ui/icons/LocationOn */ "./node_modules/@material-ui/icons/LocationOn.js");
/* harmony import */ var _material_ui_icons_LocationOn__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_LocationOn__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var components_Card_Card_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! components/Card/Card.js */ "./components/Card/Card.js");




var _jsxFileName = "C:\\Users\\Lawrence\\sbucomputingsociety.github.io\\pages\\gallery.js",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_Users_Lawrence_sbucomputingsociety_github_io_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

 // nodejs library that concatenates classes

 // @material-ui/core components

 // @material-ui/icons



 // core components









 // Carousel




var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["makeStyles"])(_objectSpread(_objectSpread({}, styles_jss_nextjs_material_kit_pages_sponsorsPage_js__WEBPACK_IMPORTED_MODULE_17__["default"]), {}, {
  carousel: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black'
  }
}));
function GalleryPage(props) {
  _s();

  var _this = this;

  var classes = useStyles();

  var rest = Object(C_Users_Lawrence_sbucomputingsociety_github_io_node_modules_next_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, props);

  var imageClasses = classnames__WEBPACK_IMPORTED_MODULE_4___default()(classes.imgRaised, classes.imgRoundedCircle, classes.imgFluid);
  var navImageClasses = classnames__WEBPACK_IMPORTED_MODULE_4___default()(classes.imgRounded, classes.imgGallery);
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1 // autoplay: true,

  };
  var fall2021images = [{
    src: '/img/gallery/involvementfair-fall2021.jpg',
    alt: 'CEAS Involvement Fair 2021',
    caption: 'CEAS Involvement Fair 2021'
  }, {
    src: '/img/gallery/gbm1-0-fall2021.png',
    alt: 'Meet the E-Board!',
    caption: 'Meet the E-Board!'
  }, {
    src: '/img/gallery/gbm1-1-fall2021.jpg',
    alt: 'GBM #1 Fall 2021',
    caption: 'GBM #1 Fall 2021'
  }, {
    src: '/img/gallery/gitworkshop-fall2021.JPG',
    alt: 'GBM #2: Git Workshop',
    caption: 'GBM #2: Git Workshop'
  }, {
    src: '/img/gallery/jeopardy-fall2021.jpg',
    alt: 'GBM #3: Jeopardy!',
    caption: 'GBM #3: Jeopardy!'
  }, {
    src: '/img/gallery/mummywrap-fall2021.png',
    alt: 'Mummy Wrapping',
    caption: 'Mummy Wrapping'
  }, {
    src: '/img/gallery/thanksgivingpotluck-fall2021.jpeg',
    alt: 'Thanksgiving Potluck',
    caption: 'Thanksgiving Potluck'
  }];
  var spring2022images = [];
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Header_Header_js__WEBPACK_IMPORTED_MODULE_9__["default"], _objectSpread({
      color: "transparent",
      brand: "Stony Brook Computing Society",
      rightLinks: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Header_HeaderLinks_js__WEBPACK_IMPORTED_MODULE_14__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 21
      }, this),
      fixed: true,
      changeColorOnScroll: {
        height: 60,
        color: 'white'
      }
    }, rest), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Parallax_Parallax_js__WEBPACK_IMPORTED_MODULE_16__["default"], {
      small: true,
      filter: true,
      image: "/img/profile-bg.jpg"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(classes.main, classes.mainRaised),
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: classes.container,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_12__["default"], {
            justify: "center",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_13__["default"], {
              xs: 12,
              sm: 12,
              md: 6,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                style: {
                  display: 'flex',
                  justifyContent: 'center',
                  flexDirection: 'column',
                  marginBottom: 100
                },
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
                  className: classes.title,
                  children: "Gallery"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 123,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: classes.description,
                  style: {
                    marginBottom: 20
                  },
                  children: ["Browse through our gallery to get a sense of what we do! If you'd like to contribute, please email us at", ' ', /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                    href: "mailto:sbucomputingsociety@gmail.com",
                    children: "sbucomputingsociety@gmail.com"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 130,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 124,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
                  children: "Fall 2021"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 134,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_slick__WEBPACK_IMPORTED_MODULE_18___default.a, _objectSpread(_objectSpread({
                  className: classes.carousel
                }, settings), {}, {
                  children: fall2021images.map(function (image) {
                    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                        src: image.src,
                        alt: image.alt,
                        className: "slick-image"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 138,
                        columnNumber: 25
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                        className: "slick-caption",
                        style: {
                          bottom: 0,
                          padding: 0,
                          backgroundColor: 'rgba(0,0,0,0.5)'
                        },
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
                          style: {
                            margin: 0
                          },
                          children: image.caption
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 151,
                          columnNumber: 27
                        }, _this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 143,
                        columnNumber: 25
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 137,
                      columnNumber: 23
                    }, _this);
                  })
                }), void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 135,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
                  children: "Spring 2022"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 156,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_slick__WEBPACK_IMPORTED_MODULE_18___default.a, _objectSpread(_objectSpread({}, settings), {}, {
                  children: spring2022images.map(function (image) {
                    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                        src: image.src,
                        alt: image.alt,
                        className: "slick-image"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 160,
                        columnNumber: 25
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                        className: "slick-caption",
                        style: {
                          bottom: 0,
                          padding: 0,
                          backgroundColor: 'rgba(0,0,0,0.5)'
                        },
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
                          style: {
                            margin: 0
                          },
                          children: image.caption
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 174,
                          columnNumber: 27
                        }, _this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 166,
                        columnNumber: 25
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 159,
                      columnNumber: 23
                    }, _this);
                  })
                }), void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 157,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 115,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 114,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 113,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 112,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Footer_Footer_js__WEBPACK_IMPORTED_MODULE_10__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 97,
    columnNumber: 5
  }, this);
}

_s(GalleryPage, "8g5FPXexvSEOsxdmU7HicukHGqY=", false, function () {
  return [useStyles];
});

_c = GalleryPage;

var _c;

$RefreshReg$(_c, "GalleryPage");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZ2FsbGVyeS5qcyJdLCJuYW1lcyI6WyJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwic3R5bGVzIiwiY2Fyb3VzZWwiLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwiYmFja2dyb3VuZENvbG9yIiwiR2FsbGVyeVBhZ2UiLCJwcm9wcyIsImNsYXNzZXMiLCJyZXN0IiwiaW1hZ2VDbGFzc2VzIiwiY2xhc3NOYW1lcyIsImltZ1JhaXNlZCIsImltZ1JvdW5kZWRDaXJjbGUiLCJpbWdGbHVpZCIsIm5hdkltYWdlQ2xhc3NlcyIsImltZ1JvdW5kZWQiLCJpbWdHYWxsZXJ5Iiwic2V0dGluZ3MiLCJkb3RzIiwiaW5maW5pdGUiLCJzcGVlZCIsInNsaWRlc1RvU2hvdyIsInNsaWRlc1RvU2Nyb2xsIiwiZmFsbDIwMjFpbWFnZXMiLCJzcmMiLCJhbHQiLCJjYXB0aW9uIiwic3ByaW5nMjAyMmltYWdlcyIsImhlaWdodCIsImNvbG9yIiwibWFpbiIsIm1haW5SYWlzZWQiLCJjb250YWluZXIiLCJmbGV4RGlyZWN0aW9uIiwibWFyZ2luQm90dG9tIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsIm1hcCIsImltYWdlIiwiYm90dG9tIiwicGFkZGluZyIsIm1hcmdpbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQUNBOztDQUVBOztDQUVBOztBQUNBO0FBQ0E7Q0FFQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0NBSUE7O0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsU0FBUyxHQUFHQywyRUFBVSxpQ0FDdkJDLDZGQUR1QjtBQUUxQkMsVUFBUSxFQUFFO0FBQ1JDLFdBQU8sRUFBRSxNQUREO0FBRVJDLGNBQVUsRUFBRSxRQUZKO0FBR1JDLGtCQUFjLEVBQUUsUUFIUjtBQUlSQyxtQkFBZSxFQUFFO0FB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OTA4YTcwNGNmNWVhODg3ZGIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbi8vIG5vZGVqcyBsaWJyYXJ5IHRoYXQgY29uY2F0ZW5hdGVzIGNsYXNzZXNcclxuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XHJcbi8vIEBtYXRlcmlhbC11aS9jb3JlIGNvbXBvbmVudHNcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbi8vIEBtYXRlcmlhbC11aS9pY29uc1xyXG5pbXBvcnQgQ2FtZXJhIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9DYW1lcmEnO1xyXG5pbXBvcnQgUGFsZXR0ZSBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvUGFsZXR0ZSc7XHJcbmltcG9ydCBGYXZvcml0ZSBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvRmF2b3JpdGUnO1xyXG4vLyBjb3JlIGNvbXBvbmVudHNcclxuaW1wb3J0IEhlYWRlciBmcm9tICdjb21wb25lbnRzL0hlYWRlci9IZWFkZXIuanMnO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJ2NvbXBvbmVudHMvRm9vdGVyL0Zvb3Rlci5qcyc7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAnY29tcG9uZW50cy9DdXN0b21CdXR0b25zL0J1dHRvbi5qcyc7XHJcbmltcG9ydCBHcmlkQ29udGFpbmVyIGZyb20gJ2NvbXBvbmVudHMvR3JpZC9HcmlkQ29udGFpbmVyLmpzJztcclxuaW1wb3J0IEdyaWRJdGVtIGZyb20gJ2NvbXBvbmVudHMvR3JpZC9HcmlkSXRlbS5qcyc7XHJcbmltcG9ydCBIZWFkZXJMaW5rcyBmcm9tICdjb21wb25lbnRzL0hlYWRlci9IZWFkZXJMaW5rcy5qcyc7XHJcbmltcG9ydCBOYXZQaWxscyBmcm9tICdjb21wb25lbnRzL05hdlBpbGxzL05hdlBpbGxzLmpzJztcclxuaW1wb3J0IFBhcmFsbGF4IGZyb20gJ2NvbXBvbmVudHMvUGFyYWxsYXgvUGFyYWxsYXguanMnO1xyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tICdzdHlsZXMvanNzL25leHRqcy1tYXRlcmlhbC1raXQvcGFnZXMvc3BvbnNvcnNQYWdlLmpzJztcclxuXHJcbi8vIENhcm91c2VsXHJcbmltcG9ydCBDYXJvdXNlbCBmcm9tICdyZWFjdC1zbGljayc7XHJcbmltcG9ydCBMb2NhdGlvbk9uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9Mb2NhdGlvbk9uJztcclxuaW1wb3J0IENhcmQgZnJvbSAnY29tcG9uZW50cy9DYXJkL0NhcmQuanMnO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh7XHJcbiAgLi4uc3R5bGVzLFxyXG4gIGNhcm91c2VsOiB7XHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxuICAgIGJhY2tncm91bmRDb2xvcjogJ2JsYWNrJyxcclxuICB9LFxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEdhbGxlcnlQYWdlKHByb3BzKSB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gIGNvbnN0IHsgLi4ucmVzdCB9ID0gcHJvcHM7XHJcbiAgY29uc3QgaW1hZ2VDbGFzc2VzID0gY2xhc3NOYW1lcyhcclxuICAgIGNsYXNzZXMuaW1nUmFpc2VkLFxyXG4gICAgY2xhc3Nlcy5pbWdSb3VuZGVkQ2lyY2xlLFxyXG4gICAgY2xhc3Nlcy5pbWdGbHVpZFxyXG4gICk7XHJcbiAgY29uc3QgbmF2SW1hZ2VDbGFzc2VzID0gY2xhc3NOYW1lcyhjbGFzc2VzLmltZ1JvdW5kZWQsIGNsYXNzZXMuaW1nR2FsbGVyeSk7XHJcblxyXG4gIGNvbnN0IHNldHRpbmdzID0ge1xyXG4gICAgZG90czogdHJ1ZSxcclxuICAgIGluZmluaXRlOiB0cnVlLFxyXG4gICAgc3BlZWQ6IDUwMCxcclxuICAgIHNsaWRlc1RvU2hvdzogMSxcclxuICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG4gICAgLy8gYXV0b3BsYXk6IHRydWUsXHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZmFsbDIwMjFpbWFnZXMgPSBbXHJcbiAgICB7XHJcbiAgICAgIHNyYzogJy9pbWcvZ2FsbGVyeS9pbnZvbHZlbWVudGZhaXItZmFsbDIwMjEuanBnJyxcclxuICAgICAgYWx0OiAnQ0VBUyBJbnZvbHZlbWVudCBGYWlyIDIwMjEnLFxyXG4gICAgICBjYXB0aW9uOiAnQ0VBUyBJbnZvbHZlbWVudCBGYWlyIDIwMjEnLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgc3JjOiAnL2ltZy9nYWxsZXJ5L2dibTEtMC1mYWxsMjAyMS5wbmcnLFxyXG4gICAgICBhbHQ6ICdNZWV0IHRoZSBFLUJvYXJkIScsXHJcbiAgICAgIGNhcHRpb246ICdNZWV0IHRoZSBFLUJvYXJkIScsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBzcmM6ICcvaW1nL2dhbGxlcnkvZ2JtMS0xLWZhbGwyMDIxLmpwZycsXHJcbiAgICAgIGFsdDogJ0dCTSAjMSBGYWxsIDIwMjEnLFxyXG4gICAgICBjYXB0aW9uOiAnR0JNICMxIEZhbGwgMjAyMScsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBzcmM6ICcvaW1nL2dhbGxlcnkvZ2l0d29ya3Nob3AtZmFsbDIwMjEuSlBHJyxcclxuICAgICAgYWx0OiAnR0JNICMyOiBHaXQgV29ya3Nob3AnLFxyXG4gICAgICBjYXB0aW9uOiAnR0JNICMyOiBHaXQgV29ya3Nob3AnLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgc3JjOiAnL2ltZy9nYWxsZXJ5L2plb3BhcmR5LWZhbGwyMDIxLmpwZycsXHJcbiAgICAgIGFsdDogJ0dCTSAjMzogSmVvcGFyZHkhJyxcclxuICAgICAgY2FwdGlvbjogJ0dCTSAjMzogSmVvcGFyZHkhJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHNyYzogJy9pbWcvZ2FsbGVyeS9tdW1teXdyYXAtZmFsbDIwMjEucG5nJyxcclxuICAgICAgYWx0OiAnTXVtbXkgV3JhcHBpbmcnLFxyXG4gICAgICBjYXB0aW9uOiAnTXVtbXkgV3JhcHBpbmcnLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgc3JjOiAnL2ltZy9nYWxsZXJ5L3RoYW5rc2dpdmluZ3BvdGx1Y2stZmFsbDIwMjEuanBlZycsXHJcbiAgICAgIGFsdDogJ1RoYW5rc2dpdmluZyBQb3RsdWNrJyxcclxuICAgICAgY2FwdGlvbjogJ1RoYW5rc2dpdmluZyBQb3RsdWNrJyxcclxuICAgIH0sXHJcbiAgXTtcclxuXHJcbiAgY29uc3Qgc3ByaW5nMjAyMmltYWdlcyA9IFtdO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPEhlYWRlclxyXG4gICAgICAgIGNvbG9yPSd0cmFuc3BhcmVudCdcclxuICAgICAgICBicmFuZD0nU3RvbnkgQnJvb2sgQ29tcHV0aW5nIFNvY2lldHknXHJcbiAgICAgICAgcmlnaHRMaW5rcz17PEhlYWRlckxpbmtzIC8+fVxyXG4gICAgICAgIGZpeGVkXHJcbiAgICAgICAgY2hhbmdlQ29sb3JPblNjcm9sbD17e1xyXG4gICAgICAgICAgaGVpZ2h0OiA2MCxcclxuICAgICAgICAgIGNvbG9yOiAnd2hpdGUnLFxyXG4gICAgICAgIH19XHJcbiAgICAgICAgey4uLnJlc3R9XHJcbiAgICAgIC8+XHJcbiAgICAgIDxQYXJhbGxheCBzbWFsbCBmaWx0ZXIgaW1hZ2U9Jy9pbWcvcHJvZmlsZS1iZy5qcGcnIC8+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWVzKGNsYXNzZXMubWFpbiwgY2xhc3Nlcy5tYWluUmFpc2VkKX0+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgIDxHcmlkQ29udGFpbmVyIGp1c3RpZnk9J2NlbnRlcic+XHJcbiAgICAgICAgICAgICAgPEdyaWRJdGVtIHhzPXsxMn0gc209ezEyfSBtZD17Nn0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxuICAgICAgICAgICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IDEwMCxcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZX0+R2FsbGVyeTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuZGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiAyMCB9fVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgQnJvd3NlIHRocm91Z2ggb3VyIGdhbGxlcnkgdG8gZ2V0IGEgc2Vuc2Ugb2Ygd2hhdCB3ZSBkbyEgSWZcclxuICAgICAgICAgICAgICAgICAgICB5b3UnZCBsaWtlIHRvIGNvbnRyaWJ1dGUsIHBsZWFzZSBlbWFpbCB1cyBhdHsnICd9XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj0nbWFpbHRvOnNidWNvbXB1dGluZ3NvY2lldHlAZ21haWwuY29tJz5cclxuICAgICAgICAgICAgICAgICAgICAgIHNidWNvbXB1dGluZ3NvY2lldHlAZ21haWwuY29tXHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGg0PkZhbGwgMjAyMTwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgIDxDYXJvdXNlbCBjbGFzc05hbWU9e2NsYXNzZXMuY2Fyb3VzZWx9IHsuLi5zZXR0aW5nc30+XHJcbiAgICAgICAgICAgICAgICAgICAge2ZhbGwyMDIxaW1hZ2VzLm1hcCgoaW1hZ2UpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2ltYWdlLnNyY31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9e2ltYWdlLmFsdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3NsaWNrLWltYWdlJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdzbGljay1jYXB0aW9uJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3R0b206IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAncmdiYSgwLDAsMCwwLjUpJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IHN0eWxlPXt7IG1hcmdpbjogMCB9fT57aW1hZ2UuY2FwdGlvbn08L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICA8L0Nhcm91c2VsPlxyXG4gICAgICAgICAgICAgICAgICA8aDQ+U3ByaW5nIDIwMjI8L2g0PlxyXG4gICAgICAgICAgICAgICAgICA8Q2Fyb3VzZWwgey4uLnNldHRpbmdzfT5cclxuICAgICAgICAgICAgICAgICAgICB7c3ByaW5nMjAyMmltYWdlcy5tYXAoKGltYWdlKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtpbWFnZS5zcmN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PXtpbWFnZS5hbHR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdzbGljay1pbWFnZSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3NsaWNrLWNhcHRpb24nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvdHRvbTogMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDAsMCwwLDAuNSknLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgc3R5bGU9e3sgbWFyZ2luOiAwIH19PntpbWFnZS5jYXB0aW9ufTwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgIDwvQ2Fyb3VzZWw+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L0dyaWRJdGVtPlxyXG4gICAgICAgICAgICA8L0dyaWRDb250YWluZXI+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxGb290ZXIgLz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==