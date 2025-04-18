import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColumnesLinksComponent } from './columnes-links.component';


describe('ColumnesLinksComponent', () => {
  let component: ColumnesLinksComponent;
  let fixture: ComponentFixture<ColumnesLinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColumnesLinksComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ColumnesLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
