import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-getproject',
  templateUrl: './getproject.component.html',
  styleUrls: ['./getproject.component.css']
})
export class GetprojectComponent {
  closeForm=true;
  projectForm!:FormGroup;
  constructor(private fb:FormBuilder,private http:HttpClient){

  }
  ngOnInit(): void {
    this.projectForm=this.fb.group({
      name:['',Validators.required],
      email:['',Validators.required],
      phone:['',Validators.required],
      clgName:['',Validators.required],
      address:['',Validators.required],
      projectDocumentation:['',Validators.required],
      projectLanguage:['',Validators.required],  
    }) 
  }

submitHandler(){
  let body={
    status:"no Status",
    name:this.projectForm.get('name')?.value,
    email:this.projectForm.get('email')?.value,
    phoneNo:this.projectForm.get('phone')?.value,
    clgName:this.projectForm.get('clgName')?.value,
    address:this.projectForm.get('address')?.value,
    projectDocumentation:this.projectForm.get('projectDocumentation')?.value,
    projectLanguage:this.projectForm.get('projectLanguage')?.value,
  }

this.http.post('http://localhost:3000/project',body).subscribe(res=>{
  this.closeForm=false
if(res){
  this.closeForm=false
}
})

  
}
}
