import styles from './style.css';
import { menuButtonFunction } from './menu.js';
class TodoInfoHolder{
    constructor(title,description,dueDate,priority){
        this.title = title
        this.description = description
        this.dueDate = dueDate
        this.priority = priority
    }
}




const menubutton = document.querySelector('#menubutton')
menubutton.addEventListener('click',menuButtonFunction)






console.log('index.js working')