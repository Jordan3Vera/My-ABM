import { Injectable } from '@angular/core';
import { IUser, AddUser } from '../models/user.model';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

const USERS = 'assets/jsons/users.json';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private cookies: CookieService, private http: HttpClient) { }

  public readonly header = new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin':'*',
    'scope': '...lo que sea...',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods':'GET,POST,PUT,DELETE'
  });

  getUsers(): Observable<any>{
    return this.http.get<any>(USERS);
  }

  postUser(user: any): Observable<AddUser>{
    return this.http.post<AddUser>(USERS, JSON.stringify(user), {headers: this.header});
  }
}
