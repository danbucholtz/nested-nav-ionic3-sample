import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { PageTwo } from '../page-two/page-two'

@Component({
  selector: 'page-home',
  template: `
<ion-header>
  <ion-navbar>
    <ion-title>
      Ionic Blank
    </ion-title>
  </ion-navbar>
</ion-header>

<ion-content padding>
  The world is your oyster.
  <p>
    If you get lost, the <a href="http://ionicframework.com/docs/v2">docs</a> will be your guide.
  </p>
  <button ion-button (click)="goToPageTwo()">Go To Page Two</button>
</ion-content>
  `
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  goToPageTwo() {
    this.navCtrl.push(PageTwo);
  }
}
