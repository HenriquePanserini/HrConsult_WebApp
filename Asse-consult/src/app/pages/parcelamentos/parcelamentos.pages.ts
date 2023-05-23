import { Component, OnInit, Input } from '@angular/core';
import parcelamento_dados from '../../model/parcelamentos-dados.model';

@Component({
	selector: 'parcelamentos',
  templateUrl: './parcelamentos.pages.html'
})

export class ParcelamentosPage implements OnInit{

    orders : any = parcelamento_dados;
    exibirComponente : boolean = true;

    constructor() {

    }

    ngOnInit(): void {
      
    }
}
