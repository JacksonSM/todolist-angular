import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { TaskInputBarComponent } from './task-input-bar/task-input-bar.component';
import { TaskComponent } from './task/task.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HeaderComponent,
    TaskInputBarComponent,
    TaskComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    HeaderComponent,
    TaskInputBarComponent,
    TaskComponent
  ]
})
export class ComponentsModule { }
