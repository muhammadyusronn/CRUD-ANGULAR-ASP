import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  user : User[] = [];
  constructor(private usrService:UserService, private router:Router){}

  ngOnInit(): void {
    this.getAllUser()
  }

  getAllUser(){
    this.usrService.gettAllUser().subscribe({
      next:(user)=>{
        this.user = user;
      },
      error:(response)=>{
        console.log(response)
      }
    })
  }

  deleteUser(id:string){
    this.usrService.deleteUser(id).subscribe({
      next:(response)=>{
        this.getAllUser()
        this.router.navigate(['user'])
      },
      error:(response)=>{
        console.log(response)
      }
    })
  }

}
