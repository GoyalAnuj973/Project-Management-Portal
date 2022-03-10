import { ActivatedRouteSnapshot, Router, CanActivate, RouterStateSnapshot } from '@angular/router';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
    providedIn: 'root'
})

export class AuthGuard implements CanActivate {
    constructor(private auth: AuthService, private router: Router) {}
    canActivate(
        route: ActivatedRouteSnapshot, 
        state: RouterStateSnapshot
    ): boolean {
        if(!this.auth.isLoggedIn()){
            this.router.navigateByUrl('/login-page');
            return false;
        }
        return true;
    }
        
}