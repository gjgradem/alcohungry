import { Component } from '@angular/core';
import { ApiconnectorService } from '../apiconnector.service';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  myStores;

  constructor( private api : ApiconnectorService ) {
    this.myStores = this.api.getMyStores();
  }

  homo() {
    
  }

}
