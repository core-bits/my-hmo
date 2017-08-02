import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { RouterModule, Route } from '@angular/router';
import { MaterialModule } from '@angular/material';

import { Page404Component } from './page-404/page-404.component';
import { Page500Component } from './page-500/page-500.component';
import { ErrorPagesRoutingModule, ErrorPagesRoutingModuleComponents } from "app/error-pages/error-pages-routing.module";
import { LayoutsModule } from "app/layouts/layouts.module";

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    HttpModule,
    MaterialModule,
    LayoutsModule,
    ErrorPagesRoutingModule
  ],
  exports: ErrorPagesRoutingModuleComponents,
  declarations: ErrorPagesRoutingModuleComponents
})
export class ErrorPagesModule { }
