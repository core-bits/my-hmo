import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from "app/auth-pages/login/login.component";
import { LoginXComponent } from "app/auth-pages/login-x/login-x.component";
import { LoginZComponent } from "app/auth-pages/login-z/login-z.component";
import { PageConfirmComponent } from "app/auth-pages/page-confirm/page-confirm.component";
import { SignUpComponent } from "app/auth-pages/sign-up/sign-up.component";
import { SignUpXComponent } from "app/auth-pages/sign-up-x/sign-up-x.component";
import { ExtraLayoutComponent } from "app/layouts/extra/extra.component";
import { HMOSignUpComponent } from "app/auth-pages/hmo-sign-up/hmo-sign-up.component";
import { EmployerSignUpComponent } from "app/auth-pages/employer-sign-up/employer-sign-up.component";
import { HospitalSignUpComponent } from "app/auth-pages/hospital-sign-up/hospital-sign-up.component";

const routes: Routes = [
    {
        path: '',
        redirectTo: '/auth/login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: ExtraLayoutComponent,
        children: [
            {
                path: '',
                component: LoginComponent
            }
        ]
    },
    {
        path: 'login-x',
        component: ExtraLayoutComponent,
        children: [
            {
                path: '',
                component: LoginXComponent
            }
        ]
    },
    {
        path: 'login-z',
        component: ExtraLayoutComponent,
        children: [
            {
                path: '',
                component: LoginZComponent
            }
        ]
    },
    {
        path: 'confirm',
        component: ExtraLayoutComponent,
        children: [
            {
                path: '',
                component: PageConfirmComponent
            }
        ]
    },
    {
        path: 'sign-up',
        component: ExtraLayoutComponent,
        children: [
            {
                path: '',
                component: SignUpComponent
            }
        ]
    },
    {
        path: 'sign-up-x',
        component: ExtraLayoutComponent,
        children: [
            {
                path: '',
                component: SignUpXComponent
            }
        ]
    },
    {
        path: 'hmo',
        component: ExtraLayoutComponent,
        children: [
            {
                path: 'sign-up',
                component: HMOSignUpComponent
            }
        ]
    },
    {
        path: 'employer',
        component: ExtraLayoutComponent,
        children: [
            {
                path: 'sign-up',
                component: EmployerSignUpComponent
            }
        ]
    },
    {
        path: 'hospital',
        component: ExtraLayoutComponent,
        children: [
            {
                path: 'sign-up',
                component: HospitalSignUpComponent
            }
        ]
    },
    {
        path: '**',
        component: ExtraLayoutComponent,
        children: [
            {
                path: '',
                component: LoginComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuthPagesRoutingModule { }

export const AuthPagesRoutingModuleComponents = [
    LoginComponent, LoginXComponent, LoginZComponent, PageConfirmComponent,
    SignUpComponent, SignUpXComponent
];