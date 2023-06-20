import { CadastraViagemComponent } from './cadastra-viagem/cadastra-viagem.component';
import { DetalhesViagemComponent } from './detalhes-viagem/detalhes-viagem.component';
import { ExcluiViagemComponent } from './exclui-viagem/exclui-viagem.component';
import { ListaViagemComponent } from './lista-viagem/lista-viagem.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'', component:ListaViagemComponent},
  {path:'exclui-viagem', component:ExcluiViagemComponent},
  {path:'detalhes-viagem', component:DetalhesViagemComponent},
  {path:'cadastra-viagem', component:CadastraViagemComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
