import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { BusinessUser } from '../_models/BusinessUser';

@Injectable()
export class BusinessUserService {
    baseUrl = environment.apiUrl;
    constructor(private authHttp : HttpClient){}

    getBusinessUser(id:number){
        return this.authHttp.get<BusinessUser>(this.baseUrl + 'businessuser/' + id);
    }
}
