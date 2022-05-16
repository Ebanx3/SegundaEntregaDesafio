import mongoose from "mongoose"
import { ProductsCollectionName } from "./productos";

export const CarritoCollectionName = 'carrito';

const carritoSchema = new mongoose.Schema({
    productId:{
        type:mongoose.Types.ObjectId,
        ref:ProductsCollectionName,
        required:true,
    },
},{
    timestamps:true,
    versionKey:false,
})

export const CarritoModel = mongoose.model(CarritoCollectionName,carritoSchema);

// export const CreateCarritoModel = (name) =>{
//     return carrito = mongoose.model(name,carritoSchema);
// }