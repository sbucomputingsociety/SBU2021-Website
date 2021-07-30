webpackHotUpdate_N_E("pages/contact",{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9IZWFkZXIvSGVhZGVyLmpzIl0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJzdHlsZXMiLCJIZWFkZXIiLCJwcm9wcyIsImNsYXNzZXMiLCJSZWFjdCIsInVzZVN0YXRlIiwibW9iaWxlT3BlbiIsInNldE1vYmlsZU9wZW4iLCJ1c2VFZmZlY3QiLCJjaGFuZ2VDb2xvck9uU2Nyb2xsIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImhlYWRlckNvbG9yQ2hhbmdlIiwiY2xlYW51cCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJoYW5kbGVEcmF3ZXJUb2dnbGUiLCJjb2xvciIsIndpbmRvd3NTY3JvbGxUb3AiLCJwYWdlWU9mZnNldCIsImhlaWdodCIsImRvY3VtZW50IiwiYm9keSIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiYWRkIiwicmlnaHRMaW5rcyIsImxlZnRMaW5rcyIsImJyYW5kIiwiZml4ZWQiLCJhYnNvbHV0ZSIsImFwcEJhckNsYXNzZXMiLCJjbGFzc05hbWVzIiwiYXBwQmFyIiwiYnJhbmRDb21wb25lbnQiLCJ0aXRsZSIsImNvbnRhaW5lciIsInVuZGVmaW5lZCIsImZsZXgiLCJwYXBlciIsImRyYXdlclBhcGVyIiwiYXBwUmVzcG9uc2l2ZSIsImRlZmF1bHRQcm9wIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwib25lT2YiLCJub2RlIiwic3RyaW5nIiwiYm9vbCIsInNoYXBlIiwibnVtYmVyIiwiaXNSZXF1aXJlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtDQUVBOztDQUVBOztDQUVBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtDQUVBOztDQUVBOztBQUNBO0FBRUEsSUFBTUEsU0FBUyxHQUFHQywyRUFBVSxDQUFDQyxpR0FBRCxDQUE1QjtBQUVl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QUFTLENBQUNNLE1BQVYsQ0FBaUJDLFVBRFU7QUFFbkNuQyxTQUFLLEVBQUU0QixpREFBUyxDQUFDQyxLQUFWLENBQWdCLENBQ3JCLFNBRHFCLEVBRXJCLE1BRnFCLEVBR3JCLFNBSHFCLEVBSXJCLFNBSnFCLEVBS3JCLFFBTHFCLEVBTXJCLGFBTnFCLEVBT3JCLE9BUHFCLEVBUXJCLE1BUnFCLEVBU3JCLE1BVHFCLENBQWhCLEVBVUpNO0FBWmdDLEdBQWhCO0FBdkJKLENBQW5CIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2NvbnRhY3QuYzk0MGMxMmQ0Y2M0YjRlOGMzNjIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuLy8gbm9kZWpzIGxpYnJhcnkgdGhhdCBjb25jYXRlbmF0ZXMgY2xhc3Nlc1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG4vLyBub2RlanMgbGlicmFyeSB0byBzZXQgcHJvcGVydGllcyBmb3IgY29tcG9uZW50c1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbi8vIEBtYXRlcmlhbC11aS9jb3JlIGNvbXBvbmVudHNcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IEFwcEJhciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9BcHBCYXInO1xuaW1wb3J0IFRvb2xiYXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVG9vbGJhcic7XG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uJztcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcbmltcG9ydCBIaWRkZW4gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSGlkZGVuJztcbmltcG9ydCBEcmF3ZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRHJhd2VyJztcbi8vIEBtYXRlcmlhbC11aS9pY29uc1xuaW1wb3J0IE1lbnUgZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL01lbnUnO1xuLy8gY29yZSBjb21wb25lbnRzXG5pbXBvcnQgc3R5bGVzIGZyb20gJ3N0eWxlcy9qc3MvbmV4dGpzLW1hdGVyaWFsLWtpdC9jb21wb25lbnRzL2hlYWRlclN0eWxlLmpzJztcblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyhzdHlsZXMpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIZWFkZXIocHJvcHMpIHtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuICBjb25zdCBbbW9iaWxlT3Blbiwgc2V0TW9iaWxlT3Blbl0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHByb3BzLmNoYW5nZUNvbG9yT25TY3JvbGwpIHtcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBoZWFkZXJDb2xvckNoYW5nZSk7XG4gICAgfVxuICAgIHJldHVybiBmdW5jdGlvbiBjbGVhbnVwKCkge1xuICAgICAgaWYgKHByb3BzLmNoYW5nZUNvbG9yT25TY3JvbGwpIHtcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGhlYWRlckNvbG9yQ2hhbmdlKTtcbiAgICAgIH1cbiAgICB9O1xuICB9KTtcbiAgY29uc3QgaGFuZGxlRHJhd2VyVG9nZ2xlID0gKCkgPT4ge1xuICAgIHNldE1vYmlsZU9wZW4oIW1vYmlsZU9wZW4pO1xuICB9O1xuICBjb25zdCBoZWFkZXJDb2xvckNoYW5nZSA9ICgpID0+IHtcbiAgICBjb25zdCB7IGNvbG9yLCBjaGFuZ2VDb2xvck9uU2Nyb2xsIH0gPSBwcm9wcztcbiAgICBjb25zdCB3aW5kb3dzU2Nyb2xsVG9wID0gd2luZG93LnBhZ2VZT2Zmc2V0O1xuICAgIGlmICh3aW5kb3dzU2Nyb2xsVG9wID4gY2hhbmdlQ29sb3JPblNjcm9sbC5oZWlnaHQpIHtcbiAgICAgIGRvY3VtZW50LmJvZHlcbiAgICAgICAgLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkZXInKVswXVxuICAgICAgICAuY2xhc3NMaXN0LnJlbW92ZShjbGFzc2VzW2NvbG9yXSk7XG4gICAgICBkb2N1bWVudC5ib2R5XG4gICAgICAgIC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZGVyJylbMF1cbiAgICAgICAgLmNsYXNzTGlzdC5hZGQoY2xhc3Nlc1tjaGFuZ2VDb2xvck9uU2Nyb2xsLmNvbG9yXSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRvY3VtZW50LmJvZHlcbiAgICAgICAgLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkZXInKVswXVxuICAgICAgICAuY2xhc3NMaXN0LmFkZChjbGFzc2VzW2NvbG9yXSk7XG4gICAgICBkb2N1bWVudC5ib2R5XG4gICAgICAgIC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZGVyJylbMF1cbiAgICAgICAgLmNsYXNzTGlzdC5yZW1vdmUoY2xhc3Nlc1tjaGFuZ2VDb2xvck9uU2Nyb2xsLmNvbG9yXSk7XG4gICAgfVxuICB9O1xuICBjb25zdCB7IGNvbG9yLCByaWdodExpbmtzLCBsZWZ0TGlua3MsIGJyYW5kLCBmaXhlZCwgYWJzb2x1dGUgfSA9IHByb3BzO1xuICBjb25zdCBhcHBCYXJDbGFzc2VzID0gY2xhc3NOYW1lcyh7XG4gICAgW2NsYXNzZXMuYXBwQmFyXTogdHJ1ZSxcbiAgICBbY2xhc3Nlc1tjb2xvcl1dOiBjb2xvcixcbiAgICBbY2xhc3Nlcy5hYnNvbHV0ZV06IGFic29sdXRlLFxuICAgIFtjbGFzc2VzLmZpeGVkXTogZml4ZWQsXG4gIH0pO1xuICBjb25zdCBicmFuZENvbXBvbmVudCA9IChcbiAgICA8TGluayBocmVmPScvJyBhcz0nLyc+XG4gICAgICA8QnV0dG9uIGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZX0+e2JyYW5kfTwvQnV0dG9uPlxuICAgIDwvTGluaz5cbiAgKTtcbiAgcmV0dXJuIChcbiAgICA8QXBwQmFyIGNsYXNzTmFtZT17YXBwQmFyQ2xhc3Nlc30+XG4gICAgICA8VG9vbGJhciBjbGFzc05hbWU9e2NsYXNzZXMuY29udGFpbmVyfT5cbiAgICAgICAge2xlZnRMaW5rcyAhPT0gdW5kZWZpbmVkID8gYnJhbmRDb21wb25lbnQgOiBudWxsfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5mbGV4fT5cbiAgICAgICAgICB7bGVmdExpbmtzICE9PSB1bmRlZmluZWQgPyAoXG4gICAgICAgICAgICA8SGlkZGVuIHNtRG93biBpbXBsZW1lbnRhdGlvbj0nY3NzJz5cbiAgICAgICAgICAgICAge2xlZnRMaW5rc31cbiAgICAgICAgICAgIDwvSGlkZGVuPlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICBicmFuZENvbXBvbmVudFxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8SGlkZGVuIHNtRG93biBpbXBsZW1lbnRhdGlvbj0nY3NzJz5cbiAgICAgICAgICB7cmlnaHRMaW5rc31cbiAgICAgICAgPC9IaWRkZW4+XG4gICAgICAgIDxIaWRkZW4gbWRVcD5cbiAgICAgICAgICA8SWNvbkJ1dHRvblxuICAgICAgICAgICAgY29sb3I9J2luaGVyaXQnXG4gICAgICAgICAgICBhcmlhLWxhYmVsPSdvcGVuIGRyYXdlcidcbiAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZURyYXdlclRvZ2dsZX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8TWVudSAvPlxuICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cbiAgICAgICAgPC9IaWRkZW4+XG4gICAgICA8L1Rvb2xiYXI+XG4gICAgICA8SGlkZGVuIG1kVXAgaW1wbGVtZW50YXRpb249J2pzJz5cbiAgICAgICAgPERyYXdlclxuICAgICAgICAgIHZhcmlhbnQ9J3RlbXBvcmFyeSdcbiAgICAgICAgICBhbmNob3I9eydyaWdodCd9XG4gICAgICAgICAgb3Blbj17bW9iaWxlT3Blbn1cbiAgICAgICAgICBjbGFzc2VzPXt7XG4gICAgICAgICAgICBwYXBlcjogY2xhc3Nlcy5kcmF3ZXJQYXBlcixcbiAgICAgICAgICB9fVxuICAgICAgICAgIG9uQ2xvc2U9e2hhbmRsZURyYXdlclRvZ2dsZX1cbiAgICAgICAgPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmFwcFJlc3BvbnNpdmV9PlxuICAgICAgICAgICAge2xlZnRMaW5rc31cbiAgICAgICAgICAgIHtyaWdodExpbmtzfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L0RyYXdlcj5cbiAgICAgIDwvSGlkZGVuPlxuICAgIDwvQXBwQmFyPlxuICApO1xufVxuXG5IZWFkZXIuZGVmYXVsdFByb3AgPSB7XG4gIGNvbG9yOiAnd2hpdGUnLFxufTtcblxuSGVhZGVyLnByb3BUeXBlcyA9IHtcbiAgY29sb3I6IFByb3BUeXBlcy5vbmVPZihbXG4gICAgJ3ByaW1hcnknLFxuICAgICdpbmZvJyxcbiAgICAnc3VjY2VzcycsXG4gICAgJ3dhcm5pbmcnLFxuICAgICdkYW5nZXInLFxuICAgICd0cmFuc3BhcmVudCcsXG4gICAgJ3doaXRlJyxcbiAgICAncm9zZScsXG4gICAgJ2RhcmsnLFxuICBdKSxcbiAgcmlnaHRMaW5rczogUHJvcFR5cGVzLm5vZGUsXG4gIGxlZnRMaW5rczogUHJvcFR5cGVzLm5vZGUsXG4gIGJyYW5kOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBmaXhlZDogUHJvcFR5cGVzLmJvb2wsXG4gIGFic29sdXRlOiBQcm9wVHlwZXMuYm9vbCxcbiAgLy8gdGhpcyB3aWxsIGNhdXNlIHRoZSBzaWRlYmFyIHRvIGNoYW5nZSB0aGUgY29sb3IgZnJvbVxuICAvLyBwcm9wcy5jb2xvciAoc2VlIGFib3ZlKSB0byBjaGFuZ2VDb2xvck9uU2Nyb2xsLmNvbG9yXG4gIC8vIHdoZW4gdGhlIHdpbmRvdy5wYWdlWU9mZnNldCBpcyBoZWlnaGVyIG9yIGVxdWFsIHRvXG4gIC8vIGNoYW5nZUNvbG9yT25TY3JvbGwuaGVpZ2h0IGFuZCB0aGVuIHdoZW4gaXQgaXMgc21hbGxlciB0aGFuXG4gIC8vIGNoYW5nZUNvbG9yT25TY3JvbGwuaGVpZ2h0IGNoYW5nZSBpdCBiYWNrIHRvXG4gIC8vIHByb3BzLmNvbG9yIChzZWUgYWJvdmUpXG4gIGNoYW5nZUNvbG9yT25TY3JvbGw6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgaGVpZ2h0OiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gICAgY29sb3I6IFByb3BUeXBlcy5vbmVPZihbXG4gICAgICAncHJpbWFyeScsXG4gICAgICAnaW5mbycsXG4gICAgICAnc3VjY2VzcycsXG4gICAgICAnd2FybmluZycsXG4gICAgICAnZGFuZ2VyJyxcbiAgICAgICd0cmFuc3BhcmVudCcsXG4gICAgICAnd2hpdGUnLFxuICAgICAgJ3Jvc2UnLFxuICAgICAgJ2RhcmsnLFxuICAgIF0pLmlzUmVxdWlyZWQsXG4gIH0pLFxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=