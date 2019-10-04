import { Component } from '@angular/core'; // Decorator do angular
/*  Bloco de importações. Components importados aqui
 *  precisam estar no .module da página ou do app. */

 /*
  Links interessantes:
  Documentação do Capacitor: https://capacitor.ionicframework.com/docs/
  Documentação do Ionic: https://ionicframework.com/docs

  Getting started Capacitor: https://capacitor.ionicframework.com/docs/getting-started
                             https://capacitor.ionicframework.com/docs/getting-started/with-ionic
  Getting started Ionic:     https://ionicframework.com/getting-started
 */

import { GatinhoService } from '../gatinho.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
/* Declaração da página. Mais propriedades podem ser usadas,
 * como a de animações (para animações modulares) */

export class HomePage {
  //Declaraçao das properidades
  mensagem: string
  linkImagem:string = ''

  constructor(
    private gatinhoService: GatinhoService
    //Declaração dos componentes para uso interno na classe
  ) {
    //Primeiras inicializações
    this.mensagem = "Cat World!"
    this.gatinhoService.getCuriosidade()
    .subscribe((curiosidade)=>{
      console.log("Mensagem recebida: ",curiosidade)
    })
    this.gatinhoService.getGatoJPG()
    .subscribe((gato)=>{
      console.log("Gato recebido: ", gato)
      this.linkImagem = gato[0].url
    })
  }
  //Declaração dos métodos
}

