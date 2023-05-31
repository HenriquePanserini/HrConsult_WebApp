import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TitulosTable } from '../../services/interface/titles.interface.service';

@Component({
  selector: 'tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})

export class TablesComponent implements OnInit {

  @Output() returnComponent : EventEmitter<any> = new EventEmitter();  
  @Input() tables : any;

  titulosTable : TitulosTable;

  constructor() { }

  ngOnInit(): void {
    this.titulosTable = {
       identificador : 'Identificador', 
       data : 'Data',
       cliente : 'Cliente',
       valor : 'Valor',
       status : 'Status',
       preenchimento : 'Status de preenchimento',
       items : 'Items',
       servico : 'Status do servico',
       actions : 'Ações'
    }

    this.tables;

  }

  handleClick() : void{
    this.returnComponent.emit();
  }

  paindColors() : void {
  
    if(this.tables.status == 'PAGO'){
      ''
    }
  }

}
