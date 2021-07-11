import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from 'app/services/auth.service';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  singupForm :FormGroup
  loginForm : FormGroup
  loginfirsmessage: string
  fireMessage : string
  isSignin=false



  type:boolean=false;
  constructor( private fAuth: AngularFireAuth,private toastr: ToastrService,  private fireservice : AuthService, private route : Router ) { 
    this.fireMessage=""
  }

  ngOnInit(): void {
    this.toastr.error("Hello, I'm the toastr message.")

    this.singupForm= new FormGroup({
      'dispalyname': new FormControl ("",Validators.required),
      'email': new FormControl ("",[Validators.required,Validators.email]),
      'password': new FormControl ("",Validators.required)


    })
    this.loginForm = new FormGroup({
      'email': new FormControl ("",[Validators.required,Validators.email]),
      'password': new FormControl ("",Validators.required)

    })

  }
  sginUp() {
    console.log(this.singupForm)
    if(this.singupForm.invalid)
    return 
    else{
      this.fireservice.sginupUser(this.singupForm.value).then(result=>{
        if (result == null)
        this.route.navigate(['dashboard/overview']);
        else if(result.isValid==false)
        this.fireMessage= result.message
      }).catch(()=>{

      })
    }
  }
  logIn(){
    if (this.loginForm.invalid){
      return
    }else{
      this.fireservice.loginUser(this.loginForm.value.email,this.loginForm.value.password).then(result=>{
        if (result==null){
          console.log("logging...")
          this.route.navigate(['dashboard/overview'])
        } else if(result.isValid==false) {
          console.log("login eroor",result)
          this.loginfirsmessage= result.message

        }
      })
    }
  }

  

  login(){
    this.type= false ;
  }
    signup(){
      this.type= true;
}

}
