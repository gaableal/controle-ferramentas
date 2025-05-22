import { Routes } from '@angular/router';
import { CadastroFerramentaComponent } from './components/cadastro-ferramenta/cadastro-ferramenta.component';
import { ListaFerramentasComponent } from './components/lista-ferramentas/lista-ferramentas.component';
import { EditarFerramentaComponent } from './components/editar-ferramenta/editar-ferramenta.component';
import { LoginComponent } from './pages/login/login.component';
import { CadastroUsuarioComponent } from './pages/cadastro-usuario/cadastro-usuario.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' }, 
  { path: 'cadastrar-usuario', component: CadastroUsuarioComponent },
  { path: 'login', component: LoginComponent },
  { path: 'lista', component: ListaFerramentasComponent },
  { path: 'cadastro', component: CadastroFerramentaComponent },
  { path: 'editar/:id', component: EditarFerramentaComponent }
];

