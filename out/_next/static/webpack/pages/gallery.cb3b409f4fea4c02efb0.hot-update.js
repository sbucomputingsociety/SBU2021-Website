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

  var _this = this;

  var classes = useStyles();

  var rest = Object(C_Users_Lawrence_sbcs_nextjs_node_modules_next_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, props);

  var imageClasses = classnames__WEBPACK_IMPORTED_MODULE_4___default()(classes.imgRaised, classes.imgRoundedCircle, classes.imgFluid);
  var navImageClasses = classnames__WEBPACK_IMPORTED_MODULE_4___default()(classes.imgRounded, classes.imgGallery);
  var settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true
  };
  var images = [{
    src: '/img/gallery/involvementfair.jpg',
    alt: 'CEAS Involvement Fair 2021',
    caption: 'CEAS Involvement Fair 2021'
  }, {
    src: '/img/gallery/gbm1-0.png',
    alt: 'Meet the E-Board!',
    caption: 'Meet the E-Board!'
  }, {
    src: '/img/gallery/gbm1-1.jpg',
    alt: 'GBM #1 Fall 2021',
    caption: 'GBM #1 Fall 2021'
  }];
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(components_Header_Header_js__WEBPACK_IMPORTED_MODULE_9__["default"], _objectSpread({
      color: "transparent",
      brand: "Stony Brook Computing Society",
      rightLinks: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(components_Header_HeaderLinks_js__WEBPACK_IMPORTED_MODULE_14__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 21
      }, this),
      fixed: true,
      changeColorOnScroll: {
        height: 60,
        color: 'white'
      }
    }, rest), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(components_Parallax_Parallax_js__WEBPACK_IMPORTED_MODULE_16__["default"], {
      small: true,
      filter: true,
      image: "/img/profile-bg.jpg"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 79,
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
                  lineNumber: 93,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
                  className: classes.description,
                  children: ["Browse through our gallery to get a sense of what we do! If you'd like to contribute, please email us at", ' ', /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("a", {
                    href: "mailto:sbucomputingsociety@gmail.com",
                    children: "sbucomputingsociety@gmail.com"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 97,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 94,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_slick__WEBPACK_IMPORTED_MODULE_18___default.a, _objectSpread(_objectSpread({}, settings), {}, {
                  children: images.map(function (image) {
                    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("img", {
                        src: image.src,
                        alt: image.alt,
                        className: "slick-image"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 104,
                        columnNumber: 25
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
                        className: "slick-caption",
                        style: {
                          bottom: 0,
                          padding: 0,
                          backgroundColor: 'rgba(0,0,0,0.5)'
                        },
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h4", {
                          children: image.caption
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 118,
                          columnNumber: 27
                        }, _this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 110,
                        columnNumber: 25
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 103,
                      columnNumber: 23
                    }, _this);
                  })
                }), void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 101,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 85,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 84,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 83,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(components_Footer_Footer_js__WEBPACK_IMPORTED_MODULE_10__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 67,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZ2FsbGVyeS5qcyJdLCJuYW1lcyI6WyJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwic3R5bGVzIiwiR2FsbGVyeVBhZ2UiLCJwcm9wcyIsImNsYXNzZXMiLCJyZXN0IiwiaW1hZ2VDbGFzc2VzIiwiY2xhc3NOYW1lcyIsImltZ1JhaXNlZCIsImltZ1JvdW5kZWRDaXJjbGUiLCJpbWdGbHVpZCIsIm5hdkltYWdlQ2xhc3NlcyIsImltZ1JvdW5kZWQiLCJpbWdHYWxsZXJ5Iiwic2V0dGluZ3MiLCJkb3RzIiwiaW5maW5pdGUiLCJzcGVlZCIsInNsaWRlc1RvU2hvdyIsInNsaWRlc1RvU2Nyb2xsIiwiYXV0b3BsYXkiLCJpbWFnZXMiLCJzcmMiLCJhbHQiLCJjYXB0aW9uIiwiaGVpZ2h0IiwiY29sb3IiLCJtYWluIiwibWFpblJhaXNlZCIsImNvbnRhaW5lciIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsImZsZXhEaXJlY3Rpb24iLCJtYXJnaW5Cb3R0b20iLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwibWFwIiwiaW1hZ2UiLCJib3R0b20iLCJwYWRkaW5nIiwiYmFja2dyb3VuZENvbG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBQ0E7O0NBRUE7O0NBRUE7O0FBQ0E7QUFDQTtDQUVBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0FJQTs7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxTQUFTLEdBQUdDLDJFQUFVLENBQUNDLDZGQUFELENBQTVCO0FBRWUsU0FBU0MsV0FBVCxDQUFxQkMsS0FBckIsRUFBNEI7QUFBQTs7QUFBQTs7QUFDekMsTUFBTUMsT0FBTyxHQUFHTCxTQUFTLEVBQXpCOztBQUR5QyxNQUU5Qk0sSUFGOEIscUpBRXJCRixLQUZxQjs7QUFHekMsTUFBTUcsWUFBWSxHQUFHQyxpREFBVSxDQUM3QkgsT0FBTyxDQUFDSSxTQURxQixFQUU3QkosT0FBTyxDQUFDSyxnQkFGcUIsRUFHN0JMLE9BQU8sQ0FBQ00sUUFIcUIsQ0FBL0I7QUFLQSxNQUFNQyxlQUFlLEdBQUdKLGlEQUFVLENBQUNILE9BQU8sQ0FBQ1EsVUFBVCxFQUFxQlIsT0FBTyxDQUFDUyxVQUE3QixDQUFsQztBQUVBLE1BQU1DLFFBQVEsR0FBRztBQUNmQyxRQUFJLEVBQUUsSUFEUztBQUVmQyxZQUFRLEVBQUUsSUFGSztBQUdmQyxTQUFLLEVBQUUsSUFIUTtBQUlmQyxnQkFBWSxFQUFFLENBSkM7QUFLZkMsa0JBQWMsRUFBRSxDQUxEO0FBTWZDLFlBQVEsRUFBRTtBQU5LLEdBQWpCO0FBU0EsTUFBTUMsTUFBTSxHQUFHLENBQ2I7QUFDRUMsT0FBRyxFQUFFLGtDQURQO0FBRUVDLE9BQUcsRUFBRSw0QkFGUDtBQUdFQyxXQUFPLEVBQUU7QUFIWCxHQURhLEVBTWI7QUFDRUYsT0FBRyxFQUFFLHlCQURQO0FBRUVDLE9BQUcsRUFBRSxtQkFGUDtBQUdFQyxXQUFPLEVBQUU7QUFIWCxHQU5hLEVBV2I7QUFDRUYsT0FBRyxFQUFFLHlCQURQO0FBRUVDLE9BQUcsRUFBRSxrQkFGUDtBQUdFQyxXQUFPLEVBQUU7QUFIWCxHQVhhLENBQWY7QUFrQkEsc0JBQ0U7QUFBQSw0QkFDRSxxRUFBQyxtRUFBRDtBQUNFLFdBQUssRUFBQyxhQURSO0FBRUUsV0FBSyxFQUFDLCtCQUZSO0FBR0UsZ0JBQVUsZUFBRSxxRUFBQyx5RUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSGQ7QUFJRSxXQUFLLE1BSlA7QUFLRSx5QkFBbUIsRUFBRTtBQUNuQkMsY0FBTSxFQUFFLEVBRFc7QUFFbkJDLGFBQUssRUFBRTtBQUZZO0FBTHZCLE9BU01yQixJQVROO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQVlFLHFFQUFDLHdFQUFEO0FBQVUsV0FBSyxNQUFmO0FBQWdCLFlBQU0sTUFBdEI7QUFBdUIsV0FBSyxFQUFDO0FBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFaRixlQWFFO0FBQUssZUFBUyxFQUFFRSxpREFBVSxDQUFDSCxPQUFPLENBQUN1QixJQUFULEVBQWV2QixPQUFPLENBQUN3QixVQUF2QixDQUExQjtBQUFBLDZCQUNFO0FBQUEsK0JBQ0U7QUFBSyxtQkFBUyxFQUFFeEIsT0FBTyxDQUFDeUIsU0FBeEI7QUFBQSxpQ0FDRSxxRUFBQyx5RUFBRDtBQUFlLG1CQUFPLEVBQUMsUUFBdkI7QUFBQSxtQ0FDRSxxRUFBQyxvRUFBRDtBQUFVLGdCQUFFLEVBQUUsRUFBZDtBQUFrQixnQkFBRSxFQUFFLEVBQXRCO0FBQTBCLGdCQUFFLEVBQUUsQ0FBOUI7QUFBQSxxQ0FDRTtBQUNFLHFCQUFLLEVBQUU7QUFDTEMseUJBQU8sRUFBRSxNQURKO0FBRUxDLGdDQUFjLEVBQUUsUUFGWDtBQUdMQywrQkFBYSxFQUFFLFFBSFY7QUFJTEMsOEJBQVksRUFBRTtBQUpULGlCQURUO0FBQUEsd0NBUUU7QUFBSSwyQkFBUyxFQUFFN0IsT0FBTyxDQUFDOEIsS0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBUkYsZUFTRTtBQUFLLDJCQUFTLEVBQUU5QixPQUFPLENBQUMrQixXQUF4QjtBQUFBLHlJQUUrQyxHQUYvQyxlQUdFO0FBQUcsd0JBQUksRUFBQyxzQ0FBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBVEYsZUFnQkUscUVBQUMsbURBQUQsa0NBQWNyQixRQUFkO0FBQUEsNEJBQ0dPLE1BQU0sQ0FBQ2UsR0FBUCxDQUFXLFVBQUNDLEtBQUQ7QUFBQSx3Q0FDVjtBQUFBLDhDQUNFO0FBQ0UsMkJBQUcsRUFBRUEsS0FBSyxDQUFDZixHQURiO0FBRUUsMkJBQUcsRUFBRWUsS0FBSyxDQUFDZCxHQUZiO0FBR0UsaUNBQVMsRUFBQztBQUhaO0FBQUE7QUFBQTtBQUFBO0FBQUEsK0JBREYsZUFPRTtBQUNFLGlDQUFTLEVBQUMsZUFEWjtBQUVFLDZCQUFLLEVBQUU7QUFDTGUsZ0NBQU0sRUFBRSxDQURIO0FBRUxDLGlDQUFPLEVBQUUsQ0FGSjtBQUdMQyx5Q0FBZSxFQUFFO0FBSFoseUJBRlQ7QUFBQSwrQ0FRRTtBQUFBLG9DQUFLSCxLQUFLLENBQUNiO0FBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUEsK0JBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQURVO0FBQUEsbUJBQVg7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQWhCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWJGLGVBOERFLHFFQUFDLG9FQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUE5REY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFrRUQ7O0dBdkd1QnRCLFc7VUFDTkgsUzs7O0tBRE1HLFciLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZ2FsbGVyeS5jYjNiNDA5ZjRmZWE0YzAyZWZiMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuLy8gbm9kZWpzIGxpYnJhcnkgdGhhdCBjb25jYXRlbmF0ZXMgY2xhc3Nlc1xyXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcclxuLy8gQG1hdGVyaWFsLXVpL2NvcmUgY29tcG9uZW50c1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuLy8gQG1hdGVyaWFsLXVpL2ljb25zXHJcbmltcG9ydCBDYW1lcmEgZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0NhbWVyYSc7XHJcbmltcG9ydCBQYWxldHRlIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9QYWxldHRlJztcclxuaW1wb3J0IEZhdm9yaXRlIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9GYXZvcml0ZSc7XHJcbi8vIGNvcmUgY29tcG9uZW50c1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gJ2NvbXBvbmVudHMvSGVhZGVyL0hlYWRlci5qcyc7XHJcbmltcG9ydCBGb290ZXIgZnJvbSAnY29tcG9uZW50cy9Gb290ZXIvRm9vdGVyLmpzJztcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICdjb21wb25lbnRzL0N1c3RvbUJ1dHRvbnMvQnV0dG9uLmpzJztcclxuaW1wb3J0IEdyaWRDb250YWluZXIgZnJvbSAnY29tcG9uZW50cy9HcmlkL0dyaWRDb250YWluZXIuanMnO1xyXG5pbXBvcnQgR3JpZEl0ZW0gZnJvbSAnY29tcG9uZW50cy9HcmlkL0dyaWRJdGVtLmpzJztcclxuaW1wb3J0IEhlYWRlckxpbmtzIGZyb20gJ2NvbXBvbmVudHMvSGVhZGVyL0hlYWRlckxpbmtzLmpzJztcclxuaW1wb3J0IE5hdlBpbGxzIGZyb20gJ2NvbXBvbmVudHMvTmF2UGlsbHMvTmF2UGlsbHMuanMnO1xyXG5pbXBvcnQgUGFyYWxsYXggZnJvbSAnY29tcG9uZW50cy9QYXJhbGxheC9QYXJhbGxheC5qcyc7XHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJ3N0eWxlcy9qc3MvbmV4dGpzLW1hdGVyaWFsLWtpdC9wYWdlcy9zcG9uc29yc1BhZ2UuanMnO1xyXG5cclxuLy8gQ2Fyb3VzZWxcclxuaW1wb3J0IENhcm91c2VsIGZyb20gJ3JlYWN0LXNsaWNrJztcclxuaW1wb3J0IExvY2F0aW9uT24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0xvY2F0aW9uT24nO1xyXG5pbXBvcnQgQ2FyZCBmcm9tICdjb21wb25lbnRzL0NhcmQvQ2FyZC5qcyc7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHN0eWxlcyk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBHYWxsZXJ5UGFnZShwcm9wcykge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICBjb25zdCB7IC4uLnJlc3QgfSA9IHByb3BzO1xyXG4gIGNvbnN0IGltYWdlQ2xhc3NlcyA9IGNsYXNzTmFtZXMoXHJcbiAgICBjbGFzc2VzLmltZ1JhaXNlZCxcclxuICAgIGNsYXNzZXMuaW1nUm91bmRlZENpcmNsZSxcclxuICAgIGNsYXNzZXMuaW1nRmx1aWRcclxuICApO1xyXG4gIGNvbnN0IG5hdkltYWdlQ2xhc3NlcyA9IGNsYXNzTmFtZXMoY2xhc3Nlcy5pbWdSb3VuZGVkLCBjbGFzc2VzLmltZ0dhbGxlcnkpO1xyXG5cclxuICBjb25zdCBzZXR0aW5ncyA9IHtcclxuICAgIGRvdHM6IHRydWUsXHJcbiAgICBpbmZpbml0ZTogdHJ1ZSxcclxuICAgIHNwZWVkOiAxMDAwLFxyXG4gICAgc2xpZGVzVG9TaG93OiAxLFxyXG4gICAgc2xpZGVzVG9TY3JvbGw6IDEsXHJcbiAgICBhdXRvcGxheTogdHJ1ZSxcclxuICB9O1xyXG5cclxuICBjb25zdCBpbWFnZXMgPSBbXHJcbiAgICB7XHJcbiAgICAgIHNyYzogJy9pbWcvZ2FsbGVyeS9pbnZvbHZlbWVudGZhaXIuanBnJyxcclxuICAgICAgYWx0OiAnQ0VBUyBJbnZvbHZlbWVudCBGYWlyIDIwMjEnLFxyXG4gICAgICBjYXB0aW9uOiAnQ0VBUyBJbnZvbHZlbWVudCBGYWlyIDIwMjEnLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgc3JjOiAnL2ltZy9nYWxsZXJ5L2dibTEtMC5wbmcnLFxyXG4gICAgICBhbHQ6ICdNZWV0IHRoZSBFLUJvYXJkIScsXHJcbiAgICAgIGNhcHRpb246ICdNZWV0IHRoZSBFLUJvYXJkIScsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBzcmM6ICcvaW1nL2dhbGxlcnkvZ2JtMS0xLmpwZycsXHJcbiAgICAgIGFsdDogJ0dCTSAjMSBGYWxsIDIwMjEnLFxyXG4gICAgICBjYXB0aW9uOiAnR0JNICMxIEZhbGwgMjAyMScsXHJcbiAgICB9LFxyXG4gIF07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8SGVhZGVyXHJcbiAgICAgICAgY29sb3I9J3RyYW5zcGFyZW50J1xyXG4gICAgICAgIGJyYW5kPSdTdG9ueSBCcm9vayBDb21wdXRpbmcgU29jaWV0eSdcclxuICAgICAgICByaWdodExpbmtzPXs8SGVhZGVyTGlua3MgLz59XHJcbiAgICAgICAgZml4ZWRcclxuICAgICAgICBjaGFuZ2VDb2xvck9uU2Nyb2xsPXt7XHJcbiAgICAgICAgICBoZWlnaHQ6IDYwLFxyXG4gICAgICAgICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICAgICAgfX1cclxuICAgICAgICB7Li4ucmVzdH1cclxuICAgICAgLz5cclxuICAgICAgPFBhcmFsbGF4IHNtYWxsIGZpbHRlciBpbWFnZT0nL2ltZy9wcm9maWxlLWJnLmpwZycgLz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZXMoY2xhc3Nlcy5tYWluLCBjbGFzc2VzLm1haW5SYWlzZWQpfT5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY29udGFpbmVyfT5cclxuICAgICAgICAgICAgPEdyaWRDb250YWluZXIganVzdGlmeT0nY2VudGVyJz5cclxuICAgICAgICAgICAgICA8R3JpZEl0ZW0geHM9ezEyfSBzbT17MTJ9IG1kPXs2fT5cclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxyXG4gICAgICAgICAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogMTAwLFxyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlfT5HYWxsZXJ5PC9oMz5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuZGVzY3JpcHRpb259PlxyXG4gICAgICAgICAgICAgICAgICAgIEJyb3dzZSB0aHJvdWdoIG91ciBnYWxsZXJ5IHRvIGdldCBhIHNlbnNlIG9mIHdoYXQgd2UgZG8hIElmXHJcbiAgICAgICAgICAgICAgICAgICAgeW91J2QgbGlrZSB0byBjb250cmlidXRlLCBwbGVhc2UgZW1haWwgdXMgYXR7JyAnfVxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9J21haWx0bzpzYnVjb21wdXRpbmdzb2NpZXR5QGdtYWlsLmNvbSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICBzYnVjb21wdXRpbmdzb2NpZXR5QGdtYWlsLmNvbVxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxDYXJvdXNlbCB7Li4uc2V0dGluZ3N9PlxyXG4gICAgICAgICAgICAgICAgICAgIHtpbWFnZXMubWFwKChpbWFnZSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17aW1hZ2Uuc3JjfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD17aW1hZ2UuYWx0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nc2xpY2staW1hZ2UnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdzbGljay1jYXB0aW9uJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3R0b206IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAncmdiYSgwLDAsMCwwLjUpJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0PntpbWFnZS5jYXB0aW9ufTwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgIDwvQ2Fyb3VzZWw+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L0dyaWRJdGVtPlxyXG4gICAgICAgICAgICA8L0dyaWRDb250YWluZXI+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxGb290ZXIgLz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==