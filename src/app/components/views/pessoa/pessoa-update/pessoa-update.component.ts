import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pessoa } from '../pessoa.model';
import { PessoaService } from '../pessoa.service';

@Component({
  selector: 'app-pessoa-update',
  templateUrl: './pessoa-update.component.html',
  styleUrls: ['./pessoa-update.component.css']
})
export class PessoaUpdateComponent implements OnInit {

  constructor(private router: Router,
    private service:    PessoaService,
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


  update(): void{
    this.service.update(this.pessoa).subscribe((resposta)=>{
      this.service.mensagem("Pessoa Alterada com sucesso!");
      this.irParaConsultaPessoas();
  }
  ,err =>{
      for(let i=0; i<err.error.length; i++){
        this.service.mensagem(err.error[i].error);
      }
    });
  }


  irParaConsultaPessoas(){
    this.router.navigate(["pessoas"]);
  }
}
