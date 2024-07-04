import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ITask } from '../../interfaces/ITask';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss'
})
export class TaskComponent   {

  
  @Input({ required: true }) 
  task: ITask = {} as ITask;

  ngOnInit(): void {
    
  }

  @Output() 
  onDeleteTask = new EventEmitter();
  @Output() 
  onUnCheckTask = new EventEmitter();
  @Output() 
  onCheckTask = new EventEmitter();

  onCheck() {
    this.onCheckTask.emit(this.task);
  }
  onUnCheck() {
    this.onUnCheckTask.emit(this.task);
  }
  onDelete() {
    this.onDeleteTask.emit(this.task);
  }


}
