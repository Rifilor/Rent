import { Component, OnInit } from '@angular/core';
import {NavigationMenuService} from '../../core/API/navigation-menu.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit{

  constructor(public menuLogic: NavigationMenuService) { }

  ngOnInit() {
  }
}
