import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Szallas } from '../model/szallas';

@Injectable({
  providedIn: 'root'
})
export class SzallasService {
  list: Szallas[] = []

  apiUrl = environment.apiUrl;

  constructor(
    private http: HttpClient,
  ) { }

  getAll(): Observable<Szallas[]> {
    return this.http.get<Szallas[]>(`${this.apiUrl}szallasok`);
  }

  getOne(id: string): Observable<Szallas> {
    return this.http.get<Szallas>(`${this.apiUrl}szallasok/${id}`);
  }

  update(entity: Szallas): Observable<Szallas> {
    return this.http.patch<Szallas>(
        `${this.apiUrl}szallasok/${entity._id}`,
        entity,
    );
  }

  delete(id: string): Observable<Szallas> {
    console.log(id);
    return this.http.delete<Szallas>(`${this.apiUrl}szallasok/${id}`)
  }

}
