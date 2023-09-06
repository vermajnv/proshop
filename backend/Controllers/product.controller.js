import Product from "../Models/product.model.js";
import { catchError, catchError1 } from "../utils/trycatch.js";

/**
 * @desc Get All product
 * @type GET /api/product
 * @access public
 */
const getProducts = catchError(( async (req, res, next) => {
    const products = await Product.find();
    if(products)
    {
        return res.status(200).json(products)
    }
    res.status(404);
    throw new Error('Product Not Found')
}))

/**
 * @desc Get single product description
 * @type GET /api/product/:id
 * @access Public
 */
const getProduct = catchError(( async (req, res, next) => {
    const { id } = req.params;
    const product = await Product.findById(id);
    if(product)
    {
        return res.status(200).json(product)
    }
    res.status(404);
    throw new Error('Product not found');
}))

export {
    getProducts,
    getProduct
};