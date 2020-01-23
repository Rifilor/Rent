import { Component, OnInit } from '@angular/core';
import {OrdersModel} from '../../models/orders.model';
import {OrdersService} from '../../core/API/orders.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  orders: OrdersModel[];

  constructor(private ordersService: OrdersService) { }

  ngOnInit() {
    this.orders = this.ordersService.getOrders();
  }

}
