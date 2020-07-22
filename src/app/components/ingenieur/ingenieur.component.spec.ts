import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IngenieurComponent } from './ingenieur.component';

describe('IngenieurComponent', () => {
  let component: IngenieurComponent;
  let fixture: ComponentFixture<IngenieurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IngenieurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IngenieurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
