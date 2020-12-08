const express=require('express');
const router=express.Router();
const {
    authenticateJWT,
    getInfoUserJWT,
    adminRoleValidation
} = require('../auth/authServer');
const { createOrder,updateOrder,getAllOrders,getAllOrdersByUser,deleteOrder } =require('../orders');

router.get('/all',authenticateJWT,adminRoleValidation, async(req,res)=>{
try {
    const orders=await getAllOrders();
    res.status(200).json(orders);
    } catch (error) {
        res.status(400).json({Message: error.sqlMessage });
    }  
});
router.get('/:id', (req,res)=>{

});

router.get('/',authenticateJWT, async(req,res)=>{
    try {
        const username = getInfoUserJWT(req.headers.authorization);
        const orders=await getAllOrdersByUser(username.name);
        res.status(200).json(orders);
        } catch (error) {
            res.status(400).json({Message: error.sqlMessage });
        }  
});
router.post('/', authenticateJWT,async (req,res)=>{
    try {
        const username = getInfoUserJWT(req.headers.authorization);
        const orderId=await createOrder( req.body,username.name);
        res.status(201).json({OK: `Se creó correctamente el pedido N°:${orderId}`});
        } catch (error) {
            res.status(400).json({Message: error.sqlMessage });
        }  
});
router.put('/:id',authenticateJWT,adminRoleValidation, async(req,res)=>{
    try {
        await updateOrder( req.body,req.params.orderId);
        res.status(200).json({OK: `Se modificó el estado correctamente del pedido N°:${req.params.orderId}`});
        } catch (error) {
            res.status(400).json({Message: error.sqlMessage });
        }  
});

router.delete('/:id', authenticateJWT, adminRoleValidation, async (req, res) => {
    try {
        const orderId = req.params.id;
        const result = await deleteOrder(orderId);
        res.status(result.code).json({resultado:result.message});
    } catch (error) {
        res.status(400).json({
            Message: error.sqlMessage
        });
    }
});
module.exports=router;