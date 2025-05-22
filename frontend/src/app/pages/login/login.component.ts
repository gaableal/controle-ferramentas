import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  email = '';
  senha = '';
  erro = '';

  constructor(private http: HttpClient, private router: Router) {}

  irParaCadastro() {
  this.router.navigate(['/cadastrar-usuario']);
}

  login() {
  this.http.post<any>('https://controle-backend-uo34.onrender.com/auth/login', {
    email: this.email,
    senha: this.senha
  }).subscribe({
    next: (res) => {
      // Login ok, agora redireciona
      this.router.navigate(['/lista']);
    },
    error: (err) => {
      this.erro = 'Credenciais inválidas.';
    }
  });
}
}
