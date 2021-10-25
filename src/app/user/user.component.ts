import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { IUser } from '../services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent {
  @Input()
  user!: IUser;

  // @Output() clickAdd: EventEmitter<IUser> = new EventEmitter();
  @Output() clickAdd = new EventEmitter<IUser>();

  public onSubmit() {
    this.user.id = Math.round(Math.random() * 1000) + 100;
    // console.log(this.user);
    this.clickAdd.emit(this.user);
  }
}
