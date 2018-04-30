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
    decodedToken: string;
    currentUseName: string;
    currentMember: Member;

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
                    localStorage.setItem('currentUserName', JSON.stringify(user.userName));
                    localStorage.setItem('currentMember', JSON.stringify(user.member));
                    this.decodedToken = this.jwtHelperService.decodeToken(user.tokenString);
                    this.userToken = user.tokenString;
                    this.currentUseName = user.userName;
                    this.currentMember = user.member;
                }
            });
    }

    registerMember(member: Member) {
        return this.httpClient.post(this.baseUrl + 'member',
            member,
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
}