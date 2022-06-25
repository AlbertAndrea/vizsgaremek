import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Resztvevo } from '../model/resztvevo';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})

export class ResztvevoService extends BaseService<Resztvevo> {

  constructor(
    http: HttpClient,
  ) {
    super(http, 'resztvevo');
  }
}
