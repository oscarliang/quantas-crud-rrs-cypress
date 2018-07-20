module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 19);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var env = exports.env = {
  host: "localhost",
  port: 3000,
  cookiePrefix: "quantas"
};

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("reactstrap");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.updateAllOfCars = updateAllOfCars;
exports.default = reducer;
var UPDATE_ALL_CARS = exports.UPDATE_ALL_CARS = "UPDATE_ALL_CARS";

// update all of the cars
function updateAllOfCars(normalizedCars) {
  return {
    type: UPDATE_ALL_CARS,
    payload: {
      state: _extends({}, normalizedCars.result, normalizedCars.entities)
    }
  };
}

// Reducer
var initialState = exports.initialState = {};
function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case UPDATE_ALL_CARS:
      var cars = action.payload.state.cars;

      return _extends({}, cars);
    default:
      return state;
  }
}

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateAllCarListStatus = updateAllCarListStatus;
exports.default = reducer;
var UPDATE_ALL_CAR_LIST_STATUS = exports.UPDATE_ALL_CAR_LIST_STATUS = "UPDATE_ALL_CAR_LIST_STATUS";

/**
 * 
 * @param {boolean} dirty - Check exsting car state is full car list or not
 */
function updateAllCarListStatus(dirty) {
  return {
    type: UPDATE_ALL_CAR_LIST_STATUS,
    payload: {
      state: {
        all_car_list_loaded: dirty
      }
    }
  };
}

// Reducer
var initialState = exports.initialState = {};
function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case UPDATE_ALL_CAR_LIST_STATUS:
      return action.payload.state.all_car_list_loaded;
    default:
      return state;
  }
}

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("normalizr");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("universal-cookie");

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.preload = undefined;

var _carApi = __webpack_require__(14);

var _universalCookie = __webpack_require__(9);

var _universalCookie2 = _interopRequireDefault(_universalCookie);

var _env = __webpack_require__(1);

var _cars = __webpack_require__(6);

var _fullOfCarList = __webpack_require__(7);

var _normalizr = __webpack_require__(8);

var _schema = __webpack_require__(15);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var preload = exports.preload = function preload() {
  return function (dispatch) {
    return getAllCars().then(function (obj) {
      var normalizedCars = obj.cars;
      dispatch((0, _cars.updateAllOfCars)(normalizedCars));
      dispatch((0, _fullOfCarList.updateAllCarListStatus)(true));
    });
  };
};

/**
 * get all the cars from the remote db
 */
/**
 * Service to init or load all the cars from remote db and update the state
 */

var getAllCars = function getAllCars() {
  var obj = {};
  var cookies = new _universalCookie2.default();
  var allCarsCookieKey = _env.env.cookiePrefix + ":all";
  var allCarsCookies = cookies.get(allCarsCookieKey);
  // if find the cookies, will not call remote api
  if (allCarsCookies) {
    return new Promise(function (resolve, reject) {
      resolve(allCarsCookies);
    });
  } else {
    return (0, _carApi.fetchAllCars)().then(function (resp) {
      var cars = resp.data;
      var normalizedCars = (0, _normalizr.normalize)(cars, _schema.carListSchema);
      obj['cars'] = normalizedCars;
      //set cookies
      cookies.set(allCarsCookieKey, JSON.stringify(obj), { path: '/' });
      return obj;
    });
  }
};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _containers = __webpack_require__(12);

var _containers2 = _interopRequireDefault(_containers);

var _Full = __webpack_require__(30);

var _Full2 = _interopRequireDefault(_Full);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var routes = [{
  path: "/",
  component: _Full2.default
}, {
  path: "/homepage",
  exact: true,
  component: _containers2.default.HomepageContainer
}, {
  path: "/search",
  exact: true,
  component: _containers2.default.SearchPageContainer
}];

exports.default = routes;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _homePageContainer = __webpack_require__(24);

var _homePageContainer2 = _interopRequireDefault(_homePageContainer);

var _searchPageContainer = __webpack_require__(29);

var _searchPageContainer2 = _interopRequireDefault(_searchPageContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var containers = {
    SearchPageContainer: _searchPageContainer2.default,
    HomepageContainer: _homePageContainer2.default
};

exports.default = containers;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.findCarService = exports.saveCarService = undefined;

var _carApi = __webpack_require__(14);

var _cars = __webpack_require__(6);

var _fullOfCarList = __webpack_require__(7);

var _normalizr = __webpack_require__(8);

var _schema = __webpack_require__(15);

var _universalCookie = __webpack_require__(9);

var _universalCookie2 = _interopRequireDefault(_universalCookie);

var _env = __webpack_require__(1);

var _utils = __webpack_require__(27);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * save the new car into the db
 * @param {object} car
 */
var saveCarService = exports.saveCarService = function saveCarService(car) {
  return function (dispatch) {
    return _saveCarService(car).then(function (obj) {
      var normalizedCars = obj.cars;
      dispatch((0, _cars.updateAllOfCars)(normalizedCars));
    });
  };
};

var _saveCarService = function _saveCarService(car) {
  var obj = {};
  return (0, _carApi.saveCar)(car).then(function (resp) {
    var cars = resp.data;
    var normalizedCars = (0, _normalizr.normalize)(cars, _schema.carListSchema);
    obj['cars'] = normalizedCars;
    // Due to the car has been added to db, we need to remove all existing cookies
    (0, _utils.removeAllCookies)();
    return obj;
  });
};

/**
 * Find car by passing filter object
 * @param {object} filter. e.g { "name" : "bmw s2" }
 */
var findCarService = exports.findCarService = function findCarService(filter) {
  return function (dispatch) {
    return _findCarService(filter).then(function (obj) {
      var normalizedCars = obj.cars;
      dispatch((0, _cars.updateAllOfCars)(normalizedCars));
      dispatch((0, _fullOfCarList.updateAllCarListStatus)(false));
    });
  };
};

var _findCarService = function _findCarService(filter) {
  var obj = {};
  var cookies = new _universalCookie2.default();
  var findCarCookieKey = _env.env.cookiePrefix + ":" + filter["key"] + ":" + filter["value"];
  var findCarCookies = cookies.get(findCarCookieKey);
  // if find the cookies, will not call remote api
  if (findCarCookies) {
    return new Promise(function (resolve, reject) {
      resolve(findCarCookies);
    });
  } else {
    return (0, _carApi.findCars)(filter).then(function (resp) {
      var cars = resp.data;
      var normalizedCars = (0, _normalizr.normalize)(cars, _schema.carListSchema);
      obj['cars'] = normalizedCars;
      //set cookies
      cookies.set(findCarCookieKey, JSON.stringify(obj), { path: '/' });
      return obj;
    });
  }
};

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.findCars = exports.saveCar = exports.fetchAllCars = undefined;

var _axios = __webpack_require__(26);

var _axios2 = _interopRequireDefault(_axios);

var _env = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 *  get all of the cars
 * */
var fetchAllCars = exports.fetchAllCars = function fetchAllCars() {
	return _axios2.default.get('http://' + _env.env.host + ':' + _env.env.port + '/api/cars/list');
};
/**
 * call save car remote api
 * @param {object} car 
 */
var saveCar = exports.saveCar = function saveCar(car) {
	return (0, _axios2.default)({
		method: 'post',
		url: 'http://' + _env.env.host + ':' + _env.env.port + '/api/cars',
		data: car
	});
};

/**
 * call find cars remote api
 * @param {object} filter 
 */
var findCars = exports.findCars = function findCars(filter) {
	return (0, _axios2.default)({
		method: 'get',
		url: 'http://' + _env.env.host + ':' + _env.env.port + '/api/cars',
		params: filter
	});
};

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.carListSchema = exports.carSchema = undefined;

var _normalizr = __webpack_require__(8);

var carSchema = exports.carSchema = new _normalizr.schema.Entity("cars");

var carListSchema = exports.carListSchema = [carSchema];

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactNumberFormat = __webpack_require__(28);

var _reactNumberFormat2 = _interopRequireDefault(_reactNumberFormat);

var _reactstrap = __webpack_require__(3);

var _lodash = __webpack_require__(4);

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CarsTable = function (_React$Component) {
  _inherits(CarsTable, _React$Component);

  function CarsTable() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, CarsTable);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = CarsTable.__proto__ || Object.getPrototypeOf(CarsTable)).call.apply(_ref, [this].concat(args))), _this), _this.renderTableBody = function () {
      return _lodash2.default.values(_this.props.cars).map(function (car, index) {
        return _react2.default.createElement(
          "tr",
          { key: index },
          _react2.default.createElement(
            "td",
            null,
            _react2.default.createElement("img", {
              src: car.imageUrl,
              className: "rounded car-img animated bounceIn",
              alt: car.name
            })
          ),
          _react2.default.createElement(
            "td",
            null,
            car.name
          ),
          _react2.default.createElement(
            "td",
            null,
            car.brand.toUpperCase()
          ),
          _react2.default.createElement(
            "td",
            null,
            _lodash2.default.replace(car.drive, /\|/g, ' ').toUpperCase()
          ),
          _react2.default.createElement(
            "td",
            null,
            _react2.default.createElement(_reactNumberFormat2.default, {
              value: car.price,
              displayType: "text",
              thousandSeparator: true,
              prefix: "$"
            })
          )
        );
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(CarsTable, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        _reactstrap.Col,
        null,
        _react2.default.createElement(
          _reactstrap.Card,
          null,
          _react2.default.createElement(
            _reactstrap.CardHeader,
            null,
            _react2.default.createElement("i", { className: "fa fa-align-justify" }),
            " All Cars"
          ),
          _react2.default.createElement(
            _reactstrap.CardBody,
            null,
            _react2.default.createElement(
              _reactstrap.Table,
              { hover: true, bordered: true, striped: true, responsive: true, size: "sm" },
              _react2.default.createElement(
                "thead",
                null,
                _react2.default.createElement(
                  "tr",
                  null,
                  _react2.default.createElement(
                    "th",
                    null,
                    "Image"
                  ),
                  _react2.default.createElement(
                    "th",
                    null,
                    "Name"
                  ),
                  _react2.default.createElement(
                    "th",
                    null,
                    "Brand"
                  ),
                  _react2.default.createElement(
                    "th",
                    null,
                    "Model"
                  ),
                  _react2.default.createElement(
                    "th",
                    null,
                    "Price"
                  )
                )
              ),
              _react2.default.createElement(
                "tbody",
                null,
                this.renderTableBody()
              )
            )
          )
        )
      );
    }
  }]);

  return CarsTable;
}(_react2.default.Component);

exports.default = CarsTable;

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("react-redux-loading-bar");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _express = __webpack_require__(20);

var _express2 = _interopRequireDefault(_express);

var _cors = __webpack_require__(21);

var _cors2 = _interopRequireDefault(_cors);

var _serializeJavascript = __webpack_require__(22);

var _serializeJavascript2 = _interopRequireDefault(_serializeJavascript);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(23);

var _reactRedux = __webpack_require__(5);

var _reactRouterDom = __webpack_require__(2);

var _routes = __webpack_require__(11);

var _routes2 = _interopRequireDefault(_routes);

var _colors = __webpack_require__(35);

var _colors2 = _interopRequireDefault(_colors);

var _lodash = __webpack_require__(4);

var _lodash2 = _interopRequireDefault(_lodash);

var _store = __webpack_require__(36);

var _store2 = _interopRequireDefault(_store);

var _app = __webpack_require__(40);

var _app2 = _interopRequireDefault(_app);

var _bodyParser = __webpack_require__(42);

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _db = __webpack_require__(43);

var db = _interopRequireWildcard(_db);

var _env = __webpack_require__(1);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
var host = process.env.HOST || _env.env.host;
var port = process.env.PORT || _env.env.port;

app.use((0, _cors2.default)());
app.use(_express2.default.static("build"));
app.use(_bodyParser2.default.urlencoded({
  extended: true
}));
app.use(_bodyParser2.default.json());
app.use(_express2.default.json()); //support JSON-encoded bodies
app.use(_express2.default.urlencoded()); //support URL-encoded bodies

app.get("/api/cars/list", function (req, res) {
  res.json(db.getAllCars());
});

app.get("/api/cars", function (req, res) {
  var key = req.query["key"];
  var value = req.query["value"];
  res.json(db.findAllCars(key, value));
});

app.post("/api/cars", function (req, res) {
  //print the results to `stdout`
  var host = req.get('host');
  if (host.indexOf("test.com")) {
    console.log("save to db and print");
  } else {
    console.log("save to db only");
  }

  var car = {
    "brand": req.body.brand,
    "name": req.body.name,
    "price": req.body.price,
    "drive": req.body.drive,
    "imageUrl": req.body.image
  };
  res.json(db.save(car));
});

app.get("*", function (req, res, next) {
  var store = (0, _store2.default)();
  var promises = _routes2.default.reduce(function (acc, route) {
    if ((0, _reactRouterDom.matchPath)(req.url, route) && route.component && route.component.initialAction) {
      acc.push(Promise.resolve(store.dispatch(route.component.initialAction())));
    }
    return acc;
  }, []);

  Promise.all(promises).then(function () {
    var context = {};
    var markup = (0, _server.renderToString)(_react2.default.createElement(
      _reactRedux.Provider,
      { store: store },
      _react2.default.createElement(
        _reactRouterDom.StaticRouter,
        { location: req.url, context: context },
        _react2.default.createElement(_app2.default, null)
      )
    ));
    var initialData = store.getState();
    res.send("\n        <!DOCTYPE html>\n        <html>\n          <head>\n            <meta charset=\"utf-8\">\n            <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n            <meta name=\"viewport\" content=\"width=device-width, initial-scale=1, shrink-to-fit=no\">\n            <meta name=\"description\" content=\"Qantas - Test\">\n            <meta name=\"author\" content=\"Oscar Liang\">\n            <meta name=\"keyword\" content=\"Bootstrap,Admin,Template,Open,Source,React,jQuery,CSS,HTML,Dashboard\">\n            <title>Qantas - Test</title>\n            <link rel=\"stylesheet\" href=\"/index.styles.css\">\n            <link rel=\"stylesheet\" href=\"/index.vendor.css\">\n            <script src=\"/index.bundle.js\" defer></script>\n            <script>window.__initialData__ = " + (0, _serializeJavascript2.default)(initialData) + "</script>\n          </head>\n\n          <body class=\"app header-fixed sidebar-fixed aside-menu-fixed aside-menu-hidden\">\n            <div id=\"root\">" + markup + "</div>\n          </body>\n        </html>\n      ");
  }).catch(next);
});

app.listen(process.env.PORT || 3000, function () {
  console.log("\uD83E\uDD37\u200D\u2642\uFE0F  Server listening on " + ("http://" + host + ":" + port).blue);
});

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("cors");

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("serialize-javascript");

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(5);

var _validator = __webpack_require__(25);

var _validator2 = _interopRequireDefault(_validator);

var _carService = __webpack_require__(13);

var _preload = __webpack_require__(10);

var _CarsTable = __webpack_require__(16);

var _CarsTable2 = _interopRequireDefault(_CarsTable);

var _reactstrap = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var mapState = function mapState(state, ownProps) {
  return {
    allOfcars: state.cars,
    allCarListTag: state.fullOfCarList
  };
};

var mapDispatch = function mapDispatch(dispatch, ownProps) {
  return {
    saveCarService: function saveCarService(car) {
      dispatch((0, _carService.saveCarService)(car));
    },
    getAllCars: function getAllCars() {
      dispatch((0, _preload.preload)());
    }
  };
};

var HomepageContainer = function (_React$Component) {
  _inherits(HomepageContainer, _React$Component);

  function HomepageContainer(props) {
    _classCallCheck(this, HomepageContainer);

    var _this = _possibleConstructorReturn(this, (HomepageContainer.__proto__ || Object.getPrototypeOf(HomepageContainer)).call(this, props));

    _this.handleSubmit = function () {
      var drive = "";
      drive += _this.state.drive2wd ? "2wd|" : "";
      drive += _this.state.drive4wd ? "4wd|" : "";
      drive += _this.state.driveawd ? "awd|" : "";
      var car = {
        "brand": _this.state.brand,
        "name": _this.state.name,
        "price": _this.state.price,
        "drive": drive,
        "imageUrl": _this.state.image
      };
      _this.props.saveCarService(car);
    };

    _this.handleChange = function (e) {
      var change = {};
      change[e.target.name] = e.target.value;
      _this.setState(change);
    };

    _this.handleCheckebox = function (e) {
      var change = {};
      change[e.target.name] = e.target.checked;
      _this.setState(change);
    };

    _this.handlePriceChange = function (e) {
      var change = {};
      var price = e.target.value;
      if (!_validator2.default.isNumeric(price)) {
        price = "";
      }
      change[e.target.name] = price;
      _this.setState(change);
    };

    _this.renderAddCar = function () {
      return _react2.default.createElement(
        _reactstrap.Col,
        null,
        _react2.default.createElement(
          _reactstrap.Card,
          null,
          _react2.default.createElement(
            _reactstrap.CardHeader,
            null,
            _react2.default.createElement(
              "strong",
              null,
              "Add"
            ),
            " Car"
          ),
          _react2.default.createElement(
            _reactstrap.CardBody,
            null,
            _react2.default.createElement(
              _reactstrap.Form,
              { action: "", method: "post", className: "form-horizontal", innerRef: function innerRef(c) {
                  _this.form = c;
                } },
              _react2.default.createElement(
                _reactstrap.FormGroup,
                { row: true, className: "required" },
                _react2.default.createElement(
                  _reactstrap.Col,
                  { md: "3" },
                  _react2.default.createElement(
                    _reactstrap.Label,
                    { htmlFor: "hf-name required" },
                    "Name"
                  )
                ),
                _react2.default.createElement(
                  _reactstrap.Col,
                  { xs: "12", md: "9" },
                  _react2.default.createElement(_reactstrap.Input, { type: "text", id: "hf-name", name: "name",
                    className: _this.state.name === "" ? "is-invalid" : "",
                    placeholder: "Enter Car Name...",
                    onChange: _this.handleChange.bind(_this),
                    value: _this.state.name
                  }),
                  _react2.default.createElement(
                    _reactstrap.FormText,
                    { className: "help-block" },
                    "Please enter car name"
                  )
                )
              ),
              _react2.default.createElement(
                _reactstrap.FormGroup,
                { row: true, className: "required" },
                _react2.default.createElement(
                  _reactstrap.Col,
                  { md: "3" },
                  _react2.default.createElement(
                    _reactstrap.Label,
                    { htmlFor: "hf-brand" },
                    "Brand"
                  )
                ),
                _react2.default.createElement(
                  _reactstrap.Col,
                  { xs: "12", md: "9" },
                  _react2.default.createElement(
                    _reactstrap.Input,
                    {
                      type: "select",
                      name: "brand",
                      id: "hf-brand",
                      className: _this.state.brand === "" ? "is-invalid" : "",
                      onChange: _this.handleChange.bind(_this)
                    },
                    _react2.default.createElement(
                      "option",
                      { value: "" },
                      "Please select"
                    ),
                    _react2.default.createElement(
                      "option",
                      { value: "PORSCHE" },
                      "PORSCHE"
                    ),
                    _react2.default.createElement(
                      "option",
                      { value: "BMW" },
                      "BMW"
                    ),
                    _react2.default.createElement(
                      "option",
                      { value: "AUDI" },
                      "AUDI"
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.FormText,
                    { className: "help-block" },
                    "Please enter car brand"
                  )
                )
              ),
              _react2.default.createElement(
                _reactstrap.FormGroup,
                { row: true, className: "required" },
                _react2.default.createElement(
                  _reactstrap.Col,
                  { md: "3" },
                  _react2.default.createElement(
                    _reactstrap.Label,
                    { htmlFor: "hf-drive" },
                    "Drive"
                  )
                ),
                _react2.default.createElement(
                  _reactstrap.Col,
                  { xs: "12", md: "9", className: "required" },
                  _react2.default.createElement(
                    _reactstrap.Col,
                    { md: "9", className: !_this.state.drive2wd && !_this.state.drive4wd && !_this.state.driveawd ? "is-invalid form-control" : "" },
                    _react2.default.createElement(
                      _reactstrap.FormGroup,
                      { check: true, inline: true },
                      _react2.default.createElement(_reactstrap.Input, { className: "form-check-input", type: "checkbox", id: "inline-2WD", name: "drive2wd",
                        value: _this.state.drive2wd,
                        onChange: _this.handleCheckebox.bind(_this)
                      }),
                      _react2.default.createElement(
                        _reactstrap.Label,
                        { className: "form-check-label", check: true, htmlFor: "inline-2WD" },
                        "2WD"
                      )
                    ),
                    _react2.default.createElement(
                      _reactstrap.FormGroup,
                      { check: true, inline: true },
                      _react2.default.createElement(_reactstrap.Input, { className: "form-check-input", type: "checkbox", id: "inline-4WD", name: "drive4wd",
                        value: _this.state.drive4wd,
                        onChange: _this.handleCheckebox.bind(_this)
                      }),
                      _react2.default.createElement(
                        _reactstrap.Label,
                        { className: "form-check-label", check: true, htmlFor: "inline-4WD" },
                        "4WD"
                      )
                    ),
                    _react2.default.createElement(
                      _reactstrap.FormGroup,
                      { check: true, inline: true },
                      _react2.default.createElement(_reactstrap.Input, { className: "form-check-input", type: "checkbox", id: "inline-AWD", name: "driveawd",
                        value: _this.state.driveawd,
                        onChange: _this.handleCheckebox.bind(_this)
                      }),
                      _react2.default.createElement(
                        _reactstrap.Label,
                        { className: "form-check-label", check: true, htmlFor: "inline-AWD" },
                        "AWD"
                      )
                    )
                  )
                )
              ),
              _react2.default.createElement(
                _reactstrap.FormGroup,
                { row: true },
                _react2.default.createElement(
                  _reactstrap.Col,
                  { md: "3" },
                  _react2.default.createElement(
                    _reactstrap.Label,
                    { htmlFor: "hf-price" },
                    "Price"
                  )
                ),
                _react2.default.createElement(
                  _reactstrap.Col,
                  { xs: "12", md: "9" },
                  _react2.default.createElement(_reactstrap.Input, { type: "text", id: "hf-price", name: "price", placeholder: "Enter Price...",
                    onChange: _this.handlePriceChange.bind(_this),
                    value: _this.state.price }),
                  _react2.default.createElement(
                    _reactstrap.FormText,
                    { className: "help-block" },
                    "Please enter car price. ",
                    _react2.default.createElement(
                      "strong",
                      null,
                      "Note"
                    ),
                    ": only allow input numbers"
                  )
                )
              ),
              _react2.default.createElement(
                _reactstrap.FormGroup,
                { row: true },
                _react2.default.createElement(
                  _reactstrap.Col,
                  { md: "3" },
                  _react2.default.createElement(
                    _reactstrap.Label,
                    { htmlFor: "hf-image" },
                    "Image Url"
                  )
                ),
                _react2.default.createElement(
                  _reactstrap.Col,
                  { xs: "12", md: "9" },
                  _react2.default.createElement(_reactstrap.Input, { type: "text", id: "hf-image", name: "image", placeholder: "Enter Image Url...",
                    onChange: _this.handleChange.bind(_this),
                    value: _this.state.image }),
                  _react2.default.createElement(
                    _reactstrap.FormText,
                    { className: "help-block" },
                    "Please enter image url. ",
                    _react2.default.createElement(
                      "strong",
                      null,
                      "Note"
                    ),
                    ": only allow web image url"
                  )
                )
              )
            )
          ),
          _react2.default.createElement(
            _reactstrap.CardFooter,
            null,
            _react2.default.createElement(
              _reactstrap.Button,
              { type: "submit", size: "sm", color: "primary", disabled: !_this.state.valid, onClick: _this.handleSubmit },
              _react2.default.createElement("i", { className: "fa fa-dot-circle-o" }),
              " Add Car"
            )
          )
        )
      );
    };

    _this.state = {
      valid: false,
      name: "",
      brand: "",
      drive2wd: false,
      drive4wd: false,
      driveawd: false,
      price: "",
      image: ""
    };

    _this.handleSubmit = _this.handleSubmit.bind(_this);
    return _this;
  }

  _createClass(HomepageContainer, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (!this.props.allCarListTag) this.props.getAllCars();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      if (!this.state.valid && this.state.name !== "" && this.state.brand !== "" && (this.state.drive2wd || this.state.drive4wd || this.state.driveawd)) {
        this.setState({ valid: true });
      }

      if (this.state.valid && (this.state.name === "" || this.state.brand === "" || !this.state.drive2wd && !this.state.drive4wd && !this.state.driveawd)) {
        this.setState({ valid: false });
      }
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        { className: "homepage" },
        _react2.default.createElement(
          _reactstrap.Row,
          null,
          this.renderAddCar(),
          _react2.default.createElement(_CarsTable2.default, { cars: this.props.allOfcars })
        )
      );
    }
  }], [{
    key: "initialAction",
    value: function initialAction() {
      return (0, _preload.preload)();
    }
  }]);

  return HomepageContainer;
}(_react2.default.Component);

exports.default = (0, _reactRedux.connect)(mapState, mapDispatch)(HomepageContainer);

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("validator");

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.removeAllCookies = exports.changeObjectKey = undefined;

var _universalCookie = __webpack_require__(9);

var _universalCookie2 = _interopRequireDefault(_universalCookie);

var _env = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var changeObjectKey = exports.changeObjectKey = function changeObjectKey(obj, prevKey, currKey) {
  var clone_object = Object.assign({}, obj);
  clone_object[currKey] = clone_object[prevKey];
  delete clone_object[prevKey];
  return clone_object;
};

// remove all the cookies which belong to this apps
var removeAllCookies = exports.removeAllCookies = function removeAllCookies() {
  var cookies = new _universalCookie2.default();
  var allCookies = cookies.getAll();
  _.forEach(allCookies, function (cookie, key) {
    if (key.startsWith(_env.env.cookiePrefix)) cookies.remove(key);
  });
};

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = require("react-number-format");

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(5);

var _carService = __webpack_require__(13);

var _preload = __webpack_require__(10);

var _CarsTable = __webpack_require__(16);

var _CarsTable2 = _interopRequireDefault(_CarsTable);

var _reactstrap = __webpack_require__(3);

var _lodash = __webpack_require__(4);

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var mapState = function mapState(state, ownProps) {
  return {
    allOfcars: state.cars
  };
};

var mapDispatch = function mapDispatch(dispatch, ownProps) {
  return {
    findCarService: function findCarService(filter) {
      dispatch((0, _carService.findCarService)(filter));
    },
    getAllCars: function getAllCars() {
      dispatch((0, _preload.preload)());
    }
  };
};

var SearchPageContainer = function (_React$Component) {
  _inherits(SearchPageContainer, _React$Component);

  function SearchPageContainer(props) {
    _classCallCheck(this, SearchPageContainer);

    var _this = _possibleConstructorReturn(this, (SearchPageContainer.__proto__ || Object.getPrototypeOf(SearchPageContainer)).call(this, props));

    _this.handleChange = function (e) {
      var change = {};
      change[e.target.name] = e.target.value;
      _this.setState(change);
    };

    _this.handleCheckebox = function (e) {
      var change = {};
      change[e.target.name] = e.target.checked;
      _this.setState(change);
    };

    _this.onClickReset = function () {
      _this.props.getAllCars();
    };

    _this.onClickSearch = function () {
      var filter = {
        "key": _this.state.filter
      };
      switch (_this.state.filter) {
        case "name":
          filter["value"] = _this.state.name;
          break;
        case "brand":
          filter["value"] = _this.state.brand;
          break;
        case "drive":
          var drive = "";
          drive += _this.state.drive2wd ? "2wd|" : "";
          drive += _this.state.drive4wd ? "4wd|" : "";
          drive += _this.state.driveawd ? "awd|" : "";
          filter["value"] = drive;
          break;
      }
      _this.props.findCarService(filter);
    };

    _this.renderFilters = function () {
      var filters = ["name", "brand", "drive"];
      return _lodash2.default.map(filters, function (filter, index) {
        return _react2.default.createElement(
          "option",
          { key: index, value: filter },
          filter
        );
      });
    };

    var initState = {
      valid: false,
      name: "",
      brand: "",
      drive2wd: false,
      drive4wd: false,
      driveawd: false,
      filter: ""
    };

    _this.state = initState;
    return _this;
  }

  _createClass(SearchPageContainer, [{
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      if (!this.state.valid && (this.state.name !== "" && this.state.filter === "name" || this.state.brand !== "" && this.state.filter === "brand" || (this.state.drive2wd || this.state.drive4wd || this.state.driveawd) && this.state.filter === "drive")) {
        this.setState({ valid: true });
      }

      if (this.state.valid && (this.state.name === "" && this.state.filter === "name" || this.state.brand === "" && this.state.filter === "brand" || !this.state.drive2wd && !this.state.drive4wd && !this.state.driveawd && this.state.filter === "drive")) {
        this.setState({ valid: false });
      }
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        { className: "animated fadeIn" },
        _react2.default.createElement(
          _reactstrap.Col,
          { xs: "12" },
          _react2.default.createElement(
            _reactstrap.Card,
            null,
            _react2.default.createElement(
              _reactstrap.CardHeader,
              null,
              _react2.default.createElement(
                "strong",
                null,
                "Car Search"
              ),
              _react2.default.createElement(
                "small",
                null,
                " Form"
              )
            ),
            _react2.default.createElement(
              _reactstrap.CardBody,
              null,
              _react2.default.createElement(
                _reactstrap.Row,
                null,
                _react2.default.createElement(
                  _reactstrap.Col,
                  { xs: "12", sm: "4" },
                  _react2.default.createElement(
                    _reactstrap.FormGroup,
                    null,
                    _react2.default.createElement(
                      _reactstrap.Label,
                      { htmlFor: "" },
                      "Filter By"
                    ),
                    _react2.default.createElement(
                      _reactstrap.Input,
                      {
                        type: "select",
                        name: "filter",
                        id: "filter",
                        value: this.state.filter,
                        onChange: this.handleChange.bind(this)
                      },
                      _react2.default.createElement(
                        "option",
                        { value: "" },
                        "Please select"
                      ),
                      this.renderFilters()
                    )
                  )
                ),
                _react2.default.createElement(
                  _reactstrap.Col,
                  { xs: "12", sm: "4" },
                  _react2.default.createElement(
                    _reactstrap.FormGroup,
                    null,
                    _react2.default.createElement(
                      _reactstrap.Label,
                      { htmlFor: "" },
                      "Filter Value"
                    ),
                    _react2.default.createElement(_reactstrap.Input, {
                      type: "text",
                      name: "name",
                      id: "hf-name",
                      className: this.state.filter === "name" ? "animated fadeIn" : "d-none",
                      value: this.state.name,
                      onChange: this.handleChange.bind(this)
                    }),
                    _react2.default.createElement(
                      _reactstrap.Input,
                      {
                        type: "select",
                        name: "brand",
                        id: "hf-brand",
                        className: this.state.filter === "brand" ? "animated fadeIn" : "d-none",
                        onChange: this.handleChange.bind(this)
                      },
                      _react2.default.createElement(
                        "option",
                        { value: "" },
                        "Please select"
                      ),
                      _react2.default.createElement(
                        "option",
                        { value: "PORSCHE" },
                        "PORSCHE"
                      ),
                      _react2.default.createElement(
                        "option",
                        { value: "BMW" },
                        "BMW"
                      ),
                      _react2.default.createElement(
                        "option",
                        { value: "AUDI" },
                        "AUDI"
                      )
                    ),
                    _react2.default.createElement(
                      _reactstrap.Col,
                      { md: "9", className: this.state.filter === "drive" ? "animated fadeIn" : "d-none" },
                      _react2.default.createElement(
                        _reactstrap.FormGroup,
                        { check: true, inline: true },
                        _react2.default.createElement(_reactstrap.Input, { className: "form-check-input", type: "checkbox", id: "inline-2WD", name: "drive2wd",
                          value: this.state.drive2wd,
                          onChange: this.handleCheckebox.bind(this)
                        }),
                        _react2.default.createElement(
                          _reactstrap.Label,
                          { className: "form-check-label", check: true, htmlFor: "inline-2WD" },
                          "2WD"
                        )
                      ),
                      _react2.default.createElement(
                        _reactstrap.FormGroup,
                        { check: true, inline: true },
                        _react2.default.createElement(_reactstrap.Input, { className: "form-check-input", type: "checkbox", id: "inline-4WD", name: "drive4wd",
                          value: this.state.drive4wd,
                          onChange: this.handleCheckebox.bind(this)
                        }),
                        _react2.default.createElement(
                          _reactstrap.Label,
                          { className: "form-check-label", check: true, htmlFor: "inline-4WD" },
                          "4WD"
                        )
                      ),
                      _react2.default.createElement(
                        _reactstrap.FormGroup,
                        { check: true, inline: true },
                        _react2.default.createElement(_reactstrap.Input, { className: "form-check-input", type: "checkbox", id: "inline-AWD", name: "driveawd",
                          value: this.state.driveawd,
                          onChange: this.handleCheckebox.bind(this)
                        }),
                        _react2.default.createElement(
                          _reactstrap.Label,
                          { className: "form-check-label", check: true, htmlFor: "inline-AWD" },
                          "AWD"
                        )
                      )
                    )
                  )
                ),
                _react2.default.createElement(
                  _reactstrap.Col,
                  { xs: "12", sm: "4" },
                  _react2.default.createElement(
                    _reactstrap.FormGroup,
                    null,
                    _react2.default.createElement(
                      _reactstrap.Label,
                      { htmlFor: "" },
                      "\xA0"
                    ),
                    _react2.default.createElement(
                      "div",
                      null,
                      _react2.default.createElement(
                        _reactstrap.Button,
                        {
                          type: "submit",
                          color: "primary",
                          disabled: !this.state.valid,
                          onClick: this.onClickSearch
                        },
                        "Search"
                      ),
                      _react2.default.createElement(
                        _reactstrap.Button,
                        {
                          type: "reset",
                          className: "ml-3",
                          color: "danger",
                          onClick: this.onClickReset
                        },
                        _react2.default.createElement("i", { className: "fa fa-ban" }),
                        " Reset"
                      )
                    )
                  )
                )
              )
            )
          )
        ),
        _react2.default.createElement(_CarsTable2.default, { cars: this.props.allOfcars })
      );
    }
  }], [{
    key: "initialAction",
    value: function initialAction() {
      return (0, _preload.preload)();
    }
  }]);

  return SearchPageContainer;
}(_react2.default.Component);

exports.default = (0, _reactRedux.connect)(mapState, mapDispatch)(SearchPageContainer);

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Header = __webpack_require__(31);

var _Header2 = _interopRequireDefault(_Header);

var _Sidebar = __webpack_require__(32);

var _Sidebar2 = _interopRequireDefault(_Sidebar);

var _Aside = __webpack_require__(33);

var _Aside2 = _interopRequireDefault(_Aside);

var _Footer = __webpack_require__(34);

var _Footer2 = _interopRequireDefault(_Footer);

var _containers = __webpack_require__(12);

var _containers2 = _interopRequireDefault(_containers);

var _reactstrap = __webpack_require__(3);

var _reactRouterDom = __webpack_require__(2);

var _preload = __webpack_require__(10);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Full = function (_React$Component) {
  _inherits(Full, _React$Component);

  function Full() {
    _classCallCheck(this, Full);

    return _possibleConstructorReturn(this, (Full.__proto__ || Object.getPrototypeOf(Full)).apply(this, arguments));
  }

  _createClass(Full, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'app' },
        _react2.default.createElement(_Header2.default, null),
        _react2.default.createElement(
          'div',
          { className: 'app-body' },
          _react2.default.createElement(_Sidebar2.default, this.props),
          _react2.default.createElement(
            'main',
            { className: 'main' },
            _react2.default.createElement(
              _reactstrap.Container,
              { fluid: true },
              _react2.default.createElement(
                _reactRouterDom.Switch,
                null,
                _react2.default.createElement(_reactRouterDom.Route, { path: '/homepage', name: 'homepage', component: _containers2.default.HomepageContainer }),
                _react2.default.createElement(_reactRouterDom.Route, { path: '/search', name: 'search', component: _containers2.default.SearchPageContainer }),
                _react2.default.createElement(_reactRouterDom.Redirect, { from: '/', to: '/homepage' })
              )
            )
          ),
          _react2.default.createElement(_Aside2.default, null)
        ),
        _react2.default.createElement(_Footer2.default, null)
      );
    }
  }], [{
    key: 'initialAction',
    value: function initialAction() {
      return (0, _preload.preload)();
    }
  }]);

  return Full;
}(_react2.default.Component);

exports.default = Full;

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactReduxLoadingBar = __webpack_require__(17);

var _reactReduxLoadingBar2 = _interopRequireDefault(_reactReduxLoadingBar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * The header of the site
 */
var Header = function (_React$Component) {
  _inherits(Header, _React$Component);

  function Header() {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
  }

  _createClass(Header, [{
    key: 'sidebarToggle',
    value: function sidebarToggle(e) {
      e.preventDefault();
      document.body.classList.toggle('sidebar-hidden');
    }
  }, {
    key: 'mobileSidebarToggle',
    value: function mobileSidebarToggle(e) {
      e.preventDefault();
      document.body.classList.toggle('sidebar-mobile-show');
    }
  }, {
    key: 'asideToggle',
    value: function asideToggle(e) {
      e.preventDefault();
      document.body.classList.toggle('aside-menu-hidden');
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'header',
        { className: 'app-header navbar' },
        _react2.default.createElement(_reactReduxLoadingBar2.default, { showFastActions: true, className: 'loading' }),
        _react2.default.createElement(
          'button',
          { className: 'navbar-toggler mobile-sidebar-toggler d-lg-none', onClick: this.mobileSidebarToggle, type: 'button' },
          '\u2630'
        ),
        _react2.default.createElement('a', { className: 'navbar-brand', href: '#' }),
        _react2.default.createElement(
          'ul',
          { className: 'nav navbar-nav d-none d-lg-block' },
          _react2.default.createElement(
            'li',
            { className: 'nav-item' },
            _react2.default.createElement(
              'a',
              { className: 'nav-link navbar-toggler sidebar-toggler', onClick: this.sidebarToggle, href: '#' },
              '\u2630'
            )
          )
        )
      );
    }
  }]);

  return Header;
}(_react2.default.Component);

exports.default = Header;

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Sidebar = function (_React$Component) {
  _inherits(Sidebar, _React$Component);

  function Sidebar() {
    _classCallCheck(this, Sidebar);

    return _possibleConstructorReturn(this, (Sidebar.__proto__ || Object.getPrototypeOf(Sidebar)).apply(this, arguments));
  }

  _createClass(Sidebar, [{
    key: 'handleClick',
    value: function handleClick(e) {
      e.preventDefault();
      e.target.parentElement.classList.toggle('open');
    }
  }, {
    key: 'activeRoute',
    value: function activeRoute(routeName) {
      return this.props.location.pathname.indexOf(routeName) > -1 ? 'nav-item nav-dropdown open' : 'nav-item nav-dropdown';
    }

    // secondLevelActive(routeName) {
    //   return this.props.location.pathname.indexOf(routeName) > -1 ? "nav nav-second-level collapse in" : "nav nav-second-level collapse";
    // }

  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'sidebar' },
        _react2.default.createElement(
          'nav',
          { className: 'sidebar-nav' },
          _react2.default.createElement(
            'ul',
            { className: 'nav' },
            _react2.default.createElement(
              'li',
              { className: 'nav-item' },
              _react2.default.createElement(
                _reactRouterDom.Link,
                { to: '/homepage', className: 'nav-link' },
                _react2.default.createElement('i', { className: 'icon-home' }),
                ' Home Page '
              )
            ),
            _react2.default.createElement(
              'li',
              { className: 'nav-item' },
              _react2.default.createElement(
                _reactRouterDom.Link,
                { to: '/search', className: 'nav-link' },
                _react2.default.createElement('i', { className: 'icon-eye' }),
                ' Search '
              )
            )
          )
        )
      );
    }
  }]);

  return Sidebar;
}(_react2.default.Component);

exports.default = Sidebar;

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * The aside part of the site
 */
var Aside = function (_React$Component) {
  _inherits(Aside, _React$Component);

  function Aside() {
    _classCallCheck(this, Aside);

    return _possibleConstructorReturn(this, (Aside.__proto__ || Object.getPrototypeOf(Aside)).apply(this, arguments));
  }

  _createClass(Aside, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "aside",
        { className: "aside-menu" },
        "Aside Menu"
      );
    }
  }]);

  return Aside;
}(_react2.default.Component);

exports.default = Aside;

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * The footer of the site
 */
var Footer = function (_React$Component) {
  _inherits(Footer, _React$Component);

  function Footer() {
    _classCallCheck(this, Footer);

    return _possibleConstructorReturn(this, (Footer.__proto__ || Object.getPrototypeOf(Footer)).apply(this, arguments));
  }

  _createClass(Footer, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "footer",
        { className: "app-footer" },
        _react2.default.createElement(
          "a",
          { href: "http://www.qantas.com/" },
          "Quantas"
        ),
        " \xA9 2018 creativeLabs.",
        _react2.default.createElement(
          "span",
          { className: "float-right" },
          "Powered by ",
          _react2.default.createElement(
            "a",
            { href: "http://www.qantas.com/" },
            "Oscar"
          )
        )
      );
    }
  }]);

  return Footer;
}(_react2.default.Component);

exports.default = Footer;

/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = require("colors");

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(18);

var _reduxThunk = __webpack_require__(37);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _ducks = __webpack_require__(38);

var _ducks2 = _interopRequireDefault(_ducks);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// pass window.__initialData__ to preloadedState
var configureStore = function configureStore(preloadedState) {
  return (0, _redux.createStore)(_ducks2.default, preloadedState, (0, _redux.applyMiddleware)(_reduxThunk2.default));
};

exports.default = configureStore;

/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _redux = __webpack_require__(18);

var _lib = __webpack_require__(39);

var _reactReduxLoadingBar = __webpack_require__(17);

var _cars = __webpack_require__(6);

var _cars2 = _interopRequireDefault(_cars);

var _fullOfCarList = __webpack_require__(7);

var _fullOfCarList2 = _interopRequireDefault(_fullOfCarList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var reducers = (0, _redux.combineReducers)({
    cars: _cars2.default,
    fullOfCarList: _fullOfCarList2.default,
    loadingBar: _reactReduxLoadingBar.loadingBarReducer,
    routing: _lib.routerReducer
});

exports.default = reducers;

/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = require("react-router-redux/lib");

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(41);

var _routes = __webpack_require__(11);

var _routes2 = _interopRequireDefault(_routes);

var _reactRouterDom = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
  _inherits(App, _Component);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
  }

  _createClass(App, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(
          _reactRouterDom.Switch,
          null,
          _routes2.default.map(function (route, i) {
            return _react2.default.createElement(_reactRouterDom.Route, _extends({ key: i }, route));
          })
        )
      );
    }
  }]);

  return App;
}(_react.Component);

exports.default = App;

/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.save = exports.findAllCars = exports.getAllCars = undefined;

var _cars = __webpack_require__(44);

var _cars2 = _interopRequireDefault(_cars);

var _lodash = __webpack_require__(4);

var _lodash2 = _interopRequireDefault(_lodash);

var _util = __webpack_require__(45);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

global.cars = [];
global.uuid = 600;

/**
 * Get all the cars from db
 */
var getAllCars = exports.getAllCars = function getAllCars() {
  if (_lodash2.default.isEmpty(global.cars)) {
    cars = _cars2.default;
  }
  return cars;
};

/**
 * Find the cars by key which contains the value
 * 
 * @param {feature name} key 
 * @param {feature value} value 
 */
var findAllCars = exports.findAllCars = function findAllCars(key, value) {
  var carsItems = [];
  if (key === "name" || key === "brand") {
    _lodash2.default.forEach(global.cars, function (car) {
      if (car[key].toLowerCase().indexOf(value.toLowerCase()) !== -1) carsItems.push(car);
    });
  }

  if (key === "drive") {
    var sourceArray = value.toLowerCase().split('|').filter(function (element) {
      return element !== "";
    });
    var targetArray = [];
    _lodash2.default.forEach(global.cars, function (car) {
      targetArray = car[key].toLowerCase().split('|').filter(function (element) {
        return element !== "";
      });
      if ((0, _util.arrayContainsArray)(targetArray, sourceArray)) {
        carsItems.push(car);
      }
    });
  }
  return carsItems;
};

/**
 * 
 * @param { pass a car object } car 
 */
var save = exports.save = function save(car) {
  uuid++;
  car["id"] = uuid;
  cars.push(car);
  return cars;
};

/***/ }),
/* 44 */
/***/ (function(module, exports) {

module.exports = [{"id":100,"brand":"porsche","name":"911 Carrera","price":280000,"drive":"awd","imageUrl":"http://files1.porsche.com/filestore/image/multimedia/none/991-2nd-c4s-modelimage-sideshot/model/15bd09cf-553b-11e5-8c32-0019999cd470;s25/porsche-model.png"},{"id":110,"brand":"porsche","name":"Cayenne GTS","price":170000,"drive":"awd","imageUrl":"http://files3.porsche.com/filestore/image/multimedia/none/rd-2013-9pa-e2-2nd-gts-modelimage-sideshot/model/c287d350-5920-11e4-99aa-001a64c55f5c;s25/porsche-model.png"},{"id":120,"brand":"porsche","name":"Panamera 4S","price":320000,"drive":"2wd|4wd","imageUrl":"http://files1.porsche.com/filestore/image/multimedia/none/970-g2-4s-modelimage-sideshot/model/a23b6da0-33b9-11e6-9225-0019999cd470;s25/porsche-model.png"},{"id":200,"brand":"bmw","name":"Lightning Lap 2017: BMW M240i","price":90000,"drive":"2wd|4wd|awd","imageUrl":"https://hips.hearstapps.com/amv-prod-cad-assets.s3.amazonaws.com/images/17q3/685273/bmw-m240i-at-lightning-lap-2017-feature-car-and-driver-photo-687963-s-original.jpg?crop=1xw:1xh;center,center&resize=900:*"},{"id":210,"brand":"bmw","name":"2017 BMW M240i Coupe Automatic","price":145000,"drive":"2wd","imageUrl":"https://hips.hearstapps.com/amv-prod-cad-assets.s3.amazonaws.com/images/16q3/669461/2017-bmw-m240i-coupe-automatic-tested-review-car-and-driver-photo-670913-s-original.jpg?crop=1xw:1xh;center,center&resize=900:*"},{"id":220,"brand":"bmw","name":"BMW 4-series News and Reviews","price":130000,"drive":"4wd|awd","imageUrl":"https://hips.hearstapps.com/amv-prod-cad-assets.s3.amazonaws.com/images/media/683956/2018-bmw-4-series-idrive-infotainment-review-car-and-driver-photo-683962-s-original.jpg?crop=1xw:1xh;center,center&resize=740:*"},{"id":300,"brand":"audi","name":"Audi S5 Auto quattro","price":115000,"drive":"2wd|4wd|awd","imageUrl":"https://hips.hearstapps.com/hmg-prod/images/2018-audi-a5-sportback-01-placement-1524499430.jpg?crop=1xw:1xh;center,center&resize=900:*"},{"id":310,"brand":"audi","name":"Audi TT Sport Manual","price":80000,"drive":"2wd|4wd","imageUrl":"https://hips.hearstapps.com/amv-prod-cad-assets.s3.amazonaws.com/images/16q1/665019/2016-audi-tts-test-review-car-and-driver-photo-665850-s-original.jpg"}]

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var arrayContainsArray = exports.arrayContainsArray = function arrayContainsArray(superset, subset) {
    if (0 === subset.length || superset.length < subset.length) {
        return false;
    }
    for (var i = 0; i < subset.length; i++) {
        if (superset.indexOf(subset[i]) === -1) return false;
    }
    return true;
};

/***/ })
/******/ ]);
//# sourceMappingURL=server.js.map