import { Component, OnInit, Inject } from '@angular/core';
import { AuthPagesService } from "app/auth-pages/auth-pages.service";
import { Router } from "@angular/router";
import { UserProfileService } from "app/core/user-profile.service";
import { TOASTR_TOKEN } from "app/core/toastr.service";
import { IHMO } from "app/shared/service/common.service";

@Component({
  selector: 'app-hmo-sign-up',
  templateUrl: './hmo-sign-up.component.html',
  styleUrls: ['./hmo-sign-up.component.scss']
})
export class HMOSignUpComponent implements OnInit {

  constructor(private auth: AuthPagesService, private router: Router,
    private profile: UserProfileService, @Inject(TOASTR_TOKEN) private toastr: any) { }

  ngOnInit() { }

  signUp(value: IHMO) {
    console.log('value => ', value);
    this.auth.signUpHMO(value).subscribe((response) => {
      console.log('response => ', response);
      this.toastr.success('You account has been successfully created', response.description);
      this.router.navigate(['/auth/login']);
    },
      err => {
        this.toastr.error("An unknown error was encountered. Please try again", "Unknown Error");
      },
      () => {
        console.log('HMO SignUp Completed');
      })
  }

}
