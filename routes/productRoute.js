const express = require("express");
const product_route = express();

const bodyparser = require("body-parser");

product_route.use(bodyparser.json());
product_route.use(bodyparser.urlencoded({extended:true}));

product_route.use(express.static('public'));


const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../public/productImages'));
    },
    filename: function (req, file, cb) {
        const name = Date.now() + '-' + file.originalname;
        cb(null, name);
    }
});

const upload = multer({storage:storage});

const productController = require("../controllers/productController");

product_route.post ('/add-product',upload.array('images'),productController.addProduct);


module.exports = product_route;