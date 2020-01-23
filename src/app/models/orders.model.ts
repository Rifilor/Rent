export class OrdersModel {
  id: string;
  title: string;
  address: string;
  term: string;

  constructor(id: string, title: string, address: string, term: string){
    this.id = id;
    this.title = title;
    this.address = address;
    this.term = term;
  }
}
