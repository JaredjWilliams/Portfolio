import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockTextRightPicLeftComponent } from './block-text-right-pic-left.component';

describe('BlockTextRightPicLeftComponent', () => {
  let component: BlockTextRightPicLeftComponent;
  let fixture: ComponentFixture<BlockTextRightPicLeftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BlockTextRightPicLeftComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BlockTextRightPicLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
