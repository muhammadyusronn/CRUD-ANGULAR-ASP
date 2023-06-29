import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  baseApiURL : string = "https://localhost:7152"

  constructor(private http: HttpClient) { }

  getAllEmployee(): Observable<Employee[]>{
    return this.http.get<Employee[]>(this.baseApiURL+'/api/employee')
  }
  addEmployee(addEmployeReq:Employee): Observable<Employee>{
    addEmployeReq.id='00000000-0000-0000-0000-000000000000'
    return this.http.post<Employee>(this.baseApiURL+'/api/employee', addEmployeReq)
  }
  getEmployeeByID(id:string): Observable<Employee>{
    return this.http.get<Employee>(this.baseApiURL+'/api/employee/'+id)
  }
  updateEmployee(id:string, req:Employee):Observable<Employee>{
    return this.http.put<Employee>(this.baseApiURL+'/api/employee/'+id, req);
  }
  deleteEmployee(id:string):Observable<Employee>{
    return this.http.delete<Employee>(this.baseApiURL+'/api/employee/'+id);
  }
}
