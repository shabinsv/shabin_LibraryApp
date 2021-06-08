const express=require("express");
const login=express.Router();
const Userdata=require("../model/Userdata");
const Bookdata=require("../model/Bookdata");
const Authordata=require("../model/Authordata");
const nav=[{link:"/login/books",name:"Books"},{link:"/login/authors",name:"Authors"}]

function router(nav1){
    login.get("/",function(req,res){
        res.render("login",{
              title:"login",
              alert:""
            });
      });
      login.post("/add",function(req,res){
            var x="";
           var email=req.body.email;
           var pwd=req.body.password;
           Userdata.findOne({email:email})
           .then(function(data){
             x=data.password;
             if(x==pwd){
              res.render("index",{
                nav1,img:"user.jpg",
                 title:"welcome to user Library"}); 
             }
             else{
              res.render("login",{
                title:"login",
                alert:"Password Is Wrong!!",
              });
             }
           }).catch(function(){
            res.render("login",{
              title:"login",
              alert:"Email Not Found!!",
            });
           });
          }); 
          login.get("/books",function(req,res){
            Bookdata.find()
            .then(function(books){
              res.render("books",{
                nav,
                title:"Library",
                button:"",
               link:"" ,  
              books});
        });
          }); 
          login.get("/authors",function(req,res){
            Authordata.find()
            .then(function(authors){
              res.render("authors",{
                nav,
                title:"Authors",
                button:"",
               link:"" ,  
              authors});
        });
          });
          
          
      return login;

}

  module.exports=router;