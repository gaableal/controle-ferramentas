import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ferramenta } from '../models/ferramenta.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FerramentaService {

  private url = 'https://controle-backend-uo34.onrender.com/ferramentas'; // ajuste quando o backend estiver online

  constructor(private http: HttpClient) {}

  cadastrarFerramenta(ferramenta: Ferramenta): Observable<Ferramenta> {
    return this.http.post<Ferramenta>(this.url, ferramenta);
  }

  listarFerramentas(): Observable<Ferramenta[]> {
    return this.http.get<Ferramenta[]>(this.url);

  }

  atualizarQuantidade(id: string, novaQuantidade: number): Observable<Ferramenta> {
    return this.http.put<Ferramenta>(`${this.url}/${id}`, { quantidade: novaQuantidade });
  }

  excluirFerramenta(id: string): Observable<void> {
    return this.http.delete<void>(`${this.url}/${id}`);
  }
}

