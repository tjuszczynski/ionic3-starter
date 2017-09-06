import {Injectable} from '@angular/core';
import 'rxjs/Observable';
import {AngularFireDatabase} from 'angularfire2/database';

@Injectable()
export class RestaurantService {

  constructor(private db: AngularFireDatabase) {
  }

  findAll() {
    return this.db.list('/restaurants');
  }

  findByName(searchKey: string) {
    let result;
    let key: string = searchKey.toUpperCase();
    this.db.list('/restaurants').subscribe(data => {
      result = data;
    });

    return result.filter(rest => (`${rest.title} ${rest.address} ${rest.city} ${rest.description}`)
      .toUpperCase().indexOf(key) > -1);
  }

  favorite(restaurant) {
    this.db.object('/restaurants/' + restaurant.$key).update(restaurant);
  }
}
