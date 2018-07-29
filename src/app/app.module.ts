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
import { CadastroComponent } from './pages/acount/cadastro/cadastro.component';
import { FormDadosPessoaisComponent } from './components/forms/form-dados-pessoais/form-dados-pessoais.component';
import { FormDadosProfissionaisComponent } from './components/forms/form-dados-profissionais/form-dados-profissionais.component';
// tslint:disable-next-line:max-line-length
import { FormDisciplinasMinistradasComponent } from './components/forms/form-disciplinas-ministradas/form-disciplinas-ministradas.component';
// tslint:disable-next-line:max-line-length
import { FormDisciplinasDeInteresseComponent } from './components/forms/form-disciplinas-de-interesse/form-disciplinas-de-interesse.component';

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
    NotfoundComponent,
    CadastroComponent,
    FormDadosPessoaisComponent,
    FormDadosProfissionaisComponent,
    FormDisciplinasMinistradasComponent,
    FormDisciplinasDeInteresseComponent
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
