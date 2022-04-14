import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AppConfig } from 'src/assets/config/app-config';
@Injectable({
    providedIn: 'root'
})
export class loginService {
    constructor(private http: HttpClient,
        private config: AppConfig) { }

    public login() {
        var url = this.config.getConfig("signInUrl"); //'http://internal-docuedge-capture-alb-274814622.us-west-2.elb.amazonaws.com/auth/sign-in'
        return this.http.post<any>(url, {"username": "admin", "password": "Deloitte#1"})
            .pipe();
    }
}
