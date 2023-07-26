/**
 Todo:
 move projects up and down

 */



import styles from './style.css';
import { menuButtonDOMHandler, projectLogicHandler, projectsDOMHandler } from './menu.js';
import { localStorageHandler } from './localStorage';
import { taskLogicHandler } from './task';

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

const tskLogicHandler = new taskLogicHandler()

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




const localStrgeHandler = new localStorageHandler()
localStrgeHandler.createProjectListArr()
localStrgeHandler.loadProjects()

prjctLogicHandler.addLogicToEditButtons()
prjctLogicHandler.addLogicToEditDeleteButton()
prjctLogicHandler.addLogicToProject()
tskLogicHandler.addNewTaskButtonLogic()
prjctLogicHandler.fixEditButtonBug()
console.log('index.js working');

