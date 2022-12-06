import { FileUploadComponent } from './components/file-upload/file-upload.component'
import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { TaskManangerComponent } from './components/task-mananger/task-mananger.component'
import { TestToastComponent } from './components/test-toast/test-toast.component'

const routes: Routes = [
  { path: 'task', component: TaskManangerComponent },
  { path: 'toast', component: TestToastComponent },
  { path: 'upload', component: FileUploadComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
