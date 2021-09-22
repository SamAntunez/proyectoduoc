import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-pagina6',
  templateUrl: './pagina6.page.html',
  styleUrls: ['./pagina6.page.scss'],
})
export class Pagina6Page implements OnInit {

  constructor() { }
  
  viajePersona = new FormGroup({  
    costoPersona : new FormControl('')
  });

  ngOnInit() {
  }

}
