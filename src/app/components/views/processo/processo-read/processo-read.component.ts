import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Processo } from '../processo.model';
import { ProcessoService } from '../processo.service';

@Component({
  selector: 'app-processo-read',
  templateUrl: './processo-read.component.html',
  styleUrls: ['./processo-read.component.css']
})
export class ProcessoReadComponent implements OnInit {

  displayedColumns: string[] = ['id', 'numero', 'ano', 'dataCadastro', 'vizualizar', 'deletar'];

  processo: Processo[] = [];

  constructor(private service: ProcessoService,
              private router: Router) { }

  ngOnInit(): void {
    this.findAll();
  }


  findAll(){
    this.service.findAll().subscribe(resposta =>{
      this.processo = resposta.content;
    });
  }

  
  irParaProcessoCreate(){
    this.router.navigate(["processos/create"]);
  }

}
