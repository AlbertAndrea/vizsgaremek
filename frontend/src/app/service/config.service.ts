import { Injectable } from '@angular/core';
import { INgxTableColumn } from '../data-table/ngx-data-table/ngx-data-table.component';

export interface IMenuItem {
  link: string;
  title: string;
  icon?: string;
}

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  sidebarMenu: IMenuItem[] = [
    {link: '/', title: 'Irányítópult', icon: 'home'},
    {link: '/iskola', title: 'Iskolák', icon: 'star'},
    {link: '/szekcio', title: 'Szekciók', icon: 'activity'},
    {link: '/eloado', title: 'Előadók', icon: 'user'},
    {link: '/resztvevo', title: 'Résztvevők', icon: 'users'},
    {link: '/szallas', title: 'Szállások', icon: 'moon'},
    {link: '/etkezes', title: 'Étkezések', icon: 'coffee'},


    //itt veszük fel az oldalakat
  ];

  eloadoTableColumns: INgxTableColumn[] = [
    {key: '_id', title: '#'},
    {key: 'firstName', title: 'Vezetéknév'},
    {key: 'lastName', title: 'Keresztnév'},
    {key: 'school', title: 'Iskola'},
    {key: 'presentation', title: 'Előadás címe'},
    {key: 'section', title: 'Szekció'},
  ];

  iskolaTableColumns: INgxTableColumn[] = [
    {key: '_id', title: '#'},
    {key: 'name', title: 'Iskola neve'},
    {key: 'address', title: 'Címe'},
  ];


  constructor() { }
}
