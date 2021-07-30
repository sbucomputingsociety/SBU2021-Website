webpackHotUpdate_N_E("pages/team",{

/***/ "./styles/jss/nextjs-material-kit.js":
/*!*******************************************!*\
  !*** ./styles/jss/nextjs-material-kit.js ***!
  \*******************************************/
/*! exports provided: hexToRGBAlpha, drawerWidth, transition, container, containerFluid, boxShadow, card, defaultFont, primaryColor, warningColor, dangerColor, successColor, infoColor, roseColor, grayColor, primaryBoxShadow, infoBoxShadow, successBoxShadow, warningBoxShadow, dangerBoxShadow, roseBoxShadow, warningCardHeader, successCardHeader, dangerCardHeader, infoCardHeader, primaryCardHeader, roseCardHeader, cardActions, cardHeader, defaultBoxShadow, title, cardTitle, cardLink, cardSubtitle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hexToRGBAlpha", function() { return hexToRGBAlpha; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "drawerWidth", function() { return drawerWidth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transition", function() { return transition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "container", function() { return container; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "containerFluid", function() { return containerFluid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "boxShadow", function() { return boxShadow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "card", function() { return card; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultFont", function() { return defaultFont; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "primaryColor", function() { return primaryColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "warningColor", function() { return warningColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dangerColor", function() { return dangerColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "successColor", function() { return successColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "infoColor", function() { return infoColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "roseColor", function() { return roseColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "grayColor", function() { return grayColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "primaryBoxShadow", function() { return primaryBoxShadow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "infoBoxShadow", function() { return infoBoxShadow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "successBoxShadow", function() { return successBoxShadow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "warningBoxShadow", function() { return warningBoxShadow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dangerBoxShadow", function() { return dangerBoxShadow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "roseBoxShadow", function() { return roseBoxShadow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "warningCardHeader", function() { return warningCardHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "successCardHeader", function() { return successCardHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dangerCardHeader", function() { return dangerCardHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "infoCardHeader", function() { return infoCardHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "primaryCardHeader", function() { return primaryCardHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "roseCardHeader", function() { return roseCardHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cardActions", function() { return cardActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cardHeader", function() { return cardHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultBoxShadow", function() { return defaultBoxShadow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "title", function() { return title; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cardTitle", function() { return cardTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cardLink", function() { return cardLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cardSubtitle", function() { return cardSubtitle; });
/* harmony import */ var C_Users_Lawrence_sbcs_nextjs_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_Users_Lawrence_sbcs_nextjs_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/*!

 =========================================================
 * Stony Brook Computing Society - v1.2.0 based on Material Kit - v2.0.2 and Material Kit React - v1.8.0
 =========================================================

 * Product Page: https://www.creative-tim.com/product/nextjs-material-kit
 * Copyright 2021 Creative Tim (https://www.creative-tim.com)
 * Licensed under MIT (https://github.com/creativetimofficial/nextjs-material-kit/blob/main/LICENSE.md)

 =========================================================

 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

 */
// ##############################
// // // Variables - Styles that are used on more than one component
// #############################
var hexColorToRGB = function hexColorToRGB(hexColor) {
  var detectShorthand = /^#?([a-f\d])([a-f\d])([a-f\d])$/i; // #000 vs #000000

  hexColor = hexColor.replace(detectShorthand, function (m, r, g, b) {
    return r + r + g + g + b + b;
  });
  var hex_array = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hexColor); // #000000 to #ffffff

  return hex_array ? {
    r: parseInt(hex_array[1], 16),
    // 0-255
    g: parseInt(hex_array[2], 16),
    // 0-255
    b: parseInt(hex_array[3], 16) // 0-255

  } : null;
};

var hexToRGBAlpha = function hexToRGBAlpha(hexColor, alpha) {
  var rgb = hexColorToRGB(hexColor);
  return "rgba(".concat(rgb.r, ",").concat(rgb.g, ",").concat(rgb.b, ",").concat(alpha, ")");
};

var drawerWidth = 260;
var transition = {
  transition: 'all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1)'
};
var containerFluid = {
  paddingRight: '15px',
  paddingLeft: '15px',
  marginRight: 'auto',
  marginLeft: 'auto',
  width: '100%'
};

var container = _objectSpread(_objectSpread({}, containerFluid), {}, {
  '@media (min-width: 576px)': {
    maxWidth: '540px'
  },
  '@media (min-width: 768px)': {
    maxWidth: '720px'
  },
  '@media (min-width: 992px)': {
    maxWidth: '960px'
  },
  '@media (min-width: 1200px)': {
    maxWidth: '1140px'
  }
});

var boxShadow = {
  boxShadow: '0 10px 30px -12px rgba(0, 0, 0, 0.42), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)'
};
var card = {
  display: 'inline-block',
  position: 'relative',
  width: '100%',
  margin: '25px 0',
  boxShadow: '0 1px 4px 0 rgba(0, 0, 0, 0.14)',
  borderRadius: '3px',
  color: 'rgba(0, 0, 0, 0.87)',
  background: '#fff'
};
var defaultFont = {
  fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  fontWeight: '300',
  lineHeight: '1.5em'
};
var primaryColor = '#9c27b0';
var warningColor = '#ff9800';
var dangerColor = '#f44336';
var successColor = '#4caf50';
var infoColor = '#00acc1';
var roseColor = '#e91e63';
var grayColor = '#999999';
var primaryBoxShadow = {
  boxShadow: "0 12px 20px -10px ".concat(hexToRGBAlpha(primaryColor, 0.28), ", 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px ").concat(hexToRGBAlpha(primaryColor, 0.2))
};
var infoBoxShadow = {
  boxShadow: "0 12px 20px -10px ".concat(hexToRGBAlpha(infoColor, 0.28), ", 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px ").concat(hexToRGBAlpha(infoColor, 0.2))
};
var successBoxShadow = {
  boxShadow: "0 12px 20px -10px ".concat(hexToRGBAlpha(successColor, 0.28), ", 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px ").concat(hexToRGBAlpha(successColor, 0.2))
};
var warningBoxShadow = {
  boxShadow: "0 12px 20px -10px ".concat(hexToRGBAlpha(warningColor, 0.28), ", 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px ").concat(hexToRGBAlpha(warningColor, 0.2))
};
var dangerBoxShadow = {
  boxShadow: "0 12px 20px -10px ".concat(hexToRGBAlpha(dangerColor, 0.28), ", 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px ").concat(hexToRGBAlpha(dangerColor, 0.2))
};
var roseBoxShadow = {
  boxShadow: "0 4px 20px 0px ".concat(hexToRGBAlpha('#000', 0.14), ", 0 7px 10px -5px ").concat(hexToRGBAlpha(roseColor, 0.4))
};

var warningCardHeader = _objectSpread({
  color: '#fff',
  background: 'linear-gradient(60deg, #ffa726, #fb8c00)'
}, warningBoxShadow);

var successCardHeader = _objectSpread({
  color: '#fff',
  background: 'linear-gradient(60deg, #66bb6a, #43a047)'
}, successBoxShadow);

var dangerCardHeader = _objectSpread({
  color: '#fff',
  background: 'linear-gradient(60deg, #ef5350, #e53935)'
}, dangerBoxShadow);

var infoCardHeader = _objectSpread({
  color: '#fff',
  background: 'linear-gradient(60deg, #26c6da, #00acc1)'
}, infoBoxShadow);

var primaryCardHeader = _objectSpread({
  color: '#fff',
  background: 'linear-gradient(60deg, #ab47bc, #8e24aa)'
}, primaryBoxShadow);

var roseCardHeader = _objectSpread({
  color: '#fff',
  background: 'linear-gradient(60deg, #ec407a, #d81b60)'
}, roseBoxShadow);

var cardActions = _objectSpread({
  margin: '0 20px 10px',
  paddingTop: '10px',
  borderTop: '1px solid #eeeeee',
  height: 'auto'
}, defaultFont);

var cardHeader = {
  margin: '-30px 15px 0',
  borderRadius: '3px',
  padding: '15px'
};
var defaultBoxShadow = {
  border: '0',
  borderRadius: '3px',
  boxShadow: '0 10px 20px -12px rgba(0, 0, 0, 0.42), 0 3px 20px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)',
  padding: '10px 0',
  transition: 'all 150ms ease 0s'
};
var title = {
  color: '#3C4858',
  margin: '1.75rem 0 0.875rem',
  textDecoration: 'none',
  fontWeight: '700',
  fontFamily: "\"Roboto Slab\", \"Times New Roman\", serif"
};

var cardTitle = _objectSpread(_objectSpread({}, title), {}, {
  marginTop: '.625rem'
});

var cardLink = {
  '& + $cardLink': {
    marginLeft: '1.25rem'
  }
};
var cardSubtitle = {
  marginBottom: '0',
  marginTop: '-.375rem'
};


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL2pzcy9uZXh0anMtbWF0ZXJpYWwta2l0LmpzIl0sIm5hbWVzIjpbImhleENvbG9yVG9SR0IiLCJoZXhDb2xvciIsImRldGVjdFNob3J0aGFuZCIsInJlcGxhY2UiLCJtIiwiciIsImciLCJiIiwiaGV4X2FycmF5IiwiZXhlYyIsInBhcnNlSW50IiwiaGV4VG9SR0JBbHBoYSIsImFscGhhIiwicmdiIiwiZHJhd2VyV2lkdGgiLCJ0cmFuc2l0aW9uIiwiY29udGFpbmVyRmx1aWQiLCJwYWRkaW5nUmlnaHQiLCJwYWRkaW5nTGVmdCIsIm1hcmdpblJpZ2h0IiwibWFyZ2luTGVmdCIsIndpZHRoIiwiY29udGFpbmVyIiwibWF4V2lkdGgiLCJib3hTaGFkb3ciLCJjYXJkIiwiZGlzcGxheSIsInBvc2l0aW9uIiwibWFyZ2luIiwiYm9yZGVyUmFkaXVzIiwiY29sb3IiLCJiYWNrZ3JvdW5kIiwiZGVmYXVsdEZvbnQiLCJmb250RmFtaWx5IiwiZm9udFdlaWdodCIsImxpbmVIZWlnaHQiLCJwcmltYXJ5Q29sb3IiLCJ3YXJuaW5nQ29sb3IiLCJkYW5nZXJDb2xvciIsInN1Y2Nlc3NDb2xvciIsImluZm9Db2xvciIsInJvc2VDb2xvciIsImdyYXlDb2xvciIsInByaW1hcnlCb3hTaGFkb3ciLCJpbmZvQm94U2hhZG93Iiwic3VjY2Vzc0JveFNoYWRvdyIsIndhcm5pbmdCb3hTaGFkb3ciLCJkYW5nZXJCb3hTaGFkb3ciLCJyb3NlQm94U2hhZG93Iiwid2FybmluZ0NhcmRIZWFkZXIiLCJzdWNjZXNzQ2FyZEhlYWRlciIsImRhbmdlckNhcmRIZWFkZXIiLCJpbmZvQ2FyZEhlYWRlciIsInByaW1hcnlDYXJkSGVhZGVyIiwicm9zZUNhcmRIZWFkZXIiLCJjYXJkQWN0aW9ucyIsInBhZGRpbmdUb3AiLCJib3JkZXJUb3AiLCJoZWlnaHQiLCJjYXJkSGVhZGVyIiwicGFkZGluZyIsImRlZmF1bHRCb3hTaGFkb3ciLCJib3JkZXIiLCJ0aXRsZSIsInRleHREZWNvcmF0aW9uIiwiY2FyZFRpdGxlIiwibWFyZ2luVG9wIiwiY2FyZExpbmsiLCJjYXJkU3VidGl0bGUiLCJtYXJnaW5Cb3R0b20iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQVVDLFFBQVYsRUFBb0I7QUFDeEMsTUFBSUMsZUFBZSxHQUFHLGtDQUF0QixDQUR3QyxDQUNrQjs7QUFDMURELFVBQVEsR0FBR0EsUUFBUSxDQUFDRSxPQUFULENBQWlCRCxlQUFqQixFQUFrQyxVQUFVRSxDQUFWLEVBQWFDLENBQWIsRUFBZ0JDLENBQWhCLEVBQW1CQyxDQUFuQixFQUFzQjtBQUNqRSxXQUFPRixDQUFDLEdBQUdBLENBQUosR0FBUUMsQ0FBUixHQUFZQSxDQUFaLEdBQWdCQyxDQUFoQixHQUFvQkEsQ0FBM0I7QUFDRCxHQUZVLENBQVg7QUFJQSxNQUFNQyxTQUFTLEdBQUcsNENBQTRDQyxJQUE1QyxDQUFpRFIsUUFBakQsQ0FBbEIsQ0FOd0MsQ0FNc0M7O0FBQzlFLFNBQU9PLFNBQVMsR0FDWjtBQUNFSCxLQUFDLEVBQUVLLFFBQVEsQ0FBQ0YsU0FBUyxDQUFDLENBQUQsQ0FBVixFQUFlLEVBQWYsQ0FEYjtBQUNpQztBQUMvQkYsS0FBQyxFQUFFSSxRQUFRLENBQUNGLFNBQVMsQ0FBQyxDQUFELENBQVYsRUFBZSxFQUFmLENBRmI7QUFFaUM7QUFDL0JELEtBQUMsRUFBRUcsUUFBUSxDQUFDRixTQUFTLENBQUMsQ0FBRCxDQUFWLEVBQWUsRUFBZixDQUhiLENBR2lDOztBQUhqQyxHQURZLEdBTVosSUFOSjtBQU9ELENBZEQ7O0FBZ0JBLElBQU1HLGFBQWEsR0FBRyxTQUFoQkEsYUFB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LGNBQVksRUFBRSxLQUZTO0FBR3ZCTCxXQUFTLEVBQ1AsK0dBSnFCO0FBS3ZCb0MsU0FBTyxFQUFFLFFBTGM7QUFNdkI3QyxZQUFVLEVBQUU7QUFOVyxDQUF6QjtBQVNBLElBQU1nRCxLQUFLLEdBQUc7QUFDWmpDLE9BQUssRUFBRSxTQURLO0FBRVpGLFFBQU0sRUFBRSxvQkFGSTtBQUdab0MsZ0JBQWMsRUFBRSxNQUhKO0FBSVo5QixZQUFVLEVBQUUsS0FKQTtBQUtaRCxZQUFVO0FBTEUsQ0FBZDs7QUFRQSxJQUFNZ0MsU0FBUyxtQ0FDVkYsS0FEVTtBQUViRyxXQUFTLEVBQUU7QUFGRSxFQUFmOztBQUtBLElBQU1DLFFBQVEsR0FBRztBQUNmLG1CQUFpQjtBQUNmL0MsY0FBVSxFQUFFO0FBREc7QUFERixDQUFqQjtBQU1BLElBQU1nRCxZQUFZLEdBQUc7QUFDbkJDLGNBQVksRUFBRSxHQURLO0FBRW5CSCxXQUFTLEVBQUU7QUFGUSxDQUFyQjtBQUtBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3RlYW0uNmQ0M2VmM2RkNTgxZjBkNmE0MzUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIVxuXG4gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKiBTdG9ueSBCcm9vayBDb21wdXRpbmcgU29jaWV0eSAtIHYxLjIuMCBiYXNlZCBvbiBNYXRlcmlhbCBLaXQgLSB2Mi4wLjIgYW5kIE1hdGVyaWFsIEtpdCBSZWFjdCAtIHYxLjguMFxuID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4gKiBQcm9kdWN0IFBhZ2U6IGh0dHBzOi8vd3d3LmNyZWF0aXZlLXRpbS5jb20vcHJvZHVjdC9uZXh0anMtbWF0ZXJpYWwta2l0XG4gKiBDb3B5cmlnaHQgMjAyMSBDcmVhdGl2ZSBUaW0gKGh0dHBzOi8vd3d3LmNyZWF0aXZlLXRpbS5jb20pXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS9jcmVhdGl2ZXRpbW9mZmljaWFsL25leHRqcy1tYXRlcmlhbC1raXQvYmxvYi9tYWluL0xJQ0VOU0UubWQpXG5cbiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cbiAqL1xuXG4vLyAjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcbi8vIC8vIC8vIFZhcmlhYmxlcyAtIFN0eWxlcyB0aGF0IGFyZSB1c2VkIG9uIG1vcmUgdGhhbiBvbmUgY29tcG9uZW50XG4vLyAjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1xuXG5jb25zdCBoZXhDb2xvclRvUkdCID0gZnVuY3Rpb24gKGhleENvbG9yKSB7XG4gIGxldCBkZXRlY3RTaG9ydGhhbmQgPSAvXiM/KFthLWZcXGRdKShbYS1mXFxkXSkoW2EtZlxcZF0pJC9pOyAvLyAjMDAwIHZzICMwMDAwMDBcbiAgaGV4Q29sb3IgPSBoZXhDb2xvci5yZXBsYWNlKGRldGVjdFNob3J0aGFuZCwgZnVuY3Rpb24gKG0sIHIsIGcsIGIpIHtcbiAgICByZXR1cm4gciArIHIgKyBnICsgZyArIGIgKyBiO1xuICB9KTtcblxuICBjb25zdCBoZXhfYXJyYXkgPSAvXiM/KFthLWZcXGRdezJ9KShbYS1mXFxkXXsyfSkoW2EtZlxcZF17Mn0pJC9pLmV4ZWMoaGV4Q29sb3IpOyAvLyAjMDAwMDAwIHRvICNmZmZmZmZcbiAgcmV0dXJuIGhleF9hcnJheVxuICAgID8ge1xuICAgICAgICByOiBwYXJzZUludChoZXhfYXJyYXlbMV0sIDE2KSwgLy8gMC0yNTVcbiAgICAgICAgZzogcGFyc2VJbnQoaGV4X2FycmF5WzJdLCAxNiksIC8vIDAtMjU1XG4gICAgICAgIGI6IHBhcnNlSW50KGhleF9hcnJheVszXSwgMTYpLCAvLyAwLTI1NVxuICAgICAgfVxuICAgIDogbnVsbDtcbn07XG5cbmNvbnN0IGhleFRvUkdCQWxwaGEgPSBmdW5jdGlvbiAoaGV4Q29sb3IsIGFscGhhKSB7XG4gIGxldCByZ2IgPSBoZXhDb2xvclRvUkdCKGhleENvbG9yKTtcbiAgcmV0dXJuIGByZ2JhKCR7cmdiLnJ9LCR7cmdiLmd9LCR7cmdiLmJ9LCR7YWxwaGF9KWA7XG59O1xuXG5jb25zdCBkcmF3ZXJXaWR0aCA9IDI2MDtcblxuY29uc3QgdHJhbnNpdGlvbiA9IHtcbiAgdHJhbnNpdGlvbjogJ2FsbCAwLjMzcyBjdWJpYy1iZXppZXIoMC42ODUsIDAuMDQ3MywgMC4zNDYsIDEpJyxcbn07XG5cbmNvbnN0IGNvbnRhaW5lckZsdWlkID0ge1xuICBwYWRkaW5nUmlnaHQ6ICcxNXB4JyxcbiAgcGFkZGluZ0xlZnQ6ICcxNXB4JyxcbiAgbWFyZ2luUmlnaHQ6ICdhdXRvJyxcbiAgbWFyZ2luTGVmdDogJ2F1dG8nLFxuICB3aWR0aDogJzEwMCUnLFxufTtcbmNvbnN0IGNvbnRhaW5lciA9IHtcbiAgLi4uY29udGFpbmVyRmx1aWQsXG4gICdAbWVkaWEgKG1pbi13aWR0aDogNTc2cHgpJzoge1xuICAgIG1heFdpZHRoOiAnNTQwcHgnLFxuICB9LFxuICAnQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSc6IHtcbiAgICBtYXhXaWR0aDogJzcyMHB4JyxcbiAgfSxcbiAgJ0BtZWRpYSAobWluLXdpZHRoOiA5OTJweCknOiB7XG4gICAgbWF4V2lkdGg6ICc5NjBweCcsXG4gIH0sXG4gICdAbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSc6IHtcbiAgICBtYXhXaWR0aDogJzExNDBweCcsXG4gIH0sXG59O1xuXG5jb25zdCBib3hTaGFkb3cgPSB7XG4gIGJveFNoYWRvdzpcbiAgICAnMCAxMHB4IDMwcHggLTEycHggcmdiYSgwLCAwLCAwLCAwLjQyKSwgMCA0cHggMjVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKSwgMCA4cHggMTBweCAtNXB4IHJnYmEoMCwgMCwgMCwgMC4yKScsXG59O1xuXG5jb25zdCBjYXJkID0ge1xuICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gIHdpZHRoOiAnMTAwJScsXG4gIG1hcmdpbjogJzI1cHggMCcsXG4gIGJveFNoYWRvdzogJzAgMXB4IDRweCAwIHJnYmEoMCwgMCwgMCwgMC4xNCknLFxuICBib3JkZXJSYWRpdXM6ICczcHgnLFxuICBjb2xvcjogJ3JnYmEoMCwgMCwgMCwgMC44NyknLFxuICBiYWNrZ3JvdW5kOiAnI2ZmZicsXG59O1xuXG5jb25zdCBkZWZhdWx0Rm9udCA9IHtcbiAgZm9udEZhbWlseTogJ1wiUm9ib3RvXCIsIFwiSGVsdmV0aWNhXCIsIFwiQXJpYWxcIiwgc2Fucy1zZXJpZicsXG4gIGZvbnRXZWlnaHQ6ICczMDAnLFxuICBsaW5lSGVpZ2h0OiAnMS41ZW0nLFxufTtcblxuY29uc3QgcHJpbWFyeUNvbG9yID0gJyM5YzI3YjAnO1xuY29uc3Qgd2FybmluZ0NvbG9yID0gJyNmZjk4MDAnO1xuY29uc3QgZGFuZ2VyQ29sb3IgPSAnI2Y0NDMzNic7XG5jb25zdCBzdWNjZXNzQ29sb3IgPSAnIzRjYWY1MCc7XG5jb25zdCBpbmZvQ29sb3IgPSAnIzAwYWNjMSc7XG5jb25zdCByb3NlQ29sb3IgPSAnI2U5MWU2Myc7XG5jb25zdCBncmF5Q29sb3IgPSAnIzk5OTk5OSc7XG5cbmNvbnN0IHByaW1hcnlCb3hTaGFkb3cgPSB7XG4gIGJveFNoYWRvdzogYDAgMTJweCAyMHB4IC0xMHB4ICR7aGV4VG9SR0JBbHBoYShcbiAgICBwcmltYXJ5Q29sb3IsXG4gICAgMC4yOFxuICApfSwgMCA0cHggMjBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKSwgMCA3cHggOHB4IC01cHggJHtoZXhUb1JHQkFscGhhKFxuICAgIHByaW1hcnlDb2xvcixcbiAgICAwLjJcbiAgKX1gLFxufTtcbmNvbnN0IGluZm9Cb3hTaGFkb3cgPSB7XG4gIGJveFNoYWRvdzogYDAgMTJweCAyMHB4IC0xMHB4ICR7aGV4VG9SR0JBbHBoYShcbiAgICBpbmZvQ29sb3IsXG4gICAgMC4yOFxuICApfSwgMCA0cHggMjBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKSwgMCA3cHggOHB4IC01cHggJHtoZXhUb1JHQkFscGhhKFxuICAgIGluZm9Db2xvcixcbiAgICAwLjJcbiAgKX1gLFxufTtcbmNvbnN0IHN1Y2Nlc3NCb3hTaGFkb3cgPSB7XG4gIGJveFNoYWRvdzogYDAgMTJweCAyMHB4IC0xMHB4ICR7aGV4VG9SR0JBbHBoYShcbiAgICBzdWNjZXNzQ29sb3IsXG4gICAgMC4yOFxuICApfSwgMCA0cHggMjBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKSwgMCA3cHggOHB4IC01cHggJHtoZXhUb1JHQkFscGhhKFxuICAgIHN1Y2Nlc3NDb2xvcixcbiAgICAwLjJcbiAgKX1gLFxufTtcbmNvbnN0IHdhcm5pbmdCb3hTaGFkb3cgPSB7XG4gIGJveFNoYWRvdzogYDAgMTJweCAyMHB4IC0xMHB4ICR7aGV4VG9SR0JBbHBoYShcbiAgICB3YXJuaW5nQ29sb3IsXG4gICAgMC4yOFxuICApfSwgMCA0cHggMjBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKSwgMCA3cHggOHB4IC01cHggJHtoZXhUb1JHQkFscGhhKFxuICAgIHdhcm5pbmdDb2xvcixcbiAgICAwLjJcbiAgKX1gLFxufTtcbmNvbnN0IGRhbmdlckJveFNoYWRvdyA9IHtcbiAgYm94U2hhZG93OiBgMCAxMnB4IDIwcHggLTEwcHggJHtoZXhUb1JHQkFscGhhKFxuICAgIGRhbmdlckNvbG9yLFxuICAgIDAuMjhcbiAgKX0sIDAgNHB4IDIwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xMiksIDAgN3B4IDhweCAtNXB4ICR7aGV4VG9SR0JBbHBoYShcbiAgICBkYW5nZXJDb2xvcixcbiAgICAwLjJcbiAgKX1gLFxufTtcbmNvbnN0IHJvc2VCb3hTaGFkb3cgPSB7XG4gIGJveFNoYWRvdzogYDAgNHB4IDIwcHggMHB4ICR7aGV4VG9SR0JBbHBoYShcbiAgICAnIzAwMCcsXG4gICAgMC4xNFxuICApfSwgMCA3cHggMTBweCAtNXB4ICR7aGV4VG9SR0JBbHBoYShyb3NlQ29sb3IsIDAuNCl9YCxcbn07XG5cbmNvbnN0IHdhcm5pbmdDYXJkSGVhZGVyID0ge1xuICBjb2xvcjogJyNmZmYnLFxuICBiYWNrZ3JvdW5kOiAnbGluZWFyLWdyYWRpZW50KDYwZGVnLCAjZmZhNzI2LCAjZmI4YzAwKScsXG4gIC4uLndhcm5pbmdCb3hTaGFkb3csXG59O1xuY29uc3Qgc3VjY2Vzc0NhcmRIZWFkZXIgPSB7XG4gIGNvbG9yOiAnI2ZmZicsXG4gIGJhY2tncm91bmQ6ICdsaW5lYXItZ3JhZGllbnQoNjBkZWcsICM2NmJiNmEsICM0M2EwNDcpJyxcbiAgLi4uc3VjY2Vzc0JveFNoYWRvdyxcbn07XG5jb25zdCBkYW5nZXJDYXJkSGVhZGVyID0ge1xuICBjb2xvcjogJyNmZmYnLFxuICBiYWNrZ3JvdW5kOiAnbGluZWFyLWdyYWRpZW50KDYwZGVnLCAjZWY1MzUwLCAjZTUzOTM1KScsXG4gIC4uLmRhbmdlckJveFNoYWRvdyxcbn07XG5jb25zdCBpbmZvQ2FyZEhlYWRlciA9IHtcbiAgY29sb3I6ICcjZmZmJyxcbiAgYmFja2dyb3VuZDogJ2xpbmVhci1ncmFkaWVudCg2MGRlZywgIzI2YzZkYSwgIzAwYWNjMSknLFxuICAuLi5pbmZvQm94U2hhZG93LFxufTtcbmNvbnN0IHByaW1hcnlDYXJkSGVhZGVyID0ge1xuICBjb2xvcjogJyNmZmYnLFxuICBiYWNrZ3JvdW5kOiAnbGluZWFyLWdyYWRpZW50KDYwZGVnLCAjYWI0N2JjLCAjOGUyNGFhKScsXG4gIC4uLnByaW1hcnlCb3hTaGFkb3csXG59O1xuY29uc3Qgcm9zZUNhcmRIZWFkZXIgPSB7XG4gIGNvbG9yOiAnI2ZmZicsXG4gIGJhY2tncm91bmQ6ICdsaW5lYXItZ3JhZGllbnQoNjBkZWcsICNlYzQwN2EsICNkODFiNjApJyxcbiAgLi4ucm9zZUJveFNoYWRvdyxcbn07XG5jb25zdCBjYXJkQWN0aW9ucyA9IHtcbiAgbWFyZ2luOiAnMCAyMHB4IDEwcHgnLFxuICBwYWRkaW5nVG9wOiAnMTBweCcsXG4gIGJvcmRlclRvcDogJzFweCBzb2xpZCAjZWVlZWVlJyxcbiAgaGVpZ2h0OiAnYXV0bycsXG4gIC4uLmRlZmF1bHRGb250LFxufTtcblxuY29uc3QgY2FyZEhlYWRlciA9IHtcbiAgbWFyZ2luOiAnLTMwcHggMTVweCAwJyxcbiAgYm9yZGVyUmFkaXVzOiAnM3B4JyxcbiAgcGFkZGluZzogJzE1cHgnLFxufTtcblxuY29uc3QgZGVmYXVsdEJveFNoYWRvdyA9IHtcbiAgYm9yZGVyOiAnMCcsXG4gIGJvcmRlclJhZGl1czogJzNweCcsXG4gIGJveFNoYWRvdzpcbiAgICAnMCAxMHB4IDIwcHggLTEycHggcmdiYSgwLCAwLCAwLCAwLjQyKSwgMCAzcHggMjBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKSwgMCA4cHggMTBweCAtNXB4IHJnYmEoMCwgMCwgMCwgMC4yKScsXG4gIHBhZGRpbmc6ICcxMHB4IDAnLFxuICB0cmFuc2l0aW9uOiAnYWxsIDE1MG1zIGVhc2UgMHMnLFxufTtcblxuY29uc3QgdGl0bGUgPSB7XG4gIGNvbG9yOiAnIzNDNDg1OCcsXG4gIG1hcmdpbjogJzEuNzVyZW0gMCAwLjg3NXJlbScsXG4gIHRleHREZWNvcmF0aW9uOiAnbm9uZScsXG4gIGZvbnRXZWlnaHQ6ICc3MDAnLFxuICBmb250RmFtaWx5OiBgXCJSb2JvdG8gU2xhYlwiLCBcIlRpbWVzIE5ldyBSb21hblwiLCBzZXJpZmAsXG59O1xuXG5jb25zdCBjYXJkVGl0bGUgPSB7XG4gIC4uLnRpdGxlLFxuICBtYXJnaW5Ub3A6ICcuNjI1cmVtJyxcbn07XG5cbmNvbnN0IGNhcmRMaW5rID0ge1xuICAnJiArICRjYXJkTGluayc6IHtcbiAgICBtYXJnaW5MZWZ0OiAnMS4yNXJlbScsXG4gIH0sXG59O1xuXG5jb25zdCBjYXJkU3VidGl0bGUgPSB7XG4gIG1hcmdpbkJvdHRvbTogJzAnLFxuICBtYXJnaW5Ub3A6ICctLjM3NXJlbScsXG59O1xuXG5leHBvcnQge1xuICBoZXhUb1JHQkFscGhhLFxuICAvL3ZhcmlhYmxlc1xuICBkcmF3ZXJXaWR0aCxcbiAgdHJhbnNpdGlvbixcbiAgY29udGFpbmVyLFxuICBjb250YWluZXJGbHVpZCxcbiAgYm94U2hhZG93LFxuICBjYXJkLFxuICBkZWZhdWx0Rm9udCxcbiAgcHJpbWFyeUNvbG9yLFxuICB3YXJuaW5nQ29sb3IsXG4gIGRhbmdlckNvbG9yLFxuICBzdWNjZXNzQ29sb3IsXG4gIGluZm9Db2xvcixcbiAgcm9zZUNvbG9yLFxuICBncmF5Q29sb3IsXG4gIHByaW1hcnlCb3hTaGFkb3csXG4gIGluZm9Cb3hTaGFkb3csXG4gIHN1Y2Nlc3NCb3hTaGFkb3csXG4gIHdhcm5pbmdCb3hTaGFkb3csXG4gIGRhbmdlckJveFNoYWRvdyxcbiAgcm9zZUJveFNoYWRvdyxcbiAgd2FybmluZ0NhcmRIZWFkZXIsXG4gIHN1Y2Nlc3NDYXJkSGVhZGVyLFxuICBkYW5nZXJDYXJkSGVhZGVyLFxuICBpbmZvQ2FyZEhlYWRlcixcbiAgcHJpbWFyeUNhcmRIZWFkZXIsXG4gIHJvc2VDYXJkSGVhZGVyLFxuICBjYXJkQWN0aW9ucyxcbiAgY2FyZEhlYWRlcixcbiAgZGVmYXVsdEJveFNoYWRvdyxcbiAgdGl0bGUsXG4gIGNhcmRUaXRsZSxcbiAgY2FyZExpbmssXG4gIGNhcmRTdWJ0aXRsZSxcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9