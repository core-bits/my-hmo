import { Component, OnInit, Inject } from '@angular/core';
import { SharedService } from "app/layouts/shared-service";
import { Observable } from "rxjs/Observable";
import { IHospital } from "app/shared/service/common.service";
import { HMOService } from "app/private/hmo-feature/hmo.service";
import { TOASTR_TOKEN } from "app/core/toastr.service";
import { IResponse, UserProfileService } from "app/core/user-profile.service";

const breadcrumb: any[] = [
  {
    title: 'UI Elements',
    link: '#'
  },
  {
    title: 'Hospitals',
    link: '#'
  },
  {
    title: 'Assigned',
    link: ''
  }
];
@Component({
  selector: 'app-hospital-list',
  templateUrl: './hospital-list.component.html',
  styleUrls: ['./hospital-list.component.scss']
})
export class HospitalListComponent implements OnInit {
  pageTitle: string = 'Assigned Hospitals';
  breadcrumb: any[] = breadcrumb;
  hospitals: IHospital[] = [];

  constructor(private _sharedService: SharedService, private hmoService: HMOService,
    @Inject(TOASTR_TOKEN) private toastr: any, private auth: UserProfileService) {
    this._sharedService.emitChange(this.pageTitle);
  }

  ngOnInit() {
    this.getHospitalsByHMONumber(this.auth.user.loginName);
   }

  getHospitalsByHMONumber(hmoNumber: string) {
    this.hmoService.getHospitalsByHMONumber(hmoNumber).subscribe((response) => {
      this.hospitals = response.data;
    },
      err => {
        this.toastr.error("An unknown error was encountered. Please try again", "Unknown Error");
      },
      () => {
        console.log('getAssignedHospitals call completed!');
      })
  }
}
