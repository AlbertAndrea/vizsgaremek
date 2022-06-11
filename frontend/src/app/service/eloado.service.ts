import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Eloado } from '../model/eloado';

@Injectable({
  providedIn: 'root'
})
export class EloadoService {

  list: Eloado[] = [
    {
      _id: '123as',
      firstName: 'Szabó',
      lastName: 'Béla',
      school: 'Iskola1',
      presentation: 'Előadás1',
      section: 'Szekció1',
    },
    {
      _id: '124as',
      firstName: 'Kovács',
      lastName: 'Katalin',
      school: 'Iskola2',
      presentation: 'Előadás2',
      section: 'Szekció2',
    },
    {
      _id: '125as',
      firstName: 'Asztalos',
      lastName: 'Anna',
      school: 'Iskola3',
      presentation: 'Előadás3',
      section: 'Szekció1',
    },
    {
      _id: '125as',
      firstName: 'Szűcs',
      lastName: 'Gábor',
      school: 'Iskola4',
      presentation: 'Előadás4',
      section: 'Szekció3',
    },
  ];

apiUrl = environment.apiUrl;

  constructor(
    private http: HttpClient,
  ) { }

  getAll(): Observable<Eloado[]> {
    return this.http.get<Eloado[]>(`${this.apiUrl}eloadok`);
  }
}
