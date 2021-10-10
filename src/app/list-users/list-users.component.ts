import { Component, OnInit } from '@angular/core';
import { Ilink, IUser, UserService } from '../services/user.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',

  styleUrls: ['./list-users.component.scss'],
})
export class ListUsersComponent implements OnInit {
  public list: IUser[] | undefined;
  public urls: Ilink[] | undefined;

  constructor(readonly userService: UserService) {}

  ngOnInit(): void {
    this.urls = this.userService.urls;
  }

  form = new FormGroup({
    // url: new FormControl(this.userService.urls[0]),
    url: new FormControl(),
  });

  showUsers(url?: any) {
    console.log(this.form.value['url']);
    console.log('path url ', url);
    this.userService.getUsers(this.form.value['url']).subscribe((data) => {
      this.list = data;
      console.log(data);
      
    });
  }
  DeleteItem(id: number) {
    console.log('DeleteItem:' + id + ' Url ' + this.form.value['url']);
    this.userService.deleteUser(this.form.value['url'],id)
  }

  EditItem(id: number) {
    console.log('EditItem:' + id + ' Url ' + this.form.value['url']);
    this.userService.EditItem(this.form.value['url'],id)
  }

  AddItem() {
    console.log('AddItem' + ' Url ' + this.form.value['url']);
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
