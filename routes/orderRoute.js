const express = require("express");
const order_route = express();

const bodyparser = require("body-parser");

order_route.use(bodyparser.json());
order_route.use(bodyparser.urlencoded({extended:true}));

const orderController = require('../controllers/orderController');

order_route.post('/create-order',orderController.createOrder);
order_route.get('/get-orders',orderController.getOrders);

module.exports = order_route;

