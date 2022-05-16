import express from 'express';
import { AddCarrito, CreateCarrito, DeleteCarrito } from '../controllers/carrito';

const router = express.Router();

router.post('/',CreateCarrito);
router.delete('/', DeleteCarrito);
router.post('/:id',AddCarrito);

export default router;