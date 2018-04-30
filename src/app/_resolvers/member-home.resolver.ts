import { Member } from "../_models/Member";
import { Resolve, ActivatedRouteSnapshot, Router } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { MemberService } from "../_services/member.service";
import { AlertifyService } from "../_services/alertify.service";
import { Injectable } from "@angular/core";

@Injectable()
export class MemberHomeResolver implements Resolve<Member> {
    constructor(private memberService: MemberService, private router: Router, private alertify: AlertifyService){}

    resolve(route: ActivatedRouteSnapshot) : Observable<Member> {
        return this.memberService.getMember(route.params['id']).catch(error => {
            this.alertify.error('Problem retrieving data');
            this.router.navigate(['/home']);
            return Observable.of(null);
        })
    }
}