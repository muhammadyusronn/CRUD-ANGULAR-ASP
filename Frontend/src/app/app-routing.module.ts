import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesListComponent } from './components/employees/employees-list/employees-list.component';
import { AddEmployeeComponent } from './components/employees/add-employee/add-employee.component';
import { EditEmployeeComponent } from './components/employees/edit-employee/edit-employee.component';
import { JenistransksiListComponent } from './components/jenistransaksi/jenistransksi-list/jenistransksi-list.component';
import { AddJenistransaksiComponent } from './components/jenistransaksi/add-jenistransaksi/add-jenistransaksi.component';
import { EditJenistransaksiComponent } from './components/jenistransaksi/edit-jenistransaksi/edit-jenistransaksi.component';
import { HomeComponent } from './components/home/home.component';
import { UserListComponent } from './components/user/user-list/user-list.component';
import { AddUserComponent } from './components/user/add-user/add-user.component';
import { EditUserComponent } from './components/user/edit-user/edit-user.component';
import { TransaksiListComponent } from './components/transaksi/transaksi-list/transaksi-list.component';
import { AddTransaksiComponent } from './components/transaksi/add-transaksi/add-transaksi.component';


const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'jenistransaksi',
    component:JenistransksiListComponent
  },
  {
    path:'jenistransaksi/add',
    component:AddJenistransaksiComponent
  },
  {
    path:'jenistransaksi/edit/:id',
    component:EditJenistransaksiComponent
  },
  {
    path:'user',
    component:UserListComponent
  },
  {
    path:'user/add',
    component:AddUserComponent
  },
  {
    path:'user/edit/:id',
    component:EditUserComponent
  },
  {
    path:'transaksi',
    component:TransaksiListComponent
  },
  {
    path:'transaksi/add',
    component:AddTransaksiComponent
  },
  {
    path:'employees',
    component:EmployeesListComponent
  },
  {
    path:'employees/add',
    component:AddEmployeeComponent
  },
  {
    path:'employees/edit/:id',
    component:EditEmployeeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
