import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalHeaderComponent } from './principal-header.component';

describe('PrincipalHeaderComponent', () => {
  let component: PrincipalHeaderComponent;
  let fixture: ComponentFixture<PrincipalHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrincipalHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrincipalHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
