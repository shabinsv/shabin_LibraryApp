const express=require("express");
const authorsRouter=express.Router();
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
const Authordata=require("../model/Authordata");
function router(nav){
    
    authorsRouter.get("/",function(req,res){
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
      authorsRouter.get("/:id",function(req,res){
        const id= req.params.id
        Authordata.findOne({_id:id})
        .then(function(author){
         res.render("author",{
           nav,
           title:"Author",
         author
         });
        })
      });       
      authorsRouter.get('/del/:id',function(req,res){
        const id= req.params.id
        Authordata.remove({_id:id})
        .then(function(){
          res.redirect("/authors")
        })
      });

      authorsRouter.get('/update/:id',function(req,res){
        const id= req.params.id
        Authordata.findOne({_id:id})
        .then(function(author){
         res.render("addauthor",{
           nav,
           title:"Update Author",
           act:"authors/add/"+id,
           button:"Update",
         author
       })
          })
      });

      authorsRouter.post('/add/:id',upload.single('image'),function(req,res){
        const id= req.params.id
        const item={
          title: req.body.title,
           about: req.body.about,
           image:x
          }
         Authordata.updateOne({_id:id},item).then(function(){
            res.redirect("/authors");
          });

      });


      return authorsRouter;
}

  module.exports=router;