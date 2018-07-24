import { Routes } from '@angular/router';
import { EntrarComponent } from './pages/acount/entrar/entrar.component';
import { RecuperarSenhaComponent } from './pages/acount/recuperar-senha/recuperar-senha.component';
import { AcountComponent } from './pages/acount/acount.component';
import { HomeComponent } from './pages/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';

export const ROUTES: Routes = [
    { path: '', redirectTo: 'acount', pathMatch: 'full' },
    {
        path: 'acount',
        component: AcountComponent,
        children: [
            { path: '', redirectTo: 'entrar', pathMatch: 'full' },
            { path: 'entrar', component: EntrarComponent },
            { path: 'recuperar-senha', component: RecuperarSenhaComponent }
        ]
    },
    {
        path: 'home',
        component: HomeComponent,
        children: [
            { path: '', component: DashboardComponent },
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
