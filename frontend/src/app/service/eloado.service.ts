import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Eloado } from '../model/eloado';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class EloadoService extends BaseService<Eloado> {

  constructor(
    http: HttpClient,
  ) {
    super(http, 'eloadok');
  }
}
