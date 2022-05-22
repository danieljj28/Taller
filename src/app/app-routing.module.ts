import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { CrearTransaccionComponent } from './pages/crear-transaccion/crear-transaccion.component';
import { ObservarBlockchainComponent } from './pages/observar-blockchain/observar-blockchain.component';
import { SearchMatriculaComponent } from './pages/search-matricula/search-matricula.component';
import { TransaccionesPendientesComponent } from './pages/transacciones-pendientes/transacciones-pendientes.component';
import { LoginComponent } from "./login/login.component";
import { LogoutComponent } from './pages/logout/logout.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: '', component: ObservarBlockchainComponent},
  { path: 'nuevaTransaccion', component: CrearTransaccionComponent},
  { path: 'transaccionesPendientes', component:TransaccionesPendientesComponent},
  { path: 'searchMatricula', component:SearchMatriculaComponent},
  { path: 'logOut', component:LogoutComponent},
  {path:'**', redirectTo:'/login', pathMatch:'full'},
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
