export class CadastroUsuario {
    id : number;
    nome: string;
    sobrenome: string;
    email: string;
    reEmail: string;
    senha: string;
    data : string;

    constructor(
      id : number,
      nome: string,
      sobrenome: string,
      email: string,
      reEmail: string,
      senha: string,
      data : string
    ){
        this.id = id;
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.email = email;
        this.reEmail = reEmail;
        this.senha = senha;
        this.data = data;
     }
  }