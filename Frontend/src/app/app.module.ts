import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DataTablesModule } from "angular-datatables";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeesListComponent } from './components/employees/employees-list/employees-list.component';
import { AddEmployeeComponent } from './components/employees/add-employee/add-employee.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditEmployeeComponent } from './components/employees/edit-employee/edit-employee.component';
import { JenistransksiListComponent } from './components/jenistransaksi/jenistransksi-list/jenistransksi-list.component';
import { AddJenistransaksiComponent } from './components/jenistransaksi/add-jenistransaksi/add-jenistransaksi.component';
import { EditJenistransaksiComponent } from './components/jenistransaksi/edit-jenistransaksi/edit-jenistransaksi.component';

import { UserListComponent } from './components/user/user-list/user-list.component';
import { AddUserComponent } from './components/user/add-user/add-user.component';
import { EditUserComponent } from './components/user/edit-user/edit-user.component';
import { TransaksiListComponent } from './components/transaksi/transaksi-list/transaksi-list.component';
import { AddTransaksiComponent } from './components/transaksi/add-transaksi/add-transaksi.component';
import { EditTransaksiComponent } from './components/transaksi/edit-transaksi/edit-transaksi.component';
import { LoginPageComponent } from './components/Login/login-page/login-page.component';
import { AuthInterceptor } from './services/auth/auth.interceptor';



@NgModule({
  declarations: [
    AppComponent,
    EmployeesListComponent,
    AddEmployeeComponent,
    EditEmployeeComponent,
    JenistransksiListComponent,
    AddJenistransaksiComponent,
    EditJenistransaksiComponent,
    UserListComponent,
    AddUserComponent,
    EditUserComponent,
    TransaksiListComponent,
    AddTransaksiComponent,
    EditTransaksiComponent,
    LoginPageComponent
  ],
  imports: [
    BrowserModule,
    DataTablesModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass:AuthInterceptor,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
