import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {RestaurantService} from '../../providers/restaurant-service-rest';
import {RestaurantDetailPage} from '../restaurant-detail/restaurant-detail';

@Component({
  selector: 'page-favorite-list',
  templateUrl: 'favorite-list.html'
})
export class FavoriteListPage {
  favorites;

  constructor(private navCtrl: NavController, private service: RestaurantService) {
    this.getFavorites();
  }

  openRestaurantDetail(favorite: any) {
    this.navCtrl.push(RestaurantDetailPage, favorite);
  }

  //
  getFavorites() {
    this.service.findAll().subscribe(data => {
      this.favorites = data.filter(
        restaurant => restaurant.isFav === true);
    })
  }
}
