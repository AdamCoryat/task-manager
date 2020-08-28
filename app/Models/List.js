import { generateId } from "../utils.js";

export default class List {
  constructor({title, task, id, color}) {
    this.title = title
    this.task = task || []
    this.id = id || generateId()
    this.color = color
  }

get Template(){
  return ` <div class="col-12 col-md-2 m-2 card card-bg">
  <div class="card-body" style="background-color:${this.color}">
    <h5 class="card-title text-center text-light">${this.title}</h5>
  </div>
  <div id="task" class="card-size bg-card">
  <ul>${this.taskTemplate}</ul>
  </div>
  <form onsubmit="app.listController.addTask(event, '${this.id}')">
  <div class="form-group">
                    <textarea class="form-control" id="task" placeholder="Enter your task..." type="task"></textarea>
                </div>
    <div class="text-left">
      <button  type="submit" class="btn btn-outline-primary m-1" >+ Task</button>
      <button class="btn btn-outline-danger m-1" onclick="app.listController.deleteList('${this.id}')">Delete List</button>
                </div>
                </form>
</div>`
}
get taskTemplate() {
  let template = ""
  this.task.forEach(t => {
    template += `<input type="checkbox" id="myCheck" onclick="myFunction()"><p class="p-1 my-1">${t}</p><a href="#" onclick="app.listController.deleteTask('${this.id}', '${t}')">delete</a>`
  })
  return template
}
}
