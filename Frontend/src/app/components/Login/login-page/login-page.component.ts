import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { LoginService } from 'src/app/services/auth/login.service';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  loginForm:FormGroup;
  req:User = {
    id:'',
    username:'',
    password:'',
    nama:''
  }
  constructor(private authService:LoginService, private router:Router, private formBuilder:FormBuilder){}
  ngOnInit(): void {
    this.initForm()
  }
  initForm(){
    this.loginForm = this.formBuilder.group({
      username:new FormControl('',[Validators.required]),
      password:new FormControl('',[Validators.required]),
    })
  }

  loginProcess(){
    this.req.username = this.loginForm.get('username')?.value
    this.req.password = this.loginForm.get('password')?.value
    if(this.loginForm.valid){
      this.authService.loginProcess(this.req).subscribe({
        next:(response)=>{
          localStorage.clear();
          localStorage.setItem('authToken', response.token)
          localStorage.setItem('username', this.req.username)
          this.router.navigate(['/'])
        },
        error:(response)=>{
          console.log(response)
        }
      })
    }else{
      console.log("not valid")
    }
  }
}
