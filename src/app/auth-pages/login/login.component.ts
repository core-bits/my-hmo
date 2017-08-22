import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { JQUERY_TOKEN } from "app/core/jquery.service";
import { TOASTR_TOKEN } from "app/core/toastr.service";
import { UserProfileService } from "app/core/user-profile.service";
import { AuthPagesService } from "app/auth-pages/auth-pages.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginInvalid: boolean = false;
    loginInProgress: boolean = false;

    constructor(private auth: AuthPagesService, @Inject(JQUERY_TOKEN) private $: any,
     private router: Router, @Inject(TOASTR_TOKEN) private toastr: any, 
    private profile: UserProfileService) { }

    login(formValues) {
        this.loginInProgress = true;
        if (formValues.username && formValues.password) {
            this.auth.authenticateUser(formValues.username, formValues.password)
            .subscribe((response) => {
                if (!this.profile.isLoggedIn) {
                    this.loginInvalid = true;
                    this.toastr.error("Invalid Username or Password", "Login Error");
                } else {
                    //this.toastr.success("Login Successful", "Welcome " + this.profile.user.firstName);
                    this.profile.isLiveMenu = true;
                    //this.router.navigate(['/pages/layout/default/dashboard']);
                    this.router.navigate(['/private/hmo/dashboard/main']);
                }                
            }, 
            err => {
              this.loginInProgress = false;
              this.toastr.error("An unknown error was encountered. Please try again", "Unknown Error");              
            },
          () => {
            this.loginInProgress = false;
            console.log('Authentication completed!');            
          });
        } else {
            this.toastr.error("Kindly enter username and password", "Incomplete entry");
            this.loginInProgress = false;
        }
    }

  ngOnInit() {}

  onSubmit() {
    this.router.navigate(['/pages/layout/default/dashboard']);
  }

  onForgot(){
    this.router.navigate(['/pages/layout/extra/forgot']);
  }

  onSignUp(){
    this.router.navigate(['/pages/layout/extra/sign-up']);
  }

  onHMOSignUp(){
    this.router.navigate(['/auth/hmo/sign-up']);
  }

  onEmployerSignUp(){
    this.router.navigate(['/auth/employer/sign-up']);
  }

  onHospitalSignUp(){
    this.router.navigate(['/auth/hospital/sign-up']);
  }

}