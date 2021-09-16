import { Component, OnInit } from '@angular/core';
import { IUser, UserService } from '../services/user.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss']
})
export class ListUsersComponent implements OnInit {

  public list: IUser[];

  constructor() {
    this.list = new UserService().users;
  }
  ngOnInit(): void {
  }
   showe() {
  console.log(this.list);
  
}
}