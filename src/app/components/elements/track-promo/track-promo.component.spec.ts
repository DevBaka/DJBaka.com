import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackPromoComponent } from './track-promo.component';

describe('TrackPromoComponent', () => {
  let component: TrackPromoComponent;
  let fixture: ComponentFixture<TrackPromoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrackPromoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TrackPromoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
