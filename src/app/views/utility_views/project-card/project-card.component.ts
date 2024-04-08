import {AfterViewInit, Component, ElementRef, Input, ViewChild} from '@angular/core';
import {project} from "../../../models/project";

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.css'
})

export class ProjectCardComponent {
  @Input() project: project = {} as project




}
