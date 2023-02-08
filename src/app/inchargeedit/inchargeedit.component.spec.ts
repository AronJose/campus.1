import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InchargeeditComponent } from './inchargeedit.component';

describe('InchargeeditComponent', () => {
  let component: InchargeeditComponent;
  let fixture: ComponentFixture<InchargeeditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InchargeeditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InchargeeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
