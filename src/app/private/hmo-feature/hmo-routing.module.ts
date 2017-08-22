import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { EmployerListComponent } from './employer/employer-list/employer-list.component';
import { HospitalListComponent } from './hospital/hospital-list/hospital-list.component';
import { DefaultLayoutComponent } from "app/layouts/default/default.component";
import { AssignHospitalComponent } from './hospital/assign-hospital/assign-hospital.component';
import { DashboardComponent } from "app/private/hmo-feature/dashboard/dashboard/dashboard.component";
import { AccountComponent } from "app/private/hmo-feature/setting/account/account.component";
import { NotificationComponent } from "app/private/hmo-feature/setting/notification/notification.component";
import { AssignEmployerComponent } from "app/private/hmo-feature/employer/assign-employer/assign-employer.component";

const routes: Routes = [
  {
    path: 'dashboard',
    component: DefaultLayoutComponent,
    children: [
      {
        path: 'main',
        component: DashboardComponent
      }
    ]
  },
  {
    path: 'hospital',
    component: DefaultLayoutComponent,
    children: [
      {
        path: 'list',
        component: HospitalListComponent
      },
      {
        path: 'assign',
        component: AssignHospitalComponent
      }
    ]
  },
  {
    path: 'employer',
    component: DefaultLayoutComponent,
    children: [
      {
        path: 'list',
        component: EmployerListComponent
      },
      {
        path: 'assign',
        component: AssignEmployerComponent
      }
    ]
  },
  {
    path: 'employee',
    component: DefaultLayoutComponent,
    children: [
      {
        path: 'list',
        component: EmployeeListComponent
      }
    ]
  },
  {
    path: 'setting',
    component: DefaultLayoutComponent,
    children: [
      {
        path: 'notification',
        component: NotificationComponent
      },
      {
        path: 'account',
        component: AccountComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HMORoutingModule { }

export const HMOModuleComponent = [
  EmployeeListComponent, EmployerListComponent, 
  HospitalListComponent, AssignHospitalComponent,
  DashboardComponent, NotificationComponent, AccountComponent,
  AssignEmployerComponent
];
