import { Component, Output, EventEmitter, Input, OnInit} from '@angular/core';
import { Cadastro } from '../../../model/cadastro.model';
import { CadastroService } from '../../../services/cadastro.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'form-atualizar',
  templateUrl: './form-atualizar.component.html',
  styleUrls: ['./form-atualizar.component.css']
})

export class FormAtualizarComponent{
  @Input() cards: Cadastro;

  timeElapsed : number = Date.now();
  dateNow : Date = new Date(this.timeElapsed);
  today : string = this.dateNow.toDateString()

  constructor(public activeModal: NgbActiveModal, private cadastroService : CadastroService) { }

  salvarEdicao(): void {
    this.cards.data = this.today;

    this.cadastroService.atualizarCadastro(this.cards);
    this.activeModal.close();
  }


}
