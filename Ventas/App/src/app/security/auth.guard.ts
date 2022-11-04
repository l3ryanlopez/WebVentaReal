import { Injectable } from "@angular/core";
import { Route, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from "@angular/router"; 
import { Observable } from "rxjs";
import { ApiauthService } from "../services/apiauth.service";

@Injectable({ providedIn: "root"})

export class AuthGuard implements CanActivate{

    constructor(private router: Router, private apiauthService: ApiauthService){

    }

    canActivate(route: ActivatedRouteSnapshot) {
        const usuario = this.apiauthService.usuarioData;

        if (usuario) {
            return true;
        }
        
        this.router.navigate(["/login"]);
        return false;
    }
}