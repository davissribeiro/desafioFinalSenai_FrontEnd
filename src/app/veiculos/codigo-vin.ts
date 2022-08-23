export interface CodigosVin extends Array<CodigoVin> {}

export interface CodigoVin {
  id: number | string;
  vin: string;
  odometer: string;
  tirePressure: string;
  status: string;
  batteryStatus: string;
  fuelLevel: string;
  lat: string;
  long: string;
}

export interface CodigoVinAPI {
  vehicleData: CodigosVin;
}
