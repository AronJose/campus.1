import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchooleditComponent } from './schooledit.component';

describe('SchooleditComponent', () => {
  let component: SchooleditComponent;
  let fixture: ComponentFixture<SchooleditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchooleditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SchooleditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
