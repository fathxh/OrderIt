import express from 'express';
import OrderModel from '../../modal/orders';
import ProductModel from '../../modal/products';

const router = express.Router();
//creating controler
router.get('/list/:shopname', (req: any, res: any, next: any) => {
    try {
        ProductModel.find({shop:req.params.shopname}).then((document) => {
            res.json(document);
        });
    } catch (err) {
        next(err);
    }
});
router.get('/oders/:shop', (req: any, res: any, next: any) => {
    try {
        OrderModel.find({shop:req.params.shop}).then((document) => {
            res.json(document);
        });
    } catch (err) {
        next(err);
    }
});

router.put('/status', (req: any, res: any, next: any) => {
    try {
        const item = req.body;
        OrderModel.updateOne(
            { customer:item.customer,item:item.item,shop:item.shop},
            {
                ready:true
            }
        ).then((document) => {
            res.json(document);
        });
    } catch (err) {
        next(err);
    }
})

router.post('/', (req: any, res: any, next: any) => {
    try {
        const Item = req.body;
        ProductModel.findOne({ shop:Item.shop,productname: Item.productname }).then((document) => {
            if (document) {
                const result = {
                    msg: "Product Already exist",
                    data: document
                }
                res.json(result)
            }
            else {
                ProductModel.insertMany([Item]).then((document) => {
                    const result = {
                        msg: "product added successfull",
                        data: document
                    }
                    res.json(result)
                });
            }
        });

    } catch (err) {
        next(err);
    }
})

router.post('/deleteproduct', (req: any, res: any, next: any) => {
    try {
        const Item = req.body;
        ProductModel.deleteOne({ shop:Item.shop,productname: Item.productname})
            .then((result) => {
                res.json(result);
            })

    } catch (err) {
        next(err);
    }
})

export default router;
