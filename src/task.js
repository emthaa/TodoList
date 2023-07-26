export class taskDOMHandler{
    addNewTaskButton(){
        console.log('hgburew')
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

        putTaskPrerequisiteHere.id = 'putTaskPrerequisiteHere'
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
}

export class taskLogicHandler{
    addNewTaskButtonLogic(){
        const a = new taskDOMHandler()
        a.addNewTaskButton()
        a.newTaskPrerequisite()
        this.addLogicToTaskCancelBtn()
    }
    deleteTaskPrerequisite(){
        document.querySelector('#formContainer').remove()
    }
    addLogicToTaskCancelBtn(){
        document.querySelector('#taskCancel').addEventListener('click', this.deleteTaskPrerequisite)
    }
}
