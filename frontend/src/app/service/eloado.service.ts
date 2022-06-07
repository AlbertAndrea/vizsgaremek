import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
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

  constructor() { }

  getAll(): Observable<Eloado[]> {
    const list = [];
    for(let i = 0; i < 25; i++) {
      const item = [...this.list];
      for(let j=0; j < item.length; j++) {
        item[j]._id = `id-${ Math.round( Math.random() * 10000 ) }`;
        list.push(item[j]);
      }
    }
    return of(list);
  }
}
