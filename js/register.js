function userReg(){
    let userInf=
     {
        "PhoneNamber":document.getElementById("UserPhoneNamber").value,
        "UserName":document.getElementById("UserName").value,
        "Email":document.getElementById("UserEmail").value, 
        "Password":document.getElementById("UserPassword").value,
     }
     let oldData = localStorage.getItem('userInf')
     oldData = JSON.parse(oldData)
     if (oldData == null){
        localStorage.setItem("userInf", JSON.stringify([userInf]));
     } else {
        oldData.push(userInf);
        localStorage.setItem("userInf" , JSON.stringify(oldData));
     }
}
// const UserForm = document.querySelector("form");
// const UserEmail = document.getElementById("UserEmail");
// UserEmail.addEventListener('invalid', function(event) {
//     event.preventDefault();
//     UserEmail.setCustomValidity('its invalid correctly bro'); 
// });

// UserEmail.addEventListener('input', function(event) {
//     UserEmail.setCustomValidity('')
// });

// export{chowPass} from './singUp' 
function  chowPass(){
    let i = document.getElementById("UserPassword")
    if (i.type == "password"){
        i.type = "text";
    } else{
        i.type = "password";
    }
}

