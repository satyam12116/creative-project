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


  if(this.projectForm.valid){
    this.http.post('http://localhost:3000/project',body).subscribe(res=>{
      this.closeForm=false
    if(res){
      this.closeForm=false
    }
    })
  }
  

  
}
get name() {
  return this.projectForm.get('name')!;
}

get phoneNo() {
  return this.projectForm.get('phoneNo')!;
}

get email() {
  return this.projectForm.get('email')!;
}
get gender() {
  return this.projectForm.get('gender')!;
}

get password() {
  return this.projectForm.get('password')!;
}
get projectDocumentation() {
  return this.projectForm.get('projectDocumentation')!;
}
get address() {
  return this.projectForm.get('address')!;
}
get clgName() {
  return this.projectForm.get('clgName')!;
}
get projectLanguage() {
  return this.projectForm.get('projectLanguage')!;
}
validate(): void {
  if (this.projectForm?.invalid) {
    for (const control of Object.keys(this.projectForm.controls)) {
      this.projectForm.controls[control].markAsTouched();
    }
    return;
  }
}
}
