const express=require("express");
require("../connection/connection");
const cookieParser=require("cookie-parser");
const port=process.env.PORT||5000;

const App=express();
App.use(express.json());
App.use(cookieParser())
App.use(require("../router/router.js"))
App.get("/",(request,response)=>{
    response.send("home page")

})



App.listen(port,()=>{
    console.log(`server start at the port of ${port}`)
})