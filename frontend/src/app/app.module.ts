import { HttpClient, HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MaterialModule } from './material/material.module'
import { TaskManangerComponent } from './components/task-mananger/task-mananger.component'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { NavbarComponent } from './layout/navbar/navbar.component'
import { TestToastComponent } from './components/test-toast/test-toast.component'
import { ButtonModule } from 'primeng/button'
import { ToastModule } from 'primeng/toast'
import { AddTaskComponent } from './components/add-task/add-task.component'
import { MatDialogModule } from '@angular/material/dialog'
import { MatFormFieldModule } from '@angular/material/form-field'
import { ReactiveFormsModule } from '@angular/forms'
import { FileUploadComponent } from './components/file-upload/file-upload.component'
@NgModule({
  declarations: [
    AppComponent,
    TaskManangerComponent,
    NavbarComponent,
    TestToastComponent,
    AddTaskComponent,
    FileUploadComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    NgbModule,
    ButtonModule,
    ToastModule,
    MatDialogModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [],
})
export class AppModule {}
