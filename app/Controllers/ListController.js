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
    swal({
      title: "Are you sure?",
      text: "Once destroyed, its gone forever",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
      .then((willDelete) => {
        if (willDelete) {
          swal("Boom, Task destroyed", {
            icon: "success",
          });
          ListService.deleteTask(id, task)
          _drawLists()
        } else {
          swal("Your task is safe");
        }
      });

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
    swal({
      title: "Are you sure?",
      text: "Once destroyed, you will never be able to get it back!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
      .then((willDelete) => {
        if (willDelete) {
          swal("Boom! Your list has been destroyed", {
            icon: "success",
          });
          ListService.deletePost(id)
          _drawLists()
        } else {
          swal("Your list is safe");
        }
      });
  }


}
