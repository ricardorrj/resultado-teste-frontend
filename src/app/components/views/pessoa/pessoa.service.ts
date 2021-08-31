import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Pessoa } from './pessoa.model';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  baseUrl: String = environment.baseUrl;

  constructor(private _snack: MatSnackBar,
              private http: HttpClient) {}


  findById(id: String):Observable<Pessoa>{
    const url = `${this.baseUrl}/pessoa/${id}`;
    return this.http.get<Pessoa>(url);
  }


  findAll():Observable<any>{
    const url = `${this.baseUrl}/pessoa`;
    return this.http.get<any>(url);
  }


  create(pessoa: Pessoa):Observable<Pessoa>{
    const url = `${this.baseUrl}/pessoa`;
    return this.http.post<Pessoa>(url, pessoa);
  }


  update(pessoa: Pessoa):Observable<void>{
    const url = `${this.baseUrl}/pessoa/${pessoa.id}`;
    return this.http.put<void>(url, pessoa);
  }


  delete(id: String):Observable<void>{
    const url = `${this.baseUrl}/pessoa/${id}`;
    return this.http.delete<void>(url);
  }


  mensagem(str: String): void{
    this._snack.open(`${str}`, 'Ok', {
        horizontalPosition: 'center',
        verticalPosition: 'top',
        duration: 9000
    });
  }
}
