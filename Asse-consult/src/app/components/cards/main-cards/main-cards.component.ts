import { Component, OnInit, Input } from '@angular/core';
import  card_info_emp  from '../../../model/empresa-dados-cards.model';
import { CardsComponent } from '../cards.component';

@Component({
  selector: 'main-cards',
  templateUrl: './main-cards.component.html'
})
export class MainCardsComponent extends CardsComponent implements OnInit {
 
  @Input() cards : any;

  ngOnInit(): void {
     this.cards;
  }

}