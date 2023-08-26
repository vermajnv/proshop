import express from 'express';
import productRouter from './Routes/product.route.js';

export const app = express();
app.use('/api/product/', productRouter);