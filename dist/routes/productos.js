"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _productsCtrl = require("../controllers/productsCtrl");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router();

router.get('/:id?', _productsCtrl.GetProducts);
router.post('/', _productsCtrl.CheckBodyProduct, _productsCtrl.ItsAdmin, _productsCtrl.AddProduct);
router.put('/:id', _productsCtrl.UpdateProduct);
router["delete"]('/:id', _productsCtrl.DeleteProduct);
var _default = router;
exports["default"] = _default;