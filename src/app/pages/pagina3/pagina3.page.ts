import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-pagina3',
  templateUrl: './pagina3.page.html',
  styleUrls: ['./pagina3.page.scss'],
})
export class Pagina3Page implements OnInit {

  constructor() { }

  registroPersona = new FormGroup({  

  elNombreCompleto : new FormControl(''),
  elRut : new FormControl(''),
  laContrasena : new FormControl(''),
  elCorreo : new FormControl('')
  });

  lista_personas = new Array();
  perso:any;

  grabar(){
    this.perso={
      
      nombre: this.registroPersona.controls.elNombreCompleto.value,
      rut: this.registroPersona.controls.elRut.value,
      contrasena: this.registroPersona.controls.laContrasena.value,
      correo: this.registroPersona.controls.elCorreo.value
    };
    // guardar en el arreglo el registro de la persona
    this.lista_personas.push(this.perso);
    // creo un objeto para pasarlo a localStorage
    var datos =this.lista_personas;
    // para grabar en localstorage se aplica
    localStorage.setItem('datos',JSON.stringify(datos));
    alert('almaceno registro');
  }

  ngOnInit() {
  }

}
