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

  ingresarNombreUsuario : new FormControl(''),
  ingresarRut : new FormControl(''),
  ingresarContraseña: new FormControl(''),
  ingresarRepetirContraseña : new FormControl(''),
  ingresarCorreo : new FormControl('')
  });
  

  ngOnInit() {
  }

}
