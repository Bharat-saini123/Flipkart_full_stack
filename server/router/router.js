
const express=require("express");
const bcrypt=require("bcrypt");
const path=require("path");
const Auth=require("../middleware/Auth");
const userFlipkart=require("../database/data.js");
const cors=require("cors")
const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true,

}
const router=express.Router();
router.use(cors(corsOptions));

const stripe = require("stripe")(
    "sk_test_51NnjjuSIrhr3xwAM1ZgoXm2VOSwWAJZXEJrIQMxtY6RHDu7lAmFSQCROlvfGW8aRMdAO8RZnQNLtmuuLDnSFPRwN00rYd1qidi"
  );


     
 

            router.post("/signup",async(request,response)=>{
const firstname=request.body.firstname;
const lastname=request.body.lastname;
const email=request.body.email;
const phone=request.body.phone;
const password=request.body.password;
const confirmpassword=request.body.confirmpassword;
if(!firstname||!lastname||!email||!phone||!password||!phone||!confirmpassword){
    response.status(404).json("please filled all the data");
}else{
    if(((email.substr(email.length - 10)).toLowerCase()!=="@gmail.com")||(phone.toString().length!==10&&phone.toString().length!==13)){
response.status(408).json("please filled right data")
    }
    else{
        const checkEmail=await userFlipkart.findOne({email:email});
        if(checkEmail){
            response.status(412).json("your email is already exist")
        }else{

            if(password!==confirmpassword){
response.status(416).json("your password not match confirm password")
            }else{
const user=await new userFlipkart({
    firstname,lastname,email,phone,password,confirmpassword
})
const token=await user.generateToken();
await user.save();


response.status(200).json("you sucessfully register")


            }
        }
    }
}
            })


            router.post("/signin",async(request,response)=>{
                const password=request.body.password;
                const email=request.body.email;
                if(!email||!password){
                    response.status(404).json("please filled all the data")
                }
                else{
                    const checkEmail=await userFlipkart.findOne({email:email});
                    if(!checkEmail){
                        response.status(408).json("your email is not correct")
                    }
                    else{
                        const checkpassword=await bcrypt.compare(password,checkEmail.password)
                        if(!checkpassword){
response.status(412).json("your password is incorrect")
                        }
                        else{
                            const token=await checkEmail.generateToken();
                         response.cookie("myloginCookie",token,{
                            httpOnly:true,
                            expires:new Date(Date.now()+15000000)
                         })
                         
                            response.status(200).json("you sucessfuly login")
                            
                        }
                    }
                }

            })
            router.get("/about",Auth,(request,response)=>{
               
             response.status(200).send(request.userFound);
            })
            router.get("/getData",Auth,(request,response)=>{
               
                    response.status(202).send(request.userFound);
                
             
            })

            router.put("/changeData",Auth,async(request,response)=>{
                console.log(request.body)
               const {firstname,lastname,email,phone,gender}=request.body;
              const user=await userFlipkart.findByIdAndUpdate({_id:request.userId},{firstname:firstname,lastname:lastname,email:email,phone:phone,gender:gender},{new:true});
              await user.save();
              response.status(200).json("save data");
              console.log("yes baby common karo na or")
      console.log(user)
            })

            router.delete("/deleteAccount",Auth,async(request,response)=>{
                console.log(request.body);
                const user=await userFlipkart.findByIdAndDelete({_id:request.userId});
             
                response.status(200).json("delete data");
              
              
            })


            router.post("/api/create-checkout-session", async (req, res) => {
                const product = req.body.product;
                
              
                const lineItems=product.map((product)=>({
                    price_data:{
                        currency:"inr",
                            product_data:{
                    name:product.name
                            },
                            unit_amount:product.price*100
                        
                    },quantity:product.quantity
                      }))
              
                const session = await stripe.checkout.sessions.create({
                  payment_method_types:["card"],
                  line_items:lineItems,
                  mode:"payment",
                  success_url:`http://localhost:3000/success`,
                  cancel_url:`http://localhost:3000/cancel`,
                });
              
                res.json({ id:session.id });
              });
            
        


router.get("/logout",(request,response)=>{
    response.clearCookie("myloginCookie");
    response.status(200).json("sucessful logout")

 
})
            
          
                router.get("*",(request,response)=>{
                    response.send("Error page router wala")
                    })

 const multer  = require('multer');

 const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, '../src/images')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() 
      cb(null,  uniqueSuffix+file.originalname)
    }
  })
  
  const upload = multer({ storage: storage })
                    

router.put('/profile',Auth,upload.single('image'),async function(request, response, next) {
    console.log(request.body)
    const imageData=request.file.filename;
  
        const user=await userFlipkart.findByIdAndUpdate({_id:request.userId},{image:imageData},{new:true});
        await  user.save();
        response.status(200).json("save data")
        console.log(user);
})






                  
 module.exports=router;