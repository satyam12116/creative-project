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
      phoneNo:['',Validators.required],
      clgName:['',Validators.required],
      address:['',Validators.required],
      projectDocumentation:['',Validators.required],
      projectLanguage:['',Validators.required]
      
    }) 
  }

submitHandler(){
  let body={
    status:'no status',
    name:this.submitForm.get('name')?.value,
    email:this.submitForm.get('email')?.value,
    phoneNo:this.submitForm.get('phoneNo')?.value,
    clgName:this.submitForm.get('clgName')?.value,
    address:this.submitForm.get('address')?.value,
    projectDocumentation:this.submitForm.get('projectDocumentation')?.value,
    projectLanguagege:this.submitForm.get('projectLanguagege')?.value,
  }

this.http.post('http://localhost:3000/msg',body).subscribe(res=>{
  this.closeForm=false
if(res){
  this.closeForm=false
}
})

  
}
}
