import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuggessionDetailsComponent } from './suggession-details.component';

describe('SuggessionDetailsComponent', () => {
  let component: SuggessionDetailsComponent;
  let fixture: ComponentFixture<SuggessionDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SuggessionDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuggessionDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
