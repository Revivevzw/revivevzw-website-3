import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VolunteerStories } from './volunteer-stories';

describe('VolunteerStories', () => {
  let component: VolunteerStories;
  let fixture: ComponentFixture<VolunteerStories>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VolunteerStories]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VolunteerStories);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
