import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { RouterModule, Route } from '@angular/router';
import { MaterialModule } from '@angular/material';
import { FormsModule } from "@angular/forms";

import {AuthPagesService} from './auth-pages.service';

import { SharedModule } from "app/shared/shared.module";
import { AuthPagesRoutingModuleComponents, AuthPagesRoutingModule } from "app/auth-pages/auth-pages-routing.module";
import { LayoutsModule } from "app/layouts/layouts.module";
import { HMOSignUpComponent } from './hmo-sign-up/hmo-sign-up.component';
import { EmployerSignUpComponent } from './employer-sign-up/employer-sign-up.component';
import { HospitalSignUpComponent } from './hospital-sign-up/hospital-sign-up.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    SharedModule,
    LayoutsModule,
    HttpModule,
    MaterialModule,
    AuthPagesRoutingModule
  ],
  exports: [AuthPagesRoutingModuleComponents],
  declarations: [
    AuthPagesRoutingModuleComponents,
    HMOSignUpComponent,
    EmployerSignUpComponent,
    HospitalSignUpComponent
  ],
  providers: [AuthPagesService]
})
export class AuthPagesModule { }





