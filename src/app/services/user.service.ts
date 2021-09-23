import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { tap } from 'rxjs/operators';
// 3. Создать в отдельном файле интерфейс описания типа пользователя (пример)
//(для упрощения, используйте только поля id, name, username, email)
export interface IUser {
  id: number;
  username: string;
  name: string;
  email?: string;
  // address?: EndingType;
}
export interface IListUser {
  listUser: IUser[];
}

@Injectable({
  providedIn: 'root',
})
export class UserService {
  users: IUser[] = [];

  url = 'https://jsonplaceholder.typicode.com/users';
  localUrl = '/assets/users.json';

  constructor(readonly client: HttpClient) {
    // this.getUsers();
    // console.log(this.users);
  }

  // users: IUser[] = [
  //   { id: 1, username: 'Vasa', name: 'Vasiliev', email: 'Vasa@email.com' },
  //   { id: 2, username: 'Kolya', name: 'Nikolaev', email: 'Kolya@email.com' },
  //   { id: 3, username: 'Petya', name: 'Petrov', email: 'Petya@email.com' },
  //   { id: 4, username: 'Zina', name: 'Zinger', email: 'Zina@email.com' },
  // ];

  getUsers(url:string = this.url) {
    // this.client.get<IUser>(this.url).subscribe((data:any) => this.users.push(data[2]));
    // this.users=[];
    this.client.get<IUser>(url).subscribe((data: any) =>
      data.forEach((element: IUser) => {
        this.users.push(element);
      })
    );
  }

  // deleteUser(id: number) {
  //   this.users = this.users.filter((t) => t.id !== id);
  // }
  // addUser(user: IUser) {
  //   this.users.push(user);
  // }
}
