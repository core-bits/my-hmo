import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../../layouts/shared-service';

@Component({
  selector: 'app-login-x',
  templateUrl: './login-x.component.html',
  styleUrls: ['./login-x.component.scss']
})
export class LoginXComponent implements OnInit {
  pageTitle: string = 'Sign In';

  constructor( private router: Router, private _sharedService: SharedService ) {
    this._sharedService.emitChange(this.pageTitle);
  }

  ngOnInit() {}

  onSubmit() {
    this.router.navigate(['/pages/layout/default/dashboard']);
  }
}
