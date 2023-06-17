import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'order-cards',
  templateUrl: './order-cards.component.html'
})
export class OrderCardsComponent implements OnInit {
  
  @Input() orders : any;
  @Output() changeComponent: EventEmitter<any> = new EventEmitter();
  
  constructor(private router : Router) {

  }

  ngOnInit(): void {
      
  }

  handleClick(){
    this.changeComponent.emit();
  }

}
