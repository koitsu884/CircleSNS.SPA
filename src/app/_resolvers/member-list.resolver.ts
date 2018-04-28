import { Resolve, Router, ActivatedRouteSnapshot } from "@angular/router";
import { UserService } from "../_services/user.service";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';
import { Injectable } from "@angular/core";
import { Member } from "../_models/Member";

@Injectable()
export class MemberListResolver implements Resolve<Member[]> {
    constructor(private userService: UserService, private router: Router ){}

    resolve(route: ActivatedRouteSnapshot) : Observable<Member[]> {
        return this.userService.getUsers()
                .catch(error => {
                    console.log('Error');
                    this.router.navigate(['/home']);
                    return Observable.of(null);
                })
    }
}