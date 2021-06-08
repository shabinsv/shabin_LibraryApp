const express=require("express");
const admin=express.Router();
const Bookdata=require("../model/Bookdata");
const Authordata=require("../model/Authordata");
function router(nav3,nav){
    
    admin.get("/",function(req,res){
        res.render("admin",{
            nav3,
              title:"Admin"
            });
      });

      admin.get('/delete',function(req,res){
        Bookdata.find()
        .then(function(books){
          res.render("books",{
            nav,
            title:"Library",
            button:"Delete",
            link:"books/del",
          books});
    });
        });
        admin.get('/update',function(req,res){
          Bookdata.find()
          .then(function(books){
            res.render("books",{
              nav,
              title:"Library",
              button:"Update",
              link:"books/update",
            books});
      });
          });

          admin.get('/authors/delete',function(req,res){
            Authordata.find()
            .then(function(authors){
              res.render("authors",{
                nav,
                title:"Authors",
                button:"Delete",
                link:"authors/del",
              authors});
        });
            });
            admin.get('/authors/update',function(req,res){
              Authordata.find()
              .then(function(authors){
                res.render("authors",{
                  nav,
                  title:"Authors",
                  button:"Update",
                  link:"authors/update",
                authors});
          });
              });
              

      return admin;
}

  module.exports=router;