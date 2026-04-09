import { ComponentFixture, TestBed } from '@angular/core/testing';
import { expect } from '@jest/globals';

import { SuggessionDetailsComponent } from './suggession-details.component';
import { beforeEach, describe, it } from 'node:test';

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
