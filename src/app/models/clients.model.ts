export class ClientsModel {
  imgURL: string;
  name: string;
  number: string;
  email: string;

  constructor(imgURL: string, name: string, number: string, email: string) {
    this.imgURL = imgURL;
    this.name = name;
    this.number = number;
    this.email = email;
  }
}
