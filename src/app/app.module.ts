import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClienteComponent } from './componentes/cliente/cliente.component';
import { RacaComponent } from './componentes/raca/raca.component';
import { AnimalComponent } from './componentes/animal/animal.component';
import { ServicoComponent } from './componentes/servico/servico.component';
import { AgendamentoComponent } from './componentes/agendamento/agendamento.component';
import { AgendamentoServicoComponent } from './componentes/agendamento-servico/agendamento-servico.component';
import { PagamentoComponent } from './componentes/pagamento/pagamento.component';
import { LoginComponent } from './componentes/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    ClienteComponent,
    RacaComponent,
    AnimalComponent,
    ServicoComponent,
    AgendamentoComponent,
    AgendamentoServicoComponent,
    PagamentoComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
