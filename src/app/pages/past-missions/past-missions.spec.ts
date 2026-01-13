import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PastMissions } from './past-missions';

describe('PastMissions', () => {
  let component: PastMissions;
  let fixture: ComponentFixture<PastMissions>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PastMissions]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PastMissions);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
