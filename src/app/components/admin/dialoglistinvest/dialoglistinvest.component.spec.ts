import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialoglistinvestComponent } from './dialoglistinvest.component';

describe('DialoglistinvestComponent', () => {
  let component: DialoglistinvestComponent;
  let fixture: ComponentFixture<DialoglistinvestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialoglistinvestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialoglistinvestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
