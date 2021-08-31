import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pessoa } from '../../pessoa/pessoa.model';
import { Processo } from '../processo.model';
import { ProcessoService } from '../processo.service';

@Component({
  selector: 'app-processo-view',
  templateUrl: './processo-view.component.html',
  styleUrls: ['./processo-view.component.css']
})
export class ProcessoViewComponent implements OnInit {

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


  irParaConsultaProcessos(){
  this.router.navigate(["processos"]);
  }
}
