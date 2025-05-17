import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaFerramentasComponent } from './lista-ferramentas.component';

describe('ListaFerramentasComponent', () => {
  let component: ListaFerramentasComponent;
  let fixture: ComponentFixture<ListaFerramentasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaFerramentasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaFerramentasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
