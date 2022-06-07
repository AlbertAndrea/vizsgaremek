import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Iskola } from '../model/iskola';

@Injectable({
  providedIn: 'root'
})
export class IskolaService {
  list: Iskola[] = [
    {
      _id: '123as',
      name: 'ELTE Radnóti Miklós Gyakorló Általános Iskola és Gyakorló Gimnázium',
      address: '1146 Budapest, Cházár András u. 10.',
    },
    {
      _id: '124as',
      name: 'ELTE Gyakorló Óvoda és Egységes Gyógypedagógiai Módszertani Intézmény',
      address: '1146 Budapest, Cházár András u. 10.',
    },
    {
      _id: '125as',
      name: 'ELTE Apáczai Csere János Gyakorló Gimnázium és Kollégium',
      address: '1146 Budapest, Cházár András u. 10.',
    },
    {
      _id: '126as',
      name: 'ELTE Bárczi Gusztáv Gyakorló Általános Iskola',
      address: '1146 Budapest, Cházár András u. 10.',
    },
  ];

  constructor() { }
  getAll(): Observable<Iskola[]> {
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
