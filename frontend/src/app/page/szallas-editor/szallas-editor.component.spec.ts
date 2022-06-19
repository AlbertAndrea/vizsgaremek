import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SzallasEditorComponent } from './szallas-editor.component';

describe('SzallasEditorComponent', () => {
  let component: SzallasEditorComponent;
  let fixture: ComponentFixture<SzallasEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SzallasEditorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SzallasEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
