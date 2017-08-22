import { Component, OnInit, Inject } from '@angular/core';
import { AuthPagesService } from "app/auth-pages/auth-pages.service";
import { Router } from "@angular/router";
import { UserProfileService } from "app/core/user-profile.service";
import { TOASTR_TOKEN } from "app/core/toastr.service";
import { ICompany } from "app/shared/service/common.service";

@Component({
  selector: 'app-employer-sign-up',
  templateUrl: './employer-sign-up.component.html',
  styleUrls: ['./employer-sign-up.component.scss']
})
export class EmployerSignUpComponent implements OnInit {

  constructor(private auth: AuthPagesService, private router: Router,
    private profile: UserProfileService, @Inject(TOASTR_TOKEN) private toastr: any ) { }

  ngOnInit() { }

  signUp(value: ICompany) {
    console.log('value => ', value);
    this.auth.signUpCompany(value).subscribe((response) => {
      console.log('response => ', response);
      this.toastr.success('You account has been successfully created', response.description);
      this.router.navigate(['/auth/login']);
    },
      err => {
        this.toastr.error("An unknown error was encountered. Please try again", "Unknown Error");
      },
      () => {
        console.log('Company SignUp Completed');
      })
  }

}
