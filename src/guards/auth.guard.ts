import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';

@Injectable({
 providedIn: 'root'
})
export class AuthService implements CanActivate {
    public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        return true
    }

}


export class AuthGuard { }
