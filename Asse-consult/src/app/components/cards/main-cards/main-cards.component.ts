import { Component, OnInit, Input } from '@angular/core';
import { Cadastro } from '../../../model/cadastro.model';
import { CadastroService } from '../../../services/cadastro.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormAtualizarComponent } from '../../form/form-atualizar/form-atualizar.component';

@Component({
  selector: 'main-cards',
  templateUrl: './main-cards.component.html',
  styleUrls: ['./main-cards.component.css']
})
export class MainCardsComponent implements OnInit {
 
  @Input() cards : Cadastro[];
  dropdownOpen : boolean = false;

  toggleDropdown() : void {
    this.dropdownOpen = !this.dropdownOpen
  }

  constructor(private cadastroService: CadastroService, private modalService: NgbModal) {

  }

  ngOnInit(): void {
     this.cards
  }

  abrirEditarCadastro(cards : Cadastro) : void {
    const modalRef = this.modalService.open(FormAtualizarComponent);
    modalRef.componentInstance.cards = cards;
  }

  excluirCadastro(id : number) : void {
     this.cadastroService.deletarCadastro(id)
  }

}