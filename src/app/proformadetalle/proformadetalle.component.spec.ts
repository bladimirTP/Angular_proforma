import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProformadetalleComponent } from './proformadetalle.component';

describe('ProformadetalleComponent', () => {
  let component: ProformadetalleComponent;
  let fixture: ComponentFixture<ProformadetalleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProformadetalleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProformadetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
