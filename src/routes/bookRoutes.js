const express=require("express");
const booksRouter=express.Router();
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
    
    booksRouter.get("/",function(req,res){
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
        
      booksRouter.get("/:id",function(req,res){
        const id= req.params.id
        Bookdata.findOne({_id:id})
        .then(function(book){
         res.render("book",{
           nav,
           title:"Library",
         book
         });
        })
      });       
      booksRouter.get('/del/:id',function(req,res){
        const id= req.params.id
        Bookdata.remove({_id:id})
        .then(function(){
          res.redirect("/books")
        })
      });

      booksRouter.get('/update/:id',function(req,res){
        const id= req.params.id
        Bookdata.findOne({_id:id})
        .then(function(book){
         res.render("addbook",{
           nav,
           title:"Update Book",
           act:"books/add/"+id,
           button:"Update",
         book
       })
          })
      });

      booksRouter.post('/add/:id',upload.single('image'),function(req,res){
        const id= req.params.id
        const item={
          title: req.body.title,
           author: req.body.author,
           genre: req.body.genre,
           about: req.body.about,
           image:x
          }
          Bookdata.updateOne({_id:id},item).then(function(){
            res.redirect("/books");
          });

      });

      

      return booksRouter;
}

  module.exports=router;