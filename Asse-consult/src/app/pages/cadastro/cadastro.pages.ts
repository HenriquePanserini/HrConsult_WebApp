import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import * as moment from 'moment';

@Component({
	selector: 'cadastro',
  templateUrl: './cadastro.pages.html'
})

export class CadastroPage implements OnInit{

    rotaCad: string | Router;
    rotaCadCpf: string | Router;
    rotaCadCnpj: string | Router;

    //exibirComponente1: boolean = true;
    exibirComponente2: boolean = false;
    exibirComponente3: boolean = false;

    cadastroRealizado: boolean = false;

    selected: {startDate: moment.Moment, endDate: moment.Moment};
    prevDate: any = moment().subtract('days', 15).format('D MMMM') + ' - ' + moment().subtract('days', 8).format('D MMMM YYYY');

    constructor(private router : Router) {
       
    }

    ngOnInit(): void {
       this.rotaCad = 'registros/cadastrar';
       this.rotaCadCpf = 'registros/cadastrar/cpf';
       this.rotaCadCnpj = 'registros/cadastrar/cnpj';
    }

    mostrarComponente(componente: number) {
      //this.exibirComponente1 = false;
      this.exibirComponente2 = false;
      this.exibirComponente3 = false;
  
      if (componente === 2) {
        this.exibirComponente2 = true;
      } else if (componente === 3) {
        this.exibirComponente3 = true;
      }
    }

}
