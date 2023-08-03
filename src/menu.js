
import { localStorageHandler } from "./localStorage";
import { taskLogicHandler } from "./task";

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

export class projectLogicHandler {
  constructor() {}

  addButtonFunction() {

    const projectNameInput = document.querySelector('#projectCreatorHolderInput');
    const projectNameInputValue = projectNameInput.value;
    const container = document.querySelector('#ProjectsHolder');
    const a = new projectsDOMHandler(container);
    const projectCreatorHolder = document.querySelector('#projectCreatorHolder');
    const puttingProjectHere = document.querySelector('#Projects');
    const h = new localStorageHandler()

    a.createNewProject(projectNameInputValue, puttingProjectHere);
    h.createProjectAndAddToProjectList(projectNameInputValue)
    a.moveAddProjectButtonDown();
    this.addLogicToProject()
    this.fixEditButtonBug()
    projectCreatorHolder.remove();
  }

  cancelButtonFunction() {
    const projectCreatorHolder = document.querySelector('#projectCreatorHolder');
    const puttingProjectHere = document.querySelector('#Projects');
  
    projectCreatorHolder.remove();
  
    // Re-attach event listeners to existing edit buttons
    const a = new projectsDOMHandler(puttingProjectHere);
    this.addLogicToEditButtons();
    this.addLogicToEditDeleteButton();
  }

  addLogicToAddButton() {
    const a = document.querySelector('#projectCreatorHolder');
    a.addEventListener(
      'submit',
      (event) => {
        event.preventDefault();
        this.addButtonFunction();
        this.addLogicToEditButtons()
        this.addLogicToEditDeleteButton()
      },
      false
    );

    a.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {  
        this.addButtonFunction();
        this.addLogicToEditButtons()
        this.addLogicToEditDeleteButton()
      }
    });
  }

  addLogicToCancelButton() {
    const a = document.querySelector('#projectCreatorHolderCancelButton');
    a.addEventListener('click', () => {
      this.cancelButtonFunction();
    });
  }

addNewProjectButton() {
  let doesProjectCreatorHolderExist = document.querySelector('#projectCreatorHolder');
  if (doesProjectCreatorHolderExist === null) {
    const ProjectsHolder = document.querySelector('#ProjectsHolder');
    let creatingNewProject = new projectsDOMHandler(ProjectsHolder);
    creatingNewProject.getProjectPrerequisites();
    creatingNewProject.moveAddProjectButtonDown();
    this.addLogicToAddButton();
    this.addLogicToCancelButton();
    this.addLogicToEditButtons(); 
    this.addLogicToEditDeleteButton(); 
    
  }
}


addLogicToEditButtons() {
  const allEditButtons = document.querySelectorAll('.projectEditButton');
  let openContainer = null; 

  allEditButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
      event.stopPropagation();
      const a = new projectsDOMHandler();
      const container = button.querySelector('.projectEditButtonsContainer');

      if (openContainer !== container) {

        if (openContainer) {
          openContainer.style.opacity = '0';
          openContainer.style.position = 'absolute';
          openContainer.style.pointerEvents = 'none';
        }


        a.projectEditButtonFunction(button);
        openContainer = container;
      } else {
      
        container.style.opacity = '0';
        container.style.position = 'absolute';
        container.style.pointerEvents = 'none';
        openContainer = null;
      }
    });
  });


  document.addEventListener('click', (event) => {
    const target = event.target;
    const projectEditButtonsContainers = document.querySelectorAll('.projectEditButtonsContainer');

    projectEditButtonsContainers.forEach((container) => {
      if (!container.contains(target)) {
        container.style.opacity = '0';
        container.style.position = 'absolute';
        container.style.pointerEvents = 'none';

        if (openContainer === container) {
          openContainer = null;
        }
      }
    });
  });
}

fixEditButtonBug(){
  const projectEditButtonsContainer = document.querySelectorAll('.projectEditButtonsContainer');
  for(let i = 0; i<projectEditButtonsContainer.length;i++){
    projectEditButtonsContainer[i].style.opacity = '1'
    projectEditButtonsContainer[i].style.position = 'relative'
    projectEditButtonsContainer[i].style.pointerEvents = "auto";
    projectEditButtonsContainer[i].style.opacity = '0'
    projectEditButtonsContainer[i].style.position = 'absolute'
    projectEditButtonsContainer[i].style.pointerEvents = "none";
  }
  

}

addLogicToEditDeleteButton() {
  const allEditDeleteButtons = document.querySelectorAll('.deleteButton');
  for (let i = 0; i < allEditDeleteButtons.length; i++) {
    const button = allEditDeleteButtons[i];
    button.addEventListener('click', () => {

      const h = new localStorageHandler()  //giving deleteproject wrong index
      h.deleteProject(button)
      button.parentNode.parentNode.parentNode.remove();
      this.addLogicToProject()
    });
  }
}

addLogicToProject(){ //update projectlist
  const taskHeader = document.querySelector('#task-header');
  const projectList = document.querySelectorAll('.projectHolder')
  const projectListText = document.querySelectorAll('.projectText')
  for(let i = 0; i < projectList.length;i++){
    projectList[i].addEventListener('click', () =>{
      taskHeader.innerHTML = projectListText[i].textContent
      localStorage.setItem('lastProjectIndexClickedOn',i)
      const a = new taskLogicHandler()
      const l = new localStorageHandler()
      a.cleanUpTasks()
      a.addNewTaskButton()
      l.loadProjectsTasks(i)
      a.addLogicToTaskButtons()
      //delete tasks when clicking new project and add tak button
    })
}
  

}

}
export class projectsDOMHandler {
  constructor(whereToPutProject) {
    this.whereToPutProject = whereToPutProject;
  }

  getProjectPrerequisites() {
    const projectCreatorHolder = document.createElement('form');
    this.whereToPutProject.appendChild(projectCreatorHolder);
    projectCreatorHolder.id = 'projectCreatorHolder';

    const projectCreatorHolderTop = document.createElement('form');
    projectCreatorHolder.appendChild(projectCreatorHolderTop);
    projectCreatorHolderTop.id = 'projectCreatorHolderTop';

    const projectCreatorHolderImage = document.createElement('form');
    projectCreatorHolderTop.appendChild(projectCreatorHolderImage);
    projectCreatorHolderImage.id = 'projectCreatorHolderImage';

    const projectCreatorHolderInput = document.createElement('input');
    projectCreatorHolderInput.type = 'text';
    projectCreatorHolderInput.placeholder = 'Enter Project Name';
    projectCreatorHolderInput.maxLength = '24';
    projectCreatorHolderTop.appendChild(projectCreatorHolderInput);
    projectCreatorHolderInput.id = 'projectCreatorHolderInput';

    const projectCreatorHolderButtons = document.createElement('div');
    projectCreatorHolder.appendChild(projectCreatorHolderButtons);
    projectCreatorHolderButtons.id = 'projectCreatorHolderButtons';

    const projectCreatorHolderAddButton = document.createElement('input');
    projectCreatorHolderAddButton.type = 'submit';
    projectCreatorHolderButtons.appendChild(projectCreatorHolderAddButton);
    projectCreatorHolderAddButton.value = 'Add';
    projectCreatorHolderAddButton.className = 'addButton';

    const projectCreatorHolderCancelButton = document.createElement('div');
    projectCreatorHolderButtons.appendChild(projectCreatorHolderCancelButton);
    projectCreatorHolderCancelButton.className = 'cancelButton';
    projectCreatorHolderCancelButton.innerHTML = 'Cancel';
    projectCreatorHolderCancelButton.id = 'projectCreatorHolderCancelButton'
  



  }

  createNewProject(word, putProjectHere) {
    const projectHolder = document.createElement('div');
    projectHolder.className = 'projectHolder';
    putProjectHere.appendChild(projectHolder);

    const projectImg = document.createElement('div');
    projectImg.className = 'projectImg';
    projectHolder.appendChild(projectImg);

    const projectText = document.createElement('p');
    projectText.className = 'projectText';
    projectHolder.appendChild(projectText);
    projectText.innerHTML = word;

    const projectEditButton = document.createElement('div');
    projectEditButton.className = 'projectEditButton';
    projectHolder.appendChild(projectEditButton);

    const projectEditButtonsContainer = document.createElement('div')
    projectEditButtonsContainer.className = 'projectEditButtonsContainer';
    projectEditButton.appendChild(projectEditButtonsContainer);
  
    const renameButton = document.createElement('button')
    renameButton.className = 'renameButton';
    projectEditButtonsContainer.appendChild(renameButton);
    renameButton.innerHTML = 'Rename'

    const deleteButton = document.createElement('button')
    deleteButton.className = 'deleteButton';
    projectEditButtonsContainer.appendChild(deleteButton);
    deleteButton.innerHTML = 'Delete'


  }


  moveAddProjectButtonDown() {
    const container = document.querySelector('#ProjectsHolder');
    const addProjectButton = document.querySelector('#AddProjectsButton');
    container.appendChild(addProjectButton);
  }

  projectEditButtonFunction(btn) {
    const projectEditButtonsContainer = btn.querySelector('.projectEditButtonsContainer');

    if (projectEditButtonsContainer.style.opacity == 1 || projectEditButtonsContainer.style.opacity == ' '){
      projectEditButtonsContainer.style.opacity = '0'
      projectEditButtonsContainer.style.position = 'absolute'
      projectEditButtonsContainer.style.pointerEvents = "none";


      
  }else{
      projectEditButtonsContainer.style.opacity = '1'
      projectEditButtonsContainer.style.position = 'relative'
      projectEditButtonsContainer.style.pointerEvents = "auto";
    }
  }
}

export class homeButtons{
  allTasksButton(){
    document.querySelector('#task-header').innerHTML = 'All Tasks'
    document.querySelector('#addTaskContainer').remove()
    //load all tasks
  }
} 
