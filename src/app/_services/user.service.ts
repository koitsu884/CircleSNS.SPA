import { environment } from "../../environments/environment";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { User } from "../_models/User";

@Injectable()
export class UserService {
    baseUrl = environment.apiUrl;
    constructor(private authHttp : HttpClient){}

    getUsers(){
        return this.authHttp.get<User[]>(this.baseUrl + 'member');
    }
}