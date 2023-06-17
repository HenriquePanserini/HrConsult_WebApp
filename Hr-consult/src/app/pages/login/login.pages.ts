import { Component, OnDestroy, Renderer2, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/autenticador.service';
import appSettings from '../../config/app-settings';

@Component({
  selector: 'login',
  templateUrl: './login.pages.html',
  providers: [AuthService]
})

export class LoginPage implements OnDestroy, OnInit {


  appSettings = appSettings;
  errorLogin: string;
  email : string = '';
  senha : string = ''; 

  constructor(private router: Router, private renderer: Renderer2, private authService : AuthService) {
    this.appSettings.appEmpty = true;
    this.renderer.addClass(document.body, 'bg-white');
  }

  ngOnDestroy() {
    this.appSettings.appEmpty = false;
    this.renderer.removeClass(document.body, 'bg-white');
  }

  ngOnInit(): void {
     this.email.trim();
     this.senha.trim();
  }

  login() : void{
    if(this.email.trim() !== '' && this.senha.trim() !== ''){
      this.authService.login(this.email, this.senha).subscribe(
        () => {
          this.router.navigate(['/home']); // redirecionar para a página de sucesso
        },
        (error) => {
          this.errorLogin = 'Erro ao acessar a conta. Verifique seu email e senha.';
          console.error(error);
        }
      );
      
    }else{
      this.errorLogin = 'Erro ao acessar a conta. Verifique seu email e senha.';
    }
  }


}
