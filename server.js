require('dotenv').config();
require('./config/DBC');
const express = require('express');
const cors = require('cors')
const app = express();
app.use(cors())
const router = require('./router/userRouter');
const orderRouter = require('./router/orderRouter');
const  ironRouter = require('./router/ironRouter');
app.use(express.json());
app.use(router);
app.use(orderRouter);
app.use(ironRouter)
const port = process.env.port||1254
app.listen(port,()=>{
console.log(`server is running on port: ${port}`)
});