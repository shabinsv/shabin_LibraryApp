const express=require("express");
const addbook=express.Router();
function router(nav){
    
    addbook.get("/",function(req,res){
        res.render("addbook",{
              nav,
              title:"AddBook"
            });
      });
      return addbook;
}

  module.exports=router;