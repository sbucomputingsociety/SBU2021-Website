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
  container: _objectSpread(_objectSpread({}, styles_jss_nextjs_material_kit_js__WEBPACK_IMPORTED_MODULE_1__["container"]), {}, {
    paddingBottom: 100
  }),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL2pzcy9uZXh0anMtbWF0ZXJpYWwta2l0L3BhZ2VzL3Nwb25zb3JzUGFnZS5qcyJdLCJuYW1lcyI6WyJzcG9uc29yc1BhZ2VTdHlsZSIsImNvbnRhaW5lciIsInBhZGRpbmdCb3R0b20iLCJwcm9maWxlIiwidGV4dEFsaWduIiwibWF4V2lkdGgiLCJ3aWR0aCIsIm1hcmdpbiIsInRyYW5zZm9ybSIsImNvbnRlbnQiLCJtYXJnaW5Cb3R0b20iLCJkZXNjcmlwdGlvbiIsImNvbG9yIiwibmFtZSIsIm1hcmdpblRvcCIsImltYWdlc1N0eWxlIiwibWFpbiIsImJhY2tncm91bmQiLCJwb3NpdGlvbiIsInpJbmRleCIsIm1haW5SYWlzZWQiLCJib3JkZXJSYWRpdXMiLCJib3hTaGFkb3ciLCJtZXNzYWdlIiwidGl0bGUiLCJkaXNwbGF5IiwibWluSGVpZ2h0IiwidGV4dERlY29yYXRpb24iLCJzb2NpYWxzIiwibGVmdCIsInRvcCIsImhlaWdodCIsImxpbmVIZWlnaHQiLCJmb250U2l6ZSIsInNwb25zb3IiLCJqdXN0aWZ5Q29udGVudCIsIm5hdldyYXBwZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTs7QUFFQSxJQUFNQSxpQkFBaUI7QUFDckJDLFdBQVMsa0NBQ0pBLDJFQURJO0FBRVBDLGlCQUFhLEVBQUU7QUFGUixJQURZO0FBS3JCQyxTQUFPLEVBQUU7QUFDUEMsYUFBUyxFQUFFLFFBREo7QUFFUCxhQUFTO0FBQ1BDLGNBQVEsRUFBRSxPQURIO0FBRVBDLFdBQUssRUFBRSxNQUZBO0FBR1BDLFlBQU0sRUFBRSxRQUhEO0FBSVBDLGVBQVMsRUFBRTtBQUpKO0FBRkYsR0FMWTtBQWNyQkMsU0FBTyxFQUFFO0FBQ1BDLGdCQUFZLEVBQUU7QUFEUCxHQWRZO0FBaUJyQkMsYUFBVyxFQUFFO0FBQ1hKLFVBQU0sRUFBRSxpQkFERztBQUVYRixZQUFRLEVBQUUsT0FGQztBQUdYTyxTQUFLLEVBQUUsTUFISTtBQUlYUixhQUFTLEVBQUU7QUFKQSxHQWpCUTtBQXVCckJTLE1BQUksRUFBRTtBQUNKQyxhQUFTLEVBQUU7QUFEUDtBQXZCZSxHQTBCbEJDLHNGQTFCa0I7QUEyQnJCQyxNQUFJLEVBQUU7QUFDSkMsY0FBVSxFQUFFLFNBRFI7QUFFSkMsWUFBUSxFQUFFLFVBRk47QUFHSkMsVUFBTSxFQUFFO0FBSEosR0EzQmU7QUFnQ3JCQyxZQUFVLEVBQUU7QUFDVmIsVUFBTSxFQUFFLGdCQURFO0FBRVZjLGdCQUFZLEVBQUUsS0FGSjtBQUdWQyxhQUFTLEVBQ1A7QUFKUSxHQWhDUztBQXNDckJDLFNBQU8sRUFBRTtBQUNQbkIsYUFBUyxFQUFFO0FBREosR0F0Q1k7QUF5Q3JCb0IsT0FBSyxrQ0FDQUEsdUVBREE7QUFFSEMsV0FBTyxFQUFFLGNBRk47QUFHSFAsWUFBUSxFQUFFLFVBSFA7QUFJSEosYUFBUyxFQUFFLE1BSlI7QUFLSFksYUFBUyxFQUFFLE1BTFI7QUFNSEMsa0JBQWMsRUFBRSxNQU5iO0FBT0h2QixhQUFTLEVBQUU7QUFQUixJQXpDZ0I7QUFrRHJCd0IsU0FBTyxFQUFFO0FBQ1BkLGFBQVMsRUFBRSxHQURKO0FBRVBSLFNBQUssRUFBRSxNQUZBO0FBR1BFLGFBQVMsRUFBRSxNQUhKO0FBSVBxQixRQUFJLEVBQUUsR0FKQztBQUtQQyxPQUFHLEVBQUUsR0FMRTtBQU1QQyxVQUFNLEVBQUUsTUFORDtBQU9QQyxjQUFVLEVBQUUsTUFQTDtBQVFQQyxZQUFRLEVBQUUsTUFSSDtBQVNQckIsU0FBSyxFQUFFO0FBVEEsR0FsRFk7QUE2RHJCc0IsU0FBTyxFQUFFO0FBQ1BULFdBQU8sRUFBRSxNQURGO0FBRVBVLGtCQUFjLEVBQUU7QUFGVCxHQTdEWTtBQWlFckJDLFlBQVUsRUFBRTtBQUNWN0IsVUFBTSxFQUFFLHFCQURFO0FBRVZILGFBQVMsRUFBRTtBQUZEO0FBakVTLEVBQXZCOztBQXVFZUosZ0ZBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc3BvbnNvcnMuZDFlM2QyMTUxODljNGY4NWM0ZjUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbnRhaW5lciwgdGl0bGUgfSBmcm9tICdzdHlsZXMvanNzL25leHRqcy1tYXRlcmlhbC1raXQuanMnO1xyXG5cclxuaW1wb3J0IGltYWdlc1N0eWxlIGZyb20gJ3N0eWxlcy9qc3MvbmV4dGpzLW1hdGVyaWFsLWtpdC9pbWFnZXNTdHlsZXMuanMnO1xyXG5cclxuY29uc3Qgc3BvbnNvcnNQYWdlU3R5bGUgPSB7XHJcbiAgY29udGFpbmVyOiB7XHJcbiAgICAuLi5jb250YWluZXIsXHJcbiAgICBwYWRkaW5nQm90dG9tOiAxMDAsXHJcbiAgfSxcclxuICBwcm9maWxlOiB7XHJcbiAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxyXG4gICAgJyYgaW1nJzoge1xyXG4gICAgICBtYXhXaWR0aDogJzE2MHB4JyxcclxuICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgbWFyZ2luOiAnMCBhdXRvJyxcclxuICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlM2QoMCwgLTUwJSwgMCknLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGNvbnRlbnQ6IHtcclxuICAgIG1hcmdpbkJvdHRvbTogJzEwMHB4JyxcclxuICB9LFxyXG4gIGRlc2NyaXB0aW9uOiB7XHJcbiAgICBtYXJnaW46ICcxLjA3MXJlbSBhdXRvIDAnLFxyXG4gICAgbWF4V2lkdGg6ICc2MDBweCcsXHJcbiAgICBjb2xvcjogJyM5OTknLFxyXG4gICAgdGV4dEFsaWduOiAnY2VudGVyICFpbXBvcnRhbnQnLFxyXG4gIH0sXHJcbiAgbmFtZToge1xyXG4gICAgbWFyZ2luVG9wOiAnLTgwcHgnLFxyXG4gIH0sXHJcbiAgLi4uaW1hZ2VzU3R5bGUsXHJcbiAgbWFpbjoge1xyXG4gICAgYmFja2dyb3VuZDogJyNGRkZGRkYnLFxyXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICB6SW5kZXg6ICczJyxcclxuICB9LFxyXG4gIG1haW5SYWlzZWQ6IHtcclxuICAgIG1hcmdpbjogJy02MHB4IDMwcHggMHB4JyxcclxuICAgIGJvcmRlclJhZGl1czogJzZweCcsXHJcbiAgICBib3hTaGFkb3c6XHJcbiAgICAgICcwIDE2cHggMjRweCAycHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCA2cHggMzBweCA1cHggcmdiYSgwLCAwLCAwLCAwLjEyKSwgMCA4cHggMTBweCAtNXB4IHJnYmEoMCwgMCwgMCwgMC4yKScsXHJcbiAgfSxcclxuICBtZXNzYWdlOiB7XHJcbiAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxyXG4gIH0sXHJcbiAgdGl0bGU6IHtcclxuICAgIC4uLnRpdGxlLFxyXG4gICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXHJcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgIG1hcmdpblRvcDogJzMwcHgnLFxyXG4gICAgbWluSGVpZ2h0OiAnMzJweCcsXHJcbiAgICB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnLFxyXG4gICAgdGV4dEFsaWduOiAnY2VudGVyJyxcclxuICB9LFxyXG4gIHNvY2lhbHM6IHtcclxuICAgIG1hcmdpblRvcDogJzAnLFxyXG4gICAgd2lkdGg6ICcxMDAlJyxcclxuICAgIHRyYW5zZm9ybTogJ25vbmUnLFxyXG4gICAgbGVmdDogJzAnLFxyXG4gICAgdG9wOiAnMCcsXHJcbiAgICBoZWlnaHQ6ICcxMDAlJyxcclxuICAgIGxpbmVIZWlnaHQ6ICc0MXB4JyxcclxuICAgIGZvbnRTaXplOiAnMjBweCcsXHJcbiAgICBjb2xvcjogJyM5OTknLFxyXG4gIH0sXHJcbiAgc3BvbnNvcjoge1xyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxyXG4gIH0sXHJcbiAgbmF2V3JhcHBlcjoge1xyXG4gICAgbWFyZ2luOiAnMjBweCBhdXRvIDUwcHggYXV0bycsXHJcbiAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxyXG4gIH0sXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzcG9uc29yc1BhZ2VTdHlsZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==