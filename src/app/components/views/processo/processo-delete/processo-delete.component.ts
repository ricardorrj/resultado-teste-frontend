import { HIGH_CONTRAST_MODE_ACTIVE_CSS_CLASS } from '@angular/cdk/a11y/high-contrast-mode/high-contrast-mode-detector';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PessoaCreateComponent } from '../../pessoa/pessoa-create/pessoa-create.component';
import { PessoaDeleteComponent } from '../../pessoa/pessoa-delete/pessoa-delete.component';
import { Pessoa } from '../../pessoa/pessoa.model';
import { Processo } from '../processo.model';
import { ProcessoService } from '../processo.service';

@Component({
  selector: 'app-processo-delete',
  templateUrl: './processo-delete.component.html',
  styleUrls: ['./processo-delete.component.css']
})
export class ProcessoDeleteComponent implements OnInit {

  constructor(private router: Router,
              private service:    ProcessoService,
              private actRoute:   ActivatedRoute) { }

  date = new Date();

  pessoaProcesso: Pessoa = {
    id: '',
    nome: '',
    cpf: '',
    dataNascimento: this.date,
    dataCadastro: this.date
  }

  processo: Processo = {
    id: '',
    numero: '',
    ano: '',
    dataCadastro: this.date,
    pessoa: this.pessoaProcesso
  }


  ngOnInit(): void {
    this.processo.id = this.actRoute.snapshot.paramMap.get('id')!;
    this.findById();
  }


  findById():void{
    this.service.findById(this.processo.id!).subscribe(resposta =>{
      
      this.processo = resposta;
      this.pessoaProcesso = resposta['pessoa']!;
        
    });
  }


  delete(): void{
    this.service.delete(this.processo.id!).subscribe((resposta)=>{
        this.service.mensagem("Processo Deletado com sucesso!");
        this.irParaConsultaProcessos();
    });
  }
  

  irParaConsultaProcessos(){
    this.router.navigate(["processos"]);
  }
}
