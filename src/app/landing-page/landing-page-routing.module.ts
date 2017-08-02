import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from "app/landing-page/home-page/home-page.component";
import { ContactUsPageComponent } from "app/landing-page/contact-us-page/contact-us-page.component";
import { AboutUsPageComponent } from "app/landing-page/about-us-page/about-us-page.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: '/landing-page/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomePageComponent
  },
  {
    path: 'contact-us',
    component: ContactUsPageComponent
  },
  {
    path: 'about-us',
    component: AboutUsPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingPageRoutingModule { }

export const LandingPageRoutingModuleComponents = [
  HomePageComponent, ContactUsPageComponent, AboutUsPageComponent
]

