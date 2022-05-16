import mongoose from 'mongoose';
import 'dotenv/config'

const connectionString = process.env.MONGO_ATLAS;

export const connectToMongoAtlas = async () => {
    try{
        console.log('-Trying to connect with Mongo Atlas');
        await mongoose.connect(connectionString);
        console.log('----------Already connected T.T');
    }
    catch(err){
        console.log('Error while try connect with Mongo Atlas',err.message);
        return error;
    }
}