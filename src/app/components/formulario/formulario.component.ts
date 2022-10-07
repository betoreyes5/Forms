import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

form: FormGroup;

@Output() addUsuario:EventEmitter<any> = new EventEmitter<any>();

  constructor(private fb: FormBuilder) { 
    this.form = this.fb.group({
      correo: ['',[Validators.required]],
      nombre: ['',[Validators.required]],
      paterno: ['',[Validators.required]],
      materno: ['',[]], 
      contrasenia: ['',[Validators.required]]     
    })
  } 

  ngOnInit(): void {
  }

guardarDatos() {
 console.log(this.form.value);
 this.addUsuario.emit(this.form.value);
 this.form.reset();
}

}
