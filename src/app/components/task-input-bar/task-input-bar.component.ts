import { Component, EventEmitter, Output } from '@angular/core';
import { ITask } from '../../interfaces/ITask';

@Component({
  selector: 'app-task-input-bar',
  templateUrl: './task-input-bar.component.html',
  styleUrl: './task-input-bar.component.scss'
})
export class TaskInputBarComponent {
  textInBar: string = "";

  @Output('onAddTask') 
  onAddTaskEmitt = new EventEmitter<ITask>();

  onAdd() {
    const isEmpty = this.textInBar.trim() === '';
    
    if(!isEmpty){
      const task: ITask = { id: undefined, title: this.textInBar, isCheck: false, isUnCheck: false };
      this.onAddTaskEmitt.emit(task);
    }
    this.textInBar = "";
  }
}
