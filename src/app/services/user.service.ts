import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { tap } from 'rxjs/operators';
// 3. Создать в отдельном файле интерфейс описания типа пользователя (пример)
//(для упрощения, используйте только поля id, name, username, email)

export interface IUser {
  id: number;
  name: string;
  username: string;
  email?: string;
}

export interface Ilink {
  name: string;
  link: string;
}

export class User implements IUser {
  id!: number;
  name!: string;
  username!: string;
  email?: string | undefined;
}

@Injectable({
  providedIn: 'root',
})
export class UserService {
  // users: IUser[] = [];

  // url = 'https://jsonplaceholder.typicode.com/users';
  // localUrl = '/assets/users.json';

  // linkUrl = '/assets/links.json';
  // linkUrl = 'https://localhost:44367/api/Links';
  linkUrl = 'https://localhost:5001/api/Links';
  // linkUrl = 'http://localhost:5000/api/Links';

  // urls: Ilink[] = [
  //   {
  //     name: 'jsonplaceholder_Url',
  //     link: 'https://jsonplaceholder.typicode.com/users',
  //   },
  //   { name: 'local_Url', link: '/assets/users.json' },
  //   { name: 'local_Url_2', link: '/assets/users_2.json' },
  //   {
  //     name: 'https://jsonplaceholder.typicode.com/users',
  //     link: 'https://jsonplaceholder.typicode.com/users',
  //   },
  //   { name: 'todos', link: 'https://jsonplaceholder.typicode.com/todos' },
  //   //  {name:'reqres.in/api/users',link: 'https://reqres.in/api/users'},
  //   {
  //     name: 'https://jsonplaceholder.typicode.com/photos',
  //     link: 'https://jsonplaceholder.typicode.com/photos',
  //   },
  //   {
  //     name: 'https://localhost:44367/api/values',
  //     link: 'https://localhost:44367/api/Values',
  //   },
  //   //  {name:'https://localhost:44367/api/values2',link:'https://localhost:44367/api/Values2'},
  //   {
  //     name: 'https://localhost:5001/api/values',
  //     link: 'https://localhost:5001/api/Values',
  //   },
  // ];

  constructor(readonly client: HttpClient) {}

  getLinks(): Observable<Ilink[]> {
    return this.client.get<Ilink[]>(this.linkUrl);
  }

  getUsers(url: string): Observable<IUser[]> {
    return this.client.get<IUser[]>(url);
  }

  deleteUser(url: string, id: number): Observable<{}> {
    url += '/' + id;
    return this.client.delete(url);
  }

  EditItem(url: string, id: number) {
    return this.client.put(url, id);
  }

  addUser(url: string, user: IUser) {
    return this.client.post(url, user);
  }
}
