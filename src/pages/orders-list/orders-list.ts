import {Component} from '@angular/core';
import {OrdersService} from '../../providers/orders-service-rest';

@Component({
  selector: 'page-orders-list',
  templateUrl: 'orders-list.html'
})

export class OrdersPage {
  orders: Array<any>;

  constructor(private service: OrdersService) {
    this.findAll();
  }

  findAll() {
    this.service.findAll()
      .subscribe(data => this.orders = data);
  }

  deleteOrder(order) {
    this.service.deleteOrder(order);
  }
}
