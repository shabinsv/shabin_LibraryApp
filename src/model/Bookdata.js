const mongoose=require("mongoose");
mongoose.connect("mongodb+srv://userone:userone@ictakfiles.cpy6i.mongodb.net/LIBRARY?retryWrites=true&w=majority");
const Schema=mongoose.Schema;

const BookSchema=new Schema({
    title: String,
    author: String,
    genre:String,
    about: String,
    image: String
})
var Bookdata=mongoose.model("bookdata",BookSchema);

module.exports=Bookdata;

