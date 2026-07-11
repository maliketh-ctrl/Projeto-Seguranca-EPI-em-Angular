import { Routes } from '@angular/router';
import { EpiDetalhe } from './epi/epi-detalhe/epi-detalhe';
import { EpiList } from './epi/epi-list/epi-list';

export const routes: Routes = [

    { path: 'epi', component: EpiList },

    { path: 'epi/detalhe', component: EpiDetalhe },

    { path: '', redirectTo: 'epi', pathMatch: 'full' }

];

