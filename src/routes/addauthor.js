const express=require("express");
const addauthor=express.Router();
function router(nav){
    
    addauthor.get("/",function(req,res){
        res.render("addauthor",{
              nav,
              title:"Addauthor"
            });
      });
      return addauthor;
}

  module.exports=router;