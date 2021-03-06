"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.connectToMongoAtlas = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var username = 'ebanx3';
var password = 'inssko4MuRwslWFO';
var connectionString = "mongodb+srv://".concat(username, ":").concat(password, "@cluster0.jhein.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");

var connectToMongoAtlas = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            console.log('-Trying to connect with Mongo Atlas');
            _context.next = 4;
            return _mongoose["default"].connect(connectionString);

          case 4:
            console.log('----------Already connected T.T');
            _context.next = 11;
            break;

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](0);
            console.log('Error while try connect with Mongo Atlas', _context.t0.message);
            return _context.abrupt("return", error);

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 7]]);
  }));

  return function connectToMongoAtlas() {
    return _ref.apply(this, arguments);
  };
}();

exports.connectToMongoAtlas = connectToMongoAtlas;