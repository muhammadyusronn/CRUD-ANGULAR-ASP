import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  baseApiURL:string="https://localhost:7152"

  constructor(private http:HttpClient) { }

  loginProcess(req:User):Observable<any>{
    req.id = '00000000-0000-0000-0000-000000000000'
    return this.http.post<any>(this.baseApiURL+'/api/auth',req);
  }
}
