import { CanActivate, Router } from "@angular/router";
import { AuthService } from "../_services/auth.service";
import { Observable } from "rxjs/Observable";
import { Injectable } from "@angular/core";

@Injectable()
export class MemberGuard implements CanActivate {
    constructor(private authService:AuthService,
                private router: Router){}

    canActivate(): Observable<boolean> | Promise<boolean> | boolean {
        if(this.authService.loggedInAsMember()){
            return true;
        }

        console.error("You need to be logged in as a member to access this area");
        this.router.navigate(['/home']);
        return false;
    }
}