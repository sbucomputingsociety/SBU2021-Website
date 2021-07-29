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




var sponsorsPageStyle = _objectSpread(_objectSpread({
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
  content: {
    marginBottom: '100px'
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
    display: 'flex',
    justifyContent: 'center'
  },
  navWrapper: {
    margin: '20px auto 50px auto',
    textAlign: 'center'
  }
});

/* harmony default export */ __webpack_exports__["default"] = (sponsorsPageStyle);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL2pzcy9uZXh0anMtbWF0ZXJpYWwta2l0L3BhZ2VzL3Nwb25zb3JzUGFnZS5qcyJdLCJuYW1lcyI6WyJzcG9uc29yc1BhZ2VTdHlsZSIsImNvbnRhaW5lciIsInByb2ZpbGUiLCJ0ZXh0QWxpZ24iLCJtYXhXaWR0aCIsIndpZHRoIiwibWFyZ2luIiwidHJhbnNmb3JtIiwiY29udGVudCIsIm1hcmdpbkJvdHRvbSIsImRlc2NyaXB0aW9uIiwiY29sb3IiLCJuYW1lIiwibWFyZ2luVG9wIiwiaW1hZ2VzU3R5bGUiLCJtYWluIiwiYmFja2dyb3VuZCIsInBvc2l0aW9uIiwiekluZGV4IiwibWFpblJhaXNlZCIsImJvcmRlclJhZGl1cyIsImJveFNoYWRvdyIsIm1lc3NhZ2UiLCJ0aXRsZSIsImRpc3BsYXkiLCJtaW5IZWlnaHQiLCJ0ZXh0RGVjb3JhdGlvbiIsInNvY2lhbHMiLCJsZWZ0IiwidG9wIiwiaGVpZ2h0IiwibGluZUhlaWdodCIsImZvbnRTaXplIiwic3BvbnNvciIsImp1c3RpZnlDb250ZW50IiwibmF2V3JhcHBlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBOztBQUVBLElBQU1BLGlCQUFpQjtBQUNyQkMsV0FBUyxFQUFUQSwyRUFEcUI7QUFFckJDLFNBQU8sRUFBRTtBQUNQQyxhQUFTLEVBQUUsUUFESjtBQUVQLGFBQVM7QUFDUEMsY0FBUSxFQUFFLE9BREg7QUFFUEMsV0FBSyxFQUFFLE1BRkE7QUFHUEMsWUFBTSxFQUFFLFFBSEQ7QUFJUEMsZUFBUyxFQUFFO0FBSko7QUFGRixHQUZZO0FBV3JCQyxTQUFPLEVBQUU7QUFDUEMsZ0JBQVksRUFBRTtBQURQLEdBWFk7QUFjckJDLGFBQVcsRUFBRTtBQUNYSixVQUFNLEVBQUUsaUJBREc7QUFFWEYsWUFBUSxFQUFFLE9BRkM7QUFHWE8sU0FBSyxFQUFFLE1BSEk7QUFJWFIsYUFBUyxFQUFFO0FBSkEsR0FkUTtBQW9CckJTLE1BQUksRUFBRTtBQUNKQyxhQUFTLEVBQUU7QUFEUDtBQXBCZSxHQXVCbEJDLHNGQXZCa0I7QUF3QnJCQyxNQUFJLEVBQUU7QUFDSkMsY0FBVSxFQUFFLFNBRFI7QUFFSkMsWUFBUSxFQUFFLFVBRk47QUFHSkMsVUFBTSxFQUFFO0FBSEosR0F4QmU7QUE2QnJCQyxZQUFVLEVBQUU7QUFDVmIsVUFBTSxFQUFFLGdCQURFO0FBRVZjLGdCQUFZLEVBQUUsS0FGSjtBQUdWQyxhQUFTLEVBQ1A7QUFKUSxHQTdCUztBQW1DckJDLFNBQU8sRUFBRTtBQUNQbkIsYUFBUyxFQUFFO0FBREosR0FuQ1k7QUFzQ3JCb0IsT0FBSyxrQ0FDQUEsdUVBREE7QUFFSEMsV0FBTyxFQUFFLGNBRk47QUFHSFAsWUFBUSxFQUFFLFVBSFA7QUFJSEosYUFBUyxFQUFFLE1BSlI7QUFLSFksYUFBUyxFQUFFLE1BTFI7QUFNSEMsa0JBQWMsRUFBRSxNQU5iO0FBT0h2QixhQUFTLEVBQUU7QUFQUixJQXRDZ0I7QUErQ3JCd0IsU0FBTyxFQUFFO0FBQ1BkLGFBQVMsRUFBRSxHQURKO0FBRVBSLFNBQUssRUFBRSxNQUZBO0FBR1BFLGFBQVMsRUFBRSxNQUhKO0FBSVBxQixRQUFJLEVBQUUsR0FKQztBQUtQQyxPQUFHLEVBQUUsR0FMRTtBQU1QQyxVQUFNLEVBQUUsTUFORDtBQU9QQyxjQUFVLEVBQUUsTUFQTDtBQVFQQyxZQUFRLEVBQUUsTUFSSDtBQVNQckIsU0FBSyxFQUFFO0FBVEEsR0EvQ1k7QUEwRHJCc0IsU0FBTyxFQUFFO0FBQ1BULFdBQU8sRUFBRSxNQURGO0FBRVBVLGtCQUFjLEVBQUU7QUFGVCxHQTFEWTtBQThEckJDLFlBQVUsRUFBRTtBQUNWN0IsVUFBTSxFQUFFLHFCQURFO0FBRVZILGFBQVMsRUFBRTtBQUZEO0FBOURTLEVBQXZCOztBQW9FZUgsZ0ZBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc3BvbnNvcnMuNzVmN2M5N2ZkMGQ1YWU4YjRkMzYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbnRhaW5lciwgdGl0bGUgfSBmcm9tICdzdHlsZXMvanNzL25leHRqcy1tYXRlcmlhbC1raXQuanMnO1xyXG5cclxuaW1wb3J0IGltYWdlc1N0eWxlIGZyb20gJ3N0eWxlcy9qc3MvbmV4dGpzLW1hdGVyaWFsLWtpdC9pbWFnZXNTdHlsZXMuanMnO1xyXG5cclxuY29uc3Qgc3BvbnNvcnNQYWdlU3R5bGUgPSB7XHJcbiAgY29udGFpbmVyLFxyXG4gIHByb2ZpbGU6IHtcclxuICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXHJcbiAgICAnJiBpbWcnOiB7XHJcbiAgICAgIG1heFdpZHRoOiAnMTYwcHgnLFxyXG4gICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICBtYXJnaW46ICcwIGF1dG8nLFxyXG4gICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGUzZCgwLCAtNTAlLCAwKScsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgY29udGVudDoge1xyXG4gICAgbWFyZ2luQm90dG9tOiAnMTAwcHgnLFxyXG4gIH0sXHJcbiAgZGVzY3JpcHRpb246IHtcclxuICAgIG1hcmdpbjogJzEuMDcxcmVtIGF1dG8gMCcsXHJcbiAgICBtYXhXaWR0aDogJzYwMHB4JyxcclxuICAgIGNvbG9yOiAnIzk5OScsXHJcbiAgICB0ZXh0QWxpZ246ICdjZW50ZXIgIWltcG9ydGFudCcsXHJcbiAgfSxcclxuICBuYW1lOiB7XHJcbiAgICBtYXJnaW5Ub3A6ICctODBweCcsXHJcbiAgfSxcclxuICAuLi5pbWFnZXNTdHlsZSxcclxuICBtYWluOiB7XHJcbiAgICBiYWNrZ3JvdW5kOiAnI0ZGRkZGRicsXHJcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgIHpJbmRleDogJzMnLFxyXG4gIH0sXHJcbiAgbWFpblJhaXNlZDoge1xyXG4gICAgbWFyZ2luOiAnLTYwcHggMzBweCAwcHgnLFxyXG4gICAgYm9yZGVyUmFkaXVzOiAnNnB4JyxcclxuICAgIGJveFNoYWRvdzpcclxuICAgICAgJzAgMTZweCAyNHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDZweCAzMHB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDhweCAxMHB4IC01cHggcmdiYSgwLCAwLCAwLCAwLjIpJyxcclxuICB9LFxyXG4gIG1lc3NhZ2U6IHtcclxuICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXHJcbiAgfSxcclxuICB0aXRsZToge1xyXG4gICAgLi4udGl0bGUsXHJcbiAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcclxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgbWFyZ2luVG9wOiAnMzBweCcsXHJcbiAgICBtaW5IZWlnaHQ6ICczMnB4JyxcclxuICAgIHRleHREZWNvcmF0aW9uOiAnbm9uZScsXHJcbiAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxyXG4gIH0sXHJcbiAgc29jaWFsczoge1xyXG4gICAgbWFyZ2luVG9wOiAnMCcsXHJcbiAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgdHJhbnNmb3JtOiAnbm9uZScsXHJcbiAgICBsZWZ0OiAnMCcsXHJcbiAgICB0b3A6ICcwJyxcclxuICAgIGhlaWdodDogJzEwMCUnLFxyXG4gICAgbGluZUhlaWdodDogJzQxcHgnLFxyXG4gICAgZm9udFNpemU6ICcyMHB4JyxcclxuICAgIGNvbG9yOiAnIzk5OScsXHJcbiAgfSxcclxuICBzcG9uc29yOiB7XHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcbiAgfSxcclxuICBuYXZXcmFwcGVyOiB7XHJcbiAgICBtYXJnaW46ICcyMHB4IGF1dG8gNTBweCBhdXRvJyxcclxuICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXHJcbiAgfSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHNwb25zb3JzUGFnZVN0eWxlO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9