import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormacComponent } from './formac.component';

describe('FormacComponent', () => {
  let component: FormacComponent;
  let fixture: ComponentFixture<FormacComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormacComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
