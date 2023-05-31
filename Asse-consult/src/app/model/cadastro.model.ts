export class Cadastro {
    id : number;
    nome : string;
    cpf : string;
    cnpj : string;
    certificado : string;
    data : string;

    constructor(id : number, nome : string, cpf : string, cnpj : string, certificado : string, data : string) {
        this.id = id;
        this.nome = nome;
        this.cpf =  cpf;
        this.cnpj = cnpj;
        this.certificado = certificado;
        this.data = data;
    }
}
