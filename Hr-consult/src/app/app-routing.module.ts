import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthGuard } from './services/guard/autenticador.guard';

//Login
import { LoginPage }  from './pages/login/login.pages';
import { SignInPage } from './pages/login/sign_in/sign_in.pages';

// Home
import { HomePage } from './pages/home/home.pages';

//Cadastro
import { CadastroPage } from './pages/cadastro/cadastro.pages';
import { ConsultaPage } from './pages/cadastro/consulta/consulta.pages';

//Email
import { EmailInboxPage } from './pages/email/inbox.pages';

//UI
import { ParcelamentosPage } from './pages/parcelamentos/parcelamentos.pages';

//componente-parcelas
import { OrderDetailsComponent } from './components/order-detail/order-details.component';



const routes: Routes = [
  { path: '', redirectTo: 'login',  pathMatch: 'full'},

  { path: 'home', component: HomePage , canActivate: [AuthGuard], data: { title: 'Home'} },

  { path: 'login', component: LoginPage, data: { title: 'Login'} },
  { path: 'login/signin', component: SignInPage, data: { title: 'Sign in'} },

  { path: 'registros/cadastrar/cpf', component: CadastroPage, data : {title: 'Cadastro '}},
  { path: 'registros/cadastrar/cnpj', component: CadastroPage, data : {title: 'Cadastro'}},
  { path: 'registros/consulta', component: ConsultaPage, data : {title: 'Consulta'}},

  { path: 'rf/inbox', component: EmailInboxPage, data: { title: 'Email Inbox'} },

  { path: 'rf/parcelamentos', component: ParcelamentosPage, data: { title: 'Ui Parcelmanto'} },
  { path: 'rf/parcelamentos/detalhes', component: OrderDetailsComponent, data: { title: 'UI Detalhamento'} }
];

@NgModule({
  imports: [ CommonModule, RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  declarations: []
})


export class AppRoutingModule { }
