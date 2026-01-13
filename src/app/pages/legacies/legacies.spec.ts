import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Legacies } from './legacies';

describe('Legacies', () => {
  let component: Legacies;
  let fixture: ComponentFixture<Legacies>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Legacies]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Legacies);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
