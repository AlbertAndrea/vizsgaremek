import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Resztvevo } from '../model/resztvevo';

@Injectable({
  providedIn: 'root'
})

export class ResztvevoService {

  list: Resztvevo[] = [];

  apiUrl = environment.apiUrl;

  constructor(
    private http: HttpClient,
  ) { }

  getAll(): Observable<Resztvevo[]> {
    return this.http.get<Resztvevo[]>(`${this.apiUrl}resztvevok`);
  }

  getOne(id: string): Observable<Resztvevo> {
    return this.http.get<Resztvevo>(`${this.apiUrl}resztvevok/${id}`);
  }

  update(entity: Resztvevo): Observable<Resztvevo> {
    return this.http.patch<Resztvevo>(
        `${this.apiUrl}resztvevok/${entity._id}`,
        entity,
    );
  }

  delete(id: string): Observable<Resztvevo> {
    console.log(id);
    return this.http.delete<Resztvevo>(`${this.apiUrl}resztvevok/${id}`)
  }

  create(entity: Resztvevo): Observable<Resztvevo> {
    return this.http.post<Resztvevo>(
      `${this.apiUrl}resztvevok`,
      entity
    );
  }

}
