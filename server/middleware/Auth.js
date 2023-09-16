const dotenv=require("dotenv");
dotenv.config({
    path:"../.env"
})
const jsonwebtoken=require("jsonwebtoken");
const userFlipkart=require("../database/data.js")


const Auth=async(request,response,next)=>{
    
try{
const token=request.cookies.myloginCookie;

const verifyUser= jsonwebtoken.verify(token,process.env.SECRET_CODE);

const userFound=await userFlipkart.findOne({_id:verifyUser._id})
if(!userFound){
    response.status(404).json("user not found")
}

request.token=token;
request.userFound=userFound;
request.userId=userFound._id;
next();
}catch(error){
response.status(408).json("user are nor authenticate")
}


}
module.exports=Auth;