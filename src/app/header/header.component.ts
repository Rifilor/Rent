import { Component, OnInit } from '@angular/core';
import {BsDropdownConfig} from 'ngx-bootstrap';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [{ provide: BsDropdownConfig, useValue: { isAnimated: true, autoClose: true } }]
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
