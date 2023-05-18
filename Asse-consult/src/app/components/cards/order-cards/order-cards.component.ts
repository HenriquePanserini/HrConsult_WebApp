import { Component, OnInit, Input } from '@angular/core';
import { CardsComponent } from '../cards.component';

@Component({
  selector: 'order-cards',
  templateUrl: './order-cards.component.html'
})
export class OrderCardsComponent extends CardsComponent implements OnInit {
  
  @Input() orders : any

  ngOnInit(): void {
      this.orders;
  }

}
