import { environment } from "../../environments/environment";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Member } from "../_models/Member";

@Injectable()
export class UserService {
    baseUrl = environment.apiUrl;
    constructor(private authHttp : HttpClient){}

    getUsers(){
        return this.authHttp.get<Member[]>(this.baseUrl + 'member');
    }
}