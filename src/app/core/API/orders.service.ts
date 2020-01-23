import {Injectable} from "@angular/core";
import {OrdersModel} from '../../models/orders.model';


@Injectable()
export class OrdersService {
  getOrders() : OrdersModel[] {
    return [
      new OrdersModel('1', 'Lohjskdbjksdcjskdc', 'asdasdas', 'asdasd'),
      new OrdersModel('1', 'Lohjskdbjksdcjskdc', 'asdasdas', 'asdasd'),
      new OrdersModel('1', 'Lohjskdbjksdcjskdc', 'asdasdas', 'asdasd'),
      new OrdersModel('1', 'Lohjskdbjksdcjskdc', 'asdasdas', 'asdasd'),
      new OrdersModel('1', 'Lohjskdbjksdcjskdc', 'asdasdas', 'asdasd'),
      new OrdersModel('1', 'Lohjskdbjksdcjskdc', 'asdasdas', 'asdasd'),
      new OrdersModel('1', 'Lohjskdbjksdcjskdc', 'asdasdas', 'asdasd'),
      new OrdersModel('1', 'Lohjskdbjksdcjskdc', 'asdasdas', 'asdasd'),
      new OrdersModel('1', 'Lohjskdbjksdcjskdc', 'asdasdas', 'asdasd'),
      new OrdersModel('1', 'Lohjskdbjksdcjskdc', 'asdasdas', 'asdasd'),
      new OrdersModel('1', 'Lohjskdbjksdcjskdc', 'asdasdas', 'asdasd'),
      new OrdersModel('1', 'Lohjskdbjksdcjskdc', 'asdasdas', 'asdasd'),
      new OrdersModel('1', 'Lohjskdbjksdcjskdc', 'asdasdas', 'asdasd'),
      new OrdersModel('1', 'Lohjskdbjksdcjskdc', 'asdasdas', 'asdasd'),


    ];
  }
}
