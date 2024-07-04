import { Component, ElementRef, ViewChild } from '@angular/core';
import { ITask } from './interfaces/ITask';
import { TaskService } from './services/task.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  title = 'TodoList';
  taskList: ITask[] = [];

  private _listIsEmpty: boolean = this.taskList.length == 0;

  constructor(private _taskService: TaskService){
    this.taskList = _taskService.getList();
  }

  get listIsEmpty(): boolean {
    return this.taskList.length == 0;
  }

  taskAdded(task: ITask) {
    this._taskService.addTask(task);
    this.refreshList();
  }

  CheckTask(task: ITask) {
    if(task.isUnCheck == true){
      alert("Essa tarefa já foi marcada!!");
      return;
    }
    task.isCheck = true;
    this._taskService.updateTask(task);
    this.refreshList();
  }
  DeleteTask(task: ITask) {
    this._taskService.deleteTask(task.id!);
    this.refreshList();
  }
  UnCheckTask(task: ITask) {
    if(task.isCheck == true){
      alert("Essa tarefa já foi marcada!!");
      return;
    }
    task.isUnCheck = true;
    this._taskService.updateTask(task);
    this.refreshList();
  }

  private refreshList(){
    this.taskList = this._taskService.getList();
  }
}




