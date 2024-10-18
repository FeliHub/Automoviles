import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

export interface Car{
  id?: string;
  nombre?: string;
  patente?: string;
  year?: number;
  imageUrl?: string;
}

@Injectable({
  providedIn: 'root'
})
export class CarsService {
  private collectionName="cars"

  constructor(private firestore: AngularFirestore) { }

  
}
