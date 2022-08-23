import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoasVindasComponent } from './boas-vindas/boas-vindas.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'boas-vindas',
  },
  {
    path: 'boas-vindas',
    component: BoasVindasComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VeiculosRoutingModule {}
