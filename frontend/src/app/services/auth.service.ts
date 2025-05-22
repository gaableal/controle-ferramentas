import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly TOKEN_KEY = 'token';

  constructor() {}

  salvarToken(token: string): void {
    localStorage.setItem(this.TOKEN_KEY, token);
  }

  obterToken(): string | null {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  estaLogado(): boolean {
    return !!this.obterToken();
  }

  sair(): void {
    localStorage.removeItem(this.TOKEN_KEY);
  }
}
