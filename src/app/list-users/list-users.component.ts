import { Component, OnInit } from '@angular/core';
import { Ilink, IUser, UserService } from '../services/user.service';
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
  public soweUserAdd = false;
public newUser:IUser= {
  id: 0,
  name: 'Vasja',
  username: '',
  email: '',
};
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
   const answer= this.userService.deleteUser(this.form.value['url'], id);
   answer.subscribe(() => {this.list = this.list.filter((t) => t.id !== id);
  },
  // этот код выполнится при неуспешном выполнении запроса
  () => {
    console.log('remove failed');
  });
console.log(answer);
    // this.list = this.list.filter((t) => t.id !== id);
console.log(this.list);
    
  }

  EditItem(id: number) {
    console.log('EditItem:' + id + ' Url ' + this.form.value['url']);
    this.userService.EditItem(this.form.value['url'], id);
  }

  addUser(user:IUser){
    // this.list.unshift(user);
    // this.list.push(user);
    // console.log("UserComponent",user);
    const answer= this.userService.addUser(this.form.value['url'],user)
    answer.subscribe(()=>{this.list.unshift(user); console.log("addUser ok")},
    ()=> {console.log('remove failed');})
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
