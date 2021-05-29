const express=require("express");
const signup=express.Router();
function router(nav){
    
    signup.get("/",function(req,res){
        res.render("signup",{
              nav,
              title:"login"
            });
      });
      return signup;
}

  module.exports=router;