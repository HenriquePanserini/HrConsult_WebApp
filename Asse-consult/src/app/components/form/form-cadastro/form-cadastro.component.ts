import { Component, Output, EventEmitter, Input, OnInit} from '@angular/core';
import { Cadastro } from '../../../model/cadastro.model';
import { CadastroService } from '../../../services/cadastro.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'form-cadastro',
  templateUrl: './form-cadastro.component.html'
})
export class FormCadastroComponent implements OnInit{
  novoCadastro: Cadastro = new Cadastro(0,'','','','','');
  @Input() routes : string;  

  routeCadastro : any;
  routeCpf : any;
  routeCnpj : any;

  constructor(private cadastroService: CadastroService, private router : ActivatedRoute) {}

  ngOnInit(): void {
     this.router.paramMap.subscribe(params => {
         const cadastro = params.get('registros/cadastros');
         this.routeCadastro = cadastro;
         
         const cpf = params.get('registros/cadastros/cpf');
         this.routeCpf = cpf;

         const cnpj = params.get('registros/cadastros/cnpj');
         this.routeCnpj = cnpj;
      }
     )
  }

  salvarCadastro() {
    this.cadastroService.inserirCadastro(this.novoCadastro);
    // Ou você pode chamar o método atualizarCadastro() se desejar atualizar um cadastro existente
    // this.cadastroService.atualizarCadastro(this.novoCadastro);
    console.log(this.novoCadastro);
    // Limpa o formulário
    this.novoCadastro = new Cadastro(0,'','','','','');
  }

}
