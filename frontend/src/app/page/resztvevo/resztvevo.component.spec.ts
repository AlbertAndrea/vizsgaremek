import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResztvevoComponent } from './resztvevo.component';

describe('ResztvevoComponent', () => {
  let component: ResztvevoComponent;
  let fixture: ComponentFixture<ResztvevoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResztvevoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResztvevoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
