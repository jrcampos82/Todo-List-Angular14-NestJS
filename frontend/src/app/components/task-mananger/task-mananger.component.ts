import { Component, OnInit } from '@angular/core'
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop'
import { Tasks } from 'src/app/model/Tasks'

@Component({
  selector: 'app-task-mananger',
  templateUrl: './task-mananger.component.html',
  styleUrls: ['./task-mananger.component.css'],
})
export class TaskManangerComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  // todo = ['Get to work', 'Pick up groceries', 'Go home', 'Fall asleep'];

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
      status: 'todo',
      criadoEm: new Date(),
      dono: 'Beto',
    },
    {
      id: '3',
      name: 'Buscar Cerveja',
      status: 'todo',
      criadoEm: new Date(),
      dono: 'Beto',
    },
    {
      id: '4',
      name: 'Buscar Pão',
      status: 'todo',
      criadoEm: new Date(),
      dono: 'Beto',
    },
    {
      id: '5',
      name: 'Buscar Doce',
      status: 'todo',
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

  doing: Tasks[] = []
  done: Tasks[] = []

  // done = ['Get up', 'Brush teeth', 'Take a shower', 'Check e-mail', 'Walk dog'];

  drop(event: CdkDragDrop<Tasks[]>) {
    console.log(this.doing)
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
    }
  }
}
