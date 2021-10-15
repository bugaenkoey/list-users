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
  // url: string;  
  // address: EndingType;
  // title: string; 
}

export interface Ilink{
  name:string;
  link:string;
}
@Injectable({
  providedIn: 'root',
})
export class UserService {
 
  // users: IUser[] = [];

  url = 'https://jsonplaceholder.typicode.com/users';
  localUrl = '/assets/users.json';

  urls:Ilink[]=[
   {name:'jsonplaceholder_Url',link: 'https://jsonplaceholder.typicode.com/users'},
   {name:'local_Url',link: '/assets/users.json'},
   {name:'local_Url_2',link: '/assets/users_2.json'},
   {name:'https://jsonplaceholder.typicode.com/users',link: 'https://jsonplaceholder.typicode.com/users'},
   {name:'todos',link: 'https://jsonplaceholder.typicode.com/todos'},
  //  {name:'reqres.in/api/users',link: 'https://reqres.in/api/users'},
   {name:'https://jsonplaceholder.typicode.com/photos',link: 'https://jsonplaceholder.typicode.com/photos'},
   
   
  ]

  constructor(readonly client: HttpClient) {}


  getUsers(url: string): Observable<IUser[]> {
    return this.client.get<IUser[]>(url);
  }

  
  // deleteUser(id: number): Observable<{}> {
  //   return this.client.delete(`${this.url}/${id}`);
  // }

  deleteUser(url: string,id: number):Observable<{}> {
    // this.users = this.users.filter((t) => t.id !== id);
    // return this.client.get<IUser[]>(url);
    // console.log('DeleteItemClient:' + id + ' Url ' + url);
    url+= "/"+id;
  //  const delR  = url+"/"+id;
   console.log(url);
  const answer=this.client.delete(url);
  console.log("My answer ",answer);
    return answer;

  }

  EditItem(url: string, id: number) {
    // throw new Error('Method not implemented.');
    
  }

  addUser(url: string,user: IUser) {
    
    return this.client.post(url, user);
  }
}
