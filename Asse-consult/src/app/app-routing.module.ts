import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

//Login
import { LoginPage } from './pages/login/login.pages';

// Home
import { HomePage } from './pages/home/home.pages';

//Email
import { EmailInboxPage } from './pages/email/inbox.pages';

//UI
import { ParcelamentosPage } from './pages/parcelamentos/parcelamentos.pages';

//componente-parcelas
import { OrderDetailsComponent } from './components/order-detail/order-details.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'home', component: HomePage, data: { title: 'Home'} },
  { path: 'login', component: LoginPage, data: { title: 'Login'} },
  { path: 'rf/inbox', component: EmailInboxPage, data: { title: 'Email Inbox'} },
  { path: 'rf/parcelamentos', component: ParcelamentosPage, data: { title: 'Ui Parcelmanto'} },
  { path: 'rf/parcelamentos/detalhes', component: OrderDetailsComponent, data: { title: 'UI Detalhamento'} },
];

@NgModule({
  imports: [ CommonModule, RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  declarations: []
})


export class AppRoutingModule { }
