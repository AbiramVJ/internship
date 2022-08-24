import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecificEmployeComponent } from './specific-employe.component';

describe('SpecificEmployeComponent', () => {
  let component: SpecificEmployeComponent;
  let fixture: ComponentFixture<SpecificEmployeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecificEmployeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecificEmployeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
