let email=document.getElementById("email");
let pwd=document.getElementById("pwd");
function vali(){
    let regexp = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/
    var decimal=  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{8,}$/;
    if(email.value==""||pwd.value==""){
        alert("cannot be empty");
        return false;
    }
    else if(regexp.test(email.value)&&decimal.test(pwd.value)){
        return true;
    }
    else{
        alert("username or password invalid")
        return false;
    }
    
}