import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultylistComponent } from './facultylist.component';

describe('FacultylistComponent', () => {
  let component: FacultylistComponent;
  let fixture: ComponentFixture<FacultylistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacultylistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacultylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
