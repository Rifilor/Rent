import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ClientsService} from './API/clients.service';
import {OrdersService} from './API/orders.service';
import {HomeService} from './API/home.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [ClientsService, OrdersService, HomeService],
})
export class CoreModule { }
