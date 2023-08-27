import dotenv from 'dotenv';
import {app} from "./app.js";

dotenv.config();
import connectDB from './config/db.js';
// Connect DB
connectDB();

const PORT = process.env.PORT_BACKEND;
const server = app.listen(4000, () => {
    console.log('server is running');
})