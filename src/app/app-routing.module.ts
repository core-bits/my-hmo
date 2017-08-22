import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AuthGuard } from "app/core/auth-guard.service";
import { CanDeactivateGuard } from "app/core/can-deactivate-guard.service";
import { UserProfileService } from "app/core/user-profile.service";
import { ParamUtil, ContentType } from "app/core/iparam";

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'private',
    pathMatch: 'full'
  },
  {
    path: 'pages',
    loadChildren: './pages/pages.module#PagesModule',
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    canLoad: [AuthGuard]
  },
  {
    path: 'private',
    loadChildren: './private/private.module#PrivateModule',
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    canLoad: [AuthGuard]
  },
  {
    path: 'auth',
    loadChildren: './auth-pages/auth-pages.module#AuthPagesModule'
  },
  {
    path: 'landing-page',
    loadChildren: './landing-page/landing-page.module#LandingPageModule'
  },
  {
    path: 'error-pages',
    loadChildren: './error-pages/error-pages.module#ErrorPagesModule'
  },
  {
    path: '**',
    loadChildren: './error-pages/error-pages.module#ErrorPagesModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
  providers: [
    AuthGuard,
    CanDeactivateGuard,
    UserProfileService,
    ParamUtil,
    ContentType
  ]
})
export class AppRoutingModule { }