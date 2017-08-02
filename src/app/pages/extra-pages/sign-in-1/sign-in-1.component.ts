import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { UserProfileService } from "app/core/user-profile.service";

@Component({
  selector: 'page-sign-in-1',
  templateUrl: './sign-in-1.component.html',
  styleUrls: ['./sign-in-1.component.scss']
})
export class PageSignIn1Component implements OnInit {
  constructor(private router: Router, private profile: UserProfileService) {}

  ngOnInit() { }

  onSubmit() {
    //this.profile.isLiveMenu = false;
    this.router.navigate(['/pages/layout/default/dashboard']);
  }
}
