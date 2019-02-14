import { Component } from '@angular/core';
import { ApiconnectorService } from '../apiconnector.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  searchinput = {
    text: ''
  };

  constructor(private api : ApiconnectorService) {

  }

  search() {
    console.log(this.searchinput.text);
    this.api.search(this.searchinput.text);
  }
}
