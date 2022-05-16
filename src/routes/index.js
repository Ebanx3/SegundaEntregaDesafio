import express from 'express';
import routerProductos from './productos';
import routerCarrito from './carrito';

const router = express.Router();

router.use('/productos',routerProductos);
router.use('/carrito',  routerCarrito  );

export default router;