import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EloadoEditorComponent } from './eloado-editor.component';

describe('EloadoEditorComponent', () => {
  let component: EloadoEditorComponent;
  let fixture: ComponentFixture<EloadoEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EloadoEditorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EloadoEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
