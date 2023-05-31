import { Pipe, PipeTransform } from '@angular/core';
import { Cadastro } from '../../model/cadastro.model';

@Pipe({
  name: 'filtroCards'
})

export class FiltroCardsPipe implements PipeTransform {
  cadastros: Cadastro[] = [];

  transform(cards : Cadastro[], filtro : string) : Cadastro[] {
     if(!cards || !filtro){
       return cards;
     }

     filtro = filtro.toLowerCase();

     return cards.filter(card =>
      (card.nome.toLowerCase().includes(filtro) || card.nome.toLowerCase().startsWith(filtro) || card.nome.toLowerCase().match(filtro)) || 
      (card.cpf.includes(filtro) || card.cpf.startsWith(filtro) || card.cpf.match(filtro)) ||
      (card.cnpj.includes(filtro) || card.cnpj.startsWith(filtro) || card.cnpj.match(filtro))
    );
  }
}