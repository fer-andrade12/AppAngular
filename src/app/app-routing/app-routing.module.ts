import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MuralVagasComponent } from '../mural-vagas/mural-vagas.component';
import { MenuComponent } from '../menu/menu.component';
import { FormVagaComponent } from '../form-vaga/form-vaga.component';
import { ListaVagasComponent } from '../lista-vagas/lista-vagas.component';
import { FormEditaComponent } from '../form-edita/form-edita.component';

const routes: Routes = [

  { path: 'mural', component: MuralVagasComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'formulario', component: FormVagaComponent },
  { path: 'lista-vagas', component: ListaVagasComponent},
  { path: 'form-edita', component: FormEditaComponent},
  { path: '', redirectTo: '/mural', pathMatch:'full' }
  
];

@NgModule({
 declarations:[],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
