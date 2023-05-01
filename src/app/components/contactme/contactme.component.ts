import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contactme',
  templateUrl: './contactme.component.html',
  styleUrls: ['./contactme.component.css']
})
export class ContactmeComponent implements OnInit{
  closeForm=true;
  submitForm!:FormGroup;
  constructor(private fb:FormBuilder,private http:HttpClient){

  }
  ngOnInit(): void {
    this.submitForm=this.fb.group({
      name:['',Validators.required],
      email:['',Validators.required],
      phone:['',Validators.required],
      message:['',Validators.required],

      
    }) 
  }

submitHandler(){
  let body={
    name:this.submitForm.get('name')?.value,
    email:this.submitForm.get('email')?.value,
    phoneNo:this.submitForm.get('phone')?.value,
    message:this.submitForm.get('message')?.value,
  }

this.http.post('http://localhost:3000/msg',body).subscribe(res=>{
if(res){
  this.closeForm=false
}
})

  
}
}
