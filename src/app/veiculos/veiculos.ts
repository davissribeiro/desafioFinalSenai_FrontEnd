export interface Veiculos extends Array<Veiculo> {}

export interface Veiculo {
  id: number | string;
  vehicle: string;
  volumetotal: string;
  connected: string;
  softwareUpdates: string;
}

export interface VeiculosAPI {
  vehicles: Veiculos;
}
