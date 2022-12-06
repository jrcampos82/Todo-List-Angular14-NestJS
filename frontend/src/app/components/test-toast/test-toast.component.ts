import { Component, OnInit } from '@angular/core'
import { MessageService } from 'primeng/api'

@Component({
  selector: 'app-test-toast',
  templateUrl: './test-toast.component.html',
  styleUrls: ['./test-toast.component.css'],
  providers: [MessageService],
})
export class TestToastComponent implements OnInit {
  constructor(private messageService: MessageService) {}

  ngOnInit(): void {
    //this.taskService.getTasks();
  }

  showSuccess() {
    this.messageService.add({
      severity: 'success',
      summary: 'Success',
      detail: 'Message Content',
    })
  }
}
