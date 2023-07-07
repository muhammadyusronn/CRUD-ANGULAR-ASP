import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseApiURL:string = "https://localhost:7152"

  constructor(private http: HttpClient) { }

  gettAllUser():Observable<User[]>{
    return this.http.get<User[]>(this.baseApiURL+'/api/user')
  }
  addUser(addUsrReq:User):Observable<User>{
    addUsrReq.id = '00000000-0000-0000-0000-000000000000'
    return this.http.post<User>(this.baseApiURL+'/api/user', addUsrReq)
  }
  getUserByID(id:string): Observable<User>{
    return this.http.get<User>(this.baseApiURL+'/api/user/'+id)
  }
  updateUser(id:string, req:User):Observable<User>{
    return this.http.put<User>(this.baseApiURL+'/api/user/'+id, req)
  }
  deleteUser(id:string):Observable<User>{
    return this.http.delete<User>(this.baseApiURL+'/api/user/'+id)
  }
}
