import { Component, OnInit , Input } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { WebexamService } from '../../services/webexam.service';

import { User } from '../User';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit
{
  user: User;
  constructor(private webexamService: WebexamService, private route: ActivatedRoute, private location: Location)
  {
  }

  ngOnInit(): void 
  {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.webexamService.GetUser(params.get('id')))
      .subscribe(user => this.user = user);
  }

  saveToDB(): void
  {
    this.webexamService.UpdateUser(this.user)
      .then(() => this.goBackInBrowserHistory());
  }

  goBackInBrowserHistory(): void 
  {
    this.location.back();
  }
}
