import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { VotacaoComponent } from './votacao/votacao.component';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from "@angular/common/http";
import { RegistrarVotacaoComponent } from './registrar-votacao/registrar-votacao.component';
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    AppComponent,
    VotacaoComponent,
    RegistrarVotacaoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
