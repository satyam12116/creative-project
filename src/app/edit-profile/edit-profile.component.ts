import { HttpClient } from '@angular/common/http';
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { SharedService } from '../service/shared.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit,OnChanges{
  constructor(private http:HttpClient,private ss:SharedService,private fb:FormBuilder,private router:Router){}
editData!:any;
userid!:any;
editForm!:FormGroup;
ngOnInit(): void {
    this.ss.sharedSubject.subscribe(res=>{
      if(res){
        this.http.get<any>(`http://localhost:3000/users/${res?.userId}`).subscribe((res1:any)=>{
         this.editData=res1;
         this.userid=this.editData[0]?._id;
        })
      }
    })
    this.editForm=this.fb.group({
      name:[this.editData[0]?.name],
      email:[this.editData[0]?.email],
      phoneNo:[this.editData[0]?.phoneNo],
      gender:[this.editData[0]?.gender],
      password:[this.editData[0]?.password]
    })
    // console.log(this.editData[0].name)
    // this.editForm.patchValue({ name: this.editData[0].name, email: this.editData[0].name,phoneNo:this.editData[0].phoneNo,gender:this.editData[0].gender,password:this.editData[0].password});
}
ngOnChanges() {
    // this.editForm=this.fb.group({
    //   name:[this.editData[0]?.name],
    //   email:[this.editData[0]?.email],
    //   phoneNo:[this.editData[0]?.phoneNo],
    //   gender:[this.editData[0]?.gender],
    //   password:[this.editData[0]?.password]
    // }) 
}
editHandler(){
  let body={
    id:this.userid,
    name:this.editForm.get('name')?.value,
    email:this.editForm.get('email')?.value,
    gender:this.editForm.get('gender')?.value,
    phoneNo:this.editForm.get('phoneNo')?.value,
    password:this.editForm.get('password')?.value,
  }
  this.http.put<any>(`http://localhost:3000/users/{this.userid}`,body).subscribe(res=>{
    this.router.navigate(['user-dashboard']);
  })
}
}
