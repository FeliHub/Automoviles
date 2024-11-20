import { Component, OnInit } from '@angular/core';
import { VehicleService } from '../services/vehicle.service';

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.page.html',
  styleUrls: ['./tienda.page.scss']
})
export class TiendaPage implements OnInit {
  vehicles: any[] = [];

  constructor(private vehicleService: VehicleService) {}

  ngOnInit() {
    this.vehicleService.getVehicles().subscribe({
      next: (data) => {
        console.log(data); // Para verificar la respuesta
        this.vehicles = data?.data?.cars || []; // Accede al array de vehículos
      },
      error: (err) => {
        console.error('Error fetching vehicles:', err);
      }
    });
  }
  

  buy(vehicle: any) {
    console.log('Purchased:', vehicle);
    // Lógica adicional para manejar la compra
  }
}
