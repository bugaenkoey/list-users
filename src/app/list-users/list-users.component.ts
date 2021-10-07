import { Component, OnInit, VERSION } from '@angular/core';
import { Ilink, IUser, UserService } from '../services/user.service';
import { FormControl, FormGroup } from '@angular/forms'; ////
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',

  styleUrls: ['./list-users.component.scss'],
})
export class ListUsersComponent implements OnInit {
  public list: IUser[] | undefined;
  // name: string = 'my Name' + VERSION.major;
  public urls: Ilink[] | undefined;

  //  states = [
  //   {name: 'Arizona', abbrev: 'AZ'},
  //   {name: 'California', abbrev: 'CA'},
  //   {name: 'Colorado', abbrev: 'CO'},
  //   {name: 'New York', abbrev: 'NY'},
  //   {name: 'Pennsylvania', abbrev: 'PA'},
  // ];

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
  DeleteItem(id: number) {
    console.log('DeleteItem:' + id);
  }

  EditItem(id: number) {
    console.log('EditItem:' + id);
  }

  AddItem() {
    console.log('AddItem');
  }
}
