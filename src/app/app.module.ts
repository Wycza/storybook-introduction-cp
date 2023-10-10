import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { DashboardPageComponent, LoginPageComponent } from './pages';

import { AppRoutingModule } from './app-routing.module.ts';
import {
  CardComponent,
  IconModule,
  InputComponent,
  BtnComponent,
  LoginCardComponent,
  NotificationComponent,
  ToolbarComponent,
  TaskComponent,
  TaskListComponent,
} from './components';
import { FormsModule } from '@angular/forms';
import { NgxsModule } from '@ngxs/store';
import { TasksState } from './state';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    LoginCardComponent,
    BtnComponent,
    InputComponent,
    CardComponent,
    LoginPageComponent,
    DashboardPageComponent,
    NotificationComponent,
    TaskComponent,
    TaskListComponent,
  ],
  imports: [
    IconModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxsModule.forRoot([TasksState]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
