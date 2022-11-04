import { Component } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { MatDialogRef } from "@angular/material/dialog";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Concepto } from "src/app/models/concepto";
import { Venta } from "src/app/models/venta";
import { ApiventaService } from "src/app/services/apiventa.service";

@Component({
    templateUrl: "dialogventa.component.html"
})

export class DialogVentaComponent{
    public venta: Venta;
    public concepts: Concepto[];

    public conceptoForm = this.formBuilder.group({
        cantidad: [0, Validators.required],
        importe: [0, Validators.required],
        idProducto: [1, Validators.required],
    });


    constructor(public dialogRef: MatDialogRef<DialogVentaComponent>, public snackBar: MatSnackBar, private formBuilder: FormBuilder, public apiVenta: ApiventaService){
        this.concepts = [];
        this.venta = {idCliente: 2, conceptos: []};
    }

    close(){
        this.dialogRef.close();
    }

    addConcepto(){
        this.concepts.push(this.conceptoForm.value as Concepto);
    }

    addVenta(){
        this.venta.conceptos = this.concepts;
        this.apiVenta.add(this.venta).subscribe(response => {
            let exito = ""+response.exito+""
            if (parseInt(exito) === 1) {
                this.dialogRef.close();
                this.snackBar.open("Venta insertada con exito", "", {
                    duration: 2000
                });
                
            }
        });
    }
}