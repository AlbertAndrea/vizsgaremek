import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EloadoComponent } from './eloado.component';

describe('EloadoComponent', () => {
  let component: EloadoComponent;
  let fixture: ComponentFixture<EloadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EloadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EloadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
