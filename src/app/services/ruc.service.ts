import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RucService {

  url = 'http://181.199.71.180:8000/ruc/getRuc.php?id=';

  constructor( private http: HttpClient ) { }


  getRuc(ruc: string){
    return this.http.get(`${this.url}${ruc}`);
  }

}
