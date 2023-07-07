import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  addUsrReq:User={
    id:'',
    nama:'',
    username:'',
    password:''
  }
  constructor(private usrService:UserService, private router:Router){}
  ngOnInit(): void {
    
  }

  addUser(){
    this.usrService.addUser(this.addUsrReq).subscribe({
      next:(response)=>{
        this.router.navigate(['user']);
      },
      error:(response)=>{
        console.log(response)
      }
    })
  }
}
