import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  navigate: any ;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
    this.sideMenu();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
  sideMenu() {
    this.navigate =
    [
      {
        title : 'About',
        url   : '/tabs/tab1',
        icon  : 'help-circle-outline'
      },
      {
        title : 'Dashboard',
        url   : '/tabs/tab2',
        icon  : 'apps'
      },
        {
        title : "Feedback",
        url   : "/tabs/tab3",
        icon  : "document"

       },
     ];
  }
}
