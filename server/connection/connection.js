const dotenv=require("dotenv");
dotenv.config({
    path:"../.env"
})

const express=require("express");
const mongoose=require("mongoose");
const serFunction=async()=>{
await mongoose.connect(process.env.SECRET_SERVER);
}
serFunction().then(()=>{
    console.log("server start hai bhai")
}).catch(()=>{
    console.log("tumse na ho payega")
})