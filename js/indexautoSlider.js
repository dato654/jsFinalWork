let indexSlider = 0;
automaticslider();
function automaticslider(){
    let i;
    let slide = document.getElementsByClassName('box');
    let Num = document.getElementsByClassName('Num');
    
    for (i = 0; i < slide.length; i++) {
        slide[i].style.display = "none";
    }
    
    indexSlider = indexSlider + 1;

    if(indexSlider > slide.length){
        indexSlider = 1;
    };

    for (i = 0; i < Num.length; i++) {
        Num[i].className = Num[i].className.replace(" active", "")
    };
    
    slide[indexSlider-1].style.display = "block";
    Num[indexSlider-1].className += " active";
    
    setTimeout(automaticslider,9000)
}