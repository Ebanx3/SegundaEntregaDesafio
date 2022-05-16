import { connectToMongoAtlas } from "./services/bbdd";
import app from './services/server';

const init = async () => {
    await connectToMongoAtlas();

    const port = 8080;
    app.listen(port,()=> console.log('Listening at port', port));
}

init();