import { Component, Output, EventEmitter, Input, OnInit} from '@angular/core';
import { Cadastro } from '../../../model/cadastro.model';
import { CadastroService } from '../../../services/cadastro.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'form-cadastro',
  templateUrl: './form-cadastro.component.html'
})
export class FormCadastroComponent implements OnInit{
  novoCadastro: Cadastro = new Cadastro(0,'','','','', '');
  @Input() routes : string;
  @Input() cadastroRealizado : boolean;  

  timeElapsed : number = Date.now();
  dateNow : Date = new Date(this.timeElapsed);
  today : string = this.dateNow.toDateString()

  routeCadastro : string;
  routeCpf : string;
  routeCnpj : string;

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
    this.novoCadastro.data = this.today
    this.cadastroService.inserirCadastro(this.novoCadastro);
    // Ou você pode chamar o método atualizarCadastro() se desejar atualizar um cadastro existente
    // this.cadastroService.atualizarCadastro(this.novoCadastro);
    console.log(this.novoCadastro);
    // Limpa o formulário
    this.novoCadastro = new Cadastro(0,'','','','', '');
    this.cadastroRealizado = true;
  }

  code11 = 
  `<div class="mb-3">
    <label class="form-label">...</label>
    <input class="form-control" type="text" />
  </div>`;

}
