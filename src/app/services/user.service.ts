import { Injectable } from '@angular/core';

// 3. Создать в отдельном файле интерфейс описания типа пользователя (пример) 
//(для упрощения, используйте только поля id, name, username, email)
export interface IUser {
  id: number,
  username:string,
  name: string,
  email?: string
  
}

@Injectable({
  providedIn: 'root'
})

// 4. Создать в компоненте переменную под массив пользователей и вручную добавить туда 2-3
// пользователя
export class UserService {
 
  users: IUser[] = [
    {id:1,username:"Vasa",name:"Vasiliev",email:"Vasa@email.com"},
    {id:2,username:"Kolya",name:"Nikolaev",email:"Kolya@email.com"},
    {id:3,username:"Petya",name:"Petrov",email:"Petya@email.com"},
    {id:4,username:"Zina",name:"Zinger",email:"Zina@email.com"}
    ]
  constructor() {

   }
}