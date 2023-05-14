import { Component, OnInit, Input } from '@angular/core';
import { Titulos } from '../../services/titles.interface';

@Component({
  selector: 'panel',
  templateUrl: './panel.component.html'
})
export class PanelComponent implements OnInit {
  
  @Input() sizes2 : {header : any, body : any};
  
  header : { width: string, height : string};
  body : { width: string, height : string};

  constructor() { 
   
  }

  ngOnInit(): void {
    
     this.header = this.sizes2.header;
     this.body = this.sizes2.body;
  }

}
