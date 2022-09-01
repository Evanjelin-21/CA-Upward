import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, BehaviorSubject, observable } from 'rxjs';
import { switchMap, catchError, first } from 'rxjs/operators';
import { loginService } from '../_services/login.service';
// import { AuthenticationService } from '../_services/authentication.service';
// import { AlertService } from '../_services/alert.service';
// import { Router } from '@angular/router';
// import { environment } from '@environments/environment';
// import { AppConfig } from 'src/assets/config/config/app-config';
@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    //captureUrl: string = null;
    constructor(
        // private authenticationService: AuthenticationService,
        // private alertService: AlertService,
        // private router: Router,
        // private config: AppConfig
        private loginSvc: loginService
    ) {

    }
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<any> {
        // add authorization header with jwt token if available
        //let currentUser = this.authenticationService.currentUserValue;
        let currentUser = {
            "token": localStorage.getItem('token'),
            "username": "admin"
        }

        if (!request.url.endsWith('s3.amazonaws.com/') && !request.url.includes('entityprofile/')) {
            if (currentUser && currentUser.token) {
                request = request.clone({
                    //setHeaders: { 
                    //    Authorization: `Bearer ${currentUser.token}`
                    //}
                    headers: new HttpHeaders({
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${currentUser.token}`,
                        //"dms-user": currentUser.username
                    })
                });
            }
        } else if (request.url.includes('entityprofile/')) {
            request = request.clone({
                //setHeaders: { 
                //    Authorization: `Bearer ${currentUser.token}`
                //}
                headers: new HttpHeaders({
                    'Content-Type': 'application/json',
                    'Authorization': `Basic YWRtaW46I1Bhc3N3b3JkQTE=`,
                    //"dms-user": currentUser.username
                })
            });
        }
        return next.handle(request).pipe(catchError(async err => {
            if (err instanceof HttpErrorResponse && err.status === 401) {
                console.error(err)
                if (!localStorage.getItem('token')) {
                    let json = await this.loginSvc.login().toPromise();

                    if (json['token']) {
                        localStorage.setItem('token', json['token']);
                        window.location.reload()
                    }
                }
            } else if (err instanceof HttpErrorResponse && err.status === 500 && err.error.message.includes("Authorization token is not valid")) {
                localStorage.removeItem('token');
                if (!localStorage.getItem('token')) {
                    let json = await this.loginSvc.login().toPromise();

                    if (json['token']) {
                        localStorage.setItem('token', json['token']);
                        window.location.reload()
                    }
                }
                console.error(err)
            }
            return Observable.throw(err);

        }));
    }

}