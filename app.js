const express=require("express");
const app= express();
const port=process.env.PORT || 5000;
const nav=[{link:"/admin",name:"Admin Page"},{link:"/books",name:"Books"},{link:"/authors",name:"Authors"},{link:"/addbook",name:"Add Book"},{link:"/addauthor",name:"Add Author"}]
const nav1=[{link:"/login",name:"LogIn"},{link:"/Signup",name:"SignUp"}]
const nav2=[{link:"/",name:"logout"},{link:"/login/books",name:"Books"},{link:"/login/authors",name:"Authors"}]
const nav3=[{link:"/books",name:"Books"},{link:"/authors",name:"Authors"}]
const booksRouter=require("./src/routes/bookRoutes")(nav)
const authorsRouter=require("./src/routes/authorRoutes")(nav)
const addbook=require("./src/routes/addbook")(nav)
const addauthor=require("./src/routes/addauthor")(nav)
const login=require("./src/routes/login")(nav2)
const signup=require("./src/routes/signup")(nav)
const admin=require("./src/routes/admin")(nav3,nav)

app.use(express.urlencoded({extended:true}));
app.use(express.static("./public"));
app.set("view engine","ejs");
app.set("views","./src/views");
app.use("/books",booksRouter);
app.use("/authors",authorsRouter);
app.use("/addbook",addbook);
app.use("/addauthor",addauthor);
app.use("/login",login);
app.use("/signup",signup);
app.use("/admin",admin);


app.get("/",function(req,res){
      res.render("index",{
           nav1,img:"backgr.jpg",
            title:"welcome to Library"});
});
app.listen(port,function(){
      console.log("Server Ready at " +port);
});
