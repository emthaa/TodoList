import { projectsDOMHandler, projectLogicHandler } from "./menu";


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

}