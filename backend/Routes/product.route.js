import express from "express";
import { getProduct, getProducts } from "../Controllers/product.controller.js";

const router = express.Router((req, res, next) => {
    return next();
})


router.route('/').get(getProducts);
router.route('/:id').get(getProduct);

export default router;