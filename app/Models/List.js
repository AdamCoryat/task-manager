import { generateId } from "../utils.js";

export default class List {
  constructor({title, task, id}) {
    this.title = title
    this.task = task || []
    this.id = id || generateId();
  }

get Template(){
  return ` <div class="col-2 card m-2 ">
  <div class="card-body bg-primary">
    <h5 class="card-title text-center text-light">${this.title}</h5>
  </div>
  <div id="task" class="card-size">
  <ul>${this.taskTemplate}</ul>
  </div>
  <form onsubmit="app.listController.addTask(event, '${this.id}')">
  <div class="form-group">
                    <textarea class="form-control" id="task" placeholder="Enter your task..." type="task"></textarea>
                </div>
    <div class="text-left">
      <button  type="submit" class="btn btn-outline-primary" >+ Task</button>
      <button class="btn btn-outline-danger" onclick="app.listController.deleteList('${this.id}')">Delete List</button>
                </div>
                </form>
</div>`
}
get taskTemplate() {
  let template = ""
  this.task.forEach(t => {
    template += `<a href="#" onclick="app.listController.deleteTask('${this.id}', '${t}')">delete</a><li class="p-1 my-1">${t}</li>`
  })
  return template
}
}
