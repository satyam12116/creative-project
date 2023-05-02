import { HttpClient } from '@angular/common/http';
import { Component,EventEmitter,OnInit, Output } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EditProfileComponent } from '../edit-profile/edit-profile.component';
import { SharedService } from '../service/shared.service';

@Component({
  selector: 'app-edit-dashboard',
  templateUrl: './edit-dashboard.component.html',
  styleUrls: ['./edit-dashboard.component.css']
})
export class EditDashboardComponent implements OnInit {
  tableData!:any;
  @Output() EditUser = new EventEmitter<any>();
constructor(private http:HttpClient,private ss :SharedService,private modalService: NgbModal){}
ngOnInit(): void {
  this.ss.sharedSubject.subscribe(res=>{
    if(res){
      this.http.get<any>(`http://localhost:3000/users/${res?.userId}`).subscribe((res1:any)=>{
       this.tableData=res1[0];
      })
    }
  })
}
editUser(user: any) {
  const modalRef = this.modalService.open(EditProfileComponent);
    modalRef.componentInstance.user = user;
}
}
