import { Component, OnInit } from '@angular/core';
import {NavigationMenuService} from '../core/API/navigation-menu.service';

@Component({
  selector: 'app-navigation-menu',
  templateUrl: './navigation-menu.component.html',
  styleUrls: ['./navigation-menu.component.scss']
})
export class NavigationMenuComponent implements OnInit {

  constructor(public menuLogic: NavigationMenuService) { }

  ngOnInit() {
  }

}
