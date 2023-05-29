import { Component, OnInit, Input } from '@angular/core';
import * as moment from 'moment';

@Component({
	selector: 'cadastro',
  templateUrl: './cadastro.pages.html'
})

export class CadastroPage implements OnInit{

    selected: {startDate: moment.Moment, endDate: moment.Moment};
    prevDate: any = moment().subtract('days', 15).format('D MMMM') + ' - ' + moment().subtract('days', 8).format('D MMMM YYYY');

    constructor() {

    }

    ngOnInit(): void {
      
    }

}
