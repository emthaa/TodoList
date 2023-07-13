import styles from './style.css';
import { menuButtonDOMHandler, projectLogicHandler, projectsDOMHandler } from './menu.js';
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

const prjctDOMHandler = new projectsDOMHandler(document.querySelector('#ProjectsHolder'))


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


document.addEventListener('click', function(event) {
  const clickedElement = event.target;
  const projectEditButton = document.querySelector('.projectEditButton')

});

prjctDOMHandler.createNewProject('test 1',document.querySelector('#Projects'))
prjctDOMHandler.createNewProject('test 2',document.querySelector('#Projects'))
prjctDOMHandler.createNewProject('test 3',document.querySelector('#Projects'))
prjctLogicHandler.addLogicToEditButtons()
prjctLogicHandler.addLogicToEditDeleteButton()

console.log('index.js working');

