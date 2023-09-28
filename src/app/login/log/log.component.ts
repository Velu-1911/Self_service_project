import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms'
// import { MatSnackBar } from '@angular/material';
import {Route, Router} from '@angular/router'
import { ActivatedRoute } from '@angular/router';
import Validateform from 'src/app/helpers/validateform';
import { UserserviceService } from 'src/app/userservice.service';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent {
  loginForm!: FormGroup
  model:any ={}
  getData: boolean;//to store validation result.

  constructor(private fb: FormBuilder, private router:Router,private userservice :UserserviceService) //inject formbuilder
  {

  }
  ngOnInit():void{
  this.loginForm = this.fb.group({
    username:['',Validators.required],
    password:['',Validators.required]
  })}

  onsubmit()
  {
    if(this.loginForm.valid)
    {

        var user = this.model.username;
        var password = this.model.password;

      this.userservice.getUserdata(user,password)
        .subscribe((res: any) =>{//res did not work in boolean so we converted to any
          this.getData = res;

          if(this.getData == true)
          {
            this.router.navigate(['/home'])
            //this.router.navigate(["/home"]);//add router to the next page
            
          }
          else{
            alert("wrong password");
          }

      })
      console.log(this.loginForm.value)
      // this.snackBar.open('Login Successful','',{duration:1000})
      
      //send val to db
    }
    else{
      //throw error using toaster
      Validateform.validateform(this.loginForm);
    }
  }
}
