import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import {WelcomePage} from '../pages/welcome/welcome';
import {RestaurantListPage} from '../pages/restaurants-list/restaurants-list';
import {RestaurantDetailPage} from '../pages/restaurant-detail/restaurant-detail';
import {FavoriteListPage} from '../pages/favorite-list/favorite-list';
import {AboutPage} from '../pages/about/about';
import {RestaurantService} from "../providers/restaurant-service-rest";
import { Geolocation } from '@ionic-native/geolocation';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {OrdersPage} from "../pages/orders-list/orders-list";
import {OrdersService} from "../providers/orders-service-rest";
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFireDatabase } from 'angularfire2/database';

@NgModule({
  declarations: [
    MyApp,
    WelcomePage,
    AboutPage,
    RestaurantListPage,
    RestaurantDetailPage,
    FavoriteListPage,
    OrdersPage
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireModule,
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    WelcomePage,
    AboutPage,
    RestaurantListPage,
    RestaurantDetailPage,
    FavoriteListPage,
    OrdersPage
  ],
  providers: [
    Geolocation,
    StatusBar,
    SplashScreen,
    RestaurantService,
    OrdersService,
    AngularFireDatabase,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
