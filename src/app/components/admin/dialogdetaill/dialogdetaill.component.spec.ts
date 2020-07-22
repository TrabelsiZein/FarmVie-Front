import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogdetaillComponent } from './dialogdetaill.component';

describe('DialogdetaillComponent', () => {
  let component: DialogdetaillComponent;
  let fixture: ComponentFixture<DialogdetaillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogdetaillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogdetaillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
