import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'hmo',
    loadChildren: 'app/private/hmo-feature/hmo.module#HMOModule'
  },
  {
    path: 'hospital',
    loadChildren: 'app/private/hospital-feature/hospital.module#HospitalModule'
  },
  {
    path: 'employer',
    loadChildren: 'app/private/employer-feature/employer.module#EmployerModule'
  },
  {
    path: 'employee',
    loadChildren: 'app/private/employee-feature/employee.module#EmployeeModule'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivateRoutingModule { }
