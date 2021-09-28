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
/* harmony import */ var C_Users_Lawrence_sbcs_nextjs_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_Lawrence_sbcs_nextjs_node_modules_next_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/extends */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/extends.js");
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




var _jsxFileName = "C:\\Users\\Lawrence\\sbcs-nextjs\\pages\\gallery.js",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_Users_Lawrence_sbcs_nextjs_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

 // nodejs library that concatenates classes

 // @material-ui/core components

 // @material-ui/icons



 // core components









 // Carousel




var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["makeStyles"])(styles_jss_nextjs_material_kit_pages_sponsorsPage_js__WEBPACK_IMPORTED_MODULE_17__["default"]);
function GalleryPage(props) {
  _s();

  var classes = useStyles();

  var rest = Object(C_Users_Lawrence_sbcs_nextjs_node_modules_next_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, props);

  var imageClasses = classnames__WEBPACK_IMPORTED_MODULE_4___default()(classes.imgRaised, classes.imgRoundedCircle, classes.imgFluid);
  var navImageClasses = classnames__WEBPACK_IMPORTED_MODULE_4___default()(classes.imgRounded, classes.imgGallery);
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true
  };
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(components_Header_Header_js__WEBPACK_IMPORTED_MODULE_9__["default"], _objectSpread({
      color: "transparent",
      brand: "Stony Brook Computing Society",
      rightLinks: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(components_Header_HeaderLinks_js__WEBPACK_IMPORTED_MODULE_14__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 21
      }, this),
      fixed: true,
      changeColorOnScroll: {
        height: 60,
        color: 'white'
      }
    }, rest), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(components_Parallax_Parallax_js__WEBPACK_IMPORTED_MODULE_16__["default"], {
      small: true,
      filter: true,
      image: "/img/profile-bg.jpg"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(classes.main, classes.mainRaised),
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
          className: classes.container,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_12__["default"], {
            justify: "center",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_13__["default"], {
              xs: 12,
              sm: 12,
              md: 6,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
                style: {
                  display: 'flex',
                  justifyContent: 'center',
                  flexDirection: 'column',
                  marginBottom: 100
                },
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h3", {
                  className: classes.title,
                  children: "Gallery"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 75,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
                  className: classes.description,
                  children: ["Browse through our gallery to get a sense of what we do! If you'd like to contribute, please email us at", ' ', /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("a", {
                    href: "mailto:sbucomputingsociety@gmail.com",
                    children: "sbucomputingsociety@gmail.com"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 79,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 76,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_slick__WEBPACK_IMPORTED_MODULE_18___default.a, _objectSpread(_objectSpread({}, settings), {}, {
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("img", {
                      src: "/img/bg.jpg",
                      alt: "First slide",
                      className: "slick-image"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 85,
                      columnNumber: 23
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
                      className: "slick-caption",
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h4", {
                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_icons_LocationOn__WEBPACK_IMPORTED_MODULE_19___default.a, {
                          className: "slick-icons"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 92,
                          columnNumber: 27
                        }, this), "Yellowstone National Park, United States"]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 91,
                        columnNumber: 25
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 90,
                      columnNumber: 23
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 84,
                    columnNumber: 21
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("img", {
                      src: "/img/bg2.jpg",
                      alt: "Second slide",
                      className: "slick-image"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 98,
                      columnNumber: 23
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
                      className: "slick-caption",
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h4", {
                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_icons_LocationOn__WEBPACK_IMPORTED_MODULE_19___default.a, {
                          className: "slick-icons"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 105,
                          columnNumber: 27
                        }, this), "Somewhere Beyond, United States"]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 104,
                        columnNumber: 25
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 103,
                      columnNumber: 23
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 97,
                    columnNumber: 21
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("img", {
                      src: "/img/bg3.jpg",
                      alt: "Third slide",
                      className: "slick-image"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 111,
                      columnNumber: 23
                    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
                      className: "slick-caption",
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h4", {
                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_icons_LocationOn__WEBPACK_IMPORTED_MODULE_19___default.a, {
                          className: "slick-icons"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 118,
                          columnNumber: 27
                        }, this), "Yellowstone National Park, United States"]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 117,
                        columnNumber: 25
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 116,
                      columnNumber: 23
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 110,
                    columnNumber: 21
                  }, this)]
                }), void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 83,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 67,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 66,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 65,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(components_Footer_Footer_js__WEBPACK_IMPORTED_MODULE_10__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 49,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZ2FsbGVyeS5qcyJdLCJuYW1lcyI6WyJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwic3R5bGVzIiwiR2FsbGVyeVBhZ2UiLCJwcm9wcyIsImNsYXNzZXMiLCJyZXN0IiwiaW1hZ2VDbGFzc2VzIiwiY2xhc3NOYW1lcyIsImltZ1JhaXNlZCIsImltZ1JvdW5kZWRDaXJjbGUiLCJpbWdGbHVpZCIsIm5hdkltYWdlQ2xhc3NlcyIsImltZ1JvdW5kZWQiLCJpbWdHYWxsZXJ5Iiwic2V0dGluZ3MiLCJkb3RzIiwiaW5maW5pdGUiLCJzcGVlZCIsInNsaWRlc1RvU2hvdyIsInNsaWRlc1RvU2Nyb2xsIiwiYXV0b3BsYXkiLCJoZWlnaHQiLCJjb2xvciIsIm1haW4iLCJtYWluUmFpc2VkIiwiY29udGFpbmVyIiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwiZmxleERpcmVjdGlvbiIsIm1hcmdpbkJvdHRvbSIsInRpdGxlIiwiZGVzY3JpcHRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FDQTs7Q0FFQTs7Q0FFQTs7QUFDQTtBQUNBO0NBRUE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtDQUlBOztBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFNBQVMsR0FBR0MsMkVBQVUsQ0FBQ0MsNkZBQUQsQ0FBNUI7QUFFZSxTQUFTQyxXQUFULENBQXFCQyxLQUFyQixFQUE0QjtBQUFBOztBQUN6QyxNQUFNQyxPQUFPLEdBQUdMLFNBQVMsRUFBekI7O0FBRHlDLE1BRTlCTSxJQUY4QixxSkFFckJGLEtBRnFCOztBQUd6QyxNQUFNRyxZQUFZLEdBQUdDLGlEQUFVLENBQzdCSCxPQUFPLENBQUNJLFNBRHFCLEVBRTdCSixPQUFPLENBQUNLLGdCQUZxQixFQUc3QkwsT0FBTyxDQUFDTSxRQUhxQixDQUEvQjtBQUtBLE1BQU1D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QkFORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBZEYsZUEyQkU7QUFBQSw0Q0FDRTtBQUNFLHlCQUFHLEVBQUMsY0FETjtBQUVFLHlCQUFHLEVBQUMsYUFGTjtBQUdFLCtCQUFTLEVBQUM7QUFIWjtBQUFBO0FBQUE7QUFBQTtBQUFBLDRCQURGLGVBTUU7QUFBSywrQkFBUyxFQUFDLGVBQWY7QUFBQSw2Q0FDRTtBQUFBLGdEQUNFLHFFQUFDLHFFQUFEO0FBQVksbUNBQVMsRUFBQztBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdDQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEJBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQTNCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBaEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBYkYsZUFpRkUscUVBQUMsb0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWpGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQXFGRDs7R0F4R3VCWixXO1VBQ05ILFM7OztLQURNRyxXIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2dhbGxlcnkuNjdmYzFlOGVjMWE2YTNlYmE4NGUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbi8vIG5vZGVqcyBsaWJyYXJ5IHRoYXQgY29uY2F0ZW5hdGVzIGNsYXNzZXNcclxuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XHJcbi8vIEBtYXRlcmlhbC11aS9jb3JlIGNvbXBvbmVudHNcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbi8vIEBtYXRlcmlhbC11aS9pY29uc1xyXG5pbXBvcnQgQ2FtZXJhIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9DYW1lcmEnO1xyXG5pbXBvcnQgUGFsZXR0ZSBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvUGFsZXR0ZSc7XHJcbmltcG9ydCBGYXZvcml0ZSBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvRmF2b3JpdGUnO1xyXG4vLyBjb3JlIGNvbXBvbmVudHNcclxuaW1wb3J0IEhlYWRlciBmcm9tICdjb21wb25lbnRzL0hlYWRlci9IZWFkZXIuanMnO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJ2NvbXBvbmVudHMvRm9vdGVyL0Zvb3Rlci5qcyc7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAnY29tcG9uZW50cy9DdXN0b21CdXR0b25zL0J1dHRvbi5qcyc7XHJcbmltcG9ydCBHcmlkQ29udGFpbmVyIGZyb20gJ2NvbXBvbmVudHMvR3JpZC9HcmlkQ29udGFpbmVyLmpzJztcclxuaW1wb3J0IEdyaWRJdGVtIGZyb20gJ2NvbXBvbmVudHMvR3JpZC9HcmlkSXRlbS5qcyc7XHJcbmltcG9ydCBIZWFkZXJMaW5rcyBmcm9tICdjb21wb25lbnRzL0hlYWRlci9IZWFkZXJMaW5rcy5qcyc7XHJcbmltcG9ydCBOYXZQaWxscyBmcm9tICdjb21wb25lbnRzL05hdlBpbGxzL05hdlBpbGxzLmpzJztcclxuaW1wb3J0IFBhcmFsbGF4IGZyb20gJ2NvbXBvbmVudHMvUGFyYWxsYXgvUGFyYWxsYXguanMnO1xyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tICdzdHlsZXMvanNzL25leHRqcy1tYXRlcmlhbC1raXQvcGFnZXMvc3BvbnNvcnNQYWdlLmpzJztcclxuXHJcbi8vIENhcm91c2VsXHJcbmltcG9ydCBDYXJvdXNlbCBmcm9tICdyZWFjdC1zbGljayc7XHJcbmltcG9ydCBMb2NhdGlvbk9uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9Mb2NhdGlvbk9uJztcclxuaW1wb3J0IENhcmQgZnJvbSAnY29tcG9uZW50cy9DYXJkL0NhcmQuanMnO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyhzdHlsZXMpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gR2FsbGVyeVBhZ2UocHJvcHMpIHtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgY29uc3QgeyAuLi5yZXN0IH0gPSBwcm9wcztcclxuICBjb25zdCBpbWFnZUNsYXNzZXMgPSBjbGFzc05hbWVzKFxyXG4gICAgY2xhc3Nlcy5pbWdSYWlzZWQsXHJcbiAgICBjbGFzc2VzLmltZ1JvdW5kZWRDaXJjbGUsXHJcbiAgICBjbGFzc2VzLmltZ0ZsdWlkXHJcbiAgKTtcclxuICBjb25zdCBuYXZJbWFnZUNsYXNzZXMgPSBjbGFzc05hbWVzKGNsYXNzZXMuaW1nUm91bmRlZCwgY2xhc3Nlcy5pbWdHYWxsZXJ5KTtcclxuXHJcbiAgY29uc3Qgc2V0dGluZ3MgPSB7XHJcbiAgICBkb3RzOiB0cnVlLFxyXG4gICAgaW5maW5pdGU6IHRydWUsXHJcbiAgICBzcGVlZDogNTAwLFxyXG4gICAgc2xpZGVzVG9TaG93OiAxLFxyXG4gICAgc2xpZGVzVG9TY3JvbGw6IDEsXHJcbiAgICBhdXRvcGxheTogdHJ1ZSxcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPEhlYWRlclxyXG4gICAgICAgIGNvbG9yPSd0cmFuc3BhcmVudCdcclxuICAgICAgICBicmFuZD0nU3RvbnkgQnJvb2sgQ29tcHV0aW5nIFNvY2lldHknXHJcbiAgICAgICAgcmlnaHRMaW5rcz17PEhlYWRlckxpbmtzIC8+fVxyXG4gICAgICAgIGZpeGVkXHJcbiAgICAgICAgY2hhbmdlQ29sb3JPblNjcm9sbD17e1xyXG4gICAgICAgICAgaGVpZ2h0OiA2MCxcclxuICAgICAgICAgIGNvbG9yOiAnd2hpdGUnLFxyXG4gICAgICAgIH19XHJcbiAgICAgICAgey4uLnJlc3R9XHJcbiAgICAgIC8+XHJcbiAgICAgIDxQYXJhbGxheCBzbWFsbCBmaWx0ZXIgaW1hZ2U9Jy9pbWcvcHJvZmlsZS1iZy5qcGcnIC8+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWVzKGNsYXNzZXMubWFpbiwgY2xhc3Nlcy5tYWluUmFpc2VkKX0+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgIDxHcmlkQ29udGFpbmVyIGp1c3RpZnk9J2NlbnRlcic+XHJcbiAgICAgICAgICAgICAgPEdyaWRJdGVtIHhzPXsxMn0gc209ezEyfSBtZD17Nn0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxuICAgICAgICAgICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IDEwMCxcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZX0+R2FsbGVyeTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmRlc2NyaXB0aW9ufT5cclxuICAgICAgICAgICAgICAgICAgICBCcm93c2UgdGhyb3VnaCBvdXIgZ2FsbGVyeSB0byBnZXQgYSBzZW5zZSBvZiB3aGF0IHdlIGRvISBJZlxyXG4gICAgICAgICAgICAgICAgICAgIHlvdSdkIGxpa2UgdG8gY29udHJpYnV0ZSwgcGxlYXNlIGVtYWlsIHVzIGF0eycgJ31cclxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPSdtYWlsdG86c2J1Y29tcHV0aW5nc29jaWV0eUBnbWFpbC5jb20nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgc2J1Y29tcHV0aW5nc29jaWV0eUBnbWFpbC5jb21cclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8Q2Fyb3VzZWwgey4uLnNldHRpbmdzfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9Jy9pbWcvYmcuanBnJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbHQ9J0ZpcnN0IHNsaWRlJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3NsaWNrLWltYWdlJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzbGljay1jYXB0aW9uJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGg0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxMb2NhdGlvbk9uIGNsYXNzTmFtZT0nc2xpY2staWNvbnMnIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgWWVsbG93c3RvbmUgTmF0aW9uYWwgUGFyaywgVW5pdGVkIFN0YXRlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPScvaW1nL2JnMi5qcGcnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdD0nU2Vjb25kIHNsaWRlJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3NsaWNrLWltYWdlJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzbGljay1jYXB0aW9uJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGg0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxMb2NhdGlvbk9uIGNsYXNzTmFtZT0nc2xpY2staWNvbnMnIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgU29tZXdoZXJlIEJleW9uZCwgVW5pdGVkIFN0YXRlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPScvaW1nL2JnMy5qcGcnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdD0nVGhpcmQgc2xpZGUnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nc2xpY2staW1hZ2UnXHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NsaWNrLWNhcHRpb24nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPExvY2F0aW9uT24gY2xhc3NOYW1lPSdzbGljay1pY29ucycgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBZZWxsb3dzdG9uZSBOYXRpb25hbCBQYXJrLCBVbml0ZWQgU3RhdGVzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9DYXJvdXNlbD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvR3JpZEl0ZW0+XHJcbiAgICAgICAgICAgIDwvR3JpZENvbnRhaW5lcj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPEZvb3RlciAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9