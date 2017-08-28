import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule }    from '@angular/http';
import {HttpClient, HttpClientXsrfModule} from '@angular/common/http';
import { FormsModule }   from '@angular/forms';
import { RouterModule }   from '@angular/router';

import { WebexamService } from './services/webexam.service';

import { AppComponent } from './app.component';
import { UserComponent } from './users/user/user.component';
import { UsersComponent } from './users/users.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UsersComponent,
  ],
  imports: [
    BrowserModule,
    HttpClient,
    HttpClientXsrfModule,
    FormsModule,
    RouterModule.forRoot
    ([
      {
        path: 'users',
        component: UsersComponent
      },
      {
        path: 'user/:id',
        component: UserComponent
      }
    ])
  ],
  providers: [WebexamService],
  bootstrap: [AppComponent]
})
export class AppModule { }
