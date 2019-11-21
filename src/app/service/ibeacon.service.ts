import { IBeacon } from '@ionic-native/ibeacon/ngx';
import { Injectable } from '@angular/core';
import { Platform, Events } from '@ionic/angular';
import { IBeaconDelegate, BeaconRegion } from '@ionic-native/ibeacon';


const PLATAFORMA = 'cordova';
/**
 * @description Provider responsável pela inicialização do IBeacon, utilizando a injeção de dependência, através da anotação @Injectable.
 * @author Lucas Tiago, Claudio Tessaro e Matheus Glauber
 */
@Injectable({
  providedIn: 'root'
})
export class IBeaconService {

  delegate: IBeaconDelegate;
  region: BeaconRegion;

  constructor(public platform: Platform, public events: Events, private ibeacon: IBeacon) { }
  /**
   * @description Função que constrói e implementa o rastreamento dos beacons seguindo como referência 
   * o material disponível no link https://ionicframework.com/docs/native/ibeacon 
   */
  inicializarIBeacon() {
    const promise = new Promise((res) => {
      /**
       * Definição da plataforma  (Android, iOS, Cordova)...
       */
      
      if (this.platform.is(PLATAFORMA)) {

        
        /**
         * Pedido de permissão para dispositivos iOS.
         */
        this.ibeacon.requestAlwaysAuthorization();

        /**
         * Cria uma nova delegação e atribui(registra) ao atributo delegate
         */
        this.delegate = this.ibeacon.Delegate();

        /**
         * Através da função subscribe o valor que foi delegado ao atributo
         * emitirá eventos que serão utilizados como parametro para a funçaõ publish, do events.
         */
        this.delegate.didRangeBeaconsInRegion()
          .subscribe(
            data => {
              this.events.publish('didRangeBeaconsInRegion', data);

            },
            error => console.error());
        /**
         * Configuração do UUID gerado no simulador
         * https://www.trishtech.com/2017/05/beacon-simulator-turn-android-smartphone-into-bluetooth-beacon-transmitter/    
         */
        this.region = this.ibeacon.BeaconRegion('UUID', '6926ef3e-3432-406b-8562-570d4dffb');

        /**
         * Iniciar a medição das proximidade dos beacons.
         */
        this.ibeacon.startRangingBeaconsInRegion(this.region).then(() => {
          res(true);
        }, error => {
          console.error('Failed to begin monitoring: ', error);
          res(false);
        });
      } else {
        console.error("This application needs to be running on a device");
        res(false);
      }
    });

    return promise;

  };
}