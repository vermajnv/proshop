import express from 'express';
import productRouter from './Routes/product.route.js';
import {notFound, errorHandler} from './middleware/errorHandler.js';

export const app = express();


app.use('/api/product/', productRouter);
// Register middleware
app.use(notFound);
app.use(errorHandler);