import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-language',
  templateUrl: './button-language.component.html',
  styleUrls: ['./button-language.component.scss']
})
export class ButtonLanguageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  RU = false;
  ENG = true;
  getActive(language: string) {
    if(language == 'RU') {
      this.RU = true;
      this.ENG = false;
    }
    if(language == "ENG"){
      this.RU = false;
      this.ENG = true;
    }
  }

}
