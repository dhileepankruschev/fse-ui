import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TaskComponent } from './components/task/task.component';
import { AddtaskComponent } from './components/addtask/addtask.component';
import { EdittaskComponent } from './components/edittask/edittask.component';

// Routes configuration
const routes: Routes = [
  { path: "", redirectTo: "viewtask", pathMatch: "full" },
  { path: 'viewtask', component: TaskComponent },
  { path: 'addtask', component: AddtaskComponent },
  { path: 'edittask/:id', component: EdittaskComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
