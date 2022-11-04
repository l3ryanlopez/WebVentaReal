import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ApiauthService } from "../services/apiauth.service";
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";
import { Login } from "../models/login";

@Component({ templateUrl: "login.component.html"})
export class LoginComponent implements OnInit{

    public loginForm = this.formBuilder.group({
        email: ['', Validators.required],
        password: ['', Validators.required]
    })
/*     public loginForm = new FormGroup({
        email: new FormControl(""),
        password: new FormControl("")
    }); */

    constructor(public apiauthService: ApiauthService, private router: Router, private formBuilder: FormBuilder){
        // if (this.apiauthService.usuarioData) {
        //     this.router.navigate(["/"])
        // }
    }

    ngOnInit(): void {
    }

    login(){
        /* let correo = this.loginForm.value.email;
        let password = this.loginForm.value.password;
        let lst = {
            "email": correo,
            "password": password
        } */
        /*         this.apiauthService.login(lst).subscribe(response =>{ */
        console.log(this.loginForm.value);
        this.apiauthService.login(this.loginForm.value as Login).subscribe(response =>{
            let exito = ""+response.exito+"";
            if (parseInt(exito) === 1) {
                this.router.navigate(['/'])
            }            
        });
    }
}