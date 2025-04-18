import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColumnesLinksBlackComponent } from './columnes-links-black.component';

describe('ColumnesLinksBlackComponent', () => {
  let component: ColumnesLinksBlackComponent;
  let fixture: ComponentFixture<ColumnesLinksBlackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColumnesLinksBlackComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ColumnesLinksBlackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
