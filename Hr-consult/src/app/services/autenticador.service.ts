import { Inject, Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from "rxjs";
import { tap } from "rxjs";
import { UserService } from "./usuario.service";
import jwt_decode, { JwtDecodeOptions } from 'jwt-decode';
import { CadastroUsuario } from "../model/cadastro-usuario.model";

@Injectable({
    providedIn: 'root'
})

export class AuthService {
    private apiUrl = 'http://localhost:4200'
    private readonly tokenKey = 'duj22kxdkcxn2ks1pp3lrff4'

    constructor(public http : HttpClient, 
                public jwtHelper : JwtHelperService,
                public userService : UserService){

    }

    login(email: string, senha: string) : Observable<any>{
        const url = `${this.apiUrl}`;

        /*this.http.post<any>(url, {email, senha}).pipe(
            tap(response => {
                const token = response.token
                localStorage.setItem(this.tokenKey, token)
            })
        )*/

        return this.userService.getUserByEmail(email, senha).pipe(
            tap(user => {
              if (user.email === email && user.senha === senha) {
                const token = this.generateToken(user);
                localStorage.setItem(this.tokenKey, token);
              } else {
                throw new Error('Email e/ou senha inválidos');
              }
            })
        );
    }

    private generateToken(user : CadastroUsuario ): string{
      const payload : any = {
        email: user.email.trim(),
        senha: user.senha.trim()
      };
  
      return jwt_decode(payload); // Adjust the expiration time as needed
    }

    getDecodedToken(): any {
      const token = localStorage.getItem(this.tokenKey);
      if (token) {
        return jwt_decode(token);
      }
      return null;
    }

    logout() : void {
        localStorage.removeItem(this.tokenKey);
    }
    
    isLoggedIn() : boolean {
        const token = localStorage.getItem(this.tokenKey);
        return token ? !this.jwtHelper.isTokenExpired(token) : false;
    }
    
    getToken() : string {
        return localStorage.getItem(this.tokenKey);
    }
}