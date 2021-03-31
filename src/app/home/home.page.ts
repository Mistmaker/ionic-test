import { Component } from '@angular/core';
import { DataService, Message } from '../services/data.service';
import { RucService } from '../services/ruc.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private data: DataService, private ruc: RucService) {
    this.ruc.getRuc('1708516297001').subscribe( resp =>{
      console.log(resp);
    },
    (error)=>{
      console.warn(error);
    });
  }

  refresh(ev) {
    setTimeout(() => {
      ev.detail.complete();
    }, 3000);
  }

  getMessages(): Message[] {
    return this.data.getMessages();
  }

}
