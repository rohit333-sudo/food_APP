const express=require('express');
const foodRouter=express.Router();
   
const  foodData= async (req,resp)=>{
    try
    {

        resp.json([global.category,global.items])
    }
    catch(err)
    {
        console.log(err)
        resp.json({
            msg:"server error"
        })
    }
}
foodRouter.route('/') 
.get(foodData)

module.exports=foodRouter;