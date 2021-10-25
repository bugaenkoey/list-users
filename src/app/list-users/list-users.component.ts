import { Component, OnInit } from '@angular/core';
import { Ilink, IUser, User, UserService } from '../services/user.service';
import { FormControl, FormGroup } from '@angular/forms';
import { UserComponent } from '../user/user.component';
// import { isBuffer } from 'util';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',

  styleUrls: ['./list-users.component.scss'],
})
export class ListUsersComponent implements OnInit {
  public list!: IUser[];
  public urls: Ilink[] | undefined;
  // public urls: Ilink[] = this.userService.getLinks();
  public soweUserAdd = false;
  public newUser: User = new User();

  constructor(readonly userService: UserService) { }

  ngOnInit(): void {
    this.getLinks();
  }
  getLinks() {
    this.userService.getLinks().subscribe((data) => {
      this.urls = data;
    });
  }

  form = new FormGroup({ url: new FormControl() });

  showUsers(url?: any) {
    this.userService.getUsers(this.form.value['url']).subscribe((data) => {
      this.list = data;
    });
  }
  DeleteItem(id: number) {
    this.userService.deleteUser(this.form.value['url'], id).subscribe(() => {
      this.list = this.list.filter((t) => t.id !== id);
    });
  }

  EditItem(id: number) {
    this.userService.EditItem(this.form.value['url'], id);
  }

  addUser(user: IUser) {
    this.userService.addUser(this.form.value['url'], user).subscribe(() => {
      this.list.unshift(user);
    });
  }

  // LocalUrl() {
  //   console.log(this.form.value['link']);
  //   this.userService.getUsers(this.userService.localUrl).subscribe((data) => {
  //     this.list = data;
  //     console.log(data);
  //   });
  // }

  // InternetUrl() {
  //   this.userService.getUsers(this.userService.url).subscribe((data) => {
  //     this.list = data;
  //     console.log(data);
  //   });
  // }
}
