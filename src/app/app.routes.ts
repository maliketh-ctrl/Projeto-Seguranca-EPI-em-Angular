import { Routes } from '@angular/router';
import { EpiList } from './epi/epi-list/epi-list';
import { EpiDetalhe } from './epi/epi-detalhe/epi-detalhe';
import { EpiForm } from './epi/epi-form/epi-form';
import { Login } from './auth/login/login';
import { Unauthorized } from './auth/unauthorized/unauthorized';
import { authGuard } from './auth/auth-guard';



export const routes: Routes = [
    { path: '', redirectTo: 'epi', pathMatch: 'full' },
    { path: 'epi', component: EpiList },
    { path: 'epi/detalhe', component: EpiDetalhe },
    { path: 'epi/cadastro', component: EpiForm },
    { path: 'login', component: Login },
    { path: 'unauthorized', component: Unauthorized },
    { path: 'epi', component: EpiList, canActivate: [authGuard] }
];
