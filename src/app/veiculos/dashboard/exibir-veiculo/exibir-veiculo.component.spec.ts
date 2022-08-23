import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExibirVeiculoComponent } from './exibir-veiculo.component';

describe('ExibirVeiculoComponent', () => {
  let component: ExibirVeiculoComponent;
  let fixture: ComponentFixture<ExibirVeiculoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExibirVeiculoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExibirVeiculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
