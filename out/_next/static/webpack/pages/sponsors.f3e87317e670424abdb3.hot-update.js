webpackHotUpdate_N_E("pages/sponsors",{

/***/ "./components/Grid/GridContainer.js":
/*!******************************************!*\
  !*** ./components/Grid/GridContainer.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GridContainer; });
/* harmony import */ var C_Users_Lawrence_sbcs_nextjs_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_Lawrence_sbcs_nextjs_node_modules_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");




var _jsxFileName = "C:\\Users\\Lawrence\\sbcs-nextjs\\components\\Grid\\GridContainer.js",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_Users_Lawrence_sbcs_nextjs_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

 // nodejs library to set properties for components

 // @material-ui/core components



var styles = {
  grid: {
    marginRight: '-15px',
    marginLeft: '-15px',
    width: 'auto'
  }
};
var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["makeStyles"])(styles);
function GridContainer(props) {
  _s();

  var classes = useStyles();

  var children = props.children,
      className = props.className,
      rest = Object(C_Users_Lawrence_sbcs_nextjs_node_modules_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(props, ["children", "className"]);

  console.log(className);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__["default"], _objectSpread(_objectSpread({
    container: true
  }, rest), {}, {
    className: classes.grid + ' ' + className,
    children: children
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 5
  }, this);
}

_s(GridContainer, "8g5FPXexvSEOsxdmU7HicukHGqY=", false, function () {
  return [useStyles];
});

_c = GridContainer;
GridContainer.defaultProps = {
  className: ''
};
GridContainer.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.node,
  className: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string
};

var _c;

$RefreshReg$(_c, "GridContainer");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9HcmlkL0dyaWRDb250YWluZXIuanMiXSwibmFtZXMiOlsic3R5bGVzIiwiZ3JpZCIsIm1hcmdpblJpZ2h0IiwibWFyZ2luTGVmdCIsIndpZHRoIiwidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsIkdyaWRDb250YWluZXIiLCJwcm9wcyIsImNsYXNzZXMiLCJjaGlsZHJlbiIsImNsYXNzTmFtZSIsInJlc3QiLCJjb25zb2xlIiwibG9nIiwiZGVmYXVsdFByb3BzIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwibm9kZSIsInN0cmluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBQ0E7O0NBR0E7O0FBQ0E7QUFDQTtBQUVBLElBQU1BLE1BQU0sR0FBRztBQUNiQyxNQUFJLEVBQUU7QUFDSkMsZUFBVyxFQUFFLE9BRFQ7QUFFSkMsY0FBVSxFQUFFLE9BRlI7QUFHSkMsU0FBSyxFQUFFO0FBSEg7QUFETyxDQUFmO0FBUUEsSUFBTUMsU0FBUyxHQUFHQywyRUFBVSxDQUFDTixNQUFELENBQTVCO0FBRWUsU0FBU08sYUFBVCxDQUF1QkMsS0FBdkIsRUFBOEI7QUFBQTs7QUFDM0MsTUFBTUMsT0FBTyxHQUFHSixTQUFTLEVBQXpCOztBQUQyQyxNQUVuQ0ssUUFGbUMsR0FFRkYsS0FGRSxDQUVuQ0UsUUFGbUM7QUFBQSxNQUV6QkMsU0FGeUIsR0FFRkgsS0FGRSxDQUV6QkcsU0FGeUI7QUFBQSxNQUVYQyxJQUZXLGlLQUVGSixLQUZFOztBQUczQ0ssU0FBTyxDQUFDQyxHQUFSLENBQVlILFNBQVo7QUFDQSxzQkFDRSxxRUFBQyw4REFBRDtBQUFNLGFBQVM7QUFBZixLQUFvQkMsSUFBcEI7QUFBMEIsYUFBUyxFQUFFSCxPQUFPLENBQUNSLElBQVIsR0FBZSxHQUFmLEdBQXFCVSxTQUExRDtBQUFBLGNBQ0dEO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBS0Q7O0dBVHVCSCxhO1VBQ05GLFM7OztLQURNRSxhO0FBV3hCQSxhQUFhLENBQUNRLFlBQWQsR0FBNkI7QUFDM0JKLFdBQVMsRUFBRTtBQURnQixDQUE3QjtBQUlBSixhQUFhLENBQUNTLFNBQWQsR0FBMEI7QUFDeEJOLFVBQVEsRUFBRU8saURBQVMsQ0FBQ0MsSUFESTtBQUV4QlAsV0FBUyxFQUFFTSxpREFBUyxDQUFDRTtBQUZHLENBQTFCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Nwb25zb3JzLmYzZTg3MzE3ZTY3MDQyNGFiZGIzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuLy8gbm9kZWpzIGxpYnJhcnkgdG8gc2V0IHByb3BlcnRpZXMgZm9yIGNvbXBvbmVudHNcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbi8vIEBtYXRlcmlhbC11aS9jb3JlIGNvbXBvbmVudHNcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IEdyaWQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvR3JpZCc7XG5cbmNvbnN0IHN0eWxlcyA9IHtcbiAgZ3JpZDoge1xuICAgIG1hcmdpblJpZ2h0OiAnLTE1cHgnLFxuICAgIG1hcmdpbkxlZnQ6ICctMTVweCcsXG4gICAgd2lkdGg6ICdhdXRvJyxcbiAgfSxcbn07XG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoc3R5bGVzKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gR3JpZENvbnRhaW5lcihwcm9wcykge1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG4gIGNvbnN0IHsgY2hpbGRyZW4sIGNsYXNzTmFtZSwgLi4ucmVzdCB9ID0gcHJvcHM7XG4gIGNvbnNvbGUubG9nKGNsYXNzTmFtZSk7XG4gIHJldHVybiAoXG4gICAgPEdyaWQgY29udGFpbmVyIHsuLi5yZXN0fSBjbGFzc05hbWU9e2NsYXNzZXMuZ3JpZCArICcgJyArIGNsYXNzTmFtZX0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9HcmlkPlxuICApO1xufVxuXG5HcmlkQ29udGFpbmVyLmRlZmF1bHRQcm9wcyA9IHtcbiAgY2xhc3NOYW1lOiAnJyxcbn07XG5cbkdyaWRDb250YWluZXIucHJvcFR5cGVzID0ge1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9