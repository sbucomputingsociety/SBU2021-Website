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
    slidesToScroll: 1,
    adaptiveHeight: true // autoplay: true,

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
  var spring2022images = [{
    src: '/img/gallery/gbm1-spring2022.jpg',
    alt: 'GBM #1 Spring 2022',
    caption: 'GBM #1 Spring 2022'
  }];
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Header_Header_js__WEBPACK_IMPORTED_MODULE_9__["default"], _objectSpread({
      color: "transparent",
      brand: "Stony Brook Computing Society",
      rightLinks: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Header_HeaderLinks_js__WEBPACK_IMPORTED_MODULE_14__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 21
      }, this),
      fixed: true,
      changeColorOnScroll: {
        height: 60,
        color: 'white'
      }
    }, rest), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Parallax_Parallax_js__WEBPACK_IMPORTED_MODULE_16__["default"], {
      small: true,
      filter: true,
      image: "/img/profile-bg.jpg"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 116,
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
                  lineNumber: 130,
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
                    lineNumber: 137,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 131,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
                  children: "Fall 2021"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 141,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_slick__WEBPACK_IMPORTED_MODULE_18___default.a, _objectSpread(_objectSpread({}, settings), {}, {
                  children: fall2021images.map(function (image) {
                    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                        src: image.src,
                        alt: image.alt,
                        className: "slick-image"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 145,
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
                          lineNumber: 158,
                          columnNumber: 27
                        }, _this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 150,
                        columnNumber: 25
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 144,
                      columnNumber: 23
                    }, _this);
                  })
                }), void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 142,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
                  children: "Spring 2022"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 163,
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
                        lineNumber: 167,
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
                          lineNumber: 181,
                          columnNumber: 27
                        }, _this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 173,
                        columnNumber: 25
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 166,
                      columnNumber: 23
                    }, _this);
                  })
                }), void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 164,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 122,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 121,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 120,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 119,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 118,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Footer_Footer_js__WEBPACK_IMPORTED_MODULE_10__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 192,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 104,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZ2FsbGVyeS5qcyJdLCJuYW1lcyI6WyJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwic3R5bGVzIiwiY2Fyb3VzZWwiLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwiYmFja2dyb3VuZENvbG9yIiwiR2FsbGVyeVBhZ2UiLCJwcm9wcyIsImNsYXNzZXMiLCJyZXN0IiwiaW1hZ2VDbGFzc2VzIiwiY2xhc3NOYW1lcyIsImltZ1JhaXNlZCIsImltZ1JvdW5kZWRDaXJjbGUiLCJpbWdGbHVpZCIsIm5hdkltYWdlQ2xhc3NlcyIsImltZ1JvdW5kZWQiLCJpbWdHYWxsZXJ5Iiwic2V0dGluZ3MiLCJkb3RzIiwiaW5maW5pdGUiLCJzcGVlZCIsInNsaWRlc1RvU2hvdyIsInNsaWRlc1RvU2Nyb2xsIiwiYWRhcHRpdmVIZWlnaHQiLCJmYWxsMjAyMWltYWdlcyIsInNyYyIsImFsdCIsImNhcHRpb24iLCJzcHJpbmcyMDIyaW1hZ2VzIiwiaGVpZ2h0IiwiY29sb3IiLCJtYWluIiwibWFpblJhaXNlZCIsImNvbnRhaW5lciIsImZsZXhEaXJlY3Rpb24iLCJtYXJnaW5Cb3R0b20iLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwibWFwIiwiaW1hZ2UiLCJib3R0b20iLCJwYWRkaW5nIiwibWFyZ2luIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBQ0E7O0NBRUE7O0NBRUE7O0FBQ0E7QUFDQTtDQUVBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0FJQTs7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxTQUFTLEdBQUdDLDJFQUFVLGlDQUN2QkMsNkZBRHVCO0FBRTFCQyxVQUFRLEVBQUU7QUFDUkMsV0FBTyxFQUFFLE1BREQ7QUFFUkMsY0FBVSxFQUFFLFFBRko7QUFHUkMsa0JBQWMsRUFBRSxRQUhSO0FB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RjtBQTRGRDs7R0E5SnVCdEIsVztVQUNOUixTOzs7S0FETVEsVyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9nYWxsZXJ5Ljk4NjhjNWY0MjYzNTBiMWVkZTE0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG4vLyBub2RlanMgbGlicmFyeSB0aGF0IGNvbmNhdGVuYXRlcyBjbGFzc2VzXHJcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xyXG4vLyBAbWF0ZXJpYWwtdWkvY29yZSBjb21wb25lbnRzXHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG4vLyBAbWF0ZXJpYWwtdWkvaWNvbnNcclxuaW1wb3J0IENhbWVyYSBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvQ2FtZXJhJztcclxuaW1wb3J0IFBhbGV0dGUgZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1BhbGV0dGUnO1xyXG5pbXBvcnQgRmF2b3JpdGUgZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0Zhdm9yaXRlJztcclxuLy8gY29yZSBjb21wb25lbnRzXHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnY29tcG9uZW50cy9IZWFkZXIvSGVhZGVyLmpzJztcclxuaW1wb3J0IEZvb3RlciBmcm9tICdjb21wb25lbnRzL0Zvb3Rlci9Gb290ZXIuanMnO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJ2NvbXBvbmVudHMvQ3VzdG9tQnV0dG9ucy9CdXR0b24uanMnO1xyXG5pbXBvcnQgR3JpZENvbnRhaW5lciBmcm9tICdjb21wb25lbnRzL0dyaWQvR3JpZENvbnRhaW5lci5qcyc7XHJcbmltcG9ydCBHcmlkSXRlbSBmcm9tICdjb21wb25lbnRzL0dyaWQvR3JpZEl0ZW0uanMnO1xyXG5pbXBvcnQgSGVhZGVyTGlua3MgZnJvbSAnY29tcG9uZW50cy9IZWFkZXIvSGVhZGVyTGlua3MuanMnO1xyXG5pbXBvcnQgTmF2UGlsbHMgZnJvbSAnY29tcG9uZW50cy9OYXZQaWxscy9OYXZQaWxscy5qcyc7XHJcbmltcG9ydCBQYXJhbGxheCBmcm9tICdjb21wb25lbnRzL1BhcmFsbGF4L1BhcmFsbGF4LmpzJztcclxuXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnc3R5bGVzL2pzcy9uZXh0anMtbWF0ZXJpYWwta2l0L3BhZ2VzL3Nwb25zb3JzUGFnZS5qcyc7XHJcblxyXG4vLyBDYXJvdXNlbFxyXG5pbXBvcnQgQ2Fyb3VzZWwgZnJvbSAncmVhY3Qtc2xpY2snO1xyXG5pbXBvcnQgTG9jYXRpb25PbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvTG9jYXRpb25Pbic7XHJcbmltcG9ydCBDYXJkIGZyb20gJ2NvbXBvbmVudHMvQ2FyZC9DYXJkLmpzJztcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoe1xyXG4gIC4uLnN0eWxlcyxcclxuICBjYXJvdXNlbDoge1xyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICdibGFjaycsXHJcbiAgfSxcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBHYWxsZXJ5UGFnZShwcm9wcykge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICBjb25zdCB7IC4uLnJlc3QgfSA9IHByb3BzO1xyXG4gIGNvbnN0IGltYWdlQ2xhc3NlcyA9IGNsYXNzTmFtZXMoXHJcbiAgICBjbGFzc2VzLmltZ1JhaXNlZCxcclxuICAgIGNsYXNzZXMuaW1nUm91bmRlZENpcmNsZSxcclxuICAgIGNsYXNzZXMuaW1nRmx1aWRcclxuICApO1xyXG4gIGNvbnN0IG5hdkltYWdlQ2xhc3NlcyA9IGNsYXNzTmFtZXMoY2xhc3Nlcy5pbWdSb3VuZGVkLCBjbGFzc2VzLmltZ0dhbGxlcnkpO1xyXG5cclxuICBjb25zdCBzZXR0aW5ncyA9IHtcclxuICAgIGRvdHM6IHRydWUsXHJcbiAgICBpbmZpbml0ZTogdHJ1ZSxcclxuICAgIHNwZWVkOiA1MDAsXHJcbiAgICBzbGlkZXNUb1Nob3c6IDEsXHJcbiAgICBzbGlkZXNUb1Njcm9sbDogMSxcclxuICAgIGFkYXB0aXZlSGVpZ2h0OiB0cnVlLFxyXG4gICAgLy8gYXV0b3BsYXk6IHRydWUsXHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZmFsbDIwMjFpbWFnZXMgPSBbXHJcbiAgICB7XHJcbiAgICAgIHNyYzogJy9pbWcvZ2FsbGVyeS9pbnZvbHZlbWVudGZhaXItZmFsbDIwMjEuanBnJyxcclxuICAgICAgYWx0OiAnQ0VBUyBJbnZvbHZlbWVudCBGYWlyIDIwMjEnLFxyXG4gICAgICBjYXB0aW9uOiAnQ0VBUyBJbnZvbHZlbWVudCBGYWlyIDIwMjEnLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgc3JjOiAnL2ltZy9nYWxsZXJ5L2dibTEtMC1mYWxsMjAyMS5wbmcnLFxyXG4gICAgICBhbHQ6ICdNZWV0IHRoZSBFLUJvYXJkIScsXHJcbiAgICAgIGNhcHRpb246ICdNZWV0IHRoZSBFLUJvYXJkIScsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBzcmM6ICcvaW1nL2dhbGxlcnkvZ2JtMS0xLWZhbGwyMDIxLmpwZycsXHJcbiAgICAgIGFsdDogJ0dCTSAjMSBGYWxsIDIwMjEnLFxyXG4gICAgICBjYXB0aW9uOiAnR0JNICMxIEZhbGwgMjAyMScsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBzcmM6ICcvaW1nL2dhbGxlcnkvZ2l0d29ya3Nob3AtZmFsbDIwMjEuSlBHJyxcclxuICAgICAgYWx0OiAnR0JNICMyOiBHaXQgV29ya3Nob3AnLFxyXG4gICAgICBjYXB0aW9uOiAnR0JNICMyOiBHaXQgV29ya3Nob3AnLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgc3JjOiAnL2ltZy9nYWxsZXJ5L2plb3BhcmR5LWZhbGwyMDIxLmpwZycsXHJcbiAgICAgIGFsdDogJ0dCTSAjMzogSmVvcGFyZHkhJyxcclxuICAgICAgY2FwdGlvbjogJ0dCTSAjMzogSmVvcGFyZHkhJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHNyYzogJy9pbWcvZ2FsbGVyeS9tdW1teXdyYXAtZmFsbDIwMjEucG5nJyxcclxuICAgICAgYWx0OiAnTXVtbXkgV3JhcHBpbmcnLFxyXG4gICAgICBjYXB0aW9uOiAnTXVtbXkgV3JhcHBpbmcnLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgc3JjOiAnL2ltZy9nYWxsZXJ5L3RoYW5rc2dpdmluZ3BvdGx1Y2stZmFsbDIwMjEuanBlZycsXHJcbiAgICAgIGFsdDogJ1RoYW5rc2dpdmluZyBQb3RsdWNrJyxcclxuICAgICAgY2FwdGlvbjogJ1RoYW5rc2dpdmluZyBQb3RsdWNrJyxcclxuICAgIH0sXHJcbiAgXTtcclxuXHJcbiAgY29uc3Qgc3ByaW5nMjAyMmltYWdlcyA9IFtcclxuICAgIHtcclxuICAgICAgc3JjOiAnL2ltZy9nYWxsZXJ5L2dibTEtc3ByaW5nMjAyMi5qcGcnLFxyXG4gICAgICBhbHQ6ICdHQk0gIzEgU3ByaW5nIDIwMjInLFxyXG4gICAgICBjYXB0aW9uOiAnR0JNICMxIFNwcmluZyAyMDIyJyxcclxuICAgIH0sXHJcbiAgXTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxIZWFkZXJcclxuICAgICAgICBjb2xvcj0ndHJhbnNwYXJlbnQnXHJcbiAgICAgICAgYnJhbmQ9J1N0b255IEJyb29rIENvbXB1dGluZyBTb2NpZXR5J1xyXG4gICAgICAgIHJpZ2h0TGlua3M9ezxIZWFkZXJMaW5rcyAvPn1cclxuICAgICAgICBmaXhlZFxyXG4gICAgICAgIGNoYW5nZUNvbG9yT25TY3JvbGw9e3tcclxuICAgICAgICAgIGhlaWdodDogNjAsXHJcbiAgICAgICAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgICAgICB9fVxyXG4gICAgICAgIHsuLi5yZXN0fVxyXG4gICAgICAvPlxyXG4gICAgICA8UGFyYWxsYXggc21hbGwgZmlsdGVyIGltYWdlPScvaW1nL3Byb2ZpbGUtYmcuanBnJyAvPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhjbGFzc2VzLm1haW4sIGNsYXNzZXMubWFpblJhaXNlZCl9PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250YWluZXJ9PlxyXG4gICAgICAgICAgICA8R3JpZENvbnRhaW5lciBqdXN0aWZ5PSdjZW50ZXInPlxyXG4gICAgICAgICAgICAgIDxHcmlkSXRlbSB4cz17MTJ9IHNtPXsxMn0gbWQ9ezZ9PlxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgICAgICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAxMDAsXHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9PkdhbGxlcnk8L2gzPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmRlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogMjAgfX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIEJyb3dzZSB0aHJvdWdoIG91ciBnYWxsZXJ5IHRvIGdldCBhIHNlbnNlIG9mIHdoYXQgd2UgZG8hIElmXHJcbiAgICAgICAgICAgICAgICAgICAgeW91J2QgbGlrZSB0byBjb250cmlidXRlLCBwbGVhc2UgZW1haWwgdXMgYXR7JyAnfVxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9J21haWx0bzpzYnVjb21wdXRpbmdzb2NpZXR5QGdtYWlsLmNvbSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICBzYnVjb21wdXRpbmdzb2NpZXR5QGdtYWlsLmNvbVxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxoND5GYWxsIDIwMjE8L2g0PlxyXG4gICAgICAgICAgICAgICAgICA8Q2Fyb3VzZWwgey4uLnNldHRpbmdzfT5cclxuICAgICAgICAgICAgICAgICAgICB7ZmFsbDIwMjFpbWFnZXMubWFwKChpbWFnZSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17aW1hZ2Uuc3JjfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD17aW1hZ2UuYWx0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nc2xpY2staW1hZ2UnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3NsaWNrLWNhcHRpb24nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvdHRvbTogMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDAsMCwwLDAuNSknLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgc3R5bGU9e3sgbWFyZ2luOiAwIH19PntpbWFnZS5jYXB0aW9ufTwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgIDwvQ2Fyb3VzZWw+XHJcbiAgICAgICAgICAgICAgICAgIDxoND5TcHJpbmcgMjAyMjwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgIDxDYXJvdXNlbCB7Li4uc2V0dGluZ3N9PlxyXG4gICAgICAgICAgICAgICAgICAgIHtzcHJpbmcyMDIyaW1hZ2VzLm1hcCgoaW1hZ2UpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2ltYWdlLnNyY31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9e2ltYWdlLmFsdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3NsaWNrLWltYWdlJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nc2xpY2stY2FwdGlvbidcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm90dG9tOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYmEoMCwwLDAsMC41KScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBzdHlsZT17eyBtYXJnaW46IDAgfX0+e2ltYWdlLmNhcHRpb259PC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgPC9DYXJvdXNlbD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvR3JpZEl0ZW0+XHJcbiAgICAgICAgICAgIDwvR3JpZENvbnRhaW5lcj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPEZvb3RlciAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9