import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeAcceptesComponent } from './liste-acceptes.component';

describe('ListeAttentesComponent', () => {
  let component: ListeAcceptesComponent;
  let fixture: ComponentFixture<ListeAcceptesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeAcceptesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeAcceptesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
