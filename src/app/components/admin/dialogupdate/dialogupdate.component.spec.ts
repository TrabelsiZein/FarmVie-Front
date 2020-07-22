import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogupdateComponent } from './dialogupdate.component';

describe('DialogupdateComponent', () => {
  let component: DialogupdateComponent;
  let fixture: ComponentFixture<DialogupdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogupdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
