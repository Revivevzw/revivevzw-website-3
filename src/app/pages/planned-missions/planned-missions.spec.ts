import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlannedMissions } from './planned-missions';

describe('PlannedMissions', () => {
  let component: PlannedMissions;
  let fixture: ComponentFixture<PlannedMissions>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlannedMissions]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlannedMissions);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
