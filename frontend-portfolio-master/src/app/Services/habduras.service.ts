import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Habduras } from '../model/habduras';

@Injectable({
  providedIn: 'root'
})
export class HabdurasService {
  URL = 'http://localhost:8080/habduras/';

  constructor(private httpClient : HttpClient) { }

  public lista(): Observable<Habduras[]>{
    return this.httpClient.get<Habduras[]>(this.URL + 'lista');
  }

  public detail(id: number): Observable<Habduras>{
    return this.httpClient.get<Habduras>(this.URL + `detail/${id}`);
  }

  public save(habduras: Habduras): Observable<any>{
    return this.httpClient.post<any>(this.URL + 'create', habduras);
  }

  public update(id: number, habduras: Habduras): Observable<any>{
    return this.httpClient.put<any>(this.URL + `update/${id}`, habduras);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.URL + `delete/${id}`);
  }
}
