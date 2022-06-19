import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResztvevoEditorComponent } from './resztvevo-editor.component';

describe('ResztvevoEditorComponent', () => {
  let component: ResztvevoEditorComponent;
  let fixture: ComponentFixture<ResztvevoEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResztvevoEditorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResztvevoEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
