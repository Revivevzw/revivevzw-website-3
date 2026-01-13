import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorporateSupport } from './corporate-support';

describe('CorporateSupport', () => {
  let component: CorporateSupport;
  let fixture: ComponentFixture<CorporateSupport>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CorporateSupport]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CorporateSupport);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
