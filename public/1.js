(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./resources/js/Components/CurrencyDisplayer/index.js":
/*!************************************************************!*\
  !*** ./resources/js/Components/CurrencyDisplayer/index.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _CurrencyTable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../CurrencyTable */ "./resources/js/Components/CurrencyTable/index.js");



var CurrencyDisplayer = function CurrencyDisplayer(props) {
  var currencyList = props.currencyList,
      currentRates = props.currentRates,
      onRemove = props.onRemove;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, currentRates.loading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "Loading current exchange rates..."), currentRates.data && !currentRates.error && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CurrencyTable__WEBPACK_IMPORTED_MODULE_1__["default"], {
    selectedList: currencyList,
    data: currentRates,
    onRemove: onRemove
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (CurrencyDisplayer);

/***/ }),

/***/ "./resources/js/Components/CurrencyLister/index.js":
/*!*********************************************************!*\
  !*** ./resources/js/Components/CurrencyLister/index.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material_Autocomplete__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material/Autocomplete */ "./node_modules/@mui/material/esm/Autocomplete/index.js");
/* harmony import */ var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/TextField */ "./node_modules/@mui/material/esm/TextField/index.js");
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/Button */ "./node_modules/@mui/material/esm/Button/index.js");
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






var CurrencyLister = function CurrencyLister(props) {
  var onAdd = props.onAdd;
  var currencyList = props.list;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
      _useState2 = _slicedToArray(_useState, 2),
      value = _useState2[0],
      setValue = _useState2[1];

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      textAlign: 'center',
      margin: "25px auto"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Autocomplete__WEBPACK_IMPORTED_MODULE_1__["default"], {
    disablePortal: true,
    clearOnEscape: true,
    id: "currency-search-box",
    options: Object.entries(currencyList).map(function (el) {
      return el[0].toUpperCase() + ' - ' + el[1];
    }),
    sx: {
      width: '85%',
      maxWidth: 450
    },
    renderInput: function renderInput(params) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({}, params, {
        label: "Currency"
      }));
    },
    style: {
      margin: 'auto'
    },
    onChange: function onChange(evt, val) {
      return setValue(val);
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    variant: "contained",
    size: "small",
    onClick: function onClick() {
      onAdd(value);
    }
  }, "Add Currency")));
};

/* harmony default export */ __webpack_exports__["default"] = (CurrencyLister);

/***/ }),

/***/ "./resources/js/Components/CurrencyTable/index.js":
/*!********************************************************!*\
  !*** ./resources/js/Components/CurrencyTable/index.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _TableItemRow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../TableItemRow */ "./resources/js/Components/TableItemRow/index.js");
/* harmony import */ var _mui_material_Grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/Grid */ "./node_modules/@mui/material/esm/Grid/index.js");




var CurrencyTable = function CurrencyTable(props) {
  var _data, _data$data;

  var selectedList = props.selectedList,
      onRemove = props.onRemove;
  var data = props.data;
  data = Object.entries((_data = data) === null || _data === void 0 ? void 0 : (_data$data = _data.data) === null || _data$data === void 0 ? void 0 : _data$data.zar).filter(function (el) {
    return selectedList.includes(el[0]);
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      width: '100%',
      paddingTop: 15,
      margin: 'auto'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    container: true,
    direction: "column",
    xs: 12
  }, data.map(function (el, i) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TableItemRow__WEBPACK_IMPORTED_MODULE_1__["default"], {
      key: "cur".concat(i),
      currencyItem: el,
      onRemove: onRemove
    });
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (CurrencyTable);

/***/ }),

/***/ "./resources/js/Components/Header/Index.js":
/*!*************************************************!*\
  !*** ./resources/js/Components/Header/Index.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material_AppBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material/AppBar */ "./node_modules/@mui/material/esm/AppBar/index.js");
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/Box */ "./node_modules/@mui/material/esm/Box/index.js");
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/Typography */ "./node_modules/@mui/material/esm/Typography/index.js");





var Header = function Header() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Box__WEBPACK_IMPORTED_MODULE_2__["default"], {
    sx: {
      flexGrow: 1
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_AppBar__WEBPACK_IMPORTED_MODULE_1__["default"], {
    position: "static"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_3__["default"], {
    variant: "h6",
    component: "div",
    sx: {
      flexGrow: 1
    },
    align: "center",
    style: {
      padding: 16
    }
  }, "ASG ASSESSMENT - CURRENCY MANAGER")));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./resources/js/Components/SearchBar/index.js":
/*!****************************************************!*\
  !*** ./resources/js/Components/SearchBar/index.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material_CircularProgress__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material/CircularProgress */ "./node_modules/@mui/material/esm/CircularProgress/index.js");
/* harmony import */ var _CurrencyLister__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../CurrencyLister */ "./resources/js/Components/CurrencyLister/index.js");




var SearchBar = function SearchBar(props) {
  var onAdd = props.onAddCurrency;
  var _props$currencyInfo = props.currencyInfo,
      loading = _props$currencyInfo.loading,
      data = _props$currencyInfo.data,
      error = _props$currencyInfo.error;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, loading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      textAlign: 'center',
      marginTop: 15
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_CircularProgress__WEBPACK_IMPORTED_MODULE_1__["default"], {
    size: 30
  })), data && !error && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CurrencyLister__WEBPACK_IMPORTED_MODULE_2__["default"], {
    list: data,
    onAdd: onAdd
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (SearchBar);

/***/ }),

/***/ "./resources/js/Components/TableItemRow/index.js":
/*!*******************************************************!*\
  !*** ./resources/js/Components/TableItemRow/index.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hooks_useFetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../hooks/useFetch */ "./resources/js/hooks/useFetch.js");
/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/IconButton */ "./node_modules/@mui/material/esm/IconButton/index.js");
/* harmony import */ var _mui_icons_material_Delete__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/icons-material/Delete */ "./node_modules/@mui/icons-material/Delete.js");
/* harmony import */ var _mui_icons_material_Delete__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Delete__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material_CircularProgress__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/CircularProgress */ "./node_modules/@mui/material/esm/CircularProgress/index.js");
/* harmony import */ var _mui_material_Grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/Grid */ "./node_modules/@mui/material/esm/Grid/index.js");
/* harmony import */ var _mui_material_Paper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/Paper */ "./node_modules/@mui/material/esm/Paper/index.js");
/* harmony import */ var _hooks_numberToCurrency__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../hooks/numberToCurrency */ "./resources/js/hooks/numberToCurrency.js");









var TableItemRow = function TableItemRow(props) {
  var currencyItem = props.currencyItem,
      onRemove = props.onRemove;
  console.log(currencyItem);

  var _useFetch = Object(_hooks_useFetch__WEBPACK_IMPORTED_MODULE_1__["default"])("https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/".concat(currencyItem[0], "/zar.json"), {
    Accept: 'application/json'
  }),
      data = _useFetch.data,
      error = _useFetch.error,
      loading = _useFetch.loading;

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, loading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_5__["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_CircularProgress__WEBPACK_IMPORTED_MODULE_4__["default"], null)), data && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Paper__WEBPACK_IMPORTED_MODULE_6__["default"], {
    elevation: 2,
    style: {
      margin: 5,
      padding: 8
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_5__["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_5__["default"], {
    container: true,
    alignItems: "center",
    justifyContent: "center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_5__["default"], {
    item: true,
    xs: 5
  }, currencyItem[0].toUpperCase()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_5__["default"], {
    item: true,
    xs: 5
  }, "\u21D2  ", "".concat(Object(_hooks_numberToCurrency__WEBPACK_IMPORTED_MODULE_7__["default"])(data === null || data === void 0 ? void 0 : data.zar, 'ZAR'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_5__["default"], {
    item: true,
    xs: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
    onClick: function onClick() {
      onRemove(currencyItem[0]);
    },
    color: 'secondary'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_icons_material_Delete__WEBPACK_IMPORTED_MODULE_3___default.a, null)))))), error && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    colSpan: 3
  }, "An error occured while loading")));
};

/* harmony default export */ __webpack_exports__["default"] = (TableItemRow);

/***/ }),

/***/ "./resources/js/Pages/Homepage/index.js":
/*!**********************************************!*\
  !*** ./resources/js/Pages/Homepage/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Components_CurrencyDisplayer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Components/CurrencyDisplayer */ "./resources/js/Components/CurrencyDisplayer/index.js");
/* harmony import */ var _Components_Header_Index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Components/Header/Index */ "./resources/js/Components/Header/Index.js");
/* harmony import */ var _Components_SearchBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Components/SearchBar */ "./resources/js/Components/SearchBar/index.js");
/* harmony import */ var _hooks_localStorage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../hooks/localStorage */ "./resources/js/hooks/localStorage.js");
/* harmony import */ var _hooks_useFetch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../hooks/useFetch */ "./resources/js/hooks/useFetch.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








var Homepage = function Homepage() {
  var currencyInfo = Object(_hooks_useFetch__WEBPACK_IMPORTED_MODULE_5__["default"])('https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies.min.json', {
    Accept: 'application/json'
  });
  var currentExchangeRates = Object(_hooks_useFetch__WEBPACK_IMPORTED_MODULE_5__["default"])('https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/zar.min.json', {
    Accept: 'application/json'
  });
  console.log(currentExchangeRates);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(Object(_hooks_localStorage__WEBPACK_IMPORTED_MODULE_4__["loadJSON"])('selectedCurrencies') ? Object(_hooks_localStorage__WEBPACK_IMPORTED_MODULE_4__["loadJSON"])('selectedCurrencies') : []),
      _useState2 = _slicedToArray(_useState, 2),
      selectedCurrencies = _useState2[0],
      setSelectedCurrencies = _useState2[1];

  var addExchange = function addExchange(val) {
    var code = val.match(/^([0-9A-Za-z]+)/);
    var newCurrencies = selectedCurrencies;
    newCurrencies.push(code[1].toLowerCase());
    newCurrencies = newCurrencies.filter(function (value, index, self) {
      return self.indexOf(value) === index;
    });
    Object(_hooks_localStorage__WEBPACK_IMPORTED_MODULE_4__["saveJSON"])('selectedCurrencies', newCurrencies);
    setSelectedCurrencies(newCurrencies);
  };

  var removeExchange = function removeExchange(code) {
    var newCurrencies = selectedCurrencies.filter(function (el) {
      return el != code;
    });
    Object(_hooks_localStorage__WEBPACK_IMPORTED_MODULE_4__["saveJSON"])('selectedCurrencies', newCurrencies);
    setSelectedCurrencies(newCurrencies);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_Header_Index__WEBPACK_IMPORTED_MODULE_2__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_SearchBar__WEBPACK_IMPORTED_MODULE_3__["default"], {
    currencyInfo: currencyInfo,
    onAddCurrency: addExchange
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_CurrencyDisplayer__WEBPACK_IMPORTED_MODULE_1__["default"], {
    currencyList: selectedCurrencies,
    currentRates: currentExchangeRates,
    onRemove: removeExchange
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Homepage);

/***/ }),

/***/ "./resources/js/hooks/localStorage.js":
/*!********************************************!*\
  !*** ./resources/js/hooks/localStorage.js ***!
  \********************************************/
/*! exports provided: loadJSON, saveJSON */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadJSON", function() { return loadJSON; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveJSON", function() { return saveJSON; });
var loadJSON = function loadJSON(key) {
  if (key) {
    var x;

    try {
      x = JSON.parse(localStorage.getItem(key));
    } catch (error) {
      return null;
    }

    return x;
  } else {
    return null;
  }
};
var saveJSON = function saveJSON(key, data) {
  return localStorage.setItem(key, JSON.stringify(data));
};

/***/ }),

/***/ "./resources/js/hooks/numberToCurrency.js":
/*!************************************************!*\
  !*** ./resources/js/hooks/numberToCurrency.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var numberToCurrency = function numberToCurrency(number) {
  var symbol = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "R";
  return "".concat(symbol, " ").concat(number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,'));
};

/* harmony default export */ __webpack_exports__["default"] = (numberToCurrency);

/***/ }),

/***/ "./resources/js/hooks/useFetch.js":
/*!****************************************!*\
  !*** ./resources/js/hooks/useFetch.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



function useFetch(uri) {
  var fetchOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json;charset=UTF-8"
    }
  };
  var useNow = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(),
      _useState2 = _slicedToArray(_useState, 2),
      data = _useState2[0],
      setData = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(),
      _useState4 = _slicedToArray(_useState3, 2),
      error = _useState4[0],
      setError = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true),
      _useState6 = _slicedToArray(_useState5, 2),
      loading = _useState6[0],
      setLoading = _useState6[1];

  var componentMounted = true;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (useNow) {
      setData(null);
      setError(null);
      setLoading(true);
      var controller = new AbortController();
      if (!uri) return;
      fetch(uri, _objectSpread(_objectSpread({}, fetchOptions), {}, {
        signal: controller.signal
      })).then( /*#__PURE__*/function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(response) {
          var isJson, errorMsg, _errorMsg;

          return _regeneratorRuntime().wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  isJson = response.headers.get("content-type").includes("application/json");

                  if (response.ok) {
                    _context.next = 4;
                    break;
                  }

                  errorMsg = {
                    status: response.status,
                    text: response.statusText
                  };
                  return _context.abrupt("return", Promise.reject(errorMsg));

                case 4:
                  if (isJson) {
                    _context.next = 7;
                    break;
                  }

                  _errorMsg = {
                    status: 200,
                    text: "Invalid data returned from server"
                  };
                  return _context.abrupt("return", Promise.reject(_errorMsg));

                case 7:
                  return _context.abrupt("return", response.json());

                case 8:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));

        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }()).then(function (dat) {
        if (dat.error) {
          //Check for error object from server
          return Promise.reject({
            status: 200,
            text: dat.message
          });
        } else {
          return dat;
        }
      }).then(function (data) {
        if (componentMounted) setLoading(false);
        return data;
      }).then(function (dat) {
        if (componentMounted) setData(dat);
      })["catch"](function (error) {
        error = error.status ? error : {
          status: 1,
          text: error.message
        };

        if (componentMounted) {
          setError(error);
          setLoading(false);
        }

        ;
      });
      return function () {
        controller.abort();
        componentMounted = false;
      };
    }
  }, [uri]);
  return {
    loading: loading,
    data: data,
    error: error
  };
}

/* harmony default export */ __webpack_exports__["default"] = (useFetch);

/***/ })

}]);