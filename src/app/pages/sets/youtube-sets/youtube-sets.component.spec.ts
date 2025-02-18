import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YoutubeSetsComponent } from './youtube-sets.component';

describe('YoutubeSetsComponent', () => {
  let component: YoutubeSetsComponent;
  let fixture: ComponentFixture<YoutubeSetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YoutubeSetsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(YoutubeSetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
