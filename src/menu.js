


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

export class projectLogicHandler{
    constructor(){

    }

    addButtonFunction(){
        console.log('add')
        const projectNameInput = document.querySelector('#projectCreatorHolderInput')
        const projectNameInputValue = projectNameInput.value
        const container = document.querySelector('#ProjectsHolder');
        const a = new projectsDOMHandler(container)
        a.createNewProject(projectNameInputValue)
        a.moveAddProjectButtonDown()

    }
    cancelButtonFunction(){
        const a = document.querySelector('#projectCreatorHolder')
        a.remove()
    }
    
    addLogicToAddButton(){
      const a = document.querySelector('#projectCreatorHolder')
      a.addEventListener('submit', () =>{ //add button functions goes to form, not submit button
        event.preventDefault();
        this.addButtonFunction()
      } )
    }

    addLogicToCancelButton(){
      const a = document.querySelector('#projectCreatorHolderCancelButton')
      a.addEventListener('click', () =>{ 
        this.cancelButtonFunction()
      } )
    }

    addNewProjectButton(){
      let doesProjectCreatorHolderExist = document.querySelector('#projectCreatorHolder');
      if (doesProjectCreatorHolderExist === null) {

        const ProjectsHolder = document.querySelector('#ProjectsHolder')
        let creatingNewProject = new projectsDOMHandler(ProjectsHolder)
        creatingNewProject.getProjectPrerequisites()
        creatingNewProject.moveAddProjectButtonDown()
        this.addLogicToAddButton()
        this.addLogicToCancelButton()
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
      projectCreatorHolderInput.placeholder = 'Enter Project Name'
      projectCreatorHolderTop.appendChild(projectCreatorHolderInput);
      projectCreatorHolderInput.id ='projectCreatorHolderInput'
      
      const projectCreatorHolderButtons = document.createElement('div');
      projectCreatorHolder.appendChild(projectCreatorHolderButtons); 
      projectCreatorHolderButtons.id = 'projectCreatorHolderButtons';
  
      const projectCreatorHolderAddButton = document.createElement('input');
      projectCreatorHolderAddButton.type = 'submit';
      projectCreatorHolderButtons.appendChild(projectCreatorHolderAddButton)
      projectCreatorHolderAddButton.value = 'Add'
      projectCreatorHolderAddButton.id = 'projectCreatorHolderAddButton'

      const projectCreatorHolderCancelButton = document.createElement('div')
      projectCreatorHolderButtons.appendChild(projectCreatorHolderCancelButton)
      projectCreatorHolderCancelButton.id = 'projectCreatorHolderCancelButton'
      projectCreatorHolderCancelButton.innerHTML = 'Cancel'
      
    }
    createNewProject(word){
      const projectHolder = document.createElement('div')
      projectHolder.className = 'projectHolder'
      this.whereToPutProject.appendChild(projectHolder)
    
      const projectImg = document.createElement('div')
      projectImg.className = 'projectImg'
      projectHolder.appendChild(projectImg)

      const projectText = document.createElement('p')
      projectText.className = 'projectText'
      projectHolder.appendChild(projectText)
      projectText.innerHTML = word
      const projectEditButton = document.createElement('div')
      projectEditButton.className = 'projectEditButton'
      projectHolder.appendChild(projectEditButton)

    }
    moveAddProjectButtonDown(){
      const container = document.querySelector('#ProjectsHolder');
      const addProjectButton = document.querySelector('#AddProjectsButton');
      container.appendChild(addProjectButton)

    }
  }
  
  
