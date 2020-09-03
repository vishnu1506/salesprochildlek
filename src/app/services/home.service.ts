import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  _baseUrl: string = '';

  // For Using Fake API by Using It's URL  
  constructor(private http: HttpClient) {
    this._baseUrl = "http://localhost:4201/assets/data/sample.json";
  }

  // To fill the Datatable for Default Table [Dummy Data]  
  public GetSampleRecords() {
    return this.http.get(this._baseUrl);
  }
}
