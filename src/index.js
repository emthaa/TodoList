import styles from './style.css';
import { menuButtonDOMHandler, projectLogicHandler } from './menu.js';
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
const menuBtnDOMHandler = new menuButtonDOMHandler(menuDropDown);

const addProjectButton = document.querySelector('#AddProjectsButton')

const prjctLogicHandler = new projectLogicHandler()

menubutton.addEventListener('click', () => {
  menuBtnDOMHandler.menuDropDownFunction();
  
});

menubutton.addEventListener('mousedown', () =>{
  menubutton.style.transform = 'scale(.9)'
})

menubutton.addEventListener('mouseup', () =>{
  menubutton.style.transform = 'scale(1)'
})

addProjectButton.addEventListener('click', () => {
  prjctLogicHandler.addNewProjectButton()
});
prjctLogicHandler.addNewProjectButton()//make sure to get rid off this
console.log('index.js working');
