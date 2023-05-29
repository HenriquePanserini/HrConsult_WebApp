import { Component, OnInit, Input } from '@angular/core';
import { Titulos } from '../../services/titles.interface.service';
import cards_agendamentos from '../../model/data/empresa-dados-cards.model';

@Component({
  selector: 'panel',
  templateUrl: './panel.component.html'
})
export class PanelComponent implements OnInit {
  
  @Input() sizes : {header : any, body : any};
  @Input() display : any;
  @Input() title : any;
  
  cards : any = cards_agendamentos;

  header : { width: string, height : string};
  body : { width: string, height : string};

  constructor() { 
   
  }

  ngOnInit(): void {
    
     this.header = this.sizes.header;
     this.body = this.sizes.body;
     
  }

}
