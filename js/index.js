function loading(){
    let loadingDiv = document.getElementById("center")
    let conteinerDiv = document.getElementById("conteiner")
    
    loadingDiv.style.display = "block"
    
    conteinerDiv.style.display = "none"
    
    setTimeout(function(){
        
        loadingDiv.style.display = "none"
        
        conteinerDiv.style.display = "block"
        
    },2000)
}
    loading()
let burgerMenu = document.getElementById("burgerMenu");
function toggleMenu() {
    burgerMenu.classList.toggle("show");
}