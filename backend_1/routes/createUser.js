const express=require("express");
const userRoute=express.Router();
const user=require('../model/User');
let bcrypt=require('bcryptjs')
const nodemailer = require("nodemailer");

express().use(function(req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Allow-Headers", "Origin,X-Requested-With,Content-Type,Accept");
    next();
   });
const  saveUser= async (req,resp)=>{
console.log(req.body)
console.log('working')
 let salt = await bcrypt.genSalt(10);
 let pass = await bcrypt.hash(req.body.password,salt)
 console.log(pass)
const newUser = new user({
    email: req.body.email,
    password: pass,
//    cpassword:req.body.cpassword, 
  });

  // Save the user to the database 
 await newUser.save()
    .then((savedUser) => {
      console.log('User saved:', savedUser);
      sendMail();
    }) 
    .catch((error) => {
      console.error('Error saving user:', error);
    });
resp.json({
    msg:"data recieved and saved to db "
 
})
}

const sendMail=()=>{
    
  const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        // TODO: replace `user` and `pass` values from <https://forwardemail.net>
        user: "rohitjakhmola666@gmail.com",
        pass: "xexgrnsdohiwtabn",
      },
    });
    
    // async..await is not allowed in global scope, must use a wrapper
    async function main() {
      // send mail with defined transport object
      try
      {
      const info = await transporter.sendMail({
        from: '"Fred Foo 👻" <rohitjakhmola666@gmail.com>', // sender address
        to: "rohitjakhmola2@gmail.com", // list of receivers
        subject: "Hello ✔", // Subject line
        text: "user created", // plain text body
        html: "<b>Recieved</b>", // html body
      });
      console.log("Message sent: %s", info.messageId);
      }
      catch(error)
      {
      console.log(error)
      // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
      }
      //
      // NOTE: You can go to https://forwardemail.net/my-account/emails to see your email delivery status and preview
      //       Or you can use the "preview-email" npm package to preview emails locally in browsers and iOS Simulator
      //       <https://github.com/forwardemail/preview-email>
      //
    }
    
    main().catch(console.error);
    
  }
  
   
userRoute.route('/') 
.post(saveUser)


module.exports=userRoute;

 