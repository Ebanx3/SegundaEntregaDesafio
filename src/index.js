import { connectToMongoAtlas } from "./services/bbdd";
import app from './services/server';

const init = async () => {
    await connectToMongoAtlas();

    const port = process.env.PORT;
    app.listen(port,()=> console.log('Listening at port', port));
}

init();