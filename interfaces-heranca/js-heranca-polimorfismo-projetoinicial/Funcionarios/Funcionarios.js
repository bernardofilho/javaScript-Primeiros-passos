export class Funcionarios{
    constructor(salario, nome, cpf){
        this._salario = salario;
        this._nome = nome;
        this._cpf = cpf;

        this._bonificacao = 1;
        this._senha;
    }

    autenticar(senha){
        return senha == this._senha;
    }

    cadastrarSenha(senha){
        this._senha = senha;
    }
}