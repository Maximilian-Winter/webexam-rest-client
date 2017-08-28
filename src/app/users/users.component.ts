import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';

import { User } from './User';
import { WebexamService } from '../services/webexam.service';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit 
{
  users : User[];
  selectedUser: User;
  constructor(private webexamService: WebexamService, private router: Router) 
  {
  }
  ngOnInit() 
  {
    this.webexamService.GetUsers().then(users => this.users = users);
  }
  
  onSelectUser(selectedUser: User): void
  {
    this.selectedUser = selectedUser;
  }

  openSingleUser(): void {
    this.router.navigate(['/user', this.selectedUser.id]);
  }
}
