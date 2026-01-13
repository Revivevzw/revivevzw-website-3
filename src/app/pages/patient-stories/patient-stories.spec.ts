import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientStories } from './patient-stories';

describe('PatientStories', () => {
  let component: PatientStories;
  let fixture: ComponentFixture<PatientStories>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PatientStories]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatientStories);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
