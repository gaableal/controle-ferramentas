import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarFerramentaComponent } from './editar-ferramenta.component';

describe('EditarFerramentaComponent', () => {
  let component: EditarFerramentaComponent;
  let fixture: ComponentFixture<EditarFerramentaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditarFerramentaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarFerramentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
