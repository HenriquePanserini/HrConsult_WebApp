import { Component, OnInit, Input } from '@angular/core';
import  card_info_emp  from '../../model/empresa-dados-cards.model';
import parcelamento_dados from '../../model/parcelamentos-dados.model';
import { Router } from '@angular/router'; 
import { MiddlewareService } from '../../services/middleware.service';

@Component({
  selector: 'cards',
  templateUrl: './cards.component.html'
})
export class CardsComponent implements OnInit {
  

  constructor(public router : Router, public middlewareService : MiddlewareService) { }

  ngOnInit(): void {
    
  }

  
}
