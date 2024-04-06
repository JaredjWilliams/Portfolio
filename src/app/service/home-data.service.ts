import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HomeDataService {

  constructor(
    private http: HttpClient
  ) { }

  getBio() {
    return this.http.get('https://api.github.com/users/JaredjWilliams')
  }

  getAvatar(url : string) {
    return this.http.get(url, {responseType: 'blob'})
  }
}
