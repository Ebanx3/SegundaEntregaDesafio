"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _index = _interopRequireDefault(require("../routes/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
app.use(_express["default"].json());
app.use('/api', _index["default"]);
app.use('/', function (err, req, res, next) {
  return res.status(500).json({
    msg: 'There was an error',
    error: err.message
  });
});
var _default = app;
exports["default"] = _default;