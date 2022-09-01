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
        var url = this.config.getConfig("signInUrl");
        return this.http.post<any>(url, {"username": "admin", "password": "#PasswordA1"})
            .pipe();
    }

    public getUserToken() {
        let token = localStorage.getItem("token")
        return token
    }
}
