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

const getProducts = async(req,res)=>{
    try {

      var products =   await Product.find({user_id:req.body.user_id});
      res.status(200).send({success:true,msg:'Products Data ',data:products});
        
    } catch (error) {
        res.status(400).send({success:true,msg:error.message});
        
    }
}
const deleteProducts= async(req,res)=>{
    try {

            await Product.deleteOne({_id:req.body.id});
            res.status(200).send({success:true,msg:'Product Deleted Successfully'});
        
    } catch (error) {
        res.status(400).send({success:false, msg:error.message});
        
    }
}
const updateProducts = async (req, res) => {
    try {
        let dataObj;
        let arrImages = [];
        if (req.files.length > 0) {
            for (let i = 0; i < req.files.length; i++) {
                arrImages[i] = '/productImages/' + req.files[i].filename;
            }
            dataObj = {
                name: req.body.name,
                price: req.body.price,
                images: arrImages
            };
        } else {
            dataObj = {
                name: req.body.name,
                price: req.body.price
            };
        }
        const productData = await Product.findByIdAndUpdate(
            { _id: req.body.id },
            { $set: dataObj },
            { new: true }
        );
        res.status(200).send({ success: true, msg: 'Product Updated Successfully!', data: productData });
    } catch (error) {
        res.status(400).send({ success: false, msg: error.message });
    }
};


module.exports = {
    addProduct,
    getProducts,
    deleteProducts,
    updateProducts
}
