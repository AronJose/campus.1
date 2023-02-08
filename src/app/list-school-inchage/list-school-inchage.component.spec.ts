import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSchoolInchageComponent } from './list-school-inchage.component';

describe('ListSchoolInchageComponent', () => {
  let component: ListSchoolInchageComponent;
  let fixture: ComponentFixture<ListSchoolInchageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListSchoolInchageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListSchoolInchageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
