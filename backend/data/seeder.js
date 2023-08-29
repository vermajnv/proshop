import users from "./users.js";
import dotenv from 'dotenv';
import products from "./products.js";
import mongoose from "mongoose";
import User from "../Models/user.model.js";
import Product from "../Models/product.model.js";
import Order from "../Models/order.model.js";
import connectDB from "../config/db.js";

dotenv.config();

connectDB();

const importData = async () => {
    try {
        await Order.deleteMany();
        await Product.deleteMany();
        await User.deleteMany();

        const createUser = await User.insertMany(users);
        console.log('User inserted......');
        const adminUser = createUser[0]._id;

        const refinedProduct = products.map((product) => {
            return { ...product, user : adminUser};
        })

        const createdProducts = await Product.insertMany(refinedProduct);

        console.log('Product added..........');
        process.exit(1)
    } catch (error) {
        console.log('Something went wrong');
        process.exit(1);
    }
}

const destroyData = async () => {
    try {
        await Order.deleteMany();
        await Product.deleteMany();
        await User.deleteMany();
        console.log('Data deleted');
        process.exit(1)
    } catch (error) {
        console.log('Something went wrong');
        process.exit(1);
    }
}

console.log(process.argv);

if(process.argv[2] === '--d')
{
    destroyData();
}
else
{
    importData();
}
