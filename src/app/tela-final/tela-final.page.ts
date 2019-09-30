import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tela-final',
  templateUrl: './tela-final.page.html',
  styleUrls: ['./tela-final.page.scss'],
})
export class TelaFinalPage implements OnInit {
  textoVisita = 'Obrigado Por Sua Visita!';
  constructor() { }

  ngOnInit() {
  }

}
