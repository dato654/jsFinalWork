let burgerMenu = document.getElementById("burgerMenu");
function toggleMenu() {
    burgerMenu.classList.toggle("show");
}

let userimg = document.getElementById("Userimg");
let userFile = document.getElementById("UserFile");

userFile.addEventListener("change", function (){
    const read = new FileReader();
    
    read.addEventListener("load", () =>{
        localStorage.setItem("user-img", read.result);
    });
    read.readAsDataURL(this.files[0]); // // es imistvisaa rom URL is saxit gadasces localStorage s
});
userFile.addEventListener("change", (e) =>{
    userimg.src = URL.createObjectURL(e.target.files[0])
    
});
userimg.src = localStorage.getItem("user-img");
let result = document.querySelector(".result");
let button = document.querySelector("button");

button.addEventListener("click", () =>{
    let color = '#';
    // const random =  Math.random().toString(16).slice(2,8);
    // console.log(color += random);
    color += Math.random().toString(16).slice(2,8); // // toString i 16 =  [1,2,3,4,5,6,,7,8,9,A,B,C,D ...... 16 mde ] // // slice ti ki vwri 0 da . s da vtoveb 6 simbolos da maq color emateba  es # da feris kodi xdeba  
    result.style.backgroundColor = color;
    localStorage.setItem("color", color);
    // console.log(color)
});
const p = document.createElement("p");
p.innerText =  localStorage.getItem("userInf");
document.body.appendChild(p);
const pi = document.createElement("p");
pi.innerText =  localStorage.getItem("user");
document.body.appendChild(pi);