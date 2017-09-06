import {Component} from '@angular/core';
import {NavParams, ToastController} from 'ionic-angular';
import {RestaurantService} from '../../providers/restaurant-service-rest';
import {OrdersService} from "../../providers/orders-service-rest";

@Component({
  selector: 'page-restaurant-detail',
  templateUrl: 'restaurant-detail.html'
})
export class RestaurantDetailPage {
  restaurant: any;

  constructor(private navParams: NavParams, private ordersService: OrdersService, private toastCtrl: ToastController,
              private restaurantService: RestaurantService) {
    this.restaurant = this.navParams.data;
  }

  favorite(restaurant) {
    restaurant.isFav = !restaurant.isFav;
    this.restaurantService.favorite(restaurant);
  }

  orderMeal(meal) {
    this.ordersService.orderMeal(meal)
      .then(order => {
        let toast = this.toastCtrl.create({
          message: 'Zamówione!',
          cssClass: 'mytoast',
          duration: 1000
        });
        toast.present(toast);
      });
  }
}
