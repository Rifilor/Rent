export class ProductsModel {
  imgURL: string [];
  name: string;
  price: string;
  info: string;

  constructor(imgURL: string[], name: string, price: string, info: string) {
    this.imgURL = imgURL;
    this.name = name;
    this.price = price;
    this.info = info;
  }
}
