import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ClientsComponent } from './clients/clients.component';
import { OrdersComponent } from './orders/orders.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BsDatepickerModule, BsDropdownModule, CollapseModule, ModalModule} from 'ngx-bootstrap';
import { ClientEditComponent } from './dashboard/modals/client-edit/client-edit.component';
import { ClientAddComponent } from './dashboard/modals/client-add/client-add.component';
import { ClientDeleteComponent } from './dashboard/modals/client-delete/client-delete.component';
import { ClientOptionsComponent } from './dashboard/button/client-options/client-options.component';
import { ClientOptionsCardComponent } from './dashboard/button/client-options-card/client-options-card.component';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';
import { RegistrationComponent } from './registration/registration.component';



@NgModule({
  declarations: [HomeComponent, ClientsComponent, OrdersComponent,
    ClientEditComponent, ClientAddComponent, ClientDeleteComponent, ClientOptionsComponent,
    ClientOptionsCardComponent, RegistrationComponent,],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    CollapseModule.forRoot(),
    NgxDatatableModule,
    BsDatepickerModule.forRoot(),
  ],
  providers: []
})
export class SitePagesModule { }
