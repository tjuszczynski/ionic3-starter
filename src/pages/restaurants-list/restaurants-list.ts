import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {RestaurantService} from '../../providers/restaurant-service-rest';
import {RestaurantDetailPage} from '../restaurant-detail/restaurant-detail';
import leaflet from 'leaflet';
import {Geolocation} from '@ionic-native/geolocation';

@Component({
  selector: 'page-restaurant-list',
  templateUrl: 'restaurants-list.html'
})

export class RestaurantListPage {
  searchKey: string = "";
  viewMode: string = "list";
  map;
  markersGroup;
  restaurants;

  constructor(private navCtrl: NavController, private service: RestaurantService, private geolocation: Geolocation) {
    this.findAll();
  }

  openRestaurantDetail(restaurant: any) {
    this.navCtrl.push(RestaurantDetailPage, restaurant);
  }

  onInput(event) {
    this.restaurants = this.service.findByName(this.searchKey);

    if (this.viewMode === "map") {
      this.showMarkers();
    }
  }

  onCancel(event) {
    this.findAll();
  }

  findAll() {
    this.service.findAll().subscribe(data => {
      this.restaurants = data;
    });
  }

  showMap() {
    this.geolocation.getCurrentPosition().then((resp) => {
      this.map = leaflet.map("map").setView([resp.coords.latitude, resp.coords.longitude], 14.75);
      leaflet.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}', {
        attribution: 'Tiles &copy; Esri'
      }).addTo(this.map);
      this.showMarkers();
    })
      .catch((error) => {
        console.log('Error getting location', error);
      });
  }

  showMarkers() {
    if (this.markersGroup) {
      this.map.removeLayer(this.markersGroup);
    }
    this.markersGroup = leaflet.layerGroup([]);
    this.restaurants.forEach(restaurant => {
      if (restaurant.lat, restaurant.long) {
        let marker: any = leaflet.marker([restaurant.long, restaurant.lat])
          .on('click', event => this.openRestaurantDetail(event.target.data));
        marker.data = restaurant;
        this.markersGroup.addLayer(marker);
      }
    });
    this.map.addLayer(this.markersGroup);
  }

}
