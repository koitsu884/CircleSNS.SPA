import { Resolve, Router, ActivatedRouteSnapshot } from "@angular/router";
import { User } from "../_models/User";
import { UserService } from "../_services/user.service";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';
import { Injectable } from "@angular/core";

@Injectable()
export class MemberListResolver implements Resolve<User[]> {
    constructor(private userService: UserService, private router: Router ){}

    resolve(route: ActivatedRouteSnapshot) : Observable<User[]> {
        console.log('Resolver');
        return this.userService.getUsers()
                .catch(error => {
                    console.log('Error');
                    this.router.navigate(['/home']);
                    return Observable.of(null);
                })
    }
}