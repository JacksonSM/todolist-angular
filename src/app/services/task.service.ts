import { Injectable } from '@angular/core';
import { ITask } from '../interfaces/ITask';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class TaskService {


  addTask(task: ITask){
    task.id = uuidv4();
    const taskList = this.getList();
    taskList.push(task);
    this.commitList(taskList);
  }

  updateTask(task: ITask){
    const taskList = this.getList();
    const indexToUpdate = taskList.findIndex(item => item.id === task.id);

    if (indexToUpdate !== -1) {
      taskList[indexToUpdate] = task;
      this.commitList(taskList);
    } 
  }

  getList(): ITask[] {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks !== null) {
      return JSON.parse(storedTasks) as ITask[];
    } else {
      return [];
    }
  }

  deleteTask(id: string) {
    const taskList = this.getList();
    const indexToDelete = taskList.findIndex(item => item.id === id);
    taskList.splice(indexToDelete, 1);
    this.commitList(taskList);
  }

  private commitList(tasks: ITask[]){
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
}
