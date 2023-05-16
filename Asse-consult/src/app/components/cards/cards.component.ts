import { Component, OnInit, Input } from '@angular/core';
import  card_info_emp  from '../../model/empresa-dados-cards.model';

@Component({
  selector: 'cards',
  templateUrl: './cards.component.html'
})
export class CardsComponent implements OnInit {
 

  cards : any = card_info_emp;

  constructor() { }

  ngOnInit(): void {
    this.cards;
  }

}
