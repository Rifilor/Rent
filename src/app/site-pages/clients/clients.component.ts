import { Component, OnInit } from '@angular/core';
import {ClientsService} from '../../core/API/clients.service';
import {ClientsModel} from '../../models/clients.model';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {

  clients: ClientsModel [];

  constructor(private clientService: ClientsService) { }

  n=10;

  ngOnInit() {
    this.clients = ClientsService.getClients();
  }

}
