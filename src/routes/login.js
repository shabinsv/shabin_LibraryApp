const express=require("express");
const login=express.Router();
function router(nav){
    
    login.get("/",function(req,res){
        res.render("login",{
              nav,
              title:"login"
            });
      });
      return login;
}

  module.exports=router;