import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';


@Component({
  selector: 'app-pagina7',
  templateUrl: './pagina7.page.html',
  styleUrls: ['./pagina7.page.scss'],
})
export class Pagina7Page implements OnInit {

  constructor() { }
  recuperarContra = new FormGroup({  
    recuIngresarNombreUsuario : new FormControl(''),
    recuIngresarCorreo : new FormControl('')
  });

  ngOnInit() {
  }

}
