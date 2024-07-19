require('dotenv').config();
require('./config/DBC');
const express = require('express');
const app = express();
const router = require('./router/userRouter');
const orderRouter = require('./router/orderRouter');
app.use(express.json());
app.use(router);
app.use(orderRouter);
const port = process.env.port||1254
app.listen(port,()=>{
console.log(`server is running on port: ${port}`)
});