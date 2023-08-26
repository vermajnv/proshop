import dotenv from 'dotenv';
import {app} from "./app.js";

dotenv.config();
const PORT = process.env.PORT_BACKEND;
const server = app.listen(PORT, () => {
    console.log('server is running');
})