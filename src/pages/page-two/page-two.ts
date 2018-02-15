import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { PageTwoSectionOne } from './section-one';

@Component({
  selector: 'page-two',
  template: `
<ion-nav [root]="page"></ion-nav>
  `
})
export class PageTwo {

  page = PageTwoSectionOne;
  constructor() {

  }
}
