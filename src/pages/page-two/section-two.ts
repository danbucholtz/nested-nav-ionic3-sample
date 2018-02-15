import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

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
  Page Two Section Two
  <button ion-button (click)="back()">Go Back</button>
</ion-content>
  `
})
export class PageTwoSectionTwo {

  constructor(public navCtrl: NavController) {
  }

  back() {
    this.navCtrl.pop();
  }
}
