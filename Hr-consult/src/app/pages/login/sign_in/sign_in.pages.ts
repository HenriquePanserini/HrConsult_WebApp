import { Component, OnDestroy, Renderer2 } from '@angular/core';
import { Router }    from '@angular/router';
import { NgForm }    from '@angular/forms';
import { CadastroUsuario } from '../../../model/cadastro-usuario.model';
import appSettings from '../../../config/app-settings';

@Component({
	selector: 'sign-in',
	templateUrl: './sign_in.pages.html'
})

export class SignInPage implements OnDestroy {
  appSettings = appSettings;
  cadastroUsuario : CadastroUsuario;

  constructor(private router: Router, private renderer: Renderer2) {
    this.appSettings.appEmpty = true;
    this.renderer.addClass(document.body, 'bg-white');
  }

  ngOnDestroy() {
    this.appSettings.appEmpty = false;
    this.renderer.removeClass(document.body, 'bg-white');
  }

  formSubmit(f: NgForm) {
    this.router.navigate(['home']);
  }
}
