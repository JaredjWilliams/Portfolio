import {Component, OnInit} from '@angular/core';
import {ProjectsService} from "../../presenters/projects.service";
import {project} from "../../models/project";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent implements OnInit {

  constructor(
    private projectsService: ProjectsService
  ) { }

  projects : project[] = [];
  testing = "This is a test"
  projectName = "Project Name"

  ngOnInit(): void {
    this.projects = this.projectsService.getProjects()
  }

}
