import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./views/home/home.component";
import {AboutComponent} from "./views/about/about.component";
import {ProjectsComponent} from "./views/projects/projects/projects.component";
import {ResumeComponent} from "./views/resume/resume.component";
import {ErrorComponent} from "./views/error/error.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "about", component: AboutComponent },
  { path: "resume", component: ResumeComponent },
  { path: "projects", component: ProjectsComponent },

  {path: "**", component: ErrorComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
