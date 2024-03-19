const mongoose = require('mongoose');

const productSettingSchema = mongoose.Schema({
    user_id: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    images: {
        type: [String], // Assuming images is an array of strings
        required: false,
        validate: [ // Define the validation function directly
            function(array) {
                return array.length <= 5;
            },
            'You can pass only 5 product Images..'
        ]
    }
});

module.exports = mongoose.model('ProductSetting', productSettingSchema);
