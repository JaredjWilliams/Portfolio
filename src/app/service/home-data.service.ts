import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {GitHubInfo} from "../models/GitHubInfo";


@Injectable({
  providedIn: 'root'
})
export class HomeDataService {

  constructor(
    private http: HttpClient
  ) { }

  getGitHubInfo() {
    return this.http.get<GitHubInfo>('https://api.github.com/users/JaredjWilliams')
  }

  getAvatar(url : string) {
    return this.http.get(url, {responseType: 'blob'})
  }
}
