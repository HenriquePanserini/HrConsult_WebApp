import { Component, OnInit, Input } from '@angular/core';
import { Titulos } from '../../services/interface/titles.interface.service';

@Component({
  selector: 'main-panel',
  templateUrl: './main-panel.component.html'
})
export class MainPanelComponent implements OnInit {
  
  @Input() data : {nome : string, cnpj : string, matriz : string, simples : string, simei : string};
  @Input() sizes : {header : any, body : any};
  
  header : { width: string, height : string};
  body : { width: string, height : string};

  constructor() { 
   
  }

  titulo : { classificacao : string, atividade : string};
  list_titulos : Titulos;

  ngOnInit(): void {
    
     this.header = this.sizes.header;
     this.body = this.sizes.body;

     this.titulo = {
      classificacao : 'classificacao',
      atividade : 'atividade'
    }

    this.list_titulos = {
       cnpj : 'CNPJ',
       cnpj_matriz : 'CNPJ Matriz',
       simples : 'Simples',
       simei : 'SIMEI'
    }

  }

}
