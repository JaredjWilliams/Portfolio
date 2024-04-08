import { Injectable } from '@angular/core';
import {project} from "../models/project";
import {PROJECTS, SOCIAL_MEDIA_PROJECT,} from "../app-constants";

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor() { }

  getProjects(): project[] {
    return PROJECTS;
  }





}
