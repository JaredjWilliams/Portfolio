import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockImageSpanItemsArrayedComponent } from './block-image-span-items-arrayed.component';

describe('BlockImageSpanItemsArrayedComponent', () => {
  let component: BlockImageSpanItemsArrayedComponent;
  let fixture: ComponentFixture<BlockImageSpanItemsArrayedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BlockImageSpanItemsArrayedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BlockImageSpanItemsArrayedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
