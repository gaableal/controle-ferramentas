export interface Ferramenta {
  _id?: string; // opcional, será preenchido pelo MongoDB
  nome: string;
  quantidade: number;
  imagem?: string;
}
