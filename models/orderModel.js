const mongoose = require("mongoose");
const orderSettingSchema =  mongoose.Schema({
    user_id:{
        type:String,
        required:true
    },
    product_id:{
        type:String,
        required:true
    }

});

module.exports = mongoose.model('Order',orderSettingSchema);