export class HomeModel {
  name: string;
  phone: string;
  address: string;
  date: string;
  notes: string;

  constructor(name: string, phone_number: string, address: string, date: string, notes?: string) {
    this.name = name;
    this.phone = phone_number;
    this.address = address;
    this.date = date;
    if(notes!==null){
      this.notes = notes;
    } else {
      this.notes = 'Пусто';
    }
  }
}
