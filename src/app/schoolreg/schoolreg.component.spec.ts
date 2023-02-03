import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolregComponent } from './schoolreg.component';

describe('SchoolregComponent', () => {
  let component: SchoolregComponent;
  let fixture: ComponentFixture<SchoolregComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchoolregComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SchoolregComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
