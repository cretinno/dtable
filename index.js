"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var TableData = [{
  name: 'Airi Satou',
  position: 'Accountant',
  office: 'Tokyo',
  age: '33',
  startDate: '2008/11/28',
  salary: '$162,700'
}, {
  name: 'Ashton Cox',
  position: 'Junior Technical Author',
  office: 'San Francisco',
  age: '66',
  startDate: '2009/01/12',
  salary: '$86,000'
}, {
  name: 'Bradley Greer',
  position: 'Software Engineer',
  office: 'London',
  age: '41',
  startDate: '2012/10/13',
  salary: '$132,000'
}, {
  name: 'Brielle Williamson',
  position: 'Integration Specialist',
  office: 'New York',
  age: '61',
  startDate: '2012/12/02',
  salary: '$372,000'
}, {
  name: 'Cedric Kelly',
  position: 'Senior Javascript Developer',
  office: 'Edinburgh',
  age: '22',
  startDate: '2012/03/29',
  salary: '$433,060'
}, {
  name: 'Charde Marshall',
  position: 'Regional Director',
  office: 'San Francisco',
  age: '36',
  startDate: '2008/10/16',
  salary: '$470,600'
}, {
  name: 'Colleen Hurst',
  position: 'Javascript Developer',
  office: 'San Francisco',
  age: '39',
  startDate: '2009/09/15',
  salary: '$205,500'
}, {
  name: 'Dai Rios',
  position: 'Personnel Lead',
  office: 'Edinburgh',
  age: '35',
  startDate: '2012/09/26',
  salary: '$217,500'
}, {
  name: 'Garrett Winters',
  position: 'Accountant',
  office: 'Tokyo',
  age: '63',
  startDate: '2011/07/25',
  salary: '$170,750'
}, {
  name: 'Gloria Little',
  position: 'Systems Administrator',
  office: 'New York',
  age: '59',
  startDate: '2009/04/10',
  salary: '$237,500'
}, {
  name: 'Jena Gaines',
  position: 'Office Manager',
  office: 'London',
  age: '30',
  startDate: '2008/12/19',
  salary: '$90,560'
}, {
  name: 'Quinn Flynn',
  position: 'Support Lead',
  office: 'Edinburgh',
  age: '22',
  startDate: '2013/03/03',
  salary: '$342,000'
}, {
  name: 'Charde Marshall',
  position: 'Regional Director',
  office: 'San Francisco',
  age: '36',
  startDate: '2008/10/16',
  salary: '$470,600'
}, {
  name: 'Haley Kennedy',
  position: 'Senior Marketing Designer',
  office: 'London',
  age: '43',
  startDate: '2012/12/18',
  salary: '$313,500'
}, {
  name: 'Tatyana Fitzpatrick',
  position: 'Regional Director',
  office: 'London',
  age: '19',
  startDate: '2010/03/17',
  salary: '$385,750'
}, {
  name: 'Michael Silva',
  position: 'Marketing Designer',
  office: 'London',
  age: '66',
  startDate: '2012/11/27',
  salary: '$198,500'
}, {
  name: 'Paul Byrd',
  position: 'Chief Financial Officer (CFO)',
  office: 'New York',
  age: '64',
  startDate: '2010/06/09',
  salary: '$725,000'
}, {
  name: 'Gloria Little',
  position: 'Systems Administrator',
  office: 'New York',
  age: '59',
  startDate: '2009/04/10',
  salary: '$237,500'
}, {
  name: 'Bradley Greer',
  position: 'Software Engineer',
  office: 'London',
  age: '41',
  startDate: '2012/10/13',
  salary: '$132,000'
}, {
  name: 'Dai Rios',
  position: 'Personnel Lead',
  office: 'Edinburgh',
  age: '35',
  startDate: '2012/09/26',
  salary: '$217,500'
}, {
  name: 'Jenette Caldwell',
  position: 'Development Lead',
  office: 'New York',
  age: '30',
  startDate: '2011/09/03',
  salary: '$345,000'
}, {
  name: 'Yuri Berry',
  position: 'Chief Marketing Officer (CMO)',
  office: 'New York',
  age: '40',
  startDate: '2009/06/25',
  salary: '$675,000'
}];
var TableColumn = [{
  target: 'id',
  type: 'selectRow'
}, {
  title: 'Name',
  target: 'name',
  type: 'default'
}, {
  title: 'Position',
  target: 'position',
  type: 'default'
}, {
  title: 'Office',
  target: 'office',
  type: 'default'
}, {
  title: 'Age',
  target: 'age',
  type: 'default'
}, {
  title: 'Start Date',
  target: 'startDate',
  type: 'default'
}, {
  title: 'Salary',
  target: 'salary',
  type: 'default'
}];
var data = {
  TableData: TableData,
  TableColumn: TableColumn
};
var _default = data;
exports["default"] = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var _func = _interopRequireDefault(require("./func"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function Footer(props) {
  var setParentState = props.setParentState,
      parentState = props.parentState,
      _props$pageSizeList = props.pageSizeList,
      pageSizeList = _props$pageSizeList === void 0 ? [10, 25, 50, 'All'] : _props$pageSizeList;
  var _parentState$paginati = parentState.pagination,
      currentPage = _parentState$paginati.currentPage,
      totalPage = _parentState$paginati.totalPage,
      pageSize = _parentState$paginati.pageSize,
      pagingList = _parentState$paginati.pagingList;

  var _handlePageSize = function _handlePageSize(_ref) {
    var value = _ref.target.value;
    setParentState(function (prevState) {
      var entries = !!value && !isNaN(value) ? parseInt(value, 10) : prevState.filteredList.length;
      return _objectSpread(_objectSpread({}, prevState), {}, {
        pagination: {
          currentPage: 1,
          totalPage: Math.ceil(prevState.filteredList.length / entries),
          pageSize: entries,
          pagingList: _func["default"]._generatePaginationList(1, Math.ceil(prevState.filteredList.length / entries))
        }
      });
    });
  };

  var _handlePageChange = function _handlePageChange(event, page) {
    event.preventDefault();
    setParentState(function (prevState) {
      var tempPaginate = _objectSpread({}, prevState.pagination);

      if (page === 'Previous') tempPaginate.currentPage = prevState.pagination.currentPage - 1;else if (page === 'Next') tempPaginate.currentPage = prevState.pagination.currentPage + 1;else tempPaginate.currentPage = page;
      tempPaginate.pagingList = _func["default"]._generatePaginationList(tempPaginate.currentPage, tempPaginate.totalPage);
      return _objectSpread(_objectSpread({}, prevState), {}, {
        pagination: tempPaginate
      });
    });
  };

  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "row"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "col-sm-12 col-md-5"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "dataTables_info"
  }, "Showing ", (currentPage - 1) * pageSize + 1, " to ", currentPage === totalPage ? parentState.filteredList.length : currentPage * pageSize, " of ", parentState.filteredList.length, " rows", /*#__PURE__*/_react["default"].createElement("label", {
    className: "ml-1"
  }, /*#__PURE__*/_react["default"].createElement("select", {
    className: "custom-select custom-select-sm form-control w-50",
    value: pageSize,
    onChange: _handlePageSize
  }, pageSizeList.map(function (title, index) {
    return /*#__PURE__*/_react["default"].createElement("option", {
      value: title.toString().toLowerCase(),
      key: index
    }, title);
  })), " rows/page"))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "col-sm-12 col-md-7"
  }, totalPage >= 2 && /*#__PURE__*/_react["default"].createElement("div", {
    className: "dataTables_paginate paging_simple_numbers"
  }, /*#__PURE__*/_react["default"].createElement("ul", {
    className: "pagination"
  }, pagingList.map(function (title, index) {
    var isDisabled = title === 'Previous' && currentPage === 1 || title === 'Next' && totalPage === currentPage || title === '...';
    return /*#__PURE__*/_react["default"].createElement("li", {
      key: index,
      className: "paginate_button page-item".concat(isDisabled ? ' disabled' : '').concat(currentPage === title ? ' active' : '')
    }, /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Link, {
      to: "#",
      onClick: function onClick(event) {
        return !isDisabled && currentPage !== title ? _handlePageChange(event, title) : false;
      },
      tabIndex: "0",
      className: "page-link"
    }, title));
  })))));
}

var _default = Footer;
exports["default"] = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var _debounce = function _debounce(func, delay) {
  var debounceTimer;
  return function () {
    var context = this;
    var args = arguments;
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(function () {
      return func.apply(context, args);
    }, delay);
  };
};

var _generatePaginationList = function _generatePaginationList(currentPage, totalPage) {
  var pagingList = [];
  if (totalPage <= 7) pagingList = _fillArray(totalPage);else {
    if (currentPage <= 3) pagingList = [].concat(_toConsumableArray(_fillArray(5)), ['...', totalPage]);else if (currentPage >= totalPage - 3) pagingList = [1, '...'].concat(_toConsumableArray(_fillArray(5, totalPage - 5)));else pagingList = [1, '...'].concat(_toConsumableArray(_fillArray(3, currentPage - 2)), ['...', totalPage]);
  }
  return ['Previous'].concat(_toConsumableArray(pagingList), ['Next']);
};

var _fillArray = function _fillArray(N) {
  var start = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  return Array.from({
    length: N
  }, function (_, index) {
    return index + 1 + start;
  });
};

var _sortCollection = function _sortCollection(dataList, columnName) {
  var sortType = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'asc';
  return dataList.sort(function (data1, data2) {
    var value1 = data1[columnName].toString().toLowerCase();
    var value2 = data2[columnName].toString().toLowerCase();

    if (value1 < value2) {
      return sortType === 'asc' ? -1 : 1;
    }

    if (value1 > value2) {
      return sortType === 'desc' ? -1 : 1;
    }

    return 0;
  });
};

var func = {
  _debounce: _debounce,
  _fillArray: _fillArray,
  _generatePaginationList: _generatePaginationList,
  _sortCollection: _sortCollection
};
var _default = func;
exports["default"] = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function Header(props) {
  var setParentState = props.setParentState,
      initialDataList = props.initialDataList,
      initPagination = props.initPagination,
      defaultPageSize = props.defaultPageSize,
      tableColumn = props.tableColumn,
      _props$handleAdd = props.handleAdd,
      handleAdd = _props$handleAdd === void 0 ? null : _props$handleAdd;

  var _handleSearch = function _handleSearch(_ref) {
    var value = _ref.target.value;
    setParentState(function (prevState) {
      var tempList = !!value ? initialDataList.filter(function (dt) {
        return !!tableColumn.find(function (cl) {
          return !!cl.title && dt[cl.target].indexOf(value) !== -1;
        });
      }) : initialDataList;

      var tempPaginate = _objectSpread({}, initPagination);

      tempPaginate.totalPage = Math.ceil(tempList.length / defaultPageSize);
      return _objectSpread(_objectSpread({}, prevState), {}, {
        searchText: value,
        filteredList: _toConsumableArray(tempList),
        pagination: tempPaginate,
        selectedRows: []
      });
    });
  };

  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "row top-header".concat(!!tableColumn && tableColumn.length !== 0 ? '' : ' mb-3')
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "col-md-3"
  }, !!initialDataList && initialDataList.length !== 0 && /*#__PURE__*/_react["default"].createElement("input", {
    type: "search",
    className: "form-control",
    placeholder: "Search",
    onChange: _handleSearch
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "col-md-9"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "btn-group"
  }, !!handleAdd && /*#__PURE__*/_react["default"].createElement("button", {
    onClick: handleAdd,
    className: "btn btn-outline-primary",
    type: "button",
    title: "Add New Record"
  }, /*#__PURE__*/_react["default"].createElement("i", {
    className: "fa fa-plus"
  }), "\xA0Add"))));
}

var _default = Header;
exports["default"] = _default;
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

require("./styles/dataTables.bootstrap4.css");

require("./styles/datatable.css");

require("./styles/bootstrap.css");

var _func = _interopRequireDefault(require("./func"));

var _header = _interopRequireDefault(require("./header"));

var _footer = _interopRequireDefault(require("./footer"));

var _thead = _interopRequireDefault(require("./thead"));

var _tbody = _interopRequireDefault(require("./tbody"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function DTable(props) {
  var _props$rowList = props.rowList,
      rowList = _props$rowList === void 0 ? [] : _props$rowList,
      _props$colList = props.colList,
      colList = _props$colList === void 0 ? [] : _props$colList;
  var initialDataList = rowList.map(function (dt, index) {
    return _objectSpread(_objectSpread({}, dt), {}, {
      _objectId: index + 1
    });
  });
  var defaultPageSize = 10;
  var initSort = ['name', 'asc'];
  var paginationTotalPage = Math.ceil(rowList.length / defaultPageSize);
  var initPagination = {
    currentPage: 1,
    totalPage: paginationTotalPage,
    pageSize: defaultPageSize,
    pagingList: _func["default"]._generatePaginationList(1, paginationTotalPage)
  };

  var _useState = (0, _react.useState)({
    sort: [].concat(initSort),
    searchText: '',
    filteredList: _toConsumableArray(_func["default"]._sortCollection(initialDataList, initSort[0])),
    pagination: _objectSpread({}, initPagination),
    selectedRows: []
  }),
      _useState2 = _slicedToArray(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1];

  var _state$pagination = state.pagination,
      currentPage = _state$pagination.currentPage,
      pageSize = _state$pagination.pageSize;
  var dataList = state.filteredList.slice(currentPage === 1 ? 0 : (currentPage - 1) * pageSize, currentPage * pageSize);

  var commonProps = _objectSpread(_objectSpread({}, props), {}, {
    tableColumn: colList,
    parentState: state,
    dataList: dataList,
    initialDataList: initialDataList,
    setParentState: setState
  });

  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "table-responsive"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "dataTables_wrapper dt-bootstrap4 no-footer"
  }, /*#__PURE__*/_react["default"].createElement(_header["default"], _extends({
    initPagination: initPagination,
    defaultPageSize: defaultPageSize
  }, commonProps)), /*#__PURE__*/_react["default"].createElement("div", {
    className: "row"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "col-sm-12"
  }, /*#__PURE__*/_react["default"].createElement("table", {
    className: "table dataTable no-footer table-hover"
  }, /*#__PURE__*/_react["default"].createElement(_thead["default"], commonProps), /*#__PURE__*/_react["default"].createElement(_tbody["default"], commonProps)))), dataList.length !== 0 && /*#__PURE__*/_react["default"].createElement(_footer["default"], commonProps)));
}

var _default = DTable;
exports["default"] = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function NoData(_ref) {
  var columnLength = _ref.columnLength;
  return /*#__PURE__*/_react["default"].createElement("tr", {
    className: "no-data"
  }, /*#__PURE__*/_react["default"].createElement("td", {
    colSpan: columnLength
  }, /*#__PURE__*/_react["default"].createElement("p", null, /*#__PURE__*/_react["default"].createElement("i", {
    className: "fa fa-exclamation-circle"
  }), /*#__PURE__*/_react["default"].createElement("span", {
    className: "ml-2"
  }, "No data found!"))));
}

function Cell(props) {
  var isSelected = props.isSelected,
      _props$col = props.col,
      target = _props$col.target,
      type = _props$col.type,
      row = props.row,
      colIndex = props.colIndex,
      rowIndex = props.rowIndex,
      setParentState = props.setParentState;
  var _objectId = row._objectId;

  var _handleSelectRow = function _handleSelectRow(_ref2, objectId) {
    var checked = _ref2.checked;
    return setParentState(function (prevState) {
      var tempList = _toConsumableArray(prevState.selectedRows);

      var findIndex = tempList.indexOf(objectId);

      if (!!checked) {
        if (findIndex === -1) tempList.push(objectId);
      } else {
        var _findIndex = tempList.indexOf(objectId);

        if (_findIndex !== -1) tempList.splice(_findIndex, 1);
      }

      return _objectSpread(_objectSpread({}, prevState), {}, {
        selectedRows: tempList
      });
    });
  };

  switch (type) {
    case 'selectRow':
      return /*#__PURE__*/_react["default"].createElement("td", {
        key: "".concat(rowIndex, ".").concat(colIndex),
        className: "dt-body-center"
      }, /*#__PURE__*/_react["default"].createElement("input", {
        type: "checkbox",
        checked: isSelected,
        onChange: function onChange(_ref3) {
          var target = _ref3.target;
          return _handleSelectRow(target, _objectId);
        }
      }));

    default:
      return /*#__PURE__*/_react["default"].createElement("td", {
        key: "".concat(rowIndex, ".").concat(colIndex)
      }, row[target]);
  }
}

function Tbody(props) {
  var selectedRows = props.parentState.selectedRows,
      dataList = props.dataList,
      tableColumn = props.tableColumn;
  return /*#__PURE__*/_react["default"].createElement("tbody", null, dataList.length !== 0 ? dataList.map(function (row, rowIndex) {
    var isSelected = selectedRows.indexOf(row._objectId) !== -1;
    return /*#__PURE__*/_react["default"].createElement("tr", {
      className: "".concat(rowIndex % 2 === 0 ? "even" : "odd").concat(isSelected ? ' selected' : ''),
      key: rowIndex
    }, tableColumn.map(function (col, colIndex) {
      return /*#__PURE__*/_react["default"].createElement(Cell, _objectSpread(_objectSpread({}, props), {}, {
        col: col,
        row: row,
        colIndex: colIndex,
        rowIndex: rowIndex,
        isSelected: isSelected
      }));
    }));
  }) : /*#__PURE__*/_react["default"].createElement(NoData, {
    columnLength: tableColumn.length
  }));
}

var _default = Tbody;
exports["default"] = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _index = _interopRequireDefault(require("./index"));

var _data = _interopRequireDefault(require("./data"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function TestTable() {
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "container"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "row"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "col-md-12 grid-margin stretch-card"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "card"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "card-body"
  }, /*#__PURE__*/_react["default"].createElement("h6", {
    className: "card-title"
  }, "Data Table"), /*#__PURE__*/_react["default"].createElement(_index["default"], {
    handleAdd: function handleAdd() {
      return console.log('add');
    },
    rowList: _data["default"].TableData,
    colList: _data["default"].TableColumn
  }))))));
}

var _default = TestTable;
exports["default"] = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _func = _interopRequireDefault(require("./func"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function Thead(props) {
  var setParentState = props.setParentState,
      _props$parentState = props.parentState,
      selectedRows = _props$parentState.selectedRows,
      sort = _props$parentState.sort,
      dataList = props.dataList,
      tableColumn = props.tableColumn,
      initialDataList = props.initialDataList;

  var _handleSort = function _handleSort(columnName) {
    if (!!dataList && dataList.length !== 0) setParentState(function (prevState) {
      var sortType = prevState.sort[0] === columnName ? prevState.sort[1] === 'desc' ? 'asc' : 'desc' : 'desc';

      var tempList = _func["default"]._sortCollection(prevState.filteredList, columnName, sortType);

      return _objectSpread(_objectSpread({}, prevState), {}, {
        sort: [columnName, sortType],
        filteredList: tempList
      });
    });else return null;
  };

  var _handleSelectRow = function _handleSelectRow(isChecked) {
    return setParentState(function (prevState) {
      return _objectSpread(_objectSpread({}, prevState), {}, {
        selectedRows: !!isChecked ? _toConsumableArray(initialDataList.map(function (dt) {
          return dt._objectId;
        })) : []
      });
    });
  };

  var _sort = _slicedToArray(sort, 2),
      sortCol = _sort[0],
      sortType = _sort[1];

  return /*#__PURE__*/_react["default"].createElement("thead", null, /*#__PURE__*/_react["default"].createElement("tr", null, tableColumn.map(function (_ref, index) {
    var title = _ref.title,
        target = _ref.target,
        type = _ref.type;
    var thClassName = sortCol === target && (sortType === 'asc' || sortType === 'desc') ? "sorting sorting_".concat(sortType) : 'sorting';

    switch (type) {
      case 'selectRow':
        return /*#__PURE__*/_react["default"].createElement("th", {
          key: index,
          className: "dt-body-center"
        }, /*#__PURE__*/_react["default"].createElement("input", {
          type: "checkbox",
          checked: selectedRows.length !== 0 && dataList.filter(function (dt) {
            return selectedRows.indexOf(dt._objectId) !== -1;
          }).length === dataList.length,
          onChange: function onChange(event) {
            return _handleSelectRow(event.target.checked);
          }
        }));

      default:
        return /*#__PURE__*/_react["default"].createElement("th", {
          className: !!dataList && dataList.length !== 0 ? thClassName : '',
          key: index,
          onClick: function onClick() {
            return _handleSort(target);
          }
        }, title);
    }
  })));
}

var _default = Thead;
exports["default"] = _default;
