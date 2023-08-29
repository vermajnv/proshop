import Product from "../Models/product.model.js";

const getProducts = ( async (req, res, next) => {
        console.log('Here');
        const products = await Product.find();
        return res.status(200).json(products)
    })

const getProduct = ( async (req, res, next) => {
    const { id } = req.params;
    const product = await Product.findById(id);
    return res.status(200).json(product)
})

export {
    getProducts,
    getProduct
};