function pizzaSearch() {
    let indexInput, filter,searchTag,a,i,indexValue, cover ,conteiner  ;

    indexInput = document.getElementById("indexInput");
    filter = indexInput.value.toUpperCase();
    searchTag = document.getElementsByTagName("h4");
    cover = document.getElementsByClassName("cover");
  // // conteiner = document.getElementsByClassName("conteiner")

    for (i = 0; i < searchTag.length; i++) {
        a = searchTag[i].getElementsByTagName("a")[0];
        indexValue = a.textContent || a.innerText;
        if (indexValue.toUpperCase().indexOf(filter) > -1 ) {
            cover[i].style.display = "";
        }else{
            cover[i].style.display = "none";
        }
    }
}

const list = document.querySelector(".list"),
      items = document.querySelectorAll('.cover');

function filter(){
    list.addEventListener('click', event =>{
        const targetId = event.target.dataset.id
        console.log(targetId)

        switch(targetId){
            case 'all':
                getItems('cover')
                break
            case 'pizza':
                getItems(targetId)
                break
            case 'Beveridge':
                getItems(targetId)
                break
            case 'alco':
                getItems(targetId)
                break
           
        }
    })
    return
}
filter()
function getItems(className){
    items.forEach(item => {
        if(item.classList.contains(className)){
            item.style.display = 'block'
        }  else {
            item.style.display = 'none'
        }
    })
}




let ProfileImg = document.getElementById("profileImg");
ProfileImg.src = localStorage.getItem("user-img")
let profileResult = document.querySelector(".userImg")
profileResult.style.backgroundColor = localStorage.getItem("color");