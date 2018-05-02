import { CanActivate, Router } from "@angular/router";
import { AuthService } from "../_services/auth.service";
import { Observable } from "rxjs/Observable";
import { Injectable } from "@angular/core";

@Injectable()
export class BusinessGuard implements CanActivate {
    constructor(private authService:AuthService,
                private router: Router){}

    canActivate(): Observable<boolean> | Promise<boolean> | boolean {
        if(this.authService.loggedInAsBusiness()){
            return true;
        }

        console.error("You need to be logged in as business user to access this area");
        this.router.navigate(['/home']);
        return false;
    }
}