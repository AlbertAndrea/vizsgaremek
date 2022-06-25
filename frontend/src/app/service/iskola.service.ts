import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Iskola } from '../model/iskola';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class IskolaService extends BaseService<Iskola> {

  constructor(
    http: HttpClient,
  ) {
    super(http, 'iskola');
  }
}
