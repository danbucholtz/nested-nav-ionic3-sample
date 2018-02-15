import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { PageTwo } from '../pages/page-two/page-two';
import { PageTwoSectionOne } from '../pages/page-two/section-one';
import { PageTwoSectionTwo } from '../pages/page-two/section-two';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    PageTwo,
    PageTwoSectionOne,
    PageTwoSectionTwo
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    PageTwo,
    PageTwoSectionOne,
    PageTwoSectionTwo
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
