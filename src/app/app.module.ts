import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactmeComponent } from './components/contactme/contactme.component';
import { GetprojectComponent } from './components/getproject/getproject.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserAuthComponent } from './user-auth/user-auth.component';
import { AdminAuthComponent } from './admin-auth/admin-auth.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { RequestStatusComponent } from './request-status/request-status.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { EditDashboardComponent } from './edit-dashboard/edit-dashboard.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactmeComponent,
    GetprojectComponent,
    UserAuthComponent,
    AdminAuthComponent,
    AdminDashboardComponent,
    UserDashboardComponent,
    RequestStatusComponent,
    EditProfileComponent,
    EditDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
