import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cadastro-usuario',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './cadastro-usuario.component.html'
})
export class CadastroUsuarioComponent {
  usuario = { nome: '', email: '', senha: '' };
  mensagem = '';

  constructor(private http: HttpClient, private router: Router) {}

  cadastrar() {
  this.http.post('https://controle-backend-uo34.onrender.com/auth/register', this.usuario)
    .subscribe(() => {
      this.mensagem = 'Usuário cadastrado com sucesso!';
      this.usuario = { nome: '', email: '', senha: '' };
      this.router.navigate(['/login']);
    });
  }
}
