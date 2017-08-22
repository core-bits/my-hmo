import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { UserProfileService, IResponse, IUser, ICommonResponse } from "app/core/user-profile.service";
import { SpinnerService } from "app/core/spinner/spinner.service";
import { ParamUtil, ContentType } from "app/core/iparam";
import { IHMO, ICompany, IHospital } from "app/shared/service/common.service";

@Injectable()
export class AuthPagesService {
    private PATH = "http://localhost:8080/hmo-1.0/api/";//LAYOUT_CONFIG.ROOT_PATH.ENV.DEVELOPMENT;
    
    constructor(private http: Http, private currentUser: UserProfileService,
        private spinnerService: SpinnerService, private paramUtil: ParamUtil, 
    private contentType: ContentType) { }

    authenticateUser(username: string, password: string): Observable<Response> {
        this.spinnerService.show();
        let params = new URLSearchParams();
        params.append("username", username);
        params.append("password", password);        
        return this.http.post(this.PATH + "authenticate/login", params, this.paramUtil.getRequestOption(this.contentType.APPLICATION_X_WWW_FORM_URLENCONDED))
            .do((response: Response) => {
                if (response) {
                    let iresponse = <IResponse<IUser>>response.json();
                    this.currentUser.user = iresponse.data;
                    this.currentUser.isLoggedIn = !!this.currentUser.user;
                }
            },
            err => this.paramUtil.handleErrorWithBooleanReturnValue,
            () => this.spinnerService.hide
        );
    }

    signUpHMO(hmo: IHMO): Observable<ICommonResponse>{
        this.spinnerService.show();
        return this.http.post(this.PATH + "hmo/create", hmo, this.paramUtil.getRequestOption())
        .map((response: Response) => {
            return <ICommonResponse>response.json();
        }).catch(this.paramUtil.handleError)
        .finally(() => this.spinnerService.hide());
    }

    signUpCompany(company: ICompany): Observable<ICommonResponse>{
        this.spinnerService.show();
        return this.http.post(this.PATH + "company/create", company, this.paramUtil.getRequestOption())
        .map((response: Response) => {
            return <ICommonResponse>response.json();
        }).catch(this.paramUtil.handleError)
        .finally(() => this.spinnerService.hide());
    }

    signUpHospital(hospital: IHospital): Observable<ICommonResponse>{
        this.spinnerService.show();
        return this.http.post(this.PATH + "hospital/create", hospital, this.paramUtil.getRequestOption())
        .map((response: Response) => {
            return <ICommonResponse>response.json();
        }).catch(this.paramUtil.handleError)
        .finally(() => this.spinnerService.hide());
    }

}
