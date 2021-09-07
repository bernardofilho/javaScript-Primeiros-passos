import {Funcionarios} from "./Funcionarios.js";

export class Diretor extends Funcionarios{
    constructor(salario, nome, cpf){
        super(salario, nome, cpf);
        this.bonificacao = 2;
    }
}