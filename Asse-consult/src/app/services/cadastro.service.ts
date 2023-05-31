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
      new Cadastro(1, 'Cauã Ian Antonio Lopes', '047.248.049-98', '', 'A', today.toDateString()),
      new Cadastro(2, 'Anthony Renan Lima', '482.694.591-43', '', 'A', today.toDateString()),
      new Cadastro(3, 'Mariana Publicidade e Propaganda Ltda', '', '40.685.509/0001-30', 'B', today.toDateString()),
      new Cadastro(4, 'Camila Mariana Melo', '621.300.537-42', '', 'A',today.toDateString()),
      new Cadastro(5, 'Daniela e Theo Marketing ME', '511.921.291-30', '63.113.795/0001-64', 'C', today.toDateString()),
      new Cadastro(6, 'Gabriela Amanda da Silva', '915.833.121-29', '', 'B', today.toDateString()),
      new Cadastro(7, 'Augusto e Beatriz Padaria ME', '', '59.377.918/0001-05', 'A', today.toDateString()),
      new Cadastro(8, 'Otávio e Jorge Entregas Expressas ME', '', '90.637.429/0001-87', 'C', today.toDateString()),
      new Cadastro(9, 'Renato Oliver Jesus', '267.542.300-96', '', 'A', today.toDateString()),
      new Cadastro(10,'Alice e Manoel Vidros Ltda', '', '56.661.713/0001-50', 'A',today.toDateString()),
      new Cadastro(11,'Osvaldo e Filipe Vidros Ltda', '394.407.203-01', '32.275.209/0001-54', 'C', today.toDateString()),
      new Cadastro(12,'Otávio Calebe de Paula', '849.402.373-03', '', 'B', today.toDateString())
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


  deletarCadastro(id : number) : void{
     const index = this.cadastros.findIndex(cadastro => cadastro.id === id);
     if(index !== -1){
       this.cadastros.splice(index, 1);
     }
  }
}
