import { environment } from "../../environments/environment";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AuthUser } from "../_models/authUser";
import { Injectable } from "@angular/core";
import { Member } from "../_models/Member";

@Injectable()
export class AuthService {
    baseUrl = environment.apiUrl;
    userToken: string;
    decodedToken: any;
    userType: string;
    userId: number;
    displayName: string;

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
                    localStorage.setItem('displayName', JSON.stringify(user.displayName));
                    localStorage.setItem('userType', JSON.stringify(user.userType));
                    localStorage.setItem('userId', JSON.stringify(user.relatedUserClassId));
                    this.decodedToken = this.jwtHelperService.decodeToken(user.tokenString);
                    this.userToken = user.tokenString;
                    this.userId = user.relatedUserClassId;
                    this.displayName = user.displayName;
                    this.userType = user.userType;
                }
            });
    }

    logout(){
        this.userToken = null;
        this.decodedToken = null;
        this.displayName = null;
        this.userType = null;
        this.userId = null;
        localStorage.removeItem('token');
        localStorage.removeItem('userId');
        localStorage.removeItem('userType');
        localStorage.removeItem('displayName');
    }

    registerUser(user: any) {
        return this.httpClient.post(this.baseUrl + 'auth',
            user,
            {
                headers: new HttpHeaders().set('Content-Type', 'application/json')
            });
    }

    // registerMember(member: Member) {
    //     return this.httpClient.post(this.baseUrl + 'member',
    //         member,
    //         {
    //             headers: new HttpHeaders().set('Content-Type', 'application/json')
    //         });
    // }

    loggedIn() {
        const token = this.jwtHelperService.tokenGetter();

        if (!token) {
            return false;
        }

        return !this.jwtHelperService.isTokenExpired(token);
    }
}