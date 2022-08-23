import { Observable } from 'rxjs';
import { VeiculosService } from './../../veiculos.service';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Veiculos } from '../../veiculos';

@Component({
  selector: 'app-exibir-veiculo',
  templateUrl: './exibir-veiculo.component.html',
  styleUrls: ['./exibir-veiculo.component.css'],
})
export class ExibirVeiculoComponent {
  contactForm: FormGroup = this.formBuilder.group({ veiculo: [null] });

  veiculos$: Observable<Veiculos> = this.veiculosService.getVeiculos();

  constructor(
    private veiculosService: VeiculosService,
    private formBuilder: FormBuilder
  ) {}

  submit():void {
    console.log(
      `Modelo selecionado: ${this.contactForm.value.veiculo.vehicle}`
    );
  }
}
