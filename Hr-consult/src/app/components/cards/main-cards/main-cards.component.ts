import { Component, OnInit, Input,  ElementRef, ViewChild, HostListener } from '@angular/core';
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
  
  @ViewChild('dropdownContainer') dropdownContainer: ElementRef;
  @Input() cards : any;
  dropdownOpen : boolean = false;

  toggleDropdown() : void {
    this.dropdownOpen = !this.dropdownOpen
  }

  @HostListener('document:click', ['$event.target'])
  onClickOutside(targetElement: any): void {
    
      const clickedInside = this.dropdownContainer.nativeElement.contains(targetElement);
      if (!clickedInside) {
        this.dropdownOpen = false;
      
      }
  }

  constructor(private cadastroService: CadastroService, private modalService: NgbModal) {

  }

  ngOnInit(): void {

  }

  abrirEditarCadastro(cards : Cadastro) : void {
    const modalRef = this.modalService.open(FormAtualizarComponent);
    modalRef.componentInstance.cards = cards;
  }

  excluirCadastro(id : number) : void {
     this.cadastroService.deletarCadastro(id)
  }

}