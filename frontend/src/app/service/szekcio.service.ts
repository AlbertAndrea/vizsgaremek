import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Szekcio } from '../model/szekcio';

@Injectable({
  providedIn: 'root'
})
export class SzekcioService {

  list: Szekcio[] = []

  apiUrl = environment.apiUrl;

  constructor(
    private http: HttpClient,
  ) { }

  getAll(): Observable<Szekcio[]> {
    return this.http.get<Szekcio[]>(`${this.apiUrl}szekciok`);
  }
}
