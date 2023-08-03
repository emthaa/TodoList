import { projectsDOMHandler, projectLogicHandler } from "./menu";
import { taskDOMHandler, taskLogicHandler } from "./task";


export class localStorageHandler{

    constructor(){

    }
    createProjectListArr = function() {
        const h = localStorage.getItem('ProjectList');
        if (typeof h === 'undefined') {
          const ProjectList = [];
          const arrayString = JSON.stringify(ProjectList);
          localStorage.setItem('ProjectList', arrayString);
        }
        console.log(h)
      }
      
    

    createProjectAndAddToProjectList(word){
        const a = localStorage.getItem('ProjectList')
        const newa = JSON.parse(a)
        
        let Project = {pName: word,tasks: []}
        newa.push(Project)

        const updatedstring = JSON.stringify(newa)
        localStorage.setItem('ProjectList',updatedstring)

        const c = localStorage.getItem('ProjectList')
        const newc = JSON.parse(c)
        console.log(newc)
    }

    loadProjects(){
        const a = localStorage.getItem('ProjectList')
        const newa = JSON.parse(a)

        const b = new projectsDOMHandler()
        const c = new projectLogicHandler()
    
        newa.forEach(obj => {
            b.createNewProject(obj.pName,document.querySelector('#Projects'))
            
        });

        
    }

    deleteProject(btn){
        const a = localStorage.getItem('ProjectList')
        const newa = JSON.parse(a)
        const allEditDeleteButtons = document.querySelectorAll('.deleteButton');
        for(let i =0; i < allEditDeleteButtons.length;i++){
            if(allEditDeleteButtons[i] == btn){
                newa.splice(i,1);
                
            }
        }

        const updatedstring = JSON.stringify(newa)
        localStorage.setItem('ProjectList',updatedstring);
        
    }

    taskCreator(title,details,date,favorite,checked){
        let task = {title: title, details: details,date:date,favorite:favorite,checked:checked}
        return task
    }

    addTaskToProject(title, details, date, project, favorite, check) {
        const projects = document.querySelectorAll('.projectHolder');
        const a = localStorage.getItem('ProjectList');
        const newa = JSON.parse(a);
        
        let newTask = this.taskCreator(title, details, date, favorite, check);
        
        for (let i = 0; i < projects.length; i++) {
          if (i.toString() === project) {
            newa[i].tasks.push(newTask);
          }
        }
        
        const updatedstring = JSON.stringify(newa);
        localStorage.setItem('ProjectList', updatedstring);
      }
    loadProjectsTasks(lastProjectClickedOn){
        const t = new taskDOMHandler()
        const a = localStorage.getItem('ProjectList')
        const newa = JSON.parse(a)
        for(let i = 0; i<newa[lastProjectClickedOn].tasks.length;i++){
            let currentTask = newa[lastProjectClickedOn].tasks[i]
            console.log()
            t.createDOMTask(currentTask.checked,currentTask.title,currentTask.details,currentTask.date,currentTask.favorite)
        }
        //console.log(newa[0].tasks)
       //console.log(newa[0].tasks[0].title)
    }
}

