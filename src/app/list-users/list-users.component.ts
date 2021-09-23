import { Component, OnInit } from '@angular/core';
import { IUser, UserService } from '../services/user.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss'],
})
export class ListUsersComponent implements OnInit {
  public list: IUser[];

  constructor(readonly userService: UserService) {
    // this.list = userService.users;

    this.list = userService.users;

    // this.showe();

    //  this.list = [
    //   { id: 1, username: "Vasa", name: "Vasiliev", email: "Vasa@email.com" },
    //   { id: 2, username: "Kolya", name: "Nikolaev", email: "Kolya@email.com" },
    //   { id: 3, username: "Petya", name: "Petrov", email: "Petya@email.com" },
    //   { id: 4, username: "Zina", name: "Zinger", email: "Zina@email.com" }
    // ]
  }
  ngOnInit(): void {
    // this.userService.getUsers();
    this.showe();
  }

  showe() {
    console.log('#####showe#####');
    console.log(this.list);
    console.log(this.list.length);
  }
  LocalUrl() {
    console.log('LocalUrl');
    // this.userService.users=[];
    this.userService.getUsers(this.userService.localUrl);
    this.showe();
  }
  InternetUrl() {
    console.log('InternetUrl');
    // this.list=[];
    this.userService.getUsers(this.userService.url);
    this.showe();
  }
}
