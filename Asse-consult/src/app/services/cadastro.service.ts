import { Injectable } from '@angular/core';
import { Cadastro } from '../model/cadastro.model';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {
  private cadastros: Cadastro[] = [];
  private proximoId: number = 1;

  timeElapsed : number = Date.now();

  constructor() {
    // Cria 6 objetos de cadastro em memória como mock
    const today = new Date(this.timeElapsed);
    this.cadastros.push(
      new Cadastro(1, 'Cauã Ian Antonio Lopes', '047.248.049-98', null, today.toDateString()),
      new Cadastro(2, 'Anthony Renan Lima', '482.694.591-43', null, today.toDateString()),
      new Cadastro(3, 'Mariana Publicidade e Propaganda Ltda', null, '40.685.509/0001-30', today.toDateString()),
      new Cadastro(4, 'Camila Mariana Melo', '621.300.537-42', null, today.toDateString()),
      new Cadastro(5, 'Daniela e Theo Marketing ME', '511.921.291-30', '63.113.795/0001-64', today.toDateString()),
      new Cadastro(6, 'Gabriela Amanda da Silva', '915.833.121-29', null, today.toDateString())
    );
  }

  getCadastros(): Cadastro[] {
    // Retorna a lista de cadastros
    return this.cadastros;
  }

  inserirCadastro(cadastro: Cadastro): void {
    // Insere um novo cadastro na lista
    cadastro.id = this.proximoId;
    this.cadastros.push(cadastro);

    this.proximoId++;
  }

  atualizarCadastro(cadastroAtualizado: Cadastro): void {
    // Encontra o cadastro na lista e atualiza seus dados
    const index = this.cadastros.findIndex(cadastro => cadastro.cpf === cadastroAtualizado.cpf || cadastro.cnpj === cadastroAtualizado.cnpj);
    if (index !== -1) {
      this.cadastros[index] = cadastroAtualizado;
    }
  }
}
