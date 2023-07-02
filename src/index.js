import styles from './style.css';
import { menuButtonDOMHandler } from './menu.js';
class TodoInfoHolder{
    constructor(title,description,dueDate,priority){
        this.title = title
        this.description = description
        this.dueDate = dueDate
        this.priority = priority
    }
}
const menubutton = document.querySelector('#menubutton');
const menuDropDown = document.querySelector('#menuDropDown');
const test = new menuButtonDOMHandler(menuDropDown);

menubutton.addEventListener('click', () => {
  test.menuDropDownFunction();
});

menubutton.addEventListener('mousedown', () =>{
  menubutton.style.transform = 'scale(.9)'
})

menubutton.addEventListener('mouseup', () =>{
  menubutton.style.transform = 'scale(1)'
})

console.log('index.js working');
