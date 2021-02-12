import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IDetailDto, IListDto, IVersionDto } from './model';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private baseUrl = 'http://localhost:4000/api';

  constructor(private http: HttpClient) {}

  public getLists(): Observable<IListDto[]> {
    return this.http.get<IListDto[]>(`${this.baseUrl}/lists`);
  }

  public getVersions(listId?: number): Observable<IVersionDto[]> {
    let params = new HttpParams();

    if (listId != undefined) {
      params.set('listId', listId.toString());
    }

    return this.http.get<IVersionDto[]>(`${this.baseUrl}/versions`, {
      params,
    });
  }

  public getDetails(versionId?: number): Observable<IDetailDto[]> {
    let params = new HttpParams();

    if (versionId != undefined) {
      params = params.set('versionId', versionId.toString());
    }

    return this.http.get<IDetailDto[]>(`${this.baseUrl}/details`, { params });
  }
}
