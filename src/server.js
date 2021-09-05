import express from "express";
import bodyParser from "body-parser";
// /user?id =7 phải dùng body parser server mới láy đc 7
import viewEngine from "./config/viewEngine";
import initWebRoutes from './route/web';
import connectDB from './config/connectDB';
//lệnh này gọi đc hàm config() của thư viện dotenv
require('dotenv').config();


let app = express();

//config app
// cấu hình tham số client gửi lên
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))

viewEngine(app);
initWebRoutes(app);

connectDB();

let port = process.env.PORT || 6969;
//port === undefined => port =6969
app.listen(port,()=>{
    // callback
    // khi chạy success sẽ in ra màn hình
    console.log("backend nodejs is running on port: "+ port);
}) 