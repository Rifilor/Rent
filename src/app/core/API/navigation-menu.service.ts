import {Injectable, Input} from '@angular/core';
import {first} from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class NavigationMenuService {

  getLinkActive(linkURL: string){
    let currentURL = location.pathname;
    if (currentURL == linkURL) {
      return true
    }
    return false
  }
}
