import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

//Imports of application Custom/Feature Modules
import { LayoutSectionModule } from "app/layout-section/layout-section.module";
import { SharedModule } from "app/shared/shared.module";

import { BoxedLayoutComponent } from "app/layouts/boxed/boxed.component";
import { BoxedCLayoutComponent } from "app/layouts/boxed-c/boxed-c.component";
import { DefaultLayoutComponent } from "app/layouts/default/default.component";
import { DefaultCLayoutComponent } from "app/layouts/default-c/default-c.component";
import { ExtraLayoutComponent } from "app/layouts/extra/extra.component";

const LayoutsModuleComponents = [
    BoxedLayoutComponent,
    BoxedCLayoutComponent,
    DefaultLayoutComponent,
    DefaultCLayoutComponent,
    ExtraLayoutComponent
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        LayoutSectionModule,
        SharedModule
    ],
    exports: LayoutsModuleComponents,
    declarations: LayoutsModuleComponents
})
export class LayoutsModule implements OnInit {

    constructor() { }

    ngOnInit() { }
}