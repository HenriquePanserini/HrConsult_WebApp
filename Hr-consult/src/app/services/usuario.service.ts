import { Injectable } from "@angular/core";
import { CadastroUsuario } from "../model/cadastro-usuario.model";
import { Observable, of } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class UserService {
    private proximoId = 1;

    timeElapsed : number = Date.now();
    today : Date
    users : CadastroUsuario[];

    constructor(){
        this.today = new Date(this.timeElapsed);
        this.users = [
            { id: 1, nome: 'Usuário1', sobrenome:'NumeroUm', email: 'usuario1@gmail.com', reEmail:'usuario1@gmail.com', senha: '40976218', data: this.today.toDateString() },
            { id: 2, nome: 'Usuário2', sobrenome:'NumeroDois', email: 'usuario2@outlook.com', reEmail:'usuario2@outlook.com', senha: '71544934', data: this.today.toDateString() },
            // Adicione mais usuários mock aqui, se necessário
        ];
    }

    registerUser(cadastroUsuario : CadastroUsuario) : void{
        cadastroUsuario.id = this.proximoId;
        this.users.push(cadastroUsuario);
        console.log('Usuário registrado:', cadastroUsuario);
    }

    getUserByEmail(email: string, senha : string): Observable<CadastroUsuario> {
        const user = this.users.find(u => u.email === email && u.senha === senha);
        return of(user);
    }
}