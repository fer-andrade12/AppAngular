import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Vaga } from '../models/Vagas-models';
import { VagasService } from '../vagas.service';

@Component({
  selector: 'app-form-edita',
  templateUrl: './form-edita.component.html',
  styleUrls: ['./form-edita.component.css']
})
export class FormEditaComponent implements OnInit {

  public vaga: Vaga = new Vaga(0, "", "", "", 0);

  constructor(private _vagasService:VagasService, private router: ActivatedRoute) { }

  ngOnInit(): void {
  }


  //update
 atualizar(id: number){
  this._vagasService.atualizarVaga(id,this.vaga).subscribe(
    vaga => {this.vaga = new Vaga(0,"","","",0)},
   err => {console.log("erro ao atualizar")}
   );

   window.location.href = "/lista-vagas";

  }
}
