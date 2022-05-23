import mongoose from "mongoose"
import { ProductsCollectionName } from "./productos";

export const CarritoCollectionName = 'carrito';

const carritoSchema = new mongoose.Schema({}, { timestamps: true, versionKey: false })

export const CarritoModel = mongoose.model(CarritoCollectionName, carritoSchema);

export const ProdCarCollectionName = 'ProdCar';

const prodCarSchema = new mongoose.Schema({
    productId: {
        type: mongoose.Types.ObjectId,
        ref: ProductsCollectionName,
        required: true,
    },
    carritoId: {
        type: mongoose.Types.ObjectId,
        ref: CarritoCollectionName,
        required: true,
    }
},
{ 
    timestamps: true, versionKey: false 
}
)

export const ProdCarModel = mongoose.model(ProdCarCollectionName, prodCarSchema);