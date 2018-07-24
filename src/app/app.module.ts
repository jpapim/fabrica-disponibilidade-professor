import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { EntrarComponent } from './pages/acount/entrar/entrar.component';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';
import { ReactiveFormsModule } from '@angular/forms';
import { RecuperarSenhaComponent } from './pages/acount/recuperar-senha/recuperar-senha.component';
import { AcountComponent } from './pages/acount/acount.component';
import { EditarComponent } from './pages/acount/editar/editar.component';
import { HomeComponent } from './pages/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';

@NgModule({
  declarations: [
    AppComponent,
    EntrarComponent,
    RecuperarSenhaComponent,
    AcountComponent,
    EditarComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    DashboardComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [ AppComponent ],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class AppModule { }
