import { HttpClient } from '@angular/common/http';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { SharedService } from '../service/shared.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit,OnChanges{

editData!:any;
userid!:any;
editForm!:FormGroup;
@Input() user:any;
constructor(private http:HttpClient,private ss:SharedService,private fb:FormBuilder,private router:Router,public activeModal: NgbActiveModal){}
ngOnInit(): void {
  this.ss.sharedSubject.subscribe(res=>{
    this.userid=res.userId;
  })
    this.editForm=this.fb.group({
      name:[this.user.name],
      email:[this.user.email],
      phoneNo:[this.user.phoneNo],
      gender:[this.user.gender],
      password:[this.user.password]
    })
    console.log(this.user,'hii');
    
  }
ngOnChanges(): void {
  console.log(this.user,'hii'); 
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
  this.http.put<any>(`http://localhost:3000/users/${this.userid}`,body).subscribe(res=>{
    if(res){
      this.activeModal.close();
      this.router.navigate(['/user-dashboard']);
    }
   
  })
}
}
