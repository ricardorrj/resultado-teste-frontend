import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Processo } from './processo.model';

@Injectable({
  providedIn: 'root'
})
export class ProcessoService {

  baseUrl: String = environment.baseUrl;

  constructor(private _snack: MatSnackBar,
              private http: HttpClient) {}


  findById(id: String):Observable<Processo>{
    const url = `${this.baseUrl}/processo/${id}`;
    return this.http.get<Processo>(url);
  }


  findAll():Observable<any>{
    const url = `${this.baseUrl}/processo`;
    return this.http.get<any>(url);
  }


  create(idPessoa:String, processo: Processo):Observable<Processo>{
    const url = `${this.baseUrl}/processo`;
    
    return this.http.post<Processo>(url, processo, { 
      params: new  HttpParams ()
          .set("pessoa", Number(idPessoa))
      });
  }


  delete(id: String):Observable<void>{
    const url = `${this.baseUrl}/processo/${id}`;
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
