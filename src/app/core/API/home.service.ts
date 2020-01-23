import {Injectable} from '@angular/core';
import {HomeModel} from '../../models/home.model';

@Injectable()
export class HomeService {
  getHome() : HomeModel[] {
    return [
      new HomeModel('Emeli Ross', '202-555-0187', 'SAdasd', '11/22/33'),
      new HomeModel('Alfred Roman', '202-555-0185', 'fgdgsf', '22/12/12'),
      new HomeModel('Mali Witt', '34524234', 'lkdfkld', '55/33/22'),
      new HomeModel('Mali Witt', '34524234', 'lkdfkld', '55/33/22'),
      new HomeModel('Mali Witt', '34524234', 'lkdfkld', '55/33/22'),
      new HomeModel('Mali Witt', '34524234', 'lkdfkld', '55/33/22'),
      new HomeModel('Emeli Ross', '202-555-0187', 'SAdasd', '11/22/33'),
      new HomeModel('Emeli Ross', '202-555-0187', 'SAdasd', '11/22/33'),
      new HomeModel('Emeli Ross', '202-555-0187', 'SAdasd', '11/22/33'),
      new HomeModel('Alfred Roman', '202-555-0185', 'fgdgsf', '22/12/12'),
      new HomeModel('Alfred Roman', '202-555-0185', 'fgdgsf', '22/12/12'),
      new HomeModel('Mali Witt', '34524234', 'lkdfkld', '55/33/22'),
      new HomeModel('Mali Witt', '34524234', 'lkdfkld', '55/33/22'),
      new HomeModel('Mali Witt', '34524234', 'lkdfkld', '55/33/22'),
      new HomeModel('Emeli Ross', '202-555-0187', 'SAdasd', '11/22/33'),
      new HomeModel('Emeli Ross', '202-555-0187', 'SAdasd', '11/22/33'),
      new HomeModel('Emeli Ross', '202-555-0187', 'SAdasd', '11/22/33'),
      new HomeModel('Alfred Roman', '202-555-0185', 'fgdgsf', '22/12/12'),
      new HomeModel('Alfred Roman', '202-555-0185', 'fgdgsf', '22/12/12'),
      new HomeModel('Mali Witt', '34524234', 'lkdfkld', '55/33/22'),
      new HomeModel('Mali Witt', '34524234', 'lkdfkld', '55/33/22'),
      new HomeModel('Mali Witt', '34524234', 'lkdfkld', '55/33/22'),
      new HomeModel('Emeli Ross', '202-555-0187', 'SAdasd', '11/22/33'),
      new HomeModel('Emeli Ross', '202-555-0187', 'SAdasd', '11/22/33'),
      new HomeModel('Emeli Ross', '202-555-0187', 'SAdasd', '11/22/33'),
      new HomeModel('Alfred Roman', '202-555-0185', 'fgdgsf', '22/12/12'),
      new HomeModel('Alfred Roman', '202-555-0185', 'fgdgsf', '22/12/12'),
      new HomeModel('Mali Witt', '34524234', 'lkdfkld', '55/33/22'),
      new HomeModel('Mali Witt', '34524234', 'lkdfkld', '55/33/22'),
      new HomeModel('Mali Witt', '34524234', 'lkdfkld', '55/33/22'),
      new HomeModel('Emeli Ross', '202-555-0187', 'SAdasd', '11/22/33'),
      new HomeModel('Emeli Ross', '202-555-0187', 'SAdasd', '11/22/33'),
      new HomeModel('Emeli Ross', '202-555-0187', 'SAdasd', '11/22/33'),
      new HomeModel('Alfred Roman', '202-555-0185', 'fgdgsf', '22/12/12'),
      new HomeModel('Alfred Roman', '202-555-0185', 'fgdgsf', '22/12/12'),
    ];
  }
}
