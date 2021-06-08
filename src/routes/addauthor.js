const express=require("express");
const addauthor=express.Router();
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

const Authordata=require("../model/Authordata")
function router(nav){
      var author={
            title:"",
            image:"",
            about:"" 
            }     
    addauthor.get("/",function(req,res){
      res.render("addauthor",{
            nav,
            title:"Author Form",
            author,
            act:"addauthor/add",
            button:"Add Author"
          });
      });
      addauthor.post("/add",upload.single('image'),function(req,res){
            var item={
                 title: req.body.title,
                  about: req.body.about,
                  image: x
            }
       var author=Authordata(item);
       author.save();
       res.redirect("/authors");
      });

      return addauthor;
}

  module.exports=router;