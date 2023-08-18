/**
 Todo:
  move projects up and down
  rename projects
  deleting tasks and renaming tasks


  Bugs:
  checking and favoriting tasks under home tab dont work

 */



import styles from './style.css';
import {homeButtons,  menuButtonDOMHandler, projectLogicHandler, projectsDOMHandler } from './menu.js';
import { localStorageHandler } from './localStorage';
import { taskLogicHandler,taskDOMHandler } from './task';




const localStrgeHandler = new localStorageHandler()
localStrgeHandler.createProjectListArr()


const menubutton = document.querySelector('#menubutton');
const menuDropDown = document.querySelector('#menuDropDown');
const menuBtnDOMHandler = new menuButtonDOMHandler(menuDropDown);

const addProjectButton = document.querySelector('#AddProjectsButton')

const prjctLogicHandler = new projectLogicHandler()

const prjctDOMHandler = new projectsDOMHandler(document.querySelector('#ProjectsHolder'))

const tskLogicHandler = new taskLogicHandler()

const tskDOMHandler = new taskDOMHandler()

const homeBtns = new homeButtons()

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



localStrgeHandler.loadProjects()


prjctLogicHandler.addLogicToEditButtons()


prjctLogicHandler.fixEditButtonBug()
prjctLogicHandler.addLogicToEditDeleteButton()
prjctLogicHandler.addLogicToProject()
homeBtns.addLogicToAllHomeButtons(true,true,true,true)
homeBtns.allTasksButton()

tskLogicHandler.addNewTaskButtonLogic()




console.log('index.js working');

