import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pessoa } from '../pessoa.model';
import { PessoaService } from '../pessoa.service';

@Component({
  selector: 'app-pessoa-create',
  templateUrl: './pessoa-create.component.html',
  styleUrls: ['./pessoa-create.component.css']
})
export class PessoaCreateComponent implements OnInit {

  constructor(private service: PessoaService,
              private router: Router) { }

  data = new Date;
 
  pessoa: Pessoa = {
    dataNascimento: this.data,
    nome: '',
    cpf: ''
  }

  ngOnInit(): void {
  }


  create(): void{
    this.service.create(this.pessoa).subscribe(resposta => {
      console.log();
      this.service.mensagem("Cadastro realizado com sucesso") 
      this.irParaConsultaPessoas();
    }
    ,err => {  
      
      if(err.error.length == null){
        this.service.mensagem(err.error.error);
      }
      else{
        for(let i=0; i<err.error.length; i++){
          this.service.mensagem(err.error[i].error);
        }
      } 
    })
  }


  irParaConsultaPessoas(){
    this.router.navigate(["pessoas"]);
  }
}
