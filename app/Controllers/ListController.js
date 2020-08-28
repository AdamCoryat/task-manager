import ListService from "../Services/ListService.js";
import STORE from "../store.js"

//TODO Don't forget to render to the screen after every data change.
function _drawLists() {
    let template = ""
    STORE.State.lists.forEach(p => template += p.Template)
    document.getElementById("listBody").innerHTML = template
    STORE.saveState() 
}





//Public
export default class ListController {
  constructor() {
    _drawLists();
  }

  //This takes the intail input from the user from the task form and converts it into an object and sends it to service.
  
  addTask(event, id) {
    event.preventDefault()
    let form = event.target
    let newTask = form.task.value
    ListService.createTask(newTask, id)
    form.reset()
    STORE.saveState()
    _drawLists()
  }
  deleteTask(id, task) {
    confirm("Delete Task?")
    ListService.deleteTask(id, task)
    _drawLists()
    
  }
  

  createList(event) {
    event.preventDefault();
    let form = event.target
    let newList = {
      title: form.title.value,
      // @ts-ignore
      color: document.getElementById("myColor").value
    }
    ListService.createList(newList)
    form.reset()
    _drawLists()
  }

  deleteList(id) {
    confirm("Delete List")
    ListService.deletePost(id)
    _drawLists()
  }

  
}
