let namee = document.getElementById("name");
let author= document.getElementById("author");
let about = document.getElementById("about");
let name1 = document.getElementById("name1");
let about1 = document.getElementById("about1");

function vali(){
    if(namee.value==""||author.value==""||about.value==""){
        alert("cannot be empty");
        return false;
    }
    else{
        alert("Adding Book in Library");
        return true;
    }
}
function vali1(){
    if(name1.value==""||about1.value==""){
        alert("cannot be empty");
        return false;
    }
    else{
        alert("Adding Author in Library");
        return true;
    }
}