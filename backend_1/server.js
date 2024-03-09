const express=require("express");
const db=require('./db.js');
const app=express();
const cors = require('cors');
const userRoute=require('./routes/createUser.js')
const loginRoute=require('./routes/login');
const foodRouter = require("./routes/foodData.js");
app.use(express.json())
const PORT=5000;
app.listen(PORT,()=>{console.log('listening')})
db(); 



// 👇️ configure CORS
app.use(cors());
app.use('/signup',userRoute) 
app.use('/login',loginRoute)
app.use('/food',foodRouter)

 