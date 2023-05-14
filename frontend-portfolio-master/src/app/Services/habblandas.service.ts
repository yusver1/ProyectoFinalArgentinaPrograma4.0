import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Habblandas } from '../model/habblandas';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HabblandasService {

  URL = 'http://localhost:8080/habblandas/';

  constructor(private httpClient : HttpClient) { }

  public lista(): Observable<Habblandas[]>{
    return this.httpClient.get<Habblandas[]>(this.URL + 'lista');
  }

  public detail(id: number): Observable<Habblandas>{
    return this.httpClient.get<Habblandas>(this.URL + `detail/${id}`);
  }

  public save(habblandas: Habblandas): Observable<any>{
    return this.httpClient.post<any>(this.URL + 'create', habblandas);
  }

  public update(id: number, habblandas: Habblandas): Observable<any>{
    return this.httpClient.put<any>(this.URL + `update/${id}`, habblandas);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.URL + `delete/${id}`);
  }

}

