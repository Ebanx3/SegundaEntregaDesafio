import { ProductsModel } from "../models/productos";
import { v4 as uuidv4 } from 'uuid';

export const CheckBodyProduct = (req, res, next) => {
    const { name, description, price, stock, photoUrl } = req.body;
    if (!name || !description || !price || !stock || !photoUrl) {
        return res.status(400).json({
            Error: 'missing body fields'
        });
    }
    next();
};

export const ItsAdmin = (req, res, next) => {
    const itsAdmin = true;
    if (!itsAdmin) {
        return res.status(400).json({
            Error: 'You do not have permission to do this'
        });
    }
    next();
};

export const GetProducts = async (req, res) => {
    try {
        const { id } = req.params;

        if (id) {
            const prod = await ProductsModel.findById(id);
            if (!prod) return res.json({ Error: 'Product not found' });
            return res.json({
                Product: prod
            });
        }

        const prods = await ProductsModel.find({});

        res.json({
            Products: prods
        })
    }
    catch (err) {
        res.status(500).json({
            error: err.message,
            stack: err.stack,
        });
    }
};

export const AddProduct = async (req, res) => {
    try {
        const { name, description, price, stock, photoUrl } = req.body;
        const newProduct = {
            name: name,
            description: description,
            code: uuidv4(),
            price: price,
            stock: stock,
            photoUrl: photoUrl,
        }

        const nP = await ProductsModel.create(newProduct);

        res.json({
            msg: 'Product created',
            data: newProduct
        });
    }
    catch (err) {
        res.status(500).json({
            error: err.message,
            stack: err.stack,
        });
    }
};

export const UpdateProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, description, price, stock, photoUrl } = req.body;
        const newProduct = await ProductsModel.findByIdAndUpdate(id, { name, description, price, stock, photoUrl }, { new: true });
        if (!newProduct) return res.json({ Error: 'Product not found' });
        res.json({
            ProductUpdated: newProduct,
        })
    }
    catch (err) {
        res.status(500).json({
            error: err.message,
            stack: err.stack,
        });
    }
};

export const DeleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const retorno = await ProductsModel.findByIdAndDelete(id);
        if (!retorno) return res.json({ Error: 'Product not found' });
        res.json({
            msg: 'Product deleted'
        });
    }
    catch (err) {
        res.status(500).json({
            error: err.message,
            stack: err.stack,
        });
    }
};