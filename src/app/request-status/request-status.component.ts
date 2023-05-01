import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SharedService } from '../service/shared.service';

@Component({
  selector: 'app-request-status',
  templateUrl: './request-status.component.html',
  styleUrls: ['./request-status.component.css']
})
export class RequestStatusComponent implements OnInit {
  status!:any;
  filteredUsers!:any;
constructor(private ss:SharedService,private http:HttpClient){}

ngOnInit(): void {
  this.ss.sharedSubject.subscribe(res=>{
    if(res){
      this.http.get<any>('http://localhost:3000/project').subscribe(res1=>{
        this.filteredUsers = res1.filter((user:any) => user.email === res.emailId);
        this.status=this.filteredUsers[0]?.status;
      })
    }
  })
   
}


}
