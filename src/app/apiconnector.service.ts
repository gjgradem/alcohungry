import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiconnectorService {

  myStores = [];
  static apiKey = 'AIzaSyC2aL-kH2CQfPtafW6JlOwd9eCjWnvDFwM'
  static baseUrl = `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?inputtype=textquery&key=${ApiconnectorService.apiKey}`;

  constructor(private http: HttpClient) { 
    let store1 = {
      title: 'Emte',
      category: 'Supermarket'
    }
    let store2 = {
      title: 'Bahar',
      category: 'Turkish food'
    }
    let store3 = {
      title: 'Mangal',
      category: 'Turkish Food'
    }
    let store4 = {
      title: 'Soho',
      category: 'Sushi'
    }
    let store5 = {
      title: 'Soto',
      category: 'Sushi'
    }
    let store6 = {
      title: 'Jumbo City',
      category: 'Supermarket'
    }
    let store7 = {
      title: 'AH To Go',
      category: 'Supermarket'
    }
    let store8 = {
      title: 'Mansion 239',
      category: 'Superior Home'
    }
    this.myStores.push(store1);
    this.myStores.push(store2);
    this.myStores.push(store3);
    this.myStores.push(store4);
    this.myStores.push(store5);
    this.myStores.push(store6);
    this.myStores.push(store7);
    this.myStores.push(store8);
  }

  getMyStores() {
    return this.myStores;
  }
  
  search(query) {
    this.http.get(`${ApiconnectorService.baseUrl}&input=${query}`).subscribe((result) => {
      console.log(result);
    },
    (err) => {
      console.log(err);
    });
  }
}
