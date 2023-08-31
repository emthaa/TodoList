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
    newTaskPrerequisite(putTaskPreHere,editForm){
        
        const putTaskPrerequisiteHere = putTaskPreHere
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
        
        if(editForm == true){
            addButton.value = 'Change'
            formContainer.id = 'editTaskContainer'
            addButton.className = 'taskEditAddButton'
            cancelButton.className = 'taskEditCancelButton'
            formTitleInput.id = 'formEditTitleInput'
            detailsInput.id = 'detailsEditInput'
            dateInput.id = 'dateEditInput'


        }else if(editForm == false){
            addButton.value = 'Add'
            formContainer.id = 'formContainer'
        
        }



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
    
    createDOMTask(checked,titlee,desc,datee,favoriteChecked,bland){
        if(bland == true){
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
            taskContainerTopLeft.appendChild(title)
            taskContainerTopRight.appendChild(date)

    
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
            
            date.style.marginRight = '15px'
            description.style.marginLeft = '10px'
            
            
        }else{
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

    taskEditDOM(editButton){
        const taskRenameButton = document.createElement('button')
        const taskDeleteButton = document.createElement('button')
        const taskEditsButtonHolder = document.createElement('div')

        taskEditsButtonHolder.className = 'taskEditsButtonHolder'
        taskRenameButton.className = 'taskRenameButton'
        taskDeleteButton.className = 'taskDeleteButton'

        taskEditsButtonHolder.appendChild(taskRenameButton)
        taskEditsButtonHolder.appendChild(taskDeleteButton)
        taskRenameButton.innerHTML = 'Edit'
        taskDeleteButton.innerHTML = 'Delete'
        editButton.appendChild(taskEditsButtonHolder)




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
                a.newTaskPrerequisite(document.querySelector('#task-prerequisite'),false)
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
            this.addLogicToTaskButtons(true)
            document.querySelector('#formContainer').remove()
        })
    }
    createTaskandStoreIt(completed,title,description,dateDue,favoriteChecked){
        const a = new taskDOMHandler()
        a.createDOMTask(completed,title,description,dateDue,favoriteChecked)

    }

    checkTaskLogic(isProject){
        const checkBoxes = document.querySelectorAll('.checkBox')
        const taskTitles = document.querySelectorAll('.taskTitle')
        const taskDesc = document.querySelectorAll('.taskDescription')
        const j = localStorage.getItem('lastProjectIndexClickedOn')
        const tDOM = new taskDOMHandler()
        
        if(isProject == true){
        for(let i = 0;i<checkBoxes.length;i++){
            checkBoxes[i].addEventListener('click' ,() =>{
                const a = localStorage.getItem('ProjectList')
                const newa = JSON.parse(a)
                let isChecked = newa[j].tasks[i].checked
                let task = newa[j].tasks[i]
                tDOM.changeCheckBox(checkBoxes[i],isChecked,taskTitles[i],taskDesc[i])

                newa[j].tasks[i].checked = !newa[j].tasks[i].checked
                
                const updatedstring = JSON.stringify(newa)
                localStorage.setItem('ProjectList',updatedstring)


               
            })
        }
    }else if(isProject == false){
        for (let i = 0; i < checkBoxes.length; i++) {
            checkBoxes[i].addEventListener('click', () => {

            const a = localStorage.getItem('ProjectList')
            const newa = JSON.parse(a)

            if (newa) {

                newa.forEach((project, projectIndex) => {
                    

                    project.tasks.forEach((task, taskIndex) => {
                        if(i == projectIndex+taskIndex){
                            task.checked = !task.checked
                            tDOM.changeCheckBox(checkBoxes[i], !task.checked,taskTitles[i],taskDesc[i])

                            const updatedString = JSON.stringify(newa);
                            localStorage.setItem('ProjectList', updatedString);
                        }
                    }
            )}

            )}
            
                

              });
        }
    }
    }

    favoriteTaskLogic(isProject) {

        const favoriteStars = document.querySelectorAll('.taskFavorite');
        const tDOM = new taskDOMHandler();

        if(isProject == true){
        const j = localStorage.getItem('lastProjectIndexClickedOn');
        

        for (let i = 0; i < favoriteStars.length; i++) {
            favoriteStars[i].addEventListener('click', () => {
                const a = localStorage.getItem('ProjectList');
                const newa = JSON.parse(a);
                const task = newa[j].tasks[i];
                task.favorite = !task.favorite;
              
                // Update the UI
                tDOM.changeFavorite(favoriteStars[i], task.favorite);
                
                // Update the task's favorite property in local storage
                const updatedString = JSON.stringify(newa);
                localStorage.setItem('ProjectList', updatedString);
              });
        }
    }else if(isProject == false){
        for (let i = 0; i < favoriteStars.length; i++) {
            favoriteStars[i].addEventListener('click', () => {
            let number = 0;
            const a = localStorage.getItem('ProjectList')
            const newa = JSON.parse(a)

            if (newa) {

                newa.forEach((project, projectIndex) => {
                    

                    project.tasks.forEach((task, taskIndex) => {
                        if(i == projectIndex+taskIndex){
                            task.favorite = !task.favorite
                            tDOM.changeFavorite(favoriteStars[i], task.favorite)

                            const updatedString = JSON.stringify(newa);
                            localStorage.setItem('ProjectList', updatedString);
                        }
                    }
            )}

            )}
            
                

              });
        }
    }

    }

    addLogicToTaskButtons(isProject){
        this.checkTaskLogic(isProject)
        this.favoriteTaskLogic(isProject)
        this.addLogicToTaskEditBtns()
    }
    taskDeleteButton(){
        const lastProjectIndexClickedOn = localStorage.getItem('lastProjectIndexClickedOn')
        const lastTaskIndexClickedOn = localStorage.getItem('lastTaskIndexClickedOn')
        const allTasksOnScreen = document.querySelectorAll('.taskContainer')
        const h = new localStorageHandler()
        h.deleteTask(lastProjectIndexClickedOn,lastTaskIndexClickedOn)
        allTasksOnScreen[lastTaskIndexClickedOn].remove()
        this.addLogicToTaskButtons(true)
        
    }
    addLogicToTaskEditCancelBtn(){

        document.querySelector('.taskEditCancelButton').addEventListener('click', () =>{
            const a = new taskLogicHandler()
            const l = new localStorageHandler()  //refreshes tasks
            a.cleanUpTasks()
            a.addNewTaskButton()
            l.loadProjectsTasks(localStorage.getItem('lastProjectIndexClickedOn'))
            a.addLogicToTaskButtons(true)
        })
    }
    addLogicToTaskEditAddBtn(){
        const taskEditAddButton = document.querySelector('.taskEditAddButton')
        const lastProjectIndexClickedOn = localStorage.getItem('lastProjectIndexClickedOn')
        const lastTaskIndexClickedOn = localStorage.getItem('lastTaskIndexClickedOn')
        taskEditAddButton.addEventListener('click', ()=>{ 
            
            const formTitle = document.querySelector('#formEditTitleInput')
            const formDetails = document.querySelector('#detailsEditInput')
            const formDate = document.querySelector('#dateEditInput')
            event.preventDefault();
            const h = new localStorageHandler()
            h.changeTask(lastProjectIndexClickedOn,lastTaskIndexClickedOn ,formTitle.value,formDetails.value,formDate.value)

            const a = new taskLogicHandler()
            const l = new localStorageHandler()  //refreshes tasks
            a.cleanUpTasks()
            a.addNewTaskButton()
            l.loadProjectsTasks(localStorage.getItem('lastProjectIndexClickedOn'))
            a.addLogicToTaskButtons(true)
        
        });
    }
    taskEditButton(){
        if(document.querySelector('#editTaskContainer')){
            const a = new taskLogicHandler()
            const l = new localStorageHandler()
            a.cleanUpTasks()
            a.addNewTaskButton()
            l.loadProjectsTasks(localStorage.getItem('lastProjectIndexClickedOn'))
            a.addLogicToTaskButtons(true)
        }
        const lastProjectIndexClickedOn = localStorage.getItem('lastProjectIndexClickedOn')
        const lastTaskIndexClickedOn = localStorage.getItem('lastTaskIndexClickedOn')
        const allTasksOnScreen = document.querySelectorAll('.taskContainer')
        const parentt = allTasksOnScreen[lastTaskIndexClickedOn]
        const tDOMHandler = new taskDOMHandler()
        while (parentt.firstChild) {
            parentt.removeChild(parentt.firstChild); 
        }
        tDOMHandler.newTaskPrerequisite(parentt,true)
        
        const a = new taskDOMHandler()

        this.addLogicToTaskEditAddBtn()
        this.addLogicToTaskEditCancelBtn() 
        
        parentt.style.height = '100%'



    }
    
addLogicToTaskEditBtns() {
    const taskEditsButtons = document.querySelectorAll('.taskEdit');

    const removeEditsButtonHolder = () => {
        const existingEditsButtonHolders = document.querySelectorAll('.taskEditsButtonHolder');
        existingEditsButtonHolders.forEach(holder => holder.remove());
    };



    for (let i = 0; i < taskEditsButtons.length; i++) {
        taskEditsButtons[i].addEventListener('click', (event) => {
            // Remove any existing taskEditsButtonHolders
            removeEditsButtonHolder();

            const a = new taskDOMHandler();
            if (taskEditsButtons[i].firstChild == null) {
                a.taskEditDOM(taskEditsButtons[i]);
                localStorage.setItem('lastTaskIndexClickedOn', i);

               document.querySelector('.taskDeleteButton').addEventListener('click',() =>{
                this.taskDeleteButton()
               })
               document.querySelector('.taskRenameButton').addEventListener('click', () =>{
                this.taskEditButton()
               })
                document.addEventListener('click', (event) => {
                    if (!event.target.closest('.taskEdit')) {
                        removeEditsButtonHolder();
                    }
                });
            }

            // Prevent the event from bubbling up and triggering the document listener immediately
            event.stopPropagation();
        });
    }
}


}
