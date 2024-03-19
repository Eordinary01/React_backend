const mongoose = require("mongoose");
const userSettingSchema = mongoose.Schema({

    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    mno:{
        type:String,
        required:true
    },
    image:{
       type:String,
       required:true 
    },


});

module.exports = mongoose.model('User',userSettingSchema);