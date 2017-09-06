import {Component, ViewChild} from '@angular/core';
import {Nav, Platform} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {RestaurantListPage} from '../pages/restaurants-list/restaurants-list';
import {FavoriteListPage} from '../pages/favorite-list/favorite-list';
import {WelcomePage} from '../pages/welcome/welcome';
import {AboutPage} from '../pages/about/about';
import {OrdersPage} from "../pages/orders-list/orders-list";

export interface MenuItem {
  title: string;
  component: any;
  icon: string;
}

@Component({
  templateUrl: 'app.html'
})

export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage: any = WelcomePage;
  appMenuItems: Array<MenuItem>;

  constructor(private platform: Platform, private statusBar: StatusBar, private splashScreen: SplashScreen) {
    this.initializeApp();

    this.appMenuItems = [
      {title: 'Start', component: WelcomePage, icon: 'home'},
      {title: 'Restauracje', component: RestaurantListPage, icon: 'pizza'},
      {title: 'Ulubione', component: FavoriteListPage, icon: 'heart'},
      {title: 'Zamówienia', component: OrdersPage, icon: 'basket'},
      {title: 'O nas', component: AboutPage, icon: 'contact'}
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleLightContent();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    this.nav.setRoot(page.component);
  }
}
