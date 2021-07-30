webpackHotUpdate_N_E("pages/about",{

/***/ "./components/Header/Header.js":
/*!*************************************!*\
  !*** ./components/Header/Header.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Header; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_Lawrence_sbcs_nextjs_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var C_Users_Lawrence_sbcs_nextjs_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/AppBar */ "./node_modules/@material-ui/core/esm/AppBar/index.js");
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Toolbar */ "./node_modules/@material-ui/core/esm/Toolbar/index.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/Hidden */ "./node_modules/@material-ui/core/esm/Hidden/index.js");
/* harmony import */ var _material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/Drawer */ "./node_modules/@material-ui/core/esm/Drawer/index.js");
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/icons/Menu */ "./node_modules/@material-ui/icons/Menu.js");
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var styles_jss_nextjs_material_kit_components_headerStyle_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! styles/jss/nextjs-material-kit/components/headerStyle.js */ "./styles/jss/nextjs-material-kit/components/headerStyle.js");




var _jsxFileName = "C:\\Users\\Lawrence\\sbcs-nextjs\\components\\Header\\Header.js",
    _s = $RefreshSig$();


 // nodejs library that concatenates classes

 // nodejs library to set properties for components

 // @material-ui/core components







 // @material-ui/icons

 // core components


var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__["makeStyles"])(styles_jss_nextjs_material_kit_components_headerStyle_js__WEBPACK_IMPORTED_MODULE_15__["default"]);
function Header(props) {
  _s();

  var _classNames;

  var classes = useStyles();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState(false),
      _React$useState2 = Object(C_Users_Lawrence_sbcs_nextjs_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_React$useState, 2),
      mobileOpen = _React$useState2[0],
      setMobileOpen = _React$useState2[1];

  react__WEBPACK_IMPORTED_MODULE_3___default.a.useEffect(function () {
    if (props.changeColorOnScroll) {
      window.addEventListener('scroll', headerColorChange);
    }

    return function cleanup() {
      if (props.changeColorOnScroll) {
        window.removeEventListener('scroll', headerColorChange);
      }
    };
  });

  var handleDrawerToggle = function handleDrawerToggle() {
    setMobileOpen(!mobileOpen);
  };

  var headerColorChange = function headerColorChange() {
    var color = props.color,
        changeColorOnScroll = props.changeColorOnScroll;
    var windowsScrollTop = window.pageYOffset;

    if (windowsScrollTop > changeColorOnScroll.height) {
      document.body.getElementsByTagName('header')[0].classList.remove(classes[color]);
      document.body.getElementsByTagName('header')[0].classList.add(classes[changeColorOnScroll.color]);
    } else {
      document.body.getElementsByTagName('header')[0].classList.add(classes[color]);
      document.body.getElementsByTagName('header')[0].classList.remove(classes[changeColorOnScroll.color]);
    }
  };

  var color = props.color,
      rightLinks = props.rightLinks,
      leftLinks = props.leftLinks,
      brand = props.brand,
      fixed = props.fixed,
      absolute = props.absolute;
  var appBarClasses = classnames__WEBPACK_IMPORTED_MODULE_5___default()((_classNames = {}, Object(C_Users_Lawrence_sbcs_nextjs_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_classNames, classes.appBar, true), Object(C_Users_Lawrence_sbcs_nextjs_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_classNames, classes[color], color), Object(C_Users_Lawrence_sbcs_nextjs_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_classNames, classes.absolute, absolute), Object(C_Users_Lawrence_sbcs_nextjs_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_classNames, classes.fixed, fixed), _classNames));

  var brandComponent = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/",
    as: "/",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_11__["default"], {
      className: classes.title,
      children: brand
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 65,
    columnNumber: 5
  }, this);

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_8__["default"], {
    className: appBarClasses,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_9__["default"], {
      className: classes.container,
      children: [leftLinks !== undefined ? brandComponent : null, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: classes.flex,
        children: leftLinks !== undefined ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_12__["default"], {
          smDown: true,
          implementation: "css",
          children: leftLinks
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 13
        }, this) : brandComponent
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_12__["default"], {
        smDown: true,
        implementation: "css",
        children: rightLinks
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_12__["default"], {
        mdUp: true,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_10__["default"], {
          color: "inherit",
          "aria-label": "open drawer",
          onClick: handleDrawerToggle,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_14___default.a, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 91,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_12__["default"], {
      mdUp: true,
      implementation: "js",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_13__["default"], {
        variant: "temporary",
        anchor: 'right',
        open: mobileOpen,
        classes: {
          paper: classes.drawerPaper
        },
        onClose: handleDrawerToggle,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: classes.appResponsive,
          children: [leftLinks, rightLinks]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 105,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 70,
    columnNumber: 5
  }, this);
}

_s(Header, "OqlxhosvwaBbCzgY5XbnTs60SMc=", false, function () {
  return [useStyles];
});

_c = Header;
Header.defaultProp = {
  color: 'white'
};
Header.propTypes = {
  color: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.oneOf(['primary', 'info', 'success', 'warning', 'danger', 'transparent', 'white', 'rose', 'dark']),
  rightLinks: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.node,
  leftLinks: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.node,
  brand: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string,
  fixed: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.bool,
  absolute: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.bool,
  // this will cause the sidebar to change the color from
  // props.color (see above) to changeColorOnScroll.color
  // when the window.pageYOffset is heigher or equal to
  // changeColorOnScroll.height and then when it is smaller than
  // changeColorOnScroll.height change it back to
  // props.color (see above)
  changeColorOnScroll: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.shape({
    height: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.number.isRequired,
    color: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.oneOf(['primary', 'info', 'success', 'warning', 'danger', 'transparent', 'white', 'rose', 'dark']).isRequired
  })
};

var _c;

$RefreshReg$(_c, "Header");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9IZWFkZXIvSGVhZGVyLmpzIl0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJzdHlsZXMiLCJIZWFkZXIiLCJwcm9wcyIsImNsYXNzZXMiLCJSZWFjdCIsInVzZVN0YXRlIiwibW9iaWxlT3BlbiIsInNldE1vYmlsZU9wZW4iLCJ1c2VFZmZlY3QiLCJjaGFuZ2VDb2xvck9uU2Nyb2xsIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImhlYWRlckNvbG9yQ2hhbmdlIiwiY2xlYW51cCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJoYW5kbGVEcmF3ZXJUb2dnbGUiLCJjb2xvciIsIndpbmRvd3NTY3JvbGxUb3AiLCJwYWdlWU9mZnNldCIsImhlaWdodCIsImRvY3VtZW50IiwiYm9keSIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiYWRkIiwicmlnaHRMaW5rcyIsImxlZnRMaW5rcyIsImJyYW5kIiwiZml4ZWQiLCJhYnNvbHV0ZSIsImFwcEJhckNsYXNzZXMiLCJjbGFzc05hbWVzIiwiYXBwQmFyIiwiYnJhbmRDb21wb25lbnQiLCJ0aXRsZSIsImNvbnRhaW5lciIsInVuZGVmaW5lZCIsImZsZXgiLCJwYXBlciIsImRyYXdlclBhcGVyIiwiYXBwUmVzcG9uc2l2ZSIsImRlZmF1bHRQcm9wIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwib25lT2YiLCJub2RlIiwic3RyaW5nIiwiYm9vbCIsInNoYXBlIiwibnVtYmVyIiwiaXNSZXF1aXJlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtDQUVBOztDQUVBOztDQUVBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtDQUVBOztDQUVBOztBQUNBO0FBRUEsSUFBTUEsU0FBUyxHQUFHQywyRUFBVSxDQUFDQyxpR0FBRCxDQUE1QjtBQUVl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QUFTLENBQUNNLE1BQVYsQ0FBaUJDLFVBRFU7QUFFbkNuQyxTQUFLLEVBQUU0QixpREFBUyxDQUFDQyxLQUFWLENBQWdCLENBQ3JCLFNBRHFCLEVBRXJCLE1BRnFCLEVBR3JCLFNBSHFCLEVBSXJCLFNBSnFCLEVBS3JCLFFBTHFCLEVBTXJCLGFBTnFCLEVBT3JCLE9BUHFCLEVBUXJCLE1BUnFCLEVBU3JCLE1BVHFCLENBQWhCLEVBVUpNO0FBWmdDLEdBQWhCO0FBdkJKLENBQW5CIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2Fib3V0LmM5NDBjMTJkNGNjNGI0ZThjMzYyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbi8vIG5vZGVqcyBsaWJyYXJ5IHRoYXQgY29uY2F0ZW5hdGVzIGNsYXNzZXNcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuLy8gbm9kZWpzIGxpYnJhcnkgdG8gc2V0IHByb3BlcnRpZXMgZm9yIGNvbXBvbmVudHNcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG4vLyBAbWF0ZXJpYWwtdWkvY29yZSBjb21wb25lbnRzXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCBBcHBCYXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQXBwQmFyJztcbmltcG9ydCBUb29sYmFyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1Rvb2xiYXInO1xuaW1wb3J0IEljb25CdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvbic7XG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbic7XG5pbXBvcnQgSGlkZGVuIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0hpZGRlbic7XG5pbXBvcnQgRHJhd2VyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0RyYXdlcic7XG4vLyBAbWF0ZXJpYWwtdWkvaWNvbnNcbmltcG9ydCBNZW51IGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9NZW51Jztcbi8vIGNvcmUgY29tcG9uZW50c1xuaW1wb3J0IHN0eWxlcyBmcm9tICdzdHlsZXMvanNzL25leHRqcy1tYXRlcmlhbC1raXQvY29tcG9uZW50cy9oZWFkZXJTdHlsZS5qcyc7XG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoc3R5bGVzKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSGVhZGVyKHByb3BzKSB7XG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcbiAgY29uc3QgW21vYmlsZU9wZW4sIHNldE1vYmlsZU9wZW5dID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChwcm9wcy5jaGFuZ2VDb2xvck9uU2Nyb2xsKSB7XG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgaGVhZGVyQ29sb3JDaGFuZ2UpO1xuICAgIH1cbiAgICByZXR1cm4gZnVuY3Rpb24gY2xlYW51cCgpIHtcbiAgICAgIGlmIChwcm9wcy5jaGFuZ2VDb2xvck9uU2Nyb2xsKSB7XG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBoZWFkZXJDb2xvckNoYW5nZSk7XG4gICAgICB9XG4gICAgfTtcbiAgfSk7XG4gIGNvbnN0IGhhbmRsZURyYXdlclRvZ2dsZSA9ICgpID0+IHtcbiAgICBzZXRNb2JpbGVPcGVuKCFtb2JpbGVPcGVuKTtcbiAgfTtcbiAgY29uc3QgaGVhZGVyQ29sb3JDaGFuZ2UgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBjb2xvciwgY2hhbmdlQ29sb3JPblNjcm9sbCB9ID0gcHJvcHM7XG4gICAgY29uc3Qgd2luZG93c1Njcm9sbFRvcCA9IHdpbmRvdy5wYWdlWU9mZnNldDtcbiAgICBpZiAod2luZG93c1Njcm9sbFRvcCA+IGNoYW5nZUNvbG9yT25TY3JvbGwuaGVpZ2h0KSB7XG4gICAgICBkb2N1bWVudC5ib2R5XG4gICAgICAgIC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZGVyJylbMF1cbiAgICAgICAgLmNsYXNzTGlzdC5yZW1vdmUoY2xhc3Nlc1tjb2xvcl0pO1xuICAgICAgZG9jdW1lbnQuYm9keVxuICAgICAgICAuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWRlcicpWzBdXG4gICAgICAgIC5jbGFzc0xpc3QuYWRkKGNsYXNzZXNbY2hhbmdlQ29sb3JPblNjcm9sbC5jb2xvcl0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBkb2N1bWVudC5ib2R5XG4gICAgICAgIC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZGVyJylbMF1cbiAgICAgICAgLmNsYXNzTGlzdC5hZGQoY2xhc3Nlc1tjb2xvcl0pO1xuICAgICAgZG9jdW1lbnQuYm9keVxuICAgICAgICAuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWRlcicpWzBdXG4gICAgICAgIC5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzZXNbY2hhbmdlQ29sb3JPblNjcm9sbC5jb2xvcl0pO1xuICAgIH1cbiAgfTtcbiAgY29uc3QgeyBjb2xvciwgcmlnaHRMaW5rcywgbGVmdExpbmtzLCBicmFuZCwgZml4ZWQsIGFic29sdXRlIH0gPSBwcm9wcztcbiAgY29uc3QgYXBwQmFyQ2xhc3NlcyA9IGNsYXNzTmFtZXMoe1xuICAgIFtjbGFzc2VzLmFwcEJhcl06IHRydWUsXG4gICAgW2NsYXNzZXNbY29sb3JdXTogY29sb3IsXG4gICAgW2NsYXNzZXMuYWJzb2x1dGVdOiBhYnNvbHV0ZSxcbiAgICBbY2xhc3Nlcy5maXhlZF06IGZpeGVkLFxuICB9KTtcbiAgY29uc3QgYnJhbmRDb21wb25lbnQgPSAoXG4gICAgPExpbmsgaHJlZj0nLycgYXM9Jy8nPlxuICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9PnticmFuZH08L0J1dHRvbj5cbiAgICA8L0xpbms+XG4gICk7XG4gIHJldHVybiAoXG4gICAgPEFwcEJhciBjbGFzc05hbWU9e2FwcEJhckNsYXNzZXN9PlxuICAgICAgPFRvb2xiYXIgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRhaW5lcn0+XG4gICAgICAgIHtsZWZ0TGlua3MgIT09IHVuZGVmaW5lZCA/IGJyYW5kQ29tcG9uZW50IDogbnVsbH1cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuZmxleH0+XG4gICAgICAgICAge2xlZnRMaW5rcyAhPT0gdW5kZWZpbmVkID8gKFxuICAgICAgICAgICAgPEhpZGRlbiBzbURvd24gaW1wbGVtZW50YXRpb249J2Nzcyc+XG4gICAgICAgICAgICAgIHtsZWZ0TGlua3N9XG4gICAgICAgICAgICA8L0hpZGRlbj5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgYnJhbmRDb21wb25lbnRcbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPEhpZGRlbiBzbURvd24gaW1wbGVtZW50YXRpb249J2Nzcyc+XG4gICAgICAgICAge3JpZ2h0TGlua3N9XG4gICAgICAgIDwvSGlkZGVuPlxuICAgICAgICA8SGlkZGVuIG1kVXA+XG4gICAgICAgICAgPEljb25CdXR0b25cbiAgICAgICAgICAgIGNvbG9yPSdpbmhlcml0J1xuICAgICAgICAgICAgYXJpYS1sYWJlbD0nb3BlbiBkcmF3ZXInXG4gICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVEcmF3ZXJUb2dnbGV9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPE1lbnUgLz5cbiAgICAgICAgICA8L0ljb25CdXR0b24+XG4gICAgICAgIDwvSGlkZGVuPlxuICAgICAgPC9Ub29sYmFyPlxuICAgICAgPEhpZGRlbiBtZFVwIGltcGxlbWVudGF0aW9uPSdqcyc+XG4gICAgICAgIDxEcmF3ZXJcbiAgICAgICAgICB2YXJpYW50PSd0ZW1wb3JhcnknXG4gICAgICAgICAgYW5jaG9yPXsncmlnaHQnfVxuICAgICAgICAgIG9wZW49e21vYmlsZU9wZW59XG4gICAgICAgICAgY2xhc3Nlcz17e1xuICAgICAgICAgICAgcGFwZXI6IGNsYXNzZXMuZHJhd2VyUGFwZXIsXG4gICAgICAgICAgfX1cbiAgICAgICAgICBvbkNsb3NlPXtoYW5kbGVEcmF3ZXJUb2dnbGV9XG4gICAgICAgID5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5hcHBSZXNwb25zaXZlfT5cbiAgICAgICAgICAgIHtsZWZ0TGlua3N9XG4gICAgICAgICAgICB7cmlnaHRMaW5rc31cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9EcmF3ZXI+XG4gICAgICA8L0hpZGRlbj5cbiAgICA8L0FwcEJhcj5cbiAgKTtcbn1cblxuSGVhZGVyLmRlZmF1bHRQcm9wID0ge1xuICBjb2xvcjogJ3doaXRlJyxcbn07XG5cbkhlYWRlci5wcm9wVHlwZXMgPSB7XG4gIGNvbG9yOiBQcm9wVHlwZXMub25lT2YoW1xuICAgICdwcmltYXJ5JyxcbiAgICAnaW5mbycsXG4gICAgJ3N1Y2Nlc3MnLFxuICAgICd3YXJuaW5nJyxcbiAgICAnZGFuZ2VyJyxcbiAgICAndHJhbnNwYXJlbnQnLFxuICAgICd3aGl0ZScsXG4gICAgJ3Jvc2UnLFxuICAgICdkYXJrJyxcbiAgXSksXG4gIHJpZ2h0TGlua3M6IFByb3BUeXBlcy5ub2RlLFxuICBsZWZ0TGlua3M6IFByb3BUeXBlcy5ub2RlLFxuICBicmFuZDogUHJvcFR5cGVzLnN0cmluZyxcbiAgZml4ZWQ6IFByb3BUeXBlcy5ib29sLFxuICBhYnNvbHV0ZTogUHJvcFR5cGVzLmJvb2wsXG4gIC8vIHRoaXMgd2lsbCBjYXVzZSB0aGUgc2lkZWJhciB0byBjaGFuZ2UgdGhlIGNvbG9yIGZyb21cbiAgLy8gcHJvcHMuY29sb3IgKHNlZSBhYm92ZSkgdG8gY2hhbmdlQ29sb3JPblNjcm9sbC5jb2xvclxuICAvLyB3aGVuIHRoZSB3aW5kb3cucGFnZVlPZmZzZXQgaXMgaGVpZ2hlciBvciBlcXVhbCB0b1xuICAvLyBjaGFuZ2VDb2xvck9uU2Nyb2xsLmhlaWdodCBhbmQgdGhlbiB3aGVuIGl0IGlzIHNtYWxsZXIgdGhhblxuICAvLyBjaGFuZ2VDb2xvck9uU2Nyb2xsLmhlaWdodCBjaGFuZ2UgaXQgYmFjayB0b1xuICAvLyBwcm9wcy5jb2xvciAoc2VlIGFib3ZlKVxuICBjaGFuZ2VDb2xvck9uU2Nyb2xsOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgIGhlaWdodDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgIGNvbG9yOiBQcm9wVHlwZXMub25lT2YoW1xuICAgICAgJ3ByaW1hcnknLFxuICAgICAgJ2luZm8nLFxuICAgICAgJ3N1Y2Nlc3MnLFxuICAgICAgJ3dhcm5pbmcnLFxuICAgICAgJ2RhbmdlcicsXG4gICAgICAndHJhbnNwYXJlbnQnLFxuICAgICAgJ3doaXRlJyxcbiAgICAgICdyb3NlJyxcbiAgICAgICdkYXJrJyxcbiAgICBdKS5pc1JlcXVpcmVkLFxuICB9KSxcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9