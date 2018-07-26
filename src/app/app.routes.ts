import { Routes } from '@angular/router';
import { EntrarComponent } from './pages/acount/entrar/entrar.component';
import { RecuperarSenhaComponent } from './pages/acount/recuperar-senha/recuperar-senha.component';
import { AcountComponent } from './pages/acount/acount.component';
import { HomeComponent } from './pages/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FormDadosPessoaisComponent } from './components/forms/form-dados-pessoais/form-dados-pessoais.component';
import { CadastroComponent } from './pages/acount/cadastro/cadastro.component';
import { EditarComponent } from './pages/acount/editar/editar.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { FormDadosProfissionaisComponent } from './components/forms/form-dados-profissionais/form-dados-profissionais.component';

export const ROUTES: Routes = [
    { path: '', redirectTo: 'acount', pathMatch: 'full' },
    { path: 'entrar', redirectTo: 'acount/entrar', pathMatch: 'full' },
    {
        path: 'acount',
        component: AcountComponent,
        children: [
            { path: '', redirectTo: 'entrar', pathMatch: 'full' },
            { path: 'entrar', component: EntrarComponent },
            { path: 'recuperar-senha', component: RecuperarSenhaComponent },
            { path: 'cadastro', component: CadastroComponent }
        ]
    },
    {
        path: 'home',
        component: HomeComponent,
        children: [
            { path: '', component: DashboardComponent },
            {
              path: 'acount/editar',
              component: EditarComponent,
              children: [
                { path: '', redirectTo: 'dados-pessoais', pathMatch: 'full' },
                { path: 'dados-pessoais', component: FormDadosPessoaisComponent },
                { path: 'dados-profissionais', component: FormDadosProfissionaisComponent }
              ]
            },
        ]
    },
    {
      path: 'notfound',
      component: NotfoundComponent
    },
    {
        path: '**',
        redirectTo: 'notfound'
    }
];
