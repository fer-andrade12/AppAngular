import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEditaComponent } from './form-edita.component';

describe('FormEditaComponent', () => {
  let component: FormEditaComponent;
  let fixture: ComponentFixture<FormEditaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormEditaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormEditaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
