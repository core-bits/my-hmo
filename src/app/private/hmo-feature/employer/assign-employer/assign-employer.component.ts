import { Component, OnInit, Inject } from '@angular/core';
import { ICompany } from "app/shared/service/common.service";
import { SharedService } from "app/layouts/shared-service";
import { HMOService } from "app/private/hmo-feature/hmo.service";
import { UserProfileService, ICommonResponse } from "app/core/user-profile.service";
import { TOASTR_TOKEN, IToastr } from "app/core/toastr.service";

const breadcrumb: any[] = [
  {
    title: 'UI Elements',
    link: '#'
  },
  {
    title: 'Company',
    link: '#'
  },
  {
    title: 'List',
    link: ''
  }
];
@Component({
  selector: 'app-assign-employer',
  templateUrl: './assign-employer.component.html',
  styleUrls: ['./assign-employer.component.scss']
})
export class AssignEmployerComponent implements OnInit {

  pageTitle: string = 'List (Unassigned Companies)';
  breadcrumb: any[] = breadcrumb;
  employers: ICompany[] = [];
  response: ICommonResponse;

  constructor(private _sharedService: SharedService, private hmoService: HMOService,
    @Inject(TOASTR_TOKEN) private toastr: any, private auth: UserProfileService) {
    this._sharedService.emitChange(this.pageTitle);
  }

  ngOnInit() {
    this.getCompanies();
  }

  getCompanies() {
    this.hmoService.getCompanies().subscribe((response) => {
      this.employers = response.data;
    },
      err => {
        this.toastr.error("An unknown error was encountered. Please try again", "Unknown Error");
      },
      () => {
        console.log('getCompanies call completed!');
      })
  }

  

}
