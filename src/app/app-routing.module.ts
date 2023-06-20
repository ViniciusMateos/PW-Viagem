import { CadastraViagemComponent } from './cadastra-viagem/cadastra-viagem.component';
import { DetalhesViagemComponent } from './detalhes-viagem/detalhes-viagem.component';
import { ExcluiViagemComponent } from './exclui-viagem/exclui-viagem.component';
import { ListaViagemComponent } from './lista-viagem/lista-viagem.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'', component:HeaderComponent},
  {path:'', component:FooterComponent},
  {path:'', component:ListaViagemComponent},
  {path:'', component:ExcluiViagemComponent},
  {path:'', component:DetalhesViagemComponent},
  {path:'', component:CadastraViagemComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
