import { Component, OnInit, Input } from '@angular/core';
import parcelamento_dados  from '../../model/parcelamentos-dados.model';
import parcelamento_dados_table from '../../model/parcelamanto-dados-table.model';

@Component({
	selector: 'parcelamentos',
  templateUrl: './parcelamentos.pages.html'
})

export class ParcelamentosPage implements OnInit{

    orders : any = parcelamento_dados;
    tables : any = parcelamento_dados_table;
    exibirComponente : boolean = true;

    constructor() {

    }

    ngOnInit(): void {
      
    }

    onChangeComponent() : void {
      this.exibirComponente = !this.exibirComponente;
    }

  
}
