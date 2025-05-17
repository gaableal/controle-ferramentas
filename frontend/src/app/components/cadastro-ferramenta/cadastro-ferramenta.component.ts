import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Ferramenta } from '../../models/ferramenta.model';
import { FerramentaService } from '../../services/ferramenta.service';

@Component({
  selector: 'app-cadastro-ferramenta',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cadastro-ferramenta.component.html',
  styleUrl: './cadastro-ferramenta.component.scss'
})
export class CadastroFerramentaComponent {
  ferramenta: Ferramenta = {
    nome: '',
    quantidade: 1,
    imagem: ''
  };

  sucesso = false;

  constructor(private ferramentaService: FerramentaService) {}

  cadastrar() {
    this.ferramentaService.cadastrarFerramenta(this.ferramenta).subscribe({
      next: (res) => {
        console.log('Cadastrado com sucesso:', res);

        this.sucesso = true;
        this.ferramenta = { nome: '', quantidade: 1, imagem: '' };

        setTimeout(() => {
          this.sucesso = false;
        }, 3000);
      },
      error: (err) => {
        console.error('Erro ao cadastrar:', err);
      }
    });
  }

  onFileSelected(event: any) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = () => {
      this.ferramenta.imagem = reader.result as string;
      console.log('Imagem convertida:', this.ferramenta.imagem); // debug
    };
    reader.readAsDataURL(file);
  }
}
}
