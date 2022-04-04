import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormVagaComponent } from './form-vaga.component';

describe('FormVagaComponent', () => {
  let component: FormVagaComponent;
  let fixture: ComponentFixture<FormVagaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormVagaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormVagaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
