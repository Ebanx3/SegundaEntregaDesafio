import { CarritoModel } from '../models/carrito'
import mongoose from 'mongoose';

export const CreateCarrito = async (req, res) => {

}

export const DeleteCarrito = async (req, res) => {
    try {
        await CarritoModel.deleteMany({});

        res.json({
            msg: 'Empty carrito'
        })
    }
    catch (err) {
        res.status(500).json({
            error:err.message,
            stack:err.stack,
        });
    }
};

export const AddCarrito = async (req,res) => {
    try{
        const {id} = req.params;
        const _id = new mongoose.Types.ObjectId(id);
        const newProduct = await CarritoModel.create(_id);
        res.json({
            msg:'Product Added'
        })
    }
    catch(err){
        res.status(500).json({
            error:err.message,
            stack:err.stack,
        });
    }
};
