import { localStorageHandler } from "./localStorage"

export class taskDOMHandler{
    addNewTaskButtonDOM(){

        const addTaskButtonHere = document.querySelector('#right-side')
        const addTaskContainer = document.createElement('div')
        const newTaskPlus = document.createElement('div')
        const newTaskText = document.createElement('p')
    
        newTaskText.innerHTML = 'Add Task'

        addTaskButtonHere.appendChild(addTaskContainer)
        addTaskContainer.appendChild(newTaskPlus)
        addTaskContainer.appendChild(newTaskText)

        addTaskContainer.id = 'addTaskContainer'
        newTaskPlus.id = 'newTaskPlus'
        newTaskText.id = 'newTaskText'
        

    }
    newTaskPrerequisite(){
        const putTaskPrerequisiteHere = document.querySelector('#task-prerequisite')
        const formContainer = document.createElement('form')
        const formTitle = document.createElement('div')
        const formTitleInput = document.createElement('input')
        const detailsTitle = document.createElement('div')
        const detailsInput = document.createElement('textarea')
        const dateTitle = document.createElement('div')
        const dateInput  = document.createElement('input')
        const buttonHolder = document.createElement('div')
        const addButton = document.createElement('input')
        const cancelButton = document.createElement('div')


        formTitle.innerHTML = 'Title:'
        detailsTitle.innerHTML = 'Details(optional):'
        dateTitle.innerHTML = 'Date:'
        addButton.type = 'submit'
        addButton.value = 'Add'
        cancelButton.innerHTML = 'Cancel'
        dateInput.type = 'date'

        formTitleInput.placeholder = 'What to do?'
        detailsInput.placeholder = "eg: I'm just gonna procrastinate, aren't I?"
       
        putTaskPrerequisiteHere.appendChild(formContainer)
        formContainer.appendChild(formTitle)
        formContainer.appendChild(formTitleInput)
        formContainer.appendChild(detailsTitle)
        formContainer.appendChild(detailsInput)
        formContainer.appendChild(dateTitle)
        formContainer.appendChild(dateInput)
        formContainer.appendChild(buttonHolder)
        buttonHolder.appendChild(addButton)
        buttonHolder.appendChild(cancelButton)

        
        formContainer.id = 'formContainer'
        formTitle.id = 'formTitle'
        formTitleInput.id = 'formTitleInput'
        detailsTitle.id = 'detailsTitle'
        detailsInput.id = 'detailsInput'
        dateTitle.id = 'dateTitle'
        dateInput.id = 'dateInput'
        addButton.className = 'addButton'
        cancelButton.className = 'cancelButton'
        cancelButton.id = 'taskCancel'
        buttonHolder.id = 'newTaskButtonHolder'
        




    }

    changeCheckBox(checkBox,isCheck,title,description){
        if(isCheck == false){
        checkBox.style.border = '2px solid #71b771'
        checkBox.style.backgroundImage = "url('../imgs/checkmark.svg')"
        checkBox.style.backgroundSize = 'cover'
        title.style.textDecoration = 'line-through'
        description.style.textDecoration = 'line-through'
        }else{
            checkBox.style.border = '2px solid white'
            checkBox.style.backgroundImage = "none"
            checkBox.style.backgroundSize = 'cover'
            title.style.textDecoration = 'none'
            description.style.textDecoration = 'none'
        }

    }

    changeFavorite(favoriteStar,favoriteChecked){
        if(favoriteChecked == true){
            favoriteStar.style.backgroundImage = "url('../imgs/filledstar.png')"
        }else{
            favoriteStar.style.backgroundImage = "url('../imgs/star.png')"
        }
    }
    
    createDOMTask(checked,titlee,desc,datee,favoriteChecked){

        const putTaskHere = document.querySelector('#tasks')

        const taskContainer = document.createElement('div')
        
        const taskContainerTop = document.createElement('div')
        const checkBox = document.createElement('div')
        const title = document.createElement('div')
        const date = document.createElement('div')
        const taskButtons = document.createElement('div')
        const favorite = document.createElement('div')
        const edit = document.createElement('div')
        const taskContainerTopLeft = document.createElement('div')
        const taskContainerTopRight = document.createElement('div')


        const taskContainerBottom = document.createElement('div')
        const description = document.createElement('div')

        putTaskHere.appendChild(taskContainer)

        taskContainer.appendChild(taskContainerTop)
        taskContainer.appendChild(taskContainerBottom)
        taskContainerTop.appendChild(taskContainerTopLeft)
        taskContainerTop.appendChild(taskContainerTopRight)
        taskContainerTopLeft.appendChild(checkBox)
        taskContainerTopLeft.appendChild(title)
        taskContainerTopRight.appendChild(date)
        taskContainerTopRight.appendChild(taskButtons)
        taskButtons.appendChild(favorite)
        taskButtons.appendChild(edit)

        taskContainerBottom.appendChild(description)

        taskContainer.className = 'taskContainer'
        checkBox.className = 'checkBox'
        title.className = 'taskTitle'
        date.className = 'taskDate'
        favorite.className = 'taskFavorite'
        edit.className = 'taskEdit'
        taskContainerBottom.className = 'taskContainerBottom'
        description.className = 'taskDescription'
        taskContainerTop.className = 'taskContainerTop'
        taskButtons.className = 'taskButtons'
        taskContainerTopRight.className = 'taskContainerTopRight'
        taskContainerTopLeft.className = 'taskContainerTopLeft'
        title.innerHTML = titlee
        description.innerHTML = desc
        if (datee == ""){
            date.innerHTML = 'No Due Date'
        }else{
            date.innerHTML = datee
        }
        

        edit.style.backgroundImage = "url('../imgs/edit.png')"

        if(checked == true){
            checkBox.style.border = '2px solid #71b771'
            checkBox.style.backgroundImage = "url('../imgs/checkmark.svg')"
            checkBox.style.backgroundSize = 'cover'
            title.style.textDecoration = 'line-through'
            description.style.textDecoration = 'line-through'

        }
        if(favoriteChecked == true){
            favorite.style.backgroundImage = "url('../imgs/filledstar.png')"
        }else{
            favorite.style.backgroundImage = "url('../imgs/star.png')"
        }
    }


}

export class taskLogicHandler{
    addNewTaskButtonLogic(){
        const a = new taskDOMHandler()
        this.addNewTaskButton()
        this.addLogicToTaskCancelBtn()
        this.newTaskPrerequisiteSubmit()

    }

    cleanUpTasks(){
        const allTasks = document.querySelectorAll('.taskContainer')
        if(allTasks !== null){
            for(let i =0; i<allTasks.length;i++){
                allTasks[i].remove()
            }
        }
        const addTaskButton = document.querySelector('#addTaskContainer')
        if(addTaskButton !== null){
            addTaskButton.remove()
        }
    }

    deleteTaskPrerequisite(){
        document.querySelector('#formContainer').remove()
    }
    addLogicToTaskCancelBtn(){
        document.querySelector('#taskCancel').addEventListener('click', this.deleteTaskPrerequisite)
    }
    spawnTaskPrerequisiteLogic(){
        document.querySelector('#addTaskContainer').addEventListener('click', () =>{
            
            if(document.querySelector('#formContainer') === null){
                const a = new taskDOMHandler()
                a.newTaskPrerequisite()
                this.newTaskPrerequisiteSubmit()
                this.addLogicToTaskCancelBtn()
            }
        })
    }
    addNewTaskButton(){
        const a = new taskDOMHandler()
        a.addNewTaskButtonDOM()
        this.spawnTaskPrerequisiteLogic()

        
    }

    newTaskPrerequisiteSubmit(){
        document.querySelector('#formContainer').addEventListener('submit', () =>{
            event.preventDefault();
            
            const formTitle = document.querySelector('#formTitleInput')
            const formTitleInput = formTitle.value
            const details = document.querySelector('#detailsInput')
            const detailsInput = details.value
            const dueDate = document.querySelector('#dateInput')
            const dueDateInput = dueDate.value

            const l = new localStorageHandler()
            l.addTaskToProject(formTitleInput,detailsInput,dueDateInput,localStorage.getItem('lastProjectIndexClickedOn'),false,false)
            const a = new taskDOMHandler()
            a.createDOMTask(false,formTitleInput,detailsInput,dueDateInput,false)
            this.addLogicToTaskButtons()
            document.querySelector('#formContainer').remove()
        })
    }
    createTaskandStoreIt(completed,title,description,dateDue,favoriteChecked){
        const a = new taskDOMHandler()
        a.createDOMTask(completed,title,description,dateDue,favoriteChecked)

    }

    checkTaskLogic(){
        const checkBoxes = document.querySelectorAll('.checkBox')
        const taskTitles = document.querySelectorAll('.taskTitle')
        const taskDesc = document.querySelectorAll('.taskDescription')
        const j = localStorage.getItem('lastProjectIndexClickedOn')
        const tDOM = new taskDOMHandler()
        const a = localStorage.getItem('ProjectList')
        const newa = JSON.parse(a)

        for(let i = 0;i<checkBoxes.length;i++){
            checkBoxes[i].addEventListener('click' ,() =>{
                let isChecked = newa[j].tasks[i].checked
               if(isChecked == false){

                tDOM.changeCheckBox(checkBoxes[i],isChecked,taskTitles[i],taskDesc[i])

                newa[j].tasks[i].checked = true
                
                const updatedstring = JSON.stringify(newa)
                localStorage.setItem('ProjectList',updatedstring)

               }else if(isChecked == true){
                
                tDOM.changeCheckBox(checkBoxes[i],isChecked,taskTitles[i],taskDesc[i])
                
                newa[j].tasks[i].checked = false
                
                const updatedstring = JSON.stringify(newa)
                localStorage.setItem('ProjectList',updatedstring)
               }
            })
        }
    }

    favoriteTaskLogic() {
        const favoriteStars = document.querySelectorAll('.taskFavorite');
        const j = localStorage.getItem('lastProjectIndexClickedOn');
        const tDOM = new taskDOMHandler();
        const a = localStorage.getItem('ProjectList');
        const newa = JSON.parse(a);
      
        for (let i = 0; i < favoriteStars.length; i++) {
            favoriteStars[i].addEventListener('click', () => {
                const task = newa[j].tasks[i];
                task.favorite = !task.favorite;
              
                // Update the UI
                tDOM.changeFavorite(favoriteStars[i], task.favorite);
              
                // Update the task's favorite property in local storage
                const updatedString = JSON.stringify(newa);
                localStorage.setItem('ProjectList', updatedString);
              });
        }
    }

    addLogicToTaskButtons(){
        this.checkTaskLogic()
        this.favoriteTaskLogic()
    }

}
