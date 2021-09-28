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
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1 // autoplay: true,

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
                          style: {
                            margin: 0
                          },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZ2FsbGVyeS5qcyJdLCJuYW1lcyI6WyJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwic3R5bGVzIiwiR2FsbGVyeVBhZ2UiLCJwcm9wcyIsImNsYXNzZXMiLCJyZXN0IiwiaW1hZ2VDbGFzc2VzIiwiY2xhc3NOYW1lcyIsImltZ1JhaXNlZCIsImltZ1JvdW5kZWRDaXJjbGUiLCJpbWdGbHVpZCIsIm5hdkltYWdlQ2xhc3NlcyIsImltZ1JvdW5kZWQiLCJpbWdHYWxsZXJ5Iiwic2V0dGluZ3MiLCJkb3RzIiwiaW5maW5pdGUiLCJzcGVlZCIsInNsaWRlc1RvU2hvdyIsInNsaWRlc1RvU2Nyb2xsIiwiaW1hZ2VzIiwic3JjIiwiYWx0IiwiY2FwdGlvbiIsImhlaWdodCIsImNvbG9yIiwibWFpbiIsIm1haW5SYWlzZWQiLCJjb250YWluZXIiLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJmbGV4RGlyZWN0aW9uIiwibWFyZ2luQm90dG9tIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsIm1hcCIsImltYWdlIiwiYm90dG9tIiwicGFkZGluZyIsImJhY2tncm91bmRDb2xvciIsIm1hcmdpbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQUNBOztDQUVBOztDQUVBOztBQUNBO0FBQ0E7Q0FFQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0NBSUE7O0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsU0FBUyxHQUFHQywyRUFBVSxDQUFDQyw2RkFBRCxDQUE1QjtBQUVlLFNBQVNDLFdBQVQsQ0FBcUJDLEtBQXJCLEVBQTRCO0FBQUE7O0FBQUE7O0FBQ3pDLE1BQU1DLE9BQU8sR0FBR0wsU0FBUyxFQUF6Qjs7QUFEeUMsTUFFOUJNLElBRjhCLHFKQUVyQkYsS0FGcUI7O0FBR3pDLE1BQU1HLFlBQVksR0FBR0MsaURBQVUsQ0FD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O0FBRUxDLGlDQUFPLEVBQUUsQ0FGSjtBQUdMQyx5Q0FBZSxFQUFFO0FBSFoseUJBRlQ7QUFBQSwrQ0FRRTtBQUFJLCtCQUFLLEVBQUU7QUFBRUMsa0NBQU0sRUFBRTtBQUFWLDJCQUFYO0FBQUEsb0NBQTJCSixLQUFLLENBQUNiO0FBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFSRjtBQUFBO0FBQUE7QUFBQTtBQUFBLCtCQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFEVTtBQUFBLG1CQUFYO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFoQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFiRixlQThERSxxRUFBQyxvRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBOURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBa0VEOztHQXZHdUJyQixXO1VBQ05ILFM7OztLQURNRyxXIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2dhbGxlcnkuN2JjNDNmMjVjMGNjNjJjMWVjNjYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbi8vIG5vZGVqcyBsaWJyYXJ5IHRoYXQgY29uY2F0ZW5hdGVzIGNsYXNzZXNcclxuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XHJcbi8vIEBtYXRlcmlhbC11aS9jb3JlIGNvbXBvbmVudHNcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbi8vIEBtYXRlcmlhbC11aS9pY29uc1xyXG5pbXBvcnQgQ2FtZXJhIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9DYW1lcmEnO1xyXG5pbXBvcnQgUGFsZXR0ZSBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvUGFsZXR0ZSc7XHJcbmltcG9ydCBGYXZvcml0ZSBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvRmF2b3JpdGUnO1xyXG4vLyBjb3JlIGNvbXBvbmVudHNcclxuaW1wb3J0IEhlYWRlciBmcm9tICdjb21wb25lbnRzL0hlYWRlci9IZWFkZXIuanMnO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJ2NvbXBvbmVudHMvRm9vdGVyL0Zvb3Rlci5qcyc7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAnY29tcG9uZW50cy9DdXN0b21CdXR0b25zL0J1dHRvbi5qcyc7XHJcbmltcG9ydCBHcmlkQ29udGFpbmVyIGZyb20gJ2NvbXBvbmVudHMvR3JpZC9HcmlkQ29udGFpbmVyLmpzJztcclxuaW1wb3J0IEdyaWRJdGVtIGZyb20gJ2NvbXBvbmVudHMvR3JpZC9HcmlkSXRlbS5qcyc7XHJcbmltcG9ydCBIZWFkZXJMaW5rcyBmcm9tICdjb21wb25lbnRzL0hlYWRlci9IZWFkZXJMaW5rcy5qcyc7XHJcbmltcG9ydCBOYXZQaWxscyBmcm9tICdjb21wb25lbnRzL05hdlBpbGxzL05hdlBpbGxzLmpzJztcclxuaW1wb3J0IFBhcmFsbGF4IGZyb20gJ2NvbXBvbmVudHMvUGFyYWxsYXgvUGFyYWxsYXguanMnO1xyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tICdzdHlsZXMvanNzL25leHRqcy1tYXRlcmlhbC1raXQvcGFnZXMvc3BvbnNvcnNQYWdlLmpzJztcclxuXHJcbi8vIENhcm91c2VsXHJcbmltcG9ydCBDYXJvdXNlbCBmcm9tICdyZWFjdC1zbGljayc7XHJcbmltcG9ydCBMb2NhdGlvbk9uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9Mb2NhdGlvbk9uJztcclxuaW1wb3J0IENhcmQgZnJvbSAnY29tcG9uZW50cy9DYXJkL0NhcmQuanMnO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyhzdHlsZXMpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gR2FsbGVyeVBhZ2UocHJvcHMpIHtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgY29uc3QgeyAuLi5yZXN0IH0gPSBwcm9wcztcclxuICBjb25zdCBpbWFnZUNsYXNzZXMgPSBjbGFzc05hbWVzKFxyXG4gICAgY2xhc3Nlcy5pbWdSYWlzZWQsXHJcbiAgICBjbGFzc2VzLmltZ1JvdW5kZWRDaXJjbGUsXHJcbiAgICBjbGFzc2VzLmltZ0ZsdWlkXHJcbiAgKTtcclxuICBjb25zdCBuYXZJbWFnZUNsYXNzZXMgPSBjbGFzc05hbWVzKGNsYXNzZXMuaW1nUm91bmRlZCwgY2xhc3Nlcy5pbWdHYWxsZXJ5KTtcclxuXHJcbiAgY29uc3Qgc2V0dGluZ3MgPSB7XHJcbiAgICBkb3RzOiB0cnVlLFxyXG4gICAgaW5maW5pdGU6IHRydWUsXHJcbiAgICBzcGVlZDogNTAwLFxyXG4gICAgc2xpZGVzVG9TaG93OiAxLFxyXG4gICAgc2xpZGVzVG9TY3JvbGw6IDEsXHJcbiAgICAvLyBhdXRvcGxheTogdHJ1ZSxcclxuICB9O1xyXG5cclxuICBjb25zdCBpbWFnZXMgPSBbXHJcbiAgICB7XHJcbiAgICAgIHNyYzogJy9pbWcvZ2FsbGVyeS9pbnZvbHZlbWVudGZhaXIuanBnJyxcclxuICAgICAgYWx0OiAnQ0VBUyBJbnZvbHZlbWVudCBGYWlyIDIwMjEnLFxyXG4gICAgICBjYXB0aW9uOiAnQ0VBUyBJbnZvbHZlbWVudCBGYWlyIDIwMjEnLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgc3JjOiAnL2ltZy9nYWxsZXJ5L2dibTEtMC5wbmcnLFxyXG4gICAgICBhbHQ6ICdNZWV0IHRoZSBFLUJvYXJkIScsXHJcbiAgICAgIGNhcHRpb246ICdNZWV0IHRoZSBFLUJvYXJkIScsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBzcmM6ICcvaW1nL2dhbGxlcnkvZ2JtMS0xLmpwZycsXHJcbiAgICAgIGFsdDogJ0dCTSAjMSBGYWxsIDIwMjEnLFxyXG4gICAgICBjYXB0aW9uOiAnR0JNICMxIEZhbGwgMjAyMScsXHJcbiAgICB9LFxyXG4gIF07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8SGVhZGVyXHJcbiAgICAgICAgY29sb3I9J3RyYW5zcGFyZW50J1xyXG4gICAgICAgIGJyYW5kPSdTdG9ueSBCcm9vayBDb21wdXRpbmcgU29jaWV0eSdcclxuICAgICAgICByaWdodExpbmtzPXs8SGVhZGVyTGlua3MgLz59XHJcbiAgICAgICAgZml4ZWRcclxuICAgICAgICBjaGFuZ2VDb2xvck9uU2Nyb2xsPXt7XHJcbiAgICAgICAgICBoZWlnaHQ6IDYwLFxyXG4gICAgICAgICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICAgICAgfX1cclxuICAgICAgICB7Li4ucmVzdH1cclxuICAgICAgLz5cclxuICAgICAgPFBhcmFsbGF4IHNtYWxsIGZpbHRlciBpbWFnZT0nL2ltZy9wcm9maWxlLWJnLmpwZycgLz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZXMoY2xhc3Nlcy5tYWluLCBjbGFzc2VzLm1haW5SYWlzZWQpfT5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY29udGFpbmVyfT5cclxuICAgICAgICAgICAgPEdyaWRDb250YWluZXIganVzdGlmeT0nY2VudGVyJz5cclxuICAgICAgICAgICAgICA8R3JpZEl0ZW0geHM9ezEyfSBzbT17MTJ9IG1kPXs2fT5cclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxyXG4gICAgICAgICAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogMTAwLFxyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlfT5HYWxsZXJ5PC9oMz5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuZGVzY3JpcHRpb259PlxyXG4gICAgICAgICAgICAgICAgICAgIEJyb3dzZSB0aHJvdWdoIG91ciBnYWxsZXJ5IHRvIGdldCBhIHNlbnNlIG9mIHdoYXQgd2UgZG8hIElmXHJcbiAgICAgICAgICAgICAgICAgICAgeW91J2QgbGlrZSB0byBjb250cmlidXRlLCBwbGVhc2UgZW1haWwgdXMgYXR7JyAnfVxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9J21haWx0bzpzYnVjb21wdXRpbmdzb2NpZXR5QGdtYWlsLmNvbSc+XHJcbiAgICAgICAgICAgICAgICAgICAgICBzYnVjb21wdXRpbmdzb2NpZXR5QGdtYWlsLmNvbVxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxDYXJvdXNlbCB7Li4uc2V0dGluZ3N9PlxyXG4gICAgICAgICAgICAgICAgICAgIHtpbWFnZXMubWFwKChpbWFnZSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17aW1hZ2Uuc3JjfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD17aW1hZ2UuYWx0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nc2xpY2staW1hZ2UnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdzbGljay1jYXB0aW9uJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3R0b206IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAncmdiYSgwLDAsMCwwLjUpJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IHN0eWxlPXt7IG1hcmdpbjogMCB9fT57aW1hZ2UuY2FwdGlvbn08L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICA8L0Nhcm91c2VsPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9HcmlkSXRlbT5cclxuICAgICAgICAgICAgPC9HcmlkQ29udGFpbmVyPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8Rm9vdGVyIC8+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=