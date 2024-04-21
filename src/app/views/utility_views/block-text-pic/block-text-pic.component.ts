import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-block-text-pic',
  templateUrl: './block-text-pic.component.html',
  styleUrl: './block-text-pic.component.css'
})
export class BlockTextPicComponent {

  @Input() image: string = "";
  @Input() title: string = "";
  @Input() description: string = "";
  @Input() hasHeaderTitle: boolean = false;
  @Input() headingTitle: string = "";
  @Input() isPicRight: boolean = false;
}
