import { Component, OnInit, NgZone } from '@angular/core';
import { IBeaconService } from './../service/ibeacon.service';
import { Platform, Events, NavController } from '@ionic/angular';
import { BeaconModel } from '../../app/models/beacon-module';

@Component({
  selector: 'app-obra',
  templateUrl: './obra.page.html',
  styleUrls: ['./obra.page.scss'],
})
export class ObraPage implements OnInit {

  beacons: Array<BeaconModel> = new Array<BeaconModel>();
  zone: any;

  constructor(public platform: Platform, public beaconProvider: IBeaconService, public events: Events) { 
    this.zone = new NgZone({ enableLongStackTrace: false });
  }

  ngOnInit() {
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
