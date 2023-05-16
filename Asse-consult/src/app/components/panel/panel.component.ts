import { Component, OnInit, Input } from '@angular/core';
import { Titulos } from '../../services/titles.interface';

@Component({
  selector: 'panel',
  templateUrl: './panel.component.html'
})
export class PanelComponent implements OnInit {
  
  @Input() sizes : {header : any, body : any};
  @Input() display : any;
  @Input() title : any;

  header : { width: string, height : string};
  body : { width: string, height : string};

  constructor() { 
   
  }

  ngOnInit(): void {
    
     this.header = this.sizes.header;
     this.body = this.sizes.body;
     
  }

}
