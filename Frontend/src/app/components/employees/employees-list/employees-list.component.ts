import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/models/employee.model';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})

export class EmployeesListComponent implements OnInit {
  employees : Employee[] = [];

  constructor( private empService: EmployeesService, private router:Router) { }
  ngOnInit(): void {
    this.getAllEmployee()
  }
  getAllEmployee(){
    this.empService.getAllEmployee().subscribe({
      next: (employees) => {
        this.employees = employees;
      },
      error: (response) =>{
        console.log(response)
      }
    });
  }
  deleteEmployee(id:string){
    this.empService.deleteEmployee(id).subscribe({
      next:(response)=>{
        this.getAllEmployee()
        this.router.navigate(['employees'])
      }
    })
  }
}
