import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Iskola } from '../model/iskola';

@Injectable({
  providedIn: 'root'
})
export class IskolaService {

  list: Iskola[] = []

  apiUrl = environment.apiUrl;

  constructor(
    private http: HttpClient,
  ) { }

  getAll(): Observable<Iskola[]> {
    return this.http.get<Iskola[]>(`${this.apiUrl}iskolak`);
  }

  getOne(id: string): Observable<Iskola> {
    return this.http.get<Iskola>(`${this.apiUrl}iskolak/${id}`);
  }

  update(entity: Iskola): Observable<Iskola> {
    const id = entity._id;
    delete entity._id;
    return this.http.patch<Iskola>(
        `${this.apiUrl}iskolak/${id}`,
        entity,
    );
  }
}
