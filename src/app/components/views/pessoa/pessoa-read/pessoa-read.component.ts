import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pessoa } from '../pessoa.model';
import { PessoaService } from '../pessoa.service';

@Component({
  selector: 'app-pessoa-read',
  templateUrl: './pessoa-read.component.html',
  styleUrls: ['./pessoa-read.component.css']
})
export class PessoaReadComponent implements OnInit {

  displayedColumns: string[] = ['id', 'nome', 'cpf', 'dataNascimento', 'dataCadastro', 'alterar', 'deletar'];

  pessoas: Pessoa[] = [];
  
  constructor(private service: PessoaService,
              private router: Router) { }


  ngOnInit(): void {
    this.findAll();
  }


  findAll(){
    this.service.findAll().subscribe(resposta =>{
      this.pessoas = resposta.content;
    });
  }


  irParaPessoaCreate(){
    this.router.navigate(["pessoas/create"]);
  }
  
}
