import products from "../data/products.js";
const getProducts = ((req, res, next) => {
        return res.status(200).json(products)
    })

const getProduct = ((req, res, next) => {
    const { id } = req.params;
    const product = products.find((product) => product._id === id);

    return res.status(200).json(product)
})

export {
    getProducts,
    getProduct
};