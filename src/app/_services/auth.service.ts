import { environment } from "../../environments/environment";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AuthUser } from "../_models/authUser";
import { Injectable } from "@angular/core";
import { Member } from "../_models/Member";
import { AppUser } from "../_models/AppUser";

@Injectable()
export class AuthService {
    baseUrl = environment.apiUrl;
    userToken: string;
    decodedToken: any;
    appUser: AppUser;

    constructor(private httpClient: HttpClient, private jwtHelperService: JwtHelperService) { }

    login(userName: string, password: string, isMember = true) {
        return this.httpClient.post<AuthUser>(this.baseUrl + 'auth/login', { "UserName": userName, "Password": password, "IsMember": isMember }, {
            headers: new HttpHeaders()
                .set('Content-Type', 'application/json')
        })
            .map(user => {
                if (user) {
                    console.log(user);
                    localStorage.setItem('token', user.tokenString);
                    localStorage.setItem('appUser', JSON.stringify(user.appUser));
                    this.decodedToken = this.jwtHelperService.decodeToken(user.tokenString);
                    this.userToken = user.tokenString;
                    this.appUser = user.appUser;
                }
            });
    }

    logout(){
        this.userToken = null;
        this.decodedToken = null;
        this.appUser = null;
        localStorage.removeItem('token');
        localStorage.removeItem('appUser');
    }

    registerUser(user: any) {
        return this.httpClient.post(this.baseUrl + 'auth',
            user,
            {
                headers: new HttpHeaders().set('Content-Type', 'application/json')
            });
    }

    updateUser(user: any) {
        return this.httpClient.put(this.baseUrl + 'appuser/' + this.decodedToken.nameid,
            user,
            {
                headers: new HttpHeaders().set('Content-Type', 'application/json')
            });
    }

    loggedIn() {
        const token = this.jwtHelperService.tokenGetter();

        if (!token) {
            return false;
        }

        return !this.jwtHelperService.isTokenExpired(token);
    }

    loggedInAsBusiness(){
        return this.loggedIn() && this.appUser.userType == "Business";
    }

    loggedInAsMember(){
        return this.loggedIn() && this.appUser.userType == "Member";
    }
}