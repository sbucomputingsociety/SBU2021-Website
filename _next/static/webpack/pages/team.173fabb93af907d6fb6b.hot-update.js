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
/* harmony import */ var C_Users_Angel_4956_sbcsAngel_sbucomputingsociety_github_io_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_Angel_4956_sbcsAngel_sbucomputingsociety_github_io_node_modules_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var styles_jss_nextjs_material_kit_imagesStyles_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styles/jss/nextjs-material-kit/imagesStyles.js */ "./styles/jss/nextjs-material-kit/imagesStyles.js");
/* harmony import */ var components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! components/CustomButtons/Button.js */ "./components/CustomButtons/Button.js");




var _jsxFileName = "C:\\Users\\Angel_4956\\sbcsAngel\\sbucomputingsociety.github.io\\components\\AvatarCard\\AvatarCard.js",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_Users_Angel_4956_sbcsAngel_sbucomputingsociety_github_io_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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
      rest = Object(C_Users_Angel_4956_sbcsAngel_sbucomputingsociety_github_io_node_modules_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(props, ["className", "name", "position", "image", "email", "linkedin"]);

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
        maxWidth: '200px'
      },
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("img", {
        src: image,
        className: imageClasses,
        style: {
          height: '200px',
          width: '200px'
        }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BdmF0YXJDYXJkL0F2YXRhckNhcmQuanMiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsImltYWdlc1N0eWxlIiwiQXZhdGFyQ2FyZCIsInByb3BzIiwiY2xhc3NlcyIsImNsYXNzTmFtZSIsIm5hbWUiLCJwb3NpdGlvbiIsImltYWdlIiwiZW1haWwiLCJsaW5rZWRpbiIsInJlc3QiLCJpbWFnZUNsYXNzZXMiLCJjbGFzc05hbWVzIiwiaW1nUmFpc2VkIiwiaW1nUm91bmRlZENpcmNsZSIsImltZ0ZsdWlkIiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsImZsZXhEaXJlY3Rpb24iLCJiYWNrZ3JvdW5kQ29sb3IiLCJwYWRkaW5nIiwiZm9udFdlaWdodCIsIm1hcmdpbkJvdHRvbSIsIm1heFdpZHRoIiwiaGVpZ2h0Iiwid2lkdGgiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJwbGFpbiIsImJvb2wiLCJjYXJvdXNlbCIsImNoaWxkcmVuIiwibm9kZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBQ0E7O0NBRUE7O0NBRUE7O0NBRUE7QUFFQTs7QUFDQTtBQUNBO0FBRUEsSUFBTUEsU0FBUyxHQUFHQywyRUFBVSxDQUFDQyxzRkFBRCxDQUE1QjtBQUVlLFNBQVNDLFVBQVQsQ0FBb0JDLEtBQXBCLEVBQTJCO0FBQUE7O0FBQ3hDLE1BQU1DLE9BQU8sR0FBR0wsU0FBUyxFQUF6Qjs7QUFEd0MsTUFFaENNLFNBRmdDLEdBRStCRixLQUYvQixDQUVoQ0UsU0FGZ0M7QUFBQSxNQUVyQkMsSUFGcUIsR0FFK0JILEtBRi9CLENBRXJCRyxJQUZxQjtBQUFBLE1BRWZDLFFBRmUsR0FFK0JKLEtBRi9CLENBRWZJLFFBRmU7QUFBQSxNQUVMQyxLQUZLLEdBRStCTCxLQUYvQixDQUVMSyxLQUZLO0FBQUEsTUFFRUMsS0FGRixHQUUrQk4sS0FGL0IsQ0FFRU0sS0FGRjtBQUFBLE1BRVNDLFFBRlQsR0FFK0JQLEtBRi9CLENBRVNPLFFBRlQ7QUFBQSxNQUVzQkMsSUFGdEIsK0xBRStCUixLQUYvQjs7QUFHeEMsTUFBTVMsWUFBWSxHQUFHQyxpREFBVSxDQUM3QlQsT0FBTyxDQUFDVSxTQURxQixFQUU3QlYsT0FBTyxDQUFDVyxnQkFGcUIsRUFHN0JYLE9BQU8sQ0FBQ1ksUUFIcUIsQ0FBL0I7QUFLQSxzQkFDRSw0R0FDTUwsSUFETjtBQUVFLFNBQUssRUFBRTtBQUNMTSxhQUFPLEVBQUUsTUFESjtBQUVMQyxvQkFBYyxFQUFFLFFBRlg7QUFHTEMsZ0JBQVUsRUFBRSxRQUhQO0FBSUxDLG1CQUFhLEVBQUUsUUFKVjtBQUtMQyxxQkFBZSxFQUFFLFNBTFo7QUFNTEMsYUFBTyxFQUFFO0FBTkosS0FGVDtBQUFBLDRCQVdFO0FBQUksV0FBSyxFQUFFO0FBQUVDLGtCQUFVLEVBQUU7QUFBZCxPQUFYO0FBQUEsZ0JBQW9DakI7QUFBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVhGLGVBWUU7QUFBRyxXQUFLLEVBQUU7QUFBRWtCLG9CQUFZLEVBQUU7QUFBaEIsT0FBVjtBQUFBLGdCQUFpQ2pCO0FBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFaRixlQWFFO0FBQUssV0FBSyxFQUFFO0FBQUVrQixnQkFBUSxFQUFFO0FBQVosT0FBWjtBQUFBLDZCQUNFO0FBQUssV0FBRyxFQUFFakIsS0FBVjtBQUFpQixpQkFBUyxFQUFFSSxZQUE1QjtBQUEwQyxhQUFLLEVBQUU7QUFBQ2MsZ0JBQU0sRUFBQyxPQUFSO0FBQWlCQyxlQUFLLEVBQUM7QUFBdkI7QUFBakQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFiRixlQWdCRTtBQUFBLGlCQUNHbEIsS0FBSyxnQkFDSixxRUFBQywwRUFBRDtBQUFRLGdCQUFRLE1BQWhCO0FBQWlCLFlBQUksTUFBckI7QUFBc0IsWUFBSSxFQUFFQSxLQUE1QjtBQUFBLCtCQUNFO0FBQUcsbUJBQVMsRUFBRTtBQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREksR0FJRixJQUxOLEVBTUdDLFFBQVEsZ0JBQ1AscUVBQUMsMEVBQUQ7QUFBUSxnQkFBUSxNQUFoQjtBQUFpQixZQUFJLE1BQXJCO0FBQXNCLFlBQUksRUFBRUEsUUFBNUI7QUFBQSwrQkFDRTtBQUFHLG1CQUFTLEVBQUU7QUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURPLEdBSUwsSUFWTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFoQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUErQkQ7O0dBdkN1QlIsVTtVQUNOSCxTOzs7S0FETUcsVTtBQXlDeEJBLFVBQVUsQ0FBQzBCLFNBQVgsR0FBdUI7QUFDckJ2QixXQUFTLEVBQUV3QixpREFBUyxDQUFDQyxNQURBO0FBRXJCQyxPQUFLLEVBQUVGLGlEQUFTLENBQUNHLElBRkk7QUFHckJDLFVBQVEsRUFBRUosaURBQVMsQ0FBQ0csSUFIQztBQUlyQkUsVUFBUSxFQUFFTCxpREFBUyxDQUFDTTtBQUpDLENBQXZCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3RlYW0uMTczZmFiYjkzYWY5MDdkNmZiNmIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbi8vIG5vZGVqcyBsaWJyYXJ5IHRoYXQgY29uY2F0ZW5hdGVzIGNsYXNzZXNcclxuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XHJcbi8vIG5vZGVqcyBsaWJyYXJ5IHRvIHNldCBwcm9wZXJ0aWVzIGZvciBjb21wb25lbnRzXHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbi8vIEBtYXRlcmlhbC11aS9jb3JlIGNvbXBvbmVudHNcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbi8vIEBtYXRlcmlhbC11aS9pY29uc1xyXG5cclxuLy8gY29yZSBjb21wb25lbnRzXHJcbmltcG9ydCBpbWFnZXNTdHlsZSBmcm9tICdzdHlsZXMvanNzL25leHRqcy1tYXRlcmlhbC1raXQvaW1hZ2VzU3R5bGVzLmpzJztcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICdjb21wb25lbnRzL0N1c3RvbUJ1dHRvbnMvQnV0dG9uLmpzJztcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoaW1hZ2VzU3R5bGUpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXZhdGFyQ2FyZChwcm9wcykge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICBjb25zdCB7IGNsYXNzTmFtZSwgbmFtZSwgcG9zaXRpb24sIGltYWdlLCBlbWFpbCwgbGlua2VkaW4sIC4uLnJlc3QgfSA9IHByb3BzO1xyXG4gIGNvbnN0IGltYWdlQ2xhc3NlcyA9IGNsYXNzTmFtZXMoXHJcbiAgICBjbGFzc2VzLmltZ1JhaXNlZCxcclxuICAgIGNsYXNzZXMuaW1nUm91bmRlZENpcmNsZSxcclxuICAgIGNsYXNzZXMuaW1nRmx1aWRcclxuICApO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2XHJcbiAgICAgIHsuLi5yZXN0fVxyXG4gICAgICBzdHlsZT17e1xyXG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcbiAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnI2Y5ZjlmOScsXHJcbiAgICAgICAgcGFkZGluZzogMTUsXHJcbiAgICAgIH19XHJcbiAgICA+XHJcbiAgICAgIDxoNSBzdHlsZT17eyBmb250V2VpZ2h0OiAnYm9sZCcgfX0+e25hbWV9PC9oNT5cclxuICAgICAgPHAgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiAxMCB9fT57cG9zaXRpb259PC9wPlxyXG4gICAgICA8ZGl2IHN0eWxlPXt7IG1heFdpZHRoOiAnMjAwcHgnIH19PlxyXG4gICAgICAgIDxpbWcgc3JjPXtpbWFnZX0gY2xhc3NOYW1lPXtpbWFnZUNsYXNzZXN9IHN0eWxlPXt7aGVpZ2h0OicyMDBweCcsIHdpZHRoOicyMDBweCd9fS8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIHtlbWFpbCA/IChcclxuICAgICAgICAgIDxCdXR0b24ganVzdEljb24gbGluayBocmVmPXtlbWFpbH0+XHJcbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT17J2ZhIGZhLWVudmVsb3BlJ30gLz5cclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgIHtsaW5rZWRpbiA/IChcclxuICAgICAgICAgIDxCdXR0b24ganVzdEljb24gbGluayBocmVmPXtsaW5rZWRpbn0+XHJcbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT17J2ZhYiBmYS1saW5rZWRpbid9IC8+XHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICApIDogbnVsbH1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5BdmF0YXJDYXJkLnByb3BUeXBlcyA9IHtcclxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgcGxhaW46IFByb3BUeXBlcy5ib29sLFxyXG4gIGNhcm91c2VsOiBQcm9wVHlwZXMuYm9vbCxcclxuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=