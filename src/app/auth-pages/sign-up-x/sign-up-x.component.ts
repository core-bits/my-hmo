import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../layouts/shared-service';

@Component({
  selector: 'app-sign-up-x',
  templateUrl: './sign-up-x.component.html',
  styleUrls: ['./sign-up-x.component.scss']
})
export class SignUpXComponent implements OnInit {

   pageTitle: string = 'Sign Up';

  constructor( private _sharedService: SharedService ) {
    this._sharedService.emitChange(this.pageTitle);
  }

  ngOnInit() {}

  onSubmit() { }
}

