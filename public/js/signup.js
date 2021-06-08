let email = document.getElementById("email");
let pwd= document.getElementById("pass");
let add = document.getElementById("add");
let phonenumber = document.getElementById("phonenumber");
let state = document.getElementById("state");
let pass1 = document.getElementById("pass1");

function ion(){
    let regemail = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/;
    let decimal=  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{8,15}$/;
    let regphone = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if(email.value==""||pwd.value==""||add.value==""||state.value==""||phonenumber.value==""){
        alert("cannot be empty");
        return false;
    
    }
    else if(regemail.test(email.value)&&decimal.test(pwd.value)&&regphone.test(phonenumber.value)){
        alert("Account Added Successfully")
        return true;
    }
    else{
        alert("check the data");
        return false;
    }
    
}
function inputpass(){
    let strongPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{8,}$/;
    let mediumPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{3,7}$/;
    if(strongPassword.test(pwd.value)){
        pass1.innerText="Password is strong";
        pass1.style.color="green";
    }
    else if(mediumPassword.test(pwd.value)){
        pass1.innerText="Password is medium";
        pass1.style.color="orange";
    }
    else{
        pass1.innerText="Password is poor";
        pass1.style.color="red";
    }
}



