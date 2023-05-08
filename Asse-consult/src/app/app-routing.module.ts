import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

// Home
import { HomePage } from './pages/home/home';

//Email
import { EmailInboxPage } from './pages/email/inbox.pages';

//UI
import { UIParcelamentoPage } from './pages/parcelmaentos/parcelamentos.pages';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'home', component: HomePage, data: { title: 'Home'} },
  { path: 'rf/inbox', component: EmailInboxPage, data: { title: 'Email Inbox'} },
  { path: 'rf/parcelamentos', component: UIParcelamentoPage, data: { title: 'Ui Parcelmanto'} }
];

@NgModule({
  imports: [ CommonModule, RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  declarations: []
})


export class AppRoutingModule { }
