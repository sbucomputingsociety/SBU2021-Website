webpackHotUpdate_N_E("pages/index",{

/***/ "./components/EventCard/EventCard.js":
/*!*******************************************!*\
  !*** ./components/EventCard/EventCard.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EventCard; });
/* harmony import */ var C_Users_Lawrence_sbcs_nextjs_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_Lawrence_sbcs_nextjs_node_modules_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var styles_jss_nextjs_material_kit_imagesStyles_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styles/jss/nextjs-material-kit/imagesStyles.js */ "./styles/jss/nextjs-material-kit/imagesStyles.js");
/* harmony import */ var components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! components/CustomButtons/Button.js */ "./components/CustomButtons/Button.js");




var _jsxFileName = "C:\\Users\\Lawrence\\sbcs-nextjs\\components\\EventCard\\EventCard.js",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_Users_Lawrence_sbcs_nextjs_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

 // nodejs library that concatenates classes

 // nodejs library to set properties for components

 // @material-ui/core components

 // @material-ui/icons
// core components



var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__["makeStyles"])(styles_jss_nextjs_material_kit_imagesStyles_js__WEBPACK_IMPORTED_MODULE_7__["default"]);
function EventCard(props) {
  _s();

  var classes = useStyles();

  var className = props.className,
      title = props.title,
      image = props.image,
      date = props.date,
      description = props.description,
      rest = Object(C_Users_Lawrence_sbcs_nextjs_node_modules_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(props, ["className", "title", "image", "date", "description"]);

  var imageClasses = classnames__WEBPACK_IMPORTED_MODULE_4___default()(classes.imgRaised, classes.imgRoundedCircle, classes.imgFluid);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", _objectSpread(_objectSpread({}, rest), {}, {
    style: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      backgroundColor: '#f9f9f9',
      padding: 15
    },
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      style: {
        maxWidth: '200px'
      },
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("img", {
        src: image,
        className: imageClasses
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h5", {
      style: {
        fontWeight: 'bold'
      },
      children: title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      children: description
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }, this)]
  }), void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 5
  }, this);
}

_s(EventCard, "8g5FPXexvSEOsxdmU7HicukHGqY=", false, function () {
  return [useStyles];
});

_c = EventCard;
EventCard.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,
  plain: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool,
  carousel: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool,
  children: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.node
};

var _c;

$RefreshReg$(_c, "EventCard");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9FdmVudENhcmQvRXZlbnRDYXJkLmpzIl0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJpbWFnZXNTdHlsZSIsIkV2ZW50Q2FyZCIsInByb3BzIiwiY2xhc3NlcyIsImNsYXNzTmFtZSIsInRpdGxlIiwiaW1hZ2UiLCJkYXRlIiwiZGVzY3JpcHRpb24iLCJyZXN0IiwiaW1hZ2VDbGFzc2VzIiwiY2xhc3NOYW1lcyIsImltZ1JhaXNlZCIsImltZ1JvdW5kZWRDaXJjbGUiLCJpbWdGbHVpZCIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJmbGV4RGlyZWN0aW9uIiwiYmFja2dyb3VuZENvbG9yIiwicGFkZGluZyIsIm1heFdpZHRoIiwiZm9udFdlaWdodCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsInBsYWluIiwiYm9vbCIsImNhcm91c2VsIiwiY2hpbGRyZW4iLCJub2RlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FDQTs7Q0FFQTs7Q0FFQTs7Q0FFQTtBQUVBOztBQUNBO0FBQ0E7QUFFQSxJQUFNQSxTQUFTLEdBQUdDLDJFQUFVLENBQUNDLHNGQUFELENBQTVCO0FBRWUsU0FBU0MsU0FBVCxDQUFtQkMsS0FBbkIsRUFBMEI7QUFBQTs7QUFDdkMsTUFBTUMsT0FBTyxHQUFHTCxTQUFTLEVBQXpCOztBQUR1QyxNQUUvQk0sU0FGK0IsR0FFeUJGLEtBRnpCLENBRS9CRSxTQUYrQjtBQUFBLE1BRXBCQyxLQUZvQixHQUV5QkgsS0FGekIsQ0FFcEJHLEtBRm9CO0FBQUEsTUFFYkMsS0FGYSxHQUV5QkosS0FGekIsQ0FFYkksS0FGYTtBQUFBLE1BRU5DLElBRk0sR0FFeUJMLEtBRnpCLENBRU5LLElBRk07QUFBQSxNQUVBQyxXQUZBLEdBRXlCTixLQUZ6QixDQUVBTSxXQUZBO0FBQUEsTUFFZ0JDLElBRmhCLGlLQUV5QlAsS0FGekI7O0FBR3ZDLE1BQU1RLFlBQVksR0FBR0MsaURBQVUsQ0FDN0JSLE9BQU8sQ0FBQ1MsU0FEcUIsRUFFN0JULE9BQU8sQ0FBQ1UsZ0JBRnFCLEVBRzdCVixPQUFPLENBQUNXLFFBSHFCLENBQS9CO0FBS0Esc0JBQ0UsNEdBQ01MLElBRE47QUFFRSxTQUFLLEVBQUU7QUFDTE0sYUFBTyxFQUFFLE1BREo7QUFFTEMsb0JBQWMsRUFBRSxRQUZYO0FBR0xDLGdCQUFVLEVBQUUsUUFIUDtBQUlMQyxtQkFBYSxFQUFFLFFBSlY7QUFLTEMscUJBQWUsRUFBRSxTQUxaO0FBTUxDLGFBQU8sRUFBRTtBQU5KLEtBRlQ7QUFBQSw0QkFXRTtBQUFLLFdBQUssRUFBRTtBQUFFQyxnQkFBUSxFQUFFO0FBQVosT0FBWjtBQUFBLDZCQUNFO0FBQUssV0FBRyxFQUFFZixLQUFWO0FBQWlCLGlCQUFTLEVBQUVJO0FBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBWEYsZUFjRTtBQUFJLFdBQUssRUFBRTtBQUFFWSxrQkFBVSxFQUFFO0FBQWQsT0FBWDtBQUFBLGdCQUFvQ2pCO0FBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFkRixlQWVFO0FBQUEsZ0JBQU1HO0FBQU47QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBbUJEOztHQTNCdUJQLFM7VUFDTkgsUzs7O0tBRE1HLFM7QUE2QnhCQSxTQUFTLENBQUNzQixTQUFWLEdBQXNCO0FBQ3BCbkIsV0FBUyxFQUFFb0IsaURBQVMsQ0FBQ0MsTUFERDtBQUVwQkMsT0FBSyxFQUFFRixpREFBUyxDQUFDRyxJQUZHO0FBR3BCQyxVQUFRLEVBQUVKLGlEQUFTLENBQUNHLElBSEE7QUFJcEJFLFVBQVEsRUFBRUwsaURBQVMsQ0FBQ007QUFKQSxDQUF0QiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4yNzg5MDQyNjM0YjRlMDA5NDRmNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuLy8gbm9kZWpzIGxpYnJhcnkgdGhhdCBjb25jYXRlbmF0ZXMgY2xhc3Nlc1xyXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcclxuLy8gbm9kZWpzIGxpYnJhcnkgdG8gc2V0IHByb3BlcnRpZXMgZm9yIGNvbXBvbmVudHNcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuLy8gQG1hdGVyaWFsLXVpL2NvcmUgY29tcG9uZW50c1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuLy8gQG1hdGVyaWFsLXVpL2ljb25zXHJcblxyXG4vLyBjb3JlIGNvbXBvbmVudHNcclxuaW1wb3J0IGltYWdlc1N0eWxlIGZyb20gJ3N0eWxlcy9qc3MvbmV4dGpzLW1hdGVyaWFsLWtpdC9pbWFnZXNTdHlsZXMuanMnO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJ2NvbXBvbmVudHMvQ3VzdG9tQnV0dG9ucy9CdXR0b24uanMnO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyhpbWFnZXNTdHlsZSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBFdmVudENhcmQocHJvcHMpIHtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgY29uc3QgeyBjbGFzc05hbWUsIHRpdGxlLCBpbWFnZSwgZGF0ZSwgZGVzY3JpcHRpb24sIC4uLnJlc3QgfSA9IHByb3BzO1xyXG4gIGNvbnN0IGltYWdlQ2xhc3NlcyA9IGNsYXNzTmFtZXMoXHJcbiAgICBjbGFzc2VzLmltZ1JhaXNlZCxcclxuICAgIGNsYXNzZXMuaW1nUm91bmRlZENpcmNsZSxcclxuICAgIGNsYXNzZXMuaW1nRmx1aWRcclxuICApO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2XHJcbiAgICAgIHsuLi5yZXN0fVxyXG4gICAgICBzdHlsZT17e1xyXG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcbiAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnI2Y5ZjlmOScsXHJcbiAgICAgICAgcGFkZGluZzogMTUsXHJcbiAgICAgIH19XHJcbiAgICA+XHJcbiAgICAgIDxkaXYgc3R5bGU9e3sgbWF4V2lkdGg6ICcyMDBweCcgfX0+XHJcbiAgICAgICAgPGltZyBzcmM9e2ltYWdlfSBjbGFzc05hbWU9e2ltYWdlQ2xhc3Nlc30gLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxoNSBzdHlsZT17eyBmb250V2VpZ2h0OiAnYm9sZCcgfX0+e3RpdGxlfTwvaDU+XHJcbiAgICAgIDxkaXY+e2Rlc2NyaXB0aW9ufTwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuRXZlbnRDYXJkLnByb3BUeXBlcyA9IHtcclxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgcGxhaW46IFByb3BUeXBlcy5ib29sLFxyXG4gIGNhcm91c2VsOiBQcm9wVHlwZXMuYm9vbCxcclxuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=