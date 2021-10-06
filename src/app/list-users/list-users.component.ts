import { Component, OnInit, VERSION } from '@angular/core';
import { IUser, UserService } from '../services/user.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss'],
})
export class ListUsersComponent {
  public list: IUser[] | undefined;
  // name: string = 'my Name' + VERSION.major;

  constructor(readonly userService: UserService) {}

  LocalUrl() {
    this.userService.getUsers(this.userService.localUrl).subscribe((data) => {
      this.list = data;
      console.log(data);
    });
  }

  InternetUrl() {
    this.userService.getUsers(this.userService.url).subscribe((data) => {
      this.list = data;
      console.log(data);
    });
  }
  DeleteItem(id: number) {
    console.log('DeleteItem:' + id);
  }
}
