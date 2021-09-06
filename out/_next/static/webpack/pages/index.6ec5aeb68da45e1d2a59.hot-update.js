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
      location = props.location,
      description = props.description,
      rest = Object(C_Users_Lawrence_sbcs_nextjs_node_modules_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(props, ["className", "title", "image", "date", "location", "description"]);

  var imageClasses = classnames__WEBPACK_IMPORTED_MODULE_4___default()(classes.imgRaised, classes.imgFluid);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", _objectSpread(_objectSpread({}, rest), {}, {
    style: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      backgroundColor: '#f9f9f9',
      padding: 15,
      height: '100%'
    },
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      style: {
        maxWidth: '350px'
      },
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("img", {
        src: image,
        className: imageClasses
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h3", {
      style: {
        fontWeight: 'bold'
      },
      children: title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h5", {
      style: {
        color: '#f05537',
        fontWeight: 'bold'
      },
      children: date
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h5", {
      style: {
        color: '#6f7287',
        fontWeight: 'bold'
      },
      children: location
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
    lineNumber: 22,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9FdmVudENhcmQvRXZlbnRDYXJkLmpzIl0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJpbWFnZXNTdHlsZSIsIkV2ZW50Q2FyZCIsInByb3BzIiwiY2xhc3NlcyIsImNsYXNzTmFtZSIsInRpdGxlIiwiaW1hZ2UiLCJkYXRlIiwibG9jYXRpb24iLCJkZXNjcmlwdGlvbiIsInJlc3QiLCJpbWFnZUNsYXNzZXMiLCJjbGFzc05hbWVzIiwiaW1nUmFpc2VkIiwiaW1nRmx1aWQiLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwiZmxleERpcmVjdGlvbiIsImJhY2tncm91bmRDb2xvciIsInBhZGRpbmciLCJoZWlnaHQiLCJtYXhXaWR0aCIsImZvbnRXZWlnaHQiLCJjb2xvciIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsInBsYWluIiwiYm9vbCIsImNhcm91c2VsIiwiY2hpbGRyZW4iLCJub2RlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FDQTs7Q0FFQTs7Q0FFQTs7Q0FFQTtBQUVBOztBQUNBO0FBQ0E7QUFFQSxJQUFNQSxTQUFTLEdBQUdDLDJFQUFVLENBQUNDLHNGQUFELENBQTVCO0FBRWUsU0FBU0MsU0FBVCxDQUFtQkMsS0FBbkIsRUFBMEI7QUFBQTs7QUFDdkMsTUFBTUMsT0FBTyxHQUFHTCxTQUFTLEVBQXpCOztBQUR1QyxNQUUvQk0sU0FGK0IsR0FHckNGLEtBSHFDLENBRS9CRSxTQUYrQjtBQUFBLE1BRXBCQyxLQUZvQixHQUdyQ0gsS0FIcUMsQ0FFcEJHLEtBRm9CO0FBQUEsTUFFYkMsS0FGYSxHQUdyQ0osS0FIcUMsQ0FFYkksS0FGYTtBQUFBLE1BRU5DLElBRk0sR0FHckNMLEtBSHFDLENBRU5LLElBRk07QUFBQSxNQUVBQyxRQUZBLEdBR3JDTixLQUhxQyxDQUVBTSxRQUZBO0FBQUEsTUFFVUMsV0FGVixHQUdyQ1AsS0FIcUMsQ0FFVU8sV0FGVjtBQUFBLE1BRTBCQyxJQUYxQixpS0FHckNSLEtBSHFDOztBQUl2QyxNQUFNUyxZQUFZLEdBQUdDLGlEQUFVLENBQUNULE9BQU8sQ0FBQ1UsU0FBVCxFQUFvQlYsT0FBTyxDQUFDVyxRQUE1QixDQUEvQjtBQUNBLHNCQUNFLDRHQUNNSixJQUROO0FBRUUsU0FBSyxFQUFFO0FBQ0xLLGFBQU8sRUFBRSxNQURKO0FBRUxDLG9CQUFjLEVBQUUsUUFGWDtBQUdMQyxnQkFBVSxFQUFFLFFBSFA7QUFJTEMsbUJBQWEsRUFBRSxRQUpWO0FBS0xDLHFCQUFlLEVBQUUsU0FMWjtBQU1MQyxhQUFPLEVBQUUsRUFOSjtBQU9MQyxZQUFNLEVBQUU7QUFQSCxLQUZUO0FBQUEsNEJBWUU7QUFBSyxXQUFLLEVBQUU7QUFBRUMsZ0JBQVEsRUFBRTtBQUFaLE9BQVo7QUFBQSw2QkFDRTtBQUFLLFdBQUcsRUFBRWhCLEtBQVY7QUFBaUIsaUJBQVMsRUFBRUs7QUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFaRixlQWVFO0FBQUksV0FBSyxFQUFFO0FBQUVZLGtCQUFVLEVBQUU7QUFBZCxPQUFYO0FBQUEsZ0JBQW9DbEI7QUFBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWZGLGVBZ0JFO0FBQUksV0FBSyxFQUFFO0FBQUVtQixhQUFLLEVBQUUsU0FBVDtBQUFvQkQsa0JBQVUsRUFBRTtBQUFoQyxPQUFYO0FBQUEsZ0JBQXNEaEI7QUFBdEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWhCRixlQWlCRTtBQUFJLFdBQUssRUFBRTtBQUFFaUIsYUFBSyxFQUFFLFNBQVQ7QUFBb0JELGtCQUFVLEVBQUU7QUFBaEMsT0FBWDtBQUFBLGdCQUFzRGY7QUFBdEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWpCRixlQWtCRTtBQUFBLGdCQUFNQztBQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFsQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFzQkQ7O0dBM0J1QlIsUztVQUNOSCxTOzs7S0FETUcsUztBQTZCeEJBLFNBQVMsQ0FBQ3dCLFNBQVYsR0FBc0I7QUFDcEJyQixXQUFTLEVBQUVzQixpREFBUyxDQUFDQyxNQUREO0FBRXBCQyxPQUFLLEVBQUVGLGlEQUFTLENBQUNHLElBRkc7QUFHcEJDLFVBQVEsRUFBRUosaURBQVMsQ0FBQ0csSUFIQTtBQUlwQkUsVUFBUSxFQUFFTCxpREFBUyxDQUFDTTtBQUpBLENBQXRCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjZlYzVhZWI2OGRhNDVlMWQyYTU5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG4vLyBub2RlanMgbGlicmFyeSB0aGF0IGNvbmNhdGVuYXRlcyBjbGFzc2VzXHJcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xyXG4vLyBub2RlanMgbGlicmFyeSB0byBzZXQgcHJvcGVydGllcyBmb3IgY29tcG9uZW50c1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG4vLyBAbWF0ZXJpYWwtdWkvY29yZSBjb21wb25lbnRzXHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG4vLyBAbWF0ZXJpYWwtdWkvaWNvbnNcclxuXHJcbi8vIGNvcmUgY29tcG9uZW50c1xyXG5pbXBvcnQgaW1hZ2VzU3R5bGUgZnJvbSAnc3R5bGVzL2pzcy9uZXh0anMtbWF0ZXJpYWwta2l0L2ltYWdlc1N0eWxlcy5qcyc7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAnY29tcG9uZW50cy9DdXN0b21CdXR0b25zL0J1dHRvbi5qcyc7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKGltYWdlc1N0eWxlKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEV2ZW50Q2FyZChwcm9wcykge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICBjb25zdCB7IGNsYXNzTmFtZSwgdGl0bGUsIGltYWdlLCBkYXRlLCBsb2NhdGlvbiwgZGVzY3JpcHRpb24sIC4uLnJlc3QgfSA9XHJcbiAgICBwcm9wcztcclxuICBjb25zdCBpbWFnZUNsYXNzZXMgPSBjbGFzc05hbWVzKGNsYXNzZXMuaW1nUmFpc2VkLCBjbGFzc2VzLmltZ0ZsdWlkKTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdlxyXG4gICAgICB7Li4ucmVzdH1cclxuICAgICAgc3R5bGU9e3tcclxuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxyXG4gICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJyNmOWY5ZjknLFxyXG4gICAgICAgIHBhZGRpbmc6IDE1LFxyXG4gICAgICAgIGhlaWdodDogJzEwMCUnLFxyXG4gICAgICB9fVxyXG4gICAgPlxyXG4gICAgICA8ZGl2IHN0eWxlPXt7IG1heFdpZHRoOiAnMzUwcHgnIH19PlxyXG4gICAgICAgIDxpbWcgc3JjPXtpbWFnZX0gY2xhc3NOYW1lPXtpbWFnZUNsYXNzZXN9IC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8aDMgc3R5bGU9e3sgZm9udFdlaWdodDogJ2JvbGQnIH19Pnt0aXRsZX08L2gzPlxyXG4gICAgICA8aDUgc3R5bGU9e3sgY29sb3I6ICcjZjA1NTM3JywgZm9udFdlaWdodDogJ2JvbGQnIH19PntkYXRlfTwvaDU+XHJcbiAgICAgIDxoNSBzdHlsZT17eyBjb2xvcjogJyM2ZjcyODcnLCBmb250V2VpZ2h0OiAnYm9sZCcgfX0+e2xvY2F0aW9ufTwvaDU+XHJcbiAgICAgIDxkaXY+e2Rlc2NyaXB0aW9ufTwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuRXZlbnRDYXJkLnByb3BUeXBlcyA9IHtcclxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgcGxhaW46IFByb3BUeXBlcy5ib29sLFxyXG4gIGNhcm91c2VsOiBQcm9wVHlwZXMuYm9vbCxcclxuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=