import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SharedService } from '../service/shared.service';

@Component({
  selector: 'app-user-auth',
  templateUrl: './user-auth.component.html',
  styleUrls: ['./user-auth.component.css']
})
export class UserAuthComponent {
  signFlag=false;
  LoginForm!:FormGroup;
  SignUpForm!:FormGroup;
  constructor(private fb:FormBuilder,private http:HttpClient,private router:Router,private ss:SharedService){

  }
  ngOnInit(): void {
    this.SignUpForm=this.fb.group({
      name:['',Validators.required],
      email:['',Validators.required],
      phoneNo:['',Validators.required],
      gender:['',Validators.required],
      password:['',Validators.required],
    }) 
    this.LoginForm=this.fb.group({
      email1:['',Validators.required],
      password1:['',Validators.required],
    }) 
}
loginHandler(){
  this.http.get<any>('http://localhost:3000/users').subscribe((res: any) => {
    let user = res.find((a: any) => {
      return (
        a.email === this.LoginForm.get('email1')?.value &&
        a.password === this.LoginForm.get('password1')?.value
      );
    });
    console.log(user, 'sdjjd');
    if (user) {
      this.ss.sharedSubject.next({state:'user'})
      this.router.navigate(['/user-dashboard']);
    } else {
   
    }
  });
}
submitHandler(){
   let body={
    name:this.SignUpForm.get('name')?.value,
    email:this.SignUpForm.get('email')?.value,
    phoneNo:this.SignUpForm.get('phoneNo')?.value,
    gender:this.SignUpForm.get('gender')?.value,
    password:this.SignUpForm.get('password')?.value,
   }
this.http.post('http://localhost:3000/users',body).subscribe(res=>{
console.log(res)
  this.signFlag=true;

})

  
}
}