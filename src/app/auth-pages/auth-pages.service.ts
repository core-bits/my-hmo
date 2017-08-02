import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { UserProfileService, IResponse, IUser, ICommonResponse } from "app/core/user-profile.service";
import { SpinnerService } from "app/core/spinner/spinner.service";
import { ParamUtil, ContentType } from "app/core/iparam";

export interface IHMO{
    name: string;
    description?:string;
    address: string;
    email: string;
    telephoneNumber: string;
    website?: string;
    hmoNumber: string;
}

export interface IEmployer{

}

export interface IHospital{

}



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
        return this.http.post(this.PATH + "authenticate/fakelogin", params, this.paramUtil.getDefaultRequestOption(this.contentType.APPLICATION_X_WWW_FORM_URLENCONDED))
            .do((response: Response) => {
                if (response) {
                    let iresponse = <IResponse<IUser>>response.json();
                    this.currentUser.user = iresponse.data;
                    this.currentUser.isLoggedIn = !!this.currentUser.user;
                }
            },
            err => this.handleErrorWithBooleanReturnValue,
            () => this.spinnerService.hide
        );
    }

    hmoSignUp(hmo: IHMO): Observable<ICommonResponse>{
        this.spinnerService.show();
        let params = new URLSearchParams();
        params.append("name", hmo.name);
        params.append("description", hmo.description);
        params.append("address", hmo.address);
        params.append("email", hmo.email);
        params.append("hmoNumber", hmo.hmoNumber);
        params.append("telephoneNumber", hmo.telephoneNumber);
        params.append("website", hmo.website);
        return this.http.post(this.PATH + "hmo/create", hmo, this.paramUtil.getDefaultRequestOption(this.contentType.APPLICATION_JSON))
        .map((response: Response) => {
            return <ICommonResponse>response.json();
        }).catch(this.handleError)
        .finally(() => this.spinnerService.hide());
    }

    private handleError(error: Response) {
        return Observable.throw(error.statusText);
    }

    private handleErrorWithBooleanReturnValue(error: Response){
        return Observable.of(false);
    }

}
