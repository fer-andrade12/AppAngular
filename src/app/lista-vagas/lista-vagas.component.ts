import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Vaga } from '../models/Vagas-models';
import { VagasService } from '../vagas.service';

@Component({
  selector: 'app-lista-vagas',
  templateUrl: './lista-vagas.component.html',
  styleUrls: ['./lista-vagas.component.css']
})
export class ListaVagasComponent implements OnInit {

  public vaga: Vaga = new Vaga(0,"","","",0);
  public vagas: Vaga[] = [];

  constructor(private _vagasService:VagasService) { }

  ngOnInit(): void {
    this.listarVagas();
  }


  listarVagas(){
    this._vagasService.getVagas()
    .subscribe(
      (      retornaVagas: any[]) => {
        this.vagas = retornaVagas.map(
          item =>{
            return new Vaga(
              item.id,
              item.nome,
              item.foto,
              item.descricao,
              item.salario
              );
            }
        )
          }
        )
  }

  excluir(id: number){
    this._vagasService.removerVaga(id).subscribe(
      () => {this.vaga = new Vaga(0,"","","",0)},
      () => {console.log("erro ao Excluir")}
    );

    window.location.href = "/lista-vagas";

  }

}
