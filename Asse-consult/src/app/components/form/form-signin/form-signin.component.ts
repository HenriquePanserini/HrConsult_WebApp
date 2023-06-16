import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../../services/usuario.service';
import { CadastroUsuario } from '../../../model/cadastro-usuario.model';

@Component({
  selector: 'form-registration',
  templateUrl: './form-signin.component.html',
})
export class RegistrationComponent implements OnInit{

  registrationForm: FormGroup;

  user: CadastroUsuario = new CadastroUsuario(0, '', '', '', '', '', ''); // Cria uma instância vazia da classe User

  constructor(private userService: UserService) {}

  onSubmit() {
      if (this.isValidForm()) {
        this.userService.registerUser(this.user);
      } else {
        console.error('Formulário inválido');
      }
  }

  isValidForm() {
    // Implemente as validações de formulário necessárias
    return (
        this.user.nome &&
        this.user.sobrenome &&
        this.user.email &&
        this.user.reEmail &&
        this.user.senha &&
        this.user.email === this.user.reEmail
    );
  }

  ngOnInit(): void {
      this.user;
  }
}