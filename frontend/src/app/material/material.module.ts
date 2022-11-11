import { NgModule } from '@angular/core';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatIconModule} from '@angular/material/icon';
const COMPONENTS = [
  DragDropModule,
  MatIconModule
]

@NgModule({
  declarations: [],
  imports: [
    COMPONENTS
  ],
  exports: [COMPONENTS]
})
export class MaterialModule { }
