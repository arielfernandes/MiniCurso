import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable()
export class GatinhoService {
    constructor(private http: HttpClient){
        
    }
    urlCuriosidade = 'http://34.74.197.115:3000/';
    url = 'https://api.thecatapi.com/v1/images/search';
    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type':  'application/json',
            'x-api-key': '4e04c740-2331-4e2f-adff-363f65faa13d'
        })
    };
    httpOptionsCuriosidade = {
        headers: new HttpHeaders({
            'Content-Type':  'application/json'
        })        
    }
    
    getCuriosidade(){
        return this.http.get(this.urlCuriosidade, this.httpOptionsCuriosidade);
    }
    getGato(){    
        return this.http.get(this.url, this.httpOptions);
    }
    getGatoJPG(){    
        return this.http.get(this.url + "?mime_types=jpg", this.httpOptions);
    }    
    getGatoLong(){    
        return this.http.get(this.url + "?has_breeds=1", this.httpOptions);
    }
}