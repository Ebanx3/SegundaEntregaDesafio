import express from 'express';
import { AddProduct, CheckBodyProduct, DeleteProduct, GetProducts, ItsAdmin, UpdateProduct } from '../controllers/productsCtrl';

const router = express.Router();

router.get('/:id?',GetProducts);
router.post('/',CheckBodyProduct,ItsAdmin,AddProduct);
router.put('/:id',UpdateProduct);
router.delete('/:id',DeleteProduct)

export default router;