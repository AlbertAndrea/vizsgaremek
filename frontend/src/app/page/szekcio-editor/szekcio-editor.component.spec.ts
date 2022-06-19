import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SzekcioEditorComponent } from './szekcio-editor.component';

describe('SzekcioEditorComponent', () => {
  let component: SzekcioEditorComponent;
  let fixture: ComponentFixture<SzekcioEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SzekcioEditorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SzekcioEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
