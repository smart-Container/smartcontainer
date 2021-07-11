import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth'
import { Router } from '@angular/router';
 
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn:boolean

  constructor( private firebaseAuth : AngularFireAuth , private route :Router ) { 
    this.isLoggedIn=false;
    this.firebaseAuth.onAuthStateChanged((user)=>{
      if(user){
        this.isLoggedIn=true;
      }else{
        this.isLoggedIn=false;
      }
    })

  }

    sginupUser(user:any): Promise<any> {
      return this.firebaseAuth.createUserWithEmailAndPassword(user.email,user.password).then((result =>{
        let emaillower=user.email.toLowerCase();
        result.user.sendEmailVerification
      }))
      .catch(eroor=>{
        console.log("auth.sginup eroor",eroor)
        if (eroor.code){
          return{isValid:false, message: eroor.message}
        }
      })

    }
    loginUser(email:string,password:string) :Promise<any>{
      return this.firebaseAuth.signInWithEmailAndPassword(email,password).then(()=>{
        console.log("auth service: login user: success")
      })
      .catch(eroor=>{
        console.log("auth :login eroor")
        console.log("eroor code :" , eroor.code)
        console.log("eroor",eroor)
        if (eroor.code)
        return {isvalid:false, message : eroor.message}
      })
    }
  


}
