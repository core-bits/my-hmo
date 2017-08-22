import { Component, OnInit, Inject } from '@angular/core';
import { AuthPagesService } from "app/auth-pages/auth-pages.service";
import { UserProfileService } from "app/core/user-profile.service";
import { TOASTR_TOKEN } from "app/core/toastr.service";
import { Router } from "@angular/router";
import { IHospital } from "app/shared/service/common.service";

@Component({
  selector: 'app-hospital-sign-up',
  templateUrl: './hospital-sign-up.component.html',
  styleUrls: ['./hospital-sign-up.component.scss']
})
export class HospitalSignUpComponent implements OnInit {

  constructor(private auth: AuthPagesService, private router: Router,
    private profile: UserProfileService, @Inject(TOASTR_TOKEN) private toastr: any ) { }

  ngOnInit() { }

  signUp(value: IHospital) {
    console.log('value => ', value);
    this.auth.signUpHospital(value).subscribe((response) => {
      console.log('response => ', response);
      this.toastr.success('You account has been successfully created', response.description);
      this.router.navigate(['/auth/login']);
    },
      err => {
        this.toastr.error("An unknown error was encountered. Please try again", "Unknown Error");
      },
      () => {
        console.log('Hospital SignUp Completed');
      })
  }

}
