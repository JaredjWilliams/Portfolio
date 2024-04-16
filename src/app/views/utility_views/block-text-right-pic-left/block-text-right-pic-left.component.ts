import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-block-text-right-pic-left',
  templateUrl: './block-text-right-pic-left.component.html',
  styleUrl: './block-text-right-pic-left.component.css'
})
export class BlockTextRightPicLeftComponent {
  @Input() image: string = "";
  @Input() title: string = "";
  @Input() description: string = "";

}
