
import { localStorageHandler } from "./localStorage";
import { taskLogicHandler, taskDOMHandler} from "./task";

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
    this.addLogicToPrjctEditButton();
    
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
        
        this.addLogicToPrjctEditButton()
      },
      false
    );

    a.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {  
        this.addButtonFunction();
        this.addLogicToEditButtons()
        this.addLogicToEditDeleteButton()
        this.addLogicToPrjctEditButton()
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
    this.addLogicToEditDeleteButton(); //<------ REMEMBER THIS
    
    
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
      const h = new localStorageHandler();  
      h.deleteProject(button);
      
      

      // Remove the project and update the project list
      button.parentNode.parentNode.parentNode.remove();
      
      this.addLogicToProject(); // Re-add logic to the remaining project elements

    });
  }
}

addLogicToProject(){ //update projectlist
  const taskHeader = document.querySelector('#task-header');
  const projectList = document.querySelectorAll('.projectHolder')
  const projectListText = document.querySelectorAll('.projectText')
  const projectEditButtons = document.querySelectorAll('.projectEditButton'
  )
  for(let i = 0; i < projectList.length;i++){
    projectList[i].addEventListener('click', () =>{
      taskHeader.innerHTML = projectListText[i].textContent
      localStorage.setItem('lastProjectIndexClickedOn',i)
      const a = new taskLogicHandler()
      const l = new localStorageHandler()
      a.cleanUpTasks()
      a.addNewTaskButton()
      l.loadProjectsTasks(i)
      a.addLogicToTaskButtons(true)

    })
    projectEditButtons[i].addEventListener('click', () =>{
      taskHeader.innerHTML = projectListText[i].textContent
      localStorage.setItem('lastProjectIndexClickedOn',i)
      const a = new taskLogicHandler()
      const l = new localStorageHandler()
      a.cleanUpTasks()
      a.addNewTaskButton()
      l.loadProjectsTasks(i)
      a.addLogicToTaskButtons(true)

    })

}


  

}

clearProjects(){
  const projectHolders = document.querySelectorAll('.projectHolder')
  for(let i = 0;i<projectHolders.length; i++){
    projectHolders[i].remove()
  }
}

addLogicToPrjctEditCancel(){
  const a = document.querySelector('#projectEditHolderCancelButton')
  a.addEventListener('click' ,() =>{
    this.clearProjects() //add logic
    const h = new localStorageHandler()
    h.loadProjects()
    this.addLogicToProject()
    this.addLogicToEditButtons()
    this.addLogicToEditDeleteButton()
    this.addLogicToPrjctEditButton()
    
  })

}

addLogicToPrjctEditAdd(){
  const button = document.querySelector('.projectEditAddButton')
  const newProjectValue = document.querySelector('#projectEditHolderInput')
  button.addEventListener('click',()=>{
    event.preventDefault();
    const h = new localStorageHandler()
    h.changeProject(localStorage.getItem('lastProjectIndexClickedOn'),newProjectValue.value )

    this.clearProjects()
    h.loadProjects()
    this.addLogicToEditButtons()
    this.fixEditButtonBug()
    this.addLogicToEditDeleteButton()
    this.addLogicToProject()
    this.addLogicToPrjctEditButton()

    //get value
    // change project name in storage
    //refresh project
  })
}



addLogicToPrjctEditButton(){
  const allRenameButtons = document.querySelectorAll('.renameButton')
  const projects = document.querySelectorAll('.projectHolder')
  for(let i = 0; i< allRenameButtons.length; i++){
    allRenameButtons[i].addEventListener('click',()=>{
      const l = new projectsDOMHandler(projects[i]) 
      while (projects[i].firstChild) {
        projects[i].removeChild(projects[i].firstChild); 
    }  

      l.getProjectPrerequisites(true)  //remove everything in each project
      projects[i].style.height = '125px' //cant have two edits at the same time
      projects[i].style.paddingRight = '25px'
      document.querySelector('#projectEditHolder').style.width = '100%'

// different add and cancel buttons
this.addLogicToPrjctEditAdd()
      this.addLogicToPrjctEditCancel()   
//<----- project edit prerequsite here
    })
}
}

}
export class projectsDOMHandler {
  constructor(whereToPutProject) {
    this.whereToPutProject = whereToPutProject;
  }

  getProjectPrerequisites(editProject) {
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
  

    //seperate project form HERE <------------
      if(editProject == true){
        projectCreatorHolder.id = 'projectEditHolder';
        projectCreatorHolderInput.id = 'projectEditHolderInput';
        projectCreatorHolderAddButton.className = 'projectEditAddButton';
        projectCreatorHolderCancelButton.id = 'projectEditHolderCancelButton';
    
    }

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
  addLogicToAllHomeButtons(wantAllTasks,wantToday,wantWeek,wantImportant){
    const k = new taskLogicHandler
    if(wantAllTasks == true){
      document.querySelector('#allTasks').addEventListener('click', () =>{
        k.cleanUpTasks()
        this.allTasksButton()
      })
    }
    if(wantToday == true){
      document.querySelector('#Today').addEventListener('click', () =>{
        k.cleanUpTasks()
        this.todayButton()
      })
    }
    if(wantWeek == true){
      document.querySelector('#sevendays').addEventListener('click', () =>{
        k.cleanUpTasks()
        this.weeklyButton()
      })
    }
    if(wantImportant == true){
      document.querySelector('#Important').addEventListener('click' ,() =>{
        k.cleanUpTasks()
        this.favoriteButton()
      })
    }
  }
  allTasksButton(){
    const c = new localStorageHandler()
    const loadedTasks = c.loadAllTasks()
    const a = new taskDOMHandler
    const b = new taskLogicHandler
    console.log(loadedTasks)
    loadedTasks.forEach((task) => a.createDOMTask(task.checked,task.title,task.details,task.date,task.favorite,true))
    b.addLogicToTaskButtons(false)
    document.querySelector('#task-header').innerHTML = 'All Tasks'
    document.querySelector('#addTaskContainer').remove()
    
    
  }
  todayButton(){
    const k = new taskLogicHandler
    k.cleanUpTasks()
    
      document.querySelector('#task-header').innerHTML = 'Today'

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    today = yyyy + '-' + mm + '-' + dd;

    const b = new taskLogicHandler
    const h = new taskDOMHandler
    
    const a = localStorage.getItem('ProjectList')
    const newa = JSON.parse(a)

    if (newa) {
      // Loop through projects
      for (const project of newa) {
          
          // Loop through tasks within each project
          for (const task of project.tasks) {
              if(today == task.date){
                h.createDOMTask(task.checked,task.title,task.details,task.date,task.favorite,true)
              }
          }
      }

  }

  document.querySelector('#task-header').innerHTML = 'Today'
  b.addLogicToTaskButtons(false)

    console.log(document.querySelector('#task-header').innerHTML)
  }

  weeklyButton(){
    const currentDate = new Date();
    const next7Days = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() + 7);
    const b = new taskLogicHandler
    const h = new taskDOMHandler
    
    const a = localStorage.getItem('ProjectList')
    const newa = JSON.parse(a)

    if (newa) {
      // Loop through projects
      for (const project of newa) {
          
          // Loop through tasks within each project
          for (const task of project.tasks) {
            let inputDate = new Date(task.date);
              if(inputDate >= currentDate && inputDate <= next7Days){
                h.createDOMTask(task.checked,task.title,task.details,task.date,task.favorite,true)
              }
          }
      }

  }
  b.addLogicToTaskButtons(false)
  document.querySelector('#task-header').innerHTML = 'Next 7 Days'

 
    
  }
  favoriteButton(){
    const b = new taskLogicHandler
    const h = new taskDOMHandler
    
    const a = localStorage.getItem('ProjectList')
    const newa = JSON.parse(a)

    if (newa) {
      // Loop through projects
      for (const project of newa) {
          
          // Loop through tasks within each project
          for (const task of project.tasks) {
              if(task.favorite == true){
                h.createDOMTask(task.checked,task.title,task.details,task.date,task.favorite,true)
              }
          }
      }

  }
  b.addLogicToTaskButtons(false)
  document.querySelector('#task-header').innerHTML = 'Important'

 
  }
  
} 
