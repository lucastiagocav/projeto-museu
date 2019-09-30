import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  nomeMuseu = 'MUSEU DE ARTE ASSIS CHATEAUBRIAND';

  constructor() { }

  ngOnInit() {
  }

}
