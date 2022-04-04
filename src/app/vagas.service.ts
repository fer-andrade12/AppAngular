import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable, observable } from 'rxjs';
import { Vaga } from './models/Vagas-models';

@Injectable({
  providedIn: 'root'
})
export class VagasService {

  private url = "http://localhost:3000/vaga";

  constructor(private _httpClient:HttpClient) { }
  
  getVagas(): Observable<Vaga[]>{
    return this._httpClient.get<Vaga[]>(this.url);
  }

  cadastrarVaga(vaga:Vaga):Observable<Vaga[]>{
    return this._httpClient.post<Vaga[]>(this.url,vaga);
  }

  atualizarVaga(id:number ,vaga: Vaga):Observable<Vaga[]>{
    const urlAtualizar = `${this.url}/${id}`;
    return this._httpClient.put<Vaga[]>(urlAtualizar,vaga);
  }

  removerVaga(id:number):Observable<Vaga[]>{
    const urlDeletar = `${this.url}/${id}`;
    return this._httpClient.delete<Vaga[]>(urlDeletar);
  }

}
