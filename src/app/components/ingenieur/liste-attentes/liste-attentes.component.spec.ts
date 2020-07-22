import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeAttentesComponent } from './liste-attentes.component';

describe('ListeAttentesComponent', () => {
  let component: ListeAttentesComponent;
  let fixture: ComponentFixture<ListeAttentesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeAttentesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeAttentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
