import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app./todo-card.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo-card';
  name_surname = 'Here can be your name';
  card_number = '0000000000000001';
  expiary_date = 'Exp. 01/24'
}
