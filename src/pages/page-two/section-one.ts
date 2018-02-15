import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { PageTwoSectionTwo } from './section-two';

@Component({
  selector: 'page-home',
  template: `
<ion-header>
  <ion-navbar>
    <ion-title>
      Page Two Section One
    </ion-title>
  </ion-navbar>
</ion-header>

<ion-content padding>
  Page Two Section One
  <div>
    <button ion-button (click)="next()">Go To Section Two</button>
  </div>
  <div>
    <button ion-button (click)="back()">Go Back</button>
  </div>
</ion-content>
  `
})
export class PageTwoSectionOne {

  constructor(public navCtrl: NavController) {

  }

  next() {
    this.navCtrl.push(PageTwoSectionOne);
  }

  back() {
    this.navCtrl.pop();
  }
}
