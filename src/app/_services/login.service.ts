import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
    providedIn: 'root'
})
export class loginService {
    constructor(private http: HttpClient) { }

    public login() {
        var url = 'http://internal-docuedge-capture-alb-274814622.us-west-2.elb.amazonaws.com/auth/sign-in'
        return this.http.post<any>(url, {"username": "admin", "password": "Deloitte#1"})
            .pipe();
    }
}
