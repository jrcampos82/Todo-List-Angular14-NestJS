import { Component, Inject, OnInit, Output } from '@angular/core'
import { FormControl } from '@angular/forms'
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
} from '@angular/material/dialog'
import { Tasks } from 'src/app/model/Tasks'
@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent implements OnInit {
  taskName = new FormControl('')

  constructor(
    public dialogRef: MatDialogRef<AddTaskComponent>,
    @Inject(MAT_DIALOG_DATA) public task: Tasks,
  ) {}

  onNoClick(): void {
    this.dialogRef.close()
  }

  ngOnInit(): void {}
}
