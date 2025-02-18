import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoundcloudSetsComponent } from './soundcloud-sets.component';

describe('SoundcloudSetsComponent', () => {
  let component: SoundcloudSetsComponent;
  let fixture: ComponentFixture<SoundcloudSetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SoundcloudSetsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SoundcloudSetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
