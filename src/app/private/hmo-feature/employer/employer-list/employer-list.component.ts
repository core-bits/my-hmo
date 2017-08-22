import { Component, OnInit, Inject } from '@angular/core';
import { ICompany } from "app/shared/service/common.service";
import { SharedService } from "app/layouts/shared-service";
import { HMOService } from "app/private/hmo-feature/hmo.service";
import { UserProfileService } from "app/core/user-profile.service";
import { TOASTR_TOKEN } from "app/core/toastr.service";

const breadcrumb: any[] = [
  {
    title: 'UI Elements',
    link: '#'
  },
  {
    title: 'Employer',
    link: '#'
  },
  {
    title: 'List',
    link: ''
  }
];
@Component({
  selector: 'app-employer-list',
  templateUrl: './employer-list.component.html',
  styleUrls: ['./employer-list.component.scss']
})
export class EmployerListComponent implements OnInit {

  pageTitle: string = 'List (Unassigned)';
  breadcrumb: any[] = breadcrumb;
  employers: ICompany[] = [];

  constructor(private _sharedService: SharedService, private hmoService: HMOService,
    @Inject(TOASTR_TOKEN) private toastr: any, private auth: UserProfileService) {
    this._sharedService.emitChange(this.pageTitle);
  }

  ngOnInit() {
    this.getCompaniesByHMONumber(this.auth.user.loginName);
  }

  getCompaniesByHMONumber(hmoNumber: string) {
    this.hmoService.getCompaniesByHMONumber(hmoNumber).subscribe((response) => {
      this.employers = response.data;
    },
      err => {
        this.toastr.error("An unknown error was encountered. Please try again", "Unknown Error");
      },
      () => {
        console.log('getCompaniesByHMONumber call completed!');
      })
  }

}
