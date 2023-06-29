import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/models/employee.model';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {
  emp:Employee = {
    id:'',
    name:'',
    email:'',
    phone:0,
    salary:0,
    departement:''
  }
  constructor(private route:ActivatedRoute, private empServices:EmployeesService, private router:Router){}

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next:(params) => {
        const id = params.get('id')
        if(id){
          this.empServices.getEmployeeByID(id).subscribe({
            next: (response) =>{
              this.emp = response;
            }
          })

        }
      }
    })
  }

  updateEmployee(){
    this.empServices.updateEmployee(this.emp.id, this.emp).subscribe({
      next:(response)=>{
        this.router.navigate(['employees'])
      }
    })
  }

  deleteEmployee(id:string){
    this.empServices.deleteEmployee(id).subscribe({
      next:(response)=>{
        this.router.navigate(['employees'])
      }
    })
  }

}
