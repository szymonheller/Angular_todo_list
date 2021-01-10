import { Component } from '@angular/core';
import { Task } from './task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'To do list';

  // getFooter() {
  //   return '© Lista zadań, All rights reserved.';
  // }

  // getDate() {
  //   return new Date();  
  // }

  taskName: string;

  config: { [key: string]: string } = null;

  tasks: Task[] = [
    {
      name: 'Siłownia',
      deadline: '2020-01-02',
      done: false,
    },
    {
      name: 'Nauka Angulara',
      deadline: '2020-01-03',
      done: false,
    },
    {
      name: 'Sprzątanie kuwety',
      deadline: '2020-01-04',
      done: false,
    },
  ];

  constructor() {
    setTimeout(() => {
      this.config = {
        title: 'Lista zadań',
        footer: '© Lista zadań zbudowana w Angularze',
        date: new Date().toDateString()
      }
    }, 500);

  }

  clearTask() {
    this.tasks = [];
  }

  onKeyUp(event: KeyboardEvent) {
    const target = event.target as HTMLInputElement;
    this.taskName = target.value;
  }

  createTask() {
    const task: Task = {
      name: this.taskName,
      deadline: '2020-02-02',
      done: false,
    }
    this.tasks.push(task);
  }


}
