import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { MuralVagasComponent } from './mural-vagas/mural-vagas.component';
import { MenuComponent } from './menu/menu.component';
import { RouterModule } from '@angular/router';
import { RodapeComponent } from './rodape/rodape.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { FormVagaComponent } from './form-vaga/form-vaga.component';
import { ListaVagasComponent } from './lista-vagas/lista-vagas.component';
import { FormsModule } from '@angular/forms';
import { FormEditaComponent } from './form-edita/form-edita.component';

@NgModule({
  declarations: [
    AppComponent,
    MuralVagasComponent,
    MenuComponent,
    RodapeComponent,
    FormVagaComponent,
    ListaVagasComponent,
    FormEditaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
