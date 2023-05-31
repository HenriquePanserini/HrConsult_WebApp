import { Component } from '@angular/core';
import { Cadastro } from '../../../model/cadastro.model';
import { CadastroService } from '../../../services/cadastro.service';
import { Pipe, PipeTransform } from '@angular/core';

@Component({
  selector: 'consulta',
  templateUrl: './consulta.pages.html'
})
export class ConsultaPage{
  cadastros: Cadastro[] = [];
  filtro : string = '';

  constructor(private cadastroService: CadastroService) {
    this.cadastros = this.cadastroService.getCadastros();
  }

  atualizarCadastro(cadastro : Cadastro) : void {
    this.cadastroService.atualizarCadastro(cadastro);
  }

  deletarCadastro(id : number) : void {
    this.cadastroService.deletarCadastro(id);
  }

}