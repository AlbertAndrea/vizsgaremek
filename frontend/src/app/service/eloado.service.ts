import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Eloado } from '../model/eloado';

@Injectable({
  providedIn: 'root'
})
export class EloadoService {

list: Eloado[] = [];

apiUrl = environment.apiUrl;

  constructor(
    private http: HttpClient,
  ) { }

  getAll(): Observable<Eloado[]> {
    return this.http.get<Eloado[]>(`${this.apiUrl}eloadok`);
  }

  getOne(id: string): Observable<Eloado> {
    return this.http.get<Eloado>(`${this.apiUrl}eloadok/${id}`);
  }

  update(entity: Eloado): Observable<Eloado> {
    return this.http.patch<Eloado>(
        `${this.apiUrl}eloadok/${entity._id}`,
        entity,
    );
  }

  delete(id: string): Observable<Eloado> {
    console.log(id);
    return this.http.delete<Eloado>(`${this.apiUrl}eloadok/${id}`)
  }

   create(entity: Eloado): Observable<Eloado> {
     return this.http.post<Eloado>(
       `${this.apiUrl}eloadok`,
       entity
     );
   }


}
