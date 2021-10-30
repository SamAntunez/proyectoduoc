import { Component } from '@angular/core';
//importar componente de manjeo de formulario
import { FormControl,FormGroup } from '@angular/forms';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  
})
export class HomePage {

  constructor() {}

//creamos controles de formulario
///<ion-input [FormContro]= "elRut"> </ion-input>
  persona = new FormGroup({  
    nombre : new FormControl(''),
    contraseña : new FormControl('')
    
    
  });

  //creacion de un metodo
  lista_personas = new Array();
  perso:any;
  grabar(){
    this.perso={
      
      nombre: this.persona.controls.elNombreCompleto.value,
      rut: this.persona.controls.elRut.value,
      contrasena: this.persona.controls.laContrasena.value,
      edad: this.persona.controls.laEdad.value,
      correo: this.persona.controls.elCorreo.value
    };
    this.lista_personas.push(this.perso);
    var datos =this.lista_personas;
    localStorage.setItem('misdatos',JSON.stringify(datos));
    alert  ("grabo");
 
  }
  eliminar(){}

  listar(){}
  






}
