import express from 'express';
import { AddToCarrito, CreateCarrito, DeleteCarrito, GetProductsInCar, RemoveProdsFromCar } from '../controllers/carrito';

const router = express.Router();

router.post('/',CreateCarrito);
router.delete('/:id', DeleteCarrito);
router.post('/:id/productos',AddToCarrito);
router.get('/:id/productos', GetProductsInCar);
router.delete('/:id/productos/:id_prod',RemoveProdsFromCar);

export default router;