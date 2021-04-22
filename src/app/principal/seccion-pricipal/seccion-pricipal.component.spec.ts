import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccionPricipalComponent } from './seccion-pricipal.component';

describe('SeccionPricipalComponent', () => {
  let component: SeccionPricipalComponent;
  let fixture: ComponentFixture<SeccionPricipalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeccionPricipalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeccionPricipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
