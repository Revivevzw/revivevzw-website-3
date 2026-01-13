import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BecomeMember } from './become-member';

describe('BecomeMember', () => {
  let component: BecomeMember;
  let fixture: ComponentFixture<BecomeMember>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BecomeMember]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BecomeMember);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
