import { Injectable } from '@angular/core';
import {project} from "../models/project";
import {SOCIAL_MEDIA_PROJECT,} from "../app-constants";

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor() { }

  getProjects(): project[] {
    return [
      SOCIAL_MEDIA_PROJECT,

    ]
  }





}
