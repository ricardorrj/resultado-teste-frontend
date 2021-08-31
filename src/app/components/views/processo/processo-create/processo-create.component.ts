import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pessoa } from '../../pessoa/pessoa.model';
import { PessoaService } from '../../pessoa/pessoa.service';
import { Processo } from '../processo.model';
import { ProcessoService } from '../processo.service';

@Component({
  selector: 'app-processo-create',
  templateUrl: './processo-create.component.html',
  styleUrls: ['./processo-create.component.css']
})
export class ProcessoCreateComponent implements OnInit {

  pessoas: Pessoa[] = [];

  processo: Processo = {
    numero: '',
    ano: '',
    idPessoa: ''
  }

  processoDTO: Processo = {
    numero: '',
    ano: ''
  }

  constructor(private processoService: ProcessoService,
              private pessoaService: PessoaService,
              private router: Router) { }

  ngOnInit(): void {
    this.findAllPessoas();
  }


  create(): void{

    this.processoDTO.numero = this.processo.numero;
    this.processoDTO.ano = this.processo.ano;

    this.processoService.create(this.processo.idPessoa!, this.processoDTO).subscribe(resposta => {
         
        this.processoService.mensagem("Cadastro realizado com sucesso") 
        this.irParaConsultaProcessos();
    }
    ,err => {  
      
        for(let i=0; i<err.error.length; i++){
          this.processoService.mensagem(err.error[i].error);
        }
      
    })

   
  }

  findAllPessoas(){
    this.pessoaService.findAll().subscribe(resposta =>{
      this.pessoas = resposta.content;
    });
  }

  irParaConsultaProcessos(){
    this.router.navigate(["processos"]);
  }
}
