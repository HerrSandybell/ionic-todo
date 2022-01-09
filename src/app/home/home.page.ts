import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  today = new Date()
  todoList = [
    {
      name: "Onboarding",
      dueDate: new Date(2022, 0, 7)
    },    
    {
      name: "Framework Learning",
      dueDate: new Date(2022, 0, 8)
    },
    {
      name: "Coding",
      dueDate: new Date(2022, 0, 9)
    }
  ]
  constructor() {}

}
