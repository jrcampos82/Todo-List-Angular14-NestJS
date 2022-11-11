import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskManangerComponent } from './components/task-mananger/task-mananger.component';

const routes: Routes = [
  {path: 'task', component: TaskManangerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
