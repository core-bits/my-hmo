import { Component, OnInit, Inject } from '@angular/core';
import { SharedService } from "app/layouts/shared-service";
import { HMOService } from "app/private/hmo-feature/hmo.service";
import { ICompany } from "app/shared/service/common.service";
import { UserProfileService } from "app/core/user-profile.service";
import { TOASTR_TOKEN } from "app/core/toastr.service";

const breadcrumb: any[] = [
  {
    title: 'UI Elements',
    link: '#'
  },
  {
    title: 'Employee',
    link: '#'
  },
  {
    title: 'List',
    link: ''
  }
];
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  pageTitle: string = 'List';
  breadcrumb: any[] = breadcrumb;

  constructor(private _sharedService: SharedService, private hmoService: HMOService,
    @Inject(TOASTR_TOKEN) private toastr: any, private auth: UserProfileService) {
    this._sharedService.emitChange(this.pageTitle);
  }

  ngOnInit() {}

}
