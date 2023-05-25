import { Component, OnInit, Input } from '@angular/core';
import  card_info_emp  from '../../../model/empresa-dados-cards.model';

@Component({
  selector: 'main-cards',
  templateUrl: './main-cards.component.html'
})
export class MainCardsComponent implements OnInit {
 
  @Input() cards : any;

  constructor() {

  }

  ngOnInit(): void {
     
  }

}