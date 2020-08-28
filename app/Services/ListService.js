import List from "../Models/List.js";
import STORE from "../store.js"

//Public
class ListService {
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
    console.log("Listservice")
  }


  createList(newList) {
    let list = new List(newList)
    STORE.State.lists.push(list)
  }



  createTask(newTask, id) {
    let list = STORE.State.lists.find(l => l.id == id)
    list.task.push(newTask)
    STORE.saveState()
  }



  deletePost(id) {
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
