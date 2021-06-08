const mongoose=require("mongoose");
mongoose.connect("mongodb+srv://userone:userone@ictakfiles.cpy6i.mongodb.net/LIBRARY?retryWrites=true&w=majority");
const Schema=mongoose.Schema;

const UserSchema=new Schema({
    email: String,
    password: String,
    address: String,
    phonenumber: String,
    state: String
})
var Userdata=mongoose.model("userdata",UserSchema);

module.exports=Userdata;