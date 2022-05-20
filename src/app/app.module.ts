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
import { SearchMatriculaComponent } from './pages/search-matricula/search-matricula.component';
import { TablaMatriculaComponent } from './components/tabla-matricula/tabla-matricula.component';
import { TablaTransaccionesMatriculaComponent } from './components/tabla-transacciones-matricula/tabla-transacciones-matricula.component';

@NgModule({
  declarations: [
    AppComponent,
    ObservarBlockchainComponent,
    VerBloqueComponent,
    TablaTransaccionesComponent,
    CrearTransaccionComponent,
    TransaccionesPendientesComponent,
    SearchMatriculaComponent,
    TablaMatriculaComponent,
    TablaTransaccionesMatriculaComponent
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
