import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders} from '@angular/common/http';
import { GLOBAL } from './global';


@Injectable()
export class UserService{
    public url: String;
    private identity = null;
    private token = null;

    constructor(private http: HttpClient){
        this.url = GLOBAL.url;
    }

    signUp(params){
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type':'application/json'
            })
        };
        return this.http.post(this.url + 'users/login', params, httpOptions);
    }
    register(params){
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type':'application/json'
            })
        };
        return this.http.post(this.url + 'users/register', params, httpOptions);
    }

    getIdentity(){
        const identity = JSON.parse(localStorage.getItem('identity'));
        if(identity != null){
            this.identity = identity;
        }
        return this.identity;
    }

    getToken(){
        const token = localStorage.getItem('token');
        if(token != null){
            this.token = token;
        }
        return this.token;
    }
}