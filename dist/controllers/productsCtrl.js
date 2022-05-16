"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UpdateProduct = exports.ItsAdmin = exports.GetProducts = exports.DeleteProduct = exports.CheckBodyProduct = exports.AddProduct = void 0;

var _productos = require("../models/productos");

var _uuid = require("uuid");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var CheckBodyProduct = function CheckBodyProduct(req, res, next) {
  var _req$body = req.body,
      name = _req$body.name,
      description = _req$body.description,
      price = _req$body.price,
      stock = _req$body.stock,
      photoUrl = _req$body.photoUrl;

  if (!name || !description || !price || !stock || !photoUrl) {
    return res.status(400).json({
      Error: 'missing body fields'
    });
  }

  next();
};

exports.CheckBodyProduct = CheckBodyProduct;

var ItsAdmin = function ItsAdmin(req, res, next) {
  var itsAdmin = true;

  if (!itsAdmin) {
    return res.status(400).json({
      Error: 'You do not have permission to do this'
    });
  }

  next();
};

exports.ItsAdmin = ItsAdmin;

var GetProducts = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var id, prod, prods;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            id = req.params.id;

            if (!id) {
              _context.next = 9;
              break;
            }

            _context.next = 5;
            return _productos.ProductsModel.findById(id);

          case 5:
            prod = _context.sent;

            if (prod) {
              _context.next = 8;
              break;
            }

            return _context.abrupt("return", res.json({
              Error: 'Product not found'
            }));

          case 8:
            return _context.abrupt("return", res.json({
              Product: prod
            }));

          case 9:
            _context.next = 11;
            return _productos.ProductsModel.find({});

          case 11:
            prods = _context.sent;
            res.json({
              Products: prods
            });
            _context.next = 18;
            break;

          case 15:
            _context.prev = 15;
            _context.t0 = _context["catch"](0);
            res.status(500).json({
              error: _context.t0.message,
              stack: _context.t0.stack
            });

          case 18:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 15]]);
  }));

  return function GetProducts(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.GetProducts = GetProducts;

var AddProduct = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var _req$body2, name, description, price, stock, photoUrl, newProduct, nP;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _req$body2 = req.body, name = _req$body2.name, description = _req$body2.description, price = _req$body2.price, stock = _req$body2.stock, photoUrl = _req$body2.photoUrl;
            newProduct = {
              name: name,
              description: description,
              code: (0, _uuid.v4)(),
              price: price,
              stock: stock,
              photoUrl: photoUrl
            };
            _context2.next = 5;
            return _productos.ProductsModel.create(newProduct);

          case 5:
            nP = _context2.sent;
            res.json({
              msg: 'Product created',
              data: newProduct
            });
            _context2.next = 12;
            break;

          case 9:
            _context2.prev = 9;
            _context2.t0 = _context2["catch"](0);
            res.status(500).json({
              error: _context2.t0.message,
              stack: _context2.t0.stack
            });

          case 12:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 9]]);
  }));

  return function AddProduct(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.AddProduct = AddProduct;

var UpdateProduct = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var id, _req$body3, name, description, price, stock, photoUrl, newProduct;

    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            id = req.params.id;
            _req$body3 = req.body, name = _req$body3.name, description = _req$body3.description, price = _req$body3.price, stock = _req$body3.stock, photoUrl = _req$body3.photoUrl;
            _context3.next = 5;
            return _productos.ProductsModel.findByIdAndUpdate(id, {
              name: name,
              description: description,
              price: price,
              stock: stock,
              photoUrl: photoUrl
            }, {
              "new": true
            });

          case 5:
            newProduct = _context3.sent;

            if (newProduct) {
              _context3.next = 8;
              break;
            }

            return _context3.abrupt("return", res.json({
              Error: 'Product not found'
            }));

          case 8:
            res.json({
              ProductUpdated: newProduct
            });
            _context3.next = 14;
            break;

          case 11:
            _context3.prev = 11;
            _context3.t0 = _context3["catch"](0);
            res.status(500).json({
              error: _context3.t0.message,
              stack: _context3.t0.stack
            });

          case 14:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 11]]);
  }));

  return function UpdateProduct(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.UpdateProduct = UpdateProduct;

var DeleteProduct = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var id, retorno;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            id = req.params.id;
            _context4.next = 4;
            return _productos.ProductsModel.findByIdAndDelete(id);

          case 4:
            retorno = _context4.sent;

            if (retorno) {
              _context4.next = 7;
              break;
            }

            return _context4.abrupt("return", res.json({
              Error: 'Product not found'
            }));

          case 7:
            res.json({
              msg: 'Product deleted'
            });
            _context4.next = 13;
            break;

          case 10:
            _context4.prev = 10;
            _context4.t0 = _context4["catch"](0);
            res.status(500).json({
              error: _context4.t0.message,
              stack: _context4.t0.stack
            });

          case 13:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[0, 10]]);
  }));

  return function DeleteProduct(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.DeleteProduct = DeleteProduct;