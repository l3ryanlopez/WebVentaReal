import { Component, OnInit } from '@angular/core';
import { ApiclienteService } from '../services/apicliente.service';
import { Response } from '../models/response';
import { DialogClientComponent } from "./dialog/dialogcliente.component";
import { MatDialog } from "@angular/material/dialog";
import { Cliente } from '../models/cliente';
import { DialogDeleteComponent } from '../common/delete/dialogdelete.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss']
})
export class ClienteComponent implements OnInit {

  public lst!: any[];  //Variable donde se va a guardar el listado que viene con la informacion
  readonly width: string = "300px";
  public columnas: string[] = ['id', 'nombre', 'actions'];

  constructor(
    private apiCliente: ApiclienteService,
    public dialog: MatDialog,
    public snackBar:MatSnackBar,
  ) {}

  ngOnInit(): void {
    this.getClientes();
  }

  // METODOS 
  getClientes(){
    this.apiCliente.getClientes().subscribe( element =>{
      this.lst = element.data;
    });
  }

  openAdd(){
    const dialogRef = this.dialog.open(DialogClientComponent, {
      width: this.width
    });
    dialogRef.afterClosed().subscribe(result => {
      this.getClientes();
    });
  }
  
  openEdit(cliente: Cliente){
    const dialogRef = this.dialog.open(DialogClientComponent, {
      width: this.width,
      data: cliente
    });
    dialogRef.afterClosed().subscribe(result => {
      this.getClientes();
    });
  }

  delete(cliente: Cliente){
    const dialogRef = this.dialog.open(DialogDeleteComponent, {
      width: this.width
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.apiCliente.delete(cliente.id).subscribe(response => {
          if (response.exito ==  1) {
            this.snackBar.open("Cliente eliminado con exito", "", {
              duration: 2000
            })
            this.getClientes();
          }
        })
      }
    });
  }

}
