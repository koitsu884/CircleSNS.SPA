import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Member } from '../_models/Member';

@Injectable()
export class MemberService {

    baseUrl = environment.apiUrl;
    constructor(private authHttp : HttpClient){}

    getMembers(){
        return this.authHttp.get<Member[]>(this.baseUrl + 'member');
    }

    getMember(id: number){
        return this.authHttp.get<Member>(this.baseUrl + 'member/' + id);
    }
}
