const dotenv=require("dotenv");
dotenv.config({
    path:"../.env"
})

const mongoose=require("mongoose");
const bcrypt=require("bcrypt");
const jsonwebtoken=require("jsonwebtoken")
const userSchema=new mongoose.Schema({
  firstname:{
    type:String,
    required:true,
    trim:true,

  },
  lastname:{
    type:String,
    required:true,
    trim:true,
  },email:{
    type:String,
    required:true,
    trim:true,
    minLength:10,
  },
  phone:{
    type:Number,
    required:true,
    trim:true,
   
  },
  image:{
type:String
  },
  gender:{
    type:String,
  },
  password:{
    type:String,
    required:true,
    trim:true,
  },
  confirmpassword:{
    type:String,
    required:true,
    trim:true,
  },tokens:[
    {
        token:{
            type:String,
            required:true,
            trim:true,
        }
    }
  ],

   

  }

  
)


userSchema.pre("save",async function(next){
if(this.isModified("password")){
    this.password=await bcrypt.hash(this.password,10);
    this.confirmpassword=await bcrypt.hash(this.confirmpassword,10);

}
next();
})

userSchema.methods.generateToken=async function(){
const token= await jsonwebtoken.sign({_id:this._id.toString()},process.env.SECRET_CODE);

this.tokens=this.tokens.concat({token:token})
return token;
}

const userFlipkart=new mongoose.model("userFlipkart",userSchema);
module.exports=userFlipkart