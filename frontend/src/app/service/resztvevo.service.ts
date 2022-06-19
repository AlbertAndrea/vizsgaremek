import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Resztvevo } from '../model/resztvevo';

@Injectable({
  providedIn: 'root'
})

export class ResztvevoService {

  list: Resztvevo[] = []

  apiUrl = environment.apiUrl;

  constructor(
    private http: HttpClient,
  ) { }

  getAll(): Observable<Resztvevo[]> {
    return this.http.get<Resztvevo[]>(`${this.apiUrl}resztvevok`);
  }
}
