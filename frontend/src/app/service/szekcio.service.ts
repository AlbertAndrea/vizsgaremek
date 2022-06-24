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

  getOne(id: string): Observable<Szekcio> {
    return this.http.get<Szekcio>(`${this.apiUrl}szekciok/${id}`);
  }

  update(entity: Szekcio): Observable<Szekcio> {
    return this.http.patch<Szekcio>(
        `${this.apiUrl}szekciok/${entity._id}`,
        entity,
    );
  }

  delete(id: string): Observable<Szekcio> {
    console.log(id);
    return this.http.delete<Szekcio>(`${this.apiUrl}szekciok/${id}`)
  }

  create(entity: Szekcio): Observable<Szekcio> {
    return this.http.post<Szekcio>(
      `${this.apiUrl}szekciok`,
      entity
    );
  }

}
