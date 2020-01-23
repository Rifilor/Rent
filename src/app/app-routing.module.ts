import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './site-pages/home/home.component';
import {ClientsComponent} from './site-pages/clients/clients.component';
import {OrdersComponent} from './site-pages/orders/orders.component';
import {RegistrationComponent} from './site-pages/registration/registration.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'clients', component: ClientsComponent},
  {path: 'orders', component: OrdersComponent},
  {path: 'registration', component: RegistrationComponent},
  {path: '**', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
