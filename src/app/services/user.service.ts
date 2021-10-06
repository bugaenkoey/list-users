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

@Injectable({
  providedIn: 'root',
})
export class UserService {
  users: IUser[] = [];

  url = 'https://jsonplaceholder.typicode.com/users';
  localUrl = '/assets/users.json';

  constructor(readonly client: HttpClient) {}

  // users2: IUser[] = [
  //   { id: 1, username: 'Vasa2', name: 'Vasiliev', email: 'Vasa@email.com' },
  //   { id: 2, username: 'Kolya', name: 'Nikolaev', email: 'Kolya@email.com' },
  //   { id: 3, username: 'Petya', name: 'Petrov', email: 'Petya@email.com' },
  //   { id: 4, username: 'Zina', name: 'Zinger', email: 'Zina@email.com' },
  // ];


  // getUsers2(url: string = this.url): void {
  //   this.client
  //     .get<IUser[]>(url)
  //     .subscribe((data) => {
  //       this.users = data;
  //       console.log(data);
  //     });
  // }

  getUsers(url: string = this.url): Observable<IUser[]> {
    return this.client.get<IUser[]>(url);
  }

  // deleteUser(id: number) {
  //   this.users = this.users.filter((t) => t.id !== id);
  // }
  // addUser(user: IUser) {
  //   this.users.push(user);
  // }
}
