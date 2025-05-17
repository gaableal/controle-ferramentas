import { Routes } from '@angular/router';
import { CadastroFerramentaComponent } from './components/cadastro-ferramenta/cadastro-ferramenta.component';
import { ListaFerramentasComponent } from './components/lista-ferramentas/lista-ferramentas.component';
import { EditarFerramentaComponent } from './components/editar-ferramenta/editar-ferramenta.component';

export const routes: Routes = [
  { path: '', redirectTo: 'lista', pathMatch: 'full' },
  { path: 'lista', component: ListaFerramentasComponent },
  { path: 'cadastro', component: CadastroFerramentaComponent },
  { path: 'editar/:id', component: EditarFerramentaComponent }
];
