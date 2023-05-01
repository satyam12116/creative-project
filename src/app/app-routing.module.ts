import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactmeComponent } from './components/contactme/contactme.component';
import { GetprojectComponent } from './components/getproject/getproject.component';
import { UserAuthComponent } from './user-auth/user-auth.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { AdminAuthComponent } from './admin-auth/admin-auth.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { RequestStatusComponent } from './request-status/request-status.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactmeComponent},
  {path:'getproject',component:GetprojectComponent},
  {path:'user-auth',component:UserAuthComponent},
  {path:'user-dashboard',component:UserDashboardComponent},
  {path:'admin-dashboard',component:AdminDashboardComponent},
  {path:'admin-auth',component:AdminAuthComponent},
  {path:'req',component:RequestStatusComponent},
  {path:'editprofile',component:EditProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
