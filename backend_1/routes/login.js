const express=require('express');
// const user=require('../model/User');
const User = require('../model/User');
const loginRouter=express.Router();
const jwt=require("jsonwebtoken")  
const jwt_key="2132456!@#345465" 
const  saveUser= async (req,resp)=>{
    console.log(req.body)
    console.log('hello login route working')
    let email=req.body.email;
 let user =await User.findOne({email})
 if(!user)
 resp.status(400).json({error:' email not found '})
let id=user.id; 
let token =jwt.sign({payload:id},jwt_key)
resp.cookie('auth',token);
// console.log(user)   
resp.json({msg:'success',
token
}) 
}




loginRouter.route('/') 
.post(saveUser)

module.exports=loginRouter;