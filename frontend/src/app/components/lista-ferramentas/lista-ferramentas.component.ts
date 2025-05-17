import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ferramenta } from '../../models/ferramenta.model';
import { FerramentaService } from '../../services/ferramenta.service';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-lista-ferramentas',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './lista-ferramentas.component.html',
  styleUrl: './lista-ferramentas.component.scss'
})
export class ListaFerramentasComponent implements OnInit {
  ferramentas: Ferramenta[] = [];
  termoBusca: string = '';
  sucesso = false;
  carregando: boolean = true;

  constructor(private ferramentaService: FerramentaService) {}

 ngOnInit(): void {
  this.carregando = true;

  this.ferramentaService.listarFerramentas().subscribe({
    next: (res) => {
      this.ferramentas = res;
      this.carregando = false;
    },
    error: (err) => {
      console.error('Erro ao carregar ferramentas:', err);
      this.carregando = false;
    }
  });
}

  get ferramentasFiltradas(): Ferramenta[] {
    return this.ferramentas.filter(f =>
      f.nome.toLowerCase().includes(this.termoBusca.toLowerCase())
    );
  }

  excluir(id: string | undefined): void {
    if (!id) return;

    if (confirm('Tem certeza que deseja excluir esta ferramenta?')) {
      this.ferramentaService.excluirFerramenta(id).subscribe({
        next: () => {
          this.sucesso = true;

          // Atualiza a lista local (imediato)
          this.ferramentas = this.ferramentas.filter(f => f._id !== id);

          // Oculta o alerta após 2,5s
          setTimeout(() => {
            this.sucesso = false;
          }, 2500);
        },
        error: (err) => {
          console.error('Erro ao excluir ferramenta:', err);
        }
      });
    }
  }

  imagemSelecionada: string = '';
mostrarImagem = false;

abrirImagem(imagem: string | undefined) {
  if (imagem) {
    this.imagemSelecionada = imagem;
    this.mostrarImagem = true;
  }
}

fecharImagem() {
  this.mostrarImagem = false;
  this.imagemSelecionada = '';
}
}
