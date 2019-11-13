/* import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, from } from 'rxjs';
import { promise } from 'protractor';
import { Injectable } from '@angular/core';
import {AuthService} from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
    router: any;

    constructor( private authService: AuthService)

    canActivate(route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> | promise<boolean> | boolean {
this.authService.isAuthenticated()
.then(
    (authenticated: boolean) => {
        if (authenticated) {
            return true;
        }  
        else{
            this.router.navigate(['/']);
    }
}
    );
}
} */