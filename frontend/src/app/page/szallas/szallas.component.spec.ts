import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SzallasComponent } from './szallas.component';

describe('SzallasComponent', () => {
  let component: SzallasComponent;
  let fixture: ComponentFixture<SzallasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SzallasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SzallasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
