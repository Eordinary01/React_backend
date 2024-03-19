const User = require("../models/userModel");


const path = require('path');

const createUser = async (req, res) => {
    try {

        const checkUser =  await User.findOne({email:req.body.email});

        if(checkUser){
            res.status(200).send({success:true,msg:req.body.email+' Email already exists! Pls enter another one..'})

        }

        else{

            const user = new User({
                name: req.body.name,
                email: req.body.email,
                mno: req.body.mno,
                image: path.join('/images', req.file.filename)
            });
            
            const userData = await user.save();
            res.status(200).send({ success: true, msg: 'User Data', data: userData });
        }
    } catch (error) {
        res.status(400).send({ success: false, msg: error.message });
    }
}

const getUser = async (req,res)=>{

    try {
        const users = await User.find({});

        res.status(200).send({success:true,msg:'Users Data',data:users});
        
    } catch (error) {
        res.status(400).send({success:false, msg:error.message});
        
    }

}

const deleteUser = async(req,res)=>{

    try {
        await User.deleteOne({_id:req.body.user_id});
        res.status(200).send({success:true,msg:'User Deleted Successfully!'})
        
    } catch (error) {
        res.status(400).send({success:false, msg:error.message});

        
    }
}

const updateUser = async(req,res)=>{

    try {
    var user_id=  req.body.user_id;

    var obj;

    if(req.file !== undefined){

        obj = {
            name: req.body.name,
            email: req.body.email,
            mno: req.body.mno,
            image: path.join('/images', req.file.filename)


    }
}
    else{

        
         obj = {
            name: req.body.name,
            email: req.body.email,
            mno: req.body.mno,
            
        }

    }

    

     var updatedData =    await User.findByIdAndUpdate({_id:user_id},{$set:obj},{new:true});
     res.status(200).send({success:true,msg:'User Updated Successfully!',data:updatedData})
        
    } catch (error) {

        res.status(400).send({success:false, msg:error.message});

        
    }

}

module.exports = {
    createUser,
    getUser,
    deleteUser,
    updateUser
}
    