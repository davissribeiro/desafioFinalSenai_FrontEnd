import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { filter, switchMap, Observable } from 'rxjs';
import { CodigoVin } from '../../codigo-vin';
import { VeiculosService } from '../../veiculos.service';

@Component({
  selector: 'app-exibir-vin',
  templateUrl: './exibir-vin.component.html',
  styleUrls: ['./exibir-vin.component.css'],
})
export class ExibirVinComponent {
  codigoVinInput: FormControl = new FormControl();

  codigoVin$: Observable<CodigoVin> = this.codigoVinInput.valueChanges.pipe(
    filter((valorDigitado) => valorDigitado.length == 20),
    switchMap((valorDigitado) =>
      this.veiculosService.getCodigoVin(valorDigitado)
    )
  );

  constructor(private veiculosService: VeiculosService) {}
}
