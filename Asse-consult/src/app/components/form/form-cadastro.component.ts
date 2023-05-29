import { Component } from '@angular/core';
import { Cadastro } from '../../model/cadastro.model';
import { CadastroService } from '../../services/cadastro.service';

@Component({
  selector: 'form-cadastro',
  templateUrl: './form-cadastro.component.html'
})
export class FormCadastroComponent {
  novoCadastro: Cadastro = new Cadastro(0,'','','','');

  constructor(private cadastroService: CadastroService) {}

  salvarCadastro() {
    this.cadastroService.inserirCadastro(this.novoCadastro);
    // Ou você pode chamar o método atualizarCadastro() se desejar atualizar um cadastro existente
    // this.cadastroService.atualizarCadastro(this.novoCadastro);

    // Limpa o formulário
    this.novoCadastro = new Cadastro(0,'','','','');
  }
}
