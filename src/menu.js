


export class menuButtonDOMHandler{
    constructor(menuDropDown){
        this.menuDropDown = menuDropDown
    }
    menuDropDownFunction(){
        
        if (this.menuDropDown.style.opacity == 1 || this.menuDropDown.style.opacity == ''){
            this.menuDropDown.style.opacity = '0'
            this.menuDropDown.style.position = 'absolute'
            this.menuDropDown.style.pointerEvents = "none";
        }else{
            this.menuDropDown.style.opacity = '1'
            this.menuDropDown.style.position = 'static'
            this.menuDropDown.style.pointerEvents = "auto";
        }
    }
    
}