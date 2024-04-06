import {Component, OnInit} from '@angular/core';
import {HomeDataService} from "../../service/home-data.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  bio : string  = ""
  avatar : string = ""

  constructor(
    private homeDataService: HomeDataService
  ) {

  }

  ngOnInit() {
    this.setBio()
    this.setAvatar()
  }

  private setBio() {
    this.homeDataService.getBio().subscribe((data: any) => {
      this.bio = data.bio
      this.avatar = data.avatar_url
    })
  }

  private setAvatar() {
    this.homeDataService.getAvatar(this.avatar).subscribe((data: any) => {
      this.avatar = URL.createObjectURL(data)
    })
  }
}
