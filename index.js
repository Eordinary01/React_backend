const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/React_backend");

const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors({
    origin:"*"

}));

const userRoute= require ('./routes/userRoutes')

app.use('/api',userRoute);

const productRoute = require('./routes/productRoute');
app.use('/api',productRoute);

const orderRoute = require('./routes/orderRoute');
app.use('/api',orderRoute);

const PORT = 8088;

app.listen(PORT,function(){
    console.log("Backend connected!! and running on "+PORT);
});