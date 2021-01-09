import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'To do list';

  getFooter() {
    return '© Lista zadań, All rights reserved.';
  }

  getDate() {
    return new Date();
  }
}
