import {
  generateId
} from "../utils.js";

export default class List {
  //creates the class object list from the constructor.
  constructor({
    title,
    task,
    id,
    color
  }) {
    this.title = title
    this.task = task || []
    this.id = id || generateId()
    this.color = color
  }

  //creates list template
  get Template() {
    return ` <div class="col-12 col-md-2 m-2 card card-bg shadow">
  <div class="card-body d-inline" style="background-color:${this.color}">
  <a href="#" class ="text-right" onclick ="app.listController.deleteList('${this.id}')"><i class="fa fa-trash text-warning trash-can" aria-hidden="true"></i></a>
    <h3 class="card-title-font card-title text-center text-light">${this.title}</h3>
  </div>
  <div id="task" class="card-size bg-card d-inline">
  ${this.taskTemplate}
  </div>
  <form onsubmit="app.listController.addTask(event, '${this.id}')">
  <div class="form-group d-flex">
                    <input class="form-control" id="task" placeholder="Enter your task..." type="task"></input>
                    <button  type="submit" class="btn btn-outline-primary" >+</button>
                </div>
                </div>
                </form>
</div>`
  }
  //creates task template
  get taskTemplate() {
    let template = ""
    this.task.forEach(t => {
      template += `<div class="d-flex"><p class="task-font"><input type="checkbox">    ${t}</p><a href="#" class="mx-3" onclick="app.listController.deleteTask('${this.id}', '${t}')"><i class="text-danger fa fa-trash" aria-hidden="true"></i></a></div>`
    })
    return template
  }
}