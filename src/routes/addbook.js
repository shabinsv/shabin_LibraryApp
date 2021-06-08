const express=require("express");
const addbook=express.Router();
var multer= require('multer');
var x="";
var storage = multer.diskStorage({
      destination: function (req, file, cb) {
        cb(null, 'public/img')
      },
      filename: function (req, file, cb) {
       x=file.originalname;
        cb(null, file.originalname)
      }
  })
  var upload = multer({ storage: storage })

const Bookdata=require("../model/Bookdata");
function router(nav){
      var book={
                  title:"",
                  author:"",
                  image:"",
                  genre:"",
                  about:"" 
                  }         
    
    addbook.get("/",function(req,res){
        res.render("addbook",{
              nav,
              title:"Book Form",
              book,
              act:"addbook/add",
              button:"Add Book"
            });
      });
      addbook.post("/add",upload.single('image'),function(req,res){
            var item={
                 title: req.body.title,
                  author: req.body.author,
                  genre: req.body.genre,
                  about: req.body.about,
                  image: x
            }
       var book=Bookdata(item);
       book.save();
       res.redirect("/books");
      });

      
      return addbook;
}

  module.exports=router;