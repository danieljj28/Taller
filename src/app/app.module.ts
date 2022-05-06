import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ObservarBlockchainComponent } from './pages/observar-blockchain/observar-blockchain.component';
import { VerBloqueComponent } from './components/ver-bloque/ver-bloque.component';
import { TablaTransaccionesComponent } from './components/tabla-transacciones/tabla-transacciones.component';
import { CrearTransaccionComponent } from './pages/crear-transaccion/crear-transaccion.component';
import { TransaccionesPendientesComponent } from './pages/transacciones-pendientes/transacciones-pendientes.component';

@NgModule({
  declarations: [
    AppComponent,
    ObservarBlockchainComponent,
    VerBloqueComponent,
    TablaTransaccionesComponent,
    CrearTransaccionComponent,
    TransaccionesPendientesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
