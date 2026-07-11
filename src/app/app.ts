import { Component, signal } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { EpiList } from './epi/epi-list/epi-list';
import { EpiDetalhe } from './epi/epi-detalhe/epi-detalhe';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, EpiList, EpiDetalhe, RouterModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  titulo = "Sistema de Controle de EPI";
  subtitulo = "Gestão de Segurança do Trabalho";
  descricao = "Aplicação de controle de EPI é uma ferramenta essencial para garantir a segurança e o bem-estar dos trabalhadores em ambientes de risco. Com ela, é possível monitorar o uso adequado dos Equipamentos de Proteção Individual, registrar inspeções e manutenções, além de fornecer relatórios detalhados sobre a conformidade com as normas de segurança.";
}
