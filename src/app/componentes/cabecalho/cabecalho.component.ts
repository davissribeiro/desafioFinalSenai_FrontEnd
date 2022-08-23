import { Observable } from 'rxjs';
import { Component } from '@angular/core';
import { UsuarioService } from 'src/app/autenticacao/usuario/usuario.service';
import { Usuario } from 'src/app/autenticacao/usuario/usuario';

@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.css'],
})
export class CabecalhoComponent {
  user$: Observable<Usuario> = this.usuarioService.retornaUsuario();

  constructor(private usuarioService: UsuarioService) {}

  logout() {
    this.usuarioService.logout();
  }
}
