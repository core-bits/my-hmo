import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from '@angular/material';
import { ChartsModule } from 'ng2-charts';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { CalendarModule } from 'angular-calendar';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { AgmCoreModule } from '@agm/core';
import { SqueezeBoxModule } from 'squeezebox';
import { AmChartsModule } from "@amcharts/amcharts3-angular";

import { DialogResultComponent } from './material-components/dialog/dialog.component';
import { CalendarDialogComponent } from './calendar/calendar.component';

import { SharedModule } from "app/shared/shared.module";
import { PagesRoutingModule, PagesRoutingModuleComponents } from "app/pages/pages-routing.module";
import { LayoutsModule } from "app/layouts/layouts.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    MaterialModule,
    ChartsModule,
    NgxChartsModule,
    CalendarModule.forRoot(),
    NgxDatatableModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAU9f7luK3J31nurL-Io3taRKF7w9BItQE'
    }),
    SqueezeBoxModule,
    AmChartsModule,
    PagesRoutingModule,
    LayoutsModule
  ],
  declarations: [
    PagesRoutingModuleComponents,
    DialogResultComponent,
    CalendarDialogComponent
  ],
  exports: [
    PagesRoutingModuleComponents,
    DialogResultComponent,
    CalendarDialogComponent
  ],
  entryComponents: [
    DialogResultComponent,
    CalendarDialogComponent
  ]
})
export class PagesModule { }
