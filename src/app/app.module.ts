import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeTaskComponent } from './home-task/home-task.component';
import { ListUsersComponent } from './list-users/list-users.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeTaskComponent,
    ListUsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
