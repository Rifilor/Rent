import { Component, OnInit } from '@angular/core';
import {HomeModel} from '../../models/home.model';
import {HomeService} from '../../core/API/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  Daily = true;
  Monthly = false;

  changeSectionDaily() {
    this.Daily = true;
    this.Monthly = false;
  }

  changeSectionMonthly() {
    this.Daily = false;
    this.Monthly = true;
  }

  home: HomeModel[];

  bsInlineValue = new Date();
  bsInlineRangeValue: Date[];
  maxDate = new Date();


  constructor(private homeService: HomeService) {
    this.maxDate.setDate(this.maxDate.getDate() + 7);
    this.bsInlineRangeValue = [this.bsInlineValue, this.maxDate];
  }

  ngOnInit() {
    this.home = this.homeService.getHome();
  }

  selected=[];

}
