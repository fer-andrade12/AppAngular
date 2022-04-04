import { Component, OnInit } from '@angular/core';
import { Vaga } from '../models/Vagas-models';
import { VagasService } from '../vagas.service';

@Component({
  selector: 'app-form-vaga',
  templateUrl: './form-vaga.component.html',
  styleUrls: ['./form-vaga.component.css']
})
export class FormVagaComponent implements OnInit {

  public vaga: Vaga = new Vaga(0, "", "", "", 0);

  constructor(private _vagasService: VagasService) { }

  ngOnInit(): void {
  }

  //cadastra
  cadastrar(){
    this._vagasService.cadastrarVaga(this.vaga).subscribe(
      vaga => {this.vaga = new Vaga(0,"","","",0)},
      err => {console.log("erro ao cadastrar")}
    )

    window.location.href = "/lista-vagas"
  }

}
