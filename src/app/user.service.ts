import { Injectable } from '@angular/core';
import {  HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs/internal/Observable';
// import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient:HttpClient) { }

  registerUser(data):Observable<any>{
    return this.httpClient.post("http://localhost:3000/admin/registerUser",{
      "email":data.email,
      "userName":data.userName,
      "password":data.password
    })
  }

  validateUser(data):Observable<any>{
    return this.httpClient.post("http://localhost:3000/admin/validateUser",{
      "email":data.email,
      "password":data.password
    })
  }
}
