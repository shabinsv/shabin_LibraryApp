let email=document.getElementById("email");
let pwd=document.getElementById("pwd");
function vali(){
    let regexp = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/
    var decimal=  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{8,}$/;
    if(email.value==""||pwd.value==""){
        alert("cannot be empty");
        return false;
    }
    else if(email.value=="admin@gmail.com"&&pwd.value=="Admin123"){
        document.getElementById("adminlogin").action = "/admin";
        document.getElementById("adminlogin").method = "GET";
        return true;
    }
    else if(regexp.test(email.value)&&decimal.test(pwd.value)){
        document.getElementById("adminlogin").action = "/login/add";
        document.getElementById("adminlogin").method = "POST";
        return true;
    }
    else{
        alert("username or password invalid")
        return false;
    }
    
}