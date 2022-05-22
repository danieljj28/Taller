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
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { LogoutComponent } from './pages/logout/logout.component';

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
    TablaTransaccionesMatriculaComponent,
    LoginComponent,
    NavbarComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
