import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputSelectFieldComponent } from './input-select-field.component';

describe('InputSelectFieldComponent', () => {
  let component: InputSelectFieldComponent;
  let fixture: ComponentFixture<InputSelectFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputSelectFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputSelectFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
