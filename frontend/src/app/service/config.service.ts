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


    //itt veszük fel az oldalakat
  ];

  eloadoTableColumns: INgxTableColumn[] = [
    //{key: '_id', title: '#'},
    {key: 'name', title: 'Előadó neve'},
    {key: 'school', title: 'Előadó iskolája'},
    {key: 'presentationName', title: 'Előadás címe'},
    {key: 'szekcio', title: 'Szekció neve'},
  ];

  iskolaTableColumns: INgxTableColumn[] = [
    //{key: '_id', title: '#'},
    {key: 'name', title: 'Iskola neve'},
    {key: 'address', title: 'Iskola címe'},
  ];

  szekcioTableColumns: INgxTableColumn[] = [
    //{key: '_id', title: '#'},
    {key: 'sectionName', title: 'Szekció neve'},
    {key: 'section_leader', title: 'Szekcióvezető'}
  ];

  szallasTableColumns: INgxTableColumn[] = [
    //{key: '_id', title: '#'},
    {key: 'name', title: 'Szállás neve'},
    {key: 'address', title: 'Szállás címe'}
  ];

  resztvevoTableColumns: INgxTableColumn[] = [
    //{key: '_id', title: '#'},
    {key: 'name', title: 'Résztvevő neve'},
    {key: 'school', title: 'Résztvevő iskolája'},
    {key: 'presentation', title: 'Előadást tart'}
  ];

  constructor() { }

};
