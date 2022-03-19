import { Component, OnInit } from '@angular/core';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'front-tasks';
  Tasks: any[] = [];
  constructor (
    private tasksService: TasksService
  ){}
   ngOnInit(): void {
     console.log("holi")
     this.tasksService.getAllTask$().subscribe(tasks => {
       this.Tasks = tasks;
       console.log(this.Tasks)
     });
     console.log(this.Tasks)
   }
}
