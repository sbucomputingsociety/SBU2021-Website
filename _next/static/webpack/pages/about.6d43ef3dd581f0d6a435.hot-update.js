webpackHotUpdate_N_E("pages/about",{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL2pzcy9uZXh0anMtbWF0ZXJpYWwta2l0LmpzIl0sIm5hbWVzIjpbImhleENvbG9yVG9SR0IiLCJoZXhDb2xvciIsImRldGVjdFNob3J0aGFuZCIsInJlcGxhY2UiLCJtIiwiciIsImciLCJiIiwiaGV4X2FycmF5IiwiZXhlYyIsInBhcnNlSW50IiwiaGV4VG9SR0JBbHBoYSIsImFscGhhIiwicmdiIiwiZHJhd2VyV2lkdGgiLCJ0cmFuc2l0aW9uIiwiY29udGFpbmVyRmx1aWQiLCJwYWRkaW5nUmlnaHQiLCJwYWRkaW5nTGVmdCIsIm1hcmdpblJpZ2h0IiwibWFyZ2luTGVmdCIsIndpZHRoIiwiY29udGFpbmVyIiwibWF4V2lkdGgiLCJib3hTaGFkb3ciLCJjYXJkIiwiZGlzcGxheSIsInBvc2l0aW9uIiwibWFyZ2luIiwiYm9yZGVyUmFkaXVzIiwiY29sb3IiLCJiYWNrZ3JvdW5kIiwiZGVmYXVsdEZvbnQiLCJmb250RmFtaWx5IiwiZm9udFdlaWdodCIsImxpbmVIZWlnaHQiLCJwcmltYXJ5Q29sb3IiLCJ3YXJuaW5nQ29sb3IiLCJkYW5nZXJDb2xvciIsInN1Y2Nlc3NDb2xvciIsImluZm9Db2xvciIsInJvc2VDb2xvciIsImdyYXlDb2xvciIsInByaW1hcnlCb3hTaGFkb3ciLCJpbmZvQm94U2hhZG93Iiwic3VjY2Vzc0JveFNoYWRvdyIsIndhcm5pbmdCb3hTaGFkb3ciLCJkYW5nZXJCb3hTaGFkb3ciLCJyb3NlQm94U2hhZG93Iiwid2FybmluZ0NhcmRIZWFkZXIiLCJzdWNjZXNzQ2FyZEhlYWRlciIsImRhbmdlckNhcmRIZWFkZXIiLCJpbmZvQ2FyZEhlYWRlciIsInByaW1hcnlDYXJkSGVhZGVyIiwicm9zZUNhcmRIZWFkZXIiLCJjYXJkQWN0aW9ucyIsInBhZGRpbmdUb3AiLCJib3JkZXJUb3AiLCJoZWlnaHQiLCJjYXJkSGVhZGVyIiwicGFkZGluZyIsImRlZmF1bHRCb3hTaGFkb3ciLCJib3JkZXIiLCJ0aXRsZSIsInRleHREZWNvcmF0aW9uIiwiY2FyZFRpdGxlIiwibWFyZ2luVG9wIiwiY2FyZExpbmsiLCJjYXJkU3VidGl0bGUiLCJtYXJnaW5Cb3R0b20iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQVVDLFFBQVYsRUFBb0I7QUFDeEMsTUFBSUMsZUFBZSxHQUFHLGtDQUF0QixDQUR3QyxDQUNrQjs7QUFDMURELFVBQVEsR0FBR0EsUUFBUSxDQUFDRSxPQUFULENBQWlCRCxlQUFqQixFQUFrQyxVQUFVRSxDQUFWLEVBQWFDLENBQWIsRUFBZ0JDLENBQWhCLEVBQW1CQyxDQUFuQixFQUFzQjtBQUNqRSxXQUFPRixDQUFDLEdBQUdBLENBQUosR0FBUUMsQ0FBUixHQUFZQSxDQUFaLEdBQWdCQyxDQUFoQixHQUFvQkEsQ0FBM0I7QUFDRCxHQUZVLENBQVg7QUFJQSxNQUFNQyxTQUFTLEdBQUcsNENBQTRDQyxJQUE1QyxDQUFpRFIsUUFBakQsQ0FBbEIsQ0FOd0MsQ0FNc0M7O0FBQzlFLFNBQU9PLFNBQVMsR0FDWjtBQUNFSCxLQUFDLEVBQUVLLFFBQVEsQ0FBQ0YsU0FBUyxDQUFDLENBQUQsQ0FBVixFQUFlLEVBQWYsQ0FEYjtBQUNpQztBQUMvQkYsS0FBQyxFQUFFSSxRQUFRLENBQUNGLFNBQVMsQ0FBQyxDQUFELENBQVYsRUFBZSxFQUFmLENBRmI7QUFFaUM7QUFDL0JELEtBQUMsRUFBRUcsUUFBUSxDQUFDRixTQUFTLENBQUMsQ0FBRCxDQUFWLEVBQWUsRUFBZixDQUhiLENBR2lDOztBQUhqQyxHQURZLEdBTVosSUFOSjtBQU9ELENBZEQ7O0FBZ0JBLElBQU1HLGFBQWEsR0FBRyxTQUFoQkEsYUFB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LGNBQVksRUFBRSxLQUZTO0FBR3ZCTCxXQUFTLEVBQ1AsK0dBSnFCO0FBS3ZCb0MsU0FBTyxFQUFFLFFBTGM7QUFNdkI3QyxZQUFVLEVBQUU7QUFOVyxDQUF6QjtBQVNBLElBQU1nRCxLQUFLLEdBQUc7QUFDWmpDLE9BQUssRUFBRSxTQURLO0FBRVpGLFFBQU0sRUFBRSxvQkFGSTtBQUdab0MsZ0JBQWMsRUFBRSxNQUhKO0FBSVo5QixZQUFVLEVBQUUsS0FKQTtBQUtaRCxZQUFVO0FBTEUsQ0FBZDs7QUFRQSxJQUFNZ0MsU0FBUyxtQ0FDVkYsS0FEVTtBQUViRyxXQUFTLEVBQUU7QUFGRSxFQUFmOztBQUtBLElBQU1DLFFBQVEsR0FBRztBQUNmLG1CQUFpQjtBQUNmL0MsY0FBVSxFQUFFO0FBREc7QUFERixDQUFqQjtBQU1BLElBQU1nRCxZQUFZLEdBQUc7QUFDbkJDLGNBQVksRUFBRSxHQURLO0FBRW5CSCxXQUFTLEVBQUU7QUFGUSxDQUFyQjtBQUtBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2Fib3V0LjZkNDNlZjNkZDU4MWYwZDZhNDM1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiFcblxuID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICogU3RvbnkgQnJvb2sgQ29tcHV0aW5nIFNvY2lldHkgLSB2MS4yLjAgYmFzZWQgb24gTWF0ZXJpYWwgS2l0IC0gdjIuMC4yIGFuZCBNYXRlcmlhbCBLaXQgUmVhY3QgLSB2MS44LjBcbiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuICogUHJvZHVjdCBQYWdlOiBodHRwczovL3d3dy5jcmVhdGl2ZS10aW0uY29tL3Byb2R1Y3QvbmV4dGpzLW1hdGVyaWFsLWtpdFxuICogQ29weXJpZ2h0IDIwMjEgQ3JlYXRpdmUgVGltIChodHRwczovL3d3dy5jcmVhdGl2ZS10aW0uY29tKVxuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vY3JlYXRpdmV0aW1vZmZpY2lhbC9uZXh0anMtbWF0ZXJpYWwta2l0L2Jsb2IvbWFpbi9MSUNFTlNFLm1kKVxuXG4gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG4gKi9cblxuLy8gIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXG4vLyAvLyAvLyBWYXJpYWJsZXMgLSBTdHlsZXMgdGhhdCBhcmUgdXNlZCBvbiBtb3JlIHRoYW4gb25lIGNvbXBvbmVudFxuLy8gIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcblxuY29uc3QgaGV4Q29sb3JUb1JHQiA9IGZ1bmN0aW9uIChoZXhDb2xvcikge1xuICBsZXQgZGV0ZWN0U2hvcnRoYW5kID0gL14jPyhbYS1mXFxkXSkoW2EtZlxcZF0pKFthLWZcXGRdKSQvaTsgLy8gIzAwMCB2cyAjMDAwMDAwXG4gIGhleENvbG9yID0gaGV4Q29sb3IucmVwbGFjZShkZXRlY3RTaG9ydGhhbmQsIGZ1bmN0aW9uIChtLCByLCBnLCBiKSB7XG4gICAgcmV0dXJuIHIgKyByICsgZyArIGcgKyBiICsgYjtcbiAgfSk7XG5cbiAgY29uc3QgaGV4X2FycmF5ID0gL14jPyhbYS1mXFxkXXsyfSkoW2EtZlxcZF17Mn0pKFthLWZcXGRdezJ9KSQvaS5leGVjKGhleENvbG9yKTsgLy8gIzAwMDAwMCB0byAjZmZmZmZmXG4gIHJldHVybiBoZXhfYXJyYXlcbiAgICA/IHtcbiAgICAgICAgcjogcGFyc2VJbnQoaGV4X2FycmF5WzFdLCAxNiksIC8vIDAtMjU1XG4gICAgICAgIGc6IHBhcnNlSW50KGhleF9hcnJheVsyXSwgMTYpLCAvLyAwLTI1NVxuICAgICAgICBiOiBwYXJzZUludChoZXhfYXJyYXlbM10sIDE2KSwgLy8gMC0yNTVcbiAgICAgIH1cbiAgICA6IG51bGw7XG59O1xuXG5jb25zdCBoZXhUb1JHQkFscGhhID0gZnVuY3Rpb24gKGhleENvbG9yLCBhbHBoYSkge1xuICBsZXQgcmdiID0gaGV4Q29sb3JUb1JHQihoZXhDb2xvcik7XG4gIHJldHVybiBgcmdiYSgke3JnYi5yfSwke3JnYi5nfSwke3JnYi5ifSwke2FscGhhfSlgO1xufTtcblxuY29uc3QgZHJhd2VyV2lkdGggPSAyNjA7XG5cbmNvbnN0IHRyYW5zaXRpb24gPSB7XG4gIHRyYW5zaXRpb246ICdhbGwgMC4zM3MgY3ViaWMtYmV6aWVyKDAuNjg1LCAwLjA0NzMsIDAuMzQ2LCAxKScsXG59O1xuXG5jb25zdCBjb250YWluZXJGbHVpZCA9IHtcbiAgcGFkZGluZ1JpZ2h0OiAnMTVweCcsXG4gIHBhZGRpbmdMZWZ0OiAnMTVweCcsXG4gIG1hcmdpblJpZ2h0OiAnYXV0bycsXG4gIG1hcmdpbkxlZnQ6ICdhdXRvJyxcbiAgd2lkdGg6ICcxMDAlJyxcbn07XG5jb25zdCBjb250YWluZXIgPSB7XG4gIC4uLmNvbnRhaW5lckZsdWlkLFxuICAnQG1lZGlhIChtaW4td2lkdGg6IDU3NnB4KSc6IHtcbiAgICBtYXhXaWR0aDogJzU0MHB4JyxcbiAgfSxcbiAgJ0BtZWRpYSAobWluLXdpZHRoOiA3NjhweCknOiB7XG4gICAgbWF4V2lkdGg6ICc3MjBweCcsXG4gIH0sXG4gICdAbWVkaWEgKG1pbi13aWR0aDogOTkycHgpJzoge1xuICAgIG1heFdpZHRoOiAnOTYwcHgnLFxuICB9LFxuICAnQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCknOiB7XG4gICAgbWF4V2lkdGg6ICcxMTQwcHgnLFxuICB9LFxufTtcblxuY29uc3QgYm94U2hhZG93ID0ge1xuICBib3hTaGFkb3c6XG4gICAgJzAgMTBweCAzMHB4IC0xMnB4IHJnYmEoMCwgMCwgMCwgMC40MiksIDAgNHB4IDI1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xMiksIDAgOHB4IDEwcHggLTVweCByZ2JhKDAsIDAsIDAsIDAuMiknLFxufTtcblxuY29uc3QgY2FyZCA9IHtcbiAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICB3aWR0aDogJzEwMCUnLFxuICBtYXJnaW46ICcyNXB4IDAnLFxuICBib3hTaGFkb3c6ICcwIDFweCA0cHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpJyxcbiAgYm9yZGVyUmFkaXVzOiAnM3B4JyxcbiAgY29sb3I6ICdyZ2JhKDAsIDAsIDAsIDAuODcpJyxcbiAgYmFja2dyb3VuZDogJyNmZmYnLFxufTtcblxuY29uc3QgZGVmYXVsdEZvbnQgPSB7XG4gIGZvbnRGYW1pbHk6ICdcIlJvYm90b1wiLCBcIkhlbHZldGljYVwiLCBcIkFyaWFsXCIsIHNhbnMtc2VyaWYnLFxuICBmb250V2VpZ2h0OiAnMzAwJyxcbiAgbGluZUhlaWdodDogJzEuNWVtJyxcbn07XG5cbmNvbnN0IHByaW1hcnlDb2xvciA9ICcjOWMyN2IwJztcbmNvbnN0IHdhcm5pbmdDb2xvciA9ICcjZmY5ODAwJztcbmNvbnN0IGRhbmdlckNvbG9yID0gJyNmNDQzMzYnO1xuY29uc3Qgc3VjY2Vzc0NvbG9yID0gJyM0Y2FmNTAnO1xuY29uc3QgaW5mb0NvbG9yID0gJyMwMGFjYzEnO1xuY29uc3Qgcm9zZUNvbG9yID0gJyNlOTFlNjMnO1xuY29uc3QgZ3JheUNvbG9yID0gJyM5OTk5OTknO1xuXG5jb25zdCBwcmltYXJ5Qm94U2hhZG93ID0ge1xuICBib3hTaGFkb3c6IGAwIDEycHggMjBweCAtMTBweCAke2hleFRvUkdCQWxwaGEoXG4gICAgcHJpbWFyeUNvbG9yLFxuICAgIDAuMjhcbiAgKX0sIDAgNHB4IDIwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xMiksIDAgN3B4IDhweCAtNXB4ICR7aGV4VG9SR0JBbHBoYShcbiAgICBwcmltYXJ5Q29sb3IsXG4gICAgMC4yXG4gICl9YCxcbn07XG5jb25zdCBpbmZvQm94U2hhZG93ID0ge1xuICBib3hTaGFkb3c6IGAwIDEycHggMjBweCAtMTBweCAke2hleFRvUkdCQWxwaGEoXG4gICAgaW5mb0NvbG9yLFxuICAgIDAuMjhcbiAgKX0sIDAgNHB4IDIwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xMiksIDAgN3B4IDhweCAtNXB4ICR7aGV4VG9SR0JBbHBoYShcbiAgICBpbmZvQ29sb3IsXG4gICAgMC4yXG4gICl9YCxcbn07XG5jb25zdCBzdWNjZXNzQm94U2hhZG93ID0ge1xuICBib3hTaGFkb3c6IGAwIDEycHggMjBweCAtMTBweCAke2hleFRvUkdCQWxwaGEoXG4gICAgc3VjY2Vzc0NvbG9yLFxuICAgIDAuMjhcbiAgKX0sIDAgNHB4IDIwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xMiksIDAgN3B4IDhweCAtNXB4ICR7aGV4VG9SR0JBbHBoYShcbiAgICBzdWNjZXNzQ29sb3IsXG4gICAgMC4yXG4gICl9YCxcbn07XG5jb25zdCB3YXJuaW5nQm94U2hhZG93ID0ge1xuICBib3hTaGFkb3c6IGAwIDEycHggMjBweCAtMTBweCAke2hleFRvUkdCQWxwaGEoXG4gICAgd2FybmluZ0NvbG9yLFxuICAgIDAuMjhcbiAgKX0sIDAgNHB4IDIwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xMiksIDAgN3B4IDhweCAtNXB4ICR7aGV4VG9SR0JBbHBoYShcbiAgICB3YXJuaW5nQ29sb3IsXG4gICAgMC4yXG4gICl9YCxcbn07XG5jb25zdCBkYW5nZXJCb3hTaGFkb3cgPSB7XG4gIGJveFNoYWRvdzogYDAgMTJweCAyMHB4IC0xMHB4ICR7aGV4VG9SR0JBbHBoYShcbiAgICBkYW5nZXJDb2xvcixcbiAgICAwLjI4XG4gICl9LCAwIDRweCAyMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDdweCA4cHggLTVweCAke2hleFRvUkdCQWxwaGEoXG4gICAgZGFuZ2VyQ29sb3IsXG4gICAgMC4yXG4gICl9YCxcbn07XG5jb25zdCByb3NlQm94U2hhZG93ID0ge1xuICBib3hTaGFkb3c6IGAwIDRweCAyMHB4IDBweCAke2hleFRvUkdCQWxwaGEoXG4gICAgJyMwMDAnLFxuICAgIDAuMTRcbiAgKX0sIDAgN3B4IDEwcHggLTVweCAke2hleFRvUkdCQWxwaGEocm9zZUNvbG9yLCAwLjQpfWAsXG59O1xuXG5jb25zdCB3YXJuaW5nQ2FyZEhlYWRlciA9IHtcbiAgY29sb3I6ICcjZmZmJyxcbiAgYmFja2dyb3VuZDogJ2xpbmVhci1ncmFkaWVudCg2MGRlZywgI2ZmYTcyNiwgI2ZiOGMwMCknLFxuICAuLi53YXJuaW5nQm94U2hhZG93LFxufTtcbmNvbnN0IHN1Y2Nlc3NDYXJkSGVhZGVyID0ge1xuICBjb2xvcjogJyNmZmYnLFxuICBiYWNrZ3JvdW5kOiAnbGluZWFyLWdyYWRpZW50KDYwZGVnLCAjNjZiYjZhLCAjNDNhMDQ3KScsXG4gIC4uLnN1Y2Nlc3NCb3hTaGFkb3csXG59O1xuY29uc3QgZGFuZ2VyQ2FyZEhlYWRlciA9IHtcbiAgY29sb3I6ICcjZmZmJyxcbiAgYmFja2dyb3VuZDogJ2xpbmVhci1ncmFkaWVudCg2MGRlZywgI2VmNTM1MCwgI2U1MzkzNSknLFxuICAuLi5kYW5nZXJCb3hTaGFkb3csXG59O1xuY29uc3QgaW5mb0NhcmRIZWFkZXIgPSB7XG4gIGNvbG9yOiAnI2ZmZicsXG4gIGJhY2tncm91bmQ6ICdsaW5lYXItZ3JhZGllbnQoNjBkZWcsICMyNmM2ZGEsICMwMGFjYzEpJyxcbiAgLi4uaW5mb0JveFNoYWRvdyxcbn07XG5jb25zdCBwcmltYXJ5Q2FyZEhlYWRlciA9IHtcbiAgY29sb3I6ICcjZmZmJyxcbiAgYmFja2dyb3VuZDogJ2xpbmVhci1ncmFkaWVudCg2MGRlZywgI2FiNDdiYywgIzhlMjRhYSknLFxuICAuLi5wcmltYXJ5Qm94U2hhZG93LFxufTtcbmNvbnN0IHJvc2VDYXJkSGVhZGVyID0ge1xuICBjb2xvcjogJyNmZmYnLFxuICBiYWNrZ3JvdW5kOiAnbGluZWFyLWdyYWRpZW50KDYwZGVnLCAjZWM0MDdhLCAjZDgxYjYwKScsXG4gIC4uLnJvc2VCb3hTaGFkb3csXG59O1xuY29uc3QgY2FyZEFjdGlvbnMgPSB7XG4gIG1hcmdpbjogJzAgMjBweCAxMHB4JyxcbiAgcGFkZGluZ1RvcDogJzEwcHgnLFxuICBib3JkZXJUb3A6ICcxcHggc29saWQgI2VlZWVlZScsXG4gIGhlaWdodDogJ2F1dG8nLFxuICAuLi5kZWZhdWx0Rm9udCxcbn07XG5cbmNvbnN0IGNhcmRIZWFkZXIgPSB7XG4gIG1hcmdpbjogJy0zMHB4IDE1cHggMCcsXG4gIGJvcmRlclJhZGl1czogJzNweCcsXG4gIHBhZGRpbmc6ICcxNXB4Jyxcbn07XG5cbmNvbnN0IGRlZmF1bHRCb3hTaGFkb3cgPSB7XG4gIGJvcmRlcjogJzAnLFxuICBib3JkZXJSYWRpdXM6ICczcHgnLFxuICBib3hTaGFkb3c6XG4gICAgJzAgMTBweCAyMHB4IC0xMnB4IHJnYmEoMCwgMCwgMCwgMC40MiksIDAgM3B4IDIwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xMiksIDAgOHB4IDEwcHggLTVweCByZ2JhKDAsIDAsIDAsIDAuMiknLFxuICBwYWRkaW5nOiAnMTBweCAwJyxcbiAgdHJhbnNpdGlvbjogJ2FsbCAxNTBtcyBlYXNlIDBzJyxcbn07XG5cbmNvbnN0IHRpdGxlID0ge1xuICBjb2xvcjogJyMzQzQ4NTgnLFxuICBtYXJnaW46ICcxLjc1cmVtIDAgMC44NzVyZW0nLFxuICB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnLFxuICBmb250V2VpZ2h0OiAnNzAwJyxcbiAgZm9udEZhbWlseTogYFwiUm9ib3RvIFNsYWJcIiwgXCJUaW1lcyBOZXcgUm9tYW5cIiwgc2VyaWZgLFxufTtcblxuY29uc3QgY2FyZFRpdGxlID0ge1xuICAuLi50aXRsZSxcbiAgbWFyZ2luVG9wOiAnLjYyNXJlbScsXG59O1xuXG5jb25zdCBjYXJkTGluayA9IHtcbiAgJyYgKyAkY2FyZExpbmsnOiB7XG4gICAgbWFyZ2luTGVmdDogJzEuMjVyZW0nLFxuICB9LFxufTtcblxuY29uc3QgY2FyZFN1YnRpdGxlID0ge1xuICBtYXJnaW5Cb3R0b206ICcwJyxcbiAgbWFyZ2luVG9wOiAnLS4zNzVyZW0nLFxufTtcblxuZXhwb3J0IHtcbiAgaGV4VG9SR0JBbHBoYSxcbiAgLy92YXJpYWJsZXNcbiAgZHJhd2VyV2lkdGgsXG4gIHRyYW5zaXRpb24sXG4gIGNvbnRhaW5lcixcbiAgY29udGFpbmVyRmx1aWQsXG4gIGJveFNoYWRvdyxcbiAgY2FyZCxcbiAgZGVmYXVsdEZvbnQsXG4gIHByaW1hcnlDb2xvcixcbiAgd2FybmluZ0NvbG9yLFxuICBkYW5nZXJDb2xvcixcbiAgc3VjY2Vzc0NvbG9yLFxuICBpbmZvQ29sb3IsXG4gIHJvc2VDb2xvcixcbiAgZ3JheUNvbG9yLFxuICBwcmltYXJ5Qm94U2hhZG93LFxuICBpbmZvQm94U2hhZG93LFxuICBzdWNjZXNzQm94U2hhZG93LFxuICB3YXJuaW5nQm94U2hhZG93LFxuICBkYW5nZXJCb3hTaGFkb3csXG4gIHJvc2VCb3hTaGFkb3csXG4gIHdhcm5pbmdDYXJkSGVhZGVyLFxuICBzdWNjZXNzQ2FyZEhlYWRlcixcbiAgZGFuZ2VyQ2FyZEhlYWRlcixcbiAgaW5mb0NhcmRIZWFkZXIsXG4gIHByaW1hcnlDYXJkSGVhZGVyLFxuICByb3NlQ2FyZEhlYWRlcixcbiAgY2FyZEFjdGlvbnMsXG4gIGNhcmRIZWFkZXIsXG4gIGRlZmF1bHRCb3hTaGFkb3csXG4gIHRpdGxlLFxuICBjYXJkVGl0bGUsXG4gIGNhcmRMaW5rLFxuICBjYXJkU3VidGl0bGUsXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==