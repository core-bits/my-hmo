import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HMORoutingModule, HMOModuleComponent } from './hmo-routing.module';
import { LayoutsModule } from "app/layouts/layouts.module";
import { SharedModule } from "app/shared/shared.module";
import { MaterialModule } from "@angular/material";
import { HMOService } from "app/private/hmo-feature/hmo.service";

@NgModule({
  imports: [
    CommonModule,
    LayoutsModule,
    SharedModule,
    MaterialModule,
    HMORoutingModule
  ],
  declarations: [HMOModuleComponent],
  providers: [HMOService]
})
export class HMOModule { }
