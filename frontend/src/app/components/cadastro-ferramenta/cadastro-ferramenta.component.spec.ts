import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroFerramentaComponent } from './cadastro-ferramenta.component';

describe('CadastroFerramentaComponent', () => {
  let component: CadastroFerramentaComponent;
  let fixture: ComponentFixture<CadastroFerramentaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadastroFerramentaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastroFerramentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
