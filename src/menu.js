export function menuButtonFunction(){
    const menuDropDown = document.querySelector('#menuDropDown')
    if (menuDropDown.style.opacity == 1){
        menuDropDown.style.opacity = '0'
        menuDropDown.style.position = 'absolute'
        menuDropDown.style.pointerEvents = "none";
    }else{
        menuDropDown.style.opacity = '1'
        menuDropDown.style.position = 'static'
        menuDropDown.style.pointerEvents = "auto";
    }
}


