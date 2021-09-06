import express from "express";
import SaleController from "../controllers/sale.controller.js"

const router = express.Router();

router.get('/', async (req, res, next) => {
    try {
        const docs = await SaleController.getDefaulters(req, res, next);
        res.render('index', { sales: docs });
    } catch (err) {
        next(err);
    }
})

router.post('/', async (req, res) => {
    try {
        console.log('Sale create');
        res.redirect("/");
    } catch (err) {
        res.redirect("/");
    }
});

export default router;