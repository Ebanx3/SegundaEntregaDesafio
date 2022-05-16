"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProductsModel = exports.ProductsCollectionName = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var ProductsCollectionName = 'products';
exports.ProductsCollectionName = ProductsCollectionName;
var ProductsSchema = new _mongoose["default"].Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  code: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  stock: {
    type: Number,
    required: true
  },
  photoUrl: {
    type: String,
    required: true
  }
}, {
  versionKey: false,
  timestamps: true
});

var ProductsModel = _mongoose["default"].model(ProductsCollectionName, ProductsSchema);

exports.ProductsModel = ProductsModel;