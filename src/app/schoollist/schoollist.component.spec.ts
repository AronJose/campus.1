import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoollistComponent } from './schoollist.component';

describe('SchoollistComponent', () => {
  let component: SchoollistComponent;
  let fixture: ComponentFixture<SchoollistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchoollistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SchoollistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
