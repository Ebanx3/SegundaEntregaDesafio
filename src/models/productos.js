import mongoose from 'mongoose';


export const ProductsCollectionName = 'products';

const ProductsSchema = new mongoose.Schema({
    name:{type:String, required: true},
    description: {type:String, required:true},
    code:{type:String, required:true},
    price:{type:Number,required:true},
    stock:{type:Number, required:true},
    photoUrl:{type:String, required:true},
},{
    versionKey:false,
    timestamps:true,
})

export const ProductsModel = mongoose.model(ProductsCollectionName, ProductsSchema);