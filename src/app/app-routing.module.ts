import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearTransaccionComponent } from './pages/crear-transaccion/crear-transaccion.component';
import { ObservarBlockchainComponent } from './pages/observar-blockchain/observar-blockchain.component';
import { TransaccionesPendientesComponent } from './pages/transacciones-pendientes/transacciones-pendientes.component';

const routes: Routes = [
  { path: '', component: ObservarBlockchainComponent},
  { path: 'nuevaTransaccion', component: CrearTransaccionComponent},
  { path: 'transaccionesPendientes', component:TransaccionesPendientesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
