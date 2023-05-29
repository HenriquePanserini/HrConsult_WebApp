import { Component } from '@angular/core';
import { Cadastro } from '../../../model/cadastro.model';
import { CadastroService } from '../../../services/cadastro.service';

@Component({
  selector: 'consulta',
  templateUrl: './consulta.pages.html'
})
export class ConsultaPage {
  cadastros: Cadastro[] = [];

  constructor(private cadastroService: CadastroService) {
    this.cadastros = this.cadastroService.getCadastros();
  }
}