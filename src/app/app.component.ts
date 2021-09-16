import { Component } from '@angular/core';
import { HomeTaskComponent } from './home-task/home-task.component';
import { ListUsersComponent } from './list-users/list-users.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  log = new ListUsersComponent().showe();
  title = 'list-users';
  count: number = 0;
  str: string = "";
  listUsers: string[] = new Array('my name is Evgen', 'are your name?');
  hTask: HomeTaskComponent = new HomeTaskComponent();
  incrementStr() {
    this.str = this.hTask.name + ++this.count;
  }
  decrementStr() {
    this.str = this.hTask.name + --this.count;
  }
}
