webpackHotUpdate_N_E("pages/team",{

/***/ "./components/AvatarCard/AvatarCard.js":
/*!*********************************************!*\
  !*** ./components/AvatarCard/AvatarCard.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AvatarCard; });
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




var _jsxFileName = "C:\\Users\\Lawrence\\sbcs-nextjs\\components\\AvatarCard\\AvatarCard.js",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_Users_Lawrence_sbcs_nextjs_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

 // nodejs library that concatenates classes

 // nodejs library to set properties for components

 // @material-ui/core components

 // @material-ui/icons
// core components



var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__["makeStyles"])(styles_jss_nextjs_material_kit_imagesStyles_js__WEBPACK_IMPORTED_MODULE_7__["default"]);
function AvatarCard(props) {
  _s();

  var classes = useStyles();

  var className = props.className,
      name = props.name,
      position = props.position,
      image = props.image,
      email = props.email,
      linkedin = props.linkedin,
      rest = Object(C_Users_Lawrence_sbcs_nextjs_node_modules_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(props, ["className", "name", "position", "image", "email", "linkedin"]);

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
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h5", {
      style: {
        fontWeight: 'bold'
      },
      children: name
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
      style: {
        marginBottom: 10
      },
      children: position
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      style: {
        maxWidth: '200px',
        maxHeight: '200px'
      },
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("img", {
        src: image,
        className: imageClasses
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      children: [email ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_8__["default"], {
        justIcon: true,
        link: true,
        href: email,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("i", {
          className: 'fa fa-envelope'
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 11
      }, this) : null, linkedin ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_8__["default"], {
        justIcon: true,
        link: true,
        href: linkedin,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("i", {
          className: 'fab fa-linkedin'
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 11
      }, this) : null]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }, this)]
  }), void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 5
  }, this);
}

_s(AvatarCard, "8g5FPXexvSEOsxdmU7HicukHGqY=", false, function () {
  return [useStyles];
});

_c = AvatarCard;
AvatarCard.propTypes = {
  className: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,
  plain: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool,
  carousel: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool,
  children: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.node
};

var _c;

$RefreshReg$(_c, "AvatarCard");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BdmF0YXJDYXJkL0F2YXRhckNhcmQuanMiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsImltYWdlc1N0eWxlIiwiQXZhdGFyQ2FyZCIsInByb3BzIiwiY2xhc3NlcyIsImNsYXNzTmFtZSIsIm5hbWUiLCJwb3NpdGlvbiIsImltYWdlIiwiZW1haWwiLCJsaW5rZWRpbiIsInJlc3QiLCJpbWFnZUNsYXNzZXMiLCJjbGFzc05hbWVzIiwiaW1nUmFpc2VkIiwiaW1nUm91bmRlZENpcmNsZSIsImltZ0ZsdWlkIiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsImZsZXhEaXJlY3Rpb24iLCJiYWNrZ3JvdW5kQ29sb3IiLCJwYWRkaW5nIiwiZm9udFdlaWdodCIsIm1hcmdpbkJvdHRvbSIsIm1heFdpZHRoIiwibWF4SGVpZ2h0IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwicGxhaW4iLCJib29sIiwiY2Fyb3VzZWwiLCJjaGlsZHJlbiIsIm5vZGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQUNBOztDQUVBOztDQUVBOztDQUVBO0FBRUE7O0FBQ0E7QUFDQTtBQUVBLElBQU1BLFNBQVMsR0FBR0MsMkVBQVUsQ0FBQ0Msc0ZBQUQsQ0FBNUI7QUFFZSxTQUFTQyxVQUFULENBQW9CQyxLQUFwQixFQUEyQjtBQUFBOztBQUN4QyxNQUFNQyxPQUFPLEdBQUdMLFNBQVMsRUFBekI7O0FBRHdDLE1BRWhDTSxTQUZnQyxHQUUrQkYsS0FGL0IsQ0FFaENFLFNBRmdDO0FBQUEsTUFFckJDLElBRnFCLEdBRStCSCxLQUYvQixDQUVyQkcsSUFGcUI7QUFBQSxNQUVmQyxRQUZlLEdBRStCSixLQUYvQixDQUVmSSxRQUZlO0FBQUEsTUFFTEMsS0FGSyxHQUUrQkwsS0FGL0IsQ0FFTEssS0FGSztBQUFBLE1BRUVDLEtBRkYsR0FFK0JOLEtBRi9CLENBRUVNLEtBRkY7QUFBQSxNQUVTQyxRQUZULEdBRStCUCxLQUYvQixDQUVTTyxRQUZUO0FBQUEsTUFFc0JDLElBRnRCLGlLQUUrQlIsS0FGL0I7O0FBR3hDLE1BQU1TLFlBQVksR0FBR0MsaURBQVUsQ0FDN0JULE9BQU8sQ0FBQ1UsU0FEcUIsRUFFN0JWLE9BQU8sQ0FBQ1csZ0JBRnFCLEVBRzdCWCxPQUFPLENBQUNZLFFBSHFCLENBQS9CO0FBS0Esc0JBQ0UsNEdBQ01MLElBRE47QUFFRSxTQUFLLEVBQUU7QUFDTE0sYUFBTyxFQUFFLE1BREo7QUFFTEMsb0JBQWMsRUFBRSxRQUZYO0FBR0xDLGdCQUFVLEVBQUUsUUFIUDtBQUlMQyxtQkFBYSxFQUFFLFFBSlY7QUFLTEMscUJBQWUsRUFBRSxTQUxaO0FBTUxDLGFBQU8sRUFBRTtBQU5KLEtBRlQ7QUFBQSw0QkFXRTtBQUFJLFdBQUssRUFBRTtBQUFFQyxrQkFBVSxFQUFFO0FBQWQsT0FBWDtBQUFBLGdCQUFvQ2pCO0FBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFYRixlQVlFO0FBQUcsV0FBSyxFQUFFO0FBQUVrQixvQkFBWSxFQUFFO0FBQWhCLE9BQVY7QUFBQSxnQkFBaUNqQjtBQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBWkYsZUFhRTtBQUFLLFdBQUssRUFBRTtBQUFFa0IsZ0JBQVEsRUFBRSxPQUFaO0FBQXFCQyxpQkFBUyxFQUFFO0FBQWhDLE9BQVo7QUFBQSw2QkFDRTtBQUFLLFdBQUcsRUFBRWxCLEtBQVY7QUFBaUIsaUJBQVMsRUFBRUk7QUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFiRixlQWdCRTtBQUFBLGlCQUNHSCxLQUFLLGdCQUNKLHFFQUFDLDBFQUFEO0FBQVEsZ0JBQVEsTUFBaEI7QUFBaUIsWUFBSSxNQUFyQjtBQUFzQixZQUFJLEVBQUVBLEtBQTVCO0FBQUEsK0JBQ0U7QUFBRyxtQkFBUyxFQUFFO0FBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESSxHQUlGLElBTE4sRUFNR0MsUUFBUSxnQkFDUCxxRUFBQywwRUFBRDtBQUFRLGdCQUFRLE1BQWhCO0FBQWlCLFlBQUksTUFBckI7QUFBc0IsWUFBSSxFQUFFQSxRQUE1QjtBQUFBLCtCQUNFO0FBQUcsbUJBQVMsRUFBRTtBQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRE8sR0FJTCxJQVZOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWhCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQStCRDs7R0F2Q3VCUixVO1VBQ05ILFM7OztLQURNRyxVO0FBeUN4QkEsVUFBVSxDQUFDeUIsU0FBWCxHQUF1QjtBQUNyQnRCLFdBQVMsRUFBRXVCLGlEQUFTLENBQUNDLE1BREE7QUFFckJDLE9BQUssRUFBRUYsaURBQVMsQ0FBQ0csSUFGSTtBQUdyQkMsVUFBUSxFQUFFSixpREFBUyxDQUFDRyxJQUhDO0FBSXJCRSxVQUFRLEVBQUVMLGlEQUFTLENBQUNNO0FBSkMsQ0FBdkIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdGVhbS5jYzIyM2Y4OWUyZDdmZDkyYTU2ZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuLy8gbm9kZWpzIGxpYnJhcnkgdGhhdCBjb25jYXRlbmF0ZXMgY2xhc3Nlc1xyXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcclxuLy8gbm9kZWpzIGxpYnJhcnkgdG8gc2V0IHByb3BlcnRpZXMgZm9yIGNvbXBvbmVudHNcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuLy8gQG1hdGVyaWFsLXVpL2NvcmUgY29tcG9uZW50c1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuLy8gQG1hdGVyaWFsLXVpL2ljb25zXHJcblxyXG4vLyBjb3JlIGNvbXBvbmVudHNcclxuaW1wb3J0IGltYWdlc1N0eWxlIGZyb20gJ3N0eWxlcy9qc3MvbmV4dGpzLW1hdGVyaWFsLWtpdC9pbWFnZXNTdHlsZXMuanMnO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJ2NvbXBvbmVudHMvQ3VzdG9tQnV0dG9ucy9CdXR0b24uanMnO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyhpbWFnZXNTdHlsZSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBdmF0YXJDYXJkKHByb3BzKSB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gIGNvbnN0IHsgY2xhc3NOYW1lLCBuYW1lLCBwb3NpdGlvbiwgaW1hZ2UsIGVtYWlsLCBsaW5rZWRpbiwgLi4ucmVzdCB9ID0gcHJvcHM7XHJcbiAgY29uc3QgaW1hZ2VDbGFzc2VzID0gY2xhc3NOYW1lcyhcclxuICAgIGNsYXNzZXMuaW1nUmFpc2VkLFxyXG4gICAgY2xhc3Nlcy5pbWdSb3VuZGVkQ2lyY2xlLFxyXG4gICAgY2xhc3Nlcy5pbWdGbHVpZFxyXG4gICk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXZcclxuICAgICAgey4uLnJlc3R9XHJcbiAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxuICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZjlmOWY5JyxcclxuICAgICAgICBwYWRkaW5nOiAxNSxcclxuICAgICAgfX1cclxuICAgID5cclxuICAgICAgPGg1IHN0eWxlPXt7IGZvbnRXZWlnaHQ6ICdib2xkJyB9fT57bmFtZX08L2g1PlxyXG4gICAgICA8cCBzdHlsZT17eyBtYXJnaW5Cb3R0b206IDEwIH19Pntwb3NpdGlvbn08L3A+XHJcbiAgICAgIDxkaXYgc3R5bGU9e3sgbWF4V2lkdGg6ICcyMDBweCcsIG1heEhlaWdodDogJzIwMHB4JyB9fT5cclxuICAgICAgICA8aW1nIHNyYz17aW1hZ2V9IGNsYXNzTmFtZT17aW1hZ2VDbGFzc2VzfSAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdj5cclxuICAgICAgICB7ZW1haWwgPyAoXHJcbiAgICAgICAgICA8QnV0dG9uIGp1c3RJY29uIGxpbmsgaHJlZj17ZW1haWx9PlxyXG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9eydmYSBmYS1lbnZlbG9wZSd9IC8+XHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICApIDogbnVsbH1cclxuICAgICAgICB7bGlua2VkaW4gPyAoXHJcbiAgICAgICAgICA8QnV0dG9uIGp1c3RJY29uIGxpbmsgaHJlZj17bGlua2VkaW59PlxyXG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9eydmYWIgZmEtbGlua2VkaW4nfSAvPlxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuQXZhdGFyQ2FyZC5wcm9wVHlwZXMgPSB7XHJcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIHBsYWluOiBQcm9wVHlwZXMuYm9vbCxcclxuICBjYXJvdXNlbDogUHJvcFR5cGVzLmJvb2wsXHJcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9