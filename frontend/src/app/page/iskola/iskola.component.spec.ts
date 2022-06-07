import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IskolaComponent } from './iskola.component';

describe('IskolaComponent', () => {
  let component: IskolaComponent;
  let fixture: ComponentFixture<IskolaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IskolaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IskolaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
