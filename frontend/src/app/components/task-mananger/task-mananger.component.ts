import { AddTaskComponent } from './../add-task/add-task.component'
import { Component, OnInit } from '@angular/core'
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop'
import { Tasks } from 'src/app/model/Tasks'
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
} from '@angular/material/dialog'

@Component({
  selector: 'app-task-mananger',
  templateUrl: './task-mananger.component.html',
  styleUrls: ['./task-mananger.component.css'],
})
export class TaskManangerComponent implements OnInit {
  task!: Task
  tasks!: Tasks[]
  // todo: Tasks[] = []
  doing: Tasks[] = []
  done: Tasks[] = []

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
    // this.taskService.getTasks().subscribe(tasks => { this.taskssss = tasks}
  }

  showToast(tipo: string, h: string, msg: string): void {}

  add_task() {
    const dialogRef = this.dialog.open(AddTaskComponent, {
      width: '250px',
      data: this.task,
    })

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed')
      console.log(result)
    })
  }

  // todo = ['Get to work', 'Pick up groceries', 'Go home', 'Fall asleep'];

  // filtrar(props: string, lista: Tasks[]): void {
  //   this.tasks.filter((ts) => ts.status === props)
  // }

  todo: Tasks[] = [
    {
      id: '1',
      name: 'Buscar água',
      status: 'todo',
      criadoEm: new Date(),
      dono: 'Beto',
    },
    {
      id: '2',
      name: 'Buscar Refri',
      status: 'doing',
      criadoEm: new Date(),
      dono: 'Beto',
    },
    {
      id: '3',
      name: 'Buscar Cerveja',
      status: 'doing',
      criadoEm: new Date(),
      dono: 'Beto',
    },
    {
      id: '4',
      name: 'Buscar Pão',
      status: 'done',
      criadoEm: new Date(),
      dono: 'Beto',
    },
    {
      id: '5',
      name: 'Buscar Doce',
      status: 'done',
      criadoEm: new Date(),
      dono: 'Beto',
    },
    {
      id: '6',
      name: 'Buscar Whey',
      status: 'todo',
      criadoEm: new Date(),
      dono: 'Beto',
    },
    {
      id: '7',
      name: 'Buscar Computador',
      status: 'todo',
      criadoEm: new Date(),
      dono: 'Beto',
    },
    {
      id: '8',
      name: 'Buscar Bike',
      status: 'todo',
      criadoEm: new Date(),
      dono: 'Beto',
    },
  ]

  // done = ['Get up', 'Brush teeth', 'Take a shower', 'Check e-mail', 'Walk dog'];

  drop(event: CdkDragDrop<Tasks[]>) {
    // console.log(this.doing)
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      )
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      )
      const t = event.item.data
      t.status = event.container.element.nativeElement.classList[1]
      console.log(t)
      this.showToast('error', 'Header', 'usuario atualizado')
    }
  }
}
