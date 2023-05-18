import { Component, OnInit, ViewChild } from '@angular/core';
import global from '../../config/globals';
import * as moment from 'moment';
import { DaterangepickerComponent, DaterangepickerDirective } from 'ngx-daterangepicker-material';
import { empresaDados } from '../../model/empresa-dados.model';
import { sizePanel, displayPanel} from '../../config/panel-settings';

@Component({
  selector: 'home',
  templateUrl: './home.pages.html'
})

export class HomePage implements OnInit {
  chartColor;
  chartData;
  EmpresaDados : empresaDados;
  lat: number = 25.304304;
  lng: number = -90.06591800000001;
  mapStyles = [{featureType:"all",elementType:"labels.text.fill",stylers:[{saturation:36},{lightness:40}]},{featureType:"all",elementType:"labels.text.stroke",stylers:[{visibility:"on"},{color:"#000000"},{lightness:16}]},{featureType:"all",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"administrative",elementType:"geometry.fill",stylers:[{color:"#2d353c"},{lightness:20}]},{featureType:"administrative",elementType:"geometry.stroke",stylers:[{color:"#000000"},{lightness:17},{weight:1.2}]},{featureType:"administrative",elementType:"labels.text.fill",stylers:[{color:"#d8d8d8"}]},{featureType:"administrative.neighborhood",elementType:"geometry.fill",stylers:[{color:"#ff0000"}]},{featureType:"administrative.land_parcel",elementType:"geometry.fill",stylers:[{color:"#2d353c"}]},{featureType:"landscape",elementType:"geometry",stylers:[{color:"#000000"},{lightness:20}]},{featureType:"landscape",elementType:"geometry.fill",stylers:[{color:"#2d353c"}]},{featureType:"landscape",elementType:"labels.text.fill",stylers:[{color:"#00acac"}]},{featureType:"landscape.man_made",elementType:"geometry.fill",stylers:[{color:"#2d353c"}]},{featureType:"poi",elementType:"geometry",stylers:[{color:"#000000"},{lightness:21}]},{featureType:"poi",elementType:"geometry.fill",stylers:[{color:"#2d353c"}]},{featureType:"poi",elementType:"labels.text.fill",stylers:[{color:"#575d63"}]},{featureType:"road",elementType:"labels.text.fill",stylers:[{color:"#348fe2"}]},{featureType:"road.highway",elementType:"geometry.fill",stylers:[{color:"#000000"},{lightness:17}]},{featureType:"road.highway",elementType:"geometry.stroke",stylers:[{color:"#000000"},{lightness:29},{weight:.2}]},{featureType:"road.highway.controlled_access",elementType:"geometry.fill",stylers:[{color:"#575d63"}]},{featureType:"road.arterial",elementType:"geometry",stylers:[{color:"#000000"},{lightness:18}]},{featureType:"road.arterial",elementType:"geometry.fill",stylers:[{color:"#575d63"}]},{featureType:"road.local",elementType:"geometry",stylers:[{color:"#000000"},{lightness:16}]},{featureType:"road.local",elementType:"geometry.fill",stylers:[{color:"#575d63"}]},{featureType:"transit",elementType:"geometry",stylers:[{color:"#000000"},{lightness:19}]},{featureType:"transit",elementType:"geometry.fill",stylers:[{color:"#2d353c"}]},{featureType:"water",elementType:"geometry",stylers:[{color:"#000000"},{lightness:17}]},{featureType:"water",elementType:"geometry.fill",stylers:[{color:"#1a1f23"}]}];

  sizes : any = sizePanel;
  display : any = displayPanel;
  title : any = {
    agendamento : 'AGENDAMENTOS',
    eventos : 'EVENTOS'
  };

  /* Daterangepicker */
  selected: {startDate: moment.Moment, endDate: moment.Moment};
  @ViewChild(DaterangepickerDirective, {static: true}) pickerDirective: DaterangepickerDirective;
  inlineDate: any;
  inlineDateTime: any;
  picker: DaterangepickerComponent;
  alwaysShowCalendars: boolean;
  showRangeLabelOnInput: boolean;
  keepCalendarOpeningWithRange: boolean;
  prevDate: any = moment().subtract('days', 15).format('D MMMM') + ' - ' + moment().subtract('days', 8).format('D MMMM YYYY');
  ranges: any = {
    Today: [moment(), moment()],
    Yesterday: [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
    'Last 7 Days': [moment().subtract(6, 'days'), moment()],
    'Last 30 Days': [moment().subtract(29, 'days'), moment()],
    'This Month': [moment().startOf('month'), moment().endOf('month')],
    'Last Month': [
      moment()
        .subtract(1, 'month')
        .startOf('month'),
      moment()
        .subtract(1, 'month')
        .endOf('month')
    ]
  };
  locale: any = {
    format: 'D MMMM YYYY',
    displayFormat: 'D MMMM YYYY',
    separator: ' - ',
    cancelLabel: 'Cancel',
    applyLabel: 'Apply'
  }
  
  constructor() {
    this.alwaysShowCalendars = true;
    this.keepCalendarOpeningWithRange = true;
    this.showRangeLabelOnInput = true;
    this.selected = {
      startDate: moment().subtract('days', 7),
      endDate: moment()
    };

    this.EmpresaDados = new empresaDados();
    this.EmpresaDados.id = 1;
    this.EmpresaDados.nome = 'Frango&Cia';
    this.EmpresaDados.cnpj = '16.587.542/0001-42';
    this.EmpresaDados.matriz = '03.481.145/0001-40';
    this.EmpresaDados.simples = 'Não optante';
    this.EmpresaDados.simei = 'Não optante';
  }

  ngOnInit() {
    this.picker = this.pickerDirective.picker;
    this.chartColor = { domain: [global.color.blue, global.color.success, global.color.purple, global.color.componentColor] };
    this.chartData = [{
			"name":"Congo",
			"series":[{"value":2377,"name":"Thu 15"},{"value":4567,"name":"Sat 17"},{"value":2865,"name":"Mon 19"},{"value":2060,"name":"Wed 21"},{"value":3287,"name":"Fri 23"}]},{"name":"Micronesia","series":[{"value":5234,"name":"Thu 15"},{"value":2876,"name":"Sat 17"},{"value":4297,"name":"Mon 19"},{"value":2558,"name":"Wed 21"},{"value":2371,"name":"Fri 23"}]},{"name":"Malaysia","series":[{"value":2369,"name":"Thu 15"},{"value":5229,"name":"Sat 17"},{"value":3457,"name":"Mon 19"},{"value":4401,"name":"Wed 21"},{"value":2835,"name":"Fri 23"}]},{"name":"Yemen","series":[{"value":2099,"name":"Thu 15"},{"value":4383,"name":"Sat 17"},{"value":6724,"name":"Mon 19"},{"value":2870,"name":"Wed 21"},{"value":5753,"name":"Fri 23"}]},{"name":"Åland Islands","series":[{"value":4907,"name":"Thu 15"},{"value":2428,"name":"Sat 17"},{"value":5384,"name":"Mon 19"},{"value":5966,"name":"Wed 21"},{"value":2605,"name":"Fri 23"}]
		}];
  }

  ngModelChange(e) {
    var gap = (e.endDate).diff((e.startDate), 'days');
		this.prevDate = moment(e.startDate).subtract('days', gap).format('D MMMM') + ' - ' + moment(e.startDate).subtract('days', 1).format('D MMMM YYYY');
  }
  choosedDate(e) {
    this.inlineDate = e;
  }
  choosedDateTime(e) {
    this.inlineDateTime = e;
  }
  open(e) {
    this.pickerDirective.open(e);
  }
  clear(e) {
    this.selected = null;
  }
}
