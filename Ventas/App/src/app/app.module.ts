import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from "@angular/material/sidenav";
import { HomeComponent } from './home/home.component';
import { ClienteComponent } from './cliente/cliente.component';
import { DialogClientComponent } from "./cliente/dialog/dialogcliente.component";
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { DialogDeleteComponent } from "./common/delete/dialogdelete.component";
import { LoginComponent } from './login/login.component';
import { JwtIntercerptor } from './security/jwt.interceptor';
import { VentaComponent } from './venta/venta.component';
import { DialogVentaComponent } from './venta/dialog/dialogventa.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ClienteComponent,
    LoginComponent,
    DialogClientComponent,
    DialogDeleteComponent,
    DialogVentaComponent,
    VentaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatTableModule,
    MatDialogModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatSnackBarModule,
    FormsModule,
    ReactiveFormsModule,

    HttpClientModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtIntercerptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
