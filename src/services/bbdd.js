import mongoose from 'mongoose';

const username = 'ebanx3';
const password = 'inssko4MuRwslWFO';
const connectionString = `mongodb+srv://${username}:${password}@cluster0.jhein.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

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