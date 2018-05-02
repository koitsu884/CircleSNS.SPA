import { Resolve, Router, ActivatedRouteSnapshot } from "@angular/router";
import { Member } from "../_models/Member";
import { MemberService } from "../_services/member.service";
import { AlertifyService } from "../_services/alertify.service";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/observable/of';
import { AuthService } from "../_services/auth.service";

@Injectable()
export class MemberEditResolver implements Resolve<Member> {
    constructor(private memberService: MemberService,
                private authService: AuthService,
                private router: Router, 
                private alertify: AlertifyService){}

    resolve(route: ActivatedRouteSnapshot) : Observable<Member> {
        return this.memberService.getMember(this.authService.appUser.relatedUserClassId).catch(error => {
            this.alertify.error('Problem retrieving data');
            this.router.navigate(['/home']);
            return Observable.of(null);
        })
    }
}