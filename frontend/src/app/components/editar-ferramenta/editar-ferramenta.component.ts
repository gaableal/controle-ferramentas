import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FerramentaService } from '../../services/ferramenta.service';
import { Ferramenta } from '../../models/ferramenta.model';

@Component({
  selector: 'app-editar-ferramenta',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './editar-ferramenta.component.html',
  styleUrl: './editar-ferramenta.component.scss'
})
export class EditarFerramentaComponent implements OnInit {
  ferramenta: Ferramenta = {
    nome: '',
    quantidade: 0
  };

  id: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private ferramentaService: FerramentaService
  ) {}

  sucesso = false;

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) {
      this.ferramentaService.listarFerramentas().subscribe({
        next: (ferramentas) => {
          const encontrada = ferramentas.find(f => f._id === this.id);
          if (encontrada) this.ferramenta = encontrada;
        },
        error: (err) => console.error('Erro ao buscar ferramenta:', err)
      });
    }
  }

    salvar(): void {
  if (this.id) {
    this.ferramentaService.atualizarQuantidade(this.id, this.ferramenta.quantidade).subscribe({
      next: () => {
        this.sucesso = true;

        // Exibe o alerta por 2.5 segundos e depois redireciona
        setTimeout(() => {
          this.sucesso = false;
          this.router.navigate(['/lista']);
        }, 2500);
      },
      error: (err) => console.error('Erro ao atualizar ferramenta:', err)
    });
  }
}
}
