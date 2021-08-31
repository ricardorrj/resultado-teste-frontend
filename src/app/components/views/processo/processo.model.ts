import { Pessoa } from "../pessoa/pessoa.model";

export interface Processo{
    id?: String;
    numero: String;
    ano: String;
    pessoa?: Pessoa;
    idPessoa?: String;
    dataCadastro?: Date;
}