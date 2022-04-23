import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {VotacaoComponent} from "./votacao/votacao.component";
import {RegistrarVotacaoComponent} from "./registrar-votacao/registrar-votacao.component";

const appRoutes : Routes = [
  { path: 'votacao',               component: VotacaoComponent },
  { path: 'registrar-votacao', component: RegistrarVotacaoComponent },
  { path: '',
    redirectTo: '/votacao',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    ),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
