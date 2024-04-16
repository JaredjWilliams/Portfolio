import { Component, Input } from '@angular/core';
import {Item} from "../../../models/Item";
import {TECHNOLOGIES} from "../../../app-constants";

@Component({
  selector: 'app-block-image-span-items-arrayed',
  templateUrl: './block-image-span-items-arrayed.component.html',
  styleUrl: './block-image-span-items-arrayed.component.css'
})
export class BlockImageSpanItemsArrayedComponent {
@Input() title: string = "";
@Input() image: string = "";
@Input() description: string = "";
@Input() items: Item[] = []

  protected readonly TECHNOLOGIES = TECHNOLOGIES;
}
