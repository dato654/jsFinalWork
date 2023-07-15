function userReg() {
    let user = 
    {
        "email": document.getElementById("UserEmail").value,
        "password": document.getElementById("UserPassword").value
    }
    let oldData = localStorage.getItem('user');
    oldData = JSON.parse(oldData)
    if (oldData == null){
       localStorage.setItem("user", JSON.stringify([user]));
    } else {
       oldData.push(user);
       localStorage.setItem("user" , JSON.stringify(oldData));
    }
}
function  chowPass(){
    let i = document.getElementById("UserPassword")
    if (i.type == "password"){
        i.type = "text";
    } else{
        i.type = "password";
    }
}
