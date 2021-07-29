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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL2pzcy9uZXh0anMtbWF0ZXJpYWwta2l0L3BhZ2VzL3Nwb25zb3JzUGFnZS5qcyJdLCJuYW1lcyI6WyJwcm9maWxlUGFnZVN0eWxlIiwiY29udGFpbmVyIiwicHJvZmlsZSIsInRleHRBbGlnbiIsIm1heFdpZHRoIiwid2lkdGgiLCJtYXJnaW4iLCJ0cmFuc2Zvcm0iLCJkZXNjcmlwdGlvbiIsImNvbG9yIiwibmFtZSIsIm1hcmdpblRvcCIsImltYWdlc1N0eWxlIiwibWFpbiIsImJhY2tncm91bmQiLCJwb3NpdGlvbiIsInpJbmRleCIsIm1haW5SYWlzZWQiLCJib3JkZXJSYWRpdXMiLCJib3hTaGFkb3ciLCJtZXNzYWdlIiwidGl0bGUiLCJkaXNwbGF5IiwibWluSGVpZ2h0IiwidGV4dERlY29yYXRpb24iLCJzb2NpYWxzIiwibGVmdCIsInRvcCIsImhlaWdodCIsImxpbmVIZWlnaHQiLCJmb250U2l6ZSIsIm5hdldyYXBwZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTs7QUFFQSxJQUFNQSxnQkFBZ0I7QUFDcEJDLFdBQVMsRUFBVEEsMkVBRG9CO0FBRXBCQyxTQUFPLEVBQUU7QUFDUEMsYUFBUyxFQUFFLFFBREo7QUFFUCxhQUFTO0FBQ1BDLGNBQVEsRUFBRSxPQURIO0FBRVBDLFdBQUssRUFBRSxNQUZBO0FBR1BDLFlBQU0sRUFBRSxRQUhEO0FBSVBDLGVBQVMsRUFBRTtBQUpKO0FBRkYsR0FGVztBQVdwQkMsYUFBVyxFQUFFO0FBQ1hGLFVBQU0sRUFBRSxpQkFERztBQUVYRixZQUFRLEVBQUUsT0FGQztBQUdYSyxTQUFLLEVBQUUsTUFISTtBQUlYTixhQUFTLEVBQUU7QUFKQSxHQVhPO0FBaUJwQk8sTUFBSSxFQUFFO0FBQ0pDLGFBQVMsRUFBRTtBQURQO0FBakJjLEdBb0JqQkMsc0ZBcEJpQjtBQXFCcEJDLE1BQUksRUFBRTtBQUNKQyxjQUFVLEVBQUUsU0FEUjtBQUVKQyxZQUFRLEVBQUUsVUFGTjtBQUdKQyxVQUFNLEVBQUU7QUFISixHQXJCYztBQTBCcEJDLFlBQVUsRUFBRTtBQUNWWCxVQUFNLEVBQUUsZ0JBREU7QUFFVlksZ0JBQVksRUFBRSxLQUZKO0FBR1ZDLGFBQVMsRUFDUDtBQUpRLEdBMUJRO0FBZ0NwQkMsU0FBTyxFQUFFO0FBQ1BqQixhQUFTLEVBQUU7QUFESixHQWhDVztBQW1DcEJrQixPQUFLLGtDQUNBQSx1RUFEQTtBQUVIQyxXQUFPLEVBQUUsY0FGTjtBQUdIUCxZQUFRLEVBQUUsVUFIUDtBQUlISixhQUFTLEVBQUUsTUFKUjtBQUtIWSxhQUFTLEVBQUUsTUFMUjtBQU1IQyxrQkFBYyxFQUFFLE1BTmI7QUFPSHJCLGFBQVMsRUFBRTtBQVBSLElBbkNlO0FBNENwQnNCLFNBQU8sRUFBRTtBQUNQZCxhQUFTLEVBQUUsR0FESjtBQUVQTixTQUFLLEVBQUUsTUFGQTtBQUdQRSxhQUFTLEVBQUUsTUFISjtBQUlQbUIsUUFBSSxFQUFFLEdBSkM7QUFLUEMsT0FBRyxFQUFFLEdBTEU7QUFNUEMsVUFBTSxFQUFFLE1BTkQ7QUFPUEMsY0FBVSxFQUFFLE1BUEw7QUFRUEMsWUFBUSxFQUFFLE1BUkg7QUFTUHJCLFNBQUssRUFBRTtBQVRBLEdBNUNXO0FBdURwQnNCLFlBQVUsRUFBRTtBQUNWekIsVUFBTSxFQUFFLHFCQURFO0FBRVZILGFBQVMsRUFBRTtBQUZEO0FBdkRRLEVBQXRCOztBQTZEZUgsK0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc3BvbnNvcnMuYTQ2N2M2NTM4ODUzY2RjZjQ3ZWYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbnRhaW5lciwgdGl0bGUgfSBmcm9tICdzdHlsZXMvanNzL25leHRqcy1tYXRlcmlhbC1raXQuanMnO1xyXG5cclxuaW1wb3J0IGltYWdlc1N0eWxlIGZyb20gJ3N0eWxlcy9qc3MvbmV4dGpzLW1hdGVyaWFsLWtpdC9pbWFnZXNTdHlsZXMuanMnO1xyXG5cclxuY29uc3QgcHJvZmlsZVBhZ2VTdHlsZSA9IHtcclxuICBjb250YWluZXIsXHJcbiAgcHJvZmlsZToge1xyXG4gICAgdGV4dEFsaWduOiAnY2VudGVyJyxcclxuICAgICcmIGltZyc6IHtcclxuICAgICAgbWF4V2lkdGg6ICcxNjBweCcsXHJcbiAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgIG1hcmdpbjogJzAgYXV0bycsXHJcbiAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZTNkKDAsIC01MCUsIDApJyxcclxuICAgIH0sXHJcbiAgfSxcclxuICBkZXNjcmlwdGlvbjoge1xyXG4gICAgbWFyZ2luOiAnMS4wNzFyZW0gYXV0byAwJyxcclxuICAgIG1heFdpZHRoOiAnNjAwcHgnLFxyXG4gICAgY29sb3I6ICcjOTk5JyxcclxuICAgIHRleHRBbGlnbjogJ2NlbnRlciAhaW1wb3J0YW50JyxcclxuICB9LFxyXG4gIG5hbWU6IHtcclxuICAgIG1hcmdpblRvcDogJy04MHB4JyxcclxuICB9LFxyXG4gIC4uLmltYWdlc1N0eWxlLFxyXG4gIG1haW46IHtcclxuICAgIGJhY2tncm91bmQ6ICcjRkZGRkZGJyxcclxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgekluZGV4OiAnMycsXHJcbiAgfSxcclxuICBtYWluUmFpc2VkOiB7XHJcbiAgICBtYXJnaW46ICctNjBweCAzMHB4IDBweCcsXHJcbiAgICBib3JkZXJSYWRpdXM6ICc2cHgnLFxyXG4gICAgYm94U2hhZG93OlxyXG4gICAgICAnMCAxNnB4IDI0cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgNnB4IDMwcHggNXB4IHJnYmEoMCwgMCwgMCwgMC4xMiksIDAgOHB4IDEwcHggLTVweCByZ2JhKDAsIDAsIDAsIDAuMiknLFxyXG4gIH0sXHJcbiAgbWVzc2FnZToge1xyXG4gICAgdGV4dEFsaWduOiAnY2VudGVyJyxcclxuICB9LFxyXG4gIHRpdGxlOiB7XHJcbiAgICAuLi50aXRsZSxcclxuICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxyXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICBtYXJnaW5Ub3A6ICczMHB4JyxcclxuICAgIG1pbkhlaWdodDogJzMycHgnLFxyXG4gICAgdGV4dERlY29yYXRpb246ICdub25lJyxcclxuICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXHJcbiAgfSxcclxuICBzb2NpYWxzOiB7XHJcbiAgICBtYXJnaW5Ub3A6ICcwJyxcclxuICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICB0cmFuc2Zvcm06ICdub25lJyxcclxuICAgIGxlZnQ6ICcwJyxcclxuICAgIHRvcDogJzAnLFxyXG4gICAgaGVpZ2h0OiAnMTAwJScsXHJcbiAgICBsaW5lSGVpZ2h0OiAnNDFweCcsXHJcbiAgICBmb250U2l6ZTogJzIwcHgnLFxyXG4gICAgY29sb3I6ICcjOTk5JyxcclxuICB9LFxyXG4gIG5hdldyYXBwZXI6IHtcclxuICAgIG1hcmdpbjogJzIwcHggYXV0byA1MHB4IGF1dG8nLFxyXG4gICAgdGV4dEFsaWduOiAnY2VudGVyJyxcclxuICB9LFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcHJvZmlsZVBhZ2VTdHlsZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==