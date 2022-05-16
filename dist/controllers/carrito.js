"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateCarrito = void 0;

var _carrito = require("..models/carrito");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var CreateCarrito = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var coll;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _carrito.CarritoModel.createCollection();

          case 2:
            coll = _context.sent;
            console.log(coll);
            res.json({
              msg: 'Carrito creado',
              id: coll
            });

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function CreateCarrito(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.CreateCarrito = CreateCarrito;