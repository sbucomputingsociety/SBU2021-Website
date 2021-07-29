webpackHotUpdate_N_E("pages/sponsors",{

/***/ "./styles/jss/nextjs-material-kit/pages/sponsorsPage.js":
/*!**************************************************************!*\
  !*** ./styles/jss/nextjs-material-kit/pages/sponsorsPage.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var C_Users_Lawrence_sbcs_nextjs_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var styles_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styles/jss/nextjs-material-kit.js */ "./styles/jss/nextjs-material-kit.js");
/* harmony import */ var styles_jss_nextjs_material_kit_imagesStyles_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styles/jss/nextjs-material-kit/imagesStyles.js */ "./styles/jss/nextjs-material-kit/imagesStyles.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_Users_Lawrence_sbcs_nextjs_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




var profilePageStyle = _objectSpread(_objectSpread({
  container: styles_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_1__["container"],
  profile: {
    textAlign: 'center',
    '& img': {
      maxWidth: '160px',
      width: '100%',
      margin: '0 auto',
      transform: 'translate3d(0, -50%, 0)'
    }
  },
  description: {
    margin: '1.071rem auto 0',
    maxWidth: '600px',
    color: '#999',
    textAlign: 'center !important'
  },
  name: {
    marginTop: '-80px'
  }
}, styles_jss_nextjs_material_kit_imagesStyles_js__WEBPACK_IMPORTED_MODULE_2__["default"]), {}, {
  main: {
    background: '#FFFFFF',
    position: 'relative',
    zIndex: '3'
  },
  mainRaised: {
    margin: '-60px 30px 0px',
    borderRadius: '6px',
    boxShadow: '0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)'
  },
  message: {
    textAlign: 'center'
  },
  title: _objectSpread(_objectSpread({}, styles_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_1__["title"]), {}, {
    display: 'inline-block',
    position: 'relative',
    marginTop: '30px',
    minHeight: '32px',
    textDecoration: 'none',
    textAlign: 'center'
  }),
  socials: {
    marginTop: '0',
    width: '100%',
    transform: 'none',
    left: '0',
    top: '0',
    height: '100%',
    lineHeight: '41px',
    fontSize: '20px',
    color: '#999'
  },
  sponsor: {
    justifyContent: 'center'
  },
  navWrapper: {
    margin: '20px auto 50px auto',
    textAlign: 'center'
  }
});

/* harmony default export */ __webpack_exports__["default"] = (profilePageStyle);

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL2pzcy9uZXh0anMtbWF0ZXJpYWwta2l0L3BhZ2VzL3Nwb25zb3JzUGFnZS5qcyJdLCJuYW1lcyI6WyJwcm9maWxlUGFnZVN0eWxlIiwiY29udGFpbmVyIiwicHJvZmlsZSIsInRleHRBbGlnbiIsIm1heFdpZHRoIiwid2lkdGgiLCJtYXJnaW4iLCJ0cmFuc2Zvcm0iLCJkZXNjcmlwdGlvbiIsImNvbG9yIiwibmFtZSIsIm1hcmdpblRvcCIsImltYWdlc1N0eWxlIiwibWFpbiIsImJhY2tncm91bmQiLCJwb3NpdGlvbiIsInpJbmRleCIsIm1haW5SYWlzZWQiLCJib3JkZXJSYWRpdXMiLCJib3hTaGFkb3ciLCJtZXNzYWdlIiwidGl0bGUiLCJkaXNwbGF5IiwibWluSGVpZ2h0IiwidGV4dERlY29yYXRpb24iLCJzb2NpYWxzIiwibGVmdCIsInRvcCIsImhlaWdodCIsImxpbmVIZWlnaHQiLCJmb250U2l6ZSIsInNwb25zb3IiLCJqdXN0aWZ5Q29udGVudCIsIm5hdldyYXBwZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTs7QUFFQSxJQUFNQSxnQkFBZ0I7QUFDcEJDLFdBQVMsRUFBVEEsMkVBRG9CO0FBRXBCQyxTQUFPLEVBQUU7QUFDUEMsYUFBUyxFQUFFLFFBREo7QUFFUCxhQUFTO0FBQ1BDLGNBQVEsRUFBRSxPQURIO0FBRVBDLFdBQUssRUFBRSxNQUZBO0FBR1BDLFlBQU0sRUFBRSxRQUhEO0FBSVBDLGVBQVMsRUFBRTtBQUpKO0FBRkYsR0FGVztBQVdwQkMsYUFBVyxFQUFFO0FBQ1hGLFVBQU0sRUFBRSxpQkFERztBQUVYRixZQUFRLEVBQUUsT0FGQztBQUdYSyxTQUFLLEVBQUUsTUFISTtBQUlYTixhQUFTLEVBQUU7QUFKQSxHQVhPO0FBaUJwQk8sTUFBSSxFQUFFO0FBQ0pDLGFBQVMsRUFBRTtBQURQO0FBakJjLEdBb0JqQkMsc0ZBcEJpQjtBQXFCcEJDLE1BQUksRUFBRTtBQUNKQyxjQUFVLEVBQUUsU0FEUjtBQUVKQyxZQUFRLEVBQUUsVUFGTjtBQUdKQyxVQUFNLEVBQUU7QUFISixHQXJCYztBQTBCcEJDLFlBQVUsRUFBRTtBQUNWWCxVQUFNLEVBQUUsZ0JBREU7QUFFVlksZ0JBQVksRUFBRSxLQUZKO0FBR1ZDLGFBQVMsRUFDUDtBQUpRLEdBMUJRO0FBZ0NwQkMsU0FBTyxFQUFFO0FBQ1BqQixhQUFTLEVBQUU7QUFESixHQWhDVztBQW1DcEJrQixPQUFLLGtDQUNBQSx1RUFEQTtBQUVIQyxXQUFPLEVBQUUsY0FGTjtBQUdIUCxZQUFRLEVBQUUsVUFIUDtBQUlISixhQUFTLEVBQUUsTUFKUjtBQUtIWSxhQUFTLEVBQUUsTUFMUjtBQU1IQyxrQkFBYyxFQUFFLE1BTmI7QUFPSHJCLGFBQVMsRUFBRTtBQVBSLElBbkNlO0FBNENwQnNCLFNBQU8sRUFBRTtBQUNQZCxhQUFTLEVBQUUsR0FESjtBQUVQTixTQUFLLEVBQUUsTUFGQTtBQUdQRSxhQUFTLEVBQUUsTUFISjtBQUlQbUIsUUFBSSxFQUFFLEdBSkM7QUFLUEMsT0FBRyxFQUFFLEdBTEU7QUFNUEMsVUFBTSxFQUFFLE1BTkQ7QUFPUEMsY0FBVSxFQUFFLE1BUEw7QUFRUEMsWUFBUSxFQUFFLE1BUkg7QUFTUHJCLFNBQUssRUFBRTtBQVRBLEdBNUNXO0FBdURwQnNCLFNBQU8sRUFBRTtBQUNQQyxrQkFBYyxFQUFFO0FBRFQsR0F2RFc7QUEwRHBCQyxZQUFVLEVBQUU7QUFDVjNCLFVBQU0sRUFBRSxxQkFERTtBQUVWSCxhQUFTLEVBQUU7QUFGRDtBQTFEUSxFQUF0Qjs7QUFnRWVILCtFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Nwb25zb3JzLjhlMjcyZmYyNjYwNjVhZGYwODM4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb250YWluZXIsIHRpdGxlIH0gZnJvbSAnc3R5bGVzL2pzcy9uZXh0anMtbWF0ZXJpYWwta2l0LmpzJztcclxuXHJcbmltcG9ydCBpbWFnZXNTdHlsZSBmcm9tICdzdHlsZXMvanNzL25leHRqcy1tYXRlcmlhbC1raXQvaW1hZ2VzU3R5bGVzLmpzJztcclxuXHJcbmNvbnN0IHByb2ZpbGVQYWdlU3R5bGUgPSB7XHJcbiAgY29udGFpbmVyLFxyXG4gIHByb2ZpbGU6IHtcclxuICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXHJcbiAgICAnJiBpbWcnOiB7XHJcbiAgICAgIG1heFdpZHRoOiAnMTYwcHgnLFxyXG4gICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICBtYXJnaW46ICcwIGF1dG8nLFxyXG4gICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGUzZCgwLCAtNTAlLCAwKScsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgZGVzY3JpcHRpb246IHtcclxuICAgIG1hcmdpbjogJzEuMDcxcmVtIGF1dG8gMCcsXHJcbiAgICBtYXhXaWR0aDogJzYwMHB4JyxcclxuICAgIGNvbG9yOiAnIzk5OScsXHJcbiAgICB0ZXh0QWxpZ246ICdjZW50ZXIgIWltcG9ydGFudCcsXHJcbiAgfSxcclxuICBuYW1lOiB7XHJcbiAgICBtYXJnaW5Ub3A6ICctODBweCcsXHJcbiAgfSxcclxuICAuLi5pbWFnZXNTdHlsZSxcclxuICBtYWluOiB7XHJcbiAgICBiYWNrZ3JvdW5kOiAnI0ZGRkZGRicsXHJcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgIHpJbmRleDogJzMnLFxyXG4gIH0sXHJcbiAgbWFpblJhaXNlZDoge1xyXG4gICAgbWFyZ2luOiAnLTYwcHggMzBweCAwcHgnLFxyXG4gICAgYm9yZGVyUmFkaXVzOiAnNnB4JyxcclxuICAgIGJveFNoYWRvdzpcclxuICAgICAgJzAgMTZweCAyNHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDZweCAzMHB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDhweCAxMHB4IC01cHggcmdiYSgwLCAwLCAwLCAwLjIpJyxcclxuICB9LFxyXG4gIG1lc3NhZ2U6IHtcclxuICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXHJcbiAgfSxcclxuICB0aXRsZToge1xyXG4gICAgLi4udGl0bGUsXHJcbiAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcclxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgbWFyZ2luVG9wOiAnMzBweCcsXHJcbiAgICBtaW5IZWlnaHQ6ICczMnB4JyxcclxuICAgIHRleHREZWNvcmF0aW9uOiAnbm9uZScsXHJcbiAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxyXG4gIH0sXHJcbiAgc29jaWFsczoge1xyXG4gICAgbWFyZ2luVG9wOiAnMCcsXHJcbiAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgdHJhbnNmb3JtOiAnbm9uZScsXHJcbiAgICBsZWZ0OiAnMCcsXHJcbiAgICB0b3A6ICcwJyxcclxuICAgIGhlaWdodDogJzEwMCUnLFxyXG4gICAgbGluZUhlaWdodDogJzQxcHgnLFxyXG4gICAgZm9udFNpemU6ICcyMHB4JyxcclxuICAgIGNvbG9yOiAnIzk5OScsXHJcbiAgfSxcclxuICBzcG9uc29yOiB7XHJcbiAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcbiAgfSxcclxuICBuYXZXcmFwcGVyOiB7XHJcbiAgICBtYXJnaW46ICcyMHB4IGF1dG8gNTBweCBhdXRvJyxcclxuICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXHJcbiAgfSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHByb2ZpbGVQYWdlU3R5bGU7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=