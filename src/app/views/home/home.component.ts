import {Component, OnInit} from '@angular/core';
import {HomeDataService} from "../../service/home/home-data.service";
import {RESUME_TEXT, TECHNOLOGIES} from "../../app-constants";

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
    this.getGithubInfo()
  }

  private getGithubInfo() {
    this.homeDataService.getGitHubInfo().subscribe({
      next: (data) => {
        this.bio = data.bio
       this.setAvatar(data.avatar_url)
      },
      error: (err) => {
        console.error(err)
      }
    })
  }

  private setAvatar(avatar_url: string) {
    this.homeDataService.getAvatar(avatar_url).subscribe({
      next: (data) => {
        this.avatar = URL.createObjectURL(data)
      },
      error: (err) => {
        console.error(err)
      }
    })
  }

  protected readonly RESUME_TEXT = RESUME_TEXT;
    protected readonly TECHNOLOGIES = TECHNOLOGIES;
}
