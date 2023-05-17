import { Component, OnDestroy, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import appSettings from '../../config/app-settings';

@Component({
  selector: 'login',
  templateUrl: './login.pages.html'
})

export class LoginPage implements OnDestroy {

  appSettings = appSettings;
  username! : string;
  password! : string;

  constructor(private router: Router, private renderer: Renderer2) {
    this.appSettings.appEmpty = true;
    this.renderer.addClass(document.body, 'bg-white');
  }

  ngOnDestroy() {
    this.appSettings.appEmpty = false;
    this.renderer.removeClass(document.body, 'bg-white');
  }

  login() {
      if(this.username !== null && this.password !== null){
        this.router.navigate(['/home']);
      }
        
        
  }

}
