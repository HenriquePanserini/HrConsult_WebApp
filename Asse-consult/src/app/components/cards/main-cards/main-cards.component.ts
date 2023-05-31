import { Component, OnInit, Input } from '@angular/core';
import { Cadastro } from '../../../model/cadastro.model';

@Component({
  selector: 'main-cards',
  templateUrl: './main-cards.component.html'
})
export class MainCardsComponent implements OnInit {
 
  @Input() cards : Cadastro[];

  constructor() {

  }

  ngOnInit(): void {
     this.cards;
  }

}