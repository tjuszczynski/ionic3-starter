import {Injectable} from '@angular/core';
import 'rxjs/Rx';
import {AngularFireDatabase, FirebaseListObservable} from "angularfire2/database";

@Injectable()
export class OrdersService {
  orders$: FirebaseListObservable<any[]>;

  constructor(private db: AngularFireDatabase) {
    this.orders$ = this.db.list('/orders');
  }

  findAll() {
    return this.orders$;
  }

  orderMeal(meal) {
    return this.orders$.push(meal);
  }

  deleteOrder(order) {
    this.db.object('/orders/' + order.$key).remove();
  }
}
