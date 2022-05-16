import express from 'express';
import mainRouter from '../routes/index';

const app = express();
app.use(express.json());
app.use('/api', mainRouter);


app.use('/', (err, req, res ,next) => {
    return res.status(500).json({
        msg:'There was an error',
        error: err.message,
    })
})

export default app;