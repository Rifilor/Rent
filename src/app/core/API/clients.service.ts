import {Injectable} from '@angular/core';
import {ClientsModel} from '../../models/clients.model';

@Injectable()
export class ClientsService {
  static getClients(): ClientsModel[]{
    return [
      new ClientsModel("http://howmade.ru/wp-content/uploads/2019/02/13-51.jpg", "Emeli Ross", "202-555-0187", "shedy.shedy@svetlana-vesna.ru"),
      new ClientsModel("https://sostav.ua/app/public/images/news/2019/02/15/Ss8tCBRS_m.jpg", "Alfred Roman", "202-555-0185", "xorgfunnyweddingj@mylastdomainname.ga"),
      new ClientsModel("https://cdn.shazoo.ru/320516_5pKw2tZa5u_1.jpg", "Kenzie Camacho", "202-555-0150", "3legra6@myfirstdomainname.cf"),
      new ClientsModel("http://www.vokrugsveta.ru/img/bx/iblock/75b/75bda927da5e66ac817cb04a29d33bf6.jpg", "Robert Becker", "+1-202-555-0157", "gter@hinfalitt.ru"),
      new ClientsModel("https://i0.wp.com/pure-t.ru/wp-content/uploads/2017/11/1510793619-96b1f9b7a312e7dfd801f3952046d9fb.jpg?resize=710%2C710", "Harlee Vinson", "617-555-0110", "vkhaled.benz.56u@bitcooker.com"),
      new ClientsModel("http://interesno.cc/uploads/tumb/img/201806/image4-85_tumb_660.jpg", "Mali Witt", "617-555-0196", "ub@alalkamalalka.gq"),
      new ClientsModel("https://rep.ru/files/models/widget_picture/37659/37659_photo_w980.jpg", "Emilie Todd", "775-555-0118", "afio1cum@besttempmail.com"),
      new ClientsModel("http://ic.pics.livejournal.com/nikitich/12757143/103000/103000_original.jpg", "Marcus Solis", "775-555-0137", "hneuer-maro@blueauramassage.com"),
      new ClientsModel("https://n1s1.hsmedia.ru/ae/3b/cf/ae3bcfd387fe4f6c0fcd5bbf05bd8ca1/665x495_1_df25967a1687360cfebe8b0dd4a156f4@1000x745_0xac120003_6962801231562632828.jpg", "Ellis Wilkerson", "307-555-0179", "1haythem.milanoun@removfap.com"),
      new ClientsModel("https://lover.ru/cache/images/9c4d96175c1835df4854e91008218203/resizeCrop_700_525_center_center__.jpg", "Jackson Jarvis", "307-555-0116", "rbebova@bluwurmind234.ml"),
      new ClientsModel("https://cs.pikabu.ru/post_img/2013/07/02/4/1372735075_2135835288.jpg", "Rupert Hodge", "307-555-0106", "gjoaovitors.789b@onestopiguanashop.com"),
      new ClientsModel("https://img04.rl0.ru/0fb7c2485b6104d8bbcf588813da18c1/c615x400i/news.rambler.ru/img/2019/11/04/152412.030345.8704.jpeg", "Lia Stephens", "302-555-0124", "dshubhamhiro@videohd-club.ru"),
      new ClientsModel("https://statimg1.cdnbb8.com/files/image/deal/168344/bb4_deal_big/84a715162c7720f79f1dd43dc555b428.jpeg?44c18465ec044bd9a4625161acf21a6f", "Sneha Mcgrath", "302-555-0147", "4iheb.kaulitz7@hinfalitt.ru"),
      new ClientsModel("https://kinoreporter.ru/wp-content/uploads/2019/09/Screenshot_10-1-1140x580.jpg", "Samad Chan", "202-555-0123", "dincompetentbrai3@nastroykamagento.ru"),
      new ClientsModel("https://shkolazhizni.ru/img/content/i102/102768_or.jpg", "Jade Duke", "+1-202-555-0164", "2laklowqv@stonedrones.com"),
      new ClientsModel("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTldlKIbhUhBeee0HlBuGcLpzlfh6RwyXmZwxsxUf86FSkdDee6&s", "Darcey Martins", "502-555-0127", "uqamar.ahmeds@calfocus.com"),
      new ClientsModel("https://i.ytimg.com/vi/49wBe01Ac9I/hqdefault.jpg", "Gemma Dejesus", "+1-502-555-0113", "yjoe.rock@biostatistique.com"),
      new ClientsModel("http://comandir.com/upkeep/uploads/2019/11/1ef1ef-goritlico3-700x450.jpg", "Summer-Louise Mcdaniel", "+1-502-555-0165", "gpouriabahram@asterialop.site"),
      new ClientsModel("https://www.womanhit.ru/media/CACHE/images/articleimage2/2019/9/7_QJJAGHV/dacd102b3b03bb9cef4fd8bedfe9dc8f.png", "Tobey Mccall", "+1-502-555-0119", "dsubhash@niydomen897.gq"),
      new ClientsModel("https://img04.rl0.ru/bc9454abc816bc4905eb27a292e6a49a/c615x400i/news.rambler.ru/img/2019/10/02191612.941541.6287.jpg", "Alishia Dyer", "+1-225-555-0158", "fali.kareemjw@pochatkivkarmane.gq"),
    ]
  }
}
