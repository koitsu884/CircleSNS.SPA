import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { City } from '../_models/City';
import { Hometown } from '../_models/Hometown';
import 'rxjs/add/operator/catch';

@Injectable()
export class GlobalService {
    baseUrl = environment.apiUrl;
    // cities : City[] = [];
    // hometowns: Hometown[] = [];

    constructor(private authHttp : HttpClient){
        // this.authHttp.get<City[]>(this.baseUrl + 'city').subscribe(cities => {
        //     this.cities = cities;
        //     console.log(this.cities);
        // });

        // this.authHttp.get<Hometown[]>(this.baseUrl + 'hometown').subscribe(hometowns => {
        //     this.hometowns = hometowns;
        // });
    }

    getCities(){
        return this.authHttp.get<City[]>(this.baseUrl + 'city');
    }

    getHometowns(){
        return this.authHttp.get<Hometown[]>(this.baseUrl + 'hometown');
    }
}
