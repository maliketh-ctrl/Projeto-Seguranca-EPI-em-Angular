import { Component } from '@angular/core';
import { EpiDetalhe } from '../epi-detalhe/epi-detalhe';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-epi-list',
  imports: [ RouterModule, EpiDetalhe ],
  templateUrl: './epi-list.html',
  styleUrl: './epi-list.scss',
})
export class EpiList {}
