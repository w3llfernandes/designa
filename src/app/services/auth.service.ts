import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
@Injectable({
 providedIn: 'root'
})
export class AuthService {
    constructor(private router: Router) {}
    // return if user is logged
    public isLoggedIn(): boolean {
        return !!localStorage.user;
    }
    //return the user logged
    public get currentUser(): string {
        return localStorage.user;
    }

    // login set email in localstorage
    public login(email: string): void {
        if(email){
            localStorage.setItem('user', email);
            this.router.navigateByUrl('/dashboard/cursos');
        }
    }
    //logout clean localstorage
    public logout(): void {
        localStorage.clear();
    }
}



