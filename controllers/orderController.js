const Order = require("../models/orderModel");

const createOrder = async(req,res)=>{
    try {

    const product =  new Order({
            user_id:req.body.user_id,
            product_id:req.body.product_id
        });
        await product.save();
        res.status(200).send({success:true,msg:'Order Created Successfully!'})
        
    } catch (error) {
        res.status(400).send({success:true,msg:error.message});
        
    }
}

const getOrders = async(req,res)=>{
    try {
        var orders;

        if(req.body.user_id !== undefined){
            orders = await Order.find({user_id:req.body.user_id});
        }
        else{
            orders = await Order.find({});

        }
        res.status(200).send({success:true,msg:'Orders Data',data:orders});
        
    } catch (error) {
        res.status(400).send({success:true,msg:error.message});
        
    }
}

module.exports = {
    createOrder,
    getOrders

}