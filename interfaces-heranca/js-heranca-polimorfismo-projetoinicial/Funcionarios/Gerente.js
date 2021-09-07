import {Funcionarios} from "./Funcionarios.js";

export class Gerente extends Funcionarios{
    constructor(salario, nome, cpf){
        super(salario, nome, cpf);
        this.bonificacao = 1.1;
    }
}