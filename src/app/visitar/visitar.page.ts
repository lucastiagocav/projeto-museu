import { IBeaconService } from './../service/ibeacon.service';
import { Platform, Events, NavController } from '@ionic/angular';
import { Component, NgZone } from '@angular/core';
import { BeaconModel } from '../../app/models/beacon-module';

@Component({
  selector: 'app-visitar',
  templateUrl: './visitar.page.html',
  styleUrls: ['./visitar.page.scss'],
})
export class VisitarPage {

  beacons: Array<BeaconModel> = new Array<BeaconModel>();
  zone: any;

  constructor(public navCtrl: NavController, public platform: Platform, public beaconProvider: IBeaconService, public events: Events) {
    // required for UI update
    this.zone = new NgZone({ enableLongStackTrace: false });
  }

  ionViewDidLoad() {
    this.platform.ready().then(() => {
      this.beaconProvider.inicializarIBeacon().then((isInitialised) => {
        if (isInitialised) {
          this.listenToBeaconEvents();
        }
      });
    });
  }

  listenToBeaconEvents() {
    this.events.subscribe('didRangeBeaconsInRegion', (data) => {

      // update the UI with the beacon list
      this.zone.run(() => {

        this.beacons = [];

        let beaconList = data.beacons;
        beaconList.forEach((beacon) => {
          let beaconObject = new BeaconModel(beacon);
          this.beacons.push(beaconObject);
        });

      });

    });
  }

}
