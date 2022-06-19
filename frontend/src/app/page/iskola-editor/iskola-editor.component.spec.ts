import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IskolaEditorComponent } from './iskola-editor.component';

describe('IskolaEditorComponent', () => {
  let component: IskolaEditorComponent;
  let fixture: ComponentFixture<IskolaEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IskolaEditorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IskolaEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
