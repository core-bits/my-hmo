import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams } from "@angular/http";
import { UserProfileService, IResponse, ICommonResponse } from "app/core/user-profile.service";
import { SpinnerService } from "app/core/spinner/spinner.service";
import { ParamUtil, ContentType } from "app/core/iparam";
import { Observable } from "rxjs/Observable";
import { IHospital, ICompany } from "app/shared/service/common.service";




@Injectable()
export class HMOService {
    private PATH = "http://localhost:8080/hmo-1.0/api/";//LAYOUT_CONFIG.ROOT_PATH.ENV.DEVELOPMENT;
    constructor(private http: Http, private currentUser: UserProfileService,
        private spinnerService: SpinnerService, private paramUtil: ParamUtil,
        private contentType: ContentType) { }

    getHospitalsByHMONumber(hmoNumber: string): Observable<IResponse<IHospital[]>> {
        this.spinnerService.show();
        return this.http.get(this.PATH + "hmo/hospitals/" + hmoNumber, this.paramUtil.getRequestOption())
            .map((response) => {
                return response.json();
            }).catch(this.paramUtil.handleError)
            .finally(() => this.spinnerService.hide());
    }

    getHospitals(): Observable<IResponse<IHospital[]>> {
        this.spinnerService.show();
        return this.http.get(this.PATH + "hmo/hospitals", this.paramUtil.getRequestOption())
            .map((response) => {
                return response.json();
            }).catch(this.paramUtil.handleError)
            .finally(() => this.spinnerService.hide());
    }

    getCompaniesByHMONumber(hmoNumber: string): Observable<IResponse<ICompany[]>> {
        this.spinnerService.show();
        return this.http.get(this.PATH + "hmo/companies/" + hmoNumber, this.paramUtil.getRequestOption())
            .map((response) => {
                return response.json();
            }).catch(this.paramUtil.handleError)
            .finally(() => this.spinnerService.hide());
    }

    getCompanies(): Observable<IResponse<ICompany[]>> {
        this.spinnerService.show();
        return this.http.get(this.PATH + "hmo/companies", this.paramUtil.getRequestOption())
            .map((response) => {
                return response.json();
            }).catch(this.paramUtil.handleError)
            .finally(() => this.spinnerService.hide());
    }

    assignCompanyToHMO(hmoNumber: string, companyNumber: string): Observable<ICommonResponse> {
        this.spinnerService.show();
        let params = new URLSearchParams();
        params.append("hmoNumber", hmoNumber);
        params.append("companyNumber", companyNumber);
        return this.http.post(this.PATH + "hmo/assignCompanyToHMO", params, this.paramUtil.getRequestOption(this.contentType.APPLICATION_X_WWW_FORM_URLENCONDED))
            .map((response) => {
                return response.json();
            }).catch(this.paramUtil.handleError)
            .finally(() => this.spinnerService.hide());
    }

    assignHospitalToHMO(hmoNumber: string, hospitalNumber: string): Observable<ICommonResponse> {
        console.log(hmoNumber, hospitalNumber);
        this.spinnerService.show();
        let params = new URLSearchParams();
        params.append("hmoNumber", hmoNumber);
        params.append("hospitalNumber", hospitalNumber);
        return this.http.post(this.PATH + "hmo/assignHospitalToHMO", params, this.paramUtil.getRequestOption(this.contentType.APPLICATION_X_WWW_FORM_URLENCONDED))
            .map((response) => {
                return response.json();
            }).catch(this.paramUtil.handleError)
            .finally(() => this.spinnerService.hide());
    }
}