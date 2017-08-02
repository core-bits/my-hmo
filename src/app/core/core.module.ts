import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { JQUERY_PROVIDER } from './jquery.service';
import { TOASTR_PROVIDER } from './toastr.service';
import { ParamUtil } from './iparam';


import { throwIfAlreadyLoaded } from './module-import-guard';

import { SpinnerModule } from './spinner/spinner.module';


// imports:: imports the module's exports. which is usually declarables and providers
// in our case the spinner has no providers.
//
// exports:: exports modules AND components/directives/pipes that other modules may want to use

//declare let jQuery: any;
//declare let toastr: IToastr;

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    SpinnerModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    RouterModule,
    SpinnerModule
  ],
  declarations: [],
  providers: [
    TOASTR_PROVIDER,
    JQUERY_PROVIDER
  ]
})
export class CoreModule {
  constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
