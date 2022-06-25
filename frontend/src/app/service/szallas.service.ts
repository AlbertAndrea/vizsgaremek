import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Szallas } from '../model/szallas';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class SzallasService extends BaseService<Szallas> {

  constructor(
    http: HttpClient,
  ) {
    super(http, 'szallas');
  }
}
