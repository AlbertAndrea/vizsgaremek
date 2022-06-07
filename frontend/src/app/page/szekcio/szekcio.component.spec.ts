import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SzekcioComponent } from './szekcio.component';

describe('SzekcioComponent', () => {
  let component: SzekcioComponent;
  let fixture: ComponentFixture<SzekcioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SzekcioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SzekcioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
