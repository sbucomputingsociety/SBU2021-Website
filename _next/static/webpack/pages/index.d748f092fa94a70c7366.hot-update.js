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
      image = props.image,
      title = props.title,
      date = props.date,
      description = props.description,
      rest = Object(C_Users_Lawrence_sbcs_nextjs_node_modules_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(props, ["className", "image", "title", "date", "description"]);

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
AvatarCard.propTypes = {
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

/***/ }),

/***/ "./pages-sections/LandingPage-Sections/UpcomingEventsSection.js":
/*!**********************************************************************!*\
  !*** ./pages-sections/LandingPage-Sections/UpcomingEventsSection.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UpcomingEvents; });
/* harmony import */ var C_Users_Lawrence_sbcs_nextjs_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_icons_Group__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/Group */ "./node_modules/@material-ui/icons/Group.js");
/* harmony import */ var _material_ui_icons_Group__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Group__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_icons_Business__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/Business */ "./node_modules/@material-ui/icons/Business.js");
/* harmony import */ var _material_ui_icons_Business__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Business__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_icons_School__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/School */ "./node_modules/@material-ui/icons/School.js");
/* harmony import */ var _material_ui_icons_School__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_School__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_icons_Build__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/Build */ "./node_modules/@material-ui/icons/Build.js");
/* harmony import */ var _material_ui_icons_Build__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Build__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_icons_PeopleOutline__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/PeopleOutline */ "./node_modules/@material-ui/icons/PeopleOutline.js");
/* harmony import */ var _material_ui_icons_PeopleOutline__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_PeopleOutline__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_icons_ImportContacts__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/ImportContacts */ "./node_modules/@material-ui/icons/ImportContacts.js");
/* harmony import */ var _material_ui_icons_ImportContacts__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ImportContacts__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! components/Grid/GridContainer.js */ "./components/Grid/GridContainer.js");
/* harmony import */ var components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! components/Grid/GridItem.js */ "./components/Grid/GridItem.js");
/* harmony import */ var components_InfoArea_InfoArea_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! components/InfoArea/InfoArea.js */ "./components/InfoArea/InfoArea.js");
/* harmony import */ var styles_jss_nextjs_material_kit_pages_landingPageSections_productStyle_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! styles/jss/nextjs-material-kit/pages/landingPageSections/productStyle.js */ "./styles/jss/nextjs-material-kit/pages/landingPageSections/productStyle.js");
/* harmony import */ var _components_EventCard_EventCard__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../components/EventCard/EventCard */ "./components/EventCard/EventCard.js");



var _jsxFileName = "C:\\Users\\Lawrence\\sbcs-nextjs\\pages-sections\\LandingPage-Sections\\UpcomingEventsSection.js",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_Users_Lawrence_sbcs_nextjs_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

 // @material-ui/core components

 // @material-ui/icons






 // core components






var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(styles_jss_nextjs_material_kit_pages_landingPageSections_productStyle_js__WEBPACK_IMPORTED_MODULE_13__["default"]);
var events = [{
  title: 'Event 1',
  date: 'Mon, Jul 26, 2021 8:00AM EDT',
  description: 'Ease into the week with our wonderful event held by The Stony Brook Computing Society!'
}, {
  title: 'Event 2',
  date: 'Mon, Jul 26, 2021 8:00AM EDT',
  description: 'Ease into the week with our wonderful event held by The Stony Brook Computing Society!'
}, {
  title: 'Event 2',
  date: 'Mon, Jul 26, 2021 8:00AM EDT',
  description: 'Ease into the week with our wonderful event held by The Stony Brook Computing Society!'
}, {
  title: 'Event 3',
  date: 'Mon, Jul 26, 2021 8:00AM EDT',
  description: 'Ease into the week with our wonderful event held by The Stony Brook Computing Society!'
}, {
  title: 'Event 4',
  date: 'Mon, Jul 26, 2021 8:00AM EDT',
  description: 'Ease into the week with our wonderful event held by The Stony Brook Computing Society!'
}];
function UpcomingEvents() {
  _s();

  var _this = this;

  var classes = useStyles();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
    className: classes.section,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_10__["default"], {
      justify: "center",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_11__["default"], {
        xs: 12,
        sm: 12,
        md: 8,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h2", {
          className: classes.title,
          children: "Upcoming Events"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_10__["default"], {
        children: events.map(function (event) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_11__["default"], {
            xs: 12,
            sm: 12,
            md: 4,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_EventCard_EventCard__WEBPACK_IMPORTED_MODULE_14__["default"], _objectSpread({}, event), void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 68,
              columnNumber: 15
            }, _this)
          }, event.title, false, {
            fileName: _jsxFileName,
            lineNumber: 67,
            columnNumber: 13
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 58,
    columnNumber: 5
  }, this);
}

_s(UpcomingEvents, "8g5FPXexvSEOsxdmU7HicukHGqY=", false, function () {
  return [useStyles];
});

_c = UpcomingEvents;

var _c;

$RefreshReg$(_c, "UpcomingEvents");

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

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return IndexPage; });
/* harmony import */ var C_Users_Lawrence_sbcs_nextjs_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_Lawrence_sbcs_nextjs_node_modules_next_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/extends */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var components_Header_Header_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/Header/Header.js */ "./components/Header/Header.js");
/* harmony import */ var components_Footer_Footer_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/Footer/Footer.js */ "./components/Footer/Footer.js");
/* harmony import */ var components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! components/Grid/GridContainer.js */ "./components/Grid/GridContainer.js");
/* harmony import */ var components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! components/Grid/GridItem.js */ "./components/Grid/GridItem.js");
/* harmony import */ var components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! components/CustomButtons/Button.js */ "./components/CustomButtons/Button.js");
/* harmony import */ var components_Header_HeaderLinks_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! components/Header/HeaderLinks.js */ "./components/Header/HeaderLinks.js");
/* harmony import */ var components_Parallax_Parallax_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! components/Parallax/Parallax.js */ "./components/Parallax/Parallax.js");
/* harmony import */ var styles_jss_nextjs_material_kit_pages_landingPage_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! styles/jss/nextjs-material-kit/pages/landingPage.js */ "./styles/jss/nextjs-material-kit/pages/landingPage.js");
/* harmony import */ var pages_sections_LandingPage_Sections_ProductSection_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! pages-sections/LandingPage-Sections/ProductSection.js */ "./pages-sections/LandingPage-Sections/ProductSection.js");
/* harmony import */ var pages_sections_LandingPage_Sections_TeamSection_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! pages-sections/LandingPage-Sections/TeamSection.js */ "./pages-sections/LandingPage-Sections/TeamSection.js");
/* harmony import */ var pages_sections_LandingPage_Sections_WorkSection_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! pages-sections/LandingPage-Sections/WorkSection.js */ "./pages-sections/LandingPage-Sections/WorkSection.js");
/* harmony import */ var _pages_sections_LandingPage_Sections_UpcomingEventsSection__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../pages-sections/LandingPage-Sections/UpcomingEventsSection */ "./pages-sections/LandingPage-Sections/UpcomingEventsSection.js");




var _jsxFileName = "C:\\Users\\Lawrence\\sbcs-nextjs\\pages\\index.js",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_Users_Lawrence_sbcs_nextjs_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

 // nodejs library that concatenates classes

 // @material-ui/core components

 // @material-ui/icons
// core components








 // Sections for this page





var dashboardRoutes = [];
var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["makeStyles"])(styles_jss_nextjs_material_kit_pages_landingPage_js__WEBPACK_IMPORTED_MODULE_13__["default"]);
function IndexPage(props) {
  _s();

  var classes = useStyles();

  var rest = Object(C_Users_Lawrence_sbcs_nextjs_node_modules_next_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, props);

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(components_Header_Header_js__WEBPACK_IMPORTED_MODULE_6__["default"], _objectSpread({
      color: "transparent",
      routes: dashboardRoutes,
      brand: "Stony Brook Computing Society",
      rightLinks: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(components_Header_HeaderLinks_js__WEBPACK_IMPORTED_MODULE_11__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 21
      }, this),
      fixed: true,
      changeColorOnScroll: {
        height: 400,
        color: 'white'
      }
    }, rest), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(components_Parallax_Parallax_js__WEBPACK_IMPORTED_MODULE_12__["default"], {
      filter: true,
      responsive: true,
      image: "/img/landing-bg.jpg",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        className: classes.container,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(components_Grid_GridContainer_js__WEBPACK_IMPORTED_MODULE_8__["default"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_9__["default"], {
            xs: 12,
            sm: 12,
            md: 6,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h1", {
              className: classes.title,
              children: "The Stony Brook Computing Society"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 51,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h4", {
              children: "The Stony Brook Computing Society is a student organization at Stony Brook University for all that are interested in programming, computers, and related technology. We hold a GBM every week and organize a variety of events focused on academics, professional development, and community building. Make sure to check the Events tab for any upcoming events!"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 54,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 62,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(components_CustomButtons_Button_js__WEBPACK_IMPORTED_MODULE_10__["default"], {
              color: "danger",
              size: "lg",
              href: "https://www.youtube.com/watch?v=dQw4w9WgXcQ&ref=creativetim",
              target: "_blank",
              rel: "noopener noreferrer",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("i", {
                className: "fas fa-play"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 70,
                columnNumber: 17
              }, this), "Watch video"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 63,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 50,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(components_Grid_GridItem_js__WEBPACK_IMPORTED_MODULE_9__["default"], {
            xs: 12,
            sm: 12,
            md: 6,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("img", {
              src: "/img/bytes-logo.png"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 75,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 74,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(classes.main, classes.mainRaised),
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        className: classes.container,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_pages_sections_LandingPage_Sections_UpcomingEventsSection__WEBPACK_IMPORTED_MODULE_17__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(components_Footer_Footer_js__WEBPACK_IMPORTED_MODULE_7__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 34,
    columnNumber: 5
  }, this);
}

_s(IndexPage, "8g5FPXexvSEOsxdmU7HicukHGqY=", false, function () {
  return [useStyles];
});

_c = IndexPage;

var _c;

$RefreshReg$(_c, "IndexPage");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9FdmVudENhcmQvRXZlbnRDYXJkLmpzIiwid2VicGFjazovL19OX0UvLi9wYWdlcy1zZWN0aW9ucy9MYW5kaW5nUGFnZS1TZWN0aW9ucy9VcGNvbWluZ0V2ZW50c1NlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJpbWFnZXNTdHlsZSIsIkV2ZW50Q2FyZCIsInByb3BzIiwiY2xhc3NlcyIsImNsYXNzTmFtZSIsImltYWdlIiwidGl0bGUiLCJkYXRlIiwiZGVzY3JpcHRpb24iLCJyZXN0IiwiaW1hZ2VDbGFzc2VzIiwiY2xhc3NOYW1lcyIsImltZ1JhaXNlZCIsImltZ1JvdW5kZWRDaXJjbGUiLCJpbWdGbHVpZCIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJmbGV4RGlyZWN0aW9uIiwiYmFja2dyb3VuZENvbG9yIiwicGFkZGluZyIsIm1heFdpZHRoIiwiZm9udFdlaWdodCIsIkF2YXRhckNhcmQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJwbGFpbiIsImJvb2wiLCJjYXJvdXNlbCIsImNoaWxkcmVuIiwibm9kZSIsInN0eWxlcyIsImV2ZW50cyIsIlVwY29taW5nRXZlbnRzIiwic2VjdGlvbiIsIm1hcCIsImV2ZW50IiwiZGFzaGJvYXJkUm91dGVzIiwiSW5kZXhQYWdlIiwiaGVpZ2h0IiwiY29sb3IiLCJjb250YWluZXIiLCJtYWluIiwibWFpblJhaXNlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBQ0E7O0NBRUE7O0NBRUE7O0NBRUE7QUFFQTs7QUFDQTtBQUNBO0FBRUEsSUFBTUEsU0FBUyxHQUFHQywyRUFBVSxDQUFDQyxzRkFBRCxDQUE1QjtBQUVlLFNBQVNDLFNBQVQsQ0FBbUJDLEtBQW5CLEVBQTBC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QyxJQUZQO0FBR0Usa0JBQUksRUFBQyw2REFIUDtBQUlFLG9CQUFNLEVBQUMsUUFKVDtBQUtFLGlCQUFHLEVBQUMscUJBTE47QUFBQSxzQ0FPRTtBQUFHLHlCQUFTLEVBQUM7QUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFiRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREYsZUF5QkUscUVBQUMsbUVBQUQ7QUFBVSxjQUFFLEVBQUUsRUFBZDtBQUFrQixjQUFFLEVBQUUsRUFBdEI7QUFBMEIsY0FBRSxFQUFFLENBQTlCO0FBQUEsbUNBQ0U7QUFBSyxpQkFBRyxFQUFDO0FBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBekJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBYkYsZUE4Q0U7QUFBSyxlQUFTLEVBQUVLLGlEQUFVLENBQUNSLE9BQU8sQ0FBQ3dDLElBQVQsRUFBZXhDLE9BQU8sQ0FBQ3lDLFVBQXZCLENBQTFCO0FBQUEsNkJBQ0U7QUFBSyxpQkFBUyxFQUFFekMsT0FBTyxDQUFDdUMsU0FBeEI7QUFBQSwrQkFDRSxxRUFBQyxtR0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUE5Q0YsZUFtREUscUVBQUMsbUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQW5ERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQXVERDs7R0ExRHVCSCxTO1VBQ056QyxTOzs7S0FETXlDLFMiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZDc0OGYwOTJmYTk0YTcwYzczNjYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbi8vIG5vZGVqcyBsaWJyYXJ5IHRoYXQgY29uY2F0ZW5hdGVzIGNsYXNzZXNcclxuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XHJcbi8vIG5vZGVqcyBsaWJyYXJ5IHRvIHNldCBwcm9wZXJ0aWVzIGZvciBjb21wb25lbnRzXHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbi8vIEBtYXRlcmlhbC11aS9jb3JlIGNvbXBvbmVudHNcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbi8vIEBtYXRlcmlhbC11aS9pY29uc1xyXG5cclxuLy8gY29yZSBjb21wb25lbnRzXHJcbmltcG9ydCBpbWFnZXNTdHlsZSBmcm9tICdzdHlsZXMvanNzL25leHRqcy1tYXRlcmlhbC1raXQvaW1hZ2VzU3R5bGVzLmpzJztcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICdjb21wb25lbnRzL0N1c3RvbUJ1dHRvbnMvQnV0dG9uLmpzJztcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoaW1hZ2VzU3R5bGUpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRXZlbnRDYXJkKHByb3BzKSB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gIGNvbnN0IHsgY2xhc3NOYW1lLCBpbWFnZSwgdGl0bGUsIGRhdGUsIGRlc2NyaXB0aW9uLCAuLi5yZXN0IH0gPSBwcm9wcztcclxuICBjb25zdCBpbWFnZUNsYXNzZXMgPSBjbGFzc05hbWVzKFxyXG4gICAgY2xhc3Nlcy5pbWdSYWlzZWQsXHJcbiAgICBjbGFzc2VzLmltZ1JvdW5kZWRDaXJjbGUsXHJcbiAgICBjbGFzc2VzLmltZ0ZsdWlkXHJcbiAgKTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdlxyXG4gICAgICB7Li4ucmVzdH1cclxuICAgICAgc3R5bGU9e3tcclxuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxyXG4gICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJyNmOWY5ZjknLFxyXG4gICAgICAgIHBhZGRpbmc6IDE1LFxyXG4gICAgICB9fVxyXG4gICAgPlxyXG4gICAgICA8ZGl2IHN0eWxlPXt7IG1heFdpZHRoOiAnMjAwcHgnIH19PlxyXG4gICAgICAgIDxpbWcgc3JjPXtpbWFnZX0gY2xhc3NOYW1lPXtpbWFnZUNsYXNzZXN9IC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8aDUgc3R5bGU9e3sgZm9udFdlaWdodDogJ2JvbGQnIH19Pnt0aXRsZX08L2g1PlxyXG4gICAgICA8ZGl2PntkZXNjcmlwdGlvbn08L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbkF2YXRhckNhcmQucHJvcFR5cGVzID0ge1xyXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICBwbGFpbjogUHJvcFR5cGVzLmJvb2wsXHJcbiAgY2Fyb3VzZWw6IFByb3BUeXBlcy5ib29sLFxyXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcclxufTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuLy8gQG1hdGVyaWFsLXVpL2NvcmUgY29tcG9uZW50c1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuXHJcbi8vIEBtYXRlcmlhbC11aS9pY29uc1xyXG5pbXBvcnQgR3JvdXBJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9Hcm91cCc7XHJcbmltcG9ydCBCdXNpbmVzc0ljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0J1c2luZXNzJztcclxuaW1wb3J0IFNjaG9vbEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1NjaG9vbCc7XHJcbmltcG9ydCBCdWlsZEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0J1aWxkJztcclxuaW1wb3J0IFBlb3BsZU91dGxpbmVJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9QZW9wbGVPdXRsaW5lJztcclxuaW1wb3J0IEltcG9ydENvbnRhY3RzSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvSW1wb3J0Q29udGFjdHMnO1xyXG4vLyBjb3JlIGNvbXBvbmVudHNcclxuaW1wb3J0IEdyaWRDb250YWluZXIgZnJvbSAnY29tcG9uZW50cy9HcmlkL0dyaWRDb250YWluZXIuanMnO1xyXG5pbXBvcnQgR3JpZEl0ZW0gZnJvbSAnY29tcG9uZW50cy9HcmlkL0dyaWRJdGVtLmpzJztcclxuaW1wb3J0IEluZm9BcmVhIGZyb20gJ2NvbXBvbmVudHMvSW5mb0FyZWEvSW5mb0FyZWEuanMnO1xyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tICdzdHlsZXMvanNzL25leHRqcy1tYXRlcmlhbC1raXQvcGFnZXMvbGFuZGluZ1BhZ2VTZWN0aW9ucy9wcm9kdWN0U3R5bGUuanMnO1xyXG5pbXBvcnQgRXZlbnRDYXJkIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvRXZlbnRDYXJkL0V2ZW50Q2FyZCc7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHN0eWxlcyk7XHJcblxyXG5jb25zdCBldmVudHMgPSBbXHJcbiAge1xyXG4gICAgdGl0bGU6ICdFdmVudCAxJyxcclxuICAgIGRhdGU6ICdNb24sIEp1bCAyNiwgMjAyMSA4OjAwQU0gRURUJyxcclxuICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICAnRWFzZSBpbnRvIHRoZSB3ZWVrIHdpdGggb3VyIHdvbmRlcmZ1bCBldmVudCBoZWxkIGJ5IFRoZSBTdG9ueSBCcm9vayBDb21wdXRpbmcgU29jaWV0eSEnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6ICdFdmVudCAyJyxcclxuICAgIGRhdGU6ICdNb24sIEp1bCAyNiwgMjAyMSA4OjAwQU0gRURUJyxcclxuICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICAnRWFzZSBpbnRvIHRoZSB3ZWVrIHdpdGggb3VyIHdvbmRlcmZ1bCBldmVudCBoZWxkIGJ5IFRoZSBTdG9ueSBCcm9vayBDb21wdXRpbmcgU29jaWV0eSEnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6ICdFdmVudCAyJyxcclxuICAgIGRhdGU6ICdNb24sIEp1bCAyNiwgMjAyMSA4OjAwQU0gRURUJyxcclxuICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICAnRWFzZSBpbnRvIHRoZSB3ZWVrIHdpdGggb3VyIHdvbmRlcmZ1bCBldmVudCBoZWxkIGJ5IFRoZSBTdG9ueSBCcm9vayBDb21wdXRpbmcgU29jaWV0eSEnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6ICdFdmVudCAzJyxcclxuICAgIGRhdGU6ICdNb24sIEp1bCAyNiwgMjAyMSA4OjAwQU0gRURUJyxcclxuICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICAnRWFzZSBpbnRvIHRoZSB3ZWVrIHdpdGggb3VyIHdvbmRlcmZ1bCBldmVudCBoZWxkIGJ5IFRoZSBTdG9ueSBCcm9vayBDb21wdXRpbmcgU29jaWV0eSEnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6ICdFdmVudCA0JyxcclxuICAgIGRhdGU6ICdNb24sIEp1bCAyNiwgMjAyMSA4OjAwQU0gRURUJyxcclxuICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICAnRWFzZSBpbnRvIHRoZSB3ZWVrIHdpdGggb3VyIHdvbmRlcmZ1bCBldmVudCBoZWxkIGJ5IFRoZSBTdG9ueSBCcm9vayBDb21wdXRpbmcgU29jaWV0eSEnLFxyXG4gIH0sXHJcbl07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBVcGNvbWluZ0V2ZW50cygpIHtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnNlY3Rpb259PlxyXG4gICAgICA8R3JpZENvbnRhaW5lciBqdXN0aWZ5PSdjZW50ZXInPlxyXG4gICAgICAgIDxHcmlkSXRlbSB4cz17MTJ9IHNtPXsxMn0gbWQ9ezh9PlxyXG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZX0+VXBjb21pbmcgRXZlbnRzPC9oMj5cclxuICAgICAgICA8L0dyaWRJdGVtPlxyXG4gICAgICA8L0dyaWRDb250YWluZXI+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPEdyaWRDb250YWluZXI+XHJcbiAgICAgICAgICB7ZXZlbnRzLm1hcCgoZXZlbnQpID0+IChcclxuICAgICAgICAgICAgPEdyaWRJdGVtIGtleT17ZXZlbnQudGl0bGV9IHhzPXsxMn0gc209ezEyfSBtZD17NH0+XHJcbiAgICAgICAgICAgICAgPEV2ZW50Q2FyZCB7Li4uZXZlbnR9IC8+XHJcbiAgICAgICAgICAgIDwvR3JpZEl0ZW0+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L0dyaWRDb250YWluZXI+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuLy8gbm9kZWpzIGxpYnJhcnkgdGhhdCBjb25jYXRlbmF0ZXMgY2xhc3Nlc1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG4vLyBAbWF0ZXJpYWwtdWkvY29yZSBjb21wb25lbnRzXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcblxuLy8gQG1hdGVyaWFsLXVpL2ljb25zXG5cbi8vIGNvcmUgY29tcG9uZW50c1xuaW1wb3J0IEhlYWRlciBmcm9tICdjb21wb25lbnRzL0hlYWRlci9IZWFkZXIuanMnO1xuaW1wb3J0IEZvb3RlciBmcm9tICdjb21wb25lbnRzL0Zvb3Rlci9Gb290ZXIuanMnO1xuaW1wb3J0IEdyaWRDb250YWluZXIgZnJvbSAnY29tcG9uZW50cy9HcmlkL0dyaWRDb250YWluZXIuanMnO1xuaW1wb3J0IEdyaWRJdGVtIGZyb20gJ2NvbXBvbmVudHMvR3JpZC9HcmlkSXRlbS5qcyc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJ2NvbXBvbmVudHMvQ3VzdG9tQnV0dG9ucy9CdXR0b24uanMnO1xuaW1wb3J0IEhlYWRlckxpbmtzIGZyb20gJ2NvbXBvbmVudHMvSGVhZGVyL0hlYWRlckxpbmtzLmpzJztcbmltcG9ydCBQYXJhbGxheCBmcm9tICdjb21wb25lbnRzL1BhcmFsbGF4L1BhcmFsbGF4LmpzJztcblxuaW1wb3J0IHN0eWxlcyBmcm9tICdzdHlsZXMvanNzL25leHRqcy1tYXRlcmlhbC1raXQvcGFnZXMvbGFuZGluZ1BhZ2UuanMnO1xuXG4vLyBTZWN0aW9ucyBmb3IgdGhpcyBwYWdlXG5pbXBvcnQgUHJvZHVjdFNlY3Rpb24gZnJvbSAncGFnZXMtc2VjdGlvbnMvTGFuZGluZ1BhZ2UtU2VjdGlvbnMvUHJvZHVjdFNlY3Rpb24uanMnO1xuaW1wb3J0IFRlYW1TZWN0aW9uIGZyb20gJ3BhZ2VzLXNlY3Rpb25zL0xhbmRpbmdQYWdlLVNlY3Rpb25zL1RlYW1TZWN0aW9uLmpzJztcbmltcG9ydCBXb3JrU2VjdGlvbiBmcm9tICdwYWdlcy1zZWN0aW9ucy9MYW5kaW5nUGFnZS1TZWN0aW9ucy9Xb3JrU2VjdGlvbi5qcyc7XG5pbXBvcnQgVXBjb21pbmdFdmVudHMgZnJvbSAnLi4vcGFnZXMtc2VjdGlvbnMvTGFuZGluZ1BhZ2UtU2VjdGlvbnMvVXBjb21pbmdFdmVudHNTZWN0aW9uJztcblxuY29uc3QgZGFzaGJvYXJkUm91dGVzID0gW107XG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoc3R5bGVzKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXhQYWdlKHByb3BzKSB7XG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcbiAgY29uc3QgeyAuLi5yZXN0IH0gPSBwcm9wcztcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPEhlYWRlclxuICAgICAgICBjb2xvcj0ndHJhbnNwYXJlbnQnXG4gICAgICAgIHJvdXRlcz17ZGFzaGJvYXJkUm91dGVzfVxuICAgICAgICBicmFuZD0nU3RvbnkgQnJvb2sgQ29tcHV0aW5nIFNvY2lldHknXG4gICAgICAgIHJpZ2h0TGlua3M9ezxIZWFkZXJMaW5rcyAvPn1cbiAgICAgICAgZml4ZWRcbiAgICAgICAgY2hhbmdlQ29sb3JPblNjcm9sbD17e1xuICAgICAgICAgIGhlaWdodDogNDAwLFxuICAgICAgICAgIGNvbG9yOiAnd2hpdGUnLFxuICAgICAgICB9fVxuICAgICAgICB7Li4ucmVzdH1cbiAgICAgIC8+XG4gICAgICA8UGFyYWxsYXggZmlsdGVyIHJlc3BvbnNpdmUgaW1hZ2U9Jy9pbWcvbGFuZGluZy1iZy5qcGcnPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250YWluZXJ9PlxuICAgICAgICAgIDxHcmlkQ29udGFpbmVyPlxuICAgICAgICAgICAgPEdyaWRJdGVtIHhzPXsxMn0gc209ezEyfSBtZD17Nn0+XG4gICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9PlxuICAgICAgICAgICAgICAgIFRoZSBTdG9ueSBCcm9vayBDb21wdXRpbmcgU29jaWV0eVxuICAgICAgICAgICAgICA8L2gxPlxuICAgICAgICAgICAgICA8aDQ+XG4gICAgICAgICAgICAgICAgVGhlIFN0b255IEJyb29rIENvbXB1dGluZyBTb2NpZXR5IGlzIGEgc3R1ZGVudCBvcmdhbml6YXRpb24gYXRcbiAgICAgICAgICAgICAgICBTdG9ueSBCcm9vayBVbml2ZXJzaXR5IGZvciBhbGwgdGhhdCBhcmUgaW50ZXJlc3RlZCBpblxuICAgICAgICAgICAgICAgIHByb2dyYW1taW5nLCBjb21wdXRlcnMsIGFuZCByZWxhdGVkIHRlY2hub2xvZ3kuIFdlIGhvbGQgYSBHQk1cbiAgICAgICAgICAgICAgICBldmVyeSB3ZWVrIGFuZCBvcmdhbml6ZSBhIHZhcmlldHkgb2YgZXZlbnRzIGZvY3VzZWQgb25cbiAgICAgICAgICAgICAgICBhY2FkZW1pY3MsIHByb2Zlc3Npb25hbCBkZXZlbG9wbWVudCwgYW5kIGNvbW11bml0eSBidWlsZGluZy5cbiAgICAgICAgICAgICAgICBNYWtlIHN1cmUgdG8gY2hlY2sgdGhlIEV2ZW50cyB0YWIgZm9yIGFueSB1cGNvbWluZyBldmVudHMhXG4gICAgICAgICAgICAgIDwvaDQ+XG4gICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgY29sb3I9J2RhbmdlcidcbiAgICAgICAgICAgICAgICBzaXplPSdsZydcbiAgICAgICAgICAgICAgICBocmVmPSdodHRwczovL3d3dy55b3V0dWJlLmNvbS93YXRjaD92PWRRdzR3OVdnWGNRJnJlZj1jcmVhdGl2ZXRpbSdcbiAgICAgICAgICAgICAgICB0YXJnZXQ9J19ibGFuaydcbiAgICAgICAgICAgICAgICByZWw9J25vb3BlbmVyIG5vcmVmZXJyZXInXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9J2ZhcyBmYS1wbGF5JyAvPlxuICAgICAgICAgICAgICAgIFdhdGNoIHZpZGVvXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPC9HcmlkSXRlbT5cbiAgICAgICAgICAgIDxHcmlkSXRlbSB4cz17MTJ9IHNtPXsxMn0gbWQ9ezZ9PlxuICAgICAgICAgICAgICA8aW1nIHNyYz0nL2ltZy9ieXRlcy1sb2dvLnBuZycgLz5cbiAgICAgICAgICAgIDwvR3JpZEl0ZW0+XG4gICAgICAgICAgPC9HcmlkQ29udGFpbmVyPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvUGFyYWxsYXg+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhjbGFzc2VzLm1haW4sIGNsYXNzZXMubWFpblJhaXNlZCl9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250YWluZXJ9PlxuICAgICAgICAgIDxVcGNvbWluZ0V2ZW50cyAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPEZvb3RlciAvPlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==