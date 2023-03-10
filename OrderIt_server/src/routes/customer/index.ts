import express from 'express';
import orderModel from '../../modal/orders';
import ProductModel from '../../modal/products';

const router = express.Router();
router.get('/list', (req: any, res: any, next: any) => {
    try {
        ProductModel.find().then((document) => {
            res.json(document);
        });
    } catch (err) {
        next(err);
    }
});
router.get('/listoders/:customer', (req: any, res: any, next: any) => {
    try {
        orderModel.find({ customer: req.params.customer }).then((document) => {
            res.json(document);
        });
    } catch (err) {
        next(err);
    }
});

router.post('/order', (req: any, res: any, next: any) => {
    try {
        orderModel.findOne({ customer: req.body.customer }).then((document) => {
            if (document) {
                orderModel.findOne({ customer: req.body.customer, shop: req.body.shop }).then((document) => {
                    if (document) {
                        orderModel.findOne({ customer: req.body.customer, shop: req.body.shop, item: req.body.item }).then((document) => {
                            if (document) {
                                const result= {
                                    msg: "order Already Exist Check Your Cart",
                                    data: document
                                }
                                res.json(result)
                            }
                            else {
                                const foodItem = req.body;
                                orderModel.insertMany([foodItem]).then((document) => {
                                    const result = {
                                        msg: "Ordered successfully",
                                        data: document
                                    }
                                    res.json(result)
                                });
                            }
                        });
                    }
                    else {
                        const foodItem = req.body;
                        orderModel.insertMany([foodItem]).then((document) => {
                            const result = {
                                msg: "Ordered successfully",
                                data: document
                            }
                            res.json(result)
                        });
                    }
                });
            } else {
                const foodItem = req.body;
                orderModel.insertMany([foodItem]).then((document) => {
                    const result = {
                        msg: "Ordered successfully",
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

router.post('/orderdelete', (req: any, res: any, next: any) => {
    try {
        const items = req.body;
        orderModel.deleteOne({ customer: items.customer, item: items.item, shop: items.shop })
            .then((result) => {
                res.json(result);
            })

    } catch (err) {
        next(err);
    }
})

router.post('/updateorder', (req: any, res: any, next: any) => {
    try {
        if(req.body.add===true){
            orderModel.updateOne({ customer: req.body.customer, shop: req.body.shop, item: req.body.item }, { count: Number(req.body.count) + 1, totalprice: Number(req.body.price) * (Number(req.body.count) + 1) })
        .then((doc) => {
            const result = {
                msg: "Count updated",
                data: doc
            }
            res.json(result)
        })
        }else{
            const count=Number(req.body.count) - 1
            const price=Number(req.body.price) * (Number(req.body.count) - 1)
            orderModel.updateOne({ customer: req.body.customer, shop: req.body.shop, item: req.body.item }, { count: count, totalprice:price})
        .then((doc) => {
            const result = {
                msg: "Count updated",
                data: doc
            }
            res.json(result)
        })
        }
        
    }
    catch (err) {
        next(err);
    }
})
router.post('/cash', (req: any, res: any, next: any) => {
    try {
            orderModel.updateOne({ customer: req.body.customer, shop: req.body.shop, item: req.body.item }, { paytype:"CASH" })
        .then((doc) => {
            const result = {
                data: doc
            }
            res.json(result)
        })
        }
    catch (err) {
        next(err);
    }
})
export default router;
