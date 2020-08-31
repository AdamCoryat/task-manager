import List from "../Models/List.js";
import STORE from "../store.js"

//Public
class ListService {
  //Takes in the Id and the task to find the id of the object then finds the index of the task an splices it out
  deleteTask(id, task) {
    let list = STORE.State.lists.find(l => l.id == id)
    console.log(list)
    let taskIndex = list.task.findIndex(t => t == task)
    console.log(taskIndex)
    if(taskIndex === -1){
      console.error("invalid id")
    }
    list.task.splice(taskIndex, 1)
  }
  constructor(){
  }

//takes in the rawdata from controller and sends it to the class to be created.
  createList(newList) {
    let list = new List(newList)
    STORE.State.lists.push(list)
  }


//takes in the raw data from controller and pushes it to the id that matches the list to create the task.
  createTask(newTask, id) {
    let list = STORE.State.lists.find(l => l.id == id)
    list.task.push(newTask)
    STORE.saveState()
  }


//takes in the id finds the index in the array of the class oject then splices it 
  deleteList(id) {
    let listIndex = STORE.State.lists.findIndex(l => l.id == id)
    if (listIndex === -1) {
      console.error("invalid id")
      return
    }
    STORE.State.lists.splice(listIndex, 1)
  }
 
  
}

const SERVICE = new ListService();
export default SERVICE;
