import { Component, OnInit, Inject } from '@angular/core';
import { IHospital } from "app/shared/service/common.service";
import { UserProfileService, ICommonResponse } from "app/core/user-profile.service";
import { SharedService } from "app/layouts/shared-service";
import { HMOService } from "app/private/hmo-feature/hmo.service";
import { TOASTR_TOKEN, IToastr } from "app/core/toastr.service";

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
    title: '(Unassigned) List',
    link: ''
  }
];
@Component({
  selector: 'app-assign-hospital',
  templateUrl: './assign-hospital.component.html',
  styleUrls: ['./assign-hospital.component.scss']
})
export class AssignHospitalComponent implements OnInit {

  pageTitle: string = 'Unassigned Hospitals';
  breadcrumb: any[] = breadcrumb;
  hospitals: IHospital[] = [];
  response: ICommonResponse;

  constructor(private _sharedService: SharedService, private hmoService: HMOService,
    @Inject(TOASTR_TOKEN) private toastr: any, private auth: UserProfileService) {
    this._sharedService.emitChange(this.pageTitle);
  }

  ngOnInit() {
    this.getHospitals();
  }

  getHospitals() {
    this.hmoService.getHospitals().subscribe((response) => {
      this.hospitals = response.data;
    },
      err => {
        this.toastr.error("An unknown error was encountered. Please try again", "Unknown Error");
      },
      () => {
        console.log('getHospitals call completed!');
      })
  }

  assign(hospital: IHospital): void {
    this.assignHospitalToHMO(this.auth.user.loginName, hospital.hospitalNumber);
  }

  private assignHospitalToHMO(hmoNumber: string, hospitalNumber: string) {
    this.hmoService.assignHospitalToHMO(hmoNumber, hospitalNumber).subscribe((response) => {
      this.response = response;
      this.toastr.success(response.description, "Successful");
    },
      err => {
        this.toastr.error("An unknown error was encountered. Please try again", "Unknown Error");
      },
      () => {
        console.log('assignHospitalToHMO call completed!');
      })
  }

}
