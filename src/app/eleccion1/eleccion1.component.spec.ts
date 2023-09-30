import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Eleccion1Component } from './eleccion1.component';

describe('Eleccion1Component', () => {
  let component: Eleccion1Component;
  let fixture: ComponentFixture<Eleccion1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Eleccion1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Eleccion1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
