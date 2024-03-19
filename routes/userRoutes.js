const express = require("express");
const user_route= express();

const bodyparser= require("body-parser");

user_route.use(bodyparser.json());
user_route.use(bodyparser.urlencoded({extended:true}));

user_route.use(express.static('public'));

const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../public/images'));
    },
    filename: function (req, file, cb) {
        const name = Date.now() + '-' + file.originalname;
        cb(null, name);
    }
});
const upload = multer({storage:storage});

const userController = require("../controllers/userController");

user_route.post('/create-user',upload.single('image'),userController.createUser);

user_route.get('/get-user',userController.getUser);

user_route.post('/delete-user',userController.deleteUser);

user_route.post('/update-user',upload.single('image'),userController.updateUser);


module.exports = user_route;