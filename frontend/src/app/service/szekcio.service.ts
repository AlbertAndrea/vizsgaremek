import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Szekcio } from '../model/szekcio';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class SzekcioService extends BaseService<Szekcio> {

  constructor(
    http: HttpClient,
  ) {
    super(http, 'szekciok');
  }
}
