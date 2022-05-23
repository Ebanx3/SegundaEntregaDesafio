import { CarritoModel, ProdCarModel } from '../models/carrito';
import mongoose from 'mongoose';
import { ProductsModel } from '../models/productos';

export const CreateCarrito = async (req, res) => {
    try {
        const newCarrito = await CarritoModel.create({});

        res.json({
            msg: 'Carrito created',
            IDnewCarrito: newCarrito._id,
        });
    }
    catch (err) {
        res.status(500).json({
            error: err.message,
            stack: err.stack,
        });
    }
}

export const DeleteCarrito = async (req, res) => {
    try {
        const { id } = req.params;
        const ret = await CarritoModel.findByIdAndDelete(id);
        if (!ret) {
            res.status(400).json({
                Err: 'Carrito not founded'
            })
        }
        res.json({
            msg: 'Carrito deleted',
        });
    }
    catch (err) {
        res.status(500).json({
            error: err.message,
            stack: err.stack,
        });
    }
};

export const GetProductsInCar = async (req, res) => {
    try {
        const { id } = req.params;
        const prodsFound = await ProdCarModel.find({ carritoId: new mongoose.Types.ObjectId(id) });

        const arrayProducts = [];
        for(let prod of prodsFound){
            const prodF = await ProductsModel.findById(prod.productId)
            arrayProducts.push(prodF)
        }
        res.json({
            ProductsFounded: arrayProducts,
        })
    }
    catch (err) {
        res.status(500).json({
            error: err.message,
            stack: err.stack,
        });
    }
};

export const AddToCarrito = async (req, res) => {
    try {
        const { id } = req.params;
        const lastCarCreated = await CarritoModel.find({}).limit(1).sort({createdAt: -1});
        const IdCar = lastCarCreated[0]._id;

        const newProdCar = {
            productId: id,
            carritoId: IdCar,
        };

       await ProdCarModel.create(newProdCar);
        res.json({
            msg: 'Product Added',
            IdCarrito: IdCar,
        })
    }
    catch (err) {
        res.status(500).json({
            error: err.message,
            stack: err.stack,
        });
    }
};

export const RemoveProdsFromCar = async (req,res) => {
    try{
        const { id } = req.params;
        const { id_prod } = req.params;

        const prodFounded = await ProdCarModel.findOneAndDelete({$and: [{productID:id_prod},{carritoId:id}]})

        if(!prodFounded){
            res.status(400).json({
                Error:'There are not a product whit that id in a Carrito with that id value '
            })
        }

        res.json({
            msg:'Products removed',
        })
    }
    catch(err){
        res.status(500).json({
            error:err.message,
            stack:err.stack,
        });
    }
};
