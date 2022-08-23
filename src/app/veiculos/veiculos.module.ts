import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VeiculosRoutingModule } from './veiculos-routing.module';
import { BoasVindasComponent } from './boas-vindas/boas-vindas.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { ExibirVeiculoComponent } from './dashboard/exibir-veiculo/exibir-veiculo.component';
import { ExibirVinComponent } from './dashboard/exibir-vin/exibir-vin.component';
import { CartaoInfoComponent } from './dashboard/cartao-info/cartao-info.component';

@NgModule({
  declarations: [
    BoasVindasComponent,
    DashboardComponent,
    ExibirVeiculoComponent,
    ExibirVinComponent,
    CartaoInfoComponent,
  ],
  imports: [CommonModule, VeiculosRoutingModule, SharedModule],
})
export class VeiculosModule {}
