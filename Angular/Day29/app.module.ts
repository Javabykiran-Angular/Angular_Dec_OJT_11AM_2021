import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { ParticlesModule } from 'angular-particle';
import { HeaderComponent } from './header/header.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import { NotfoundComponent } from './notfound/notfound.component'; 
import { ModalModule } from 'ngx-bootstrap/modal';
import { UpdateEmpComponent } from './update-emp/update-emp.component';  
import { NgxPaginationModule } from 'ngx-pagination';
import { FilterPipe } from './filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    EmployeeDetailsComponent,
    AddemployeeComponent,
    NotfoundComponent,
    UpdateEmpComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ParticlesModule,
    ModalModule.forRoot(),
    NgxPaginationModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
