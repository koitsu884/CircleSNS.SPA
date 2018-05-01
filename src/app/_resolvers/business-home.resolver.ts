import { Resolve, ActivatedRouteSnapshot, Router } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { MemberService } from "../_services/member.service";
import { AlertifyService } from "../_services/alertify.service";
import { Injectable } from "@angular/core";
import { BusinessUser } from "../_models/BusinessUser";
import { BusinessUserService } from "../_services/businessuser.service";

@Injectable()
export class BusinessHomeResolver implements Resolve<BusinessUser> {
    constructor(private businessUserService: BusinessUserService, private router: Router, private alertify: AlertifyService){}

    resolve(route: ActivatedRouteSnapshot) : Observable<BusinessUser> {
        return this.businessUserService.getBusinessUser(route.params['id']).catch(error => {
            this.alertify.error('Problem retrieving data');
            this.router.navigate(['/home']);
            return Observable.of(null);
        })
    }
}