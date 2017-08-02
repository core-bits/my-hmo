import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Page404Component } from "app/error-pages/page-404/page-404.component";
import { Page500Component } from "app/error-pages/page-500/page-500.component";
import { ExtraLayoutComponent } from "app/layouts/extra/extra.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: '/error-pages/500',
    pathMatch: 'full'
  },
  {
    path: '404',
    component: ExtraLayoutComponent,
    children: [
        {
            path: '',
            component: Page404Component
        }
    ]
  },
  {
    path: '500',
    component: ExtraLayoutComponent,
    children: [
        {
            path: '',
            component: Page500Component
        }
    ]
  },
  {
    path: '**',
    component: ExtraLayoutComponent,
    children: [
        {
            path: '',
            component: Page500Component
        }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ErrorPagesRoutingModule { }

export const ErrorPagesRoutingModuleComponents = [
  Page404Component, Page500Component
]

