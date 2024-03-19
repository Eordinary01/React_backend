const Product = require("../models/productModel");



const addProduct = async(req,res)=>{

    try {

        var arrImages = [];

        for(let i = 0;i< req.files.length;i++){
            arrImages[i] = '/productImages/'+req.files[i].filename
        }

      var product =   new Product({
            user_id:req.body.user_id,
            name:req.body.name,
            price:req.body.price,
            images: arrImages
        })

      const productData =   await product.save();
      res.status(200).send({success:true,msg:'Product Added Successfully!', data:productData});
        
    } catch (error) {
        res.status(400).send({success:true,msg:error.message});
    }
}
module.exports = {
    addProduct
}
