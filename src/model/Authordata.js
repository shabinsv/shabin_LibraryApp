const mongoose=require("mongoose");
mongoose.connect("mongodb+srv://userone:userone@ictakfiles.cpy6i.mongodb.net/LIBRARY?retryWrites=true&w=majority");
const Schema=mongoose.Schema;

const AuthorSchema=new Schema({
    title: String,
    about: String,
    image: String
})
var Authordata=mongoose.model("authordata",AuthorSchema);

module.exports=Authordata;