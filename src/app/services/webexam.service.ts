import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';

import { User } from '../users/User';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class WebexamService 
{
  private usersUrl:string = 'http://localhost:8080/users/';
  private jsonHeaders = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http)
  {
  }

  public GetUsers():Promise<User[]>
  {
    return this.http.get(this.usersUrl)
    .toPromise()
    .then(response => response.json()._embedded.users as User[])
    .catch(this.handleError);
  }

  public GetUser(id : string):Promise<User>
  {
    return this.http.get(this.usersUrl + id)
    .toPromise()
    .then(response => response.json() as User)
    .catch(this.handleError);
  }

  public UpdateUser(user : User):Promise<User>
  {
    return this.http.put(this.usersUrl + user.id, JSON.stringify(user), {headers: this.jsonHeaders})
      .toPromise()
      .then(() => user)
      .catch(this.handleError);
  }

  public GetJsonRepuest(requestString: string):Promise<any>
  {
    return this.http.get(requestString)
    .toPromise()
    .then(response => response.json())
    .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
