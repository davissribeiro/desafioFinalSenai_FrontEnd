import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UsuarioService } from './usuario/usuario.service';

@Injectable({
  providedIn: 'root',
})
export class AutenticacaoGuard implements CanLoad {
  constructor(private usuarioService: UsuarioService, private router: Router) {}

  canLoad(
    route: Route,
    segments: UrlSegment[]
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (this.usuarioService.estaLogado()) {
      let teste = true;

      alert('Autorizado!');
      console.log('autorizado');

      return teste;
    }
    alert('Não autorizado!');
    console.log('Não autorizado');

    this.router.navigate(['']);
    return false;
  }
}
