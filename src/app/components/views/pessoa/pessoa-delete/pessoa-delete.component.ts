import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Pessoa } from '../pessoa.model';
import { PessoaService } from '../pessoa.service';

@Component({
  selector: 'app-pessoa-delete',
  templateUrl: './pessoa-delete.component.html',
  styleUrls: ['./pessoa-delete.component.css']
})
export class PessoaDeleteComponent implements OnInit {

  constructor(private router: Router,
              private service: PessoaService,
              private actRoute: ActivatedRoute) { }

  date = new Date();

  pessoa: Pessoa = {
    id: '',
    nome: '',
    cpf: '',
    dataNascimento: this.date,
    dataCadastro: this.date
  }


  ngOnInit(): void {
    this.pessoa.id = this.actRoute.snapshot.paramMap.get('id')!;
    this.findById();
  }


  findById():void{
    this.service.findById(this.pessoa.id!).subscribe((resposta) =>{
      this.pessoa = resposta;
    });
  }


  delete(): void{
    this.service.delete(this.pessoa.id!).subscribe((resposta)=>{
        this.service.mensagem("Pessoa Deletada com sucesso!");
        this.irParaConsultaPessoas();
    }
    ,err =>{
        this.service.mensagem(err.error.error);
        this.irParaConsultaPessoas();
    });
  }


  irParaConsultaPessoas(){
    this.router.navigate(["pessoas"]);
  }
}
