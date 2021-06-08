const express=require("express");
const signup=express.Router();
const Userdata=require("../model/Userdata");
function router(nav){
    
    signup.get("/",function(req,res){
        res.render("signup",{
              title:"login"
            });
      });
      signup.post("/add",function(req,res){
            var data={
                  email: req.body.email,
                  password:req.body.password,
                  address:req.body.address,
                  phonenumber:req.body.phonenumber,
                  state:req.body.state
            }
       var data=Userdata(data);
       data.save();
       res.redirect("/login");
      });
      return signup;
}


  module.exports=router;