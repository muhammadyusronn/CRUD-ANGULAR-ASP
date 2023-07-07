import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  addUsrReq:User={
    id:'',
    nama:'',
    username:'',
    password:''
  }
constructor(private route:ActivatedRoute, private usrService:UserService, private router:Router){}
ngOnInit(): void {
  this.route.paramMap.subscribe({
    next:(params)=>{
      const id = params.get('id')
      if(id){
        this.usrService.getUserByID(id).subscribe({
          next:(response)=>{
            this.addUsrReq = response
            this.addUsrReq.password=''
          }
        })
      }
    }
  })
}
updateUser(){
  this.usrService.updateUser(this.addUsrReq.id, this.addUsrReq).subscribe({
    next:(response)=>{
      this.router.navigate(['user'])
    },
    error:(response)=>{
      console.log(response)
    }
  })
}
}
