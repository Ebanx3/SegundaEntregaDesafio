"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CarritoModel = exports.CarritoCollectionName = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var _productos = require("./productos");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var CarritoCollectionName = 'carrito';
exports.CarritoCollectionName = CarritoCollectionName;
var carritoSchema = new _mongoose["default"].Schema({
  productId: {
    type: _mongoose["default"].Types.ObjectId,
    ref: _productos.ProductsCollectionName,
    required: true
  }
}, {
  timestamps: true,
  versionKey: false
});
var CarritoModel = new _mongoose["default"].model(CarritoCollectionName, carritoSchema);
exports.CarritoModel = CarritoModel;